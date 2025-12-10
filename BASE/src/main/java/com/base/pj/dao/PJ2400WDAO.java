package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트별 인력 조회 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 19.	정보윤		최초작성
 */
@Repository
public interface PJ2400WDAO {

	/**
	 * 프로젝트별 인력 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 프로젝트별 인력 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 프로젝트별 인력 조회 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 프로젝트별 인력 조회 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);
	
	/**
	 * 프로젝트별 인력 조회 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 프로젝트별 인력 조회 수정
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * PJ_USER 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_USER_MM 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * PJ_USER_MM 프로젝트 기간에 해당하지 않은 공수 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);
}