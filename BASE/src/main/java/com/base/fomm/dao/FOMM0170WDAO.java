package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0170WDAO {
	
	/* SPP 단어 코드 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/* SPP 단어 내용 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);

	/* SPP 시스템 기준언어 단어 중복 여부 체크 (해당 단어로 등록된 건수를 리턴) */
	public Integer select03(Map<String, Object> searchMap);

	/* SPP 시스템 기준 언어 단어 추가 */
	public void insert01(Map<String, Object> rowData);
	
	/* SPP 단어 코드NO 전체 삭제 */
	public void remove01(Map<String, Object> rowData);

	/* SPP 단어 내용 추가/수정 */
	public void modify02(Map<String, Object> rowData);

	/* SPP 단어 언어코드별 선택 삭제 */
	public void remove02(Map<String, Object> rowData);
}