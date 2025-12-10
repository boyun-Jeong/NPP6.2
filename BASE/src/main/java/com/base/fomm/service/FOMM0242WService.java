package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 업무위임관리(PL권한) Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 14.	정해운		최초작성
 */
public interface FOMM0242WService {

	/**
	 * 업무위임관리(PL권한) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 업무위임관리(PL권한) 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}