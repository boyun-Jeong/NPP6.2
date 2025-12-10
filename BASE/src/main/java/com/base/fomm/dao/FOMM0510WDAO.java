package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 슬라이드 알림 관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
@Repository
public interface FOMM0510WDAO {

	/**
	 * 슬라이드 알림 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
		
}