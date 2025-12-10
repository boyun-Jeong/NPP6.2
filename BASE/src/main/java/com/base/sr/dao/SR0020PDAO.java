package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 결재선 지정 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 20.	정보윤		최초작성
 */
@Repository
public interface SR0020PDAO {

	/**
	 * 결재자 검색
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 나의 결재 그룹 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 나의 결재 그룹 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 나의 결재선 그룹 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 나의 결재선 그룹 결재자 등록
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 나의 결재선 그룹 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
	
	/**
	 * 기본 결재선 내역 기본 결재선 해제
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * 나의 결재선 그룹 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 나의 결재선 그룹 결재자 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}