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
import com.base.pj.service.PJ0920WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 주프로젝트선택 Controller
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
@RequestMapping("PJ0920W")
public class PJ0920WController {

	private Logger log = LoggerFactory.getLogger(PJ0920WController.class);

	@Autowired
	private PJ0920WService pj0920wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 주프로젝트선택 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsPjProject = pj0920wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPjProject", dsPjProject);

		return result;
	}

	/**
	 * 주프로젝트선택 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjProject") List<Map<String, Object>> dsPjProject) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0920wSvc.save01(dsPjProject);
		}else {

			return result;
		}
		dsPjProject = pj0920wSvc.select01(dsCond);
		result.addDataSet("dsPjProject", dsPjProject);
		return result;
	}
}