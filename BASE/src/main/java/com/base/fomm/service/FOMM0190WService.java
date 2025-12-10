package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 부서관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 02.	이정빈		최초작성
 */
public interface FOMM0190WService {

	/**
	 * 부서관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	
	/**
	 * 하위부서 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}