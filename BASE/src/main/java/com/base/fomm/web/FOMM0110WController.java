package com.base.fomm.web;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.base.com.service.FommAuthService;
import com.base.com.web.FommMultipartController;
import com.base.fomm.service.FOMM0110WService;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 사용자 및 사용자별 권한그룹 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    이정빈	최초작성
 */
@Controller
@RequestMapping("FOMM0110W")
public class FOMM0110WController {

	private Logger log = LoggerFactory.getLogger(FOMM0110WController.class);
	
	@Autowired
	private FOMM0110WService fomm0110WSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Autowired
	private FommMultipartController fommMultipartController;
	
	/**
	 * 사용자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommUserMt =  fomm0110WSvc.select01(dsCond);
		result.addDataSet("dsFommUserMt", dsFommUserMt);
		
		return result;
	}

	/**
	 * 사용자별 권한그룹 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsFommAuthUserDt =  fomm0110WSvc.select02(dsCond);
		result.addDataSet("dsFommAuthUserDt", dsFommAuthUserDt);
		
		return result;
	}
	
	
	
	/**
	 * 사용자/사용자별 권한그룹 일괄 저장
	 * @param dsFommUserMt, dsFommAuthUserDt
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsFommUserMt") List<Map<String, Object>> dsFommUserMt
							  , @ParamDataSet(name = "dsFommAuthUserDt") List<Map<String, Object>> dsFommAuthUserDt) throws NexacroException 
	{		
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0110WSvc.save01(dsFommUserMt, dsFommAuthUserDt);
		}
		else {
			return result;
		}
		
		
		dsFommUserMt =  fomm0110WSvc.select01(dsCond);
		result.addDataSet("dsFommUserMt", dsFommUserMt);
		
		return result;
	}
	
	
	@RequestMapping(value = "/save02")
	public NexacroResult save02(  HttpServletRequest request
								, HttpServletResponse response) throws Exception 
	{		
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		
		
		fommMultipartController.uploadFiles(request, response);
		
		
		return result;
	}
}
