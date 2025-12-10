package com.base.pj.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 상세 Service Intreface
 * @package com.base.pj.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
public interface PJ5400PService {

	/**
	 * PJ_SCNR_TEST 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception;

	/**
	 * PJ_ST_DEFECT 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_INF_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_SCR_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * PJ_STEST_BTJB_MAP 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);
	/**
	 * 시나리오 테스트 상세 저장
	 * @param dsData
	 */
	public String save01(@ParamDataSet(name = "dsScnrTest") List<Map<String, Object>> dsScnrTest,
						 @ParamDataSet(name = "dsScrMap") List<Map<String, Object>> dsScrMap,
						 @ParamDataSet(name = "dsBatchjobMap") List<Map<String, Object>> dsBatchjobMap,
						 @ParamDataSet(name = "dsInfMap") List<Map<String, Object>> dsInfMap);
}