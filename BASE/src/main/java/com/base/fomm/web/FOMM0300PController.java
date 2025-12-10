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
import com.base.fomm.service.FOMM0300PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 작업스케쥴 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 18.	이정빈		최초작성
 */
@Controller
@RequestMapping("FOMM0300P")
public class FOMM0300PController {

	private Logger log = LoggerFactory.getLogger(FOMM0300PController.class);

	@Autowired
	private FOMM0300PService fomm0300pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 작업스케쥴 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> dsWorkList = fomm0300pSvc.select01(dsCond);
			result.addDataSet("dsWorkList", dsWorkList);
		}catch(Exception e) {}
		return result;
	}

	/**
	 * 작업스케쥴 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsWorkList") List<Map<String, Object>> dsWorkList) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0300pSvc.save01(dsWorkList);
		}else {

			return result;
		}
		dsWorkList = fomm0300pSvc.select01(dsCond);
		result.addDataSet("dsWorkList", dsWorkList);
		return result;
	}
}