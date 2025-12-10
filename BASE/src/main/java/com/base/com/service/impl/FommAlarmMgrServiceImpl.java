package com.base.com.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.com.dao.FommAlarmMgrDAO;
import com.base.com.dao.FommCodeDAO;
import com.base.com.service.FommAlarmMgrService;

/**
 * 
 * <pre>
 * @title
 * - 알람관리 Service(구현체)
 * @package com.base.com.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 20.	정보윤		최초작성
 */
@Service
public class FommAlarmMgrServiceImpl implements FommAlarmMgrService {

	private Logger log = LoggerFactory.getLogger(FommAlarmMgrServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommAlarmMgrDAO fommAlarmMgrDao;
	
	@Autowired
	private FommCodeDAO fommCodeDao;

	/**
	 * 알림 수신 목록 조회
	 * @param dsCond
	 * @return
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fommAlarmMgrDao.select01(dsCond);
		return result;
	}

	@Transactional
	@Override
	public void save01(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();

		int rowCnt = dsData.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsData.get(i);

			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("USER_ID", userId);
	    	rowData.put("ALARM_ID", rowData.get("ALARM_ID"));

	    	fommAlarmMgrDao.modify01(rowData);
    		fommAlarmMgrDao.modify02(rowData); 
	    	
//	    	if( "U".equals(rowFlag) ) {
//	    		fommAlarmMgrDao.modify01(rowData);
//	    		fommAlarmMgrDao.modify02(rowData); 
//	    	}
//	    	else if( "D".equals(rowFlag) ) {
//	    		fommAlarmMgrDao.remove01(rowData);
//	    	}
		}
	}

	/* 
	 * 알람 등록 및 발송 처리
	 */
	public void sendFommAlarm(Map<String, Object> rowData) {
		String userId = StringUtil.safe(rowData.get("USER_ID"));
		if(!"".equals(userId)) {
			fommAlarmMgrDao.insert01(rowData);
			fommCodeDao.updateAlarmCnt(rowData);
			sendAlarm(userId);
		}		
	}

	//쪽지 발송에 대한 WebSocket 신호 보내기
	public static void sendAlarm(String sendUserId) {
		
		if(!"".equals(sendUserId)) {
			//type [01 : 슬라이드, 02 : 알림, 03 : 쪽지]
			try {
				FommScheduleCommonServiceImpl.callWebSocket("02", sendUserId, "");
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
}