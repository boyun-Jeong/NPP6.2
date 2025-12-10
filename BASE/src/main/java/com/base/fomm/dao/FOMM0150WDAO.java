package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0150WDAO {
	
	/* SPP 코드 트리 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 하위코드 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	/* SPP 선택코드 언어별 조회 */
	public List<Map<String, Object>> select03(Map<String, Object> searchMap);
	
	
	
	/* SPP 코드 추가/수정 */
	public void modify01(Map<String, Object> rowData);
	
	/* SPP 코드 삭제 */
	public void remove01(Map<String, Object> rowData);
}
