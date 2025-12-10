package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 산출물 등록 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 27.	정보윤		최초작성
 */
@Repository
public interface PJ0300WDAO {

	/**
	 * 산출물 등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 서브 프로젝트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * WBS 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 산출물 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * 산출물 등록 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 산출물 등록 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 산출물 등록 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 산출물 등록 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 산출물 등록 수정
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * 산출물 등록 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}