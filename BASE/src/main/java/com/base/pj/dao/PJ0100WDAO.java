package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - WBS 관리(프로젝트일정계획) DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 25.	정보윤		최초작성
 */
@Repository
public interface PJ0100WDAO {

	/**
	 * WBS 내역 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * WBS TOT 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * WBS 이전 내역과 현재 저장 내역 변경 여부 체크
	 * @param dsCond
	 * @return
	 */
	public String select03(Map<String, Object> dsCond);
	
	/**
	 * WBS 내역 등록/수정
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * WBS 내역 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_WBS_HIST 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * WBS 계산
	 * @param dsCond
	 * @return
	 */
	public void callPrPjWbsRateCacuProc(Map<String, Object> rowData);
}