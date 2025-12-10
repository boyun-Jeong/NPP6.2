package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 기본요청서 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 21.	정보윤		최초작성
 */
public interface SR0040DService {

	/**
	 * 기본요청서 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 기본요청서 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> rowData) throws Exception ;
}