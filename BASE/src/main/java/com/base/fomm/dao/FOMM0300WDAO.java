package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 일정등록 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 14.	이정빈		최초작성
 */
@Repository
public interface FOMM0300WDAO {

	/**
	 * 조회 월의 시작일 요일과 마지막 날짜 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 일정등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}