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
import com.base.pj.service.PJ0610PService;

/**
 * 
 * <pre>
 * @title
 * - 회의 참석자 조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 13.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0610P")
public class PJ0610PController {

	private Logger log = LoggerFactory.getLogger(PJ0610PController.class);

	@Autowired
	private PJ0610PService pj0610pSvc;

	/**
	 * 회의 참석자 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjMeetAttnd = pj0610pSvc.select01(dsCond);
		result.addDataSet("dsPjMeetAttnd", dsPjMeetAttnd);
		return result;
	}
}