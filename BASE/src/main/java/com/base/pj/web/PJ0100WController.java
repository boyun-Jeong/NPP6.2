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
import com.base.pj.service.PJ0100WService;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - WBS 관리(프로젝트일정계획) Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 25.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0100W")
public class PJ0100WController {

	private Logger log = LoggerFactory.getLogger(PJ0100WController.class);

	@Autowired
	private PJ0100WService pj0100wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * WBS 관리(프로젝트일정계획) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		dsCond.put("SEL_PJT_ID", StringUtil.safe(dsCond.get("PJT_ID")));
		dsCond.put("SEL_SUB_PJT_ID", StringUtil.safe(dsCond.get("SUB_PJT_ID")));
		dsCond.put("SEL_LVL", StringUtil.safe(dsCond.get("LVL")));

		List<Map<String, Object>> dsPjWbs = pj0100wSvc.select01(dsCond);
		result.addDataSet("dsPjWbs", dsPjWbs);
		
		List<Map<String, Object>> dsPjWbsTot = pj0100wSvc.select02(dsCond);
		result.addDataSet("dsPjWbsTot", dsPjWbsTot);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}

	/**
	 * WBS 관리(프로젝트일정계획) 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjWbs") List<Map<String, Object>> dsPjWbs) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0100wSvc.save01(StringUtil.safe(dsCond.get("SAVE_TYPE")), dsCond, dsPjWbs);
		}else {

			return result;
		}

		dsCond.put("SEL_PJT_ID", StringUtil.safe(dsCond.get("PJT_ID")));
		dsCond.put("SEL_SUB_PJT_ID", StringUtil.safe(dsCond.get("SUB_PJT_ID")));
		dsCond.put("SEL_LVL", StringUtil.safe(dsCond.get("LVL")));
		
		dsPjWbs = pj0100wSvc.select01(dsCond);
		result.addDataSet("dsPjWbs", dsPjWbs);
		
		dsPjWbs = pj0100wSvc.select02(dsCond);
		result.addDataSet("dsPjWbsTot", dsPjWbs);
		
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}