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
import com.base.pj.service.PJ1900WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 품질 이행 관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1900W")
public class PJ1900WController {

	private Logger log = LoggerFactory.getLogger(PJ1900WController.class);

	@Autowired
	private PJ1900WService pj1900wSvc;

//	@Autowired
//	private FommAuthService fommAuthSvc;

	/**
	 * 품질 이행 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsPjProject = pj1900wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPjProject", dsPjProject);

		return result;
	}
}