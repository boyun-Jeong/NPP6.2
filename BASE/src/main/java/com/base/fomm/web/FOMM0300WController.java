package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0300WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 일정등록 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 14.	이정빈		최초작성
 */
@Controller
@RequestMapping("FOMM0300W")
public class FOMM0300WController {

	private Logger log = LoggerFactory.getLogger(FOMM0300WController.class);

	@Autowired
	private FOMM0300WService fomm0300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 일정등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = fomm0300wSvc.select01(dsCond);
		result.addDataSet("dsMonthInfo", dsData);

		dsData = fomm0300wSvc.select02(dsCond);
		result.addDataSet("dsCalData", dsData);

		return result;
	}
}