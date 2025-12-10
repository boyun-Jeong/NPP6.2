package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 서브프로젝트상세 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
@Repository
public interface PJ0810PDAO {

	/**
	 * 서브프로젝트상세 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 서브프로젝트 업무 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 방법론 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03();

	/**
	 * 서브프로젝트상세 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 업무 등록(PJ_BIZ)
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 업무 등록(PJ_WBS)
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * 업무 등록(PJ_WBS_TOT)
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * 서브프로젝트 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 업무 수정(PJ_BIZ)
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);
	
	/**
	 * (MERGE PJ_DELIVERY)
	 * @param rowData
	 */
	public void modify03(Map<String, Object> rowData);

	/**
	 * 서브프로젝트상세 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 업무 삭제(PJ_BIZ)
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);
	
	/**
	 * 삭제(PJ_DELIVERY)
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * 삭제(PJ_WBS)
	 * @param rowData
	 */
	public void remove04(Map<String, Object> rowData);

	/**
	 * 삭제(PJ_WBS_TOT)
	 * @param rowData
	 */
	public void remove05(Map<String, Object> rowData);
}