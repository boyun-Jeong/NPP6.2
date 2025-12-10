package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 알람관리 Service Intreface
 * @package com.base.com.service
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
public interface FommAlarmMgrService {

	/**
	 * 알림 수신 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	public void save01(List<Map<String, Object>> dsData);
	
	public void sendFommAlarm(Map<String, Object> rowData);
}