package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 일정등록 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 14.	이정빈		최초작성
 */
public interface FOMM0300WService {

	/**
	 * 조회 월의 시작일 요일과 마지막 날짜 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 일정등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}