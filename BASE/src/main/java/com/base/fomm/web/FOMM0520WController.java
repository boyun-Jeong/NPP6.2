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
import com.base.fomm.service.FOMM0520WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 메신저발송이력 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 24.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM0520W")
public class FOMM0520WController {

	private Logger log = LoggerFactory.getLogger(FOMM0520WController.class);

	@Autowired
	private FOMM0520WService fomm0520Svc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 메신저발송이력 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0520Svc.select01(dsCond);
		result.addDataSet("dsHEARIMTLKTRAN", dsData);
		return result;
	}

	/**
	 * 메신저발송이력 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0520Svc.save01(dsData);
		}else {

			return result;
		}
		dsData = fomm0520Svc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}