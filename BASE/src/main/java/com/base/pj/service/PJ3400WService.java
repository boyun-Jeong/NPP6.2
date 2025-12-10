package com.base.pj.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;

/**
 * 
 * <pre>
 * @title
 * - 투입인력관리 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 23.	정보윤		최초작성
 */
public interface PJ3400WService {

	/**
	 * 투입인력관리 공수 List
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 투입인력관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 투입인력관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsUser, List<Map<String, Object>> dsUserMm);
}