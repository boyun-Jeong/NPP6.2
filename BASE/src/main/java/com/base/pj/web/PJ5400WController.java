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
import com.base.pj.service.PJ5400WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 10.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5400W")
public class PJ5400WController {

	private Logger log = LoggerFactory.getLogger(PJ5400WController.class);

	@Autowired
	private PJ5400WService pj5400wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 시나리오 테스트 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> dsScnrTest = pj5400wSvc.select01(dsCond);
			result.addDataSet("dsScnrTest", dsScnrTest);
		}catch(Exception e) {
			result.setErrorCode(-1000);
		}
		return result;
	}

	/**
	 * 시나리오 테스트 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsScnrTest") List<Map<String, Object>> dsScnrTest) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj5400wSvc.save01(dsScnrTest);
		}else {

			return result;
		}
		dsScnrTest = pj5400wSvc.select01(dsCond);
		result.addDataSet("dsScnrTest", dsScnrTest);
		return result;
	}
}