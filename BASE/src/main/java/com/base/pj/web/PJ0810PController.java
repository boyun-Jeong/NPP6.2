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
import com.base.pj.service.PJ0810PService;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 서브프로젝트상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0810P")
public class PJ0810PController {

	private Logger log = LoggerFactory.getLogger(PJ0810PController.class);

	@Autowired
	private PJ0810PService pj0810pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 서브프로젝트상세 상세 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj0810pSvc.select01(dsCond);
		result.addDataSet("dsPjProject", dsData);
		
		dsData = pj0810pSvc.select02(dsCond);
		result.addDataSet("dsBizItem", dsData);

		return result;
	}
	
	/**
	 * 방법론 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02() throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsPjMethod = pj0810pSvc.select03();
		result.addDataSet("dsPjMethod", dsPjMethod);
		return result;
	}

	/**
	 * 서브프로젝트상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjProject") List<Map<String, Object>> dsPjProject,
								@ParamDataSet(name = "dsBizItem") List<Map<String, Object>> dsBizItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String pjtId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			String oriMethodId = StringUtil.safe(dsCond.get("ORI_METHOD_ID"));
			pjtId = pj0810pSvc.save01(dsPjProject, dsBizItem, oriMethodId);
		}else {

			return result;
		}

		if(!"".equals(pjtId))	dsCond.put("PJT_ID", pjtId);

		dsPjProject = pj0810pSvc.select01(dsCond);
		result.addDataSet("dsPjProject", dsPjProject);
		
		dsBizItem = pj0810pSvc.select02(dsCond);
		result.addDataSet("dsBizItem", dsBizItem);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}