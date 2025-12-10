package com.base.sr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.nexacro.java.xapi.data.DataSet;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.dao.SR0010DDAO;
import com.base.sr.dao.SR1000DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR1000DService;

/**
 * 
 * <pre>
 * @title
 * - SR요청 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 07. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 22.	정보윤		최초작성
 */
@Service
public class SR1000DServiceImpl implements SR1000DService {

	private Logger log = LoggerFactory.getLogger(SR1000DServiceImpl.class);
	
	@Inject
	private Provider<GlobalReqInfo> reqInfo;

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0000DDAO sr0000Dao;
	
	@Autowired
	private SR1000DDAO sr1000dDao;

	@Autowired
	private SR0010DDAO sr0010dDao;

	@Autowired
	private SR2000DServiceImpl sr2000dSvc;

	@Autowired
	private SRCommDAO srCommDao;
	
	@Autowired
	private SRCommServiceImpl srCommSvcImpl;

	/**
	 * SR요청 BA접수정보 조회
	 */
	public Map<String, Object> selectMaBaItRev(Map<String, Object> dsCond) {
		Map<String, Object> result = sr1000dDao.selectMaBaItRev(dsCond);
		return result;
	}

	/**
	 * SR요청 BA-IT 체크리스트 정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectMaBaItRevChklst(Map<String, Object> dsCond) {
		Map<String, Object> result = sr1000dDao.selectMaBaItRevChklst(dsCond);
		return result;
	}

	/**
	 * SR요청 BA-IT 접수정보 수정
	 * @param rowData
	 */
	public void modifyMaBaItRev(List<Map<String, Object>> dsData) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("WF_PROC_CD", reqInfo.get().getWfProcCd());

	    	if("I".equals(rowFlag)) {
	    		sr1000dDao.insertMaBaItRev(rowData);

	    	}else if("U".equals(rowFlag)) {    		
	    		sr1000dDao.modifyMaBaRev(rowData);
	    	}
//	    	else if("D".equals(rowFlag)) {
//	    		sr1000dDao.removeMaBaItRev(rowData);
//	    	}
		}

//		if("WF_PROC_2010".equals(reqInfo.get().getWfProcCd())) {	//BA접수
		
			//임시저장이 아니고 접수인 경우
//			if("N".equals(reqInfo.get().getTempSaveYn())) {

//				if("REV".equals(reqInfo.get().getSaveGubun())) {
		    		
					Map<String, Object> prMap = new HashMap<>();
					prMap.put("SAVE_GUBUN", reqInfo.get().getSaveGubun());
					prMap.put("REQ_ID", reqInfo.get().getReqId());
					//prMap.put("WF_PROC_CD", reqInfo.get().getWfProcCd());
					prMap.put("WF_PROC_CD", "WF_PROC_2010");
					prMap.put("USER_ID", userId);
					prMap.put("ORG_USER_ID", orgUserId);
	//				prMap.put("GUBUN_NM", "접수자");
					
					log.debug("BA_COMMENTS ::: " + dsData.get(0).get("BA_COMMENTS"));
					prMap.put("PROC_EXAM_OPIN", dsData.get(0).get("BA_COMMENTS"));
	
					prMap.put("CEGR_ID", "");
					prMap.put("LOGIN_ID", userId);
					prMap.put("LMPID", lmpId);
	
					String baUserId = StringUtil.safe(dsData.get(0).get("BA_USER_ID"));
					String baComments = StringUtil.safe(dsData.get(0).get("BA_COMMENTS"));
					String baCommentsOrg = StringUtil.safe(dsData.get(0).get("BA_COMMENTS_ORG"));

					if(!baUserId.equals(userId) || !baCommentsOrg.equals(baComments)) {

						srCommDao.callPrSrRevProc(prMap);					
	
						int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
						String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));
		
						if(outRtnCd < 0) {
							log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");				
			    			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
		
						}else {
							log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");
						}
					}
//		    	}
//			}
//		}
	}
	
	/**
	 * SR요청 BA접수정보 저장
	 */
	@Transactional
	public void saveMaBaRev(List<Map<String, Object>> dsData) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("WF_PROC_CD", reqInfo.get().getWfProcCd());

	    	if("I".equals(rowFlag)) {
	    		sr1000dDao.insertMaBaItRev(rowData);

	    	}else if("U".equals(rowFlag)) {    		
	    		sr1000dDao.modifyMaBaRev(rowData);
	    	}
//	    	else if("D".equals(rowFlag)) {
//	    		sr1000dDao.removeMaBaItRev(rowData);
//	    	}
		}

//		if("WF_PROC_2010".equals(reqInfo.get().getWfProcCd())) {	//BA접수
			
			//임시저장이 아니고 접수인 경우
//			if("N".equals(reqInfo.get().getTempSaveYn())) {

//				if("REV".equals(reqInfo.get().getSaveGubun())) {
		    		
					Map<String, Object> prMap = new HashMap<>();
					prMap.put("SAVE_GUBUN", "Y".equals(reqInfo.get().getTempSaveYn()) ? "TEMP" : reqInfo.get().getSaveGubun());
					prMap.put("REQ_ID", reqInfo.get().getReqId());
					//prMap.put("WF_PROC_CD", reqInfo.get().getWfProcCd());
//					prMap.put("WF_PROC_CD", "WF_PROC_2010");
					prMap.put("WF_PROC_CD", dsData.get(0).get("SCRN_WF_PROC_CD"));
					prMap.put("USER_ID", userId);
					prMap.put("ORG_USER_ID", orgUserId);
	//				prMap.put("GUBUN_NM", "접수자");
					
					log.debug("BA_COMMENTS ::: " + dsData.get(0).get("BA_COMMENTS"));
					prMap.put("PROC_EXAM_OPIN", dsData.get(0).get("BA_COMMENTS"));
	
					prMap.put("CEGR_ID", "");
					prMap.put("LOGIN_ID", userId);
					prMap.put("LMPID", lmpId);
	
					String baUserId = StringUtil.safe(dsData.get(0).get("BA_USER_ID"));
					String baComments = StringUtil.safe(dsData.get(0).get("BA_COMMENTS"));
					String baCommentsOrg = StringUtil.safe(dsData.get(0).get("BA_COMMENTS_ORG"));

					if(!baUserId.equals(userId) || !baCommentsOrg.equals(baComments)) {

						srCommDao.callPrSrRevProc(prMap);					
	
						int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
						String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));
		
						if(outRtnCd < 0) {
							log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");				
			    			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
		
						}else {
							log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");
						}
					}
//		    	}
//			}
//		}
	}

	/**
	 * SR요청 IT담당자 정보 저장
	 */
	@Transactional
	public void saveMaItRev(List<Map<String, Object>> dsData) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("WF_PROC_CD", reqInfo.get().getWfProcCd());

	    	if("U".equals(rowFlag)) {    		
	    		sr1000dDao.modifyMaItRev(rowData);
	    	}

	    	if("N".equals(reqInfo.get().getTempSaveYn())) {

		    	if("REV".equals(reqInfo.get().getSaveGubun())) {
		    		
		    		String revDivCd = StringUtil.safe(rowData.get("REV_DIV_CD"));
		    		
		    		if("T".equals(revDivCd)) {
		    			if("WF_FUNC_04".equals(reqInfo.get().getWfFuncCd())) {	//담당자
		    				rowData.put("PM_USER_ID", sc.get().getScUserId());
		    				rowData.put("PM_USER_NM", sc.get().getScUserNm());
		    				sr1000dDao.modifyMaBaItRevPmUser(rowData);
		    			}
		    		}	
		    	}
	    	}
		}

//		if("WF_PROC_2020".equals(reqInfo.get().getWfProcCd())) {	//IT 담당자 접수
		
			//임시저장이 아니고 접수인 경우
//			if("N".equals(reqInfo.get().getTempSaveYn())) {
	
//				if("REV".equals(reqInfo.get().getSaveGubun())) {
		    		
					Map<String, Object> prMap = new HashMap<>();
					prMap.put("SAVE_GUBUN", "Y".equals(reqInfo.get().getTempSaveYn()) ? "TEMP" : reqInfo.get().getSaveGubun());
					prMap.put("REQ_ID", reqInfo.get().getReqId());
					//prMap.put("WF_PROC_CD", "WF_PROC_2020");
					prMap.put("WF_PROC_CD", dsData.get(0).get("SCRN_WF_PROC_CD"));
					prMap.put("USER_ID", userId);
					prMap.put("ORG_USER_ID", orgUserId);
	//				prMap.put("GUBUN_NM", "접수자");
					
					log.debug("IT_COMMENTS ::: " + dsData.get(0).get("IT_COMMENTS"));
					prMap.put("PROC_EXAM_OPIN", dsData.get(0).get("IT_COMMENTS"));
	
					prMap.put("CEGR_ID", "");
					prMap.put("LOGIN_ID", userId);
					prMap.put("LMPID", lmpId);
	
					String itUserId = StringUtil.safe(dsData.get(0).get("IT_USER_ID"));
					String itComments = StringUtil.safe(dsData.get(0).get("IT_COMMENTS"));
					String itCommentsOrg = StringUtil.safe(dsData.get(0).get("IT_COMMENTS_ORG"));

					if(!itUserId.equals(userId) || !itCommentsOrg.equals(itComments)) {
						
						srCommDao.callPrSrRevProc(prMap);
		
						int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
						String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));
		
						if(outRtnCd < 0) {
							log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");				
			    			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
		
						}else {
							log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			    			log.debug("[SR1000DServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");
						}
					}
//		    	}
//			}
//		}
	}

	/**
	 * BA담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateBaChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsBaChklstInfo.put("LMID", userId);
		dsBaChklstInfo.put("LMPID", lmpId);
    	
		sr1000dDao.updateBaChklstInfo(dsBaChklstInfo);
	}

	/**
	 * BA담당자 팀장 보안성심의 여부 평가 의견작성
	 * @param dsData
	 */
	public void updateBaTeamChklstInfo(Map<String, Object> dsChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsChklstInfo.put("BA_TEAM_CHKLST_CONTS", reqInfo.get().getOpinion());
		dsChklstInfo.put("LMID", userId);
		dsChklstInfo.put("LMPID", lmpId); 

		sr1000dDao.updateBaTeamChklstInfo(dsChklstInfo);
	}

	/**
	 * IT담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItCgerChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsBaChklstInfo.put("LMID", userId);
		dsBaChklstInfo.put("LMPID", lmpId); 

		sr1000dDao.updateItCgerChklstInfo(dsBaChklstInfo);
	}

	/**
	 * IT담당자 팀장 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItTeamChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();

		dsBaChklstInfo.put("LMID", userId);
		dsBaChklstInfo.put("LMPID", lmpId); 

		sr1000dDao.updateItTeamChklstInfo(dsBaChklstInfo);
	}

	/**
	 * IT담당자 등급 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItCgerGrdChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsBaChklstInfo.put("LMID", userId);
		dsBaChklstInfo.put("LMPID", lmpId); 

		sr1000dDao.updateItCgerGrdChklstInfo(dsBaChklstInfo);
	}

	/**
	 * IT담당자 팀장 등급 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItTeamGrdChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();

		dsBaChklstInfo.put("LMID", userId);
		dsBaChklstInfo.put("LMPID", lmpId); 

		sr1000dDao.updateItTeamGrdChklstInfo(dsBaChklstInfo);
	}

	/**
	 * IT담당자 보안성심의 평가 등록시 보안등급 UPDATE
	 * @param dsData
	 */
	public void updateSecureGradeCd(Map<String, Object> dsCond) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId); 

		sr1000dDao.updateSecureGradeCd(dsCond);
	}

	/**
	 * IT담당자 등급평가 등록시 위험등급 UPDATE
	 * @param dsData
	 */
	public void updateDangerGradeCd(Map<String, Object> dsCond) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId); 

		sr1000dDao.updateDangerGradeCd(dsCond);
	}

	/**
	 * 요청서 종결
	 * @param dsData
	 */
	@Transactional
	public void quit(Map<String, Object> rowData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
    	
    	sr0000Dao.updateStop(rowData);  // SR_BASE_INFO에  검토중단 업데이트
    	sr1000dDao.updateChkStopQuit(rowData); //SR_MA_REQ에 검토중단 업데이트
    	
    	rowData.put("PROC_NUMBER", rowData.get("REQ_ID"));
    	rowData.put("APPR_STAT_CD", "APST_98");
    	rowData.put("SRM_USER_ID", userId);
    	rowData.put("ORG_USER_ID", sc.get().getScOrgUserId());
    	srCommDao.insertWfProcHist(rowData);
    	
    	srCommDao.insertEmptyWfProcEnd(rowData); // 완료 전에 종료되면 중간 단계에 건너뛰기를 Y로 업데이트 해줘야 함
	}

	/**
	 * 마스터 프로젝트 등록
	 * @param rowData
	 */
	public void mergeMasterPrject() throws Exception {

		Map<String, Object> map = new HashMap<>();
		
		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		map.put("REQ_ID", reqInfo.get().getReqId());

		log.debug("mergeMasterPrject ===================> nextWFPROC_CD : " + reqInfo.get().getNextWfProcCd());
		
		boolean isMasterCre = false;	//마스터 프로젝트 생성 할지 여부
		
		if("WFT240009".equals(reqInfo.get().getReqTmplatId()) || "WFT240125".equals(reqInfo.get().getReqTmplatId())) {	//일반
			
			if("WF_PROC_2050".equals(reqInfo.get().getNextWfProcCd())) {	//다음단계가 프로젝트 수행 단계일 경우만
				isMasterCre = true;
			}
			
		}else if("WFT240096".equals(reqInfo.get().getReqTmplatId()) || "WFT240135".equals(reqInfo.get().getReqTmplatId()) ) {	//IT요청
			
			if("WF_PROC_2040".equals(reqInfo.get().getNextWfProcCd())) {	//다음단계가 프로젝트 수행 단계일 경우만
				isMasterCre = true;
			}

		}else if("WFT240097".equals(reqInfo.get().getReqTmplatId()) || "WFT240136".equals(reqInfo.get().getReqTmplatId())) {	//IT자체
			
			if("WF_PROC_2030".equals(reqInfo.get().getNextWfProcCd())) {	//다음단계가 프로젝트 수행 단계일 경우만
				isMasterCre = true;
			}
		}

		if(isMasterCre) {
			
			String subReqTmplatId = "";
			String wfProcCd = "";
			
			wfProcCd		= "WF_PROC_1000";
			
			if("WFT240009".equals(reqInfo.get().getReqTmplatId()))			subReqTmplatId	= "WFT240034";		//일반(정기)
			else if("WFT240125".equals(reqInfo.get().getReqTmplatId()))		subReqTmplatId	= "WFT240144";	//일반(비정기)
			
			else if("WFT240096".equals(reqInfo.get().getReqTmplatId())) 	subReqTmplatId	= "WFT240143";		//IT요청(정기)
			else if("WFT240135".equals(reqInfo.get().getReqTmplatId())) 	subReqTmplatId	= "WFT240147";//"WFT240134";		//IT자체(정기)
			
			else if("WFT240097".equals(reqInfo.get().getReqTmplatId())) 	subReqTmplatId	= "WFT240142";//"WFT240134";		//IT자체(정기)
			else if("WFT240136".equals(reqInfo.get().getReqTmplatId())) 	subReqTmplatId	= "WFT240146";//"WFT240134";		//IT자체(비정기)
			
			else subReqTmplatId	= "WFT240034";
			
			map.put("MASTER_SUB_DIV_CD", "M");
			map.put("SUB_REQ_TMPLAT_ID", subReqTmplatId);
			map.put("WF_PROC_CD", wfProcCd);
			map.put("LMID", userId);
			map.put("LMPID", lmpId);
			sr1000dDao.mergeMasterPrject(map);
			
			//sub 요청서에 대한 처리 시작
			String subReqId	= StringUtil.safe(map.get("SUB_REQ_ID"));
			
			log.debug("SUB_REQ_ID : " + subReqId);
			
			Map<String, Object> condMap = new HashMap<>();
			condMap.put("REQ_ID", subReqId);
			List<Map<String, Object>> prjMberList = sr1000dDao.selectSrMaPrjMber(condMap);
			sr2000dSvc.saveSrMaPrjTsDtlMbr(prjMberList);

			Map<String, Object> baseInfo = sr0000Dao.select01(condMap);
			
			String reqTmplatId = StringUtil.safe(baseInfo.get("REQ_TMPLAT_ID"));
			String reqTmplatVer = StringUtil.safe(baseInfo.get("REQ_TMPLAT_VER"));
			
			DataSet dsFormInfo = new DataSet("dsFormInfo");
			
			dsFormInfo.setChangeStructureWithData(true);			
			dsFormInfo.addColumn("REQ_ID", 1);
			dsFormInfo.addColumn("REQ_TMPLAT_ID", 1);
			dsFormInfo.addColumn("REQ_TMPLAT_VER", 1);
			dsFormInfo.addColumn("WF_PROC_CD", 1);
			dsFormInfo.addColumn("NEXT_WF_PROC_CD", 1);
			dsFormInfo.addColumn("NEXT_WF_FUNC_CD", 1);
			dsFormInfo.setChangeStructureWithData(false);
			
			dsFormInfo.newRow();
			dsFormInfo.set(0, "REQ_ID", subReqId);
			dsFormInfo.set(0, "REQ_TMPLAT_ID", reqTmplatId);
			dsFormInfo.set(0, "REQ_TMPLAT_VER", reqTmplatVer);
			dsFormInfo.set(0, "WF_PROC_CD", wfProcCd);

			//srCommSvcImpl.setReqInfo(reqInfo, dsFormInfo);

			String[] nextWfProcFuncCd = null;

			log.debug("resultSuccRIMS() subReqreqId ::::::::::::::::::::::::::::::::::::::::::::: " + subReqId);
			log.debug("resultSuccRIMS() reqTmplatId ::::::::::::::::::::::::::::::::::::::::::::: " + reqTmplatId);
			log.debug("resultSuccRIMS() wfProcCd ::::::::::::::::::::::::::::::::::::::::::::: " + wfProcCd);
			
			nextWfProcFuncCd = srCommSvcImpl.getNextWfProcFuncCd(
					StringUtil.safe(subReqId),
					StringUtil.safe(reqTmplatId),
					StringUtil.safe("APV"),
					StringUtil.safe(wfProcCd),
					StringUtil.safe("Y")
			);
			
			dsFormInfo.set(0, "NEXT_WF_PROC_CD", nextWfProcFuncCd[0]);
			dsFormInfo.set(0, "NEXT_WF_FUNC_CD", nextWfProcFuncCd[1]);

			//1. 접수 내역 등록
			Map<String, Object> prMap = new HashMap<>();
//			prMap.put("SAVE_GUBUN", "REV");
//			prMap.put("REQ_ID", subReqId);
//			prMap.put("WF_PROC_CD", wfProcCd);
//			prMap.put("USER_ID", "RIMS");
//			prMap.put("ORG_USER_ID", "RIMS");
//			prMap.put("GUBUN_NM", "RIMS처리");
//			prMap.put("PROC_EXAM_OPIN", "BATCH");
//			prMap.put("LOGIN_ID", "RIMS");
//			prMap.put("LMPID", "RIMS");
	//
//			srCommSvcImpl.callPrSrRevProc(prMap);

			//2. 다음단계 진행
			prMap = new HashMap<>();
			prMap.put("SAVE_GUBUN", "APV");
			prMap.put("REQ_ID", subReqId);
			prMap.put("USER_ID", userId);
			prMap.put("ORG_USER_ID", orgUserId);
			prMap.put("WF_PROC_CD", wfProcCd);
			prMap.put("NEXT_WF_PROC_CD", nextWfProcFuncCd[0]);
			prMap.put("NEXT_WF_FUNC_CD", nextWfProcFuncCd[1]);
			prMap.put("LMPID", "RIMS");

			srCommSvcImpl.callPrSrReqWfProcNext(prMap);

			int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
			String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));

			if(outRtnCd < 0) {
				log.debug("[SRCommServiceImpl]-save [ERROR] [REV] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
				log.debug("[SRCommServiceImpl]-save [ERROR] [REV] callPrSrReqWfProcNext OUT_RTN_MSG:[" + outRtnMsg + "]");				
				throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");

			}else {
				log.debug("[SRCommServiceImpl]-save [SUCC] [REV] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
				log.debug("[SRCommServiceImpl]-save [SUCC] [REV] callPrSrReqWfProcNext OUT_RTN_MSG:[" + outRtnMsg + "]");
			}
			 
//			condMap = new HashMap<>();
//			condMap.put("REQ_TMPLAT_ID", reqTmplatId);
//			WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회
//			List<Map<String, Object>> wfReqTmplatProcDt = wf0120wDao.selectProc(condMap);

			//srCommSvcImpl.procReqCgerDt(dsFormInfo, wfReqTmplatProcDt, nextWfProcFuncCd[0], nextWfProcFuncCd[1]);
			srCommSvcImpl.procReqCgerDt(dsFormInfo.getRowToMap(0));
		}
	}

	/**
	 * 서브 프로젝트 등록
	 * @param rowData
	 */
	public void newSubPrj(Map<String, Object> dsCond) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();
		String masterReqTmplatId = StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String subReqTmplatId = "";
		String wfProcCd = "";
		
		wfProcCd		= "WF_PROC_1000";
		
		if("WFT240009".equals(masterReqTmplatId))					subReqTmplatId	= "WFT240034";						//일반(정기)
		else if("WFT240125".equals(masterReqTmplatId))				subReqTmplatId	= "WFT240144";						//일반(비정기)
		
		else if("WFT240096".equals(reqInfo.get().getReqTmplatId())) subReqTmplatId	= "WFT240143 ";						//IT요청(정기)
		else if("WFT240135".equals(reqInfo.get().getReqTmplatId())) subReqTmplatId	= "WFT240147 ";						//IT요청(비정기)
		
		else if("WFT240097".equals(masterReqTmplatId)) 				subReqTmplatId	= "WFT240142";//"WFT240134";		//IT자체(정기)
		else if("WFT240136".equals(masterReqTmplatId)) 				subReqTmplatId	= "WFT240146";						//IT자체(비정기)
		
		else subReqTmplatId	= "WFT240034";
		
		dsCond.put("SUB_REQ_TMPLAT_ID", subReqTmplatId);
		dsCond.put("WF_PROC_CD", wfProcCd);
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		sr1000dDao.newSubPrj(dsCond);
		
		// 시나리오에 구성원 이름 저장
		String subReqId	= StringUtil.safe(dsCond.get("SUB_REQ_ID"));
		log.debug("SUB_REQ_ID : " + subReqId);
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", subReqId);
		List<Map<String, Object>> prjMberList = sr1000dDao.selectSrMaPrjMber(condMap);
		sr2000dSvc.saveSrMaPrjTsDtlMbr(prjMberList);
	}
	
	/**
	 * 서브 프로젝트 PL 변경
	 * @param rowData
	 */
	public void updateSubPrjPl(Map<String, Object> dsCond) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("LMPID", lmpId);
		sr1000dDao.updateSubPrjPl(dsCond);

		/*
		 * TODO : 서브프로젝트 PL 변경 시 요청서의 담당자도 UPDATE 필요
		 * 
		List<Map<String, Object>> selectNextWfProcCd = sr1000dDao.selectProc(dsCond);
		
		String reqId 		= StringUtil.safe(dsCond.get("REQ_ID"));
		String nextWfProcCd	= StringUtil.safe(selectNextWfProcCd.get(0).get("NEXT_WF_PROC_CD")); 
		List<Map<String, Object>> data = sr2000dSvc.regCgerPrjSub_ALL(dsCond);

		srCommSvcImpl.insertSrCommReqCgerDt(reqId, nextWfProcCd, data);
		 */
	}
	/**
	 * SR요청 서브 프로젝트 내역 등록
	 * @param dsCond
	 * @return
	 */
	public void insertSrMaPrjSub(Map<String, Object> rowData) {
		
		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId); 

		sr1000dDao.insertSrMaPrjSub(rowData);
	}

	/**
	 * SR요청 BA, IT 담당자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectBaItCger(Map<String, Object> dsCond){
		
		return sr1000dDao.selectBaItCger(dsCond);
	}
	
	/**
	 * SR요청 마스터 프로젝트 정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectSrMaPrjMaster(Map<String, Object> dsCond) {

		dsCond.put("MASTER_SUB_DIV_CD", "M");
		List<Map<String, Object>> list = sr1000dDao.selectSrMaPrj(dsCond);
		
		Map<String, Object> map = new HashMap<>();
		
		if(list.size() == 1) {
			map	= list.get(0);
		}
		return map;
	}
	
	/**
	 * SR요청  프로젝트 서브 프로젝트 전체 정보 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjAll(Map<String, Object> dsCond) {
		return sr1000dDao.selectSrMaPrj(dsCond);
	}

	/**
	 * SR요청  프로젝트 내역 수정
	 * @param dsCond
	 * @return
	 */
	public void updateSrMaPrj(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId); 

		sr1000dDao.updateSrMaPrj(rowData);
	}

	/**
	 * SR요청 서브 프로젝트 내역 삭제(삭제여부 Y처리)
	 * @param dsCond
	 * @return
	 */
	public void removeSrMaPrj(List<Map<String, Object>> dsData) {
		
		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			rowData.put("LMID", userId);
			rowData.put("LMPID", lmpId);
	
	    	if("D".equals(rowFlag)) {
	    		sr1000dDao.removeSrMaPrj(rowData);
	    	}
		}
	}

	
	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateRtrnBaSecChklst() {
		
		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		Map<String, Object> rowData = new HashMap<>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);

		sr1000dDao.updateRtrnBaSecChklst(rowData);
	}

	/**
	 * SR요청 반려시(IT팀장 결재/PMO결재/보안담당자 결재(접수) 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateRtrnItSecGrdChklst() {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		Map<String, Object> rowData = new HashMap<>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateRtrnItSecGrdChklst(rowData);
	}

	/**
	 * 마스터 프로젝트에 해당하는 진행중인 서브프로젝트 건수
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectSubPrjProcCnt(Map<String, Object> dsCond) {
		return sr1000dDao.selectSubPrjProcCnt(dsCond);
	}

	/**
	 * 마스터 프로젝트 기준 최초 이행배포일시 체크 (1주일 지난경우는 서브프로젝트 추가할수 없음)
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectRimsDtChk(Map<String, Object> dsCond) {
		return sr1000dDao.selectRimsDtChk(dsCond);
	}
	
	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateMasterPrjEndDt(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateMasterPrjEndDt(rowData);
	}

	/**
	 * 보안담당자 결재시 보안등급 저장
	 * @param rowData
	 */
	public void updateSecGrade(Map<String, Object> rowData) {
		
		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateSecGrade(rowData);
	}

	/**
	 * PMO 결재 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkPMOProc() throws Exception {

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		Map<String, Object> resultMap = sr1000dDao.selectMaBaItRev(condMap);
		
		String scrDivCd = StringUtil.safe(resultMap.get("CSR_DIV_CD"));				//변경구분 
		String dangerGradeCd = StringUtil.safe(resultMap.get("DANGER_GRADE_CD"));	//위험등급순번
		String subcommitTargYn = StringUtil.safe(resultMap.get("SUBCOMMIT_TARG_YN"));	//실무분과대상

		if("Y".equals(subcommitTargYn)) {
			return false;
		}
		
		if("1".equals(scrDivCd)) {	//정상-일반

			if(!"4".equals(dangerGradeCd)) {
				return false;
			}else {
				return true;	//일반(D등급) PMO결재 건너뛰기
			}

		}else if("2".equals(scrDivCd)) {	//정상-프로젝트 - PMO 결제 
			return false;
		}else {									//보안 담당자 결재 수행 안함
			throw new Exception("PMO 결재 단계 진행 여부 체크시 오류가 발생했습니다.");
		}
	}
	
	/**
	 * 보안담당자 결재 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkSecCgerProc() throws Exception {
		
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		Map<String, Object> resultMap = sr1000dDao.selectMaBaItRevChklst(condMap);
		
		String secureGradeCd = StringUtil.safe(resultMap.get("SECURE_GRADE_CD"));
		
		if("1".equals(secureGradeCd)) {			//1등급 - 보안 담당자 결재 수행
			return false;
		}else if("2".equals(secureGradeCd) || "3".equals(secureGradeCd)) {	//2,3등급 - 보안 담당자 결재 SKIP
			return true;
		}else {									//등급없음
			throw new Exception("보안 담당자 결재 단꼐 진행 여부 체크시 오류가 발생했습니다.");
		}
	}

	/**
	 * SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param dsCond
	 * @return
	 */
	public void updateSrBaseReqDate(Map<String, Object> dsSrMaBaItRev) {
		sr1000dDao.updateSrBaseReqDate(dsSrMaBaItRev);
	}

	/**
	 * 서브프로젝트 구성원 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjMber(Map<String, Object> dsCond) {
		return sr1000dDao.selectSrMaPrjMber(dsCond);
	}

	/**
	 * 마스터 프로젝트 종료/중단 요청서 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectMasterReqList(Map<String, Object> dsCond) {
		return sr1000dDao.selectMasterReqList(dsCond);
	}

	/**
	 * 서브 프로젝트 변경 신청 내용 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrBaseInfo_subPrj(Map<String, Object> dsCond) {
		return sr1000dDao.selectSrBaseInfo_subPrj(dsCond);
	}

	/**
	 * 마스터 프로젝트 진행중 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjIngReq(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateSrMaPrjIngReq(rowData);
	}
	
	/**
	 * PMO 종료단계 반려시 
	 * 마스터 프로젝트 진행중 상태로 변경
	 * @param rowData
	 */
	public void rtrnUpdateSrMaPrjIngReq(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		rowData.put("REF_REQ_ID", reqInfo.get().getReqId());		
		sr1000dDao.updateSrMaPrjIngReq(rowData);
	}
	
	/**
	 * 마스터 프로젝트 종료 요청 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjEndReq(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateSrMaPrjEndReq(rowData);
	}

	/**
	 * 프로젝트 수행 → PMO 종료 단계 전환(임시)
	 * @param rowData
	 */
	public void procSrMasterWfProcCd(Map<String, Object> rowData) throws Exception {

		String userId 		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId 		= sc.get().getScLmpId();

    	Map<String, Object> prMap = new HashMap<>();
    	prMap.put("REF_REQ_ID",		reqInfo.get().getRefReqId());
		prMap.put("LMID",			userId);
		prMap.put("LMPID",			lmpId);
    	sr1000dDao.updateSrMaPrjEnd(prMap);

		prMap.put("SAVE_GUBUN", rowData.get("SAVE_GUBUN"));
		prMap.put("REQ_ID", rowData.get("REQ_ID"));
		prMap.put("WF_PROC_CD", rowData.get("WF_PROC_CD"));
		prMap.put("USER_ID", rowData.get("CGER_USER_ID"));
		prMap.put("ORG_USER_ID", orgUserId);
		prMap.put("GUBUN_NM", rowData.get("GUBUN_NM"));
		prMap.put("PROC_EXAM_OPIN", "");	//reqInfo.get().getOpinion()
		prMap.put("LOGIN_ID", userId);
		prMap.put("LMPID", lmpId);

		srCommSvcImpl.callPrSrRevProc(prMap);

		prMap = new HashMap<>();
		prMap.put("SAVE_GUBUN",		rowData.get("SAVE_GUBUN"));
		prMap.put("REQ_ID",			rowData.get("REQ_ID"));
		prMap.put("USER_ID",		rowData.get("CGER_USER_ID"));
		prMap.put("ORG_USER_ID",	orgUserId);
		prMap.put("WF_PROC_CD",		rowData.get("WF_PROC_CD"));
		prMap.put("NEXT_WF_PROC_CD", rowData.get("NEXT_WF_PROC_CD"));
		prMap.put("NEXT_WF_FUNC_CD", rowData.get("NEXT_WF_FUNC_CD"));
		prMap.put("LOGIN_ID",		userId);
		prMap.put("LMPID",			lmpId);

		srCommSvcImpl.callPrSrReqWfProcNext(prMap);

		int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
		String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));

		if(outRtnCd < 0) {
			log.debug("[SRCommServiceImpl]-save [ERROR] [REG] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
			log.debug("[SRCommServiceImpl]-save [ERROR] [REG] callPrSrReqWfProcNext  OUT_RTN_MSG:[" + outRtnMsg + "]");
			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
			
		}else {
			log.debug("[SRCommServiceImpl]-save [SUCC] [REG] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
			log.debug("[SRCommServiceImpl]-save [SUCC] [REG] callPrSrReqWfProcNext  OUT_RTN_MSG:[" + outRtnMsg + "]");
		}

		//다음 단계에 해당하는 담당자 또는 검토자 셋팅
		//procReqCgerDt(dsFormInfo, wfReqTmplatProcDt, reqInfo.get().getNextWfProcCd(), reqInfo.get().getNextWfFuncCd());
		if(!"WF_FUNC_01".equals(rowData.get("NEXT_WF_FUNC_CD"))) {
			srCommSvcImpl.procReqCgerDt(rowData);

		}else {
			
			Map<String, Object> resetMap = new HashMap<>();
			resetMap.put("REQ_ID", reqInfo.get().getReqId());
			resetMap.put("REQ_TMPLAT_ID", rowData.get("REQ_TMPLAT_ID"));
			resetMap.put("WF_PROC_CD", rowData.get("NEXT_WF_PROC_CD"));
			resetMap.put("APPR_STAT_CD", "APST_01");
			sr0010dDao.resetWfApproval(resetMap);	//단계 결재선 내역 초기화
		}
	}
	
	/**
	 * 마스터 프로젝트 중단 요청 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjStopReq(Map<String, Object> rowData) {

		String userId	= sc.get().getScUserId();
		String lmpId	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
		rowData.put("LMPID", lmpId);		
		
		sr1000dDao.updateSrMaPrjStopReq(rowData);
	}
	
	/**
	 * 프로젝트 수행 → PMO 종료 단계 전환(임시)
	 * @param rowData
	 */
	public void procSrMasterStop() throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();

    	Map<String, Object> prMap = new HashMap<>();
    	prMap.put("REF_REQ_ID",		reqInfo.get().getRefReqId());
		prMap.put("LMID",			userId);
		prMap.put("LMPID",			lmpId);
		sr1000dDao.updateSrMaPrjStop(prMap);	//프로젝트 중단 처리

		prMap = new HashMap<>();
		prMap.put("REQ_ID",			reqInfo.get().getRefReqId());
		prMap.put("WF_PROC_CD",		"WF_PROC_9999");
		prMap.put("NEXT_WF_PROC_CD", "WF_PROC_9999");
		prMap.put("LMID",			userId);
		prMap.put("LMPID",			lmpId);

		srCommDao.mergeSrWfProc(prMap);	//종료단계 셋팅
		
		sr0000Dao.updateStop(prMap);
	}

	/**
	 * 요청등록-[일반] PMO 종료 단계 폐기 가능 여부 체크
	 * @param dsCond
	 * @return
	 */
	public String selectDiscardCheck(Map<String, Object> dsCond) {
		return sr1000dDao.selectDiscardCheck(dsCond);
	}

	/**
	 * 마스터 프로젝트 폐기 처리
	 * @param rowData
	 * @throws Exception 
	 */
	public void updateDisCard(Map<String, Object> rowData) throws Exception {

		String userId 		= sc.get().getScUserId();
		String lmpId 		= sc.get().getScLmpId();
		
		Boolean flag = false;
		String mapWfProcCd 	= StringUtil.safe(rowData.get("MAP_WF_PROC_CD"));
		
		Map<String, Object> prMap = new HashMap<>();
		
    	prMap.put("REF_REQ_ID",		rowData.get("REQ_ID"));
		prMap.put("LMID",			userId);
		prMap.put("LMPID",			lmpId);

		log.debug("updateDisCard >> mapWfProcCd : "+mapWfProcCd);
		//PMO, CMO
		if("M5500".equals(mapWfProcCd))
		{
			if(sr1000dDao.selectPMOCMO(prMap) == 0)
			{
				throw new Exception("폐기 가능한 권한이 없습니다.");
			}
			flag = true;
		}
		else if("M9000".equals(mapWfProcCd))
		{
			String possYn = sr1000dDao.selectDiscardCheck(rowData);
			if(!"Y".equals(possYn))
			{	
				throw new Exception("폐기 가능한 권한이 없습니다.");
			}
			flag = true;
		}
		
		if(flag)
		{
			sr1000dDao.updateSrMaPrjStop(prMap);	//프로젝트 중단 처리
	
			prMap = new HashMap<>();
			prMap.put("REQ_ID",			rowData.get("REQ_ID"));
			prMap.put("WF_PROC_CD",		"WF_PROC_9999");
			prMap.put("NEXT_WF_PROC_CD", "WF_PROC_9999");
			prMap.put("LMID",			userId);
			prMap.put("LMPID",			lmpId);
	
			srCommDao.mergeSrWfProc(prMap);		//종료단계 셋팅
			
			sr0000Dao.updateDiscard(prMap);		//폐기 처리
		}
	}
	
	/**
	 * SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param dsCond
	 * @return
	 */
	public void updateSubcommitTargYn(Map<String, Object> dsSrMaBaItRev) {
		
		log.debug("updateSubcommitTargYn() =====> reqInfo.get().getgMapWfProcCd() : " + reqInfo.get().getMapWfProcCd());
		
		if("M5000".equals(reqInfo.get().getMapWfProcCd())) {
			sr1000dDao.updateSubcommiTargYn(dsSrMaBaItRev);
		}
	}	
	
	/**
	 * 체크리스트 위험평가구분에 따른 체크리스트 체크
	 * @param dsCond
	 * @return
	 */
	public void chkDangerDivChg(Map<String, Object> rowData) throws Exception {
		
		rowData.put("UP_CMM_CD","REQ_CHKLST_ID");
		rowData.put("CODE_DIV", "WORKFLOW_CD");
	
		if(StringUtil.safe(rowData.get("CSR_DETAIL_DIV_CD_ORG")) != StringUtil.safe(rowData.get("CSR_DETAIL_DIV_CD"))) {
			if(!"".contentEquals(StringUtil.safe(rowData.get("CSR_DETAIL_DIV_CD_ORG"))) ){
				if("20".equals(StringUtil.safe(rowData.get("CSR_DETAIL_DIV_CD")))) {
					rowData.put("CMM_CD", "06");				
				}else {
					rowData.put("CMM_CD", "05");					
				}
				rowData.put("PK1", StringUtil.safe(rowData.get("REQ_ID")));
				rowData.put("KEY_TBL", "REQ_GRD_IT_CHKLST");
				
				String schgChk = sr1000dDao.chkDangerDivChg(rowData);
				
				if("N".equals(schgChk)) {
					sc.get().setScSessionMsg("위험평가 구분이 변경되었으니 등급평가를 다시 해주세요. ");
					throw new Exception();			
				}	
			}			
		}		
	}
	
	/**
	 * 변경대상평가 등록 기록삭제
	 * @param dsCond
	 * @return
	 */
	public void removeReqChgTargeChkist(Map<String, Object> rowData) {
		log.debug("sr1000dDao.removeReqChgTargeChkist>>>>>>>>ㄴㄴㄴ>> | :    " +reqInfo.get().getReqId());
		rowData.put("REQ_CHG_TARG_CHKLST_01","REQ_CHG_TARG_CHKLST_01");
		rowData.put("REQ_CHG_TARG_CHKLST_02","REQ_CHG_TARG_CHKLST_02");
		rowData.put("REQ_ID",reqInfo.get().getReqId());
		
		if("".equals(reqInfo.get().getReqId())) {
			sc.get().setScSessionMsg("요청서번호가 올바르지않습니다");
		}else {
			sr1000dDao.removeReqChgTargeChkist(rowData);
			log.debug("sr1000dDao.removeReqChgTargeChkist>>>>>>>>>>");
		}
	}
	
	/**
	 * 마스터 프로젝트 기준 최초 이행배포일시 체크 (1주일 지난경우는 서브프로젝트 추가할수 없음)
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> nowStepActor(Map<String, Object> dsIsChargerIn) {
		return sr1000dDao.nowStepActor(dsIsChargerIn);
	}
}