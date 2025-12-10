package com.base.fomm.dao;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 서비스별 담당자관리 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 10.	정해운		최초작성
 */
@Repository
public interface FOMM1100WDAO {

	/**
	 * 서비스별 담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectStaffSvcMng(Map<String, Object> dsCond);

	/**
	 * 서비스별 담당자관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 서비스별 담당자관리 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 서비스별 담당자관리 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	public List<Map<String, Object>> selectSvcType(Map<String, Object> dsCond);

	public Map<String, Object> chkDup(Map<String, Object> dsCond);

	public void insertStaffMng(Map<String, Object> rowData);

	public void updateStaffMng(Map<String, Object> rowData);

	public void deleteStaffMng(Map<String, Object> rowData);

	public Map<String, Object> selectPreStaffSvcMng(Map<String, Object> rowData);

	public void insertChgHist(Map<String, Object> preMap);

	public List<Map<String, Object>> selectChgHist(Map<String, Object> dsCond);

	public void deleteStaffMngAll();

	public List<LinkedHashMap<String, Object>> selectExlStaffSvcMng();
}