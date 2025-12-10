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
import com.base.pj.service.PJ3100WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 위험관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 18.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3100W")
public class PJ3100WController {

	private Logger log = LoggerFactory.getLogger(PJ3100WController.class);

	@Autowired
	private PJ3100WService pj3100wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 위험관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsRisk = pj3100wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsRisk", dsRisk);

		return result;
	}

	/**
	 * 위험관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsRisk") List<Map<String, Object>> dsRisk) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj3100wSvc.save01(dsRisk);
		}else {

			return result;
		}
		dsRisk = pj3100wSvc.select01(dsCond);
		result.addDataSet("dsRisk", dsRisk);
		return result;
	}
}