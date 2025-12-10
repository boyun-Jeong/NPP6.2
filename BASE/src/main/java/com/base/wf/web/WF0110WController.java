package com.base.wf.web;

import java.util.HashMap;
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
import com.base.fwk.util.StringUtil;
import com.base.wf.service.WF0110WService;

/**
 * 
 * <pre>
 * @title
 * - 워크플로우 관리 Controller
 * @package com.base.wf.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 24.	정보윤		최초작성
 */
@Controller
@RequestMapping("WF0110W")
public class WF0110WController {

	private Logger log = LoggerFactory.getLogger(WF0110WController.class);

	@Autowired
	private WF0110WService wf0110wSvc;

	/**
	 * 워크플로우 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWorkflowMt = wf0110wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWorkflowMt", dsWorkflowMt);

		return result;
	}
	
	/**
	 * 워크플로우 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWorkflowDt = wf0110wSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWorkflowDt", dsWorkflowDt);

		return result;
	}

	/**
	 * 워크플로우 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsWorkflowMt") List<Map<String, Object>> dsWorkflowMt,
								@ParamDataSet(name = "dsWorkflowDt") List<Map<String, Object>> dsWorkflowDt) throws Exception {
		
		String lastWfId = wf0110wSvc.save01(dsWorkflowMt, dsWorkflowDt);

		NexacroResult result = new NexacroResult();
		
		dsWorkflowMt = wf0110wSvc.select01(dsCond);
		result.addDataSet("dsWorkflowMt", dsWorkflowMt);

		Map<String, Object> rstMap = new HashMap<>();
		
		String wfId = "".equals(lastWfId) ? StringUtil.safe(dsCond.get("SEL_WF_ID")) : lastWfId;
		log.debug("save01() wfId=========================================================================>");
		rstMap.put("WF_ID", wfId);
		result.addDataSet("dsKey", rstMap);

		return result;
	}
}