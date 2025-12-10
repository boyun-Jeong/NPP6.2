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
import com.base.fomm.service.FOMM0122WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - FOMM0122W Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  노익현
 * @since   2024. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 13.	노익현		최초작성
 */
@Controller
@RequestMapping("FOMM0122W")
public class FOMM0122WController {

	private Logger log = LoggerFactory.getLogger(FOMM0122WController.class);

	@Autowired
	private FOMM0122WService fomm0122wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * FOMM0122W 목록 코드
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData1 = fomm0122wSvc.select01(dsCond); // 확장권한 리스트
		List<Map<String, Object>> dsData2 = fomm0122wSvc.select02(dsCond); // 확장권한 리스트
		result.addDataSet("dsExtdCd", dsData1);
		result.addDataSet("dsAuthCd", dsData2);
		return result;
	}
	/**
	 * FOMM0122W 목록 권한
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0122wSvc.select03(dsCond); // 확장권한 리스트
		
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	/**
	 * FOMM0122W 해지 목록 권한
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0122wSvc.select04(dsCond); // 해지 권한 리스트
		
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	/**
	 * FOMM0122W history저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsAuthHisList") List<Map<String, Object>> dsAuthHisList) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0122wSvc.save01(dsAuthHisList);
		}else {

			return result;
		}


		return result;
	}
}