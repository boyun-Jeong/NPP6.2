package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청관리 Service Intreface
 * @package com.base.sr.service
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
public interface SR3000DService {

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
	 * @param dsData
	 */
	public void insertSql(List<Map<String, Object>> dsData);
	public void insertSqlIt(List<Map<String, Object>> dsData);
	public void insertSqlPg(List<Map<String, Object>> dsData);

	public void saveReq(List<Map<String, Object>> dsData);
	public void saveDtl(List<Map<String, Object>> dsData);

	
	
	/**
	 * IT작업신청서 수정
	 * @param rowData
	 */	
	public void insertBackupMt();
	public void insertNwIpMt();
	public void insertOpCloudMt();
	
	public void call_prc_opNwIpMt();
	public void call_prc_omUserMt_create();
	public void call_prc_omUserMt_update();
	
}