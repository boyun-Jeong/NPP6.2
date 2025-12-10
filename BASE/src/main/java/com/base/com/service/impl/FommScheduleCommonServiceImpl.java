package com.base.com.service.impl;

import java.net.Inet4Address;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.handshake.ServerHandshake;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.service.FommHearimTlkMgrService;
import com.base.com.service.FommMemoMgrService;
import com.base.com.service.FommSmsMgrService;
import com.base.fomm.dao.FOMM0500WDAO;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SRCommService;

@Service
public class FommScheduleCommonServiceImpl {

	private Logger log = LoggerFactory.getLogger(FommScheduleCommonServiceImpl.class);
	private static Logger logs = LoggerFactory.getLogger(FommScheduleCommonServiceImpl.class);
	
	@Autowired
	private FommSmsMgrService fommSmsMgrSvc;
	
	@Autowired
	private FommHearimTlkMgrService  fommHearimtlkMgrSvc;

	@Autowired
	private FommMemoMgrService fommMemoMgrSvc;

	@Autowired
	private SRCommService srcommSvc;
	
	@Autowired
	private FOMM0500WDAO fomm0500WDao;
	
	/*
	 * 알림 메시지 전송 Service 
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 전송구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
	 * Param3 전송구분 [String] sendTypeCd	- "SMS,TALK,MEMO"
	 * Param4 전송구분 [String] sendUserId	- 발신자 사번
	 * Param5 전송구분 [String] title				- 알림 제목
	 * Param6 전송구분 [String] msgConts		- 알림 내용
	 * Param7 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]를 LIST객체에 담아 넘김
	 * 															  쪽지인 경우 수신자 정보에 [RCV_TYPE_CD]를 담아 넘기고 넘기지 않을 경우 "TO"로 처리
	 * 															  ※ SEND_GUBUN이 "04"인 경우 [MAP_PROC_CD], [MAP_WF_PROC_CD] 항목에 값을 담아서 전달해야 함
	 */
	public void sendMsgTran(String sendNo, String sendGubun, String sendTypeCd, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception {

		log.debug("sendMsgTran() sendTypeCd : " + sendTypeCd);
		
		if(sendTypeCd.indexOf("SMS") > -1) {
			List<Map<String, Object>> smsList = insertSendDataSMS(sendNo, sendGubun, sendUserId, title, msgConts, userList);
			sendExecuteSMS(sendNo, sendGubun, smsList);
		}
		
		if(sendTypeCd.indexOf("TALK") > -1) {
			List<Map<String, Object>> hearimList = insertSendDataHEARIMTALK(sendNo, sendGubun, sendUserId, title, msgConts, userList);
			log.debug("[FommScheduleCommonServiceImpl] sendMsgTran() hearimList.size:[{}]", hearimList.size());
			sendExecuteHEARIMTALK(sendNo, sendGubun, hearimList);
		}
		
		if(sendTypeCd.indexOf("MEMO") > -1) {
			List<Map<String, Object>> memoList = insertSendDataMEMO(sendNo, sendGubun, sendUserId, title, msgConts, userList);
			if(memoList != null) {
				for (int i = 0; i < memoList.size(); i++) {
					
					Map<String, Object> memoRow = memoList.get(i);
					for(String colNm : memoRow.keySet()) {
						log.debug("[FommScheduleCommonServiceImpl] sendMsgTran() [MEMO] memoList {}행 COL_NM:[{}], VALUE:[{}]", i, colNm, memoRow.get(colNm));
					}
				}
			}
			sendExecuteMEMO(sendNo, sendGubun, memoList);
		}
	}

	/*
	 * SMS 데이터 등록 
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 알림구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
	 * Param3 전송구분 [String] sendUserId	- 발신자 사번
	 * Param4 전송구분 [String] title				- 알림 제목
	 * Param5 전송구분 [String] msgConts		- 알림 내용
	 * Param6 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]를 LIST객체에 담아 넘김
	 * 															  쪽지인 경우 수신자 정보에 [RCV_TYPE_CD]를 담아 넘기고 넘기지 않을 경우 "TO"로 처리
	 * 															  ※ SEND_GUBUN이 "04"인 경우 [MAP_PROC_CD], [MAP_WF_PROC_CD] 항목에 값을 담아서 전달해야 함
	 */
	public List<Map<String, Object>> insertSendDataSMS(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception {
		
		if(userList.size() > 0) {			
				log.debug("[FommScheduleCommonServiceImpl] fommSmsMgrSvc userList.size():[{}]", userList.size());
				return fommSmsMgrSvc.insertData(sendNo, sendGubun, sendUserId, title, msgConts, userList);
		}else {
			return new ArrayList<Map<String,Object>>();
		}
	}

	/*
	 * 헤아림TALK 데이터 등록
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 알림구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
	 * Param3 전송구분 [String] sendUserId	- 발신자 사번
	 * Param4 전송구분 [String] title				- 알림 제목
	 * Param5 전송구분 [String] msgConts		- 알림 내용
	 * Param6 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]를 LIST객체에 담아 넘김
	 * 															  쪽지인 경우 수신자 정보에 [RCV_TYPE_CD]를 담아 넘기고 넘기지 않을 경우 "TO"로 처리
	 * 															  ※ SEND_GUBUN이 "04"인 경우 [MAP_PROC_CD], [MAP_WF_PROC_CD] 항목에 값을 담아서 전달해야 함
	 */
	public List<Map<String, Object>> insertSendDataHEARIMTALK(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) {
		
		if(userList.size() > 0) {
			log.debug("[FommScheduleCommonServiceImpl] fommHearimtlkMgrSvc userList.size():[{}]", userList.size());
			return fommHearimtlkMgrSvc.insertData(sendNo, sendGubun, sendUserId, title, msgConts, userList);
		}else {
			return new ArrayList<Map<String,Object>>();
		}
	}

	/*
	 * ITSM 쪽지 데이터 등록 
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 알림구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
	 * Param3 전송구분 [String] sendUserId	- 발신자 사번
	 * Param4 전송구분 [String] title				- 알림 제목
	 * Param5 전송구분 [String] msgConts		- 알림 내용
	 * Param6 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]를 LIST객체에 담아 넘김
	 * 															  쪽지인 경우 수신자 정보에 [RCV_TYPE_CD]를 담아 넘기고 넘기지 않을 경우 "TO"로 처리
	 * 															  ※ SEND_GUBUN이 "04"인 경우 [MAP_PROC_CD], [MAP_WF_PROC_CD] 항목에 값을 담아서 전달해야 함
	 */
	public List<Map<String, Object>> insertSendDataMEMO(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception {
		
		if(userList.size() > 0) {		
			log.debug("[FommScheduleCommonServiceImpl] fommMemoMgrSvc userList.size():[{}]", userList.size());
			return fommMemoMgrSvc.insertData(sendNo, sendGubun, sendUserId, title, msgConts, userList);
		}else {
			return new ArrayList<Map<String,Object>>();
		}
	}

	/* SMS 전송 처리(미사용)
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- 00:통지설정, 01:JOB, 02:RESERVE, 03:실시간발송
	 * Param3 전송구분 [String] sendTypeCd	- SMS,TALK,MEMO 구분자를 ","로 발송을 원하는 통보매체 복수로 지정
	 * Param4 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
	 */
	public void sendExecuteSMS(String sendNo, String sendGubun, List<Map<String, Object>> userList) {
		
		if(userList != null) {

//			for (int i = 0; i < userList.size(); i++) {
//				Map<String, Object> rowData = userList.get(i);
				//fommSmsMgrSvc.sendSms(rowData);
//			}
		}
	}

	/* 헤아림TALK 전송 처리
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- 00:통지설정, 01:JOB, 02:RESERVE, 03:실시간발송
	 * Param3 전송구분 [String] sendTypeCd	- SMS,TALK,MEMO 구분자를 ","로 발송을 원하는 통보매체 복수로 지정
	 * Param4 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
	 */
	public void sendExecuteHEARIMTALK(String sendNo, String sendGubun, List<Map<String, Object>> userList) {

		if(userList != null) {

			log.debug("userList is not null userList.size() : " + userList.size());
			for (int i = 0; i < userList.size(); i++) {
				Map<String, Object> rowData = userList.get(i);
				fommHearimtlkMgrSvc.sendHearimtlk(rowData);
			}
		}else {
			
			log.debug("userList is is null");
		}
	}

	/* ITSM 쪽지 전송 처리
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- 00:통지설정, 01:JOB, 02:RESERVE, 03:실시간발송
	 * Param3 전송구분 [String] sendTypeCd	- SMS,TALK,MEMO 구분자를 ","로 발송을 원하는 통보매체 복수로 지정
	 * Param4 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
	 */
	public void sendExecuteMEMO(String sendNo, String sendGubun, List<Map<String, Object>> userList) {
		
		if(userList != null) {

			for (int i = 0; i < userList.size(); i++) {
				Map<String, Object> rowData = userList.get(i);
				fommMemoMgrSvc.sendFommMemo(rowData);
			}
		}
	}

	/*
	 * 배치 JOB 기본 WebSocket 전송 처리 서비스 
	 */
	public void sendWebsocketDefaultService(Map<String, Object> dataMap) throws Exception {

		log.debug("[FommScheduleCommonServiceImpl] sendWebsocketDefaultService()");
		String type			= "01";	//슬라이드 알림
        String target		= "";
        String message	= StringUtil.safe(dataMap.get("CONT_DESC"));
		callWebSocket(type, target, message);
	}

	/*
	 * 요청서 단계에 해당하는 통지 설정 Y/N 정보를 조회  
	 */
	public List<Map<String, Object>> sendFommNotiMngDtByReqProc(Map<String, Object> reqData, boolean isSend) throws Exception {
		
		Map<String, Object> rtnSendMap			= new HashMap<String, Object>();
		List<Map<String, Object>>rtnSendList	= new ArrayList<Map<String,Object>>();
		
		Map<String, Object> userMap				= new HashMap<String, Object>();
		List<Map<String, Object>>userList 		= new ArrayList<Map<String,Object>>();
		
		String saveGubun = StringUtil.safe(reqData.get("SAVE_GUBUN"));
		
		log.debug("[FommScheduleCommonServiceImpl] sendFommNotiMngDtByReqProc() saveGubun:[{}]", saveGubun);

		// 알림발송 시작
		// ==========================================================================================
		if ("REG".equals(saveGubun) || "REV".equals(saveGubun) || "APV".equals(saveGubun)) { // 등록, 접수, 승인인 경우만

			String reqId						= StringUtil.safe(reqData.get("REQ_ID"));
			String reqUserId				= StringUtil.safe(reqData.get("REQ_USER_ID"));
			String reqTmplatId				= StringUtil.safe(reqData.get("REQ_TMPLAT_ID"));
			String srTitle						= StringUtil.safe(reqData.get("TITLE"));
			String mapProcCd				= StringUtil.safe(reqData.get("MAP_PROC_CD"));
			String wfProcCd					= StringUtil.safe(reqData.get("WF_PROC_CD"));
			String wfProcNm				= StringUtil.safe(reqData.get("WF_PROC_NM"));
			wfProcNm = StringUtil.replace(wfProcNm, "\\n", " ");
			wfProcNm = StringUtil.replace(wfProcNm, "\n", " ");

			String mapWfProcCd			= StringUtil.safe(reqData.get("MAP_WF_PROC_CD"));
			String nextWfFuncCd			= StringUtil.safe(reqData.get("NEXT_WF_FUNC_CD"));
			String nextWfProcCd			= StringUtil.safe(reqData.get("NEXT_WF_PROC_CD"));
			String nextWfProcNm			= StringUtil.safe(reqData.get("NEXT_WF_PROC_NM"));
			nextWfProcNm = StringUtil.replace(nextWfProcNm, "\\n", " ");
			nextWfProcNm = StringUtil.replace(nextWfProcNm, "\n", " ");

			String nextMapWfProcCd	= StringUtil.safe(reqData.get("NEXT_MAP_WF_PROC_CD"));
			String lastApprovalYn			= StringUtil.safe(reqData.get("LAST_APPROVAL_YN"));
			String seq							= (StringUtil.safeInt(reqData.get("SEQ")) == -1 ? "" : "") + reqData.get("SEQ");
			String sendTitle					= "";
			String sendMsgCont			= "";

			log.debug("reqId:[{}]",					reqId);
			log.debug("reqTmplatId:[{}]",			reqTmplatId);
			log.debug("srTitle:[{}]",					srTitle);
			log.debug("mapProcCd:[{}]",			mapProcCd);
			log.debug("wfProcCd:[{}]",				wfProcCd);
			log.debug("wfProcNm:[{}]",				wfProcNm);
			log.debug("mapWfProcCd:[{}]",		mapWfProcCd);
			log.debug("nextWfFuncCd:[{}]",		nextWfFuncCd);
			log.debug("nextWfProcCd:[{}]",		nextWfProcCd);
			log.debug("nextWfProcNm:[{}]",		nextWfProcNm);
			log.debug("nextMapWfProcCd:[{}]",	nextMapWfProcCd);
			log.debug("lastApprovalYn:[{}]",		lastApprovalYn);
			log.debug("sendTitle:[{}]",				sendTitle);
			log.debug("sendMsgCont:[{}]",		sendMsgCont);

			Map<String, Object> condMap = new HashMap<>();
			condMap.put("REQ_TMPLAT_ID", 	reqTmplatId);
//			condMap.put("MAP_PROC_CD", 		mapProcCd);
//			condMap.put("MAP_WF_PROC_CD", mapWfProcCd);
			condMap.put("WF_PROC_CD", 		wfProcCd);
			condMap.put("REQ_ID", 					reqId);

			//진행할 단계가 결재인 경우 결재 차수를 구해 통보 설정을 조회한다.
			int apprLvlSeq = -1;

			if("WF_FUNC_01".equals(nextWfFuncCd)) {
				apprLvlSeq = srcommSvc .selectAppvWfApprLvlSeq(condMap);
			}

			condMap = new HashMap<>();
			condMap.put("REQ_TMPLAT_ID", 	reqTmplatId);
			condMap.put("WF_PROC_CD", 		wfProcCd);
			
			if(apprLvlSeq > -1) {
				condMap.put("APPR_LVL_SEQ", 	"" + apprLvlSeq);
			}			
			List<Map<String, Object>> notiList = fomm0500WDao.selectFommNotiMngMt(condMap);

			String sendTypeCd		= "";
			String sendSmsYn		= "";
			String sendTalkYn		= "";
			String sendMemoYn	= "";

			if(notiList != null) {
				
				if(notiList.size() == 1) {
					String nTmpId	= StringUtil.safe(notiList.get(0).get("REQ_TMPLAT_ID"));
					String nSeq		= StringUtil.safe(notiList.get(0).get("SEQ"));
					String nWfCd		= StringUtil.safe(notiList.get(0).get("WF_PROC_CD"));
					String nWfNm	= StringUtil.safe(notiList.get(0).get("WF_PROC_NM"));
					String nApLvSeq	= StringUtil.safe(notiList.get(0).get("APPR_LVL_SEQ"));

					log.debug("통보 [다음 단계] REQ_TMPLAT_ID:[{}], SEQ:[{}], WF_PROC_CD:[{}], WF_PROC_NM:[{}], APPR_LVL_SEQ:[{}]", nTmpId, nSeq, nWfCd, nWfNm, nApLvSeq);
					
					sendSmsYn		= StringUtil.safe(notiList.get(0).get("SEND_SMS_YN"), "N");
					sendTalkYn		= StringUtil.safe(notiList.get(0).get("SEND_TALK_YN"), "N");
					sendMemoYn	= StringUtil.safe(notiList.get(0).get("SEND_MEMO_YN"), "N");
					
					if("Y".equals(sendSmsYn)) {
						sendTypeCd	= "SMS";
					}

					if("Y".equals(sendTalkYn)) {
						sendTypeCd	+= ("".equals(sendTypeCd) ? "" : ",") + "TALK";
					}
					
					if("Y".equals(sendMemoYn)) {
						sendTypeCd	+= ("".equals(sendTypeCd) ? "" : ",") + "MEMO";
					}
				}
			}

			logs.debug("[FommScheduleCommonServiceImpl] sendFommNotiMngDtByReqProc() sendTypeCd:[{}]", sendTypeCd);

			if(!"".equals(sendTypeCd)) {

				if ("REG".equals(saveGubun)) {	//현재 처리가 등록인 경우
	
					if (!"WF_PROC_9999".equals(nextWfProcCd)) { //다음 단계가 종료가 아닌 경우
	
						if ("WF_FUNC_01".equals(nextWfFuncCd)) { //다음 단계 기능이 결재인 경우
	
							//결재자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> apvUserList = srcommSvc.selectNextAppvUser(condMap);
	
							if (apvUserList != null) {
	
								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";

								for (int i = 0; i < apvUserList.size(); i++) {
									
									String userId = StringUtil.safe(apvUserList.get(i).get("USER_ID"));

									if(!"".equals(userId)) {
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);

										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN", "다음 단계 결재자");
											rtnSendMap.put("RCV_USER_ID",	userId);
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}
	
						} else if ("WF_FUNC_04".equals(nextWfFuncCd)) { // 다음 단계 기능이 담당자 처리인 경우
	
							//담당자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> cgerUserList = srcommSvc.selectSrCgerDt(condMap);
							
							if (cgerUserList != null) {
	
								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";

								for (int i = 0; i < cgerUserList.size(); i++) {

									String userId = StringUtil.safe(cgerUserList.get(i).get("USER_ID"));
									
									if(!"".equals(userId)) {
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);

										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN",			"다음 단계 처리자");
											rtnSendMap.put("RCV_USER_ID",	userId);										
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}
						}
					}
	
				} else if ("REV".equals(saveGubun)) {	//현재 처리가 접수인 경우

					//다음 처리 또는 결재자에게 알림 전송
					if (!"WF_PROC_9999".equals(nextWfProcCd)) { //다음 단계가 종료가 아닌 경우
						
						if ("WF_FUNC_01".equals(nextWfFuncCd)) { //다음 단계 기능이 결재인 경우
	
							//결재자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> apvUserList = srcommSvc.selectNextAppvUser(condMap);
	
							if (apvUserList != null) {
	
								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";
								
								for (int i = 0; i < apvUserList.size(); i++) {
									
									String userId = StringUtil.safe(apvUserList.get(i).get("USER_ID"));
									
									if(!"".equals(userId)) {
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);

										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN",			"다음 단계 결재자");
											rtnSendMap.put("RCV_USER_ID",	userId);
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}
	
						} else if ("WF_FUNC_04".equals(nextWfFuncCd)) { // 다음 단계 기능이 담당자 처리인 경우
	
							//담당자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> cgerUserList = srcommSvc.selectSrCgerDt(condMap);
							
							if (cgerUserList != null) {
	
								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";
								
								for (int i = 0; i < cgerUserList.size(); i++) {

									String userId = StringUtil.safe(cgerUserList.get(i).get("USER_ID"));
									
									if(!"".equals(userId)) {
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);

										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN",			"다음 단계 처리자");
											rtnSendMap.put("RCV_USER_ID",	userId);
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcNm + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}
						}
					}
	
				} else if ("APV".equals(saveGubun)) {	//현재 결재 승인 처리인 경우
	
					//최종 결재 승인인 경우
					if("Y".equals(lastApprovalYn)) {
	
						//1. 기안자에게 승인 완료 알림 전송
						condMap = new HashMap<String, Object>();
						condMap.put("REQ_ID",			reqId);
						condMap.put("WF_PROC_CD", wfProcCd);
						Map<String, Object> draftUserMap = srcommSvc.selectAppvDraftUser(condMap);
						
						if(draftUserMap != null) {
	
							sendTitle 			= "[ITSM] [" + reqId + "] " + wfProcNm;
							sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + wfProcNm + " 단계 결재가 완료 되었습니다.";
							
							String draftUserId = StringUtil.safe(draftUserMap.get("USER_ID"));
							
							if(!"".equals(draftUserId)) {
								userMap = new HashMap<String, Object>();
								userMap.put("USER_ID",					draftUserId);
								userMap.put("MAP_PROC_CD",		mapProcCd);
								userMap.put("MAP_WF_PROC_CD",	mapWfProcCd);
								userList.add(userMap);

								if(!isSend)	{
									rtnSendMap = new HashMap<String, Object>();
									rtnSendMap.put("GUBUN", "현재 결재 기안자");
									rtnSendMap.put("RCV_USER_ID", draftUserId);
									rtnSendMap.put("TITLE",				sendTitle);
									rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + wfProcNm + "[" + wfProcCd + "/" + mapWfProcCd + "] 단계 결재가 완료 되었습니다.");
									rtnSendList.add(rtnSendMap);
								}
							}
							if(isSend) {
								sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
								userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
							}
						}
						
						//2.다음 처리 또는 결재자에게 알림 전송
						if("WF_FUNC_01".equals(nextWfFuncCd)) {			//다음 단계 기능이 결재인 경우
	
							//결재자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> apvUserList = srcommSvc.selectNextAppvUser(condMap);
	
							if (apvUserList != null) {
	
								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";

								for (int i = 0; i < apvUserList.size(); i++) {
									
									String userId = StringUtil.safe(apvUserList.get(i).get("USER_ID"));
									
									if(!"".equals(userId)) {
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);

										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN",			"다음 단계 결재자");
											rtnSendMap.put("RCV_USER_ID",	userId);
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}

						}else if("WF_FUNC_04".equals(nextWfFuncCd)) {	//다음 단계 기능이 접수인 경우
						
							//담당자 구하기	PARAM [REQ_ID, WF_PROC_CD]
							condMap = new HashMap<String, Object>();
							condMap.put("REQ_ID",			reqId);
							condMap.put("WF_PROC_CD", nextWfProcCd);
							List<Map<String, Object>> cgerUserList = srcommSvc.selectSrCgerDt(condMap);
							
							if (cgerUserList != null) {

								sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
								sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + " 단계를 진행하시기 바랍니다.";

								for (int i = 0; i < cgerUserList.size(); i++) {

									String userId = StringUtil.safe(cgerUserList.get(i).get("USER_ID"));

									if(!"".equals(userId)) {

										log.debug("다음단계 {}번째 담당자 사번:[{}]", (i+1), userId);
										userMap = new HashMap<String, Object>();
										userMap.put("USER_ID",					userId);
										userMap.put("MAP_PROC_CD",		mapProcCd);
										userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
										userList.add(userMap);
										
										if(!isSend)	{
											rtnSendMap = new HashMap<String, Object>();
											rtnSendMap.put("GUBUN",			"다음 단계 처리자");
											rtnSendMap.put("RCV_USER_ID", userId);
											rtnSendMap.put("TITLE",				sendTitle);
											rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 단계를 진행하시기 바랍니다.");
											rtnSendList.add(rtnSendMap);
										}
									}
								}
								if(isSend) {
									sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
									userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
								}
							}
						}
	
					}else {	//최종 결재 승인이 아닌 경우
	
						//1.현재 단계 다음 결재자에게 알림 전송
						//현재 단계 다음 결재자 구하기	PARAM [REQ_ID, WF_PROC_CD]
						condMap = new HashMap<String, Object>();
						condMap.put("REQ_ID", 			reqId);
						condMap.put("WF_PROC_CD",	wfProcCd);
						condMap.put("SEQ",				seq);
						List<Map<String, Object>> apvUserList = srcommSvc.selectNextAppvUser(condMap);
	
						if (apvUserList != null) {
	
							sendTitle 			= "[ITSM] [" + reqId + "] " + wfProcNm;
							sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") " + wfProcNm + " 단계를 진행하시기 바랍니다.";
							
							for (int i = 0; i < apvUserList.size(); i++) {
								
								String userId = StringUtil.safe(apvUserList.get(i).get("USER_ID"));
								
								if(!"".equals(userId)) {
									userMap = new HashMap<String, Object>();
									userMap.put("USER_ID",					userId);
									userMap.put("MAP_PROC_CD",		mapProcCd);
									userMap.put("MAP_WF_PROC_CD",	mapWfProcCd);
									userList.add(userMap);

									if(!isSend)	{
										rtnSendMap = new HashMap<String, Object>();
										rtnSendMap.put("GUBUN",			"다음 결재자");
										rtnSendMap.put("RCV_USER_ID", userId);
										rtnSendMap.put("TITLE",				sendTitle);
										rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + wfProcNm + "[" + wfProcCd + "/" + mapWfProcCd + "] 단계를 진행하시기 바랍니다.");
										rtnSendList.add(rtnSendMap);
									}
								}
							}
							if(isSend) {
								sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
								userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
							}
						}
					}
				}
				
				if ("WF_PROC_9999".equals(nextWfProcCd)) { //종료인 경우

					if(!"".equals(reqUserId)) {

						sendTitle 			= "[ITSM] [" + reqId + "] " + nextWfProcNm;
						sendMsgCont	= "[ITSM] [" + reqId + "] (" + srTitle + ") 요청 건이 " + nextWfProcNm + " 되었습니다.";
						
						userMap = new HashMap<String, Object>();
						userMap.put("USER_ID",					reqUserId);
						userMap.put("MAP_PROC_CD",		mapProcCd);
						userMap.put("MAP_WF_PROC_CD",	nextMapWfProcCd);
						userList.add(userMap);
						
						if(!isSend)	{
							rtnSendMap = new HashMap<String, Object>();
							rtnSendMap.put("GUBUN",			"요청자");
							rtnSendMap.put("RCV_USER_ID", reqUserId);
							rtnSendMap.put("TITLE",				sendTitle);
							rtnSendMap.put("CONTENT",		"[ITSM] [" + reqId + "] (" + srTitle + ") " + nextWfProcNm + "[" + nextWfProcCd + "/" + nextMapWfProcCd + "] 요청서 종료");
							rtnSendList.add(rtnSendMap);
						}
						if(isSend) {
							sendMsgTran("", "00", sendTypeCd, "ITSM", sendTitle, sendMsgCont, userList);
							userList = new ArrayList<Map<String,Object>>();	//전송한 userList 초기화
						}
					}
				}
			}
		}
		return rtnSendList;
	}
	/*
	 * Server에 WebSocket 전송 
	 */
	public static void callWebSocket(String sendType, String target, String message) throws Exception {

		logs.debug("[FommScheduleCommonServiceImpl] callWebSocket() IP:[{}]", Inet4Address.getLocalHost().getHostAddress());
		logs.debug("[FommScheduleCommonServiceImpl] callWebSocket() sendType:[{}], target:[{}], message:[{}]", sendType, target, message);

		String port = StringUtil.safe(System.getProperty("PORT"), "8080");
		logs.debug("[FommScheduleCommonServiceImpl] callWebSocket() port:[" + port + "]");

		String portStr = "";

		if(!"".equals(port)) {
			portStr = ":" + port;
		}
    	String url = "ws://" + Inet4Address.getLocalHost().getHostAddress() + portStr + "/spp/ws/itsm/SPP_MSG";	//localhost:8081/spp/ws/itsm/SPP_MSG/";
    	
    	logs.debug("callWebSocket() URL:[" + url + "]");

        WebSocketClient wc = new WebSocketClient(new URI(url), new Draft_6455()) {
            @Override
            public void onOpen(ServerHandshake handshakedata) {
            	logs.debug("[FommScheduleCommonServiceImpl] onOpen() handshakedata.getHttpStatusMessage() : {}", handshakedata.getHttpStatusMessage());
            }

            @Override
            public void onMessage(String message) {
            	logs.debug("[FommScheduleCommonServiceImpl] onMessage() message : {}", message);
            }

            @Override
            public void onError(Exception ex) {
            	logs.debug("[FommScheduleCommonServiceImpl] onError() message : {}", ex.getMessage());
            }

            @Override
            public void onClose(int code, String reason, boolean remote) {
            	logs.debug("[FommScheduleCommonServiceImpl] onClose() reason : " +  reason + " remote : " + remote);
            }
        };

        boolean result = wc.connectBlocking();
        logs.debug("[FommScheduleCommonServiceImpl] main() 클라이언트 접속대기 중 result:[{}]", result);

        String sendMsg = sendType + "¶" + target + "¶" + message;
        logs.debug("[FommScheduleCommonServiceImpl] main() sendMsg:[{}]", sendMsg);
        wc.send(sendMsg);        
        wc.close();
	}
}