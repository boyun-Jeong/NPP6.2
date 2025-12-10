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
import com.base.pj.service.PJ0410PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 보고 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 05.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0410P")
public class PJ0410PController {

	private Logger log = LoggerFactory.getLogger(PJ0410PController.class);

	@Autowired
	private PJ0410PService pj0410pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 보고 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjReport = pj0410pSvc.select01(dsCond);
		result.addDataSet("dsPjReport", dsPjReport);
		return result;
	}

	/**
	 * 보고 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjReport") List<Map<String, Object>> dsPjReport) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String rptId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			rptId = pj0410pSvc.save01(dsPjReport);
		}else {

			return result;
		}
		
		if(!"".equals(rptId))	dsCond.put("REPORT_ID", rptId);
		
		dsPjReport = pj0410pSvc.select01(dsCond);
		result.addDataSet("dsPjReport", dsPjReport);
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}