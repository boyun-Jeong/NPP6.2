package com.base.sr.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.dao.SR0010DDAO;
import com.base.sr.dao.SR1000DDAO;
import com.base.sr.dao.SR2000DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR0010DService;
import com.base.sr.service.SR1000DService;
import com.base.sr.service.SR2000DService;

/**
 * 
 * <pre>
 * @title
 * - SUBPRJ_SR요청 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  김지수
 * @since   2024. 08. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 23.	김지수		최초작성
 */
@Service
public class SR2000DServiceImpl implements SR2000DService {

	private Logger log = LoggerFactory.getLogger(SR2000DServiceImpl.class);

	@Inject
	private Provider<GlobalReqInfo> reqInfo;
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR2000DDAO sr2000dDao;
	@Autowired
	private SR0000DDAO sr0000dDao;
	@Autowired
	private SR1000DDAO sr1000dDao;
	@Autowired
	private SR0010DDAO sr0010dDao;
	@Autowired
	private SR1000DService sr1000dSvc;
	@Autowired
	private SR0010DService sr0010dSvc;	
	@Autowired
	private SR0010DServiceImpl sr0010dSvcImpl;
	@Autowired
	private SRCommDAO srCommDao;

	@Autowired
	private SRCommServiceImpl srCommServiceImpl;
	

//	/**
//	 * 서브프로젝트 구성원 최초 목록 조회
//	 */
//	public List<Map<String, Object>> selectInitSrMaSubMbr(Map<String, Object> dsCond) {
//		List<Map<String, Object>> result = sr2000dDao.selectInitSrMaSubMbr(dsCond);
//		return result;
//	}
	
	/**
	 * 서브프로젝트 상태 업데이트
	 * @param dsData
	 * @return
	 * @throws Exception 
	 */
	@Transactional
	public void updateStatSrMaPrjSub(Map<String, Object> dsCond) throws Exception {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
		String mapWfProcCd = StringUtil.safe( dsCond.get("MAP_WF_PROC_CD") );
		String wfProcCd = StringUtil.safe( dsCond.get("WF_PROC_CD") );
		String wfFuncCd = StringUtil.safe( dsCond.get("WF_FUNC_CD") );

		log.debug("[SR2000DServiceImpl - updateStatSrMaPrjSub] wfProcCd:[" + wfProcCd + "] wfFuncCd:[" + wfFuncCd + "] mapWfProcCd:[" + mapWfProcCd +"]");
		
		if(mapWfProcCd.isEmpty()) {
			sc.get().setScSessionMsg("[서브프로젝트 진행 불가] 매핑 코드가 존재하지 않습니다.");
			throw new Exception();
		}
		
		switch (mapWfProcCd) {

			case "S1000":										//등록
				//if( "WF_FUNC_00".equals(wfFuncCd) )
				dsCond.put("PRJ_STAT_CD", "1");
				sr2000dDao.updateSrMaPrj(dsCond);
				break;
				
			case "S1100":										//팀장결재
				//if ( "WF_FUNC_01".equals(wfFuncCd) ){
				dsCond.put("PRJ_STAT_CD", "2");
				dsCond.put("PROGRESS_PER", "10");
				//}
		    	sr2000dDao.updateSrMaPrj(dsCond);
				break;
	
			case "S4000":										//이행신청
				//if( "WF_FUNC_04".equals(wfFuncCd) )
				dsCond.put("PRJ_STAT_CD", "3");			
		    	sr2000dDao.updateSrMaPrj(dsCond);
				break;
				
			case "S4700":										//이행확정
				//if ( "WF_FUNC_01".equals(wfFuncCd) )
				dsCond.put("PRJ_STAT_CD", "4");
				sr2000dDao.updateSrMaPrj(dsCond);
				break;
				
			case "S7000":

				if( checkNormalD() )						// 정상-D 서브프로젝트 간소화, 종료.
				{
					finalprjSub(dsCond);

					log.debug("[SR2000DServiceImpl - updateStatSrMaPrjSub - 정상-D 서브프로젝트 간소화 : 마스터프로젝트 종료하고 PMO종료단계로 이동");
					//최종 서브프로젝트 종료시점에 정상종료 경우 자동으로 마스터프로젝트 종료하고 PMO종료단계로 이동함
					if( sr2000dDao.selectIngSubPrjCnt(dsCond) == 0 )
					{
						sr1000dSvc.procSrMasterWfProcCd(dsCond);
					}
				}
				break;
				
			case "S8000":	//S8000
				finalprjSub(dsCond);
				break;	
		}
		
	}
	
	/**
	 * 서브프로젝트 정상 종료
	 * @param dsData
	 * @return
	 * @throws Exception 
	 */
	@Transactional
	public void finalprjSub(Map<String, Object> dsCond) {

		dsCond.put("PRJ_STAT_CD", "99");
		dsCond.put("PROGRESS_PER", "100");
    	sr2000dDao.updateSrMaPrj(dsCond);
    	dsCond.put("CHG_STT", '9' );
    	sr2000dDao.updateViPmsChgPfmc(dsCond);

    	
    	//TODO : 프로젝트 종료요청서 있으면 종결처리
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getRefReqId());
		List<Map<String, Object>> result = selectSrBaseInfo_subPrj(condMap);
		if(result.size() > 0)
		{
			for (int i = 0; i < result.size(); i++) {
		
				String reqId = (StringUtil.safe(result.get(i).get("REQ_ID")));
				String reqStatCd = (StringUtil.safe(result.get(i).get("REQ_STAT_CD")));
				String reqTmplatId = (StringUtil.safe(result.get(i).get("REQ_TMPLAT_ID")));
				
				if(reqTmplatId.equals("WFT240108") ) {
					if("RQST00".equals(reqStatCd) || "RQST01".equals(reqStatCd) || "RQST11".equals(reqStatCd)){
						//종료하기!
						System.err.println("폐기 또는 반려로 종결처리 ->> 사유를 \"서브프로젝트 종료에 의한~~\" 처럼 코멘트를 남기면 될거 같습니다."+ reqId);
					}
				}
			}
		}
	}
	
	
	/**
	 * 반려 시 서브프로젝트 상태 업데이트
	 * @param dsData
	 * @return
	 * @throws Exception 
	 */
	@Transactional
	public void rtrnStatSrMaPrjSub(Map<String, Object> dsCond) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
		String wfProcCd = StringUtil.safe( dsCond.get("WF_PROC_CD") );
		String wfFuncCd = StringUtil.safe( dsCond.get("WF_FUNC_CD") );
		log.debug("[SR2000DServiceImpl - rtrnStatSrMaPrjSub] wfProcCd:[" + wfProcCd + "] wfFuncCd:[" + wfFuncCd + "]");
		
		dsCond.put("PRJ_STAT_CD", "2");
		
    	sr2000dDao.updateSrMaPrj(dsCond);
	}
	
	/**
	 * 프로젝트 진행률 변경  
	 * @param dsData
	 * @return
	 */
	@Transactional
	public void updateSrMaPrj(Map<String, Object> dsCond) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
    	sr2000dDao.updateSrMaPrj(dsCond);
	}
	
	/**
	 * 마스터 프로젝트 진행률 평균 반영  
	 * @param dsData
	 * @return
	 */
	@Transactional
	public void updateAvgProgressPer(Map<String, Object> dsCond) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
    	sr2000dDao.updateAvgProgressPer(dsCond);
	}
	
	/**
	 * 서브프로젝트 구성원 변경이력 조회
	 */
	public List<Map<String, Object>> selectSrMaPrjMberHistList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2000dDao.selectSrMaPrjMberHistList(dsCond);
		return result;
	}
	
	/**
	 * 설계단계 > 개발단계 시 테스트케이스 저장
	 */
	@Transactional
	public void savePrjTsDtlRstl (Map<String, Object> dsCond) {

		sr2000dDao.clearSrMaPrjTsDtlRslt(dsCond);

		List<Map<String, Object>> dsData = sr2000dDao.selectSrMaPrjTsDtl(dsCond);
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
			String userId 	= sc.get().getScUserId();
			String lmpId 	= sc.get().getScLmpId();
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	sr2000dDao.insertSrMaPrjTsDtlRslt(rowData);
    	}
	}

	/**
	 * 시나리오 구성원 관리
	 * @param dsData
	 */
	@Transactional
	public void saveSrMaPrjTsDtlMbr(List<Map<String, Object>> dsData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> dsCond = new HashMap<String, Object>();
		dsCond.put("REQ_ID",  StringUtil.safe(dsData.get(0).get("REQ_ID")) );

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
			int roleCd = StringUtil.safeInt(rowData.get("ROLE_CD"));

			if( roleCd == 11 || roleCd == 32 || roleCd == 3 || roleCd == 202 )
			{
				String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

				rowData.put("SCENR_NM", rowData.get("MBR_USER_NM"));
				rowData.put("LMID", userId);
				rowData.put("LMPID", lmpId);
				rowData.put("SCENR_LV", 1);
	    		
				if("D".equals(rowFlag)) 
					sr2000dDao.removeSrMaPrjTsDtl(rowData);
				else 
					sr2000dDao.mergeSrMaPrjTsDtl(rowData);

			}
		}
	}

	/**
	 * 시나리오 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjTsDtl(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2000dDao.selectSrMaPrjTsDtl(dsCond);
		return result;
	}
	
	/**
	 * 시나리오 저장
	 * @param dsData
	 */
	@Transactional
	public void saveSrMaPrjTsDtl(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
    		
	    	if("I".equals(rowFlag)) {
	    		sr2000dDao.insertSrMaPrjTsDtl(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr2000dDao.updateSrMaPrjTsDtl(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr2000dDao.removeSrMaPrjTsDtl(rowData);
	    	}
		}
	}
	
	/**
	 * 이행신청 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaRelsReq(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2000dDao.selectSrMaRelsReq(dsCond);
		return result;
	}
	
	/**
	 * 이행신청 저장
	 * @param dsData
	 */
	@Transactional
	public void saveSrMaRelsReq(Map<String, Object> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
    	String rowFlag = StringUtil.safe(dsData.get("ROWFLAG"));
    	dsData.put("LMID", userId);
    	dsData.put("LMPID", lmpId);
		
    	if("I".equals(rowFlag)) {
    		sr2000dDao.insertSrMaRelsReq(dsData);

    	}else if("U".equals(rowFlag)) {
    		sr2000dDao.updateSrMaRelsReq(dsData);

    	}else if("D".equals(rowFlag)) {
    		sr2000dDao.deleteSrMaRelsReq(dsData);
    	}
	}
	
	/**
	 * 이행 후 점검 체크리스트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaRelschkDtl(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2000dDao.selectSrMaRelschkDtl(dsCond);
		return result;
	}
	
	/**
	 * 이행 후 점검 체크리스트 저장
	 * @param dsData
	 */
	@Transactional
	public void saveSrMaRelschkDtl(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			rowData.put("LMID", userId);
			rowData.put("LMPID", lmpId);
			
			if("I".equals(rowFlag)) {
				sr2000dDao.insertSrMaRelschkDtl(rowData);
				
			}else if("U".equals(rowFlag)) {
				sr2000dDao.updateSrMaRelschkDtl(rowData);
				
			}else if("D".equals(rowFlag)) {
				sr2000dDao.deleteSrMaRelschkDtl(rowData);
			}
		}
	}
	

	/**
	 * SR요청 담당자 등록 (PL,IT,BA,REQ)
	 * @param dsCond
	 * @return
	 */
	public void updateSrCommReqCgerDt(Map<String, Object> dsCond) throws Exception {
		
		
		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));
		String nextWfProcCd = StringUtil.safe(dsCond.get("NEXT_WF_PROC_CD"));
		String wfProcCd = StringUtil.safe(dsCond.get("WF_PROC_CD"));
		
		log.debug("[SR2000DServiceImpl - updateSrCommReqCgerDt] wfProcCd:[" + wfProcCd + "] nextWfProcCd:[" + nextWfProcCd + "]");
		
		List<Map<String, Object>> data = regCgerPrjSub_ALL(dsCond);
		srCommServiceImpl.insertSrCommReqCgerDt(reqId, wfProcCd, data);
	}
	
	/**
	 * SR요청 결재자 등록 (이행신청 시 구성원 결재자 업데이트)
	 * @param dsCond
	 * @return
	 */
	public void batchAppvBA(Map<String, Object> dsCond) throws Exception {
		
		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));
		String reqTmplatId = StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer = StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));
		String wfProcCd = StringUtil.safe(dsCond.get("WF_PROC_CD"));
		
		Map<String, Object> condMap = new HashedMap<String, Object>();

		condMap = new HashedMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		condMap.put("REQ_TMPLAT_VER", reqTmplatVer);
		condMap.put("REQ_ID", reqId);
		condMap.put("WF_PROC_CD", wfProcCd);
		condMap.put("WF_FUNC_CD", "WF_FUNC_04");
		List<Map<String, Object>> appvUserList = sr0010dSvcImpl.getProcAppvUserList(condMap, false);

//		if(appvUserList != null) {	log.debug("appvUserList.size()===============>" + appvUserList.size());	}
		
//		log.debug("[SR2000DServiceImpl - updateWfApprovalMt] wfProcCd:[" + wfProcCd + "] nextWfProcCd:[" + nextWfProcCd + "]");
		log.debug("[SR2000D] reqInfo.get().getWfProcCd()--->" + reqInfo.get().getWfProcCd());
		sr0010dSvc.save01(appvUserList, null);
	}
	
	/**
	 * SR요청 담당자 조회 (PL,IT,BA,REQ)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> regCgerPrjSub_ALL(Map<String, Object> dsCond) throws Exception {
		
		dsCond.put("ROLE", "ALL");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub(dsCond);
		return result;
	}
	public List<Map<String, Object>> regCgerPrjSub_PL(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "PL");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub(dsCond);
		return result;
	
	}
	
	public List<Map<String, Object>> regCgerPrjSub_PLteamLeader(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "PL");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub_TL(dsCond);
		return result;
	
	}
	
	public List<Map<String, Object>> regCgerPrjSub_IT(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "IT");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub(dsCond);
		return result;
	
	}
	public List<Map<String, Object>> regCgerPrjSub_BA(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "BA");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub(dsCond);
		return result;
	
	}
	public List<Map<String, Object>> regCgerPrjSub_REQ(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "REQ");
		List<Map<String, Object>> result = sr2000dDao.selectCgerSrMaPrjSub(dsCond);
		return result;
	
	}

	/**
	 * SR요청 결재자 조회 구성원,팀장 병렬결재
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprsubPrjPair(Map<String, Object> dsCond) throws Exception {
						
		List<Map<String, Object>> allList = new ArrayList<Map<String,Object>>();
		
		List<Map<String, Object>> result = sr2000dDao.selectApprsubPrjRole(dsCond);		//구성원의 USER_ID
		
		for (int i = 0; i < result.size(); i++) {
			
			Map<String, Object> rowData = result.get(i);
			rowData.put("APPR_GRP_SEQ", (i+1));
			rowData.put("APPR_SEQ", "1");
			rowData.put("DIRECT_YN", "N");
			
			if("BA".equals(StringUtil.safe(dsCond.get("ROLE"))))			rowData.put("ROLE_CD", "32");
			else if("REQ".equals(StringUtil.safe(dsCond.get("ROLE"))))		rowData.put("ROLE_CD", "11");
			else if("IT".equals(StringUtil.safe(dsCond.get("ROLE"))))		rowData.put("ROLE_CD", "202");
			
			allList.add(rowData);														//결재선에 구성원 add

			String gubun = sr0010dSvc.selectUserCheck(StringUtil.safe(rowData.get("USER_ID")));

			String apprProcDivCd = "02";
			//현재 구성원이 팀장이거나 본부장인 경우
			if("T".equals(gubun) || "B".equals(gubun)) {
				apprProcDivCd = "04";	//본부장
			}
			
			List<Map<String, Object>> selAppv = sr0010dSvc.selectApprListByCode(StringUtil.safe(rowData.get("USER_ID")), apprProcDivCd);
			
			if(selAppv.size() == 1) {
				Map<String, Object> resMap = new HashedMap<String, Object>();
				resMap.put("USER_ID", selAppv.get(0).get("USER_ID"));
				resMap.put("MNG_USER_DIV", selAppv.get(0).get("MNG_USER_DIV"));
				resMap.put("DRAFTER_ID", selAppv.get(0).get("DRAFTER_ID"));
				resMap.put("APPR_GRP_SEQ", (i+1));
				resMap.put("APPR_SEQ", "2");
				resMap.put("DIRECT_YN", "N");

				if("BA".equals(StringUtil.safe(dsCond.get("ROLE"))))			resMap.put("ROLE_CD", "32");
				else if("REQ".equals(StringUtil.safe(dsCond.get("ROLE"))))		resMap.put("ROLE_CD", "11");
				else if("IT".equals(StringUtil.safe(dsCond.get("ROLE"))))		resMap.put("ROLE_CD", "202");
				
				allList.add(resMap);														//결재선에 팀장 add

			}else {
				//오류
				throw new Exception("결재자 조회 (구성원의 팀장 조회)시 오류가 발생했습니다.");
			}
		}
		
		return allList;
	}
	
	public List<Map<String, Object>> apprBaPair(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "BA");
		
		List<Map<String, Object>> result = selectApprsubPrjPair(dsCond);
		return result;
	}
	public List<Map<String, Object>> apprReqPair(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "REQ");
		
		List<Map<String, Object>> result = selectApprsubPrjPair(dsCond);
		return result;
	}
	public List<Map<String, Object>> apprITPair(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "IT");
		
		List<Map<String, Object>> result = selectApprsubPrjPair(dsCond);
		return result;
	}
	
	/**
	 * SR요청 결재자 조회 (PL,IT,BA,REQ & 팀장)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprSrMaSubPlTeamLeader(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "PL");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSubTeamLeader(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectApprSrMaSubReq(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "REQ");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSub(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectApprSrMaSubReqTeamLeader(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "REQ");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSubTeamLeader(dsCond);
		return result;
	}

	public List<Map<String, Object>> selectAppr_It(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "IT");
		List<Map<String, Object>> result = sr2000dDao.selectSrMaPrjSubIt(dsCond);
		return result;
	}
	
	
	/**
	 * 아래 삭제예정
	 ****/
	public List<Map<String, Object>> selectApprSrMaSubBa(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "BA");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSub(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectApprSrMaSubBaTeamLeader(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "BA");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSubTeamLeader(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectApprSrMaSubIt(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "IT");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSub(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectApprSrMaSubItTeamLeader(Map<String, Object> dsCond) throws Exception {
		dsCond.put("ROLE", "IT");
		
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSubTeamLeader(dsCond);
		return result;
	}
	/**
	 * 삭제예정
	 ****/
	
	
	/**
	 * SR요청 결재자 조회 (PM , PMO)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprSrMaPM(Map<String, Object> dsCond) throws Exception {
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaPrjPM(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> selectApprPMO(Map<String, Object> dsCond) throws Exception {
		List<Map<String, Object>> result = sr2000dDao.selectApprPMO(dsCond);
		return result;
	}
	
	
	/**
	 * 변경신청내용 조회
	 */
	public List<Map<String, Object>> selectSrBaseInfo_subPrj(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = sr2000dDao.selectSrBaseInfo_subPrj(dsCond);
		return result;
	}

	
	/**
	 * 서브 프로젝트 중단 요청
	 */

	public void checkSubReqRefList() throws Exception {

		String currReqTmplatId = StringUtil.safe(reqInfo.get().getReqTmplatId());

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getRefReqId());
		List<Map<String, Object>> result = selectSrBaseInfo_subPrj(condMap);
		
		for (int i = 0; i < result.size(); i++) {
	
			String reqId = (StringUtil.safe(result.get(i).get("REQ_ID")));
			String reqStatCd = (StringUtil.safe(result.get(i).get("REQ_STAT_CD")));
			String reqTmplatId = (StringUtil.safe(result.get(i).get("REQ_TMPLAT_ID")));
			
			if(!reqInfo.get().getReqId().equals(reqId))
			{
				if(reqTmplatId.equals(currReqTmplatId) ) {
					
					if ("RQST99".equals(reqStatCd) ){
						sc.get().setScSessionMsg("[서브프로젝트 중단 불가] 이미 종료된 프로젝트입니다.");
						throw new Exception();
						
					}else if("RQST00".equals(reqStatCd) || "RQST01".equals(reqStatCd) || "RQST11".equals(reqStatCd)){
						sc.get().setScSessionMsg("[서브프로젝트 중단 불가] 진행 중인 요청서가 있습니다.");
						throw new Exception();
					}
					
				}else{
					
					if("RQST00".equals(reqStatCd) || "RQST01".equals(reqStatCd) || "RQST11".equals(reqStatCd)){
						sc.get().setScSessionMsg("[서브프로젝트 중단 불가] 진행중인 연관 요청서가 있습니다.");
						throw new Exception();
					}
				}
			}
		}
	}
	
	public List<Map<String, Object>> selectSrMaPrj(Map<String, Object> dsCond) throws Exception {
		
		dsCond.put("REQ_ID", dsCond.get("REF_REQ_ID"));
		
		List<Map<String, Object>> result = sr2000dDao.selectSrMaPrj(dsCond);
		return result;
	}

	@Transactional
	public void stopSrMaPrj(Map<String, Object> dsCond) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
		dsCond.put("REQ_ID", StringUtil.safe( dsCond.get("REF_REQ_ID") ));
		String wfFuncCd = StringUtil.safe( dsCond.get("WF_FUNC_CD") );
		String reqStatCd = StringUtil.safe( dsCond.get("REQ_STAT_CD") );
		switch (wfFuncCd) {
		
		case "WF_FUNC_00":
			if("RQST01".equals(reqStatCd)) {
				dsCond.put("PRJ_STAT_CD","7");
				sr2000dDao.updateSrMaPrj(dsCond);
			}
			break;
			
		case "WF_FUNC_01":
			dsCond.put("PRJ_STAT_CD", "97");
			dsCond.put("PROGRESS_PER", "0");
			sr2000dDao.updateSrMaPrj(dsCond);

			dsCond.put("CHG_STT", "9" );
			sr2000dDao.updateViPmsChgPfmc(dsCond);

			dsCond.put("REQ_ID",StringUtil.safe(dsCond.get("REF_REQ_ID")) );
			sr0000dDao.updateStop(dsCond); //End(dsCond);
			
			dsCond.put("WF_PROC_CD", "WF_PROC_9999");
			srCommDao.mergeSrWfProc(dsCond);
			srCommDao.insertEmptyWfProcEnd(dsCond);
			
			dsCond.put("PROC_NUMBER", dsCond.get("REQ_ID"));
			dsCond.put("APPR_STAT_CD", "APST_98");
			dsCond.put("SRM_USER_ID", userId);
			dsCond.put("ORG_USER_ID", sc.get().getScOrgUserId());
	    	srCommDao.insertWfProcHist(dsCond);

			break;
		}
	}
	
	// 회수 or 반려 시
	@Transactional
	public void rtrnStopSrMaPrj(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		
		dsCond.put("REQ_ID", StringUtil.safe( dsCond.get("REF_REQ_ID") ));
		dsCond.put("PRJ_STAT_CD","2");
		sr2000dDao.updateSrMaPrj(dsCond);
	}
	
	/**
	 * 요청관리 프로젝트 종료일 변경 요청
	 */
	@Transactional
	public void chgDtSrMaPrj( Map<String, Object> dsCond) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("PRJ_END_DT", "chgDt");

		sr2000dDao.updateSrMaPrj(dsCond);
		sr2000dDao.chgDtSrMaPrj(dsCond);
	}
	
	/**
	 * BA 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkBaProc() throws Exception {
		
		String reqTmplatId = selectReqTmplatId();
		if(	"WFT240096".equals(reqTmplatId) ) return true;
		else return false;
	}
	/**
	 * 요청자 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkReqProc() throws Exception {
		// 마스터가 IT자체 WFT240097
		
		String reqTmplatId = selectReqTmplatId();
		if(	"WFT240097".equals(reqTmplatId) ) return true;
		else return false;
	}
	
	public String selectReqTmplatId() throws Exception {
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REF_REQ_ID", reqInfo.get().getRefReqId());
		return sr2000dDao.selectReqTmplatId(condMap);
	}
	
	/**
	 * IT담당자(연관) 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkItProc() throws Exception {
		
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		condMap.put("ROLE", "IT");
		List<Map<String, Object>> result = sr2000dDao.selectApprSrMaSub(condMap);
		if(	result.size() == 0 ) return true;
		else return false;
	}
	
	/**
	 * 보안담당자 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkSecCgerProc() throws Exception {
		
		Map<String, Object> condMap = new HashMap<>();
		
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		Map<String, Object> resultMap = sr2000dDao.selectSrMaPrj(condMap).get(0);
		
		condMap.put("REQ_ID", resultMap.get("MASTER_REQ_ID"));
		resultMap = sr1000dDao.selectMaBaItRevChklst(condMap);
		
		String secureGradeCd = StringUtil.safe(resultMap.get("SECURE_GRADE_CD"));
		
		if("1".equals(secureGradeCd)) {			//1등급 - 보안 담당자 결재 수행
			return false;
			
		}else if("".equals(secureGradeCd)) {	//등급없음
			throw new Exception("보안 담당자 단계 진행 여부 체크시 오류가 발생했습니다.");
			
		}else {									//2등급 - 보안 담당자 결재 SKIP
			return true;
		}
	}
	
	/**
	 * 간소화 여부 (정상D등급) 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkNormalD() throws Exception {
		
		Map<String, Object> condMap = new HashMap<>();

		condMap.put("REQ_ID", reqInfo.get().getRefReqId() );
		condMap.put("MASTER_SUB_DIV_CD", "M");
		Map<String, Object> resultMap = sr1000dDao.selectSrMaPrj(condMap).get(0);

		String dangerGradeCd = StringUtil.safe(resultMap.get("DANGER_GRADE_CD"));	//보안등급순번
		if("4".equals(dangerGradeCd)) {			//정상 D
			log.debug("[SR2000DServiceImpl - checkNormalD] dangerGradeCd:[" + dangerGradeCd + "] ");
			return true;
		}else if(dangerGradeCd != null && dangerGradeCd != "") {
			return false;
		}else {									//등급없음
			throw new Exception("정상 D등급 체크 시 오류 발생.");
		}
	}
	
	/**
	 * 요청관리 프로젝트 정보 형상관리에 전달
	 */
	@Transactional
	public void insertViPmsChgPfmc( Map<String, Object> dsCond) {
		sr2000dDao.insertViPmsChgPfmc(dsCond);
	}
	@Transactional
	public void updateViPmsChgPfmc( Map<String, Object> dsCond) {
		dsCond.put("CHG_STT", "9" );				// IT팀장결재 후 이행완료 
		sr2000dDao.updateViPmsChgPfmc(dsCond);
	}
	
	
	/**
	 * Rims 체크
	 * @throws Exception 
	 * 
	 * */
	// CMO 결재 단계 || CMO 결재 후 >> Rims 사용여부가 N이면 체크인 내역 확인
	public boolean rimsChk() throws Exception {

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		
		if(sr2000dDao.selectRimsMigrNendCnt(condMap) > 0)		//이행 중인 프로그램이 존재하면 결재 불가
		{
			sc.get().setScSessionMsg("Rims 이행 완료 후 진행 할 수 있습니다.");
			throw new Exception();
		}
		
		Map<String, Object> resultMap = sr2000dDao.selectSrMaRelsReq(condMap).get(0);

		if("N".equals(StringUtil.safe(resultMap.get("RIMS_YN")))) {
			
			//Rims 사용여부가 N이면 체크 searchRimsMigrCnt
			if(sr2000dDao.selectRimsMigrCnt(resultMap) > 0) {
				sc.get().setScSessionMsg("Rims 이행내역이 있습니다.\nRims사용여부를 확인하시기 바랍니다.");
				throw new Exception();
			}
			
		}else {
			//Rims 사용여부가 Y
			resultMap.put("CR_STATUS", "9");
			
			if(sr2000dDao.selectRimsMigrCnt(resultMap) == 0){
				sc.get().setScSessionMsg("Rims 이행 완료 후 진행 할 수 있습니다.");
				throw new Exception();
			}
			
		}
		
		return true;
	}
	
	/**
	 * 서브 프로젝트 중단 상태 확인
	 * @throws Exception
	 */
	public Integer selectExecCnt(Map<String, Object> dsCond) throws Exception {

		return sr2000dDao.selectExecCnt(dsCond);
	}
	/**
	 * 단계 건너뛰기 test
	 * @param dsCond
	 * @return
	 */
	public boolean test_true() {
		return true; //건뛰
	}
	public boolean test_false() {
		return false; //수행
	}
}