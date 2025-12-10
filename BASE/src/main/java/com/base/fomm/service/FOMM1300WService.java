package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 업무분류별담당자관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 19.	정해운		최초작성
 */
public interface FOMM1300WService {

	/**
	 * 업무분류별담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectDataList(Map<String, Object> dsCond);

	/**
	 * 업무분류별담당자관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);

	public Map<String, Object> selectInitInfo(String strSchList);

	public List<Map<String, Object>> selectDevprRegPopList(Map<String, Object> dsCond);
}