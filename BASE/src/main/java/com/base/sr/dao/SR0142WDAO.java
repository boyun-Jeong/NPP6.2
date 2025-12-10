package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 결재이력조회 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 21.	김미성		최초작성
 */
@Repository
public interface SR0142WDAO {

	/**
	 * 결재이력조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 결재이력조회 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 결재이력조회 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 결재이력조회 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}