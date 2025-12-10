package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 메모관리 Service Intreface
 * @package com.base.com.service
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
public interface FommMemoMgrService {

	/**
	 * 메모관리 저장
	 * @param dsData
	 */
	public List<Map<String, Object>> insertData(String sendNo, String sendGubun, String sendUserId, String title, String msgConts, List<Map<String, Object>> userList) throws Exception;

	public void sendFommMemo(Map<String, Object> rowData);
	
	public void updateFommMemotranMtSendTime(Map<String, Object> rowData);
	
	public void updateFommMemotranMtSendTargetYnN(Map<String, Object> rowData);
}