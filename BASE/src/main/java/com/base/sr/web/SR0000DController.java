package com.base.sr.web;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.service.FommScheduleJobService;
import com.base.com.vo.SessionContext;
import com.base.fwk.schedule.SppJobControl;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.service.SR0000DService;
import com.base.sr.service.SRCommService;
import com.base.wf.service.WF0120WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 기본정보 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Controller
//@Transactional
@RequestMapping("SR0000D")
public class SR0000DController {

	private Logger log = LoggerFactory.getLogger(SR0000DController.class);

	@Inject
	private Provider<SessionContext> sc;
	
	@Autowired
	private SR0000DService sr0000dSvc;
	
	@Autowired
	private SR0000DDAO sr0000dDao;

	@Autowired
	private SRCommService srCommSvc;
	
	@Autowired
	private WF0120WService wf0120wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Autowired
	private FommScheduleJobService fommScheduleJobSvc;

	@Autowired
	private SppJobControl sppJobCotrol;

	/**
	 * 요청서 ID에 해당하는 REQ_TMPLAT_ID, REQ_TMPLAT_VER 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectReqTmplatIdVerByReqId")
	public NexacroResult selectReqTmplatIdVerByReqId(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond)  {
		
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> reqTmplatIdVer = sr0000dSvc.selectReqTmplatIdVerByReqId(dsCond);
		result.addDataSet("dsWfReqTmplatIdVer", reqTmplatIdVer);
		return result;
	}
	
	/**
	 * 요청서 기본 정보 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException, Exception, NullPointerException {

		NexacroResult result = new NexacroResult();
		
//		String condReqId	= StringUtil.safe(dsCond.get("REQ_ID"));
//		String condEncReqId = StringUtil.safe(dsCond.get("ENC_REQ_ID"));
//		String encReqId	= "";
//		
//		if(!"".equals(condReqId) && !condReqId.startsWith("REQ_")) {
//				
//			encReqId = StringUtil.encKeyData(condReqId + sc.get().getEncUserKey());
//		}

		Map<String, Object> dsSrBaseInfo = new HashMap<String, Object>();

//		log.debug("condReqId=[" + condReqId + "]");
//		log.debug("condEncReqId=[" + condEncReqId + "]");
//		log.debug("xxxxxxxxxxxxencReqId=[" + encReqId + "]");
//
//		if(!condReqId.startsWith("REQ_") && !"".equals(condReqId)) {
//			
//			if(condEncReqId.equals(encReqId)) {
//
//				log.debug("ENC_REQ_ID=>일치");
//				dsSrBaseInfo = sr0000dSvc.select01(dsCond);
//				log.debug("BF encReqId : " + encReqId);
//				result.addDataSet("dsSrBaseInfo", dsSrBaseInfo);
//
//			}else {
//
//				result.setErrorCode(-90000);
//				result.setErrorMsg("요청서 번호가 변경되어 조회 진행이 불가능 합니다.");
//				return result;
//			}
//
//		}else {
//			
//			log.debug("[SR0000D] select01 ELSE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//			dsSrBaseInfo = sr0000dSvc.select01(dsCond);
//		}
		dsSrBaseInfo = sr0000dSvc.select01(dsCond);

		String sessUserId			= sc.get().getScUserId();
		String reqId				= StringUtil.safe(dsSrBaseInfo.get("REQ_ID"));					//요청서ID
		String wfProcCd				= StringUtil.safe(dsSrBaseInfo.get("WF_PROC_CD"));				//요청서진행단계코드
		String condWfFuncCd			= StringUtil.safe(dsCond.get("WF_FUNC_CD"));					//검색 조건으로 넘어온 기능코드
		String wfFuncCd				= StringUtil.safe(dsSrBaseInfo.get("WF_FUNC_CD"));				//현재 요청서 처리기능(/* CODE_DIV:[WORKFLOW_CD] UP_CMM_CD:[WF_FUNC_CD] 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00:[등록], WF_FUNC_01:[결재], WF_FUNC_03:[회람], WF_FUNC_04:[담당자] */
		String reqStatCd			= StringUtil.safe(dsSrBaseInfo.get("REQ_STAT_CD"), "RQST00");	//요청상태
		String reqUserId			= StringUtil.safe(dsSrBaseInfo.get("REQ_USER_ID"));				//요청자ID
		String isCopy				= StringUtil.safe(dsCond.get("IS_COPY"));						//복사여부
		boolean isApvDivSaveAuth	= true;															//결재선 DIV영역 저장 가능 여부
		int seq						= StringUtil.safeInt(dsCond.get("SEQ"), -1);					//결재SEQ

		dsSrBaseInfo.put("SEQ", seq);

//		String chkAdv		= StringUtil.safe(dsCond.get("CHK_ADV"));
//
//		/* 계약관련 변수 */
//		String extdId       = sc.get().getScExtdId();
//		String[]extdAuth	= extdId.split(",");
//		//boolean isAdmin		= "Y".equals(fommAuthSvc.getMenuAuth("ADMIN_YN").getVariables().get("AUTH_YN"));
//		boolean isAdmin		=  Arrays.stream(extdAuth).anyMatch("EXTD_IVCT_MNG"::equals);
//		String authGrps		= sc.get().getScAuthId();
//		String[] aryAuth	= authGrps.split(",");
//		boolean isSysAdmin	= Arrays.stream(aryAuth).anyMatch("IT_PT_MNG"::equals);		

		//등록자(WF_FUNC_00) 권한
		String wfRegBtnYn		= StringUtil.safe(dsSrBaseInfo.get("REG_BTN_YN"), "N");		//등록자 등록버튼 사용여부
		String wfSaveBtnYn		= StringUtil.safe(dsSrBaseInfo.get("SAVE_BTN_YN"), "N");	//등록자 저장버튼 사용여부
		String wfCancelBtnYn	= StringUtil.safe(dsSrBaseInfo.get("CANCEL_BTN_YN"), "N");	//등록자 회수버튼 사용여부
		String wfDelBtnYn		= StringUtil.safe(dsSrBaseInfo.get("DEL_BTN_YN"), "N");		//등록자 삭제버튼 사용여부
		
		String saveBtnAuthYn		= "N";	//저장버튼 권한(WF_FUNC_00, WF_FUNC_01, WF_FUNC_04)
		String saveBtnText			= "임시저장";

		String regBtnAuthYn			= "N";	//등록버튼 권한(WF_FUNC_00)
		String cancelBtnAuthYn		= "N";	//회수버튼 권한(WF_FUNC_00)
		String delBtnAuthYn			= "N";	//삭제버튼 권한(WF_FUNC_00)

		String revBtnAuthYn			= "N";	//접수버튼 권한(WF_FUNC_04)
		String revBtnText			= "접수";
		
		String scrnRtrnBtnAuthYn	= "N";	//반려버튼 권한(WF_FUNC_04)
		String scrnRtrnBtnText		= "반려";

		String apvBtnAuthYn			= "N";	//승인버튼 권한(WF_FUNC_01)
		String apvBtnText			= "승인";

		String rtrnBtnAuthYn		= "N";	//반려버튼 권한(WF_FUNC_01)
		String rtrnBtnText			= "반려";


		Map<String, Object> condMap = new HashedMap<String, Object>();

		log.debug("reqStatCd=====>" + reqStatCd + " seq=====>" + seq);

		int appvCnt = 0;
		
		//결재중
		if("RQST11".equals(reqStatCd)) {

			if(seq == -1) { //결재SEQ가 PARAM으로 넘어오지 않은 경우

				condMap.put("REQ_ID", dsCond.get("REQ_ID"));
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("USER_ID", sessUserId);
				List<Map<String, Object>> appvList = sr0000dSvc.selectAppvSeq(condMap); //처리해야할 경재 정보를 구해온다.

				if(appvList != null) {

					if(appvList.size() == 1) {

						seq = StringUtil.safeInt(appvList.get(0).get("SEQ"), -1);
						log.debug("결재SEQ=======================>" + seq);
					}
				}

				dsCond.put("SEQ", seq);
				log.debug("=======================================================================================");
				//dsSrBaseInfo = sr0000dDao.select01(dsCond);
			}
			dsSrBaseInfo.put("SEQ", seq);
		}

//		String userEditYn	= StringUtil.safe(dsSrBaseInfo.get("USER_EDIT_YN"));
//		String curApvUserYn	= StringUtil.safe(dsSrBaseInfo.get("CUR_APV_USER_YN"));
		
		/* 요청서상태코드[REQ_STAT_CD] - RQST00:[임시저장], RQST01:[등록], RQST11:[결재중], RQST91:[반려], RQST97:[폐기], RQST98:[중단], RQST99:[완료] */

		//WF_FUNC_CD 구하기
		if("".equals(wfFuncCd)) {
			
			//결재중
			if("RQST11".equals(reqStatCd)) {

				wfFuncCd = "WF_FUNC_01";	//결재자
			
				if(seq == -1) {
					
					if("WF_PROC_1000".equals(wfProcCd)) {
						wfFuncCd = "WF_FUNC_00";	//등록자
					}else {
						wfFuncCd = "WF_FUNC_04";	//담당자
					}
				}

			}else {

				if("WF_PROC_1000".equals(wfProcCd)) {	//등록 단계인 경우

					//임시저장, 반려
					if("RQST00".equals(reqStatCd) || "RQST91".equals(reqStatCd))	wfFuncCd = "WF_FUNC_00";	//등록자

				}else {

					if("RQST01".equals(reqStatCd) || "RQST91".equals(reqStatCd))	wfFuncCd = "WF_FUNC_04";	//담당자
				}
			}
		}

		log.debug("구해진 WF_FUNC_CD:[" + wfFuncCd + "]");

		//기능 셋팅
		dsSrBaseInfo.put("WF_FUNC_CD", wfFuncCd);

		if("Y".equals(wfCancelBtnYn))	cancelBtnAuthYn	= "Y";
		if("Y".equals(wfDelBtnYn))		delBtnAuthYn	= "Y";

		if("WF_FUNC_00".equals(wfFuncCd)) {	//등록 기능인 경우

			if("".equals(reqId) || "Y".equals(isCopy)) {

				saveBtnAuthYn	= "Y";
				regBtnAuthYn	= "Y";

			}else {
				
				if("Y".equals(wfSaveBtnYn))		saveBtnAuthYn	= "Y";
				if("Y".equals(wfRegBtnYn))		regBtnAuthYn	= "Y";
			}

			if("RQST01".equals(reqStatCd)) {	//등록, 결재중
			
				if(sessUserId.equals(reqUserId))	cancelBtnAuthYn	= "Y";
				
			}else if("RQST11".equals(reqStatCd)) {
				
				if(sessUserId.equals(reqUserId))	{
					
					condMap = new HashedMap<String, Object>();
					condMap.put("REQ_ID", dsCond.get("REQ_ID"));
					condMap.put("WF_PROC_CD", wfProcCd);
					condMap.put("APPR_LVL_SEQ", 1);	//※ 손보는 결재차수가 1만 있음 (결재차수 1은 추후 현재 진행중인 결재단계 및 차수를 구하는 쿼리로 대체 처리) 
					Map<String, Object> procContList = srCommSvc.selectApvUserInfo(condMap);						
					appvCnt = StringUtil.safeInt(procContList.get("APPV_CNT"), 0);	//승인 처리 건수
					
					if(appvCnt == 0)	cancelBtnAuthYn	= "Y";
					else						cancelBtnAuthYn	= "N";
				}
			}

		}else if("WF_FUNC_01".equals(wfFuncCd)) {	//결재 기능인 경우

			if(!"WF_FUNC_01".equals(condWfFuncCd) && !"WF_FUNC_04".equals(condWfFuncCd)) {	//파라미터로 넘어온 기능이 결재/처리함 전용이 아니면 회수 버튼도 보여준다.

				if("Y".equals(wfCancelBtnYn))	cancelBtnAuthYn	= "Y";
			}
			
			if("RQST11".equals(reqStatCd)) {	//결재중

				condMap = new HashedMap<String, Object>();
				condMap.put("REQ_ID", dsCond.get("REQ_ID"));
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("USER_ID", sessUserId);
				condMap.put("SEQ", seq);
				List<Map<String, Object>>  wfApprovalMt = srCommSvc.selectWfApprovalMt(condMap);	//승인대기 중 차수가 가장 빠른 내역중에 순번이 첫번째인 USER_ID
	
				boolean isSaveAuthUserCheck = false;

				if(wfApprovalMt != null) {
				
					if(wfApprovalMt.size() == 1) {

						String appvUserId = StringUtil.safe(wfApprovalMt.get(0).get("USER_ID"));
						String appvYn		= StringUtil.safe(wfApprovalMt.get(0).get("APPV_YN"));

						if("Y".equals(appvYn) && sessUserId.equals(appvUserId)) {

							apvBtnAuthYn	= StringUtil.safe(wfApprovalMt.get(0).get("APV_BTN_YN"), "N");		//승인버튼 권한
							apvBtnText		= StringUtil.safe(wfApprovalMt.get(0).get("APV_BTN_TEXT"), "승인");	//승인버튼 TEXT

							rtrnBtnAuthYn	= StringUtil.safe(wfApprovalMt.get(0).get("RTRN_BTN_YN"), "N");		//반려버튼 권한
							rtrnBtnText		= StringUtil.safe(wfApprovalMt.get(0).get("RTRN_BTN_TEXT"), "반려");	//반려버튼 TEXT

							saveBtnAuthYn	= StringUtil.safe(wfApprovalMt.get(0).get("SAVE_BTN_YN"), "N");		//저장버튼 권한
							saveBtnText		= StringUtil.safe(wfApprovalMt.get(0).get("SAVE_BTN_TEXT"), "저장");	//저장버튼 TEXT
						}

					}else {
						isSaveAuthUserCheck = true;
					}

				}else {

					isSaveAuthUserCheck = true;
				}
				
				if(isSaveAuthUserCheck) {

					condMap = new HashedMap<String, Object>();
					condMap.put("REQ_ID", dsCond.get("REQ_ID"));
					condMap.put("WF_PROC_CD", wfProcCd);
					condMap.put("USER_ID", sessUserId);
					List<Map<String, Object>> srCgerSubDtAuth = srCommSvc.selectSrCgerSubDtAuth(condMap);
					
					if(srCgerSubDtAuth != null) {
						
						if(srCgerSubDtAuth.size() == 1)  {
							String subCgerUserId = StringUtil.safe(srCgerSubDtAuth.get(0).get("USER_ID"));

							if(sessUserId.equals(subCgerUserId)) {
								saveBtnAuthYn	= "Y";
								saveBtnText		= StringUtil.safe(srCgerSubDtAuth.get(0).get("SAVE_BTN_TEXT"), "저장");	//저장버튼 TEXT
								isApvDivSaveAuth = false;
							}
						}
					}
				}
			}

		}else if("WF_FUNC_04".equals(wfFuncCd)) {	//담당자 기능인 경우

			if("RQST01".equals(reqStatCd) || "RQST91".equals(reqStatCd) || (seq == -1 && "RQST11".equals(reqStatCd))) {	//등록, 반려

				condMap = new HashedMap<String, Object>();
				condMap.put("REQ_ID", dsCond.get("REQ_ID"));
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("USER_ID", sessUserId);
				List<Map<String, Object>> srCgerDt = srCommSvc.selectSrCgerDtAuth(condMap);
				
				boolean isSaveAuthUserCheck = false;

				if(srCgerDt != null) {
					
					if(srCgerDt.size() == 1) {

						String revUserId = StringUtil.safe(srCgerDt.get(0).get("USER_ID"));

						if(sessUserId.equals(revUserId)) {
							
							if(!"RQST11".equals(reqStatCd)) {
								revBtnAuthYn		= StringUtil.safe(srCgerDt.get(0).get("APV_BTN_YN"), "N");		//접수버튼 권한
								revBtnText			= StringUtil.safe(srCgerDt.get(0).get("APV_BTN_TEXT"), "접수");	//접수버튼 TEXT
	
								scrnRtrnBtnAuthYn	= StringUtil.safe(srCgerDt.get(0).get("RTRN_BTN_YN"), "N");		//반려버튼 권한
								scrnRtrnBtnText		= StringUtil.safe(srCgerDt.get(0).get("RTRN_BTN_TEXT"), "반려");	//반려버튼 TEXT
	
								saveBtnAuthYn		= StringUtil.safe(srCgerDt.get(0).get("SAVE_BTN_YN"), "N");		//저장버튼 권한
								saveBtnText			= StringUtil.safe(srCgerDt.get(0).get("SAVE_BTN_TEXT"), "저장");	//저장버튼 TEXT
							}
						}

					}else {
						isSaveAuthUserCheck = true;
					}

				}else {

					isSaveAuthUserCheck = true;
				}
				
				if(isSaveAuthUserCheck) {

					condMap = new HashedMap<String, Object>();
					condMap.put("REQ_ID", dsCond.get("REQ_ID"));
					condMap.put("WF_PROC_CD", wfProcCd);
					condMap.put("USER_ID", sessUserId);
					List<Map<String, Object>> srCgerSubDtAuth = srCommSvc.selectSrCgerSubDtAuth(condMap);
					
					if(srCgerSubDtAuth != null) {
						
						if(srCgerSubDtAuth.size() == 1)  {
							String subCgerUserId = StringUtil.safe(srCgerSubDtAuth.get(0).get("USER_ID"));

							if(sessUserId.equals(subCgerUserId)) {
								saveBtnAuthYn = "Y";
								saveBtnText		= StringUtil.safe(srCgerSubDtAuth.get(0).get("SAVE_BTN_TEXT"), "저장");	//저장버튼 TEXT
								isApvDivSaveAuth = false;
							}
						}
					}
				}
			}
		}
		//기본 버튼 처리 End

		log.debug("REQ_ID:[" + reqId + "] SAVE_BTN_YN:[" + saveBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] REG_BTN_YN:[" + regBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] CANCEL_BTN_YN:[" + cancelBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] DEL_BTN_YN:[" + delBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] REV_BTN_YN:[" + revBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] REV_RTRN_BTN_YN:[" + scrnRtrnBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] APV_BTN_YN:[" + apvBtnAuthYn + "]");
		log.debug("REQ_ID:[" + reqId + "] RTRN_BTN_YN:[" + rtrnBtnAuthYn + "]");
		
//		log.debug("REQ_ID:[" + reqId + "] USER_EDIT_YN:[" + userEditYn + "]");
//		log.debug("REQ_ID:[" + reqId + "] CUR_APV_USER_YN:[" + curApvUserYn + "]");

		dsSrBaseInfo.put("SAVE_BTN_YN",			saveBtnAuthYn);		//저장
		dsSrBaseInfo.put("SAVE_BTN_TEXT",		saveBtnText);		//저장(임시저장)
		
		dsSrBaseInfo.put("REG_BTN_YN",			regBtnAuthYn);		//등록
		dsSrBaseInfo.put("CANCEL_BTN_YN",		cancelBtnAuthYn);	//회수
		dsSrBaseInfo.put("DEL_BTN_YN",			delBtnAuthYn);		//삭제
		
		dsSrBaseInfo.put("REV_BTN_YN",			revBtnAuthYn);		//담당자-승인
		dsSrBaseInfo.put("REV_BTN_TEXT",		revBtnText);
		
		dsSrBaseInfo.put("REV_RTRN_BTN_YN",		scrnRtrnBtnAuthYn);	//담당자-반려
		dsSrBaseInfo.put("REV_RTRN_BTN_TEXT",	scrnRtrnBtnText);
		
		dsSrBaseInfo.put("APV_BTN_YN",			apvBtnAuthYn);		//결재-승인
		dsSrBaseInfo.put("APV_BTN_TEXT",		apvBtnText);
		
		dsSrBaseInfo.put("RTRN_BTN_YN",			rtrnBtnAuthYn);		//결재-반려
		dsSrBaseInfo.put("RTRN_BTN_TEXT",		rtrnBtnText);

		dsSrBaseInfo.put("IS_APV_DIV_SAVE_AUTH", isApvDivSaveAuth);	//결재선 DIV 저장 권한
		
		
//		dsSrBaseInfo.put("USER_EDIT_YN",		userEditYn);
//		dsSrBaseInfo.put("CUR_APV_USER_YN",		curApvUserYn);

		result.addDataSet("dsSrBaseInfo", dsSrBaseInfo);

		List<Map<String, Object>> dsData = wf0120wSvc.select08(dsCond);
		result.addDataSet("dsWfReqTmplatMtHelp", dsData);
		return result;
	}
	
	/**
	 * 요청서 기본 정보 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsSrBaseInfo") Map<String, Object> dsSrBaseInfo) throws Exception {

		
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		return result;
	}

	/**
	 * 요청서 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/delete01")
	public NexacroResult delete01(@ParamDataSet(name = "dsSrBaseInfo") Map<String, Object> dsSrBaseInfo) throws Exception  {

		// 요청 메뉴 권한 확인
		//NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		NexacroResult result = new NexacroResult();

		String reqId		= StringUtil.safe(dsSrBaseInfo.get("REQ_ID"));
    	String reqTmplatId		= StringUtil.safe(dsSrBaseInfo.get("REQ_TMPLAT_ID"));
    	String wfProcCd		= StringUtil.safe(dsSrBaseInfo.get("WF_PROC_CD"));
    	String orgReqStatCd	= StringUtil.safe(dsSrBaseInfo.get("ORG_REQ_STAT_CD"));

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqId);
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		Map<String, Object> srBaseInfo = sr0000dDao.select01(condMap);
		
		if(srBaseInfo != null) {

			String dataWfProcCd		= StringUtil.safe(srBaseInfo.get("WF_PROC_CD"));
			String dataReqStatCd	= StringUtil.safe(srBaseInfo.get("REQ_STAT_CD"));
			
			log.debug("wfProcCd:[" + wfProcCd + "] dataWfProcCd:[" + dataWfProcCd + "]");
			log.debug("orgReqStatCd:[" + orgReqStatCd + "] dataReqStatCd:[" + dataReqStatCd + "]");

			if(!wfProcCd.equals(dataWfProcCd) || !orgReqStatCd.equals(dataReqStatCd)) {
				
				result.setErrorCode(-92000);
				result.setErrorMsg("요청서 상태가 변경되었습니다.");
				return result;
			}
		}
		
		srBaseInfo = sr0000dSvc.selectBaseInfo(condMap);
		
		String reservFlag = StringUtil.safe(srBaseInfo.get("RESERV_FLAG"));
		
		if("Y".equals(reservFlag)) {

			condMap = new HashMap<>();
			condMap.put("WORK_DIV", "REQ");
			condMap.put("EXEC_YN", "N");
			condMap.put("PK1", reqId);
			List<Map<String, Object>> reservList = fommScheduleJobSvc.selectReserveJobList(condMap);
			
			if(reservList != null) {

				for (int i = 0; i < reservList.size(); i++) {
					String reserveNo = StringUtil.safe(reservList.get(i).get("RESERVE_NO"));
					fommScheduleJobSvc.removeReserveJobMt(reserveNo);
					sppJobCotrol.removeJob("RESERVE_NO", reserveNo);		//스케쥴러 job 삭제
				}
			}
		}
		sr0000dSvc.delete01(dsSrBaseInfo);
		
		
		return result;
	}
	 
	/**
	 * 요청서 회수(취소) 처리
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/cancel")
	public NexacroResult cancel01(@ParamDataSet(name = "dsSrBaseInfo") Map<String, Object> dsSrBaseInfo) throws Exception  {

		// 요청 메뉴 권한 확인
		//NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		NexacroResult result = new NexacroResult();

		Map<String, Object> curSrBaseInfo = sr0000dDao.select01(dsSrBaseInfo);
		
		String WfProcCd = StringUtil.safe(dsSrBaseInfo.get("WF_PROC_CD"));
		String orgReqStatCd = StringUtil.safe(dsSrBaseInfo.get("ORG_REQ_STAT_CD"));

		String curWfProcCd = StringUtil.safe(curSrBaseInfo.get("WF_PROC_CD"));
		String curReqStatCd = StringUtil.safe(curSrBaseInfo.get("REQ_STAT_CD"));
		
		String curCancelPossYn = "";
		// 서비스/일반요청에서 회수시 결재라인을 우회해서 진입하기때문에 취소가능 직접지정
		if("WFT250033".equals(curSrBaseInfo.get("REQ_TMPLAT_ID")) 
				|| "WFT250048".equals(curSrBaseInfo.get("REQ_TMPLAT_ID")) 
				|| "WFT250049".equals(curSrBaseInfo.get("REQ_TMPLAT_ID"))) {
			curCancelPossYn = "Y";
		} else {
			curCancelPossYn = StringUtil.safe(curSrBaseInfo.get("CANCEL_POSS_YN"));
		}
		
		
		log.debug("WfProcCd:" + WfProcCd + " curWfProcCd : " + curWfProcCd + " orgReqStatCd : " + orgReqStatCd + " curReqStatCd : " + curReqStatCd);

		if("Y".equals(curCancelPossYn)) {

			if(curWfProcCd.equals(WfProcCd) && curReqStatCd.equals(orgReqStatCd)) {
				sr0000dSvc.cancel(dsSrBaseInfo);

			}else {
				
				if(!curWfProcCd.equals(WfProcCd)) {
					result.setErrorCode(-92000);
		            result.setErrorMsg("요청서 진행 단계가 변경되어 회수가 불가능합니다.");

				}else {
					result.setErrorCode(-92001);
		            result.setErrorMsg("요청서 진행 상태가 변경되어 회수가 불가능합니다.");
				}
		    	return result;
			}

		}else {
			result.setErrorCode(-92002);
            //result.setErrorMsg("요청서 회수가능 여부 상태가 [N]이므로 회수가 불가능합니다.");
            result.setErrorMsg("요청서 회수 처리가 가능한 상태가 아닙니다.");
	    	return result;
		}
		return result;
	}
	
	/**
	 * 요청서 폐기 처리
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/updateDiscard")
	public NexacroResult updateDiscard(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		sr0000dSvc.updateDiscard(dsCond);
		return result;
	}
	
	/**
	 * 요청서 기본 정보 원본 데이터 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		Map<String, Object> srBaseInfo = sr0000dSvc.selectBaseInfo(dsCond);
		result.addDataSet("dsSrBaseInfo", srBaseInfo);
		return result;
	}
	
	/**
	 * 요청서 예약 등록
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/procReserve")
	public NexacroResult procReserve(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsSrBaseInfo") Map<String, Object> dsSrBaseInfo) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		Map<String, Object> srBaseInfo = sr0000dSvc.selectBaseInfo(dsCond);
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		rtnMap.put("MSG", "");
		
		String reservFlag		= StringUtil.safe(srBaseInfo.get("RESERV_FLAG"), "N");
		String reservProcYn	= StringUtil.safe(srBaseInfo.get("RESERV_PROC_YN"), "N");
		
		if("Y".equals(reservFlag)) {
			rtnMap = new HashMap<String, Object>();
			rtnMap.put("MSG", "이미 예약 등록되어 있는 요청서입니다.");
		}
		
		if("Y".equals(reservProcYn)) {
			rtnMap = new HashMap<String, Object>();
			rtnMap.put("MSG", "이미 예약 등록 처리가 완료된 요청서입니다.");
		}
		
		if("N".equals(reservFlag) && "N".equals(reservProcYn)) {
			
			Date curDate = new Date();
			String reservDt = StringUtil.safe(dsSrBaseInfo.get("RESERV_DT"));
			String reservTime = StringUtil.safe(dsSrBaseInfo.get("RESERV_TIME") + "00");
			
			Date inputDate = StringUtil.getDateTimeFromString(reservDt + reservTime, true);

			long seconds = (inputDate.getTime()- curDate.getTime()) / 1000;			
			log.debug("seconds ====================================>" + seconds);

			if(seconds > 59) {
//			if(seconds > 5) {
				sr0000dSvc.updateProcReserve(dsSrBaseInfo);

			}else {
				
				if(seconds > 0) {
					rtnMap = new HashMap<String, Object>();
					rtnMap.put("MSG", "예약등록은 현재시간 기준 최소 1분 이후 부터 등록 가능합니다.");

				}else {
					rtnMap = new HashMap<String, Object>();
					rtnMap.put("MSG", "예약일시는 현재시간(시/분) 이후로만 등록 가능합니다.");
				}
			}
		}
		srBaseInfo = sr0000dSvc.selectBaseInfo(dsCond);
		result.addDataSet("dsSrBaseInfo", srBaseInfo);
		result.addDataSet("dsRtn", rtnMap);
		return result;
	}

	/**
	 * 요청서 예약 등록 취소
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/procCancelReserve")
	public NexacroResult procCancelReserve(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsSrBaseInfo") Map<String, Object> dsSrBaseInfo) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		Map<String, Object> srBaseInfo = sr0000dSvc.selectBaseInfo(dsCond);
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		rtnMap.put("MSG", "");

		String reservProcYn	= StringUtil.safe(srBaseInfo.get("RESERV_PROC_YN"), "N");
		
		if("Y".equals(reservProcYn)) {
			rtnMap = new HashMap<String, Object>();
			rtnMap.put("MSG", "이미 예약 등록 처리가 완료된 요청서입니다.");

		}else {
			
			String reservFlag = StringUtil.safe(srBaseInfo.get("RESERV_FLAG"), "N");
			
			if("N".equals(reservFlag)) {
				rtnMap = new HashMap<String, Object>();
				rtnMap.put("MSG", "예약 등록되지 않은 요청서이므로 예약 취소가 불가능 합니다.");

			}else {
				
				Date curDate = new Date();
				String reservDt = StringUtil.safe(dsSrBaseInfo.get("RESERV_DT"));
				String reservTime = StringUtil.safe(dsSrBaseInfo.get("RESERV_TIME") + "00");
				
				Date inputDate = StringUtil.getDateTimeFromString(reservDt + reservTime, true);

				long seconds = (inputDate.getTime()- curDate.getTime()) / 1000;			
				log.debug("seconds ====================================>" + seconds);
				
				//예약 등록 시간 10초 전/후로는 취소 처리 불가(예약 등록 시간이 지났으나 예약 등록 처리여부가 N인 경우는 정상 처리되지 않은 상태일 수 있으므로 예약 등록 취소 가능하도록 처리
				if(seconds >= 10) {
					sr0000dSvc.updateProcCancelReserve(dsSrBaseInfo);

				}else {
					
					if(seconds <= -10) {
						sr0000dSvc.updateProcCancelReserve(dsSrBaseInfo);

					}else {
						
						rtnMap = new HashMap<String, Object>();
						rtnMap.put("MSG", "예약 등록 처리가 진행중일 수 있으므로 현재 취소가 불가능합니다.");						
					}
				}
			}
		}
		srBaseInfo = sr0000dSvc.selectBaseInfo(dsCond);
		result.addDataSet("dsSrBaseInfo", srBaseInfo);
		result.addDataSet("dsRtn", rtnMap);
		return result;
	}
}