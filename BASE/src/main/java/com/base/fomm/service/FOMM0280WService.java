package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 04. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 02.	정해운		최초작성
 */
public interface FOMM0280WService {

	/**
	 * 회의관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 회의참여자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 회의불참자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 회의참여자 목록 조회 - FOMM0280_P01 용
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);
	
	/**
	 * 회의참여자 목록 조회 - FOMM0280_P01 용
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond);
	
	/**
	 * 회의참여자 목록 조회 - 관리자용 FOMM0280_W
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) throws Exception;
	
	/**
	 * 회의관리 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsData, List<Map<String, Object>> dsAttnd);
	
	/**
	 *  FOMM0280 회의관리(관리자용)
	 * @param dsData
	 */
	
	public void save03(List<Map<String, Object>> dsData);
	
	/**
	 *  참석자가 확인버튼 클릭시 CONF_YN, OPNION 업데이트
	 * @param dsCond
	 */
	
	public void save04(Map<String, Object> dsCond);
}