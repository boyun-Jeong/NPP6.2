package com.base.ref.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 개발가이드 Service Intreface
 * @package com.base.ref.service
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 04. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 30.	정보윤		최초작성
 */
public interface RefCommService {

	/**
	 * DB FUNC/PROC 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectFuncProcList(Map<String, Object> dsCond);

	/**
	 * DB FUNC/PROC 현재 내용 조회
	 * @param dsCond
	 * @return
	 */
	public String selectCurrentFuncProcData(Map<String, Object> dsCond);
	
	/**
	 * DB FUNC/PROC 이력 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * DB FUNC/PROC 이력 등록/수정/삭제
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}