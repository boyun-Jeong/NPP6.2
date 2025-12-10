package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - ACTION ITEM 관리 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Repository
public interface PJ0500WDAO {

	/**
	 * ACTION ITEM 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * ACTION ITEM 관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * PJ_ACT_ACTION 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}