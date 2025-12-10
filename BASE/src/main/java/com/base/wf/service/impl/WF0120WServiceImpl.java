package com.base.wf.service.impl;

import java.io.Reader;
import java.sql.Clob;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.wf.dao.WF0120WDAO;
import com.base.wf.service.WF0120WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서양식관리 Service(구현체)
 * @package com.base.wf.service.impl
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
@Service
public class WF0120WServiceImpl implements WF0120WService {

	private Logger log = LoggerFactory.getLogger(WF0120WService.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private WF0120WDAO wf0120wDao;

	/**
	 * WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회
	 */
	public List<Map<String, Object>> selectProc(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> procList = selectWfReqTmplatProcHt(dsCond);
		
		List<Map<String, Object>> result = wf0120wDao.selectProc(dsCond);
		
		for (int i = 0; i < procList.size(); i++) {
			
			String wfProcCd = StringUtil.safe(procList.get(i).get("WF_PROC_CD"));
			String func = StringUtil.safe(procList.get(i).get("FUNC"));
			
			if(i < procList.size()-1) {
				
				if("".equals(func)) {
					
					String nextCger = StringUtil.safe(procList.get(i+1).get("CGER"));
					String nextFunc = StringUtil.safe(procList.get(i+1).get("FUNC"));
					
					log.debug("i= " + i + " WF_PROC_CD : " + wfProcCd + " nextCger : " + nextCger + " nextFunc : " + nextFunc);

					if(!"true".equals(nextCger)) {
						procList.get(i).put("FUNC", nextFunc);
					}
				}
			}
		}
		
		for (int i = 0; i < result.size(); i++) {
			
			String wfProcCd = StringUtil.safe(result.get(i).get("WF_PROC_CD"));
			String chgFunc = StringUtil.safe(procList.get(i).get("FUNC"));
			String func = StringUtil.safe(result.get(i).get("FUNC"));
			
			if(!chgFunc.equals(func)) {
				if(!"WF_PROC_9999".equals(wfProcCd)) {
					result.get(i).put("FUNC", chgFunc);
				}
			}
		}
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_MT [요청서양식] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatMt(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatMt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_HT [요청서양식-이력] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatHt(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatHt(dsCond);
		return result;
		
	}

	/**
	 * WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatProcDt(Map<String, Object> dsCond)
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatProcDt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatProcHt(Map<String, Object> dsCond)
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatProcHt(dsCond);
		return result;
	}
	
	/**
	 * WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfRegTblInfoDt(Map<String, Object> dsCond) throws Exception 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfRegTblInfoDt(dsCond);
		
		String[] columns = new String[] {"SELECT_QUERY", "INSERT_QUERY", "UPDATE_QUERY", "DELETE_QUERY"};

			for (int i = 0; i < result.size(); i++) {

				for (int j = 0; j < columns.length; j++) {
					Clob clob = (Clob) result.get(i).get(columns[j]);

					if(clob != null) {
						Reader reader = clob.getCharacterStream();
						String str = IOUtils.toString(reader);
						if(reader != null) {
							reader.close();
						}
						result.get(i).put(columns[j], str);
					}
				}
			}
		return result;
	}

	/**
	 * WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfRegTblInfoHt(Map<String, Object> dsCond) throws Exception 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfRegTblInfoHt(dsCond);
		
		String[] columns = new String[] {"SELECT_QUERY", "INSERT_QUERY", "UPDATE_QUERY", "DELETE_QUERY"};

			for (int i = 0; i < result.size(); i++) {

				for (int j = 0; j < columns.length; j++) {
					Clob clob = (Clob) result.get(i).get(columns[j]);

					if(clob != null) {
						Reader reader = clob.getCharacterStream();
						String str = IOUtils.toString(reader);
						if(reader != null) {
							reader.close();
						}
					  result.get(i).put(columns[j], str);
					}
				}
			}
		return result;
	}

	/**
	 * WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqProcSvcDt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqProcSvcDt(dsCond);
		return result;
	}
	
	/**
	 * WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqProcSvcHt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqProcSvcHt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdDt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerExtdDt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerExtdHt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerExtdHt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerDt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerDt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_HT [요청서양식 단계별 담당자 변경 이력] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerHt(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerHt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcDt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerSvcDt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqTmplatCgerSvcHt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatCgerSvcHt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqAppvDt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqAppvDt(dsCond);
		return result;
	}

	/**
	 * WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 목록 조회
	 */
	public List<Map<String, Object>> selectWfReqAppvHt(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.selectWfReqAppvHt(dsCond);
		return result;
	}

	/**
	 * 요청서양식관리 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsWfReqTmplatMt, List<Map<String, Object>> dsReqCgerDt, List<Map<String, Object>> dsReqCgerSvcDt,
						 List<Map<String, Object>> dsReqCgerExtdDt, List<Map<String, Object>> dsReqProcDt, List<Map<String, Object>> dsRegTblInfoMt,
						 List<Map<String, Object>> dsWfReqProcSvcDt, List<Map<String, Object>> dsWfReqAppvDt) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = dsWfReqTmplatMt.get(0);
		
		String rowFlag		= StringUtil.safe(rowData.get("ROWFLAG"));
		String verMngYn		= StringUtil.safe(rowData.get("VER_MNG_YN"));		//버전관리여부
		String wfHistConfYn	= StringUtil.safe(rowData.get("WF_HIST_CONF_YN"));	//히스토리 TABLE 현재 WORKFLOW 적용 여부

    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	Map<String, Object> condMap = new HashMap<String, Object>();
    	
    	//1. WF_REQ_TMPLAT_MT(요청서양식) 처리
    	if("I".equals(rowFlag)) {

    		wf0120wDao.insertWfReqTmplatMt(rowData);	//WF_REQ_TMPLAT_MT(요청서양식-신규등록)
    		verMngYn		= "N";
    		wfHistConfYn	= "Y";

    	}else if("U".equals(rowFlag)) {					//WF_REQ_TMPLAT_MT(요청서양식-수정)

    		wf0120wDao.updateWfReqTmplatMt(rowData);	//SPP WF 요청서양식 수정

    	}else if("D".equals(rowFlag)) {

    		wf0120wDao.deleteWfReqTmplatMt(rowData);		//SPP WF 요청서양식 삭제 (삭제여부 Y처리)
    	}
    	
    	String REQ_TMPLAT_ID = StringUtil.safe(rowData.get("REQ_TMPLAT_ID"));

    	//2. 버전관리여부에 따른 신규 요청서 버전 값 추출
    	int REQ_TMPLAT_VER = StringUtil.safeInt(rowData.get("REQ_TMPLAT_VER"));

    	//버전 관리 여부
    	if("Y".equals(verMngYn)) {
    		
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		REQ_TMPLAT_VER = wf0120wDao.selectUpReqTmplatVer(condMap);
    	}
    	
    	log.debug("REQ_TMPLAT_ID:[" + REQ_TMPLAT_ID + "] REQ_TMPLAT_ID : [" + REQ_TMPLAT_VER + "] VER_MNG_YN : [" + verMngYn + "] WF_HIST_CONF_YN : [" + wfHistConfYn + "]");

    	//2-1. WF_REQ_TMPLAT_HT [요청서양식-이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqTmplatHt(condMap);
		}

    	//3. WF_REQ_TMPLAT_PROC_DT(요청서양식 워크플로우 단계 상세) 처리
    	condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqTmplatProcDt(condMap);

		log.debug("dsReqProcDt.size()======================>" + dsReqProcDt.size());
		
		for(int i = 0; i < dsReqProcDt.size(); i++) {
			
			Map<String, Object> rowDataProc = dsReqProcDt.get(i);
			rowDataProc.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
			rowDataProc.put("LMID", userId);
			rowDataProc.put("LMPID", lmpId);

			wf0120wDao.insertWfReqTmplatProcDt(rowDataProc);	//SPP WF 요청서양식 수정(버전업 없는 경우)
		}

		//3-1. WF_REQ_TMPLAT_PROC_HT [요청서양식 워크플로우 단계 상세-이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {
    		//WF 결재 단계 정의 이력 추가
    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqTmplatProcHt(condMap);
		}

		//4. WF_REG_TBL_IFNO_DT [워크플로우 등록화면 저장 테이블 정의] 처리
		condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfRegTblIfnoDt(condMap);		

		log.debug("dsRegTblInfoMt.size()======================>" + dsRegTblInfoMt.size());
		
		for(int i = 0; i < dsRegTblInfoMt.size(); i++) {

			Map<String, Object> rowDataTblNmInfo = dsRegTblInfoMt.get(i);
			String rowFlagTblNmInfo = StringUtil.safe(rowDataTblNmInfo.get("ROWFLAG"));

			if( !"D".equals(rowFlagTblNmInfo) ) {
				rowDataTblNmInfo.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
				rowDataTblNmInfo.put("SEQ", StringUtil.safe(i+1));
				rowDataTblNmInfo.put("LMID", userId);
				rowDataTblNmInfo.put("LMPID", lmpId);
    			wf0120wDao.insertWfRegTblIfnoDt(rowDataTblNmInfo);	//SPP WF 요청서 등록 화면 테이블명 등록
			}
		}

		//4-1. WF_REG_TBL_IFNO_HT [워크플로우 등록화면 저장 테이블 정의] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {
    		//WF 결재 단계 정의 이력 추가
    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfRegTblIfnoHt(condMap);
		}

    	//5. WF_REQ_PROC_SVC_DT [워크플로우 단계별 서비스 정의] 처리
    	condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqProcSvcDt(condMap);	//SPP WF 단계/기능별 서비스명 삭제

		log.debug("dsWfReqProcSvcDt.size()======================>" + dsWfReqProcSvcDt.size());
		
		for(int i = 0; i < dsWfReqProcSvcDt.size(); i++) {

			Map<String, Object> rowDataProcSvcInfo = dsWfReqProcSvcDt.get(i);
			String rowFlagProcSvcNm = StringUtil.safe(rowDataProcSvcInfo.get("ROWFLAG"));

			if( !"D".equals(rowFlagProcSvcNm) ) {
				rowDataProcSvcInfo.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
				rowDataProcSvcInfo.put("LMID", userId);
				rowDataProcSvcInfo.put("LMPID", lmpId);
    			wf0120wDao.insertWfReqProcSvcDt(rowDataProcSvcInfo);	//SPP WF 단계/기능별 서비스명 등록
			}
		}

		//5-1. WF_REQ_PROC_SVC_HT [워크플로우 단계별 서비스 정의 이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqProcSvcHt(condMap);
		}

		//6. WF_REQ_TMPLAT_CGER_EXTD_DT [요청서양식 단계별 담당자(역할자지정)] 처리
		condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqTmplatCgerExtdDt(condMap);	//SPP WF 담당자/검토자 서비스명 삭제

		log.debug("dsReqCgerExtdDt.size()======================>" + dsReqCgerExtdDt.size());
		
		for(int i = 0; i < dsReqCgerExtdDt.size(); i++) {

			Map<String, Object> rowDataCgerExtdNm = dsReqCgerExtdDt.get(i);
			String rowFlagCgerExtdNm = StringUtil.safe(rowDataCgerExtdNm.get("ROWFLAG"));
			String rowExtdId = StringUtil.safe(rowDataCgerExtdNm.get("EXTD_ID"));

			if( !"D".equals(rowFlagCgerExtdNm) ) {
				if(!"".equals(rowExtdId)) {
					rowDataCgerExtdNm.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
					rowDataCgerExtdNm.put("LMID", userId);
					rowDataCgerExtdNm.put("LMPID", lmpId);
	    			wf0120wDao.insertWfReqTmplatCgerExtdDt(rowDataCgerExtdNm);
				}
			}
    	}

		//6-1. WF_REQ_TMPLAT_CGER_EXTD_HT [요청서양식 단계별 담당자(역할자지정)이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqTmplatCgerExtdHt(condMap);
		}

		//7. WF_REQ_TMPLAT_CGER_DT [요청서양식 단계별 담당자] 처리
		condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqTmplatCgerDt(condMap);	//SPP WF 요청서양식 담당자 삭제

		log.debug("dsReqCgerDt.size()======================>" + dsReqCgerDt.size());

		for(int i = 0; i < dsReqCgerDt.size(); i++) {

			Map<String, Object> rowDataCger = dsReqCgerDt.get(i);
			String rowFlagCger = StringUtil.safe(rowDataCger.get("ROWFLAG"));

			if( !"D".equals(rowFlagCger) ) {
    			rowDataCger.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    			rowDataCger.put("SEQ", StringUtil.safe(i+1));
    			rowDataCger.put("LMID", userId);
    			rowDataCger.put("LMPID", lmpId);
    			wf0120wDao.insertWfReqTmplatCgerDt(rowDataCger);
			}
		}
		
		//7-1. WF_REQ_TMPLAT_CGER_HT [요청서양식 단계별 담당자 변경 이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqTmplatCgerHt(condMap);
		}

		//8. WF_REQ_TMPLAT_CGER_SVC_DT [요청서양식 단계별 담당자 서비스] 처리
		condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqTmplatCgerSvcDt(condMap);

		log.debug("dsReqCgerSvcDt.size()======================>" + dsReqCgerSvcDt.size());
		
		for(int i = 0; i < dsReqCgerSvcDt.size(); i++) {

			Map<String, Object> rowDataCgerSvcNm = dsReqCgerSvcDt.get(i);
			String rowFlagCgerSvcNm = StringUtil.safe(rowDataCgerSvcNm.get("ROWFLAG"));

			if( !"D".equals(rowFlagCgerSvcNm) ) {
				rowDataCgerSvcNm.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
				rowDataCgerSvcNm.put("LMID", userId);
				rowDataCgerSvcNm.put("LMPID", lmpId);
    			wf0120wDao.insertWfReqTmplatCgerSvcDt(rowDataCgerSvcNm);
			}
		}

		//8-1. WF_REQ_TMPLAT_CGER_SVC_HT [요청서양식 단계별 담당자 서비스 이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqTmplatCgerSvcHt(condMap);
		}

		//9. WF_REQ_APPV_DT [워크플로우 결재 단계 정의] 처리
    	condMap = new HashMap<String, Object>();
		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
		wf0120wDao.deleteWfReqAppvDt(condMap);

		log.debug("dsWfReqAppvDt.size()======================>" + dsWfReqAppvDt.size());

		for(int i = 0; i < dsWfReqAppvDt.size(); i++) {

			Map<String, Object> rowDataWfReqAppvDt = dsWfReqAppvDt.get(i);
			String rowFlagCgerSvcNm = StringUtil.safe(rowDataWfReqAppvDt.get("ROWFLAG"));

			if( !"D".equals(rowFlagCgerSvcNm) ) {
				rowDataWfReqAppvDt.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
				rowDataWfReqAppvDt.put("LMID", userId);
				rowDataWfReqAppvDt.put("LMPID", lmpId);
    			wf0120wDao.insertWfReqAppvDt(rowDataWfReqAppvDt);
			}
		}
		
		//9-1. WF_REQ_APPV_HT [워크플로우 결재 단계 정의 이력] 처리
		if("Y".equals(verMngYn) || "Y".equals(wfHistConfYn)) {

    		condMap = new HashMap<String, Object>();
    		condMap.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
    		condMap.put("REQ_TMPLAT_VER", REQ_TMPLAT_VER);
    		wf0120wDao.insertWfReqAppvHt(condMap);
		}
    	return REQ_TMPLAT_ID;
	}

	/**
	 * 요청서양식관리 삭제 / 사용여부 변경 저장
	 */
	@Transactional
	public void save02(List<Map<String, Object>> dsWfReqTmplatMt) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsWfReqTmplatMt.size();

		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsWfReqTmplatMt.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("U".equals(rowFlag)) {		// 요청서양식 사용여부 N
	    		wf0120wDao.updateWfReqTmplatMt(rowData);

	    	}else if("D".equals(rowFlag)) {		// 요청서양식 사용여부 N
	    		wf0120wDao.deleteWfReqTmplatMt(rowData);
	    	}	    	
		}
	}

	/**
	 * 요청서양식관리 도움말 번호 조회
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = wf0120wDao.select08(dsCond);
		return result;
	}

	/**
	 * 요청서최종양식 전체 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWfReqTmplatAll() {

		List<Map<String, Object>> result = wf0120wDao.selectWfReqTmplatAll();
		return result;
	}
}