package com.base.fomm.web;

import java.util.LinkedHashMap;
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
import com.base.fomm.service.FOMM1100WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 서비스별 담당자관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 10.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM1100W")
public class FOMM1100WController {

	private Logger log = LoggerFactory.getLogger(FOMM1100WController.class);

	@Autowired
	private FOMM1100WService fomm1100wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 서비스별 담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectStaffSvcMng")
	public NexacroResult selectStaffSvcMng(@ParamVariable(name = "admYn") String admYn, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		if("Y".equals(admYn)) {			
			dsCond.put("ADMIN_YN", "Y");
		} 

		List<Map<String, Object>> dsData = fomm1100wSvc.selectStaffSvcMng(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 요청분류 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSvcType")
	public NexacroResult selectSvcType(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1100wSvc.selectSvcType(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 요청분류 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/chkDup")
	public NexacroResult chkDup(@ParamDataSet(name = "dsChkTmp") List<Map<String, Object>> dsChkTmp
			, @ParamVariable(name = "pvSvcClssCd") String SVC_CLSS_CD
			, @ParamVariable(name = "pvBseLvl1Cd") String BSE_LVL1_CD
			, @ParamVariable(name = "pvBseLvl2Cd") String BSE_LVL2_CD) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		for(int i=0;i<dsChkTmp.size();i++) {
			dsChkTmp.get(i).put("SVC_CLSS_CD", SVC_CLSS_CD);
			dsChkTmp.get(i).put("BSE_LVL1_CD", BSE_LVL1_CD);
			dsChkTmp.get(i).put("BSE_LVL2_CD", BSE_LVL2_CD);
		}

		List<Map<String, Object>> dsChkRst = fomm1100wSvc.chkDup(dsChkTmp);
		result.addDataSet("dsChkRst", dsChkRst);
		return result;
	}

	/**
	 * 서비스별 담당자관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamVariable(name = "admYn") String admYn, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond,@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		//NexacroResult result = new NexacroResult();

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			
			if("Y".equals(admYn)) {			
				dsCond.put("ADMIN_YN", "Y");
			}
			
			fomm1100wSvc.save01(dsData);			
		
			dsData = fomm1100wSvc.selectStaffSvcMng(dsCond);
			result.addDataSet("dsData", dsData);
		}else {
			return result;
		}
		
		return result;
	}
	
	@RequestMapping(value = "/saveBatch")
	public NexacroResult saveBatch(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		//NexacroResult result = new NexacroResult();

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm1100wSvc.saveBatch(dsData);			
		}else {
			return result;
		}
		
		return result;
	}
	
	/**
	 *이력 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectChgHist")
	public NexacroResult selectChgHist(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1100wSvc.selectChgHist(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	

	/**
	 * 담당자변경 중복 체크
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/chkChg")
	public NexacroResult chkChg(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsChkRst = fomm1100wSvc.chkDup(dsData);
		result.addDataSet("dsChkRst", dsChkRst);
		return result;
	}
	
	@RequestMapping("/selectExlStaffSvcMng")
	public NexacroResult selectExlStaffSvcMng() throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<LinkedHashMap<String, Object>> dsData = fomm1100wSvc.selectExlStaffSvcMng();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	@RequestMapping(value = "/saveChg")
	public NexacroResult saveChg(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		//NexacroResult result = new NexacroResult();

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm1100wSvc.saveChg(dsData);			
		}else {
			return result;
		}
		
		return result;
	}
}