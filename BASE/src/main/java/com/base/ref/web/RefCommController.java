package com.base.ref.web;

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
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.ref.service.RefCommService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 개발가이드 Controller
 * @package com.base.ref.web
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 04. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 30.	정보윤		최초작성
 */
@Controller
@RequestMapping("RefComm")
public class RefCommController {

	private Logger log = LoggerFactory.getLogger(RefCommController.class);

	@Autowired
	private RefCommService refcommSvc;

	/**
	 * DB FUNC/PROC 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectFuncProcList")
	public NexacroResult selectFuncProcList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> list = refcommSvc.selectFuncProcList(dsCond);
		result.addDataSet("dsFuncProcList", list);
		return result;
	}
	
	/**
	 * DB FUNC/PROC 현재 내용 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectCurrentFuncProcData")
	public NexacroResult selectCurrentFuncProcData(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("CONTENT", refcommSvc.selectCurrentFuncProcData(dsCond));
		result.addDataSet("dsContent", dataMap);
		return result;
	}
	
	/**
	 * 개발가이드 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = refcommSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 개발가이드 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		refcommSvc.save01(dsData);
		dsData = refcommSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}