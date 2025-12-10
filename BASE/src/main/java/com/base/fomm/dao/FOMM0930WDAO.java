package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 쪽지함 첨부파일 용량조회 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Repository
public interface FOMM0930WDAO {

	/**
	 * 쪽지함 첨부파일 용량조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 쪽지함 첨부파일 용량조회 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 쪽지함 첨부파일 용량조회 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 쪽지함 첨부파일 용량조회 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}