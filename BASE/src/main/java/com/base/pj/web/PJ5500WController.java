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
import com.base.pj.service.PJ5500WService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 현황 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5500W")
public class PJ5500WController {

	private Logger log = LoggerFactory.getLogger(PJ5500WController.class);

	@Autowired
	private PJ5500WService pj5500wSvc;

	/**
	 * 시나리오 테스트 현황 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsScnrTest = pj5500wSvc.select01(dsCond);
		result.addDataSet("dsScnrTest", dsScnrTest);
		return result;
	}
}