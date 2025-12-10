package com.base.wf.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청서양식관리 Service Intreface
 * @package com.base.wf.service
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
public interface WF0120WService {

	/**
	 * WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectProc(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_MT [요청서양식] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatMt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_HT [요청서양식-이력] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatHt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatProcDt(Map<String, Object> dsCond);
	
	/**
	 * WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회
	 * 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatProcHt(Map<String, Object> dsCond);

	/**
	 * WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfRegTblInfoDt(Map<String, Object> dsCond) throws Exception;
	
	/**
	 * WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfRegTblInfoHt(Map<String, Object> dsCond) throws Exception;

	/**
	 * WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqProcSvcDt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqProcSvcHt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdDt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdHt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerDt(Map<String, Object> dsCond);
	
	/**
	 * WF_REQ_TMPLAT_CGER_HT [요청서양식 단계별 담당자 변경 이력] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerHt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcDt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcHt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqAppvDt(Map<String, Object> dsCond);

	/**
	 * WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqAppvHt(Map<String, Object> dsCond);

	/**
	 * 요청서양식관리 저장
	 * @param dsData
	 */
	public String save01(List<Map<String, Object>> dsWfReqTmplatMt,
					   List<Map<String, Object>> dsReqCgerDt,
					   List<Map<String, Object>> dsReqCgerSvcDt,
					   List<Map<String, Object>> dsReqCgerExtdDt,
					   List<Map<String, Object>> dsReqProcDt,
					   List<Map<String, Object>> dsRegTblInfoMt,
					   List<Map<String, Object>> dsWfReqProcSvcDt,
					   List<Map<String, Object>> dsWfReqAppvDt);

	/**
	 * 요청서양식관리 삭제 / 사용여부 변경 저장
	 * @param dsData
	 */
	public void save02(List<Map<String, Object>> dsWfReqTmplatMt);
	
	/**
	 * 요청서양식관리 도움말 번호 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond);
}