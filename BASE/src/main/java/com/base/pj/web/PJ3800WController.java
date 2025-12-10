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
import com.base.pj.service.PJ3800WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 26.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3800W")
public class PJ3800WController {

	private Logger log = LoggerFactory.getLogger(PJ3800WController.class);

	@Autowired
	private PJ3800WService pj3800wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요구관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsReqment = pj3800wSvc.select01(dsCond);
		result.addDataSet("dsReqment", dsReqment);
		return result;
	}

	/**
	 * 요구관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsReqment") List<Map<String, Object>> dsReqment) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj3800wSvc.save01(dsReqment);
		}else {

			return result;
		}
		dsReqment = pj3800wSvc.select01(dsCond);
		result.addDataSet("dsReqment", dsReqment);
		return result;
	}
}