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

import com.base.com.service.FommAuthService;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0400WDAO;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.dao.SR0010DDAO;
import com.base.sr.service.SR0010DService;
import com.base.sr.service.SR0020PService;
import com.base.sr.service.SRCommService;

/**
 * 
 * <pre>
 * @title
 * - 결재선 공통 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 26.	정보윤		최초작성
 */
@Service
public class SR0010DServiceImpl implements SR0010DService {

	private Logger log = LoggerFactory.getLogger(SR0010DServiceImpl.class);

	@Inject
	private Provider<GlobalReqInfo> reqInfo;
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommAuthService fommAuthSvc;
		
	@Autowired
	private SR0010DDAO sr0010dDao;

	@Autowired
	private SR0000DDAO sr0000dDao;
	
	@Autowired
	private SR0010DService sr0010dSvc;

	@Autowired
	private SR0020PService sr0020pSvc;

	@Autowired
	private SRCommService srCommSvc;
	
	@Autowired
	private FOMM0400WDAO fomm0400wDao;

	/**
	 * 워크플로우 진행 단계 정보 조회
	 */
	public List<Map<String, Object>> selectReqProcDtInfo(Map<String, Object> dsCond) {
		log.debug("[selectReqProcDtInfo()]");
		return sr0010dDao.selectReqProcDtInfo(dsCond);
	}

	/**
	 * 현재 단계부터 결재가 연속해서 이어진 단계까지의 결재 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcAppvHt(Map<String, Object> dsCond) {
		return sr0010dDao.selectReqProcAppvHt(dsCond);
	}
	
	/**
	 * 결재선 공통 목록 조회
	 */
	public Map<String, Object> selectMinApprLvlSeq(Map<String, Object> dsCond) {
		return sr0010dDao.selectMinApprLvlSeq(dsCond);
	}
	
	/**
	 * 결재선 공통 목록 조회
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond) {		
//		for(String colNm : dsCond.keySet()) {			
//			if(dsCond.get(colNm) != null) {				
//				String value = StringUtil.safe(dsCond.get(colNm));				
//				log.debug("[SR0010DServiceImpl]-select00() colNm : [{}] value : [{}]", colNm, value);
//			}
//		}
		return sr0010dDao.select00(dsCond);
	}

	/**
	 * 결재선 공통 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		return sr0010dDao.select01(dsCond);
	}
	
	/**
	 * 결재선 공통 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsWfApprovalMt, List<Map<String, Object>> dsWfApprovalRefMt) throws Exception {

		log.debug("[SR0010DServiceImpl]-save01() reqInfo.get().getOrgReqStatCd() : [{}]", reqInfo.get().getOrgReqStatCd());
		
		if(!"RQST11".equals(reqInfo.get().getOrgReqStatCd()) ) {
			
			//워크플로우 진행 단계 정보 조회
			Map<String, Object> condMap = new HashedMap<String, Object>();
			condMap.put("REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
			condMap.put("REQ_TMPLAT_VER", reqInfo.get().getReqTmplatVer());
			condMap.put("WF_PROC_CD", reqInfo.get().getWfProcCd());
			log.debug("[SR0010DServiceImpl]-save01()  selectReqProcDtInfo()");
			List<Map<String, Object>> reqTmplatProcDt = selectReqProcDtInfo(condMap);
	
			String apvWfPorCdStr = "";
	
			if(reqTmplatProcDt != null) {
	
				for (int i = 0; i < reqTmplatProcDt.size(); i++) {
					Map<String, Object> rowData = reqTmplatProcDt.get(i);
					
					String curWfProcCdYn = StringUtil.safe(rowData.get("CUR_WF_PROC_CD_YN"));
					String wfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));
					String cger = StringUtil.safe(rowData.get("CGER"));
					String func = StringUtil.safe(rowData.get("FUNC"));
		
					log.debug("[SR0010DServiceImpl]-save01() dsWfReqTmplatProcDt i=[{}] curWfProcCdYn : [{}] wfProcCd : [{}] cger : [{}] func : [{}]", i, curWfProcCdYn, wfProcCd, cger, func);
					
					if("N".equals(curWfProcCdYn)) {	//현재 진행중인 단계에 해당하지 않는 경우
						
						if(!"".equals(cger)) {
							log.debug("[SR0010DServiceImpl]-save01() cger is not null==> {}행 break", i);
							break;
		
						}else {
		
							log.debug("else i=" + " cger is null");
		
							if("WF_FUNC_01".equals(func)) {	//단계에 결재만 존재하는 경우
								log.debug("[SR0010DServiceImpl]-save01() else {}행 [WF_FUNC_01]", i);
								apvWfPorCdStr += ("".equals(apvWfPorCdStr) ? "" : ",") + wfProcCd;
							}
						}
		
					}else {	//현재 진행중인 단계에 해당하는 경우
						log.debug("[SR0010DServiceImpl]-save01() else i=[{}] curWfProcCdYn:[{}]", i, curWfProcCdYn);
						apvWfPorCdStr += ("".equals(apvWfPorCdStr) ? "" : ",") + wfProcCd;
					}
				}
			}
			
			if("".equals(apvWfPorCdStr)) {
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("[결재선 저장] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
				}
				log.debug("[SR0010DServiceImpl]-save01() {}", "[결재선 저장] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
				throw new Exception("[결재선 저장] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
			}
			
			String[] apvWfProcCdArr = apvWfPorCdStr.split(",");

			String userId = "";
			String lmpId = "";
			
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				userId 	= sc.get().getScUserId();
				lmpId 	= StringUtil.safe(sc.get().getScLmpId(), "ITSM");

			}else {
				userId 	= reqInfo.get().getReqUserId();
				lmpId 	= "ITSM";
			}

			//결재선 처리
			if(dsWfApprovalMt != null) {
				
				if(dsWfApprovalMt.size() > 0) {
					
					condMap = new HashedMap<String, Object>();
					condMap.put("REQ_ID", reqInfo.get().getReqId());
					condMap.put("APV_WF_PROC_CD_ARR", apvWfProcCdArr);
					sr0010dDao.remove01(condMap);
				}
				
				for (int i = 0; i < dsWfApprovalMt.size(); i++) {
		
					Map<String, Object> rowData = dsWfApprovalMt.get(i);
		
					// DATA RowType 가져오기
			    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			    	rowData.put("LMID", userId);
			    	rowData.put("LMPID", lmpId);
		
			    	if(!"D".equals(rowFlag)) {
			    		sr0010dDao.insert01(rowData);
			    	}
				}
			}
	
			//결재선(참조) 처리
			if(dsWfApprovalRefMt != null) {

				//결재선(참조) 처리
				for (int i = 0; i < dsWfApprovalRefMt.size(); i++) {

					Map<String, Object> rowData = dsWfApprovalRefMt.get(i);

					// DATA RowType 가져오기
			    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			    	rowData.put("LMID", userId);
			    	rowData.put("LMPID", lmpId);

			    	if("I".equals(rowFlag)) {
			    		sr0010dDao.insert03(rowData);

			    	}else if("D".equals(rowFlag)) {
			    		sr0010dDao.remove03(rowData);
			    	}
				}
			}
		}
	}

	/**
	 * 만족도조사 문항 및 응답 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		return sr0010dDao.select02(dsCond);
	}

	/**
	 * 만족도조사 답변 저장
	 */
	public void save02(Map<String, Object> dsCond, List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		if(dsData.size() > 0) {

			sr0010dDao.remove02(dsCond);	//만족도조사 [REQ_ID]에 해당하는 응답 문항 일괄 삭제

			for (int i = 0; i < dsData.size(); i++) {

				Map<String, Object> rowData = dsData.get(i);
				rowData.put("LMID", userId);
		    	rowData.put("LMPID", lmpId);

		    	String qstItemRsp1Yn = StringUtil.safe(rowData.get("QST_ITEM_RSP1_YN"));
		    	String qstItemRsp2Yn = StringUtil.safe(rowData.get("QST_ITEM_RSP2_YN"));
		    	String qstItemRsp3Yn = StringUtil.safe(rowData.get("QST_ITEM_RSP3_YN"));
		    	String qstItemRsp4Yn = StringUtil.safe(rowData.get("QST_ITEM_RSP4_YN"));
		    	String qstItemRsp5Yn = StringUtil.safe(rowData.get("QST_ITEM_RSP5_YN"));

		    	if("1".equals(qstItemRsp1Yn) || "1".equals(qstItemRsp2Yn) || "1".equals(qstItemRsp3Yn) || "1".equals(qstItemRsp4Yn) || "1".equals(qstItemRsp5Yn)) {
		    		
		    		Map<String, Object> condMap = new HashMap<String, Object>();
					condMap.put("SEL_SATI_QST_ID", rowData.get("SATI_QST_ID"));
					condMap.put("SEL_SATI_QST_SEQ", rowData.get("SEQ"));				
					
					List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
					list = fomm0400wDao.select02(condMap);
					
					if(list.size() == 1) {

						Map<String, Object> pointMap = list.get(0);
						
						if("1".equals(qstItemRsp1Yn)) {
							rowData.put("QST_POINT", pointMap.get("QST_ITEM_GRD1"));
						}else if("1".equals(qstItemRsp2Yn)) {
							rowData.put("QST_POINT", pointMap.get("QST_ITEM_GRD2"));
						}else if("1".equals(qstItemRsp3Yn)) {
							rowData.put("QST_POINT", pointMap.get("QST_ITEM_GRD3"));
						}else if("1".equals(qstItemRsp4Yn)) {
							rowData.put("QST_POINT", pointMap.get("QST_ITEM_GRD4"));
						}else if("1".equals(qstItemRsp5Yn)) {
							rowData.put("QST_POINT", pointMap.get("QST_ITEM_GRD5"));
						}
					}
		    	}
		    	sr0010dDao.insert02(rowData);
			}
		}
	}

	/**
	 * 결재 참조자 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		return sr0010dDao.select03(dsCond);
	}

	/**
	 * 결재처리구분에 해당하는 결재자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprListByCode(String userId, String apprProcDivCd) {
		Map<String, Object> condMap = new HashMap<>();

		if("".equals(StringUtil.safe(userId))) {
			
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				condMap.put("USER_ID", sc.get().getScUserId());
			}

		}else {
			condMap.put("USER_ID", userId);
		}
		condMap.put("APPR_PROC_DIV_CD", apprProcDivCd);
		List<Map<String, Object>> result = sr0010dDao.selectApprListByCode(condMap);
		return result;
	}

	/**
	 * 기본 결재대상자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		return sr0010dDao.select04(dsCond);
	}

	/**
	 * 유저 신분 체크
	 * @param dsCond
	 * @return
	 */
	public String selectUserCheck(String userId) {

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("USER_ID", userId);
		return sr0010dDao.selectUserCheck(condMap);
	}
	
	public String[] getApvWfPorCdStr(Map<String, Object> dsCond, boolean isCheck) throws Exception {
		
		//워크플로우 진행 단계 정보 조회
		log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() selectReqProcDtInfo()");
		List<Map<String, Object>> reqTmplatProcDt = sr0010dSvc.selectReqProcDtInfo(dsCond);	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD]

		String apvWfPorCdStr = "";

		for (int i = 0; i < reqTmplatProcDt.size(); i++) {

			Map<String, Object> rowData = reqTmplatProcDt.get(i);

			String curWfProcCdYn	= StringUtil.safe(rowData.get("CUR_WF_PROC_CD_YN"));
			String wfProcCd				= StringUtil.safe(rowData.get("WF_PROC_CD"));
			String cger					= StringUtil.safe(rowData.get("CGER"));
			String func						= StringUtil.safe(rowData.get("FUNC"));

			log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() dsWfReqTmplatProcDt i=[{}] curWfProcCdYn : [{}] wfProcCd : [{}] cger : [{}] func : [{}]", i, curWfProcCdYn, wfProcCd, cger, func);

			if("N".equals(curWfProcCdYn)) {	//현재 진행중인 단계에 해당하지 않는 경우

				if(!"".equals(cger)) {
					log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() cger is not null {}행 break", i);
					break;

				}else {

					log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr()else i={}행 cger is null", i);

					if("WF_FUNC_01".equals(func)) {	//단계에 결재만 존재하는 경우
						log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr()else {}행 WF_FUNC_01", i);
						apvWfPorCdStr += ("".equals(apvWfPorCdStr) ? "" : ",") + wfProcCd;
					}
				}

			}else {	//현재 진행중인 단계에 해당하는 경우
				log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() else i={} curWfProcCdYn:[{}]", i, curWfProcCdYn);
				if("WF_FUNC_01".equals(func)) {
					apvWfPorCdStr += ("".equals(apvWfPorCdStr) ? "" : ",") + wfProcCd;
				}
			}
		}
		log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() apvWfPorCdStr:[{}], isCheck:[{}]", apvWfPorCdStr, isCheck);

		if("".equals(apvWfPorCdStr)) {
			if(isCheck) {
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("[결재선 설정 조회] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
				}
				log.debug("[SR0010DServiceImpl]-getApvWfPorCdStr() [결재선 설정 조회] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
				throw new Exception("[결재선 설정 조회] 결재선 확인시 결재가 설정된 단계가 존재하지 않습니다.");
			}else {
				return null;
			}
		}
		return apvWfPorCdStr.split(",");
	}

	/**
	 * 현재 결재 진행 차수 정보를 구한다.
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> getCurApprLvlSeq(Map<String, Object> dsCond) throws Exception {
		
		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));		
		Map<String, Object> curApprLvlSeqMap = new HashedMap<String, Object>();

		//현재 진행중인 단계에 승인 대기가 존재하는 제일 작은 결재 차수를 구한다.
		if(!reqId.startsWith("REQ_")) {

			Map<String, Object> condMap = new HashedMap<String, Object>();
			condMap.put("REQ_ID", reqId);
			condMap.put("APV_WF_PROC_CD_ARR", getApvWfPorCdStr(dsCond, true));	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD]
			curApprLvlSeqMap = sr0010dSvc.selectMinApprLvlSeq(condMap);		//param : [REQ_ID, (APV_WF_PROC_CD_ARR or WF_PROC_CD) ]

			String minWfProcCd	= StringUtil.safe(curApprLvlSeqMap.get("MIN_WF_PROC_CD"));
			int minApprLvlSeq	= StringUtil.safeInt(curApprLvlSeqMap.get("MIN_APPR_LVL_SEQ"), 0);
			curApprLvlSeqMap.put("MIN_WF_PROC_CD", minWfProcCd);
			curApprLvlSeqMap.put("MIN_APPR_LVL_SEQ", minApprLvlSeq);

		}else {

			curApprLvlSeqMap.put("MIN_WF_PROC_CD", "");
			curApprLvlSeqMap.put("MIN_APPR_LVL_SEQ", 0);
		}
		return curApprLvlSeqMap;
	}

	/**
	 * 결재가 연속적으로 이어지는 모든 단계에 대한 결재 상세 정보(WF_REQ_APPV_DT) 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> getProcAppvHtList(String reqTmplatId, String reqTmplatVer, String[] wfProcCdArr) {
		
		Map<String, Object> condMap = new HashedMap<String, Object>();
		condMap = new HashedMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		condMap.put("REQ_TMPLAT_VER", reqTmplatVer);
		condMap.put("APV_WF_PROC_CD_ARR", wfProcCdArr);
		List<Map<String, Object>> procAppvDtList = sr0010dSvc.selectReqProcAppvHt(condMap);	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, (APV_WF_PROC_CD_ARR or WF_PROC_CD) ]
		
		if(procAppvDtList != null)	log.debug("[SR0010DServiceImpl]-getProcAppvDtList() procAppvDtList.size():[{}]", procAppvDtList.size());
		return procAppvDtList;
	}

	/**
	 * 결재가 연속적으로 이어지는 모든 단계에 대한 결재 처리자 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	//PARAM : REQ_TMPLAT_ID, REQ_TMPLAT_VER, REQ_ID, WF_FUNC_CD
	public List<Map<String, Object>> getProcAppvUserList(Map<String, Object> dsCond, boolean isSelectAppv) throws Exception {

		String[] apvWfProcCdArr		= getApvWfPorCdStr(dsCond, true);	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD]
		String reqTmplatId				= StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer			= StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));

		List<Map<String, Object>> procAppvHtList = getProcAppvHtList(reqTmplatId, reqTmplatVer, apvWfProcCdArr);	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, (APV_WF_PROC_CD_ARR or WF_PROC_CD) ]
		
		List<Map<String, Object>> wfApprovalMtList = new ArrayList<Map<String,Object>>();	//단계별 결재선을 취합해서 UI에 전체로 보낼 LIST
		List<Map<String, Object>> addList = new ArrayList<Map<String,Object>>();			//결재선 데이터를 담을 LIST

		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));
		
		Map<String, Object> condMap = new HashedMap<String, Object>();
		
		if(!reqId.startsWith("REQ_")) {
			condMap.put("REQ_ID", reqId);

		}else {
			condMap.put("REQ_TMPLAT_ID", dsCond.get("REQ_TMPLAT_ID"));
			condMap.put("REQ_TMPLAT_VER", dsCond.get("REQ_TMPLAT_VER"));
		}
		
		Map<String, Object> baseInfo = sr0000dDao.select01(condMap);

		String baseWfProcCd = StringUtil.safe(baseInfo.get("WF_PROC_CD"));
		String reqStatCd		= StringUtil.safe(baseInfo.get("REQ_STAT_CD"));
		
		String reqUserId = "";
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			reqUserId		= StringUtil.safe(baseInfo.get("REQ_USER_ID"), sc.get().getScUserId());
		}else {
			reqUserId		= StringUtil.safe(baseInfo.get("REQ_USER_ID"));
		}
		
		String wfFuncCd			= StringUtil.safe(dsCond.get("WF_FUNC_CD"));
		String userId				= "";

		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId	= StringUtil.safe(sc.get().getScUserId(), reqUserId);
		}else {
			userId	= reqUserId;
		}
		
		for (int i = 0; i < procAppvHtList.size(); i++) {

			addList = new ArrayList<Map<String,Object>>();			//결재선 데이터를 담을 LIST

			Map<String, Object> rowData = procAppvHtList.get(i);
            String wfProcCd				= StringUtil.safe(rowData.get("WF_PROC_CD"));
			String apprLvlSeq			= StringUtil.safe(rowData.get("APPR_LVL_SEQ"));
			String apprNm				= StringUtil.safe(rowData.get("APPR_NM"));
			String apprDirectYn		= StringUtil.safe(rowData.get("APPR_DIRECT_YN"));
			String apprProcDivCd		= StringUtil.safe(rowData.get("APPR_PROC_DIV_CD"));
			String apprProgDivCd	= StringUtil.safe(rowData.get("APPR_PROG_DIV_CD"));
			String svcNm					= StringUtil.safe(rowData.get("SVC_NM"));
			int wfProcLvlSeqCnt		= StringUtil.safeInt(rowData.get("APPR_LVL_SEQ_CNT"));	//단계별 차수의 갯수

			log.debug("[SR0010DServiceImpl]-getProcAppvUserList() procAppvDtList i={}\n" +
							"WF_PROC_CD:[{}] WF_FUNC_CD : [{}] APPR_LVL_SEQ:[{}] APPR_NM :[{}] APPR_DIRECT_YN : [{}] APPR_PROC_DIV_CD : [{}] APPR_PROG_DIV_CD : [{}] SVC_NM : [{}] baseWfProcCd : [{}] reqStatCd : [{}]",
							i, wfProcCd, wfFuncCd, apprLvlSeq, apprNm, apprDirectYn, apprProcDivCd, apprProgDivCd, svcNm, baseWfProcCd, reqStatCd
			);

			boolean isCreateData = false;

			//단계 차수별 결재선(WF_APPROVAL_MT) 목록을 조회한 USER LIST
			List<Map<String, Object>> selAppv = new ArrayList<Map<String,Object>>();

			//임시 키가 아닌 경우
			if(!reqId.startsWith("REQ_")) {

				//단계-차수에 해당하는 저장된 결재선 목록 조회
				condMap = new HashedMap<String, Object>();
				condMap.put("REQ_ID",				reqId);
				condMap.put("WF_PROC_CD",		wfProcCd);
				condMap.put("APPR_LVL_SEQ",	apprLvlSeq);

				if(!"WF_FUNC_01".equals(wfFuncCd)) {	//결재중이 아닌 경우만
					condMap.put("CREATE_USER_ID", userId);
				}

				//결재선 조회 여부가 true 일 때만 결재선 데이터 내역을 조회 
				if(isSelectAppv) {
					addList = sr0010dSvc.select01(condMap);	//param : [REQ_ID, WF_PROC_CD, APPR_LVL_SEQ, (CREATE_USER_ID) ]
				}else {
					addList = new ArrayList<Map<String,Object>>();
				}

				//단계-차수에 해당하는 결재선 데이터가 존재하지 않는 경우
				if(addList.size() == 0) {
					
					if("WF_FUNC_00".equals(wfFuncCd) || "WF_FUNC_04".equals(wfFuncCd)) {	//결재중이 아닌 경우만

						//등록
						if("WF_PROC_1000".equals(baseWfProcCd)) {
							
							if(!"".equals(userId) && reqUserId.equals(userId)) {
	
								if("RQST00".equals(reqStatCd) || "RQST91".equals(reqStatCd)) {	//임시저장, 반려								
									isCreateData = true;
								}

							}else {	

								String chkAdv = StringUtil.safe(dsCond.get("CHK_ADV"));

								if("Y".equals(chkAdv)) {

									boolean isAdmin = fommAuthSvc.getMenuAuth("ADMIN_YN").getVariables().get("AUTH_YN").equals("Y");								
									if(isAdmin)	isCreateData = true;
								}
							}
	
						//담당자 접수 시점
						}else if(!"WF_PROC_9999".equals(baseWfProcCd)) {
							
							log.debug("[SR0010DServiceImpl]-getProcAppvUserList() !WF_PROC_9999============>");
							
							if("RQST01".equals(reqStatCd) || "RQST91".equals(reqStatCd)) {	//등록, 반려
								
								log.debug("[SR0010DServiceImpl]-getProcAppvUserList() reqStatCd============> RQST01 or RQST91");
								
								condMap = new HashedMap<String, Object>();
								condMap.put("REQ_ID", reqId);
								condMap.put("WF_PROC_CD", baseWfProcCd);
								
								condMap.put("USER_ID", userId);
								
								List<Map<String, Object>> srCgerDt = srCommSvc.selectSrCgerDtAuth(condMap);	//param : [REQ_ID, WF_PROC_CD, USER_ID ]
								
								if(srCgerDt.size() == 1)	isCreateData = true;
							}
						}

					}else if("CREATE".equals(wfFuncCd)) {

						isCreateData = true;
					}
				}

			//신규인 경우
			}else {

				isCreateData = true;
			}
			
			log.debug("[SR0010DServiceImpl]-getProcAppvUserList() i={} isCreateData :[{}]", i, isCreateData);

			//결재선에 진행단계-차수 데이터가 없어서 데이터를 생성해야 하는 경우
			if(isCreateData) {

				if("01".equals(apprProcDivCd)) {										//직접지정인 경우
	
					if(wfProcLvlSeqCnt == 1) {	//직접 지정이고 현재 결재선 설정에 단계 차수가 1개인 경우
	
						condMap = new HashMap<String, Object>();
						condMap.put("BOX_USER_ID", sc.get().getScUserId());
						condMap.put("IS_DEFAULT",	"Y");
						selAppv = sr0020pSvc.select03(condMap);
	
						if(selAppv != null) {

							for (int j = 0; j < selAppv.size(); j++) {
								
								condMap.put("REQ_ID",				reqId);
								condMap.put("WF_PROC_CD",		wfProcCd);
								condMap.put("APPR_LVL_SEQ",	apprLvlSeq);
								
								Map<String, Object> resMap = selAppv.get(j);
								resMap.put("ROWFLAG",				"I");
								resMap.put("MNG_USER_DIV",	null);
								resMap.put("REQ_ID",					reqId);
								resMap.put("WF_PROC_CD",		wfProcCd);
								resMap.put("APPR_LVL_SEQ",		apprLvlSeq);
								resMap.put("APPR_GRP_SEQ",		1);
								resMap.put("APPR_GBN_CD",		"A02");
								resMap.put("APPR_STAT_CD",		null);
								resMap.put("DRAFTER_ID",			userId);
								resMap.put("DIRECT_YN",			"Y");
								resMap.put("USER_ID",				selAppv.get(j).get("USER_ID"));
								resMap.put("USER_NM",				selAppv.get(j).get("USER_NM"));
								resMap.put("DEPT_CD",				selAppv.get(j).get("DEPT_CD"));
								resMap.put("DEPT_NM",				selAppv.get(j).get("DEPT_NM"));
								resMap.put("POS_NM",				selAppv.get(j).get("POS_NM"));
								resMap.put("ROLE_CD",				selAppv.get(j).get("ROLE_CD"));
								resMap.put("ROLE_NM",				selAppv.get(j).get("ROLE_NM"));
								resMap.put("TELNUM",				selAppv.get(j).get("TELNUM"));
								resMap.put("MOBILE_NUM",		selAppv.get(j).get("MOBILE_NUM"));
								addList.add(resMap);
							}
						}
					}

				}else if("99".equals(apprProcDivCd)) {	//서비스 지정

					selAppv = new ArrayList<Map<String,Object>>();

					String[] svcArr = svcNm.split("/");
					
					if(svcArr.length != 3) {
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							sc.get().setScSessionMsg("결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
						}
						log.debug("[SR0010DServiceImpl]-getProcAppvUserList() {}", "결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
						throw new Exception("결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
					}
					
					selAppv = (List<Map<String, Object>>) srCommSvc.executeServiceMethod(svcNm, dsCond);
					//log.debug("[SR0010DServiceImpl]-getProcAppvUserList() {}행 selAppv.size():[{}]", i, selAppv.size());

					if (selAppv != null ) {

						for (int j = 0; j < selAppv.size(); j++) {

							log.debug("[SR0010DServiceImpl]-getProcAppvUserList() MNG_USER_DIV===>{}", selAppv.get(j).get("MNG_USER_DIV"));
							log.debug("[SR0010DServiceImpl]-getProcAppvUserList() DRAFTER_ID===>{}", selAppv.get(j).get("DRAFTER_ID"));

							Map<String, Object> resMap = new HashedMap<String, Object>();
							resMap.put("ROWFLAG", "I");
							resMap.put("USER_ID", selAppv.get(j).get("USER_ID"));
							resMap.put("MNG_USER_DIV", selAppv.get(j).get("MNG_USER_DIV"));
							resMap.put("DRAFTER_ID", selAppv.get(j).get("DRAFTER_ID"));
							resMap.put("DIRECT_YN", "N");
							resMap.put("APPR_GRP_SEQ", selAppv.get(j).get("APPR_GRP_SEQ"));
							resMap.put("APPR_SEQ", selAppv.get(j).get("APPR_SEQ"));
							resMap.put("ROLE_CD", selAppv.get(j).get("ROLE_CD"));
							addList.add(resMap);
						}

					}else {
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							sc.get().setScSessionMsg("결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
						}
						log.debug("[SR0010DServiceImpl]-getProcAppvUserList() {}", "결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
						throw new Exception("결재선 지정 타입(서비스) 조회 서비스 지정 형식이 올바르지 않습니다.");
					}
					//----------------------------
				}

				log.debug("[SR0010DServiceImpl]-getProcAppvUserList() {}행 addList.size():[{}]i=", i, addList.size());
				
				for (int j = 0; j < addList.size(); j++) {
					
					String ROWFLAG = StringUtil.safe(addList.get(j).get("ROWFLAG"));
	
					if("I".equals(ROWFLAG)) {
						
						//FOMM_USER_MT에서 조회조건으로 넘긴 USER_ID에 대한 사용자 정보를 같이 추출.ㅡ
						condMap = new HashMap<String, Object>();
						condMap.put("USER_ID", StringUtil.safe(addList.get(j).get("USER_ID")));						
						selAppv = sr0010dSvc.select04(condMap);	//param : [REQ_ID, (ARR_USER_ID or USER_ID) ]

						if(selAppv.size() > 0) {
							addList.get(j).put("USER_NM", selAppv.get(0).get("USER_NM"));
							addList.get(j).put("DEPT_CD", selAppv.get(0).get("DEPT_CD"));
							addList.get(j).put("DEPT_NM", selAppv.get(0).get("DEPT_NM"));
							addList.get(j).put("POS_NM", selAppv.get(0).get("POS_NM"));
						}

						addList.get(j).put("CHK", "0");
						addList.get(j).put("REQ_ID", reqId);
						addList.get(j).put("WF_PROC_CD", wfProcCd);
						addList.get(j).put("APPR_LVL_SEQ", apprLvlSeq);
					
						if("".equals(StringUtil.safe(addList.get(j).get("APPR_GRP_SEQ")))) {
							addList.get(j).put("APPR_GRP_SEQ", "1");
						}

						if("".equals(StringUtil.safe(addList.get(j).get("APPR_SEQ")))) {
							addList.get(j).put("APPR_SEQ", (j+1));
						}

						if("CREATE".equals(wfFuncCd)) {
							addList.get(j).put("APPR_STAT_CD", "APST_01");							
							
						}else {
							addList.get(j).put("APPR_STAT_CD", null);
						}
						addList.get(j).put("APPR_GBN_CD", "A02");
					}
				}
			}
			wfApprovalMtList.addAll(addList);
		}
		return wfApprovalMtList;
	}
	
	public List<Map<String, Object>> getProcAppvRefUserList(Map<String, Object> dsCond) throws Exception {
		
		String[] apvWfProcCdArr = getApvWfPorCdStr(dsCond, true);
		
		String reqTmplatId	= StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer = StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));
		
		List<Map<String, Object>> procAppvDtList = getProcAppvHtList(reqTmplatId, reqTmplatVer, apvWfProcCdArr);	//param : [REQ_TMPLAT_ID, REQ_TMPLAT_VER, (APV_WF_PROC_CD_ARR or WF_PROC_CD) ]
		
		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));
		
		Map<String, Object> condMap = new HashedMap<String, Object>();
		
		if(!reqId.startsWith("REQ_")) {
			condMap.put("REQ_ID", reqId);
		}else {
			condMap.put("REQ_TMPLAT_ID", dsCond.get("REQ_TMPLAT_ID"));
			condMap.put("REQ_TMPLAT_VER", dsCond.get("REQ_TMPLAT_VER"));
		}
		
		List<Map<String, Object>> wfApprovalRefMtList = new ArrayList<Map<String,Object>>();	//단계별 결재선(참조) 을 취합해서 UI에 전체로 보낼 LIST
		List<Map<String, Object>> addRefList = new ArrayList<Map<String,Object>>();			//결재선(참조) 데이터를 담을 LIST
		
		for (int i = 0; i < procAppvDtList.size(); i++) {

			Map<String, Object> rowData = procAppvDtList.get(i);
            String wfProcCd			= StringUtil.safe(rowData.get("WF_PROC_CD"));
			String apprLvlSeq		= StringUtil.safe(rowData.get("APPR_LVL_SEQ"));
			String apprNm			= StringUtil.safe(rowData.get("APPR_NM"));
			String apprDirectYn		= StringUtil.safe(rowData.get("APPR_DIRECT_YN"));
			String apprProcDivCd	= StringUtil.safe(rowData.get("APPR_PROC_DIV_CD"));
			String apprProgDivCd	= StringUtil.safe(rowData.get("APPR_PROG_DIV_CD"));
			String svcNm			= StringUtil.safe(rowData.get("SVC_NM"));

			log.debug("[SR0010DServiceImpl]-getProcAppvRefUserList() procAppvDtList i={}\n" +
							" WF_PROC_CD:[{}] APPR_LVL_SEQ:[{}] APPR_NM : [{}] APPR_DIRECT_YN : [{}] APPR_PROC_DIV_CD : [{}] APPR_PROG_DIV_CD : [{}] SVC_NM : [{}]", 
							i, wfProcCd, apprLvlSeq, apprNm, apprDirectYn, apprProcDivCd, apprProgDivCd, svcNm
			);

			//임시 키가 아닌 경우
			if(!reqId.startsWith("REQ_")) {

				//단계-차수에 해당하는 저장된 결재선 목록 조회
				condMap = new HashedMap<String, Object>();
				condMap.put("REQ_ID", reqId);
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("APPR_LVL_SEQ", apprLvlSeq);
				addRefList = sr0010dSvc.select03(condMap);	//param : [REQ_ID, (APV_WF_PROC_CD_ARR or WF_PROC_CD) ]
			}

			//결재선에 진행단계-차수 데이터가 없어서 데이터를 생성해야 하는 경우}
			wfApprovalRefMtList.addAll(addRefList);
		}
		return wfApprovalRefMtList;
	}
}