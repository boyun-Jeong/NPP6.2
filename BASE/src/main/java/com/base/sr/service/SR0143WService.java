package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 결재이력(FLOW)조회 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 19.	김미성		최초작성
 */
public interface SR0143WService {

	/**
	 * 결재이력(FLOW)조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 결재이력(FLOW)조회 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsCond);
}