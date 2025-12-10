package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 사용자테스트 항목관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 05.	정해운		최초작성
 */
public interface FOMM0720WService {

	/**
	 * 사용자테스트 항목관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 사용자테스트 항목관리 상세 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 사용자테스트 항목관리 목록 조회2
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 사용자테스트 항목관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}