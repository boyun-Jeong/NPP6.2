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
import com.base.pj.service.PJ4100PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4100P")
public class PJ4100PController {

	private Logger log = LoggerFactory.getLogger(PJ4100PController.class);

	@Autowired
	private PJ4100PService pj4100pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요구관리 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj4100pSvc.select01(dsCond);
		result.addDataSet("dsFunction", dsData);
		
		dsData = pj4100pSvc.select02(dsCond);
		result.addDataSet("dsReqMap", dsData);
		return result;
	}

	/**
	 * 요구관리 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsFunction") List<Map<String, Object>> dsFunction,
								@ParamDataSet(name = "dsReqMap") List<Map<String, Object>> dsReqMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String funcId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			funcId = pj4100pSvc.save01(dsFunction, dsReqMap);
		}else {

			return result;
		}

		if(!"".equals(funcId))
		{
			dsCond.put("FUNC_ID", funcId);
		}
		
		dsFunction = pj4100pSvc.select01(dsCond);
		result.addDataSet("dsFunction", dsFunction);

		dsReqMap = pj4100pSvc.select02(dsCond);
		result.addDataSet("dsReqMap", dsReqMap);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}