package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 서브프로젝트상세 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
public interface PJ0810PService {

	/**
	 * 서브프로젝트상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 업무 목록 조호;
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 사업방법론 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03();

	/**
	 * 서브프로젝트상세 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsPjProject, List<Map<String, Object>> dsBizItem, String oriMethodId);
}