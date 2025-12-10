package com.base.pj.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 검색 Service Intreface
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
public interface PJ0100PService {

	/**
	 * 프로젝트 검색 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 프로젝트 WBS 예외일정 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 시스템 공휴일 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectHoliday(Map<String, Object> dsCond);

	/**
	 * 프로젝트 WBS 예외일정 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsPjWbsDay);

	/**
	 * 프로젝트 WBS 일괄등록
	 */
	@Transactional
	public void save02(Map<String, Object> dsCond, List<Map<String, Object>> dsPjWbs);
}