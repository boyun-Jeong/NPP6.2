package com.base.sr.web;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR0120WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 내 요청함 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 29.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 29.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0120W")
public class SR0120WController {

	private Logger log = LoggerFactory.getLogger(SR0120WController.class);

	@Autowired
	private SR0120WService sr0120wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 내 요청서 조회
	 * @param dsCond
	 * @return
	 */
	@Transactional
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamVariable(name = "pvMenuId") String pvMenuId
			, @ParamVariable(name = "pvScreenId") String pvScreenId
			, @ParamVariable(name = "pvUserId") String pvUserId
			, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{	
		NexacroResult result = new NexacroResult();	
		
		/*
		String upWfProcCd = StringUtil.safe(dsCond.get("UP_WF_PROC_CD"));
		if("".equals(upWfProcCd)) {
				List<Map<String, Object>> dsCnt  = sr0120wSvc.select00(dsCond);
			result.addDataSet("dsCnt", dsCnt);
		}
		*/
		
    	String sumSchYn =  StringUtil.safe(dsCond.get("sumSchYn"));
		
		if("Y".equals(sumSchYn)) {			
			List<Map<String, Object>> dsCnt  = sr0120wSvc.select00(dsCond,pvMenuId,pvUserId,pvScreenId);
			result.addDataSet("dsCnt", dsCnt);	
		}

		List<Map<String, Object>> dsData = sr0120wSvc.select01(dsCond,pvMenuId,pvUserId,pvScreenId);
		result.addDataSet("dsData", dsData);

		return result;
	}
	
	
	
	/**
	 * 내 요청함 목록 조회
	 * @param dsCond
	 * @return
	 */
	@Transactional
	@RequestMapping("/select11")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{	
		NexacroResult result = new NexacroResult();	
		
		List<Map<String, Object>> dsCnt  = sr0120wSvc.select11(dsCond);
		result.addDataSet("dsCnt", dsCnt);
		
		List<Map<String, Object>> dsData = sr0120wSvc.select12(dsCond);
		result.addDataSet("dsData", dsData);

		return result;
	}
}