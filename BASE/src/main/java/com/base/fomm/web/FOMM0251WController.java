package com.base.fomm.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fomm.service.FOMM0251WService;
import com.base.fwk.util.StringUtil;


/**

/**
 * 
 * <pre>
 * @title
 * - 커뮤니티 > 게시판(트리구조)
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정하림
 * @since   2024. 12. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자				내용
 * ------------------------------------------------
 * 2024. 12. 09.	정하림			      최초작성
 */
@Controller
@RequestMapping("FOMM0251W")
public class FOMM0251WController {
	
	private Logger log = LoggerFactory.getLogger(FOMM0251WController.class);
	
	@Autowired
	private FOMM0251WService FOMM0251WSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Inject
	private Provider<SessionContext> sc;
	
	/**
	 * SPP 게시글 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsPostDt =  FOMM0251WSvc.select01(dsCond);
		result.addDataSet("dsPostDt", dsPostDt);
		return result;
	}
	
	/**
	 * SPP 게시판 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsPostMt =  FOMM0251WSvc.select02(dsCond);
		result.addDataSet("dsPostMt", dsPostMt);
		return result;
	}
	
	@RequestMapping(value = "/select02pop")
	public NexacroResult select07(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsPostMt =  FOMM0251WSvc.select07(dsCond);
		result.addDataSet("dsPostMt", dsPostMt);
		return result;
	}

	/**
	 * SPP 게시판 종류 및 템플릿 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsTmpl =  FOMM0251WSvc.select03(dsCond);
		result.addDataSet("dsTmpl", dsTmpl);
		return result;
	}
	
	/**
	 * SPP SW/IT 게시판 그리드 - 조회
	 * @param dsCond
	 * @return
	 * @throws IllegalAccessException 
	 */
	@RequestMapping(value = "/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IllegalAccessException 
	{
		NexacroResult result = new NexacroResult();
		
		String reqTypeNm = null;
		
		if(dsCond.containsKey("REQ_TYPE_NM")) { 
			reqTypeNm = (String) dsCond.get("REQ_TYPE_NM");
		}
		
		List<Map<String, Object>> dsSubMt =  FOMM0251WSvc.select04(dsCond, reqTypeNm);
		
		if(reqTypeNm != null) {
			switch (reqTypeNm) {
				case "SW":
					result.addDataSet("dsSwMt", dsSubMt);
					break;
				
				case "EDU":
					result.addDataSet("dsEduMt", dsSubMt);
					break;
					
				default:
					throw new IllegalAccessException("알 수 없는 인자 :: " + reqTypeNm);
			}
		}else {
			log.error("reqTypeNm 값이 비어 있습니다!");
		}
		
		
		return result;
	}
	
	/**
	 * SPP 게시판 템플릿 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsTmplMt =  FOMM0251WSvc.select05(dsCond);
		result.addDataSet("dsTmplMt", dsTmplMt);
		return result;
	}

	
	/**
	 * SPP 게시글 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsPostDt") List<Map<String, Object>> dsPostDt
								, @ParamDataSet(name = "dsEduMt") List<Map<String, Object>> dsEduMt
								, @ParamDataSet(name = "dsSwMt") List<Map<String, Object>> dsSwMt
								, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		String postDtNo = "";
		
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			postDtNo = FOMM0251WSvc.save01(dsPostDt, dsEduMt, dsSwMt);
		}else {
			return result;
		}
	
		dsPostDt = FOMM0251WSvc.select01(dsCond);
		result.addDataSet("dsPostDt", dsPostDt);
	
		dsCond.put("POST_DT_NO", postDtNo);
		dsCond.put("NTC_ADD_YN", "N");
		dsPostDt = FOMM0251WSvc.select01(dsCond);
		result.addDataSet("dsResult", dsPostDt);
		
		return result;
	}
	
	/**
	 * SPP 게시판 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(@ParamDataSet(name = "dsPostMt") List<Map<String, Object>> dsPostMt
								, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			FOMM0251WSvc.save02(dsPostMt);
		}else {
			return result;
		}
		
		// 저장 후 조회 조건에서 게시판 번호 제외
		if(dsCond.containsKey("POST_MT_NO")) {
			dsCond.remove("POST_MT_NO");
		}

		dsPostMt = FOMM0251WSvc.select02(dsCond);
		result.addDataSet("dsPostMt", dsPostMt);
		return result;
	}
	
	/**
	 * SPP 게시판 템플릿 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save03")
	public NexacroResult save01(@ParamDataSet(name = "dsTmplMt") List<Map<String, Object>> dsTmplMt
								, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			FOMM0251WSvc.save03(dsTmplMt);
		}else {
			return result;
		}
		dsTmplMt = FOMM0251WSvc.select05(dsCond);
		result.addDataSet("dsTmplMt", dsTmplMt);
		
		return result;
	}
	
	
	/**
	 * SPP 게시판 조회수 증가
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/updateCnt")
	public NexacroResult updateCnt(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		System.out.println("============> dscond : " + dsCond);
		
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			FOMM0251WSvc.updateCnt(dsCond);
		}else {
			return result;
		}
		
		return result;
	}
	
	
	/**
	 * SPP 게시판 CRUD 권한 visible 처리
	 */
	@RequestMapping(value = "/select06")
	public NexacroResult select06(@ParamDataSet(name = "dsSessUser", required=false) Map<String, Object> dsSessUser) throws Exception
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsBtnAuth =  FOMM0251WSvc.select06(dsSessUser);
		result.addDataSet("dsBtnAuth", dsBtnAuth);
		return result;
	}
	
	
	
}
