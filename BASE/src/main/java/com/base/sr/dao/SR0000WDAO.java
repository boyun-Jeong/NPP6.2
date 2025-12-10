package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청서 공통 처리 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 30.	정보윤		최초작성
 */
@Repository
public interface SR0000WDAO {

	/**
	 * 요청서 공통 처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 요청서 공통 처리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 요청서 공통 처리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 요청서 공통 처리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}