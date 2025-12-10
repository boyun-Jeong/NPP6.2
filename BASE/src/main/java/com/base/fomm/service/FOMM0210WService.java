package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 게시판 관리 Service Interface
 * @package com.base.fomm.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 06
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2023.04.06.	WEMB	최초작성
 */
public interface FOMM0210WService {

	/**
	 * SPP 게시판 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/**
	 * SPP 게시판 저장
	 * @param dsMaster
	 */
	public void save01(List<Map<String, Object>> dsBoardMt);
	
}
