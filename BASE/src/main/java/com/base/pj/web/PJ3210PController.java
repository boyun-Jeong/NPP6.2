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
import com.base.pj.service.PJ3210PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 위험 조회(선택 팝업) Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 01. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 01. 16.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3210P")
public class PJ3210PController {

	private Logger log = LoggerFactory.getLogger(PJ3210PController.class);

	@Autowired
	private PJ3210PService pj3210pSvc;

	/**
	 * 위험 조회(선택 팝업) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsRisk = pj3210pSvc.select01(dsCond);
		result.addDataSet("dsRisk", dsRisk);
		return result;
	}
}