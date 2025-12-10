package com.base.pj.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;

/**
 * 
 * <pre>
 * @title
 * - WBS 관리(프로젝트일정계획) Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 25.	정보윤		최초작성
 */
public interface PJ0100WService {

	/**
	 * WBS 관리(프로젝트일정계획) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * WBS 관리(프로젝트일정계획) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * WBS 관리(프로젝트일정계획) 저장
	 * @param dsData
	 */
	public void save01(String saveType, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjWbs") List<Map<String, Object>> dsPjWbs);
}