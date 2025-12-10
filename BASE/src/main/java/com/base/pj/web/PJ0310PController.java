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
import com.base.pj.service.PJ0310PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - WBS 선택 팝업 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 16.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0310P")
public class PJ0310PController {

	private Logger log = LoggerFactory.getLogger(PJ0310PController.class);

	@Autowired
	private PJ0310PService pj0310pSvc;

	/**
	 * WBS 선택 팝업 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsPjWbs = pj0310pSvc.select01(dsCond);
		result.addDataSet("dsPjWbs", dsPjWbs);
		return result;
	}
}