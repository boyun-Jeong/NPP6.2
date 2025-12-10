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
import com.base.pj.service.PJ4200PService;
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
@RequestMapping("PJ4200P")
public class PJ4200PController {

	private Logger log = LoggerFactory.getLogger(PJ4200PController.class);

	@Autowired
	private PJ4200PService pj4200pSvc;

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
		
		List<Map<String, Object>> dsData = pj4200pSvc.select01(dsCond);
		result.addDataSet("dsScreen", dsData);
		
		dsData = pj4200pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsData);
		return result;
	}

	/**
	 * 요구관리 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsScreen") List<Map<String, Object>> dsScreen,
								@ParamDataSet(name = "dsFuncMap") List<Map<String, Object>> dsFuncMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String scrId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			scrId = pj4200pSvc.save01(dsScreen, dsFuncMap);
		}else {

			return result;
		}

		if(!"".equals(scrId))
		{
			dsCond.put("SCR_ID", scrId);
		}
		
		dsScreen = pj4200pSvc.select01(dsCond);
		result.addDataSet("dsScreen", dsScreen);

		dsFuncMap = pj4200pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsFuncMap);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}