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
import com.base.fomm.service.FOMM0240WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 업무위임관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 08.	황채린		최초작성
 */
@Controller
@RequestMapping("FOMM0240W")
public class FOMM0240WController {

	private Logger log = LoggerFactory.getLogger(FOMM0240WController.class);

	@Autowired
	private FOMM0240WService fomm0240wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 업무위임관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMain = fomm0240wSvc.select01(dsCond);
		result.addDataSet("dsMain", dsMain);
		return result;
	}
	
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMain = fomm0240wSvc.select02(dsCond);
		result.addDataSet("dsMain", dsMain);
		return result;
	}
	
	
	/**
	 * 업무위임관리 목록 조회 - 2025-03-14 추가됨 - 김호일
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMain = fomm0240wSvc.select03(dsCond);
		result.addDataSet("dsMain", dsMain);
		return result;
	}
	
	/**
	 * 업무 위임관리 위임자,처리자 조회 FOMM0000_P01_AGENCY에서 사용 - 2025-03-14 추가됨 - 김호일
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMain = fomm0240wSvc.select04(dsCond);
		result.addDataSet("dsFommUserMt", dsMain);
		return result;
	}

	/**
	 * 업무위임관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveAdd")
	public NexacroResult saveAdd(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsAgency") List<Map<String, Object>> dsAgency) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		log.debug("FOMM0240WController dsCond ::: " + dsCond);
		log.debug("FOMM0240WController dsAgency ::: " + dsAgency);
		List<Map<String, Object>> dsResult = fomm0240wSvc.selectYN(dsAgency);
		result.addDataSet("dsResult", dsResult);
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0240wSvc.saveAdd(dsAgency);
			
		}else {
			
		}
		
		List<Map<String, Object>> dsMain = fomm0240wSvc.select01(dsCond);
		result.addDataSet("dsMain", dsMain);
		
		return result;
	}
	@RequestMapping(value = "/saveAdd2")
	public NexacroResult saveAdd2(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsAgency") List<Map<String, Object>> dsAgency) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		log.debug("FOMM0240WController dsCond ::: " + dsCond);
		log.debug("FOMM0240WController dsAgency ::: " + dsAgency);
		List<Map<String, Object>> dsResult = fomm0240wSvc.selectYN(dsAgency);
		result.addDataSet("dsResult", dsResult);
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0240wSvc.saveAdd2(dsAgency);
			
		}else {
			
		}
		
		List<Map<String, Object>> dsMain = fomm0240wSvc.select02(dsCond);
		result.addDataSet("dsMain", dsMain);
		
		return result;
	}

	/**
	 * 업무위임관리 위임중단
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveStop")
	public NexacroResult saveStop(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsAgency") List<Map<String, Object>> dsAgency) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0240wSvc.saveStop(dsAgency);
			
		}else {

			return result;
		}
		List<Map<String, Object>> dsMain = fomm0240wSvc.select01(dsCond);
		result.addDataSet("dsMain", dsMain);
		return result;
	}

	/**
	 * 업무위임관리 관리자삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveDelete")
	public NexacroResult saveDelete(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsAgency") List<Map<String, Object>> dsAgency) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0240wSvc.saveDelete(dsAgency);
		}else {

			return result;
		}
		List<Map<String, Object>> dsMain = fomm0240wSvc.select01(dsCond);
		result.addDataSet("dsMain", dsMain);
		return result;
	}
}