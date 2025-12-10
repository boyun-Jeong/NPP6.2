package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - TO-DO 리스트 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  위엠비
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	위엠비		최초작성
 */
@Repository
public interface FOMM0800WDAO {

	/**
	 * TO-DO 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	
}
