package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0160WDAO {
	
	/* SPP 공통메시지 기준언어 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 공통메시지 전체언어 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	
	/* SPP 공통메시지 코드 추가 */
	public void insert01(Map<String, Object> rowData);
	/* SPP 공통메시지 코드 삭제 */
	public void remove01(Map<String, Object> rowData);


	/* SPP 공통메시지 내용 수정 */
	public void modify02(Map<String, Object> rowData);
	/* SPP 공통메시지 내용 삭제 */
	public void remove02(Map<String, Object> rowData);

}