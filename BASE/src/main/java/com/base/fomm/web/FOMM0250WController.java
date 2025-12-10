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
import com.base.fomm.service.FOMM0250WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 10.	이정빈		최초작성
 */
@Controller
@RequestMapping("FOMM0250W")
public class FOMM0250WController {

	private Logger log = LoggerFactory.getLogger(FOMM0250WController.class);

	@Autowired
	private FOMM0250WService fomm0250wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	
	
	/**
	 * 회의관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = fomm0250wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 회의참여자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsAttnd = fomm0250wSvc.select02(dsCond);
		result.addDataSet("dsAttnd", dsAttnd);
		return result;
	}
	
	/**
	 * 회의불참자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsAttndS = fomm0250wSvc.select03(dsCond);
		result.addDataSet("dsAttndS", dsAttndS);
		return result;
	}

	/**
	 * 회의관리 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception
	
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("DELETE_YN");
		
		String MEET_ID = "";
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			MEET_ID = fomm0250wSvc.save01(dsData);
		}else {

			return result;
		}	
		
		dsCond.put("MEET_ID", "");
		dsData = fomm0250wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}

}