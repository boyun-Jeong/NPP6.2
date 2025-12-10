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
import com.base.sr.service.SR5014DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 위치별 IP대역 관리 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 06.	정해운		최초작성
 */
@Controller
@RequestMapping("SR5014D")
public class SR5014DController {

	private Logger log = LoggerFactory.getLogger(SR5014DController.class);

	@Autowired
	private SR5014DService sr5014dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 위치별 IP대역 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5014dSvc.select01(dsCond);
		result.addDataSet("dsClassTree", dsData);
		return result;
	}
	
	/**
	 * 위치별 IP대역 관리 목록 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5014dSvc.select02(dsCond);
		result.addDataSet("dsClass", dsData);
		return result;
	}


	/**
	 * 위치별 IP대역 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsClass") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr5014dSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = sr5014dSvc.select02(dsCond);
		result.addDataSet("dsClass", dsData);
		
		dsData = sr5014dSvc.select01(dsCond);
		result.addDataSet("dsClassTree", dsData);
		return result;
	}
}