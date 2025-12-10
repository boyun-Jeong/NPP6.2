package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  노익현
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	노익현		최초작성
 */
@Repository
public interface SR0127WDAO {

	/**
	 * SR요청 현황(IT외주서비스요청) 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond);
	
	/**
	 * SR요청목록조회 (IT외주서비스요청)목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	

}