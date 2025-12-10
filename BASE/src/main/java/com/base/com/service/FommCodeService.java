package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 Servlce Intreface
 * @package com.base.com.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2020. 04. 08.	WEMB		최초작성
 */
public interface FommCodeService {

	/**
	 * 공통코드 전체 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectComCode(Map<String, Object> dsCond);

	/**
	 * 사용자 메세지 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectComMsg(Map<String, Object> dsCond);
	
	/**
	 * 사용자 단어 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectComWord(Map<String, Object> dsCond);
	
	/**
	 * 공통코드 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectGetCode(Map<String, Object> dsCond);

	/**
	 * 업무 위임자 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectFommAgencyInfo();
	
	/**
	 * 직급 코드 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectJbcPosiList(Map<String, Object> dsCond);

	/**
	 * 직책 코드 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectJbcList(Map<String, Object> dsCond);

	/**
	 * 알람 카운트 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectAlarmCnt(Map<String, Object> dsCond);
}