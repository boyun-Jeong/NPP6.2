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
import com.base.sr.service.SR0000PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 05. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 05. 31.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0000P")
public class SR0000PController {

	private Logger log = LoggerFactory.getLogger(SR0000PController.class);

	@Autowired
	private SR0000PService sr0000pSvc;

//	@Autowired
//	private FommAuthService fommAuthSvc;

	/**
	 * 요청서 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsReq = sr0000pSvc.select01(dsCond);
		result.addDataSet("dsReq", dsReq);
		return result;
	}
	
	/**
	 * IT 신청서서 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsReq = sr0000pSvc.select02(dsCond);
		result.addDataSet("dsReq", dsReq);
		return result;
	}
}