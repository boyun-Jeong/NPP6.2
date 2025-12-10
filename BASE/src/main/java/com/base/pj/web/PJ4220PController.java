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
import com.base.pj.service.PJ4220PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 화면 목록 조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 01.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4220P")
public class PJ4220PController {

	private Logger log = LoggerFactory.getLogger(PJ4220PController.class);

	@Autowired
	private PJ4220PService pj4220pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 화면 목록 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsBatchJob = pj4220pSvc.select01(dsCond);
		result.addDataSet("dsScreen", dsBatchJob);
		return result;
	}
}