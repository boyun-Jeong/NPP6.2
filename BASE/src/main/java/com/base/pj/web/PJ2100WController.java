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
import com.base.pj.service.PJ2100WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단계별 일정 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 26.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ2100W")
public class PJ2100WController {

	private Logger log = LoggerFactory.getLogger(PJ2100WController.class);

	@Autowired
	private PJ2100WService pj2100wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단계별 일정 - 프로젝트 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsList = pj2100wSvc.select01(dsCond);
		result.addDataSet("dsList", dsList);
		return result;
	}

	/**
	 * 단계별 일정 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsList = pj2100wSvc.select02(dsCond);
		result.addDataSet("dsList", dsList);
		return result;
	}

	/**
	 * 단계별 일정 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsList") List<Map<String, Object>> dsList) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj2100wSvc.save01(dsList);
		}else {

			return result;
		}
		dsList = pj2100wSvc.select02(dsCond);
		result.addDataSet("dsList", dsList);
		return result;
	}
}