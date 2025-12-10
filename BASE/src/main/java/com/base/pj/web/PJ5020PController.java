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
import com.base.pj.service.PJ5020PService;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 검색 팝업 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
@Controller
@RequestMapping("PJ5020P")
public class PJ5020PController {

	private Logger log = LoggerFactory.getLogger(PJ5020PController.class);

	@Autowired
	private PJ5020PService pj5020pSvc;

	/**
	 * 단위 테스트 검색 팝업 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUnitTest = pj5020pSvc.select01(dsCond);
		result.addDataSet("dsUnitTest", dsUnitTest);
		return result;
	}
}