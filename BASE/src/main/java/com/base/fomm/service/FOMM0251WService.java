package com.base.fomm.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * - 게시판(트리구조) Service Interface
 * @package com.base.fomm.service
 * <pre>

 * @author  정하림
 * @since   2024. 12. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자	 	내용
 * ------------------------------------------------
 * 2024. 12. 09.	정하림		최초작성
 */
public interface FOMM0251WService {
	/**
	 * SPP 게시글 조회
	 * @param dsCond
	 * @return 
	 * @throws Exception 
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception;
	
	/**
	 * SPP 게시판 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * SPP 게시판 종류 및 템플릿 조회
	 * @param dsCond
	 * @return
	 * @throws Exception 
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) throws Exception;
	
	/**
	 * SPP SW/IT 게시판 그리드 - 조회
	 * @throws IllegalAccessException 
	 */
	List<Map<String, Object>> select04(Map<String, Object> dsCond, String reqTypeNm) throws IllegalAccessException;
	
	/**
	 * SPP 게시글 저장
	 * @param dsSwMt 
	 * @param
	 * @return 
	 */
	public String save01(List<Map<String, Object>> dsPostDt, List<Map<String, Object>> dsEduMt, List<Map<String, Object>> dsSwMt);

	/**
	 * SPP 게시판 저장
	 * @param dsCond
	 */
	public void save02(List<Map<String, Object>> dsPostMt);

	/**
	 * 	SPP 게시판 템플릿 목록 조회
	 * @param dsCond
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) throws Exception;

	/**
	 * SPP 게시판 템플릿 저장
	 * @param dsTmplMt
	 */
	public void save03(List<Map<String, Object>> dsTmplMt);

	/**
	 * SPP 게시판 조회수 증가
	 * @param dsCond 
	 */
	public void updateCnt(Map<String, Object> dsCond);

	public List<Map<String, Object>> select06(Map<String, Object> dsCond);

	public List<Map<String, Object>> select07(Map<String, Object> dsCond);

}
