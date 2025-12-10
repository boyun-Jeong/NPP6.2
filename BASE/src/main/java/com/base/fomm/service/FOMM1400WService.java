package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 난이도관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 24.	정해운		최초작성
 */
public interface FOMM1400WService {

	/**
	 * 난이도관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 난이도관리 저장
	 * @param dsData
	 * @param dsDataItem 
	 */
	public void save01(List<Map<String, Object>> dsData, List<Map<String, Object>> dsDataItem);

	public void delMng(Map<String, Object> dsCond);
}