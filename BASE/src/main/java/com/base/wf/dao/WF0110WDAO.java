package com.base.wf.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 워크플로우 관리 DAO
 * @package com.base.wf.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 24.	정보윤		최초작성
 */
@Repository
public interface WF0110WDAO {

	/**
	 * 워크플로우 Type 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 워크플로우 Type 단계 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 워크플로우 Type 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 워크플로우 Type 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 워크플로우 Type 단계 저장
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);
	
	/**
	 * 워크플로우 Type 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 워크플로우 Type 단계 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
}