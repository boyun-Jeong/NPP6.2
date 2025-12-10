package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title   
 * -        사용자 메뉴 권한 조회 DAO
 * @package com.base.com.dao
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜          변경자	내용
 * ------------------------------------------------
 * 2023.04.06.  WEMB	최초작성
 */
@Repository
public interface FommMenuDAO {

	/**
	 * 사용자 메뉴 LIST 조회
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
	 * 테이블 존재여부 조회
	 * @param String tableNm
	 * @return Integer 조회건수
	 */
	public Integer selectTableCount(Map<String, Object> dsCond);
	
	/**
	 * 테이블 목록 조회
	 * @param String tableNm
	 * @return
	 */
	public List<Map<String, Object>> selectTableList(Map<String, Object> dsCond);
	
	/**
	 * 테이블 컬럼 목록 조회
	 * @param String tableNm
	 * @return
	 */
	public List<Map<String, Object>> selectTableColumnList(Map<String, Object> dsCond);
	
	
	
	/* MyMenu 추가 */
	public void insertMyMenu(Map<String, Object> rowData);
	/* MyMenu 삭제 */
	public void removeMyMenu(Map<String, Object> rowData);

	
	/* 사용로그 추가 */
	public void insertUserLog(Map<String, Object> rowData);
}
