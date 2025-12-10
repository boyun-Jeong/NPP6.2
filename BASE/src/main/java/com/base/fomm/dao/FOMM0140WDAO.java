package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0140WDAO {
	
	/* SPP 메뉴 트리 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 하위메뉴 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	/* SPP 메뉴 도움말 조회 */
	public List<Map<String, Object>> select03(Map<String, Object> searchMap);
	
	
	/* SPP 메뉴 추가 */
	public void insert01(Map<String, Object> rowData);
	
	/* SPP 메뉴 수정 */
	public void modify01(Map<String, Object> rowData);
	
	/* SPP 메뉴 삭제 */
	public void remove01(Map<String, Object> rowData);
	
	
	// 메뉴 도움말 추가/수정
	public void modify02(Map<String, Object> rowData);
	
	
	// 메뉴 도움말 삭제
	public void remove02(Map<String, Object> rowData);
}
