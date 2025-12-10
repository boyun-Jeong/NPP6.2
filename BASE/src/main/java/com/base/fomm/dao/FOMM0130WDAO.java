package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0130WDAO {
	
	/* SPP 권한그룹별 메뉴권한 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	/* SPP 권한그룹별 메뉴권한 추가/삭제 */
	public void insert01(Map<String, Object> rowData);
}
