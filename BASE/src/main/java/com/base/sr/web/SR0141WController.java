package com.base.sr.web;

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
import com.base.sr.service.SR0141WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 검토함 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0141W")
public class SR0141WController {

	private Logger log = LoggerFactory.getLogger(SR0141WController.class);

	@Autowired
	private SR0141WService sr0141wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 검토함 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		List<Map<String, Object>> dsData = sr0141wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}

	
	
	
	/**
	 * 검토함 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			sr0141wSvc.save01(dsData);
		}else {
			return result;
		}
		
		dsData = sr0141wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}