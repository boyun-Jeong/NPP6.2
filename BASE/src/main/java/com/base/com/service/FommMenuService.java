package com.base.com.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        메뉴권한 Servlce Interface
 * @package com.base.com.service
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
public interface FommMenuService {

	/**
	 * 사용자 메뉴 권한 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectUserMenu(Map<String, Object> dsCond);

	/**
	 * 개발자용 UTIL 메뉴 LIST 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectDevMenu(Map<String, Object> dsCond);

	/**
	 * 
	 * @param 테이블명
	 */
	public Integer selectTableCount(String tblNm);
	
	/**
	 * 테이블 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectTableList(Map<String, Object> dsCond);
	
	/**
	 * 테이블 컬럼 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectTableColumnList(Map<String, Object> dsCond);
	
	
	
	/**
	 * 즐겨찾기 메뉴 저장
	 * @param dsCond
	 * @return 
	 */
	public void saveBkmkMenu(List<Map<String, Object>> dsMyMenu);
	
	
	/**
	 * 사용로그 저장
	 * @param menuId, menuNm, menuUrl
	 * @return 
	 */
	public void saveUserLog(String menuId, String menuNm, String menuUrl, String serverIp, String clientIp);
}