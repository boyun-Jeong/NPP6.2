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
import com.base.pj.service.PJ4700PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 보고서 상세 Controller
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
@RequestMapping("PJ4700P")
public class PJ4700PController {

	private Logger log = LoggerFactory.getLogger(PJ4700PController.class);

	@Autowired
	private PJ4700PService pj4700pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 보고서 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj4700pSvc.select01(dsCond);
		result.addDataSet("dsReportprg", dsData);
		
		dsData = pj4700pSvc.select02(dsCond);
		result.addDataSet("dsScrMap", dsData);

		dsData = pj4700pSvc.select03(dsCond);
		result.addDataSet("dsBatchjobMap", dsData);

		dsData = pj4700pSvc.select04(dsCond);
		result.addDataSet("dsFuncMap", dsData);

		dsData = pj4700pSvc.select05(dsCond);
		result.addDataSet("dsReqMap", dsData);

		return result;
	}

	/**
	 * 보고서 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsReportprg") List<Map<String, Object>> dsReportprg,
								@ParamDataSet(name = "dsScrMap") List<Map<String, Object>> dsScrMap,
								@ParamDataSet(name = "dsBatchjobMap") List<Map<String, Object>> dsBatchjobMap,
								@ParamDataSet(name = "dsFuncMap") List<Map<String, Object>> dsFuncMap,
								@ParamDataSet(name = "dsReqMap") List<Map<String, Object>> dsReqMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String rpprId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			rpprId = pj4700pSvc.save01(dsReportprg, dsScrMap, dsBatchjobMap, dsFuncMap, dsReqMap);
		}else {

			return result;
		}

		if(!"".equals(rpprId))
		{
			dsCond.put("RPPR_ID", rpprId);
		}
		
		dsReportprg = pj4700pSvc.select01(dsCond);
		result.addDataSet("dsReportprg", dsReportprg);

		dsScrMap = pj4700pSvc.select02(dsCond);
		result.addDataSet("dsScrMap", dsScrMap);

		dsBatchjobMap = pj4700pSvc.select03(dsCond);
		result.addDataSet("dsBatchjobMap", dsBatchjobMap);

		dsFuncMap = pj4700pSvc.select04(dsCond);
		result.addDataSet("dsFuncMap", dsFuncMap);

		dsReqMap = pj4700pSvc.select05(dsCond);
		result.addDataSet("dsReqMap", dsReqMap);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}