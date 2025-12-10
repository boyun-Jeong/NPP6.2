package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 보고서 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 31.	정보윤		최초작성
 */
@Repository
public interface PJ4700WDAO {

	/**
	 * 보고서 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * PJ_RPPR_SCR_MAP 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_RPPR_BTJB_MAP 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * PJ_RPPR_FUNC_MAP 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * PJ_RPPR_REQ_MAP 삭제
	 * @param rowData
	 */
	public void remove04(Map<String, Object> rowData);

	/**
	 * PJ_RPTPRG 삭제
	 * @param rowData
	 */
	public void remove05(Map<String, Object> rowData);
}