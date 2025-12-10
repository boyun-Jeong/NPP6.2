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
import com.base.sr.service.SR5100DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 문제등록 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 01.	이정빈		최초작성
 */
@Controller
@RequestMapping("SR5100D")
public class SR5100DController {

	private Logger log = LoggerFactory.getLogger(SR5100DController.class);

	@Autowired
	private SR5100DService sr5100dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 문제등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> dsWfPbm = sr5100dSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfPbm", dsWfPbm);

		return result;
	}

	/**
	 * 문제등록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
							    @ParamDataSet(name = "dsWfPbm") Map<String, Object> dsWfPbm) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr5100dSvc.save01(dsWfPbm);
		}else {

			return result;
		}
		return result;
	}
}