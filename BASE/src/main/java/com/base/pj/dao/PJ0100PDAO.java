package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 검색 DAO
 * @package com.base.pj.dao
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
@Repository
public interface PJ0100PDAO {

	/**
	 * 시스템 공휴일 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectHoliday(Map<String, Object> dsCond);
	
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
	 * 프로젝트 WBS 예외일정 등록/수정
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * WBS 예외일정 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_WBS 내역 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * WBS 내역 등록
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * PJ_WBS_TOT 등록/수정
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * PJ_WBS_VERSION 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * PJ_WBS_VERSION 등록
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * WBS 계산
	 * @param dsCond
	 * @return
	 */
	public void callPrPjWbsRateCacuProc(Map<String, Object> rowData);
}