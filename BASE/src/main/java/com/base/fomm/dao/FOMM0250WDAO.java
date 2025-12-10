package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 10.	이정빈		최초작성
 */
@Repository
public interface FOMM0250WDAO {

	/**
	 * 회의관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 회의참여자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 회의불참자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
		
	
	/**
	 * 회의관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
	public void modify01(Map<String, Object> rowData);
	public void remove01(Map<String, Object> rowData);
	
	
	/**
	 * 참여자 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);
	public void modify02(Map<String, Object> rowData);
	public void remove02(Map<String, Object> rowData);
	public void remove03(Map<String, Object> rowData);
	
	/**
	 * 참여자 확인여부 업데이트
	 * @param rowData
	 */
	public void readYnUpdate(Map<String, Object> dsCond);
}