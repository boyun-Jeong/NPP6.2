package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 서비스조회(요청서목록) Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
public interface SR9921WService {

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

	/**
	 * 서비스조회(요청서목록) 저장
	 * @param dsData
	 */
	//public void save01(List<Map<String, Object>> dsData);
}