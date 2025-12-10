package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 사용자 정보(workflow) DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	정보윤		최초작성
 */
@Repository
public interface SR0010PDAO {

	/**
	 * 사용자 정보(workflow) 목록 조회(담당자)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 사용자 정보(workflow) 목록 조회(결재선)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 요청서 처리 이력 조회(팝업)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 요청서 처리 이력 조회(요청서 상단에 이력 표기용)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);
}