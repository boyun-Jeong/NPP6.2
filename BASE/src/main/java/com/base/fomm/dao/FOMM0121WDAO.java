package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0121WDAO {

	/* SPP 확장권한 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 확장권한 사용자 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);

	/* SPP 확장권한 부서 조회 */
	public List<Map<String, Object>> select03(Map<String, Object> searchMap);
	
	

	/* SPP 확장권한 추가/수정 */
	public void insert01(Map<String, Object> rowData);
	/* SPP 확장권한 사용자 추가 */
	public void insert02(Map<String, Object> rowData);
	/* SPP 확장권한 부서 추가 */
	public void insert03(Map<String, Object> rowData);

	/* SPP 확장권한 삭제(사용자/부서) */
	public void remove01(Map<String, Object> rowData);
}
