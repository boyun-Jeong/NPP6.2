package com.base.com.service.impl;

import java.io.UnsupportedEncodingException;
import java.net.Inet4Address;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.dao.FommSmsMgrDAO;
import com.base.com.service.FommSmsMgrService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - SMS 전송관리 Service(구현체)
 * @package com.base.com.service.impl
 * <pre>
 * @author  정보윤
 * @since   2025. 03. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 07.	정보윤		최초작성
 */
@Service
public class FommSmsMgrServiceImpl implements FommSmsMgrService {

	@Autowired
	private FommSmsMgrDAO fommsmsmgrDao;
	
	/**
	 * SMS 전송관리 저장
	 * Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
	 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 전송구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
	 * Param3 전송구분 [String] sendUserId	- 발신자 사번
	 * Param4 전송구분 [String] title				- 알림 제목
	 * Param5 전송구분 [String] msgConts		- 알림 내용
	 * Param6 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
	 */
	@Transactional
	public List<Map<String, Object>> insertData(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception {

		List<Map<String, Object>> rtnList = new ArrayList<Map<String,Object>>();

		if(userList != null) {
		
			for (int i = 0; i < userList.size(); i++) {

				Map<String, Object> rowData = userList.get(i);
				String rcvUserId = StringUtil.safe(rowData.get("USER_ID"));
				
				String smsUserId = "";
			    String ip4 = Inet4Address.getLocalHost().getHostAddress();
			    //e1002216[정해운], e1002218[송기영], e1002225[조병준], e1002229[정하림], e1002235[안광호], e1002267[나선봉], e1002274[정보윤], e1002275[이정빈], e1002276[권소연], e1002277[홍승엽], e1002293[김호일], e1002301[김민섭]
//			    String[] devUserArr = new String[]{"e1002216", "e1002218", "e1002225", "e1002229", "e1002235", "e1002267", "e1002274", "e1002275", "e1002276", "e1002277", "e1002293", "e1002301"};
//			    if(!"10.120.15.29".equals(ip4)) {	//운영서버가 아닌 경우
//			    	for (int j = 0; j < devUserArr.length; j++) {
//			    		if(devUserArr[j].equals(rcvUserId)) {
//			    			smsUserId = rcvUserId;
//			    			break;
//			    		}
//					}
//
//			    }else {
//			    	smsUserId = rcvUserId;
//			    }
			    smsUserId = rcvUserId;

			    if(!"".equals(smsUserId)) {

					Map<String, Object> tranData = new HashMap<String, Object>();
					tranData.put("SEND_TYPE", "S");	//S:본발송, R재발송
					tranData.put("RCVR_INDN",				smsUserId);
			    	tranData.put("FROM_ID",					sendUserId);
			    	tranData.put("SUBJECT",					title);		    	
			    	tranData.put("CONTENT",				msgConts);
		
			    	try {
				    	if(msgConts.getBytes("EUC-KR").length >= 90) {
				    		tranData.put("MSG_TYPE",		"L");	//tranData.put("CONTENT", "L");	S:SMS, L:LMS(90byte 기준 - euc-kr)
				    	}else {
				    		tranData.put("MSG_TYPE",		"S");	//tranData.put("CONTENT", "L");	S:SMS, L:LMS(90byte 기준 - euc-kr)
				    	}

			    	}catch(UnsupportedEncodingException e) {
			    		e.printStackTrace();
			    	}
			    	
			    	tranData.put("MAP_PROC_CD",		StringUtil.safe(userList.get(0).get("MAP_PROC_CD")));
			    	tranData.put("MAP_WF_PROC_CD",	StringUtil.safe(userList.get(0).get("MAP_WF_PROC_CD")));
			    	tranData.put("SEND_GUBUN",			sendGubun);
			    	tranData.put("JOB_REV_NO",			sendNo);
					fommsmsmgrDao.insert01(tranData);
					
					String tranSqNo = StringUtil.safe(tranData.get("TRAN_SQNO"));
		            if(!"".equals(tranSqNo)) {
		            	rtnList.add(userList.get(i));
		            	rtnList.get(rtnList.size()-1).put("TRAN_SQNO", tranSqNo);
		            }
			    }
			}
		}
		return rtnList;
	}
	
	/* 
	 * Sms 발송 처리(TIM에서 처리) 해당 로직 현재 미사용
	 */
	public void sendSms(Map<String, Object> rowData) {

//		String tranSqNo = StringUtil.safe(rowData.get("TRAN_SQNO"));
//		List<Map<String, Object>> realSendTargetList = selectFommSmstranMtSendTarget(tranSqNo);
//		for (Map<String, Object> target : realSendTargetList) {
//			String rcvrIndn	= StringUtil.safe(target.get("RCVR_INDN"));
//			String title			= StringUtil.safe(target.get("TITLE"));
//			String content	= StringUtil.safe(target.get("CONTENT"));
//			sendMessengerAlarm(rcvrIndn, title, content);	//, addUrl
//		}
//		updateFommSmstranMtSendTime(rowData);

		//SEND_TARGET_YN : Y -> N
//		updateFommSmstranMtSendTargetYnN(rowData);
	}

	public List<Map<String, Object>> selectFommSmstranMtSendTarget(String tranSqNo) {
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("TRAN_SQNO", tranSqNo);
		return fommsmsmgrDao.selectFommSmstranMtSendTarget(condMap);
	}
	
	@Transactional
	public void updateFommSmstranMtSendTime(Map<String, Object> rowData) {
		fommsmsmgrDao.updateFommSmstranMtSendTime(rowData);
	}

	@Transactional
	public void updateFommSmstranMtSendTargetYnN(Map<String, Object> rowData) {
		fommsmsmgrDao.updateFommSmstranMtSendTargetYnN(rowData);
	}
}