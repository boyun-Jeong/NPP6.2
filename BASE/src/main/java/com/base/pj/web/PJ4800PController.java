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
import com.base.pj.service.PJ4800PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 개발 진척 현황 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 06.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4800P")
public class PJ4800PController {

	private Logger log = LoggerFactory.getLogger(PJ4800PController.class);

	@Autowired
	private PJ4800PService pj4800pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 개발 진척 현황 상세(화면) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsProgram = pj4800pSvc.select01(dsCond);
		result.addDataSet("dsProgram", dsProgram);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(인터페이스) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsProgram = pj4800pSvc.select02(dsCond);
		result.addDataSet("dsProgram", dsProgram);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(배치프로그램) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsProgram = pj4800pSvc.select03(dsCond);
		result.addDataSet("dsProgram", dsProgram);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(프로그램) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsProgram = pj4800pSvc.select04(dsCond);
		result.addDataSet("dsProgram", dsProgram);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(보고서) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsProgram = pj4800pSvc.select05(dsCond);
		result.addDataSet("dsProgram", dsProgram);
		return result;
	}
}