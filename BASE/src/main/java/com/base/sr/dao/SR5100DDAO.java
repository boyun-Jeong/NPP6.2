package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 문제등록 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 01.	이정빈		최초작성
 */
@Repository
public interface SR5100DDAO {

	/**
	 * 문제등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 문제등록 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 문제등록 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
}