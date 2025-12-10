package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청서 기본정보 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
public interface SR0000DService {

	/**
	 * REQ_ID에 해당하는 REQ_TMPLAT_ID, REQ_TMPLAT_VER 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectReqTmplatIdVerByReqId(Map<String, Object> dsCond);

	/**
	 * 요청서 기본정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> select01(Map<String, Object> dsCond);

	/**
	 * 요청서 기본정보 테이블 전체 원본 데이터 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectBaseInfo(Map<String, Object> dsCond);

	/**
	 * USER_ID를 통해 결재 SEQ 추출
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectAppvSeq(Map<String, Object> dsCond);

	/**
	 * 요청서 기본정보 저장
	 * @param dsData
	 */
	public String save01(Map<String, Object> rowData) throws Exception;
 
	/**
	 * 요청서 삭제
	 * @param dsData
	 */
	public void delete01(Map<String, Object> rowData);
	
	/**
	 * 요청서 회수(취소)
	 * @param dsData
	 */
	public void cancel(Map<String, Object> rowData);
	
	/**
	 * 종료 처리
	 * @param rowData
	 */
	public void updateStop(String reqId);

	/**
	 * 폐기 처리
	 * @param rowData
	 */
	public void updateDiscard(Map<String, Object> rowData);

	/**
	 * 요청서 예약 등록
	 * @param rowData
	 */ 
	public void updateProcReserve(Map<String, Object> rowData) throws Exception;

	/**
	 * 요청서 예약 등록 취소
	 * @param rowData
	 */ 
	public void updateProcCancelReserve(Map<String, Object> rowData) throws Exception;

	/**
	 * 요청 예약 등록 완료 처리
	 * @param rowData
	 */
	public void updateReservProcYn(String reqId) throws Exception;
}