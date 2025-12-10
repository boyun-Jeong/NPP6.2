package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청함(CMO/PMO)조회 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 21.	김미성		최초작성
 */
public interface SR0123WService {

	/**
	 * 요청함(CMO/PMO)조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);	
}