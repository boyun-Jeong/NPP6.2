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
import com.base.com.service.FommAuthService;
import com.base.pj.service.PJ2400WService;
import com.base.pj.service.PJ2500WService;

/**
 * 
 * <pre>
 * @title
 * - 인력별 프로젝트 조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 19.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ2500W")
public class PJ2500WController {

	private Logger log = LoggerFactory.getLogger(PJ2500WController.class);

	@Autowired
	private PJ2400WService pj2400wSvc;

	@Autowired
	private PJ2500WService pj2500wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 인력별 프로젝트 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUser = pj2500wSvc.select01(dsCond);
		result.addDataSet("dsUser", dsUser);
		return result;
	}

	/**
	 * 인력별 프로젝트 조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjProject = pj2500wSvc.select02(dsCond);
		result.addDataSet("dsPjProject", dsPjProject);
		return result;
	}

	/**
	 * 인력별 프로젝트 조회 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjProject") List<Map<String, Object>> dsPjProject) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj2400wSvc.save01(dsPjProject);
		}else {

			return result;
		}
		dsPjProject = pj2500wSvc.select02(dsCond);
		result.addDataSet("dsPjProject", dsPjProject);
		return result;
	}
}