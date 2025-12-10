package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 메뉴권한 관리 Service Interface
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
public interface FOMM0130WService {

		/**
	 * SPP 권한그룹별 메뉴 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	
	/**
	 * SPP 권한그룹별 메뉴 권한 저장
	 * @param dsMaster
	 */
	public void save01(List<Map<String, Object>> dsFommAuthUserDt, String authId);
}
