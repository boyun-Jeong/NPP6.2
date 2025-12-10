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
import com.base.pj.service.PJ4520PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 배치프로그램 목록 검색(팝업) Controller
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
@RequestMapping("PJ4520P")
public class PJ4520PController {

	private Logger log = LoggerFactory.getLogger(PJ4520PController.class);

	@Autowired
	private PJ4520PService pj4520pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 배치프로그램 목록 검색(팝업) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsBatchprg = pj4520pSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsBatchprg", dsBatchprg);

		return result;
	}
}