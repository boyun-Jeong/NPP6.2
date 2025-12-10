package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
@Repository
public interface PJ1400WDAO {

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select01();

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 방법론/산출물정의 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 수정
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * 방법론/산출물정의 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);
}