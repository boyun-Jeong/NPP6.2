package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 결함관리 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	이정빈		최초작성
 */
@Repository
public interface PJ5200WDAO {

	/**
	 * 단위 테스트 결함관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 단위 테스트 결함관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}