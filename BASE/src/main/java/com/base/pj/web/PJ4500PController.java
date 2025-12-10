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
import com.base.pj.service.PJ4500PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 배치프로그램 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ4500P")
public class PJ4500PController {

	private Logger log = LoggerFactory.getLogger(PJ4500PController.class);

	@Autowired
	private PJ4500PService pj4500pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 배치프로그램 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj4500pSvc.select01(dsCond);
		result.addDataSet("dsBatchPrg", dsData);
		
		dsData = pj4500pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsData);

		dsData = pj4500pSvc.select03(dsCond);
		result.addDataSet("dsBatchjobMap", dsData);
		return result;
	}

	/**
	 * 배치프로그램 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsBatchPrg") List<Map<String, Object>> dsBatchPrg,
								@ParamDataSet(name = "dsFuncMap") List<Map<String, Object>> dsFuncMap,
								@ParamDataSet(name = "dsBatchjobMap") List<Map<String, Object>> dsBatchjobMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String btprId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			btprId = pj4500pSvc.save01(dsBatchPrg, dsFuncMap, dsBatchjobMap);
		}else {

			return result;
		}

		if(!"".equals(btprId))
		{
			dsCond.put("BTPR_ID", btprId);
		}
		
		dsBatchPrg = pj4500pSvc.select01(dsCond);
		result.addDataSet("dsBatchPrg", dsBatchPrg);

		dsFuncMap = pj4500pSvc.select02(dsCond);
		result.addDataSet("dsFuncMap", dsFuncMap);
		
		dsBatchjobMap = pj4500pSvc.select03(dsCond);
		result.addDataSet("dsBatchjobMap", dsBatchjobMap);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}