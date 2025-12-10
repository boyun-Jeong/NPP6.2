package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 등록/수정 상세조회 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 14.	정보윤		최초작성
 */
public interface PJ0210PService {

	/**
	 * 프로젝트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 프로젝트 Item 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 프로젝트 등록/수정/삭제
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsProject, List<Map<String, Object>> dsProjectItem);
}