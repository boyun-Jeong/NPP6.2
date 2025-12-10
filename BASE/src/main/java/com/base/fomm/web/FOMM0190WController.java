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
import com.base.fomm.service.FOMM0190WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 부서관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 02.	이정빈		최초작성
 */
@Controller
@RequestMapping("FOMM0190W")
public class FOMM0190WController {

	private Logger log = LoggerFactory.getLogger(FOMM0190WController.class);

	@Autowired
	private FOMM0190WService fomm0190wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	
	
	/**
	 * 부서관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsTree = fomm0190wSvc.select01(dsCond);
		result.addDataSet("dsTree", dsTree);

		return result;
	}
	
	
	
	/**
	 * 하위부서 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0190wSvc.select02(dsCond);
		result.addDataSet("dsData", dsData);

		return result;
	}
}