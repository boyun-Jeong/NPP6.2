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
import com.base.sr.service.SR0040DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 기본요청서 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 21.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0040D")
public class SR0040DController {

	private Logger log = LoggerFactory.getLogger(SR0040DController.class);

	@Autowired
	private SR0040DService sr0040dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 기본요청서 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = sr0040dSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}

	/**
	 * 기본요청서 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsSrBasicReq") Map<String, Object> dsSrBasicReq) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr0040dSvc.save01(dsSrBasicReq);
		}else {

			return result;
		}
		return result;
	}
}