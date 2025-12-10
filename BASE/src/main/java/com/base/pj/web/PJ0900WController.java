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
import com.base.pj.service.PJ0900WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 진척 조회(PMO) Controller
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
@RequestMapping("PJ0900W")
public class PJ0900WController {

	private Logger log = LoggerFactory.getLogger(PJ0900WController.class);

	@Autowired
	private PJ0900WService pj0900wSvc;

	/**
	 * 프로젝트 진척 조회(PMO) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsPjProject = pj0900wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPjProject", dsPjProject);

		return result;
	}
}