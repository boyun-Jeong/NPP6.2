package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 단계별 일정 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 26.	정보윤		최초작성
 */
@Repository
public interface PJ2100WDAO {

	/**
	 * 단계별 일정 - 프로젝트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 단계별 일정 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 단계별 일정 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 단계별 일정 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 단계별 일정 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}