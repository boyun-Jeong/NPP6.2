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
import com.base.com.service.FommAuthService;
import com.base.fomm.service.FOMM0280WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 04. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 02.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM0280W")
public class FOMM0280WController {

	private Logger log = LoggerFactory.getLogger(FOMM0280WController.class);

	@Autowired
	private FOMM0280WService fomm0280wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 회의관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0280wSvc.select01(dsCond);
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

		List<Map<String, Object>> dsAttnd = fomm0280wSvc.select02(dsCond);
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

		List<Map<String, Object>> dsAttndS = fomm0280wSvc.select03(dsCond);
		result.addDataSet("dsAttndS", dsAttndS);
		return result;
	}
	
	/**
	 * 회의참여자 목록 조회 - FOMM0280_P01 용
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsAttnd = fomm0280wSvc.select04(dsCond);
		result.addDataSet("dsAttnd", dsAttnd);
		return result;
	}
	
	/**
	 * 회의관리 목록 조회 - 관리자용 FOMM0280_W
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		try {
			List<Map<String, Object>> dsData = fomm0280wSvc.select05(dsCond);
			result.addDataSet("dsData", dsData);
		}catch(Exception e) {
			
		}
		return result;
	}

	/**
	 * 회의관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond
			, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData
			, @ParamDataSet(name = "dsAttnd") List<Map<String, Object>> dsAttnd) throws Exception {
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

		String MEET_ID = StringUtil.safe(dsCond.get("MEET_ID"));

		if("".equals(MEET_ID)) {
			MEET_ID = fomm0280wSvc.save01(dsData, dsAttnd);
		}else {
			fomm0280wSvc.save01(dsData, dsAttnd);
		}
		dsCond.put("MEET_ID", MEET_ID);
		result.addDataSet("dsCond", dsCond);

		dsData = fomm0280wSvc.select05(dsCond);
		result.addDataSet("dsData", dsData);
		
		dsAttnd = fomm0280wSvc.select02(dsCond);
		result.addDataSet("dsAttnd", dsAttnd);
		
		
		return result;
	}
	/**
	 * 회의관리 삭제 - FOMM0280 회의관리(관리자용)
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save03")
	public NexacroResult save03(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond
								, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception
	
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("DELETE_YN");
		
		//String MEET_ID = "";
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			//MEET_ID = fomm0250wSvc.save03(dsData, dsAttnd);
			fomm0280wSvc.save03(dsData);
		}else {

			return result;
		}	
		
		//dsCond.put("MEET_ID", "");
		dsData = fomm0280wSvc.select05(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 참석자가 확인버튼 클릭시 CONF_YN, OPNION 업데이트
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/save04")
	public NexacroResult save04(  @ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception
	
	{
		// 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		fomm0280wSvc.save04(dsCond);	

		List<Map<String, Object>> dsAttnd = fomm0280wSvc.select04(dsCond);
		result.addDataSet("dsAttnd", dsAttnd);
		List<Map<String, Object>> dsAttndS = fomm0280wSvc.select06(dsCond);
		result.addDataSet("dsAttndS", dsAttndS);		
		return result;
	}	
}