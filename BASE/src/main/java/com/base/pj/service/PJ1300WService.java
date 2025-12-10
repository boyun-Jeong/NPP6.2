package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
public interface PJ1300WService {

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select01();

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 방법론/산출물정의 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsPjEvalList, List<Map<String, Object>> dsPjEvalItem);
}