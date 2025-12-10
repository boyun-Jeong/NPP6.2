package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 기본요청서 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 21.	정보윤		최초작성
 */
@Repository
public interface SR0040DDAO {

	/**
	 * 기본요청서 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 기본요청서 등록/수정 Merge문
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 기본요청서 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}