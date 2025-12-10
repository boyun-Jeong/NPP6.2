package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 시스템링크관리페이지 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  고인호
 * @since   2025. 02. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 26.	고인호		최초작성
 */
@Repository
public interface FOMM0270WDAO {

	/**
	 * 시스템링크관리페이지 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 시스템링크관리페이지 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 시스템링크관리페이지 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 시스템링크관리페이지 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}