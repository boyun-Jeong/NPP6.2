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
import com.base.pj.service.PJ1300WService;
import com.base.com.service.FommAuthService;
import com.base.com.service.FommMultipartService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1300W")
public class PJ1300WController {

	private Logger log = LoggerFactory.getLogger(PJ1300WController.class);

	@Autowired
	private PJ1300WService pj1300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
//	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
	public NexacroResult select01() throws NexacroException {
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjEvalList = pj1300wSvc.select01();
		result.addDataSet("dsPjEvalList", dsPjEvalList);
		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsPjEvalItem = pj1300wSvc.select02(dsCond);
		result.addDataSet("dsPjEvalItem", dsPjEvalItem);
		return result;
	}

	/**
	 * 방법론/산출물정의 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjEvalList") List<Map<String, Object>> dsPjEvalList,
								@ParamDataSet(name = "dsPjEvalItem") List<Map<String, Object>> dsPjEvalItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String evalListId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			evalListId = pj1300wSvc.save01(dsPjEvalList, dsPjEvalItem);
		}else {

			return result;
		}
		dsPjEvalList = pj1300wSvc.select01();
		result.addDataSet("dsPjEvalList", dsPjEvalList);

		dsCond.put("EVAL_LIST_ID", "".equals(evalListId) ? StringUtil.safe(dsCond.get("EVAL_LIST_ID")) : evalListId);
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}