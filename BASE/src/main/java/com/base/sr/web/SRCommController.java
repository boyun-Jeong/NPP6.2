package com.base.sr.web;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletRequest;
import org.quartz.JobKey;
import org.quartz.SchedulerException;
import org.quartz.TriggerKey;
import org.quartz.impl.matchers.GroupMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.filter.CommonFilter;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.service.impl.SRCommServiceImpl;
import com.base.wf.service.impl.WF0120WServiceImpl;

/**
 * @title - 요청서 공통 처리 Controller
 * @package com.base.sr.web
 * @author 정보윤
 * @since 2023. 05. 30.
 * @version 1.0
 * @see
 *
 *      =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2023. 05. 30. 정보윤 최초작성
 */
@Controller
@RequestMapping("SRComm")
public class SRCommController {

	private Logger log = LoggerFactory.getLogger(SRCommController.class);

	@Inject
	private Provider<SessionContext> sc;
	
	@Inject
	private Provider<GlobalReqInfo> reqInfo;

	@Autowired
	private SR0000DDAO sr0000DDao;

	@Autowired
	private SRCommServiceImpl srcommSvc;

	@Autowired
	private WF0120WServiceImpl wf0120wSvc;
	
	@Autowired
	private  FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;

	/**
	 * 요청서별 진행 단계 목록 조회 (WF_ID로 단계를 추출)
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectRegTblQuery")
	public NexacroResult selectRegTblQuery(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsQueryInfo = srcommSvc.selectRegTblQuery(dsCond);
		result.addDataSet("dsQueryInfo", dsQueryInfo);
		return result;
	}

	/**
	 * 요청서별 진행 단계 목록 조회 (WF_ID로 단계를 추출)
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectReqInfo")
	public NexacroResult selectReqInfo(@ParamDataSet(name = "dsReqCond") Map<String, Object> dsReqCond) throws Exception {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsReqRegTblInfo = srcommSvc.selectReqRegTblInfo(dsReqCond);
		//log.debug("[SRCommController]-dsReqRegTblInfo.size()==========================[{}]", dsReqRegTblInfo.size());
		result.addDataSet("dsReqRegTblInfo", dsReqRegTblInfo);

		List<Map<String, Object>> dsReqProcSvcInfo = srcommSvc.selectReqProcSvcInfo(dsReqCond);
		//log.debug("[SRCommController]-dsReqProcSvcInfo.size()==========================[{}]", dsReqProcSvcInfo.size());
		result.addDataSet("dsReqProcSvcInfo", dsReqProcSvcInfo);
		return result;
	}

	/**
	 * 요청서별 진행 단계 목록 조회 (WF_ID로 단계를 추출)
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectWfProcCdList")
	public NexacroResult selectWfProcCdList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsWfProcCdList = srcommSvc.selectWfProcCdList(dsCond);
		result.addDataSet("dsWfProcCdList", dsWfProcCdList);
		return result;
	}

	/**
	 * 요청서 조회 전처리
	 * @param HttpServletRequest
	 * @return NexacroResult
	 */
	@RequestMapping("/preSelect")
	public NexacroResult preSelect(HttpServletRequest req) throws Exception {
		return prePostSelect("PRE", req);
	}

	/**
	 * 요청서 조회 후처리
	 * @param HttpServletRequest
	 * @return NexacroResult
	 */
	@RequestMapping("/postSelect")
	public NexacroResult postSelect(HttpServletRequest req) throws Exception {
		return prePostSelect("POST", req);
	}

	/**
	 * 요청서 조회 전처리/후처리 처리 함수
	 * @param String	["PRE", "POST"]
	 * @param HttpServletRequest
	 * @return NexacroResult
	 */
	public NexacroResult prePostSelect(String gubun, HttpServletRequest req) throws Exception {

		NexacroResult result = new NexacroResult();

		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(req, "PlatformSsv", "UTF-8");
		httpPlatformRequest.receiveData();
		PlatformData platformData = httpPlatformRequest.getData();
		
		try {
			result = srcommSvc.prePostSelectProc(gubun, platformData.getDataSetList());

		}catch(Exception e) {

			result.setErrorCode(-1);
			if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {
				if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
					result.setErrorCode(-90000);
				} else {
					result.setErrorCode(sc.get().getScSessionCode());
				}
				sc.get().setScSessionCode(0);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");

			} else {

				result.setErrorCode(-1);
				if (e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());
				} else {
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
		}
		return result;
	}

	/**
	 * 요청서 저장 전처리
	 * @param HttpServletRequest
	 * @return NexacroResult
	 */
	@RequestMapping("/preSave")
	public NexacroResult preSave(HttpServletRequest req) throws Exception {
		return prePostSave("PRE", req);
	}

	/**
	 * 요청서 저장 후처리
	 * @param HttpServletRequest
	 * @return NexacroResult
	 */
	@RequestMapping("/postSave")
	public NexacroResult postSave(HttpServletRequest req) throws Exception {
		return prePostSave("POST", req);
	}

	/**
	 * 요청서 조회 전처리/후처리 처리 함수
	 * @param String	["PRE", "POST"]
	 * @param HttpServletRequest
	 * @return NexacroResult
	 * @return
	 */
	public NexacroResult prePostSave(String gubun, HttpServletRequest req) throws Exception {

		NexacroResult result = new NexacroResult();
		
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(req, "PlatformSsv", "UTF-8");
		httpPlatformRequest.receiveData();
		PlatformData platformData = httpPlatformRequest.getData();
		
		try {
		
			result = srcommSvc.prePostSaveProc(gubun, platformData.getDataSetList());
			
		}catch(Exception e) {

			result.setErrorCode(-1);
			if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {
				if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
					result.setErrorCode(-90000);
				} else {
					result.setErrorCode(sc.get().getScSessionCode());
				}
				sc.get().setScSessionCode(0);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");

			} else {

				result.setErrorCode(-1);
				if (e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());
				} else {
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
		}
		return result;
	}

	/**
	 * 요청서 템플릿에서 Form DIV 영역 조회 서비스를 얻어와서 통합으로 조회 서비스를 실행 함수
 	 * @param HttpServletRequest
	 * @return NexacroResult
	 * @throws Throwable
	 */
	@RequestMapping("/select")
	public NexacroResult select(HttpServletRequest req) throws Throwable {
		
		NexacroResult result = new NexacroResult();
		
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(req, "PlatformSsv", "UTF-8");
		httpPlatformRequest.receiveData();
		PlatformData platformData = httpPlatformRequest.getData();
		
		try {
			result = srcommSvc.selectProc(platformData.getDataSetList());

		}catch(Exception e) {
			
			result.setErrorCode(-1);
			if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {
				if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
					result.setErrorCode(-90000);
				} else {
					result.setErrorCode(sc.get().getScSessionCode());
				}
				sc.get().setScSessionCode(0);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");

			} else {

				result.setErrorCode(-1);
				if (e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());
				} else {
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
		}
		return result;
	}

	/**
	 * 요청서 템플릿에서 Form DIV 영역 저장 서비스를 얻어와서 통합으로 저장 서비스를 실행 함수
	 * @param HttpServletRequest
	 * @return NexacroResult
	 * @throws Throwable
	 */
	@RequestMapping("/save")
	public NexacroResult save(HttpServletRequest req) throws Throwable {
		//log.debug("[SRCommController]-save Start:::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
		NexacroResult result = new NexacroResult();
		
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(req, "PlatformSsv", "UTF-8");
		httpPlatformRequest.receiveData();
		PlatformData platformData = httpPlatformRequest.getData();
		
		try {
			result = srcommSvc.saveProc(platformData.getDataSetList());

		}catch(Exception e) {
			
			log.debug("[SRComm]-save e.getCause() : " + e.getCause() + "\ne.getMessage() : " + e.getMessage() + "\ngetScSessionMsg:[" + sc.get().getScSessionMsg() + "]");
			result.setErrorCode(-1);

			if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {

				if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
					result.setErrorCode(-90000);
				} else {
					result.setErrorCode(sc.get().getScSessionCode());
				}
				sc.get().setScSessionCode(0);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");
				log.debug("[SRComm]-save result.getErrorCode() : " + result.getErrorCode() + " result.getErrorMsg() : " + result.getErrorMsg() + "");

			} else {

				result.setErrorCode(-1);
				if (e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());
				} else {
					log.debug("SrCommController [save] 실행 중 오류가 발생했습니다.");
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
			return result;
		}

		if(!"Y".equals(reqInfo.get().getTempSaveYn())) {

			try {
				log.debug("[SRCommController]-save() 알림발송 시작====================================");
				srcommSvc.sendNotiReq();
				log.debug("[SRCommController]-save() 알림발송 끝====================================");			
			}catch(Exception e) {}
		}
		
		return result;
	}

	/**
	 * 결재 처리인 경우 최종승인시점 여부 조회
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/testSendDataCheck")
	public NexacroResult testSendDataCheck(@ParamDataSet(name = "dsFormInfo") Map<String, Object> dsFormInfo) throws Exception {

		NexacroResult result = new NexacroResult();
		GlobalReqInfo.setReqInfo(reqInfo, dsFormInfo);
		Map<String, Object> reqInfoMap = GlobalReqInfo.getMapReqInfo(reqInfo);
		List<Map<String, Object>> rtnSendList = fommScheduleCommonSvcImpl.sendFommNotiMngDtByReqProc(reqInfoMap, false);		
		result.addDataSet("dsRtnSendList", rtnSendList);
		return result;
	}

	/**
	 * 결재 처리인 경우 최종승인시점 여부 조회
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/saveCheck")
	public NexacroResult saveCheck(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();

		String lastApprovalYn = "N";

		String saveGubun = StringUtil.safe(dsCond.get("SAVE_GUBUN"));
		String tempSaveYn = StringUtil.safe(dsCond.get("TEMP_SAVE_YN"));

		//log.debug("[SRCommController]-saveCheck() saveGubun:[{}] tempSaveYn:[{}]", saveGubun, tempSaveYn);

		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));

		if (reqId.indexOf("REQ_") > -1) {
			dsCond.put("REQ_ID", null);
			reqId = "";
		}

		if ("APV".equals(saveGubun) && !"".equals(reqId) && "N".equals(tempSaveYn)) {
			lastApprovalYn = StringUtil.safe(srcommSvc.selectLastApprvalYn(dsCond), "N");
			//log.debug("[SRCommController]-saveCheck() lastApprovalYn:[{}]", lastApprovalYn);
		}

		Map<String, Object> outMap = new HashMap<>();
		outMap.put("LAST_APPROVAL_YN", lastApprovalYn);

		DataSet ds = StringUtil.getDataSetObject("dsFormInfo", dsCond);
		GlobalReqInfo.setReqInfo(reqInfo, ds);	//글로벌 변수 셋팅
		result.addDataSet("dsSaveCheck", outMap);
		return result;
	}
	
	/**
	 * 요청서 히스토리맵 조회
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectWfHistMap")
	public NexacroResult selectWfHistMap(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond)
			throws NexacroException {
		List<Map<String, Object>> dsMap = srcommSvc.selectWfHistMap(dsCond);
		List<Map<String, Object>> dsConts = srcommSvc.selectWfHistMapConts(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsMap", dsMap);
		result.addDataSet("dsConts", dsConts);
		return result;
	}

	/**
	 * 요청서 히스토리맵 Flow
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectWfHistFlow")
	public NexacroResult selectWfHistFlow(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond)
			throws NexacroException {
		List<Map<String, Object>> dsWorkFlow = srcommSvc.selectWfHistFlow(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWorkFlow", dsWorkFlow);
		return result;
	}

	/**
	 * 요청서 히스토리맵 Flow
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/selectWfHistFlowDetail")
	public NexacroResult selectWfHistFlowDetail(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String reqTmplatId = StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer = StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));
		String reqId = StringUtil.safe(dsCond.get("REQ_ID"));
		String gubun = StringUtil.safe(dsCond.get("GUBUN"));
		String wfProcCd = StringUtil.safe(dsCond.get("WF_PROC_CD"));
		
		//[PROC_YN] 해당단계 처리 여부를 화면에서 전달받고 있지만 결재단계는 진행여부와 상관없이 화면에서 Y로만 전달된다.
		String procYn = StringUtil.safe(dsCond.get("PROC_YN"));
		String apprLvlSeq = StringUtil.safe(dsCond.get("APPR_LVL_SEQ"));
		String wFProcSkipYn = StringUtil.safe(dsCond.get("WF_PROC_SKIP_YN"));

		log.debug("reqTmplatId:[" + reqTmplatId + "]");
		log.debug("reqTmplatVer:[" + reqTmplatVer + "]");
		log.debug("reqId:[" + reqId + "]");
		log.debug("gubun:[" + gubun + "]");
		log.debug("wfProcCd:[" + wfProcCd + "]");
		log.debug("procYn:[" + procYn + "]");
		log.debug("apprLvlSeq:[" + apprLvlSeq + "]");
		log.debug("wFProcSkipYn:[" + wFProcSkipYn + "]");
		
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		condMap.put("REQ_TMPLAT_VER", reqTmplatVer);
		condMap.put("WF_PROC_CD", wfProcCd);

		Map<String, Object> rtnMap = new HashMap<>();
		rtnMap.put("EXTD_NM", "");
		rtnMap.put("APPR_CNT", 0);

		rtnMap.put("PROC_INFO", "");
		rtnMap.put("PROC_CONTS", "");
		rtnMap.put("APPR_COMMENT", "");
		
		if ("N".equals(wFProcSkipYn)) {

			if ("1".equals(gubun)) { // 담당자

				if(!"WF_PROC_1000".equals(wfProcCd)) {
					//rtnMap.put("EXTD_NM", "[담당자]");
					rtnMap.put("EXTD_NM", "[상세]");
				}

				List<Map<String, Object>> procDtList = wf0120wSvc.selectWfReqTmplatProcHt(condMap);

				if (procDtList != null) {

					if (procDtList.size() == 1) {

						String cgerTypeCd = StringUtil.safe(procDtList.get(0).get("CGER_TYPE_CD"));

						if ("03".equals(cgerTypeCd)) { // 역할자
							List<Map<String, Object>> extdNmList = srcommSvc.selectWfHistExtdNm(condMap);

							if (extdNmList != null) {

								if (extdNmList.size() == 1) {
									//rtnMap.put("EXTD_NM", "[" + extdNmList.get(0).get("EXTD_NM") + "]");
									rtnMap.put("EXTD_NM", "[상세]");
								}
							}
						}
					}
				}

				if ("WF_PROC_1000".equals(wfProcCd)) {

					String reqUserNm			= "";
					String reqUserTelNum	= "";
					
					if (!"".equals(reqId)) {

						condMap = new HashMap<>();
						condMap.put("REQ_ID", reqId);
						Map<String, Object> baseInfo = sr0000DDao.select01(dsCond);
						reqUserNm		= StringUtil.safe(baseInfo.get("REQ_USER_NM"));
						reqUserTelNum = StringUtil.safe(baseInfo.get("REQ_USER_TELNUM"));

					}else {
						
						reqUserNm		= StringUtil.safe(sc.get().getScUserNm());
						reqUserTelNum	= StringUtil.safe(sc.get().getScTelnum());
					}
					
					log.debug("reqUserTelNum===============>" + reqUserTelNum);
					
					if("".equals(reqUserTelNum)) {
						rtnMap.put("EXTD_NM", reqUserNm);
					}else {
						rtnMap.put("EXTD_NM", reqUserNm + "(내선 : " + reqUserTelNum + ")");
					}
				}

			}else if ("2".equals(gubun)) { // 결재
				//rtnMap.put("EXTD_NM", "[결재선 상세보기]"); // 현업요청으로 변경 250319 ljb
				rtnMap.put("EXTD_NM", "[상세]"); // 현업요청으로 변경 250319 ljb

				condMap = new HashMap<>();
				condMap.put("REQ_ID", reqId);
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("APPR_LVL_SEQ", apprLvlSeq);
				Map<String, Object> procContList = srcommSvc.selectApvUserInfo(condMap);
				rtnMap.put("PROC_INFO", StringUtil.safe(procContList.get("PROC_INFO")));
				
				int appvCnt = StringUtil.safeInt(procContList.get("APPV_CNT"), 0);

				if(appvCnt == 0)	procYn = "N";
			}

			if ("Y".equals(procYn)) {

				condMap = new HashMap<>();
				condMap.put("REQ_ID",				reqId);
				condMap.put("WF_PROC_CD",		wfProcCd);
				condMap.put("APPR_LVL_SEQ",	apprLvlSeq);
				condMap.put("GUBUN",				gubun);
				List<Map<String, Object>> procContList = srcommSvc.selectWfHistProcCont(condMap);

				if (procContList != null) {

					if (procContList.size() == 1) {
						
						if ( ("1".equals(gubun) && !"WF_PROC_1000".equals(wfProcCd)) || "2".equals(gubun)) {
							rtnMap.put("PROC_INFO",			StringUtil.safe(procContList.get(0).get("PROC_INFO")));
							rtnMap.put("PROC_CONTS",		StringUtil.safe(procContList.get(0).get("PROC_CONTS")));
							rtnMap.put("APPR_COMMENT",	StringUtil.safe(procContList.get(0).get("APPR_COMMENT")));
						}
					}
				}

			}else {
				
				if("1".equals(gubun)) {

					if (!"WF_PROC_1000".equals(wfProcCd)) {
						condMap = new HashMap<>();
						condMap.put("REQ_ID",			reqId);
						condMap.put("WF_PROC_CD",	wfProcCd);
						Map<String, Object> procContList = srcommSvc.selectCgerUserInfo(condMap);
						rtnMap.put("PROC_INFO", StringUtil.safe(procContList.get("PROC_INFO")));
					}
				}
//				else if("2".equals(gubun)) {
//					condMap = new HashMap<>();
//					condMap.put("REQ_ID", reqId);
//					condMap.put("WF_PROC_CD", wfProcCd);
//					condMap.put("APPR_LVL_SEQ", apprLvlSeq);
//					Map<String, Object> procContList = srcommSvc.selectApvUserInfo(condMap);
//					rtnMap.put("PROC_INFO", StringUtil.safe(procContList.get("PROC_INFO")));
//				}
			}
		}
		
		log.debug("[EXTD_NM]======================>" + rtnMap.get("EXTD_NM"));
		result.addDataSet("dsProcConts", rtnMap);
		return result;
	}
	
	/**
	 * 요청서별 진행 단계 목록 조회 (WF_ID로 단계를 추출)
	 * @param Map<String, Object>
	 * @return NexacroResult
	 */
	@RequestMapping("/wfProcDelete")
	public NexacroResult wfProcDelete(@ParamDataSet(name = "dsFormInfo") Map<String, Object> dsFormInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		srcommSvc.wfProcDelete(dsFormInfo);
		return result;
	}
	
	/**
	 * 요청서별 진행 단계 목록 조회 (WF_ID로 단계를 추출)
	 * @param Map<String, Object>	dataMap 필수 전달 항목 : [REQ_ID, SAVE_GUBUN, WF_PROC_CD, MAP_WF_PROC_CD, REQ_STAT_CD, OPINION, SEQ(일괄결재인 경우 필수) ] (※현재는 WF_FUNC_CD는 자동 셋팅하나 추후 다른 기능 추가되면 필수로 변경될 수 있음)
	 * @return NexacroResult
	 */
	@RequestMapping("/execReqProc")
	public NexacroResult execReqProc(@ParamDataSet(name = "dsData") Map<String, Object> dataMap) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			srcommSvc.execReqProc(dataMap);

		}catch(Exception e) {
			
			e.printStackTrace();

			if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {

				if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
					result.setErrorCode(-90000);
				}else {
					result.setErrorCode(sc.get().getScSessionCode());
				}
				sc.get().setScSessionCode(0);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");
				log.debug("[SRComm]-execReqProc() result.getErrorCode() : " + result.getErrorCode() + " result.getErrorMsg() : " + result.getErrorMsg() + "");

			}else {

				result.setErrorCode(-1);				
				if (e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());

				}else {
					log.debug("[SrCommController]-execReqProc() 실행 중 오류가 발생했습니다.");
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
		}
		return result;
	}
	
	/**
	 * 결재 처리인 경우 최종승인시점 여부 조회
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/saveCheckReq")
	public NexacroResult saveCheckReq(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result	= new NexacroResult();
		String reqId				= StringUtil.safe(dsCond.get("REQ_ID"));
		String saveGubun		= StringUtil.safe(dsCond.get("SAVE_GUBUN"));
		String tempSaveYn		= StringUtil.safe(dsCond.get("TEMP_SAVE_YN"));
		String wfProcCd			= StringUtil.safe(dsCond.get("WF_PROC_CD"));

		if("REG".equals(saveGubun)) {
			dsCond.put("WF_FUNC_CD", "WF_FUNC_00");
		}else if("REV".equals(saveGubun)) {
			dsCond.put("WF_FUNC_CD", "WF_FUNC_04");
		}else if("APV".equals(saveGubun)) {
			dsCond.put("WF_FUNC_CD", "WF_FUNC_01");
		}else if("RTRN".equals(saveGubun)) {
			dsCond.put("WF_FUNC_CD", "WF_FUNC_01");
		}else if("SCRN_RTRN".equals(saveGubun)) {
			dsCond.put("WF_FUNC_CD", "WF_FUNC_04");
		}else if("TEMP".equals(saveGubun)) {			
			if("WF_PROC_1000".equals(wfProcCd)) {
				dsCond.put("WF_FUNC_CD", "WF_FUNC_00");
			}else {
				dsCond.put("WF_FUNC_CD", "WF_FUNC_04");
			}
		}

		String lastApprovalYn = "N";

		//log.debug(""[SRCommController]-saveCheckReq() saveGubun:[{}] tempSaveYn:[{}]", saveGubun, tempSaveYn);
		if (reqId.indexOf("REQ_") > -1) {
			dsCond.put("REQ_ID", null);
			reqId = "";
		}

		if ("APV".equals(saveGubun) && !"".equals(reqId) && "N".equals(tempSaveYn)) {
			lastApprovalYn = StringUtil.safe(srcommSvc.selectLastApprvalYn(dsCond), "N");
			//log.debug(""[SRCommController]-saveCheckReq() lastApprovalYn:[{}]", lastApprovalYn);
		}

		Map<String, Object> outMap = new HashMap<>();
		outMap.put("LAST_APPROVAL_YN", lastApprovalYn);

		DataSet ds = StringUtil.getDataSetObject("dsFormInfo", dsCond);
		GlobalReqInfo.setReqInfo(reqInfo, ds);	//글로벌 변수 셋팅

		String[] nextWfProcFuncCd = null;

		// 다음 단계/기능을 구한다. 로직이 진행된 상태에서는 절대 다음단계를 구하지 않는다.
		nextWfProcFuncCd = srcommSvc.getNextWfProcFuncCd(
				StringUtil.safe(reqId),
				StringUtil.safe(StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"))), saveGubun, wfProcCd,
				StringUtil.safe(lastApprovalYn)
		);
		reqInfo.get().setNextWfProcCd(nextWfProcFuncCd[0]);
		reqInfo.get().setNextWfFuncCd(nextWfProcFuncCd[1]);

		log.debug("[SRCommController]-save() reqInfo.get().getNextMapWfProcCd() : [{}]",	reqInfo.get().getNextMapWfProcCd());
		log.debug("[SRCommController]-save() reqInfo.get().getNextWfProcCd() : [{}]",			reqInfo.get().getNextWfProcCd());
		log.debug("[SRCommController]-save() reqInfo.get().getNextWfProcNm() : [{}]",			reqInfo.get().getNextWfProcNm());
		log.debug("[SRCommController]-save() reqInfo.get().getNextWfFuncCd() : [{}]",			reqInfo.get().getNextWfFuncCd());

		if (nextWfProcFuncCd != null) {
			outMap.put("NEXT_WF_PROC_CD",			nextWfProcFuncCd[0]);
			outMap.put("NEXT_WF_PROC_NM",			reqInfo.get().getNextWfProcNm());
			outMap.put("NEXT_WF_FUNC_CD",			nextWfProcFuncCd[1]);
			outMap.put("MAP_PROC_CD",					reqInfo.get().getMapProcCd());
			outMap.put("MAP_WF_PROC_CD",			reqInfo.get().getMapWfProcCd());
			outMap.put("NEXT_MAP_WF_PROC_CD",	reqInfo.get().getNextMapWfProcCd());

			if ("".equals(nextWfProcFuncCd[0])) {
				result.setErrorCode(-1);
				result.setErrorMsg("[다음 단계 체크] 현재 진행 단계 이후 다음 단계가 설정되지 않아 요청서 진행이 불가능합니다.");

			} else if (!"WF_PROC_9999".equals(nextWfProcFuncCd[0]) && "".equals(nextWfProcFuncCd[1])) {
				result.setErrorCode(-2);
				result.setErrorMsg("[다음 단계 기능 체크] 다음 단계에 대한 기능이 설정되지 않아 요청서 진행이 불가능합니다.");
			}

		} else {
			result.setErrorCode(-3);
			result.setErrorMsg("[다음 단계/기능 체크] 다음 단계 및 기능이 설정되지 않아 요청서 진행이 불가능합니다.");
		}
		result.addDataSet("dsSaveCheck", outMap);
		return result;
	}

	/**
	 * 현재 서버에 등록되어 있는 JOB_LIST를 추출한다.
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/getServerJobList")
	public NexacroResult getServerJobList() throws Exception {

		log.debug("[SRComm] getServerJobList()");
		
		NexacroResult result	= new NexacroResult();
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();

		if(CommonFilter.getScheduler() != null) {

			Set<JobKey> allJobKeys = CommonFilter.getScheduler().getJobKeys(GroupMatcher.anyGroup());			
	         allJobKeys.forEach(jobKey->{
	        	 Map<String, Object> map = new HashMap<String, Object>();
	        	 log.debug("[allJobKeys] jobNo:[{}], jobKey:[{}]", jobKey.getName(), jobKey);
	        	 map.put("JOB_KEY",	jobKey.toString());
	        	 map.put("JOB_NO",	jobKey.getName());
	        	 list.add(map);
	         });
	         
	         Set<TriggerKey> allTriggerKeys = CommonFilter.getScheduler().getTriggerKeys(GroupMatcher.anyTriggerGroup());
	         allTriggerKeys.forEach(triggerKey->{
	        	 log.debug("[allTriggerKeys] name:[{}], triggerKey:[{}]", triggerKey.getName(), triggerKey);

	        	 try {

        			 for (int i = 0; i < list.size(); i++) {
        				 
        				 String jobNo = StringUtil.safe(list.get(i).get("JOB_NO"));
        				 String tJobNo = CommonFilter.getScheduler().getTrigger(triggerKey).getJobKey().getName();

        				 log.debug("[allTriggerKeys] jobNo : " + jobNo + " tJobNo : " + tJobNo);
        				 
        				 if( jobNo.equals(tJobNo)) {
        					 Date execDate = CommonFilter.getScheduler().getTrigger(triggerKey).getFireTimeAfter(null);
        					 SimpleDateFormat df	= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	        			 String execDateStr = df.format(execDate);
    	        			 list.get(i).put("EXEC_DT", execDateStr);
    	        			 log.debug("[allTriggerKeys] jobNo : " + jobNo + " execDateStr : " + execDateStr);
    		        		 log.debug("[allTriggerKeys] jobNo : " + jobNo + " getNextFireTime(0) : " + df.format(CommonFilter.getScheduler().getTrigger(triggerKey).getNextFireTime()));
    	        			 break;
        				 }
					}
        		 
	        	 }catch(SchedulerException e) {
	        		 e.printStackTrace();
	        	 }
	         });
		}
		result.addDataSet("dsJobList", list);
		return result;
	}
}