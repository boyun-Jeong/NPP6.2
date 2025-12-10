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
import com.base.fomm.service.FOMM0710WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 체크리스트관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 26.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM0710W")
public class FOMM0710WController {

	private Logger log = LoggerFactory.getLogger(FOMM0710WController.class);

	@Autowired
	private FOMM0710WService fomm0710wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 체크리스트관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0710wSvc.select01(dsCond);
		result.addDataSet("dsClassTree", dsData);
		return result;
	}
	
	/**
	 * 체크리스트관리 상세 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0710wSvc.select02(dsCond);
		result.addDataSet("dsClass", dsData);
		return result;
	}

	/**
	 * 체크리스트관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, 
			@ParamDataSet(name = "dsClass") List<Map<String, Object>> dsClass) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0710wSvc.save01(dsCond,dsClass);
		}else {

			return result;
		}
		
		//저장후 트리구조와 데이터 다시 리턴해줌
		//List<Map<String, Object>> dsClassTree = fomm0710wSvc.select01(dsCond);
		//result.addDataSet("dsClassTree", dsClassTree);
		
		dsClass = fomm0710wSvc.select02(dsCond);
		result.addDataSet("dsClass", dsClass);

//		dsClassTree = fomm0710wSvc.select01(dsCond);
//		result.addDataSet("dsClassTree", dsClassTree);
//		
//		dsClass = fomm0710wSvc.select02(dsCond);
//		result.addDataSet("dsClass", dsClass);
				
		return result;
	}
}