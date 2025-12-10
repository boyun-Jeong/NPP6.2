package com.base.sr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;

/**
 * 
 * <pre>
 * @title
 * - 결재선 지정 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 20.	정보윤		최초작성
 */
public interface SR0020PService {

	/**
	 * 결재선 지정 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 나의 결재 그룹 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);	

	/**
	 * 나의 결재 그룹 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);	
	
	/**
	 * 나의 결재선 마스터 등록
	 * @param dsData
	 */
	public int save01(List<Map<String, Object>> dsWfApprovalBoxM);
	
	/**
	 * 나의 결재선 변경
	 * @param dsData
	 */
	public void save02(List<Map<String, Object>> dsWfApprovalBoxD);	
}