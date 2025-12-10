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
import com.base.pj.service.PJ5300WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 결함 현황 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 10.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5300W")
public class PJ5300WController {

	private Logger log = LoggerFactory.getLogger(PJ5300WController.class);

	@Autowired
	private PJ5300WService pj5300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단위 테스트 결함 현황 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsUtDefect = pj5300wSvc.select01(dsCond);
		result.addDataSet("dsUtDefect", dsUtDefect);
		return result;
	}
}