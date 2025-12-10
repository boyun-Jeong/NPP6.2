package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * 
 * <pre>
 * @title
 * - 요청서 기본정보 DAO
 * @package com.base.sr.dao
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
@Transactional
@Repository
public interface SR0000DDAO {

	/**
	 * REQ_ID에 해당하는 REQ_TMPLAT_ID, REQ_TMPLAT_VER 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectReqTmplatIdVerByReqId(Map<String, Object> dsCond);
	
	/**
	 * SR_BASE_INFO ENC_REQ_ID가 없는 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrBaseEncEmptyList(Map<String, Object> dsCond);
	
	/**
	 * 요청서 기본정보 목록 조회 암호화키 조합
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> select01(Map<String, Object> dsCond);

	/**
	 * 요청서 기본정보 목록 조회 암호화키 조합
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
	 * 요청서 요청서 ID 생성
	 * @param dsCond
	 * @return
	 */
	public String selectKey(Map<String, Object> dsCond);
	/**
	 * 요청서 기본정보 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 요청서 기본정보 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 요청서 기본정보 수정2
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);
	

	/**
	 * 요청서 기본정보 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 요청서 기본정보 회수(취소) 처리
	 * @param rowData
	 */
	public void cancel(Map<String, Object> rowData);

	/**
	 * 중단 처리
	 * @param rowData
	 */ 
	public void updateStop(Map<String, Object> rowData);

	/**
	 * 폐기 처리
	 * @param rowData
	 */ 
	public void updateDiscard(Map<String, Object> rowData);
	
	/**
	 * 검토 종료 완료 처리
	 * @param rowData
	 */ 
	public void updateExaEnd(Map<String, Object> rowData);

	/**
	 * 강제 종료 처리
	 * @param rowData
	 */ 
	public void updateWfProcDelete(Map<String, Object> rowData);
	
	/**
	 * 요청서 컬럼 기본정보에 반영
	 * @param rowData
	 */ 
	public void updateWfColInfo(Map<String, Object> rowData);

	/**
	 * 요청서 예약 등록
	 * @param rowData
	 */ 
	public void updateProcReserve(Map<String, Object> rowData);

	/**
	 * 요청서 예약 등록 취소
	 * @param rowData
	 */ 
	public void updateProcCancelReserve(Map<String, Object> rowData);

	/**
	 * 요청 예약 등록 완료 처리
	 * @param rowData
	 */
	public void updateReservProcYn(Map<String, Object> rowData);
	
}