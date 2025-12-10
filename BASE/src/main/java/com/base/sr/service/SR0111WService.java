package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - SR0111_W Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 29.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 29.	이정빈		최초작성
 */
public interface SR0111WService {

	/**
	 * SR0111_W 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * SR0111_W 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}