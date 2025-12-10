package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 쪽지 그룹 관리 Service Intreface
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
public interface FOMM0940WService {

	/**
	 * 쪽지 그룹 관리 목록 조회
	 * @param admYn 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(String admYn);

	/**
	 * 쪽지 그룹 관리 저장
	 * @param dsData
	 * @param ds_memo_group_user 
	 */
	public void save01(List<Map<String, Object>> dsData, List<Map<String, Object>> ds_memo_group_user);

	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
}