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
import com.base.pj.service.PJ5000PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단위테스트 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 07.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5000P")
public class PJ5000PController {

	private Logger log = LoggerFactory.getLogger(PJ5000PController.class);

	@Autowired
	private PJ5000PService pj5000pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단위테스트 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj5000pSvc.select01(dsCond);
		result.addDataSet("dsUnitTest", dsData);
		
		dsData = pj5000pSvc.select02(dsCond);
		result.addDataSet("dsUtDefect", dsData);

		return result;
	}

	/**
	 * 단위테스트 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsUnitTest") List<Map<String, Object>> dsUnitTest) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String utestId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			utestId = pj5000pSvc.save01(dsUnitTest);
		}else {

			return result;
		}

		if(!"".equals(utestId))
		{
			dsCond.put("UTEST_ID", utestId);
		}

		dsUnitTest = pj5000pSvc.select01(dsCond);
		result.addDataSet("dsUnitTest", dsUnitTest);

		dsUnitTest = pj5000pSvc.select02(dsCond);
		result.addDataSet("dsUtDefect", dsUnitTest);
		return result;
	}
}