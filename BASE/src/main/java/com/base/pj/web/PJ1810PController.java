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
import com.base.pj.service.PJ1810PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 업체평가조회(팝업) Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 21.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1810P")
public class PJ1810PController {

	private Logger log = LoggerFactory.getLogger(PJ1810PController.class);

	@Autowired
	private PJ1810PService pj1810pSvc;

//	@Autowired
//	private FommAuthService fommAuthSvc;

	/**
	 * 업체평가조회(팝업) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj1810pSvc.select01(dsCond);
		result.addDataSet("dsPjProject", dsData);
		
		dsData = pj1810pSvc.select02(dsCond);
		result.addDataSet("dsPjEvalRst", dsData);

		return result;
	}
}