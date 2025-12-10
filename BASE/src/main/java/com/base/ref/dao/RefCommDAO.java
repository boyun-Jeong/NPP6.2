package com.base.ref.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 개발가이드 DAO
 * @package com.base.ref.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 04. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 30.	정보윤		최초작성
 */
@Repository
public interface RefCommDAO {

	/**
	 * DB FUNC/PROC 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectFuncProcList(Map<String, Object> dsCond);

	/**
	 * DB FUNC/PROC 현재 내용 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCurrentFuncProcData(Map<String, Object> dsCond);

	/**
	 * DB FUNC/PROC 이력 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * DB FUNC/PROC 이력 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * DB FUNC/PROC 이력 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * DB FUNC/PROC 이력 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}