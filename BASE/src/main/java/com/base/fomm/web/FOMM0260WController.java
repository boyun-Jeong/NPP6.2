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
import com.base.fomm.service.FOMM0260WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 휴일관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 11.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 11.	황채린		최초작성
 */
@Controller
@RequestMapping("FOMM0260W")
public class FOMM0260WController {

	private Logger log = LoggerFactory.getLogger(FOMM0260WController.class);

	@Autowired
	private FOMM0260WService FOMM0260wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 휴일관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMonthInfo = FOMM0260wSvc.select01(dsCond);
		result.addDataSet("dsMonthInfo", dsMonthInfo);
		return result;
	}
	
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsYearCd = FOMM0260wSvc.select02(dsCond);
		result.addDataSet("dsYearCd", dsYearCd);
		return result;
	}

	/**
	 * 휴일관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsMonthInfo") List<Map<String, Object>> dsMonthInfo) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			FOMM0260wSvc.save01(dsMonthInfo);
		}else {

			return result;
		}
		dsMonthInfo = FOMM0260wSvc.select01(dsCond);
		result.addDataSet("dsMonthInfo", dsMonthInfo);
		return result;
	}
}