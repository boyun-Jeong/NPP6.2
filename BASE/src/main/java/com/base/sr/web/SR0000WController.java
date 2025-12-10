package com.base.sr.web;

import java.util.List;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.base.com.service.FommAuthService;
import com.base.sr.service.SR0000WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 공통 처리 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 30.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0000W")
public class SR0000WController {

	private Logger log = LoggerFactory.getLogger(SR0000WController.class);

	@Autowired
	private SR0000WService sr0000wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요청서 기본 정보 기본 정보 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsData = sr0000wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}

	/**
	 * 요청서 공통 처리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr0000wSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = sr0000wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}