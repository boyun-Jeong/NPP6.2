package com.base.fomm.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fomm.service.FOMM0210WService;
import com.base.fwk.util.StringUtil;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 게시판 Controller
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
@RequestMapping("FOMM0210W")
public class FOMM0210WController {

	private Logger log = LoggerFactory.getLogger(FOMM0210WController.class);
	
	@Autowired
	private FOMM0210WService FOMM0210WSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Inject
	private Provider<SessionContext> sc;
	
	/**
	 * SPP 게시판 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsBoardMt =  FOMM0210WSvc.select01(dsCond);
		result.addDataSet("dsBoardMt", dsBoardMt);
		return result;
	}

	
	/**
	 * SPP 게시판 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsBoardMt") List<Map<String, Object>> dsBoardMt
								, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			FOMM0210WSvc.save01(dsBoardMt);
		}else {
			return result;
		}
		
		dsBoardMt = FOMM0210WSvc.select01(dsCond);
		result.addDataSet("dsBoardMt", dsBoardMt);
		return result;
	}
	
}