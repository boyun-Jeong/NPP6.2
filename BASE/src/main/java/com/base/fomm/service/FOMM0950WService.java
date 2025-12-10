package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 쪽지처리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 25.	이훈석		최초작성
 */
public interface FOMM0950WService {

	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond);
	

	/**
	 * 쪽지처리 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> dsCond,Map<String, Object> dsPtMemo,Map<String, Object> dsPtMemoRcv);

	/**
	 * 임시저장후 수정 혹은 발송
	 * @param dsData
	 */
	public void save02(Map<String, Object> dsCond ,Map<String, Object> dsPtMemo, List<Map<String, Object>> dsPtMemoRcvTmp, List<Map<String, Object>> ds_userRcv_All);
	
	/**
	 * 쪽지 삭제
	 * @param dsData
	 */
	public void save03(Map<String, Object> dsCond);
}