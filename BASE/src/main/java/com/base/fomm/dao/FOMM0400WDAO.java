package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 만족도 항목관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 12. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 20.	정보윤		최초작성
 */
@Repository
public interface FOMM0400WDAO {

	/**
	 * 만족도 항목관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 만족도 항목관리 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 만족도 항목관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 만족도 항목관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 만족도 항목관리 아이템 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 만족도 항목관리 아이템 등록
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 만족도 항목관리 아이템 수정
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * 만족도 항목관리 아이템 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}