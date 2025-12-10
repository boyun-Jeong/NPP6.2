package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 네트워크작업신청 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  김지수
 * @since   2024. 03. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 15.	김지수		최초작성
 */
@Repository
public interface SR8101DDAO {

	/**
	 * 네트워크작업신청 요청서 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 네트워크작업신청 요청서 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 접수1차 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 네트워크작업신청 요청서 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 네트워크작업신청 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	
	/**
	 * 네트워크작업신청 변경계획 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectProc_01(Map<String, Object> dsCond);

	/**
	 * 네트워크작업신청 변경계획 업데이트
	 * @param rowData
	 */
	public void saveProc_01(Map<String, Object> rowData);
	
	/**
	 * 네트워크작업신청 변경작업 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectProc_02(Map<String, Object> dsCond);

	/**
	 * 네트워크작업신청 변경작업 업데이트
	 * @param rowData
	 */
	public void saveProc_02(Map<String, Object> rowData);
	
	
}