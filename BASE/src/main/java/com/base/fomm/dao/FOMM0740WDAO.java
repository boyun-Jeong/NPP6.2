package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 관리자IP 관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
@Repository
public interface FOMM0740WDAO {

	/**
	 * 관리자IP 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	
	/**
	 * 관리자IP 관리 저장전 중복체크
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select_save_chk01(Map<String, Object> dsCond);

	/**
	 * 관리자IP 관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 관리자IP 관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 관리자IP 관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}