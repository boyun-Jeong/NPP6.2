package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 단위결함 상세 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
@Repository
public interface PJ5200PDAO {

	/**
	 * 단위결함 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 단위결함 상세 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 단위결함 상세 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
}