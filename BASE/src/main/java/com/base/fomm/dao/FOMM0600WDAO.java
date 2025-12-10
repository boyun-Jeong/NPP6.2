package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 통보발송목록 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 13.	김지수		최초작성
 */
@Repository
public interface FOMM0600WDAO {

	/**
	 * 통보발송목록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 통보발송목록 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 통보발송목록 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 통보발송목록 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}