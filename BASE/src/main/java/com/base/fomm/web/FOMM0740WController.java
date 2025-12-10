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
import com.base.fomm.service.FOMM0740WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 관리자IP 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM0740W")
public class FOMM0740WController {

	private Logger log = LoggerFactory.getLogger(FOMM0740WController.class);

	@Autowired
	private FOMM0740WService fomm0740wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 관리자IP 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0740wSvc.select01(dsCond);
		result.addDataSet("dsFOMM_USER_ADMIN", dsData);
		return result;
	}
	
	/**
	 * 관리자IP 관리 저장전 중복체크
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select_save_chk01")
	public NexacroResult select_save_chk01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0740wSvc.select01(dsCond);
		result.addDataSet("dsFOMM_USER_ADMIN_chk", dsData);
		return result;
	}

	/**
	 * 관리자IP 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsFOMM_USER_ADMIN") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0740wSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = fomm0740wSvc.select01(dsCond);
		result.addDataSet("dsFOMM_USER_ADMIN", dsData);
		return result;
	}
}