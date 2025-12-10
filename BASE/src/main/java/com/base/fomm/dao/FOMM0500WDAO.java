package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 통보배치관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 01.	김지수		최초작성
 */
@Repository
public interface FOMM0500WDAO {

	/**
	 * workflow 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWorkflowList(Map<String, Object> dsCond);
	
	/**
	 * 통보배치관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 통보배치관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 통보배치관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 통보배치관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectFommNotiMngMt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 진행단계매핑 정보 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}