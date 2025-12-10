package com.base.wf.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 워크플로우 관리 Service Intreface
 * @package com.base.wf.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 24.	정보윤		최초작성
 */
public interface WF0110WService {

	/**
	 * 워크플로우 Type 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 워크플로우 Type 단계 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 워크플로우 Type 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsDataM, List<Map<String, Object>> dsDataD);
}