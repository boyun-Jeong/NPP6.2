package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 결재선 공통 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 26.	정보윤		최초작성
 */
public interface SR0010DService {

	/**
	 * 워크플로우 진행 단계 정보 조회
	 */
	public List<Map<String, Object>> selectReqProcDtInfo(Map<String, Object> dsCond);

	/**
	 * 현재 단계부터 결재가 연속해서 이어진 단계까지의 결재 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcAppvHt(Map<String, Object> dsCond);
	
	/**
	 * 결재선 공통 목록 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectMinApprLvlSeq(Map<String, Object> dsCond);

	/**
	 * 결채차수 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond);

	/**
	 * 결재선 공통 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 결재선 공통 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsWfApprovalMt, List<Map<String, Object>> dsWfApprovalRefMt) throws Exception;

	/**
	 * 만족도조사 문항 및 응답 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 만족도조사 응답
	 * @param dsData
	 */
	public void save02(Map<String, Object> dsCond, List<Map<String, Object>> dsData);

	/**
	 * 결재 참조자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 결재처리구분에 해당하는 결재자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprListByCode(String userId, String apprProcDivCd);	//결재처리구분코드

	/**
	 * 기본 결재대상자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * 유저 신분 체크
	 * @param dsCond
	 * @return
	 */
	public String selectUserCheck(String userId);
}