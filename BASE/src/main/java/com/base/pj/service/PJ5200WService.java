package com.base.pj.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 결함관리 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	이정빈		최초작성
 */
public interface PJ5200WService {

	/**
	 * 단위 테스트 결함관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 단위 테스트 결함관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}