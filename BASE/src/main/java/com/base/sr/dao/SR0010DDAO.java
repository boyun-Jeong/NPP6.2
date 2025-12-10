package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 결재선 공통 DAO
 * @package com.base.sr.dao
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
@Repository
public interface SR0010DDAO {

	/**
	 * 워크플로우 진행 단계 정보 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcDtInfo(Map<String, Object> dsCond);

	/**
	 * 현재 단계부터 결재가 연속해서 이어진 단계까지의 결재 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcAppvHt(Map<String, Object> dsCond);
	
	/**
	 * 현재 진행중인 결재차수 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectMinApprLvlSeq(Map<String, Object> dsCond);

	/**
	 * 결재차수 목록 조회
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
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
	
	/**
	 * 단계 결재선 초기화
	 * @param rowData
	 */
	public void resetWfApproval(Map<String, Object> rowData);
	
	/**
	 * 단계 결재선 전체 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 만족도조사 문항 및 응답 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 만족도조사 문항 답변 등록
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);
	
	/**
	 * 만족도조사 문항 답변 전체 삭제(REQ_ID 기준)
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * 결재 참조 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 결재 참조 저장
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);
	
	/**
	 * 결재 참조 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);
	
	/**
	 * 결재처리구분에 해당하는 결재자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprListByCode(Map<String, Object> dsCond);
	/**
	 * 결재처리구분에 해당하는 결재자 조회 (직접호출)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprListD(Map<String, Object> dsCond);

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
	public String selectUserCheck(Map<String, Object> dsCond);
}