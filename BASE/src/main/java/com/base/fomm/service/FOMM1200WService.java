package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 서식관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 17.	정해운		최초작성
 */
public interface FOMM1200WService {

	/**
	 * 서식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCatNh(Map<String, Object> dsCond);

	/**
	 * 서식관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);

	public List<Map<String, Object>> chkDupCatNh(Map<String, Object> dsCond);
}