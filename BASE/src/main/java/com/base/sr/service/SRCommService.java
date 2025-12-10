package com.base.sr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.java.xapi.data.DataSetList;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service Intreface
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
public interface SRCommService {

	/**
	 * 요청서 등록 화면의 DB TABLE CRUD 생성 쿼리를 조회한다. 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectRegTblQuery(Map<String, Object> dsCond) throws Exception;

	/**
	 * 테이블명을 인자로 받아 gubun에 해당하는 테이블 자동 생성 쿼리를 반환한다. 
	 * @param dsCond
	 * @return
	 */
//	public List<Map<String, Object>> getReqQueryInfo(String wfProcCd, String tblNm) throws Exception;
	
	/**
	 * 요청서 등록 화면의 DB TABLE 및 DATASET 정보를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqRegTblInfo(Map<String, Object> dsCond) throws Exception;

	/**
	 * 요청서 진행단계별 추가 서비스 정보를 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectReqProcSvcInfo(Map<String, Object> dsCond);

	/**
	 * 결재 처리인 경우 최종승인시점 여부 조회
	 * @param dsCond
	 * @return
	 */
	public String selectLastApprvalYn(Map<String, Object> dsCond);
	
	/**
	 * 조회하고자 하는 WORKFLOW의 단계 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfProcCdList(Map<String, Object> dsCond);

	/**
	 * 조회하고자 하는 WORKFLOW의 단계 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectRevProc(Map<String, Object> dsCond);

	/**
	 * 요청서 조회 전처리
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> preSelect(DataSetList dataSetList) throws Exception;

	/**
	 * 요청서 조회(공통 모듈)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select(DataSetList dataSetList) throws Exception;

	/**
	 * 요청서 조회 후처리
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> postSelect(DataSetList dataSetList) throws Exception;

	/**
	 * 요청서 저장 전처리
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> preSave(DataSetList dataSetList) throws Exception;
	
	/**
	 * 요청서 저장(공통 모듈)
	 * @param dsData
	 */
	public List<Map<String, Object>> save(DataSetList dataSetList) throws Exception ;

	/**
	 * 요청서 저장 후처리
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> postSave(DataSetList dataSetList) throws Exception;
	
	/**
	 * 결재 이력을 등록한다.
	 * @param rowData
	 */
	public void insertWfProcHist(Map<String, Object> rowData) throws Exception;
	
	/**
	 * 요청서 다음 단계 진행에 대해 처리
	 * @param dsCond
	 * @return
	 */
	public void callPrSrReqWfProcNext(Map<String, Object> rowData) throws Exception;
	
	/**
	 * 요청서 접수 등의 단계 등록을 처리.
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> callPrSrRevProc(Map<String, Object> rowData) throws Exception;
	
	/**
	 * 요청서 화면 반려를 처리
	 * @param dsCond
	 * @return
	 */
	public void callPrScrnRtnProc(Map<String, Object> rowData) throws Exception;
	
	/**
	 * 요청서 히스토리맵 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistMap(Map<String, Object> dsCond);
	
	/**
	 * 역할자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectAuthExtdUser(Map<String, Object> dsCond);

	public Object executeServiceMethod(String svcNm, DataSetList dsList, String inDsStr) throws Exception;
	
	public Object executeServiceMethod(String svcNm, Map<String, Object> dsCond) throws Exception;
	
	/**
	 * 요청서 히스토리맵 내용 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfHistMapConts(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리맵 내용 Flow
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
	 * 담당자 진행단계 건수 조회
	 * @param dsCond
	 * @return
	 */
	public int selectSrCgerDtCnt(Map<String, Object> dsCond);

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param dsCond
	 * @return
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
	public int selectWfApprovalMtCnt(Map<String, Object> dsCond) throws Exception;

	/**
	 * 워크플로우 단계 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfApprovalMt(Map<String, Object> dsCond);

	/**
	 * 현재 결재 SEQ 기준 다음 결재자 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectNextAppvUser(Map<String, Object> dsCond);

	/**
	 * 요청서 종료시 SW_WF_PROC 테이블에 채워지지 않은 단계코드 데이터 로우를 삽입한다.
	 * @param Map<String, Object> REQ_ID, WF_PROC_CD
	 * @return void
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
	public void insertSrCgerSubDt(List<Map<String, Object>> dsData);

	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeSrCgerSubDt(List<Map<String, Object>> dsData);
	
	/**
	 * 종료 삭제 처리
	 * @param dsCond
	 * @return
	 */
	public void wfProcDelete(Map<String, Object> dsData) throws Exception ;

	/**
	 * 결재의 기안자를 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectAppvDraftUser(Map<String, Object> dsCond);

	/**
	 * 요청서 일괄처리 
	 */
	public String execReqProc(Map<String, Object> dsData) throws Throwable;

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