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
import com.base.fomm.service.FOMM1200WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 서식관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 17.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM1200W")
public class FOMM1200WController {

	private Logger log = LoggerFactory.getLogger(FOMM1200WController.class);

	@Autowired
	private FOMM1200WService fomm1200wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 서식관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectCatNh")
	public NexacroResult selectCatNh(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1200wSvc.selectCatNh(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 서식관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		//NexacroResult result = new NexacroResult();

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm1200wSvc.save01(dsData);
			
			dsData = fomm1200wSvc.selectCatNh(dsCond);
			result.addDataSet("dsData", dsData);
		}else {
			return result;
		}

		return result;
	}
	
	@RequestMapping("/chkDupCatNh")
	public NexacroResult chkDupCatNh(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1200wSvc.chkDupCatNh(dsCond);
		result.addDataSet("dsData", dsData);
		result.addVariable("rstCnt", (dsData.get(0)).get("RST_CNT"));
		
		return result;
	}

}