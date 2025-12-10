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
import com.base.pj.service.PJ5200PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 단위결함 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
@Controller
@RequestMapping("PJ5200P")
public class PJ5200PController {

	private Logger log = LoggerFactory.getLogger(PJ5200PController.class);

	@Autowired
	private PJ5200PService pj5200pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 단위결함 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsUtDefect = pj5200pSvc.select01(dsCond);
		result.addDataSet("dsUtDefect", dsUtDefect);
		return result;
	}

	/**
	 * 단위결함 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsUtDefect") List<Map<String, Object>> dsUtDefect) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String utdftId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			utdftId = pj5200pSvc.save01(dsUtDefect);
		}else {

			return result;
		}

		if(!"".equals(utdftId))	dsCond.put("UTDFT_ID", utdftId);
		
		dsUtDefect = pj5200pSvc.select01(dsCond);
		result.addDataSet("dsUtDefect", dsUtDefect);
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}