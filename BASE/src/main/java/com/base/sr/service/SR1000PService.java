package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 보안성검토  조회(비정기 팝업시) Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  A
 * @since   2024. 10. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 10. 22.	A		최초작성
 */
public interface SR1000PService {

	/**
	 * 보안성검토  조회(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 프로그램(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);


	/**
	 * 보안성검토  조회(비정기 팝업시) 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}