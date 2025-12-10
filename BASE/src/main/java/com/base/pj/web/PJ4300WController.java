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
import com.base.pj.service.PJ4300WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 화면목록 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 31.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4300W")
public class PJ4300WController {

	private Logger log = LoggerFactory.getLogger(PJ4300WController.class);

	@Autowired
	private PJ4300WService pj4300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 화면목록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> dsInterface = pj4300wSvc.select01(dsCond);
			result.addDataSet("dsInterface", dsInterface);
		}catch(Exception e) {
			result.setErrorCode(-1000);
		}
		
		return result;
	}

	/**
	 * 화면목록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsInterface") List<Map<String, Object>> dsInterface) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj4300wSvc.save01(dsInterface);
		}else {

			return result;
		}
		try {
			dsInterface = pj4300wSvc.select01(dsCond);
			result.addDataSet("dsInterface", dsInterface);
		}catch(Exception e) {}
		return result;
	}
}