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
import com.base.pj.service.PJ0000WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 관리(업무공통) Controller
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
@RequestMapping("PJ0000W")
public class PJ0000WController {

	private Logger log = LoggerFactory.getLogger(PJ0000WController.class);

	@Autowired
	private PJ0000WService pj0000wSvc;

	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSubPjtInfo")
	public NexacroResult selectSubPjtInfo(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsSubProject = pj0000wSvc.selectSubPjtInfo(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSubProject", dsSubProject);

		return result;
	}
	
	/**
	 * Main Project에 해당하는 WBS 레벨 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectPjtWBSLvlInfo")
	public NexacroResult selectPjtWBSLvlInfo(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsOutWbsLvl = pj0000wSvc.selectPjtWBSLvlInfo(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsOutWbsLvl", dsOutWbsLvl);

		return result;
	}

	/**
	 * Main Project에 해당하는 WBS 레벨 목록을 조회한다.
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectProjectBiz")
	public NexacroResult selectProjectBiz(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsBiz = pj0000wSvc.selectProjectBiz(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsBiz", dsBiz);

		return result;
	}
}