package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 보고서 상세 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
public interface PJ4700PService {

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);
	
	/**
	 * 보고서 상세 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsReportprg,
						 List<Map<String, Object>> dsScrMap,
						 List<Map<String, Object>> dsBatchjobMap,
						 List<Map<String, Object>> dsFuncMap,
						 List<Map<String, Object>> dsReqMap);
}