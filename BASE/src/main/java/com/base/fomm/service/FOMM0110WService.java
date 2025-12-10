package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 사용자 및 사용자별 권한그룹 관리 Service Interface
 * @package com.base.fomm.service
 * <pre>

 * @author  이정빈
 * @since   2023. 04. 06
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2023.04.06.	이정빈	최초작성
 */
public interface FOMM0110WService {

	/**
	 * SPP 사용자 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);

	/**
	 * SPP 사용자별 권한그룹 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	
	/**
	 * SPP 사용자/사용자별 권한그룹 일괄 저장
	 * @param dsMaster
	 */
	public void save01(List<Map<String, Object>> dsFommUserMt
					 , List<Map<String, Object>>dsFommAuthUserDt);
}
