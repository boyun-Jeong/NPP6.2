package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 네트워크작업신청 Service Intreface
 * @package com.base.sr.service
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
public interface SR8101DService {

	/**
	 * 네트워크작업신청 요청서 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 네트워크작업신청 요청서 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> dsData);
	
	/**
	 * 접수1차 조회
	 * @param dsData
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 접수1차 저장
	 * @param dsData
	 * @throws Exception 
	 */
	public void save02(Map<String, Object> dsData) throws Exception;
	
	/**
	 * 변경계획 조회
	 * @param dsData
	 */
	public List<Map<String, Object>> selectProc_01(Map<String, Object> dsCond);
	
	/**
	 * 변경계획 저장
	 * @param dsData
	 * @throws Exception 
	 */
	public void saveProc_01(Map<String, Object> dsData) throws Exception;

	/**
	 * 변경작업 조회
	 * @param dsData
	 */
	public List<Map<String, Object>> selectProc_02(Map<String, Object> dsCond);
	
	/**
	 * 변경작업 저장
	 * @param dsData
	 * @throws Exception 
	 */
	public void saveProc_02(Map<String, Object> dsData) throws Exception;
	
	
	
	
}