package com.base.wf.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - WF프로세스관리(상세) Service Intreface
 * @package com.base.wf.service
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 03. 12.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 12.	정보윤		최초작성
 */
public interface WF0120PService {

	/**
	 * 요청서 화면 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 요청서 화면 기본 테이블 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 요청서 화면 / 기본 테이블 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsWfReqScrnDt, List<Map<String, Object>> dsWfReqScrnDefTblDt);

	/**
	 * 역할자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 요청서 화면 기본 테이블 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) throws Exception ;
}