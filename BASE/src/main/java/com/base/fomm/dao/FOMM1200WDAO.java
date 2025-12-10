package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 서식관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 17.	정해운		최초작성
 */
@Repository
public interface FOMM1200WDAO {

	/**
	 * 서식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCatNh(Map<String, Object> dsCond);

	/**
	 * 서식관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 서식관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 서식관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	public List<Map<String, Object>> chkDupCatNh(Map<String, Object> dsCond);

	public void insertCatNh(Map<String, Object> rowData);

	public void updateCatNh(Map<String, Object> rowData);
}