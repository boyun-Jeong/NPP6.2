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
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fomm.service.FOMM0120WService;
import com.base.fomm.service.FOMM0130WService;
import com.base.com.service.FommAuthService;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 메뉴권한 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    WEMB	최초작성
 */
@Controller
@RequestMapping("FOMM0130W")
public class FOMM0130WController {

	private Logger log = LoggerFactory.getLogger(FOMM0130WController.class);
	
	@Autowired
	private FOMM0120WService fomm0120wSvc;
	
	@Autowired
	private FOMM0130WService fomm0130wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	
	/**
	 * SPP 권한그룹 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommAuthMt =  fomm0120wSvc.select01(dsCond);
		result.addDataSet("dsFommAuthMt", dsFommAuthMt);

		return result;
	}

	/**
	 * SPP 권한그룹별 메뉴 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsFommAuthMenuDt =  fomm0130wSvc.select02(dsCond);
		result.addDataSet("dsFommAuthMenuDt", dsFommAuthMenuDt);
		
		return result;
	}
	
	
	
	/**
	 * SPP 권한그룹별 메뉴권한 저장
	 * @param dsFommUserMt, dsFommAuthMenuDt
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsFommAuthMenuDt") List<Map<String, Object>> dsFommAuthMenuDt
							  , @ParamVariable(name = "AUTH_ID") String authId) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0130wSvc.save01(dsFommAuthMenuDt, authId);
		}
		else {
			return result;
		}
		
		
		List<Map<String, Object>> dsFommAuthMt =  fomm0120wSvc.select01(dsCond);
		result.addDataSet("dsFommAuthMt", dsFommAuthMt);
		
		return result;
	}
}
