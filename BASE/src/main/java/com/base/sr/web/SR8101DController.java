package com.base.sr.web;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.sr.service.SR8101DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 네트워크작업신청 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  김지수
 * @since   2024. 03. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 15.	김지수		최초작성
 */
@Controller
@RequestMapping("SR8101D")
public class SR8101DController {

	private Logger log = LoggerFactory.getLogger(SR8101DController.class);

	@Autowired
	private SR8101DService sr8101dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 네트워크작업신청 요청서 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr8101dSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 네트워크작업신청 요청서 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsData") Map<String, Object> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			sr8101dSvc.save01(dsData);
		}else {
			return result;
		}
		return result;
	}
	
	/**
	 * 네트워크작업신청 작업변경 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectProc_01")
	public NexacroResult selectProc(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		log.trace(">>>>>>>>>>>>>1: SR8101DServiceImpl.selectProc(java.util.Map)() call");
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr8101dSvc.selectProc_01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 네트워크작업신청 작업변경 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveProc_01")
	public NexacroResult saveProc(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsData") Map<String, Object> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			sr8101dSvc.saveProc_01(dsData);
		}else {
			return result;
		}
		return result;
	}
	
	/**
	 * 네트워크작업신청 작업변경 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectProc_02")
	public NexacroResult selectProc_02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		log.trace(">>>>>>>>>>>>>1: SR8101DServiceImpl.selectProc_02(java.util.Map)() call");
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr8101dSvc.selectProc_02(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 네트워크작업신청 변경작업 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveProc_02")
	public NexacroResult saveProc_02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsData") Map<String, Object> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			sr8101dSvc.saveProc_02(dsData);
		}else {
			return result;
		}
		return result;
	}
}