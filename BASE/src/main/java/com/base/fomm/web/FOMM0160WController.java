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
import com.base.fomm.service.FOMM0160WService;
import com.base.com.service.FommAuthService;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 공통메시지관리 Controller
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
@RequestMapping("FOMM0160W")
public class FOMM0160WController {

	private Logger log = LoggerFactory.getLogger(FOMM0160WController.class);
	
	@Autowired
	private FOMM0160WService fomm0160wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	
	/**
	 * SPP 공통메시지 MT 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsCmmMsgMt =  fomm0160wSvc.select01(dsCond);
		result.addDataSet("dsCmmMsgMt", dsCmmMsgMt);
		return result;
	}

	/**
	 * SPP 공통메시지 DT 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsCmmMsgDt =  fomm0160wSvc.select02(dsCond);
		result.addDataSet("dsCmmMsgDt", dsCmmMsgDt);
		return result;
	}
	
	
	
	/**
	 * SPP 메시지 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsCmmMsgMt") List<Map<String, Object>> dsCmmMsgMt
							  , @ParamDataSet(name = "dsCmmMsgDt") List<Map<String, Object>> dsCmmMnsgDt) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0160wSvc.save01(dsCmmMsgMt, dsCmmMnsgDt);
		}
		else {
			return result;
		}

		
		dsCmmMsgMt =  fomm0160wSvc.select01(dsCond);
		result.addDataSet("dsCmmMsgMt", dsCmmMsgMt);
		
		return result;
	}
}
