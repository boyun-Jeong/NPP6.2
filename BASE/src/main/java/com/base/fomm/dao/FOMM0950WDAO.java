package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 쪽지처리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 25.	이훈석		최초작성
 */
@Repository
public interface FOMM0950WDAO {

	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond);
	

	/**
	 * 쪽지처리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 수신자 READ_YN 업데이트
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
	
	/**
	 * 수신자 DEL_YN 업데이트
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);
	
	/**
	 * 발신자 READ_YN 업데이트
	 * @param rowData
	 */
	public void modify03(Map<String, Object> rowData);
	
	/**
	 * 수신자 READ_YN 업데이트
	 * @param rowData
	 */
	public void modify04(Map<String, Object> rowData);
	
	/**
	 * 발신자가 임시저장 후 쪽지 수정 혹은 발송처리
	 * @param rowData
	 */
	public void modify05(Map<String, Object> rowData);
	
	/**
	 * 발신자가 임시저장 후 쪽지 수정 혹은 발송처리-수신테이블업데이트
	 * @param rowData
	 */
	public void modify06(Map<String, Object> rowData);
	
	/**
	 * 발신자가 임시저장 후 쪽지 수정 혹은 발송처리-수신테이블인서트
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 발신자가 임시저장 후 수신자를 삭제처리 - 수신테이블에서 해당 user 메모삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 메모삭제-발신자,수신자
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}