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
import com.base.pj.service.PJ4600WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 31.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4600W")
public class PJ4600WController {

	private Logger log = LoggerFactory.getLogger(PJ4600WController.class);

	@Autowired
	private PJ4600WService pj4600wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 프로그램 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> dsProgram = pj4600wSvc.select01(dsCond);
			result.addDataSet("dsProgram", dsProgram);
		}catch(Exception e) {
			result.setErrorCode(-1000);
		}
		
		return result;
	}

	/**
	 * 프로그램 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsProgram") List<Map<String, Object>> dsProgram) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj4600wSvc.save01(dsProgram);
		}else {

			return result;
		}
		try {
			dsProgram = pj4600wSvc.select01(dsCond);
			result.addDataSet("dsProgram", dsProgram);
		}catch(Exception e) {}
		return result;
	}
}