package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 서비스조회(요청서목록) DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
@Repository
public interface SR9921WDAO {

	/**
	 * 서비스조회(요청서목록) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond);

	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectAdminCnt(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectAdmin(Map<String, Object> dsCond);
}