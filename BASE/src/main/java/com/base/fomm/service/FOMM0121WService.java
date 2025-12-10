package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 사용자 관리 Service Interface
 * @package com.base.fomm.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 06
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2023.04.06.	WEMB	최초작성
 */
public interface FOMM0121WService {

	/**
	 * SPP 확장권한 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);

	/**
	 * SPP 확장권한 사용자 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);

	/**
	 * SPP 확장권한 부서 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select03(Map<String, Object> searchMap);

	/**
	 * SPP 권한그룹/사용자 일괄 저장SPP 권한그룹/사용자 일괄 저장
	 * @param dsMaster
	 */
	public void save01(List<Map<String, Object>> dsExtdAuthMt
			 , List<Map<String, Object>> dsExtdAuthUserDt
			 , List<Map<String, Object>> dsExtdAuthDeptDt);
}
