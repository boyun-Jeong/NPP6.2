package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청서 등록 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 26.	정보윤		최초작성
 */
@Repository
public interface SR0110WDAO {

	/**
	 * 요청서 등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
}