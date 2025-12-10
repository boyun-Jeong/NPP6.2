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
import com.base.fomm.service.FOMM0510WService;

/**
 * 
 * <pre>
 * @title
 * - 슬라이드 알림 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
@Controller
@RequestMapping("FOMM0510W")
public class FOMM0510WController {

	private Logger log = LoggerFactory.getLogger(FOMM0510WController.class);

	@Autowired
	private FOMM0510WService fomm0510wSvc;

	/**
	 * 통보설정관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsFommScheduleJobMt = fomm0510wSvc.select01(dsCond);
		result.addDataSet("dsFommScheduleJobMt", dsFommScheduleJobMt);
		return result;
	}
}