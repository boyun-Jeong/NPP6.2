package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0120WDAO {

	/* SPP 권한그룹 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 권한그룹별 사용자 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);

	/* SPP 권한그룹별 부서 조회 */
	public List<Map<String, Object>> select03(Map<String, Object> searchMap);

	/* SPP 권한그룹별 확장권한 조회 */
	public List<Map<String, Object>> select04(Map<String, Object> searchMap);
	
	
	
	/* SPP 권한그룹 추가 */
	public void insert01(Map<String, Object> rowData);
	/* SPP 권한그룹 수정 */
	public void modify01(Map<String, Object> rowData);
	/* SPP 권한그룹 삭제 */
	public void remove01(Map<String, Object> rowData);
}
