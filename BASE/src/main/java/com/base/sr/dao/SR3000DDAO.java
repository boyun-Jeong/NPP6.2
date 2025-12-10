package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청관리 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  황채린
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	황채린		최초작성
 */
@Repository
public interface SR3000DDAO {

	/**
	 * 요청관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReq(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectDtl(Map<String, Object> dsCond);
	public String selectReqTeamChk(Map<String, Object> dsCond);
	

	/**
	 * 요청관리 저장
	 * @param rowData
	 */
	public void insertSql(Map<String, Object> rowData);
	public void insertSqlIt(Map<String, Object> rowData);
	public void insertSqlPg(Map<String, Object> rowData);
	public void insertReq(Map<String, Object> rowData);
	public void insertDtl(Map<String, Object> rowData);
	
	/**
	 * 요청관리 수정
	 * @param rowData
	 */
	public void modifyReq(Map<String, Object> rowData);
	public void modifyDtl(Map<String, Object> rowData);

	/**
	 * 요청관리 삭제
	 * @param rowData
	 */
	public void removeReq(Map<String, Object> rowData);
	public void removeDtl(Map<String, Object> rowData);
	
	
	
	
	
	/**
	 * IT작업신청서 수정
	 * @param rowData
	 */	
	public void insertBackupMt(Map<String, Object> rowData);
	public void insertNwIpMt(Map<String, Object> rowData);
	public void insertOpCloudMt(Map<String, Object> rowData);

	public void call_prc_opNwIpMt(Map<String, Object> rowData);
	public void call_prc_omUserMt_create(Map<String, Object> rowData);
	public void call_prc_omUserMt_update(Map<String, Object> rowData);
	
}