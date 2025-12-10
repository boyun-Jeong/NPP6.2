package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 작업스케쥴 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 18.	이정빈		최초작성
 */
@Repository
public interface FOMM0300PDAO {

	/**
	 * 작업스케쥴 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 작업스케쥴 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 작업스케쥴 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 작업스케쥴 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}