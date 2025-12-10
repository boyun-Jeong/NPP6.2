package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0210WDAO {
	
	/* SPP 게시판 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	
	/* SPP 게시판 추가 */
	public void insert01(Map<String, Object> rowData);
	
	/* SPP 게시판 삭제 */
	public void remove01(Map<String, Object> rowData);

	/* SPP 게시판 수정 */
	public void modify01(Map<String, Object> rowData);
	
}