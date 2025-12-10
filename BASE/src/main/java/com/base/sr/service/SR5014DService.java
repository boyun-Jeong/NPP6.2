package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 위치별 IP대역 관리 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 06.	정해운		최초작성
 */
public interface SR5014DService {

	/**
	 * 위치별 IP대역 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 위치별 IP대역 관리 목록 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 위치별 IP대역 관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}