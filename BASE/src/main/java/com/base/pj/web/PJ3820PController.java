package com.base.pj.web;

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
import com.base.pj.service.PJ3820PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요구사항 조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 31.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3820P")
public class PJ3820PController {

	private Logger log = LoggerFactory.getLogger(PJ3820PController.class);

	@Autowired
	private PJ3820PService pj3820pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요구사항 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsReqment = pj3820pSvc.select01(dsCond);
		result.addDataSet("dsReqment", dsReqment);
		return result;
	}
}