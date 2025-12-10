package com.base.fomm.dao;

import java.util.Map;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0000PDAO {

	/* SPP siteMap */
	public List<Map<String, Object>> selectSiteMap(Map<String, Object> searchMap);
	
	
	
	/* SPP 사용자 정보 조회*/
	public Map<String, Object> select01(Map<String, Object> searchMap);
	
	/* SPP 대직 정보 조회*/
	public List<Map<String, Object>> selectAgency(Map<String, Object> searchMap);
	
	

	/* SPP 사용자 수정 */
	public void modify01(Map<String, Object> rowData);

	/* SPP 부서 목록 조회*/
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	
	/* SPP 부서별 권한그룹 추가 */
	public void insert01(Map<String, Object> rowData);
	/* SPP 부서별 권한그룹 삭제 */
	public void remove01(Map<String, Object> rowData);
	
	
	/* SPP 확장권한별 권한그룹 추가 */
	public void insert02(Map<String, Object> rowData);
	/* SPP 확장권한별 권한그룹 삭제 */
	public void remove02(Map<String, Object> rowData);

	/* SPP 부서 검색 */
	public Map<String, Object> select03(Map<String, Object> searchMap);

	/* SPP 부서 검색 */
	public Map<String, Object> select04(Map<String, Object> searchMap);
	
	/* SPP 부서 검색 */
	public Map<String, Object> select05(Map<String, Object> searchMap);
	
	/* SPP 추진부서 정보 TREE용 조회 */
	public List<Map<String, Object>> select06(Map<String, Object> searchMap);
	
	
	/* 대직 추가/수정 */
	public void modify02(Map<String, Object> rowData);
	
}
