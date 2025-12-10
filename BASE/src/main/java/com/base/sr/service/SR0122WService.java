package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	정보윤		최초작성
 */
public interface SR0122WService {

	/**
	 * SR요청 현황 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond);

	/**
	 * SR요청목록조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	

	/**
	 * SR요청 현황(비상) 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05_01(Map<String, Object> dsCond);
	
	/**
	 * SR요청 현황(비상) 업무시간 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05_001(Map<String, Object> dsCond);
	
	/**
	 * SR요청 현황(비상) 공휴일 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05_002(Map<String, Object> dsCond);
	
	/**
	 * SR요청목록조회(비상) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);		
	/**
	 * SR요청 현황(폐기) 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06_01(Map<String, Object> dsCond);
	
	/**
	 * SR요청목록조회(폐기) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond);	
}