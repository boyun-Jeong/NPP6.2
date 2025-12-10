package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 상세 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
@Repository
public interface PJ5400PDAO {

	/**
	 * PJ_SCNR_TEST 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * PJ_ST_DEFECT 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_INF_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_SCR_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_BTJB_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);
	
	/**
	 * PJ_SCNR_TEST 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * PJ_SCNR_TEST 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * PJ_STEST_INF_MAP 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * PJ_STEST_INF_MAP 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_STEST_SCR_MAP 저장
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * PJ_STEST_SCR_MAP 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * PJ_STEST_BTJB_MAP 저장
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * PJ_STEST_BTJB_MAP 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);
}