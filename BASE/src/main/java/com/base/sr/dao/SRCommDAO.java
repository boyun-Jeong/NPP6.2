package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) DAO
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
@Repository
public interface SRCommDAO {

	/**
	 * 조회 쿼리 문자열을 받아 동적 쿼리를 수행한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> execSelectQueryString(Map<String, Object> dsData);

	/**
	 * 쿼리 문자열을 받아 동적 쿼리(Insert, Update, Delete, Merge 등)를 수행한다.
	 * @param dsCond
	 * @return
	 */
	public void execQueryString(Map<String, Object> dsData);
	
	/**
	 * 요청서 등록 화면의 DB TABLE CRUD 생성 쿼리를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectRegTblQuery(Map<String, Object> dsCond);

	/**
	 * 요청서 등록 화면의 DB TABLE 및 DATASET 정보를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqRegTblInfo(Map<String, Object> dsCond);

	/**
	 * 요청서 진행단계별 추가 서비스 정보를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcSvcInfo(Map<String, Object> dsCond);
	
	/**
	 * 조회하고자 하는 WORKFLOW의 단계 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfProcCdList(Map<String, Object> dsCond);

	/**
	 * 요청서 처리 단계 데이터를 등록한다.
	 * @param rowData
	 */
	public void mergeSrWfProc(Map<String, Object> rowData);

	/**
	 * 단계 접수 내역 조회(요청서 파라미터에 해당하는 단계)
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectRevProc(Map<String, Object> dsCond);
	
	/**
	 * 결재 이력 등록
	 * @param rowData
	 */
	public void insertWfProcHist(Map<String, Object> rowData);
	
	/**
	 * 요청서 다음 단계 진행에 대해 처리
	 * @param dsCond
	 * @return
	 */
	public void callPrSrReqWfProcNext(Map<String, Object> rowData);
	
	/**
	 * 요청서 접수 등의 단계 등록을 처리.
	 * @param dsCond
	 * @return
	 */
	public void callPrSrRevProc(Map<String, Object> rowData);
	
	/**
	 * 요청서 화면 반려를 처리
	 * @param dsCond
	 * @return
	 */
	public void callPrScrnRtnProc(Map<String, Object> rowData);

	/**
	 * 조회하고자 하는 유저가 아닌 다른 접수자가 요청서/단계에 존재하는지 체크
	 * @param dsCond
	 * @return
	 */
	public String selectOtherRevUserCnt(Map<String, Object> dsCond);

	/**
	 * 요청서의 가능한 NEXT WF_PROC_CD를 모두 구한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectNextWfProcCd(Map<String, Object> dsCond);

	/**
	 * PARAM으로 넘긴 WF_PROC_CD에 대한 서비스 정보를 구한다.
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectNextWfProcSvcInfo(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistMap(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 내용 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistMapConts(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 내용 flow
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistFlow(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 내용 flow title
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistExtdNm(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 처리 상세 내용
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistProcCont(Map<String, Object> dsCond);

	/**
	 * 결재 라인에서 최종 결재자 여부 조회
	 * @param dsCond
	 * @return
	 */
	public String selectLastApprvalYn(Map<String, Object> dsCond);
	
	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 등록
	 * @param dsCond
	 * @return
	 */
	public void insertSrCgerDt(Map<String, Object> dsData);

	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeSrCgerDt(Map<String, Object> dsData);

	/**
	 * 결재 이력 등록
	 * @param rowData
	 */
	public void insertWfApprovalMt(Map<String, Object> rowData);

	/**
	 * 역할자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectAuthExtdUser(Map<String, Object> dsCond);

	/**
	 * 부서 기준 사용자 목록 조회(부서기준 담당자 생성시 사용)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCgerListByDept(Map<String, Object> dsCond);

	/**
	 * 담당자 진행단계 건수 조회
	 * @param dsCond
	 * @return
	 */
	public int selectSrCgerDtCnt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrCgerDt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 단계 담당자 권한 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrCgerDtAuth(Map<String, Object> dsCond);

	/**
	 * 결재선 진행단계 건수 조회
	 * @param dsCond
	 * @return
	 */
	public int selectWfApprovalMtCnt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 단계 결재자 목록 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectWfApprovalMt(Map<String, Object> dsCond);

	/**
	 * 현재 결재 SEQ의 결재 정보를 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectAppvUserInfo(Map<String, Object> dsCond);

	/**
	 * 현재 결재 차수의 워크플로우 결재 상세 정보
	 * @param rowData
	 */
	public List<Map<String, Object>> selectAppvInfo(Map<String, Object> dsCond);
	
	/**
	 * 현재 결재 SEQ 기준 다음 결재자 목록
	 * @param rowData
	 */
	public List<Map<String, Object>> selectNextAppvUser(Map<String, Object> dsCond);

	/**
	 * 현재 승인 대기 중 가장 빠른 결재차수
	 * @param rowData
	 */
	public Integer selectCurrentApprLvlSeq(Map<String, Object> dsCond);

	

	/**
	 * 요청서 보낼 단계까지 SW_WF_PROC 테이블에 채워지지 않은 단계코드 건너뛰기로 삽입하고 인자로 보낸 WF_PROC_CD만 건너뛰기가 아닌 데이터로 설정한다.
	 * @param rowData
	 */
	public void insertEmptySetWfProc(Map<String, Object> rowData);

	/**
	 * 요청서 종료시 SW_WF_PROC 테이블에 채워지지 않은 단계코드 데이터 로우를 삽입한다.
	 * @param rowData
	 */
	public void insertEmptyWfProcEnd(Map<String, Object> rowData);

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrCgerSubDt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrCgerSubDtAuth(Map<String, Object> dsCond);
	
	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 등록
	 * @param dsCond
	 * @return
	 */
	public void insertSrCgerSubDt(Map<String, Object> dsData);

	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeSrCgerSubDt(Map<String, Object> dsData);

	/**
	 * 현재 단계 기준에서 반려시 지정된 기본 반려 단계 및 기능 조회
	 * @param rowData
	 */
	public Map<String, Object> selectBaseRtrnWfProcCd(Map<String, Object> dsCond);
	
	
	/**
	 * 반려시 단계 포함 앞단의 실제 진행이 되어온 단계 내역을 조회한다.
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrWfProcRtrnCheck(Map<String, Object> dsCond);

	/**
	 * 요청서 등록 화면의 DB TABLE 및 DATASET 정보를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public String selectUpUserInfo(Map<String, Object> dsCond);

	/**
	 * 결재의 기안자를 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectAppvDraftUser(Map<String, Object> dsCond);

	/**
	 * 현재 결재 단계의 진행중인 결재차수를 구한다.
	 * @param dsCond
	 * @return int
	 */
	public int selectAppvWfApprLvlSeq(Map<String, Object> dsCond);
	
	/**
	 * FN_SR_REQ_MAP_WF_PROC 함수의 인자를 통해 리턴값을 구한다.
	 * @param dsCond
	 * @return String
	 */
	public String selectFnSrReqMapWfProc(Map<String, Object> dsCond);
	
	/**
	 * 단계 처리에 앞서 지정된 담당자 정보를 한 ROW로 조회한다.  
	 * @param dsCond
	 * @return String
	 */
	public Map<String, Object> selectCgerUserInfo(Map<String, Object> dsCond);

	/**
	 * 단계 처리에 앞서 지정된 결재선 정보를 한 ROW로 조회한다.  
	 * @param dsCond
	 * @return String
	 */
	public Map<String, Object> selectApvUserInfo(Map<String, Object> dsCond);
	
}