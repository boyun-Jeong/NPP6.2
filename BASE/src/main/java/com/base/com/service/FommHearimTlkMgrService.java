package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 헤아림TALK 전송관리 Service Intreface
 * @package com.base.com.service
 * <pre>
 *
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
public interface FommHearimTlkMgrService {

	/**
	 * 헤아림TALK 전송관리 저장
	 * @param dsData
	 */
	public List<Map<String, Object>> insertData(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList);

	public void sendHearimtlk(Map<String, Object> rowData);
	
	public void updateFommHearimtlktranMtSendTime(Map<String, Object> rowData);
	
	public void updateFommHearimtlktranMtSendTargetYnN(Map<String, Object> rowData);
}