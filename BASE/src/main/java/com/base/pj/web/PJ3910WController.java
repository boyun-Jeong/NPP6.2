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
import com.base.pj.service.PJ3910WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요구사항 추적(기능) Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 30.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3910W")
public class PJ3910WController {

	private Logger log = LoggerFactory.getLogger(PJ3910WController.class);

	@Autowired
	private PJ3910WService pj3910wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요구사항 추적(기능) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> dsReqment = pj3910wSvc.select01(dsCond);
			result.addDataSet("dsReqment", dsReqment);
		}catch(Exception e) {}
		
		return result;
	}
}