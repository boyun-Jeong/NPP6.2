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
import com.base.fomm.service.FOMM0600WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 통보발송목록 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  김지수
 * @since   2024. 02. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 13.	김지수		최초작성
 */
@Controller
@RequestMapping("FOMM0600W")
public class FOMM0600WController {

	private Logger log = LoggerFactory.getLogger(FOMM0600WController.class);

	@Autowired
	private FOMM0600WService fomm0600wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 통보발송목록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = fomm0600wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}
	
	/**
	 * 통보발송목록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = fomm0600wSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}
	

	/**
	 * 통보발송목록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0600wSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = fomm0600wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}