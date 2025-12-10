package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 만족도 항목관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 12. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 20.	정보윤		최초작성
 */
public interface FOMM0400WService {

	/**
	 * 만족도 항목관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 만족도 항목관리 아이템 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 만족도 항목관리/아이템 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsSatiqstMng, List<Map<String, Object>> dsSatiQstItem);
}