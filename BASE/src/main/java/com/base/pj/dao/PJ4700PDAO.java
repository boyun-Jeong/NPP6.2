package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 보고서 상세 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
@Repository
public interface PJ4700PDAO {

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);

	/**
	 * 보고서 상세 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 보고서 상세 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 보고서 상세 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 보고서 상세 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 보고서 상세 저장
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * 보고서 상세 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * 보고서 상세 저장
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * 보고서 상세 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * 보고서 상세 저장
	 * @param rowData
	 */
	public void insert05(Map<String, Object> rowData);

	/**
	 * 보고서 상세 삭제
	 * @param rowData
	 */
	public void remove04(Map<String, Object> rowData);
}