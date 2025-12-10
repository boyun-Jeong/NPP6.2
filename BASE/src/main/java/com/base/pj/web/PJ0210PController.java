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
import com.base.pj.service.PJ0210PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 등록/수정 상세조회 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 14.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0210P")
public class PJ0210PController {

	private Logger log = LoggerFactory.getLogger(PJ0210PController.class);

	@Autowired
	private PJ0210PService pj0210pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 프로젝트 등록/수정 상세조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsProject = pj0210pSvc.select01(dsCond);

		result.addDataSet("dsProject", dsProject);
		
		List<Map<String, Object>> dsProjectItem = pj0210pSvc.select02(dsCond);

		result.addDataSet("dsProjectItem", dsProjectItem);

		return result;
	}

	/**
	 * 프로젝트 등록/수정 상세조회 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsProject") List<Map<String, Object>> dsProject,
								@ParamDataSet(name = "dsProjectItem") List<Map<String, Object>> dsProjectItem) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		
		String pjtId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pjtId = pj0210pSvc.save01(dsProject, dsProjectItem);
		}else {

			return result;
		}
		
		if(!"".equals(pjtId))	dsCond.put("PJT_ID", pjtId);
		
		dsProject = pj0210pSvc.select01(dsCond);
		result.addDataSet("dsProject", dsProject);
		
		dsProjectItem = pj0210pSvc.select02(dsCond);
		result.addDataSet("dsProjectItem", dsProjectItem);
		
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}