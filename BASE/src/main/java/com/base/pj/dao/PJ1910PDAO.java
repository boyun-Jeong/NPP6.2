package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 품질 이행 평가 관리 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Repository
public interface PJ1910PDAO {

	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_PROJECT]
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_QA_RST_DISP]
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_QA_RST]
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 품질 이행 평가 관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 품질 이행 평가 관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
}