package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 통보배치관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 01.	김지수		최초작성
 */
public interface FOMM0500WService {

	/**
	 * workflow 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWorkflowList(Map<String, Object> dsCond);

	/**
	 * 통보설정관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 통보설정 등록
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);

	/**
	 * 워크플로우 진행단계매핑 정보 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}