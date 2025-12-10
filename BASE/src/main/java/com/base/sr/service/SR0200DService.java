package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
public interface SR0200DService {

	/**
	 * 계정 신청(요청서) 내용 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 계정 신청 계정 내역 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 계정 신청(요청서) 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> dsSrInfrJob, List<Map<String, Object>> dsSrInfrAccnt);
	
	/**
	 * 접수1차 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 접수1차 저장
	 * @param dsData
	 */
	public void save02(Map<String, Object> rowData) throws Exception ;
}