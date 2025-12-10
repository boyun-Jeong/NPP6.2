package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0500WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 통보배치관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 01.	김지수		최초작성
 */
@Controller
@RequestMapping("FOMM0500W")
public class FOMM0500WController {

	private Logger log = LoggerFactory.getLogger(FOMM0500WController.class);

	@Autowired
	private FOMM0500WService fomm0500wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * workflow 워크플로우 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectWorkflowList")
	public NexacroResult selectWorkflowList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsWorkflow = fomm0500wSvc.selectWorkflowList(dsCond);
		result.addDataSet("dsWorkflowList", dsWorkflow);
		return result;
	}
		
	/**
	 * 통보설정관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsFommNotiMngMt = fomm0500wSvc.select01(dsCond);
		result.addDataSet("dsFommNotiMngMt", dsFommNotiMngMt);

		dsFommNotiMngMt = fomm0500wSvc.select02(dsCond);
		result.addDataSet("dsWfReqProcMapList", dsFommNotiMngMt);
		return result;
	}

	/**
	 * 통보설정관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsFommNotiMngMt") List<Map<String, Object>> dsFommNotiMngMt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0500wSvc.save01(dsFommNotiMngMt);
		}else {

			return result;
		}
//		dsFommNotiMngMt = fomm0500wSvc.select01(dsCond);
//		result.addDataSet("dsFommNotiMngMt", dsFommNotiMngMt);
//
//		dsFommNotiMngMt = fomm0500wSvc.select02(dsCond);
//		result.addDataSet("dsWfReqProcMapList", dsFommNotiMngMt);
		
		dsFommNotiMngMt = fomm0500wSvc.selectWorkflowList(dsCond);
		result.addDataSet("dsWorkflowList", dsFommNotiMngMt);
		
		return result;
	}
}