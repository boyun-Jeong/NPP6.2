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
import com.base.com.service.FommAuthService;
import com.base.fomm.service.FOMM0800WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - TO-DO리스트 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  위엠비
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	위엠비		최초작성
 */
@Controller
@RequestMapping("FOMM0800W")
public class FOMM0800WController {

	private Logger log = LoggerFactory.getLogger(FOMM0800WController.class);

	@Autowired
	private FOMM0800WService FOMM0800wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

		
	/**
	 * TO-DO리스트 서브 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = FOMM0800wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	
	
}