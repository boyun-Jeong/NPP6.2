package com.base.com.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.Inet4Address;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.dao.FommHearimTlkMgrDAO;
import com.base.com.service.FommHearimTlkMgrService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 헤아림TALK 전송관리 Service(구현체)
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
public class FommHearimTlkMgrServiceImpl implements FommHearimTlkMgrService {

	private static Logger log = LoggerFactory.getLogger(FommScheduleCommonServiceImpl.class);

	@Autowired
	private FommHearimTlkMgrDAO fommhearimtlkmgrDao;

	/**
	 * 헤아림TALK 수신 대상자 등록
	 */
	public List<Map<String, Object>> insertData(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) {

		List<Map<String, Object>> rtnList = new ArrayList<Map<String,Object>>();

		if(userList != null) {

			for (int i = 0; i < userList.size(); i++) {
				Map<String, Object> rowData = userList.get(i);
				String rcvUserId = StringUtil.safe(rowData.get("USER_ID"));
				
				Map<String, Object> tranData = new HashMap<String, Object>();
				tranData.put("SEND_USER_ID",		sendUserId);
		    	tranData.put("RCVR_INDN",				rcvUserId);
		    	tranData.put("TITLE",						title);
		    	tranData.put("CONTENT",				msgConts);
		    	tranData.put("ADD_URL",					StringUtil.safe(userList.get(0).get("ADD_URL")));
		    	tranData.put("MAP_PROC_CD",		StringUtil.safe(userList.get(0).get("MAP_PROC_CD")));
		    	tranData.put("MAP_WF_PROC_CD",	StringUtil.safe(userList.get(0).get("MAP_WF_PROC_CD")));
		    	tranData.put("SEND_GUBUN",			sendGubun);
		    	tranData.put("JOB_REV_NO",			sendNo);
				fommhearimtlkmgrDao.insert01(tranData);
				
				String tranSqNo = StringUtil.safe(tranData.get("TRAN_SQNO"));
				log.debug("[FommHearimTlkMgrServiceImpl] insertData() i=" + i + " tranSqNo : " + tranSqNo);

	            if(!"".equals(tranSqNo)) {
	            	rtnList.add(rowData);
	            	rtnList.get(rtnList.size()-1).put("TRAN_SQNO", tranSqNo);
	            }
			}
		}
		return rtnList;
	}

	/* 
	 * 헤아림Talk 발송 처리
	 */
	public void sendHearimtlk(Map<String, Object> rowData) {

		String tranSqNo = StringUtil.safe(rowData.get("TRAN_SQNO"));
		List<Map<String, Object>> realSendTargetList = selectFommHearimtlktranMtSendTarget(tranSqNo);

		log.debug("sendHearimtlk() realSendTargetList.size() : " + realSendTargetList.size());

		for (Map<String, Object> target : realSendTargetList) {
			String rcvrIndn	= StringUtil.safe(target.get("RCVR_INDN"));
			String title			= StringUtil.safe(target.get("TITLE"));
			String content	= StringUtil.safe(target.get("CONTENT"));
//			String addUrl		= StringUtil.safe(target.get("ADD_URL"));
			sendMessengerAlarm(rcvrIndn, title, content);	//, addUrl
		}
		updateFommHearimtlktranMtSendTime(rowData);

		//SEND_TARGET_YN : Y -> N
		updateFommHearimtlktranMtSendTargetYnN(rowData);
	}

	public List<Map<String, Object>> selectFommHearimtlktranMtSendTarget(String tranSqNo) {
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("TRAN_SQNO", tranSqNo);
		return fommhearimtlkmgrDao.selectFommHearimtlktranMtSendTarget(condMap);
	}
	
	@Transactional
	public void updateFommHearimtlktranMtSendTime(Map<String, Object> rowData) {				
		fommhearimtlkmgrDao.updateFommHearimtlktranMtSendTime(rowData);
	}

	@Transactional
	public void updateFommHearimtlktranMtSendTargetYnN(Map<String, Object> rowData) {
		fommhearimtlkmgrDao.updateFommHearimtlktranMtSendTargetYnN(rowData);
	}
	
	public static boolean sendMessengerAlarm(String userId, String title, String content) {	//, String addUrl

		log.debug("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm() CALL]");
		
		boolean bSuccessYn = false;
		
		try {
	    	// title
			if(userId == null) {
				throw new IllegalArgumentException("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm::rcvrIndn is empty");
			}
			
			// title
			if(title == null) {
				throw new IllegalArgumentException("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm::title is empty");
			}
			
			if(title.getBytes().length > 100) {
				throw new IllegalArgumentException("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm::title is greater than 100 bytes");
			}
			
			// content
			if(content == null) {
				throw new IllegalArgumentException("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm::content is empty");
			}
			
			if(content.getBytes().length > 2000) {
				throw new IllegalArgumentException("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm::content is greater than 2000 bytes");
			}
			
			String rcvUserId = "";
		    String ip4 = Inet4Address.getLocalHost().getHostAddress();
		    //e1002216[정해운], e1002218[송기영], e1002225[조병준], e1002229[정하림], e1002235[안광호], e1002267[나선봉], e1002274[정보윤], e1002275[이정빈], e1002276[권소연], e1002277[홍승엽], e1002293[김호일], e1002301[김민섭]
		    String[] devUserArr = new String[]{"e1002216", "e1002218", "e1002225", "e1002229", "e1002235", "e1002267", "e1002274", "e1002275", "e1002276", "e1002277", "e1002293", "e1002301"};

		    if("10.120.15.29".equals(ip4)) {	//운영서버인 경우
		    	rcvUserId = userId;

		    }
		    else		// 로컬/개발 
		    {
		    	for (int i = 0; i < devUserArr.length; i++) {
		    		if(devUserArr[i].equals(userId)) {
		    			rcvUserId = userId;
		    			break;
		    		}
				}
		    }

		    log.debug("[FommHearimTlkMgrServiceImpl] sendMessengerAlarm() rcvUserId:[{}]", rcvUserId);
		    
			if(!"".equals(rcvUserId)) {

				// 메신저 연계 
				String strUrl = "http://10.120.58.113:8080/webmanager/web_alarm.jsp";
			    String strParam1 = "T_CODE=100&B_CODE=101&SENDER=ITSM&SENDERNAME=ITSM";

			    int nConnectTimeout = 1000;
			    int nReadTimeout = 1000;

			    String strReturnStream = null;
			    HttpURLConnection httpConn = null;
			    URL url = null;

			    title = URLEncoder.encode(title, "UTF-8");
			    
			    log.debug("[FommHearimTlkMgrServiceImpl] content:[" + content + "]");
			    content = StringUtil.replace(content, "\\n", "<br>");
			    content = StringUtil.replace(content, "\n", "<br>");
			    content = URLEncoder.encode(content, "UTF-8");
			    
		    	String strUrl2 = strUrl + "?" + strParam1 + "&" + "RECEIVER=" + rcvUserId + "&" + "TITLE=" + title + "&" + "CONTENT=" + content;
		    	url = new URL(strUrl2);
			    httpConn = (HttpURLConnection)url.openConnection();
			    httpConn.setRequestProperty("Content-Type", "text/html");
			    httpConn.setRequestMethod("GET"); // 전송방식
			    httpConn.setConnectTimeout(nConnectTimeout); // 커넥션타임아웃
			    httpConn.setReadTimeout(nReadTimeout); // 읽기타임아웃
	
			    InputStream inputStream = httpConn.getInputStream();
	
			    if (inputStream != null) {
			        strReturnStream = "";
			        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
			        String strLine = null;
			        while ((strLine = reader.readLine()) != null) {
			            strReturnStream += strLine;
			        }
			        reader.close();
			    }
	
			    if (strReturnStream.indexOf("success") != -1) {
			        bSuccessYn = true;
			    }
		    }

		}catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}catch (MalformedURLException e) {
			e.printStackTrace();
		}catch (ProtocolException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		} finally {			
		}
		return bSuccessYn;
	}
}