package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 시스템링크관리페이지 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  고인호
 * @since   2025. 02. 26.
 * @version 1.0
 * @see
 *DDDCCCCCRKATKD
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 26.	고인호		최초작성
 */
public interface FOMM0270WService {

	/**
	 * 시스템링크관리페이지 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 시스템링크관리페이지 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
}