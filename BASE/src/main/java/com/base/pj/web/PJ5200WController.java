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
import com.base.pj.service.PJ5200WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 결함관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	이정빈		최초작성
 */
@Controller
@RequestMapping("PJ5200W")
public class PJ5200WController {

	private Logger log = LoggerFactory.getLogger(PJ5200WController.class);

	@Autowired
	private PJ5200WService pj5200wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단위 테스트 결함관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUtDefect = pj5200wSvc.select01(dsCond);
		result.addDataSet("dsUtDefect", dsUtDefect);
		return result;
	}

	/**
	 * 단위 테스트 결함관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsUtDefect") List<Map<String, Object>> dsUtDefect) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj5200wSvc.save01(dsUtDefect);
		}else {

			return result;
		}
		dsUtDefect = pj5200wSvc.select01(dsCond);
		result.addDataSet("dsUtDefect", dsUtDefect);
		return result;
	}
}