package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 자동저장 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 12. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 12. 03.	이훈석		최초작성
 */
@Repository
public interface FOMM1000WDAO {

	/**
	 * 자동저장 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 자동저장 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 자동저장 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 자동저장 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}