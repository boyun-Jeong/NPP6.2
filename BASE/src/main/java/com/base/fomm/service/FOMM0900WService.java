package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 쪽지보내기 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
public interface FOMM0900WService {

	/**
	 * 쪽지보내기 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 쪽지보내기 저장
	 * @param dsPtMemo
	 * @param dsPtMemoRcv
	 */
	public String save01(Map<String, Object> dsPtMemo,  List<Map<String, Object>> dsPtMemoRcv) throws Exception;

	public List<Map<String, Object>> selectMemoDeptUser(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectMemoDeptUserList(String DEPT_CD, String SCH_NM);

	public List<Map<String, Object>> selectMemoGrpUser(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectMemoGrpUserList(String gROUP_ID, String sCH_NM);

	public List<Map<String, Object>> selectUserRtn(List<Map<String, Object>> dsCond);

	public List<Map<String, Object>> selectMemoUserSingle(Map<String, Object> dsCond);
}