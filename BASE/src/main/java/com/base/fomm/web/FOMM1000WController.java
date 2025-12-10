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
import com.base.fomm.service.FOMM1000WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 자동저장 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 12. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 12. 03.	이훈석		최초작성
 */
@Controller
@RequestMapping("FOMM1000W")
public class FOMM1000WController {

	private Logger log = LoggerFactory.getLogger(FOMM1000WController.class);

	@Autowired
	private FOMM1000WService fomm1000wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 자동저장 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1000wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 자동저장 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsAutoSaveList") List<Map<String, Object>> dsAutoSaveList
								, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) 
		{
			fomm1000wSvc.save01(dsAutoSaveList);
		}else {
			return result;
		}
		
		dsAutoSaveList = fomm1000wSvc.select01(dsCond);
		result.addDataSet("dsAutoSaveList", dsAutoSaveList);
		return result;
	}
}