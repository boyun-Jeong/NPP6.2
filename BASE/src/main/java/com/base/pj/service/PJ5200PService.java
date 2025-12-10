package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 단위결함 상세 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
public interface PJ5200PService {

	/**
	 * 단위결함 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 단위결함 상세 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsData);
}