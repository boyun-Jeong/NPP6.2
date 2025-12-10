package com.base.wf.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;
import com.base.wf.service.WF0120WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서양식관리 Controller
 * @package com.base.wf.web
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
@Controller
@RequestMapping("WF0120W")
public class WF0120WController {

	private Logger log = LoggerFactory.getLogger(WF0120WController.class);

	@Autowired
	private WF0120WService wf0120wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	/**
	 * 요청서양식 단계 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectProc")
	public NexacroResult selectProc(  @ParamVariable(name = "tmplatId") String tmplatId
									, @ParamVariable(name = "tmplatVer") String tmplatVer
									, @ParamVariable(name = "reqId") String reqId) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> dsCond = new HashMap<String, Object>();
		dsCond.put("REQ_TMPLAT_ID", StringUtil.safe(tmplatId));
		dsCond.put("REQ_TMPLAT_VER", StringUtil.safe(tmplatVer));
		dsCond.put("REQ_ID", StringUtil.safe(reqId));

		if("".equals(StringUtil.safe(tmplatVer))) {
			dsCond.put("CUR_VER_YN", "Y");
		}

		List<Map<String, Object>> dsWfReqTmplatMt		= wf0120wSvc.selectWfReqTmplatHt(dsCond);
		List<Map<String, Object>> dsWfReqTmplatProcDt	= wf0120wSvc.selectProc(dsCond);
		List<Map<String, Object>> dsWfReqCgerDt			= wf0120wSvc.selectWfReqTmplatCgerHt(dsCond);

		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);
		result.addDataSet("dsWfReqTmplatProcDt", dsWfReqTmplatProcDt);
		result.addDataSet("dsWfReqCgerDt", dsWfReqCgerDt);
		return result;
	}
	
	/**
	 * 요청서양식 단계 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectProcDt")
	public NexacroResult selectProc(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsWfReqTmplatProcDt	= wf0120wSvc.selectWfReqTmplatProcDt(dsCond);
		result.addDataSet("dsWfReqTmplatProcDt", dsWfReqTmplatProcDt);
		return result;
	}

	/**
	 * 요청서양식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult selectWfReqTmplatMt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();
		
		for(String colNm : dsCond.keySet()) {
			log.debug("[WF0120W] COL_NM:[" + colNm + "] COL_VALUE:[" + dsCond.get(colNm) + "]");			
		}
		List<Map<String, Object>> dsWfReqTmplatMt = wf0120wSvc.selectWfReqTmplatMt(dsCond);

		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);
		return result;
	}

	/**
	 * 요청서양식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException, Exception
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsWfReqTmplatMt = wf0120wSvc.selectWfReqTmplatMt(dsCond);
		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);
		
		List<Map<String, Object>> list = wf0120wSvc.selectWfReqTmplatCgerDt(dsCond);
		result.addDataSet("dsWfReqCgerDt", list);
		
		list = wf0120wSvc.selectWfReqTmplatCgerSvcDt(dsCond);
		result.addDataSet("dsWfReqCgerSvcDt", list);

		list = wf0120wSvc.selectWfReqTmplatCgerExtdDt(dsCond);
		result.addDataSet("dsReqCgerExtdDt", list);
		
		list = wf0120wSvc.selectWfReqAppvDt(dsCond);
		result.addDataSet("dsWfReqAppvDt", list);
		
		List<Map<String, Object>> dsData = wf0120wSvc.selectWfRegTblInfoDt(dsCond);
		result.addDataSet("dsRegTblInfoMt", dsData);
		
		dsData = wf0120wSvc.selectWfReqProcSvcDt(dsCond);
		result.addDataSet("dsWfReqProcSvcDt", dsData);

		return result;
	}

	/**
	 * 요청서양식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectWfReqTmplatHt")
	public NexacroResult selectWfReqTmplatHt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();
		
		for(String colNm : dsCond.keySet()) {
			log.debug("[WF0120W] COL_NM:[" + colNm + "] COL_VALUE:[" + dsCond.get(colNm) + "]");			
		}
		List<Map<String, Object>> dsWfReqTmplatMt = wf0120wSvc.selectWfReqTmplatHt(dsCond);

		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);
		return result;
	}
	
	/**
	 * 요청서양식관리 담당자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectWfReqTmplatCgerDt")
	public NexacroResult selectWfReqTmplatCgerDt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> list = wf0120wSvc.selectWfReqTmplatCgerDt(dsCond);
		result.addDataSet("dsWfReqCgerDt", list);
		
		list = wf0120wSvc.selectWfReqTmplatCgerSvcDt(dsCond);
		result.addDataSet("dsWfReqCgerSvcDt", list);

		list = wf0120wSvc.selectWfReqTmplatCgerExtdDt(dsCond);
		result.addDataSet("dsReqCgerExtdDt", list);
		
		list = wf0120wSvc.selectWfReqAppvDt(dsCond);
		result.addDataSet("dsWfReqAppvDt", list);

		return result;
	}

	/**
	 * 요청서양식관리 등록 테이블 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectWfRegTblInfoDt")
	public NexacroResult selectWfReqTmplatCgerSvcDt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = wf0120wSvc.selectWfRegTblInfoDt(dsCond);
		result.addDataSet("dsRegTblInfoMt", dsData);
		
		dsData = wf0120wSvc.selectWfReqProcSvcDt(dsCond);
		result.addDataSet("dsWfReqProcSvcDt", dsData);
		return result;
	}
	/**
	 * 요청서양식관리 도움말 번호 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select08")
	public NexacroResult select08(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = wf0120wSvc.select08(dsCond);
		result.addDataSet("dsWfReqTmplatMtHelp", dsData);

		return result;
	}
	/**
	 * 요청서양식관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond
								, @ParamDataSet(name = "dsWfReqTmplatMt") List<Map<String, Object>> dsWfReqTmplatMt
								, @ParamDataSet(name = "dsReqCgerDt") List<Map<String, Object>> dsReqCgerDt
								, @ParamDataSet(name = "dsReqCgerSvcDt") List<Map<String, Object>> dsReqCgerSvcDt
								, @ParamDataSet(name = "dsReqCgerExtdDt") List<Map<String, Object>> dsReqCgerExtdDt
								, @ParamDataSet(name = "dsReqProcDt") List<Map<String, Object>> dsReqProcDt
								, @ParamDataSet(name = "dsRegTblInfoMt") List<Map<String, Object>> dsRegTblInfoMt
								, @ParamDataSet(name = "dsWfReqProcSvcDt") List<Map<String, Object>> dsWfReqProcSvcDt
								, @ParamDataSet(name = "dsWfReqAppvDt") List<Map<String, Object>> dsWfReqAppvDt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			String REQ_TMPLAT_ID = wf0120wSvc.save01(dsWfReqTmplatMt, dsReqCgerDt, dsReqCgerSvcDt, dsReqCgerExtdDt, dsReqProcDt, dsRegTblInfoMt, dsWfReqProcSvcDt, dsWfReqAppvDt);
//			log.debug("WF0120WController SAVE REQ_TMPLAT_ID:::::::::::::::::::" + REQ_TMPLAT_ID);
			dsCond.put("REQ_TMPLAT_ID", REQ_TMPLAT_ID);
			result.addDataSet("dsCond", dsCond);
		}else {
			return result;
		}
//		dsData = wf0120wSvc.selectWfReqTmplatMt(dsCond);
//		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 요청서양식관리 삭제 / 사용여부 변경 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond
								, @ParamDataSet(name = "dsWfReqTmplatMt") List<Map<String, Object>> dsWfReqTmplatMt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			wf0120wSvc.save02(dsWfReqTmplatMt);
		}else {
			return result;
		}
		dsWfReqTmplatMt = wf0120wSvc.selectWfReqTmplatMt(dsCond);
		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);
		return result;
	}
}