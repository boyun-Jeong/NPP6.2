package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 즉시알림발송 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 13.	정보윤		최초작성
 */
public interface FOMM0540WService {

	/**
	 * 즉시알림발송 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 즉시알림발송 저장
	 * @param dsData
	 */
	public void save01(Map<String, Object> dsFommNotiSendMt, List<Map<String, Object>> dsUserList) throws Exception;
}