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
import com.base.fomm.service.FOMM1400WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 난이도관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 24.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM1400W")
public class FOMM1400WController {

	private Logger log = LoggerFactory.getLogger(FOMM1400WController.class);

	@Autowired
	private FOMM1400WService fomm1400wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 난이도관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1400wSvc.select01(dsCond);
		result.addDataSet("dsSrlMng", dsData);
		return result;
	}
	
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1400wSvc.select02(dsCond);
		result.addDataSet("dsSrlItem", dsData);
		return result;
	}

	/**
	 * 난이도관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData
			, @ParamDataSet(name = "dsDataItem") List<Map<String, Object>> dsDataItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		//NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		NexacroResult result = new NexacroResult();

		//if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm1400wSvc.save01(dsData,dsDataItem);
		//}else {

		//	return result;
		//}
		dsData = fomm1400wSvc.select01(dsCond);
		result.addDataSet("dsSrlMng", dsData);
		return result;
	}
	
	/**
	 * 난이도관리 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/delMng")
	public NexacroResult delMng(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		//NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		NexacroResult result = new NexacroResult();

		//if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm1400wSvc.delMng(dsCond);
		//}else {

		//	return result;
		//}
		List<Map<String, Object>> dsData = fomm1400wSvc.select01(dsCond);
		result.addDataSet("dsSrlMng", dsData);
		return result;
	}
}