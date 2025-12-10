package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 자산실사계획 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 01.	이정빈		최초작성
 */
public interface SR6110DService {

	/**
	 * 자산실사계획 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 자산실사계획 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> dsAmReqJob);
}