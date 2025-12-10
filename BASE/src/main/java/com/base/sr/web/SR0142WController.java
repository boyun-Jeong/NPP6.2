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
import com.base.sr.service.SR0142WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 결재이력조회 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 21.	김미성		최초작성
 */
@Controller
@RequestMapping("SR0142W")
public class SR0142WController {

	private Logger log = LoggerFactory.getLogger(SR0142WController.class);

	@Autowired
	private SR0142WService sr0142wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 결재이력조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr0142wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 결재이력조회 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr0142wSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = sr0142wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}