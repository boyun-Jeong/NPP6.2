package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 보고 상세 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 05.	정보윤		최초작성
 */
@Repository
public interface PJ0410PDAO {

	/**
	 * 보고 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 보고 상세 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 보고 상세 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
}