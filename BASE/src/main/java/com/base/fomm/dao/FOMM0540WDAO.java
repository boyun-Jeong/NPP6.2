package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 즉시알림발송 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 13.	정보윤		최초작성
 */
@Repository
public interface FOMM0540WDAO {

	/**
	 * 즉시알림발송 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 즉시알림발송 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
}