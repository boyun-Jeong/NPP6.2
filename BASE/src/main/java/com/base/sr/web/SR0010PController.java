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
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR0010PService;

/**
 * 
 * <pre>
 * @title
 * - 사용자 정보(workflow) Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0010P")
public class SR0010PController {

	private Logger log = LoggerFactory.getLogger(SR0010PController.class);

	@Autowired
	private SR0010PService sr0010pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 사용자 정보(workflow) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String gubun = StringUtil.safe(dsCond.get("GUBUN"));
		
		if("1".equals(gubun)) {
			List<Map<String, Object>> dsUser = sr0010pSvc.select01(dsCond);
			result.addDataSet("dsUser", dsUser);
		}else if("2".equals(gubun)) {
			List<Map<String, Object>> dsUser = sr0010pSvc.select02(dsCond);
			result.addDataSet("dsUser", dsUser);
		}
		return result;
	}

	/**
	 * 요청서 처리 이력 조회(팝업)
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsHist = sr0010pSvc.select03(dsCond);
		result.addDataSet("dsHist", dsHist);
		return result;
	}

	/**
	 * 요청서 처리 이력 조회(요청서 상단에 이력 표기용)
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsHist = sr0010pSvc.select04(dsCond);
		result.addDataSet("dsHist", dsHist);
		return result;
	}
}