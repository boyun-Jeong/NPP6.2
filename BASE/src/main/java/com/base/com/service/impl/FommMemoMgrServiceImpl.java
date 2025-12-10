package com.base.com.service.impl;

import java.net.Inet4Address;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.dao.FommCodeDAO;
import com.base.com.dao.FommMemoMgrDAO;
import com.base.com.service.FommMemoMgrService;
import com.base.com.web.FommSendTestController;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 메모관리 Service(구현체)
 * @package com.base.com.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 17.	정보윤		최초작성
 */
@Service
public class FommMemoMgrServiceImpl implements FommMemoMgrService {

	private static Logger log = LoggerFactory.getLogger(FommSendTestController	.class);

	@Autowired
	private FommMemoMgrDAO fommMemoMgrDao;

	@Autowired
	private FommCodeDAO fommCodeDao;

	/**
	 * 쪽지 수신 데이터 등록
	 */
	@Transactional
	public List<Map<String, Object>> insertData(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception {

		List<Map<String, Object>> rtnList = new ArrayList<Map<String,Object>>();
		
		int regCnt = 0;
		String memoId = "";
		
		msgConts = msgConts.replaceAll("\\\n","<br>");
		
		if(userList != null) {

			 if(userList.size() > 0) {

				Map<String, Object> rowData = new HashMap<String, Object>();
				rowData.put("MEMO_TITLE",			title);
				rowData.put("MEMO_CONTENTS",	msgConts);
				rowData.put("MEMO_STATUS_CD",	"2");	//1 : 임시저장, 2 : 발송
				rowData.put("ATTACH_YN",				"N");
				rowData.put("DEL_YN",					"N");
				rowData.put("REG_USER_ID",			sendUserId);
		    	fommMemoMgrDao.insert01(rowData);
		    	
		    	memoId = StringUtil.safe(rowData.get("MEMO_ID"));
			
				for (int i = 0; i < userList.size(); i++) {
					
					String rcvUserId = StringUtil.safe(userList.get(i).get("USER_ID"));
					
					String memoUserId = "";
//				    String ip4 = Inet4Address.getLocalHost().getHostAddress();
				    //e1002216[정해운], e1002218[송기영], e1002225[조병준], e1002229[정하림], e1002235[안광호], e1002267[나선봉], e1002274[정보윤], e1002275[이정빈], e1002276[권소연], e1002277[홍승엽], e1002293[김호일], e1002301[김민섭]
//				    String[] devUserArr = new String[]{"e1002216", "e1002218", "e1002225", "e1002229", "e1002235", "e1002267", "e1002274", "e1002275", "e1002276", "e1002277", "e1002293", "e1002301"};
//				    if(!"10.120.15.29".equals(ip4)) {	//운영서버가 아닌 경우
//				    	for (int j = 0; j < devUserArr.length; j++) {
//				    		if(devUserArr[j].equals(rcvUserId)) {
//				    			memoUserId = rcvUserId;
//				    			break;
//				    		}
//						}
//
//				    }else {
//				    	memoUserId = rcvUserId;
//				    }
				    memoUserId = rcvUserId;

				    if(!"".equals(memoUserId)) {
				    	
					    rowData = new HashMap<String, Object>();
						rowData.put("MEMO_ID",			memoId);
						rowData.put("SEND_GUBUN",		"00");
						rowData.put("RCV_USER_ID",		memoUserId);
						rowData.put("RCV_TYPE_CD",		StringUtil.safe(userList.get(0).get("RCV_TYPE_CD"), "TO"));
						rowData.put("SND_USER_ID",		sendUserId);
						fommMemoMgrDao.insert02(rowData);
	
						rowData = new HashMap<String, Object>();
						rowData.put("RCVR_INDN",				memoUserId);
						rowData.put("TITLE",						title);
						rowData.put("CONTENT",				msgConts);
						rowData.put("MAP_PROC_CD",			StringUtil.safe(userList.get(0).get("MAP_PROC_CD")));
						rowData.put("MAP_WF_PROC_CD",	StringUtil.safe(userList.get(0).get("MAP_WF_PROC_CD")));
						rowData.put("SEND_GUBUN",			sendGubun);
						rowData.put("JOB_REV_NO",			sendNo);
			            fommMemoMgrDao.insert03(rowData);
	
			            String tranSqNo = StringUtil.safe(rowData.get("TRAN_SQNO"));
			            log.debug("[FommMemoMgrServiceImpl] insertData() i=" + i + " tranSqNo : " + tranSqNo);
			            
			            if(!"".equals(tranSqNo)) {
			            	regCnt++;
			            	rtnList.add(userList.get(i));
			            	rtnList.get(rtnList.size()-1).put("TRAN_SQNO", tranSqNo);
			            	
			            }
			            rowData = new HashMap<String, Object>();
			            rowData.put("USER_ID", rcvUserId);
			            fommCodeDao.updateAlarmCnt(rowData);
				    }
				}
			}
		}

		//쪽지수신가능자가 없는 경우 생성했던 쪽지 마스터 삭제 플래그 Y로 변경
		if(!"".equals(memoId)) {
			if(regCnt == 0) {
				Map<String, Object> rowData = new HashMap<String, Object>();
				rowData.put("MEMO_ID", memoId);
				fommMemoMgrDao.removeFommMemo(rowData);
			}
		}		
		return rtnList;
	}

	/* 
	 * 쪽지 발송 처리
	 */
	public void sendFommMemo(Map<String, Object> rowData) {

		String tranSqNo = StringUtil.safe(rowData.get("TRAN_SQNO"));
		List<Map<String, Object>> realSendTargetList = selectFommMemotranMtSendTarget(tranSqNo);

		for (Map<String, Object> target : realSendTargetList) {
			sendMemoAlarm(StringUtil.safe(target.get("RCVR_INDN")));
		}
		updateFommMemotranMtSendTime(rowData);

		//SEND_TARGET_YN : Y -> N
		updateFommMemotranMtSendTargetYnN(rowData);
	}

	public List<Map<String, Object>> selectFommMemotranMtSendTarget(String tranSqNo) {
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("TRAN_SQNO", tranSqNo);
		return fommMemoMgrDao.selectFommMemotranMtSendTarget(condMap);
	}
	
	@Transactional
	public void updateFommMemotranMtSendTime(Map<String, Object> rowData) {
		fommMemoMgrDao.updateFommMemotranMtSendTime(rowData);
	}

	@Transactional
	public void updateFommMemotranMtSendTargetYnN(Map<String, Object> rowData) {
		fommMemoMgrDao.updateFommMemotranMtSendTargetYnN(rowData);
	}

	//쪽지 발송에 대한 WebSocket 신호 보내기
	public static void sendMemoAlarm(String sendUserId) {

		log.debug("[FommMemoMgrServiceImpl] sendMemoAlarm() sendUserId:[{}]", sendUserId);
		
		if(!"".equals(sendUserId)) {
			//type [01 : 슬라이드, 02 : 알림, 03 : 쪽지]
			try {
				FommScheduleCommonServiceImpl.callWebSocket("03", sendUserId, "");
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
}