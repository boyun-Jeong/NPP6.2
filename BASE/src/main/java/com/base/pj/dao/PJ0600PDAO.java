package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 회의 검색 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 13.	정보윤		최초작성
 */
@Repository
public interface PJ0600PDAO {

	/**
	 * 회의 검색 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
}