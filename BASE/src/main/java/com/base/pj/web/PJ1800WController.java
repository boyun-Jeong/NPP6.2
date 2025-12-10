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
import com.base.pj.service.PJ1800WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 업체평가 조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 21.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1800W")
public class PJ1800WController {

	private Logger log = LoggerFactory.getLogger(PJ1800WController.class);

	@Autowired
	private PJ1800WService pj1800wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 업체평가 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsPjProject = pj1800wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPjProject", dsPjProject);

		return result;
	}

	/**
	 * 업체평가 조회 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjProject") List<Map<String, Object>> dsPjProject) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj1800wSvc.save01(dsPjProject);
		}else {

			return result;
		}
		dsPjProject = pj1800wSvc.select01(dsCond);
		result.addDataSet("dsPjProject", dsPjProject);
		return result;
	}
}