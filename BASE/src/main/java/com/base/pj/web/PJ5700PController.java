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
import com.base.pj.service.PJ5700PService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 결함 상세 팝업 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 15.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5700P")
public class PJ5700PController {

	private Logger log = LoggerFactory.getLogger(PJ5700PController.class);

	@Autowired
	private PJ5700PService pj5700pSvc;

	/**
	 * 시나리오 테스트 결함 상세 팝업 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsStDefect = pj5700pSvc.select01(dsCond);
		result.addDataSet("dsStDefect", dsStDefect);
		return result;
	}
}