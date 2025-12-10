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
import com.base.fomm.service.FOMM0270WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 시스템링크관리페이지 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  고인호
 * @since   2025. 02. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 26.	고인호		최초작성
 */
@Controller
@RequestMapping("FOMM0270W")
public class FOMM0270WController {

	private Logger log = LoggerFactory.getLogger(FOMM0270WController.class);

	@Autowired
	private FOMM0270WService fomm0270wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 시스템링크관리페이지 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0270wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 시스템링크관리페이지 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		System.out.println(result.getVariables().get("AUTH_YN"));
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			System.out.println(result.getVariables().get("AUTH_YN"));
			fomm0270wSvc.save01(dsData);
		}else {
			System.out.println("1111111111111111111111111111111111111111111");
			return result;
		}
		System.out.println("2222222222222222222222222222222222222222222222");
		dsData = fomm0270wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}