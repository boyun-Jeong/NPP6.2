package com.base.pj.web;

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
import com.base.pj.service.PJ0100PService;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 검색 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0100P")
public class PJ0100PController {

	private Logger log = LoggerFactory.getLogger(PJ0100PController.class);

	@Autowired
	private PJ0100PService pj0100pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 프로젝트 검색 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjtList = pj0100pSvc.select01(dsCond);

		result.addDataSet("dsPjtList", dsPjtList);
		return result;
	}

	/**
	 * 프로젝트 WBS 예외일정 목록
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsHoliDay = pj0100pSvc.selectHoliday(dsCond);
		result.addDataSet("dsHoliDay", dsHoliDay);

		List<Map<String, Object>> dsPjWbsDay = pj0100pSvc.select02(dsCond);
		result.addDataSet("dsPjWbsDay", dsPjWbsDay);
		return result;
	}

	/**
	 * 공휴일 목록 목록
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectHoliDay")
	public NexacroResult selectHoliday(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsHoliDay = pj0100pSvc.selectHoliday(dsCond);
		result.addDataSet("dsHoliDay", dsHoliDay);
		return result;
	}

	/**
	 * 프로젝트 WBS 예외일정 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjWbsDay") List<Map<String, Object>> dsPjWbsDay) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0100pSvc.save01(dsPjWbsDay);
		}else {

			return result;
		}
		
		dsPjWbsDay = pj0100pSvc.select02(dsCond);
		result.addDataSet("dsPjWbsDay", dsPjWbsDay);

		return result;
	}
	
	/**
	 * 프로젝트 WBS 예외일정 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjWbs") List<Map<String, Object>> dsPjWbs) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0100pSvc.save02(dsCond, dsPjWbs);
		}else {

			return result;
		}
		return result;
	}
}