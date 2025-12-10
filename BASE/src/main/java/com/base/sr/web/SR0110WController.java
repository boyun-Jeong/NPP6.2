package com.base.sr.web;

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
import com.base.sr.service.SR0110WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 등록 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 26.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0110W")
public class SR0110WController {

	private Logger log = LoggerFactory.getLogger(SR0110WController.class);

	@Autowired
	private SR0110WService sr0110wSvc;

	/**
	 * 요청서 등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWfReqTmplatMt = sr0110wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfReqTmplatMt", dsWfReqTmplatMt);

		return result;
	}
}