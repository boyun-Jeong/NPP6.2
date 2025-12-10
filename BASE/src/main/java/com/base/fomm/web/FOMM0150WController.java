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
import com.base.fomm.service.FOMM0150WService;
import com.base.com.service.FommAuthService;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 공통코드관리 Controller
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
@RequestMapping("FOMM0150W")
public class FOMM0150WController {

	private Logger log = LoggerFactory.getLogger(FOMM0150WController.class);
	
	@Autowired
	private FOMM0150WService fomm0150wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	/**
	 * SPP 코드 트리 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsCodeTree =  fomm0150wSvc.select01(dsCond);
		result.addDataSet("dsCodeTree", dsCodeTree);
		return result;
	}

	/**
	 * SPP 하위코드 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsFommCmmCdMt =  fomm0150wSvc.select02(dsCond);
		result.addDataSet("dsFommCmmCdMt", dsFommCmmCdMt);
		
		return result;
	}
	
	/**
	 * SPP 선택코드 언어별 코드 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsFommCmmCdLangDt =  fomm0150wSvc.select03(dsCond);
		result.addDataSet("dsFommCmmCdLangDt", dsFommCmmCdLangDt);
		
		return result;
	}
	
	
	
	/**
	 * SPP 코드 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsFommCmmCdMt") List<Map<String, Object>> dsFommCmmCdMt) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0150wSvc.save01(dsFommCmmCdMt);
		}
		else {
			return result;
		}

		
		dsFommCmmCdMt =  fomm0150wSvc.select02(dsCond);
		result.addDataSet("dsFommCmmCdMt", dsFommCmmCdMt);
		
		return result;
	}
}
