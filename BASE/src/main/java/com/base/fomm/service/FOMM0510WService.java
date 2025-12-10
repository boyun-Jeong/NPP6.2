package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 슬라이드 알림 관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
public interface FOMM0510WService {

	/**
	 * 통보설정관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
}