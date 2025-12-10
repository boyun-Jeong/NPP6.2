package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 관리(업무공통) DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Repository
public interface PJ0000WDAO {

	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSubPjtInfo(Map<String, Object> dsCond);

	/**
	 * Main Project에 해당하는 WBS 레벨 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectPjtWBSLvlInfo(Map<String, Object> dsCond);

	/**
	 * 프로젝트에 해당하는 업무 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectProjectBiz(Map<String, Object> dsCond);
}