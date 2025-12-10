package com.base.fomm.service;

import java.util.Map;
import java.util.List;

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
public interface FOMM0000PService {

	/**
	 * SPP sitemap
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectSiteMap(Map<String, Object> searchMap);
	
	
	
	/**
	 * SPP 사용자 정보 조회
	 * @param dsCond
	 * @return 
	 */
	public Map<String, Object> select01(Map<String, Object> searchMap);

	/**
	 * SPP 대직 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectAgency(Map<String, Object> searchMap);
	
	/**
	 * SPP 사용자/사용자 정보 저장
	 * @param dsMaster
	 */
	public void save01(Map<String, Object> dsFommUserMt
							, List<Map<String, Object>> dsFommAgencyInfo);

	/**
	 * SPP 부서 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);

	/**
	 * SPP 부서 검색
	 * @param dsCond
	 * @return 
	 */
	public Map<String, Object> select03(Map<String, Object> searchMap);

	/**
	 * SPP 부서 검색
	 * @param dsCond
	 * @return 
	 */
	public Map<String, Object> select04(Map<String, Object> searchMap);
	
	
	/**
	 * SPP 부서 검색
	 * @param dsCond
	 * @return 
	 */
	public Map<String, Object> select05(Map<String, Object> searchMap);	
}