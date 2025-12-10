package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 통보발송목록 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 13.	김지수		최초작성
 */
public interface FOMM0600WService {

	/**
	 * 통보발송목록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 통보발송목록 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}