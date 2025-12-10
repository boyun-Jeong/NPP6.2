package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0110WDAO {

	/* SPP 사용자 목록 조회*/
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 사용자별 권한그룹 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	
	
	/* SPP 사용자 추가 */
	public void insert01(Map<String, Object> rowData);
	/* SPP 사용자 수정 */
	public void modify01(Map<String, Object> rowData);
	/* SPP 사용자 삭제 */
	public void remove01(Map<String, Object> rowData);
	
	
	/* SPP 사용자별 권한그룹 추가 */
	public void insert02(Map<String, Object> rowData);
	/* SPP 사용자별 권한그룹 삭제 */
	public void remove02(Map<String, Object> rowData);
}
