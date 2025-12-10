package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - FOMM0122W Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  노익현
 * @since   2024. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 13.	노익현		최초작성
 */
public interface FOMM0122WService {

	/**
	 * FOMM0122W 확장그룹 리스트 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * FOMM0122W 권한그룹 리스트 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * FOMM0122W 권한 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * FOMM0122W 확장그룹 중복 체크
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * FOMM0122W 등록저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
	

	

}