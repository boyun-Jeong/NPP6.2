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
import com.base.pj.service.PJ0500WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - ACTION ITEM 관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0500W")
public class PJ0500WController {

	private Logger log = LoggerFactory.getLogger(PJ0500WController.class);

	@Autowired
	private PJ0500WService pj0500wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * ACTION ITEM 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsPjActionItem = pj0500wSvc.select01(dsCond);
		result.addDataSet("dsPjActionItem", dsPjActionItem);
		return result;
	}

	/**
	 * ACTION ITEM 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjActionItem") List<Map<String, Object>> dsPjActionItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0500wSvc.save01(dsPjActionItem);
		}else {

			return result;
		}
		dsPjActionItem = pj0500wSvc.select01(dsCond);
		result.addDataSet("dsPjActionItem", dsPjActionItem);
		return result;
	}
}