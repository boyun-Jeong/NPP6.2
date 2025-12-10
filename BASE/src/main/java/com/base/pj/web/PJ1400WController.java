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
import com.base.pj.service.PJ1400WService;
import com.base.com.service.FommAuthService;
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
@RequestMapping("PJ1400W")
public class PJ1400WController {

	private Logger log = LoggerFactory.getLogger(PJ1400WController.class);

	@Autowired
	private PJ1400WService pj1400wSvc;

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

		List<Map<String, Object>> dsPjQaList = pj1400wSvc.select01();
		result.addDataSet("dsPjQaList", dsPjQaList);
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
		
		List<Map<String, Object>> dsPjQaItem = pj1400wSvc.select02(dsCond);
		result.addDataSet("dsPjQaItem", dsPjQaItem);
		return result;
	}

	/**
	 * 방법론/산출물정의 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjQaList") List<Map<String, Object>> dsPjQaList,
								@ParamDataSet(name = "dsPjQaItem") List<Map<String, Object>> dsPjQaItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String qaListId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			qaListId = pj1400wSvc.save01(dsPjQaList, dsPjQaItem);
		}else {

			return result;
		}
		dsPjQaList = pj1400wSvc.select01();
		result.addDataSet("dsPjQaList", dsPjQaList);

		dsCond.put("QA_LIST_ID", "".equals(qaListId) ? StringUtil.safe(dsCond.get("QA_LIST_ID")) : qaListId);
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}