package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 내 요청함 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 29.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 29.	정보윤		최초작성
 */
public interface SR0120WService 
{
	/**
	 * 내 요청함 목록 WF단계 그룹별 CNT
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond, String strMenuId, String strUserId, String strScreenId);
	
	/**
	 * 내 요청함 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond, String strMenuId, String strUserId, String strScreenId);
	
	
	public List<Map<String, Object>> select11(Map<String, Object> dsCond);
	public List<Map<String, Object>> select12(Map<String, Object> dsCond);
}