package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 업무위임관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 08.	황채린		최초작성
 */
public interface FOMM0240WService {

	/**
	 * 업무위임관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectYN(List<Map<String, Object>> dsCond);

	/**
	 * 업무위임관리 저장
	 * @param dsData
	 */
	public void saveAdd(List<Map<String, Object>> dsData);
	public void saveAdd2(List<Map<String, Object>> dsData);
	public void saveStop(List<Map<String, Object>> dsData);
	public void saveDelete(List<Map<String, Object>> dsData);
}