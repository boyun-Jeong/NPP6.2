package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SR0111_W DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 29.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 29.	이정빈		최초작성
 */
@Repository
public interface SR0111WDAO {

	/**
	 * SR0111_W 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * SR0111_W 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * SR0111_W 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * SR0111_W 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}