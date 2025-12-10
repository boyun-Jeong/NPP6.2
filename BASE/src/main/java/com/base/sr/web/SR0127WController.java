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
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR0127WService;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  노익현
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	노익현		최초작성
 */
@Controller
@RequestMapping("SR0127W")
public class SR0127WController {

	private Logger log = LoggerFactory.getLogger(SR0127WController.class);

	@Autowired
	private SR0127WService sr0127wSvc;

	/**
	 * SR요청목록조회(IT외주서비스신청) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String upWfProcCd = StringUtil.safe(dsCond.get("UP_WF_PROC_CD"));
		
		if("".equals(upWfProcCd)) {
			List<Map<String, Object>> dsCnt  = sr0127wSvc.select00(dsCond);
			result.addDataSet("dsCnt", dsCnt);
		}

		List<Map<String, Object>> dsData = sr0127wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
}