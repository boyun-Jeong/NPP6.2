package com.base.sr.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.poi.hpsf.Array;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR2000DService;

/**
 * 
 * <pre>
 * @title
 * - SUBPRJ_SR요청 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  김지수
 * @since   2024. 08. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 23.	김지수		최초작성
 */
@Controller
@RequestMapping("SR2000D")
public class SR2000DController {

	private Logger log = LoggerFactory.getLogger(SR2000DController.class);

	@Autowired
	private SR2000DService sr2000dSvc;

	@Inject
	private Provider<GlobalReqInfo> reqInfo;

	@Inject
	private Provider<SessionContext> sc;
	
	@Autowired
	private FommAuthService fommAuthSvc;

//	/**
//	 * 서브프로젝트 최초 구성원 조회
//	 * @param dsCond
//	 * @return
//	 */
//	@RequestMapping("/selectInit")
//	public NexacroResult selectInitSrMaSubMbr(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
//
//		NexacroResult result = new NexacroResult();
//
//		List<Map<String, Object>> dsData = sr2000dSvc.selectInitSrMaSubMbr(dsCond);
//		result.addDataSet("dsSrMaPrjMber", dsData);
//		return result;
//	}
	
	/**
	 * 서브프로젝트 변경신청 요청서 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSubReqRefList")
	public NexacroResult selectSubReqRefList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr2000dSvc.selectSrBaseInfo_subPrj(dsCond);
		result.addDataSet("dsSubReqRefList", dsData);
		return result;
	}

	/**
	 * 서브 프로젝트 중단 상태 확인
	 * @throws Exception
	 */
	@RequestMapping("/selectExecCnt")
	public NexacroResult selectExecCnt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException, Exception {
		
		NexacroResult result = new NexacroResult();
		Map<String, Object> dsData = new HashMap<>();
		
		dsData.put("RIMS", "true");
		if(sr2000dSvc.selectExecCnt(dsCond) > 0)	
			dsData.put("RIMS", "false");
		
		result.addDataSet("dsRims", dsData);
		return result;
	} 
	
	/**
	 * 서브프로젝트 구성원 변경이력 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr2000dSvc.selectSrMaPrjMberHistList(dsCond);
		result.addDataSet("dsSrMaPrjMberHist", dsData);
		return result;
	}
	

	/**
	 * 진행률 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			sr2000dSvc.updateSrMaPrj(dsCond);
			sr2000dSvc.updateAvgProgressPer(dsCond);
		}else {

			return result;
		}

		return result;
		
	}
	
	/**
	 * 시나리오 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr2000dSvc.selectSrMaPrjTsDtl(dsCond);

		if("MBR".equals(StringUtil.safe(dsCond.get("MBR"))))
			result.addDataSet("dsSrMaPrjTsDtlMbr", dsData);
		else 
			result.addDataSet("dsSrMaPrjTsDtl", dsData);
		
		return result;
	}

	/**
	 * 시나리오 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult saveSrMaPrjTsDtl(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsSrMaPrjTsDtl") List<Map<String, Object>> dsSrMaPrjTsDtl,
			@ParamDataSet(name = "dsSrMaPrjTsDtlMbr") List<Map<String, Object>> dsSrMaPrjTsDtlMbr) throws Exception 
	{
		
		//NexacroResult result = new NexacroResult(); 
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			
			sr2000dSvc.saveSrMaPrjTsDtl(dsSrMaPrjTsDtl);
			sr2000dSvc.saveSrMaPrjTsDtl(dsSrMaPrjTsDtlMbr);
		}else {
			return result;
		}

		return result;
		
	}
	
	/**
	 * 시나리오 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveImport")
	public NexacroResult saveSrMaPrjTsDtl(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsSrMaPrjTsDtl") List<Map<String, Object>> dsSrMaPrjTsDtl) throws Exception 
	{
		
		NexacroResult result = new NexacroResult(); 
		// 요청 메뉴 권한 확인
		//NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		//if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			
		sr2000dSvc.saveSrMaPrjTsDtl(dsSrMaPrjTsDtl);
		//}else {
		//	return result;
		//}

		List<Map<String, Object>> dsData = sr2000dSvc.selectSrMaPrjTsDtl(dsCond);
		result.addDataSet("dsSrMaPrjTsDtl", dsData);
		return result;
		
	}
	
	/**
	 * 이행신청 팝업 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/plSave")
	public NexacroResult plSave01(@ParamDataSet(name = "dsSrMaRelsReq") Map<String, Object> dsSrMaRelsReq, 
			@ParamDataSet(name = "dsSrMaRelschkDtl") List<Map<String, Object>> dsSrMaRelschkDtl) throws Exception 
	{
		
		NexacroResult result = new NexacroResult(); 
		
		sr2000dSvc.saveSrMaRelsReq(dsSrMaRelsReq);
		sr2000dSvc.saveSrMaRelschkDtl(dsSrMaRelschkDtl);
		
		return result;
		
	}
}