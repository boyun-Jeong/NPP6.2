package com.base.com.web;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAlarmMgrService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 알람관리 Controller
 * @package com.base.com.web
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
@Controller
@RequestMapping("ALARM")
public class FommAlarmMgrController {

	private Logger log = LoggerFactory.getLogger(FommAlarmMgrController.class);

	@Autowired
	private FommAlarmMgrService fommAlarmMgrSvc;
	
	@Autowired
	private FommAuthService fommAuthSvc;
	
	/**
	 * 알림 수신 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
        
		List<Map<String, Object>> dsData = fommAlarmMgrSvc.select01(dsCond);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		log.debug("tttt");

		return result;
	}
	
	
	/**
	 * 알림 수신 목록 조회 - 알림 읽음으로 업데이트
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/updateReadYn")
	public NexacroResult save01(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData,
								@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			fommAlarmMgrSvc.save01(dsData);
			
		}else {
			return result;
		}

		dsData = fommAlarmMgrSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * SPP 게시판 저장
	 * @param dsUser [USER_ID, ALARM_TYPE_CD, ALARM_REF, ALARM_CONTS, ALARM_PARAMS]	컬럼값 필요
	 * @return
	 */
	@RequestMapping(value = "/send")
	public NexacroResult send(@ParamDataSet(name = "dsAlarm") List<Map<String, Object>> dsAlarm) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		
		for (int i = 0; i < dsAlarm.size(); i++) {
			fommAlarmMgrSvc.sendFommAlarm(dsAlarm.get(i));
		}
		return result;
	}
}