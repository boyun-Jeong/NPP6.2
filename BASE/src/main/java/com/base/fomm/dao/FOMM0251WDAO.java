package com.base.fomm.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FOMM0251WDAO {
	/* SPP 게시글 조회 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/* SPP 게시판 조회 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/* SPP 게시판 종류 및 템플릿 조회 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/* SPP IT 게시판 그리드 - 조회 */
	public List<Map<String, Object>> selectEDU(Map<String, Object> dsCond);
	
	/* SPP SW 게시판 그리드 - 조회 */
	public List<Map<String, Object>> selectSW(Map<String, Object> dsCond);
	
	/* SPP 게시판 템플릿 목록 조회 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);
	
	/* SPP 게시글 추가 */
	public void insert01(Map<String, Object> rowData);
	
	/* SPP 게시판 추가 */
	public void insert02(Map<String, Object> rowData);

	/* SPP SW 게시판 그리드 - 추가 */
	public void insert03(Map<String, Object> swRowData);
	
	/* SPP IT 게시판 그리드 - 추가 */
	public void insert04(Map<String, Object> rowData);
	
	/* SPP 게시글 수정 */
	public void modify01(Map<String, Object> rowData);

	/* SPP 게시판 수정 */
	public void modify02(Map<String, Object> rowData);

	/* SPP SW 게시판 그리드 - 수정 */
	public void modify03(Map<String, Object> swRowData);
	
	/* SPP IT 게시판 그리드 - 수정 */
	public void modify04(Map<String, Object> rowData);
	
	/* SPP 게시글 삭제 */
	public void remove01(Map<String, Object> rowData);
	
	public void remove01_leaf(Map<String, Object> dtRowData);

	/* SPP 게시판 삭제 */
	public void remove02(Map<String, Object> rowData);

	/* SPP IT 게시판 그리드 - 삭제 */
	public void remove04(Map<String, Object> rowData);

	/* SPP SW 게시판 그리드 - 삭제 */
	public void remove03(Map<String, Object> swRowData);
	
	/* SPP 게시판 - 조회수 증가 */
	public void updateCnt(Map<String, Object> dsCond);

	/* SPP 게시판 템플릿 - 추가 */
	public void insert05(Map<String, Object> rowData);

	/* SPP 게시판 템플릿 - 수정 */
	public void modify05(Map<String, Object> rowData);

	/* SPP 게시판 템플릿 - 삭제 */
	public void remove05(Map<String, Object> rowData);

	public List<Map<String, Object>> select06(Map<String, Object> dsSessUser);

	public List<Map<String, Object>> select07(Map<String, Object> dsCond);








}
