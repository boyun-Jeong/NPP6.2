package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청서 공통 처리 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 30.	정보윤		최초작성
 */
public interface SR0000WService {

	/**
	 * 요청서 공통 처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 요청서 공통 처리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}