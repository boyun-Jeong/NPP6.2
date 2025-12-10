package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 휴일관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 11.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 11.	황채린		최초작성
 */
@Repository
public interface FOMM0260WDAO {

	/**
	 * 휴일관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 휴일관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 휴일관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 휴일관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}