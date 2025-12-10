package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 위치별 IP대역 관리 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 06.	정해운		최초작성
 */
@Repository
public interface SR5014DDAO {

	/**
	 * 위치별 IP대역 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 위치별 IP대역 관리  상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 위치별 IP대역 관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 위치별 IP대역 관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 위치별 IP대역 관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}