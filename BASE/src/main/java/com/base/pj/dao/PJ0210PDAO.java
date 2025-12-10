package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 등록/수정 상세조회 DAO
 * @package com.base.pj.dao
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
@Repository
public interface PJ0210PDAO {

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
	 * 프로젝트 등록 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 프로젝트 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
	
	/**
	 * 프로젝트 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 프로젝트 Item 등록 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);
	
	/**
	 * 프로젝트 Item 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
	
	/**
	 * 프로젝트 WBS 등록
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * 프로젝트 WBS 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * 프로젝트 WBS_TOT 등록
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * 프로젝트 WBS_TOT 삭제
	 * @param rowData
	 */
	public void remove04(Map<String, Object> rowData);
}