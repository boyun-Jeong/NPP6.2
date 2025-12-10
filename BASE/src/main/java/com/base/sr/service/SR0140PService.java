package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 결재 팝업 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	이정빈		최초작성
 */
public interface SR0140PService 
{
	
	/**
	 * 결재 승인
	 * @param dsData
	 */
	public void saveApprove(List<Map<String, Object>> dsApprInfo) throws Exception;
	
	/**
	 * 결재 반려
	 * @param dsData
	 */
	public void saveReturn(List<Map<String, Object>> dsApprInfo) throws Exception;
}