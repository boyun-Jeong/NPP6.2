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
import com.base.pj.service.PJ5600PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 결함 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 14.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5600P")
public class PJ5600PController {

	private Logger log = LoggerFactory.getLogger(PJ5600PController.class);

	@Autowired
	private PJ5600PService pj5600pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 시나리오 결함 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsStDefect = pj5600pSvc.select01(dsCond);
		result.addDataSet("dsStDefect", dsStDefect);
		return result;
	}

	/**
	 * 시나리오 결함 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsStDefect") List<Map<String, Object>> dsStDefect) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String stdftId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			stdftId = pj5600pSvc.save01(dsStDefect);
		}else {
			return result;
		}

		if(!"".equals(stdftId))
		{
			dsCond.put("STDFT_ID", stdftId);
		}

		dsStDefect = pj5600pSvc.select01(dsCond);
		result.addDataSet("dsStDefect", dsStDefect);
		
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}