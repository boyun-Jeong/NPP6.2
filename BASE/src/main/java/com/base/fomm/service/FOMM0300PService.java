package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 작업스케쥴 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 18.	이정빈		최초작성
 */
public interface FOMM0300PService {

	/**
	 * 작업스케쥴 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception;

	/**
	 * 작업스케쥴 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}