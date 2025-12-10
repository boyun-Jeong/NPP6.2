package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 업체평가 조회 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 21.	정보윤		최초작성
 */
public interface PJ1800WService {

	/**
	 * 업체평가 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 업체평가 조회 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}