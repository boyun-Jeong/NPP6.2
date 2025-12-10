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
import com.base.pj.service.PJ4600PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 상세 Controller
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
@RequestMapping("PJ4600P")
public class PJ4600PController {

	private Logger log = LoggerFactory.getLogger(PJ4600PController.class);

	@Autowired
	private PJ4600PService pj4600pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 프로그램 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj4600pSvc.select01(dsCond);
		result.addDataSet("dsProgram", dsData);
		
		dsData = pj4600pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsData);

		return result;
	}

	/**
	 * 프로그램 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsProgram") List<Map<String, Object>> dsProgram,
								@ParamDataSet(name = "dsFuncMap") List<Map<String, Object>> dsFuncMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String prgId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			prgId = pj4600pSvc.save01(dsProgram, dsFuncMap);
		}else {

			return result;
		}

		if(!"".equals(prgId))
		{
			dsCond.put("PRG_ID", prgId);
		}
		
		dsProgram = pj4600pSvc.select01(dsCond);
		result.addDataSet("dsProgram", dsProgram);

		dsFuncMap = pj4600pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsFuncMap);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}