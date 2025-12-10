package com.base.wf.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청서양식관리 DAO
 * @package com.base.wf.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 05. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 25.	이정빈		최초작성
 */
@Repository
public interface WF0120WDAO {

	/* WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회(WORKFLOW 외 외부 프로그램 사용) */
	public List<Map<String, Object>> selectProc(Map<String, Object> dsCond);




	/* WF_REQ_TMPLAT_HT [요청서양식] 요청서 신규 버전 값 조회 */
	public int selectUpReqTmplatVer(Map<String, Object> rowData);
	
	/* WF_REQ_TMPLAT_MT [요청서양식] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatMt(Map<String, Object> dsCond);
	
	/* WF_REQ_TMPLAT_HT [요청서양식-이력] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatHt(Map<String, Object> dsCond);
	
	/* WF_REQ_TMPLAT_MT [요청서양식] 신규 등록 */
	public void insertWfReqTmplatMt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_MT [요청서양식] 수정 */
	public void updateWfReqTmplatMt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_MT [요청서양식] 삭제 (삭제여부 Y처리) */
	public void deleteWfReqTmplatMt(Map<String, Object> rowData);

	
	

	/* WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatProcDt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatProcHt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 등록 */
	public void insertWfReqTmplatProcDt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqTmplatProcDt(Map<String, Object> rowData);




	/* WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회 */
	public List<Map<String, Object>> selectWfRegTblInfoDt(Map<String, Object> dsCond);

	/* WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회 */
	public List<Map<String, Object>> selectWfRegTblInfoHt(Map<String, Object> dsCond);

	/* WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 등록 */
	public void insertWfRegTblIfnoDt(Map<String, Object> rowData);
	
	/* WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfRegTblIfnoDt(Map<String, Object> rowData);




	/* WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 목록 조회 */
	public List<Map<String, Object>> selectWfReqProcSvcDt(Map<String, Object> dsCond);

	/* WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의 이력] 목록 조회 */
	public List<Map<String, Object>> selectWfReqProcSvcHt(Map<String, Object> dsCond);

	/* WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 등록 */
	public void insertWfReqProcSvcDt(Map<String, Object> rowData);

	/* WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqProcSvcDt(Map<String, Object> rowData);




	/* WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdDt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdHt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 등록 */
	public void insertWfReqTmplatCgerExtdDt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqTmplatCgerExtdDt(Map<String, Object> rowData);




	/* WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerDt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerHt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 등록 */
	public void insertWfReqTmplatCgerDt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqTmplatCgerDt(Map<String, Object> rowData);



	/* WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcDt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcHt(Map<String, Object> dsCond);

	/* WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 등록 */
	public void insertWfReqTmplatCgerSvcDt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqTmplatCgerSvcDt(Map<String, Object> rowData);




	/* WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회 */
	public List<Map<String, Object>> selectWfReqAppvDt(Map<String, Object> dsCond);

	/* WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회 */
	public List<Map<String, Object>> selectWfReqAppvHt(Map<String, Object> dsCond);

	/* WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 등록 */
	public void insertWfReqAppvDt(Map<String, Object> rowData);

	/* WF_REQ_APPV_DT [워크플로우 결재 단계 정의]  삭제(REQ_TMPLAT_ID 전체) */
	public void deleteWfReqAppvDt(Map<String, Object> rowData);


	/* WF_REQ_TMPLAT_HT [요청서양식-이력] 생성 */
	public void insertWfReqTmplatHt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 생성 */
	public void insertWfReqTmplatProcHt(Map<String, Object> rowData);

	/* WF_REG_TBL_IFNO_HT [워크플로우 등록화면 저장 테이블 정의] 생성 */
	public void insertWfRegTblIfnoHt(Map<String, Object> rowData);

	/* WF_REQ_PROC_SVC_HT [워크플로우 단계별 서비스 정의 이력] 생성 */
	public void insertWfReqProcSvcHt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_CGER_EXTD_HT [요청서양식 단계별 담당자(역할자지정)이력] 생성 */
	public void insertWfReqTmplatCgerExtdHt(Map<String, Object> rowData);

	/* WF_REQ_TMPLAT_CGER_HT [요청서양식 단계별 담당자 이력] 생성 */
	public void insertWfReqTmplatCgerHt(Map<String, Object> rowData);	
	
	/* WF_REQ_TMPLAT_CGER_SVC_HT [요청서양식 단계별 담당자 서비스 이력] 생성 */
	public void insertWfReqTmplatCgerSvcHt(Map<String, Object> rowData);	
	
	/* WF_REQ_APPV_HT [워크플로우 결재 단계 정의 이력] 생성 */
	public void insertWfReqAppvHt(Map<String, Object> rowData);

	/* 요청서양식관리 도움말 번호 조회 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond);

	/* 요청서최종양식 전체 조회 */
	public List<Map<String, Object>> selectWfReqTmplatAll();
}