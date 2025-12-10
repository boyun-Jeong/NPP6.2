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
import com.base.pj.service.PJ1200WService;
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
@RequestMapping("PJ1200W")
public class PJ1200WController {

	private Logger log = LoggerFactory.getLogger(PJ1200WController.class);

	@Autowired
	private PJ1200WService pj1200wSvc;

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

		List<Map<String, Object>> dsPjCheckList = pj1200wSvc.select01();
		result.addDataSet("dsPjCheckList", dsPjCheckList);
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
		
		List<Map<String, Object>> dsPjCheckItem = pj1200wSvc.select02(dsCond);
		result.addDataSet("dsPjCheckItem", dsPjCheckItem);
		return result;
	}

	/**
	 * 방법론/산출물정의 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjCheckList") List<Map<String, Object>> dsPjCheckList,
								@ParamDataSet(name = "dsPjCheckItem") List<Map<String, Object>> dsPjCheckItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String chceklistId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			chceklistId = pj1200wSvc.save01(dsPjCheckList, dsPjCheckItem);
		}else {

			return result;
		}
		dsPjCheckList = pj1200wSvc.select01();
		result.addDataSet("dsPjCheckList", dsPjCheckList);

		dsCond.put("CHECKLIST_ID", "".equals(chceklistId) ? StringUtil.safe(dsCond.get("CHECKLIST_ID")) : chceklistId);
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}