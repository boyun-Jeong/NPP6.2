package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 관리자IP 관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
public interface FOMM0740WService {

	/**
	 * 관리자IP 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 관리자IP 관리 저장전 중복체크
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select_save_chk01(Map<String, Object> dsCond);

	/**
	 * 관리자IP 관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}