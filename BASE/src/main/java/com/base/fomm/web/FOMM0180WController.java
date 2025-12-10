package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0180WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 세션관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  황채린
 * @since   2024. 02. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 15.	황채린		최초작성
 */
@Controller
@RequestMapping("FOMM0180W")
public class FOMM0180WController {

	private Logger log = LoggerFactory.getLogger(FOMM0180WController.class);

	@Autowired
	private FOMM0180WService fomm0180wSvc;

	/**
	 * 세션관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = fomm0180wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData1", dsData);

		return result;
	}
	
	/**
	 * 세션관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = fomm0180wSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData2", dsData);

		return result;
	}
	
	/**
	 * 세션관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = fomm0180wSvc.select03(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData3", dsData);

		return result;
	}

}