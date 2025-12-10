package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 쪽지함 첨부파일 용량조회 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
public interface FOMM0930WService {

	/**
	 * 쪽지함 첨부파일 용량조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 쪽지함 첨부파일 용량조회 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}