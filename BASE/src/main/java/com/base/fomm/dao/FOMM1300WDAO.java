package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 업무분류별담당자관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 19.	정해운		최초작성
 */
@Repository
public interface FOMM1300WDAO {

	/**
	 * 업무분류별담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 업무분류별담당자관리 저장
	 * @param rowData
	 */
	public void insertDevpr(Map<String, Object> rowData);

	/**
	 * 업무분류별담당자관리 수정
	 * @param rowData
	 */
	public void updateDevpr(Map<String, Object> rowData);

	/**
	 * 업무분류별담당자관리 삭제
	 * @param rowData
	 */
	public void deleteDevpr(Map<String, Object> rowData);

	public List<Map<String, Object>> selectDeptList();

	public List<Map<String, Object>> selectDevprLIst();

	public List<Map<String, Object>> selectSeniorList();

	public List<Map<String, Object>> selectDataList(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectDevprRegPopList(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectSrType2All();

	public List<Map<String, Object>> selectUpmu2All();
}