package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Service Intreface
 * @package com.base.fomm.service
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
public interface FOMM0250WService {

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
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsData);
}