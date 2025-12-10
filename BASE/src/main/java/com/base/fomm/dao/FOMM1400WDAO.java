package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 난이도관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 24.	정해운		최초작성
 */
@Repository
public interface FOMM1400WDAO {

	/**
	 * 난이도관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 난이도관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 난이도관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 난이도관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	public void insert02(Map<String, Object> rowDataItem);

	public void modify02(Map<String, Object> rowDataItem);

	public void remove02(Map<String, Object> rowDataItem);
}