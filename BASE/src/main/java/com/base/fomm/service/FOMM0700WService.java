package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 표준 체크리스트 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	김미성		최초작성
 */
public interface FOMM0700WService {

	/**
	 * 표준 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트 서브목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트 팝업목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 표준 체크리스트 제외대상 팝업  목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	
	/**
	 * 표준 체크리스트 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsMaster, List<Map<String, Object>> dsDetail);
	
	/**
	 * 표준 체크리스트 질문,예문 저장
	 * @param dsData
	 */
	public String save02(List<Map<String, Object>> dsMaster);
	
	/**
	 * 표준 체크리스트 제외대상 저장
	 * @param dsData
	 */
	public String save03(List<Map<String, Object>> dsData);
}