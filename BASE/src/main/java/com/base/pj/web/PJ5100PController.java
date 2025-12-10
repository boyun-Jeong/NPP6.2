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
import com.base.pj.service.PJ5100PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단위테스트 현황 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	이정빈		최초작성
 */
@Controller
@RequestMapping("PJ5100P")
public class PJ5100PController {

	private Logger log = LoggerFactory.getLogger(PJ5100PController.class);

	@Autowired
	private PJ5100PService pj5100pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단위테스트 현황 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUnitTest = pj5100pSvc.select01(dsCond);
		result.addDataSet("dsUnitTest", dsUnitTest);
		return result;
	}
}