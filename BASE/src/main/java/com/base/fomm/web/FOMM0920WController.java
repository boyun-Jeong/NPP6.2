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
import com.base.fomm.service.FOMM0920WService;
import com.base.fomm.service.FOMM0910WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지수신함 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Controller
@RequestMapping("FOMM0920W")
public class FOMM0920WController {

	private Logger log = LoggerFactory.getLogger(FOMM0920WController.class);

	@Autowired
	private FOMM0920WService fomm0920wSvc;
	
	@Autowired
	private FOMM0910WService fomm0910wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 쪽지수신함 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0920wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 쪽지수신함 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "ds_pt_memo_lst") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0920wSvc.save01(dsData);
		}else {

			return result;
		}
		//dsData = fomm0920wSvc.select01(dsCond);
		dsData = fomm0910wSvc.select02(dsCond);
		result.addDataSet("ds_pt_memo_lst", dsData);
		return result;
	}
}