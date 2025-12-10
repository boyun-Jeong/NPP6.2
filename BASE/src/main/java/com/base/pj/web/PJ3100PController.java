package com.base.pj.web;

import java.util.HashMap;
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
import com.base.com.service.FommMultipartService;
import com.base.pj.service.PJ3100PService;

/**
 * 
 * <pre>
 * @title
 * - Action Item 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3100P")
public class PJ3100PController {

	private Logger log = LoggerFactory.getLogger(PJ3100PController.class);

	@Autowired
	private PJ3100PService pj3100pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	@Autowired
	private FommMultipartService fommMultipartSvc;

	/**
	 * Action Item 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj3100pSvc.select01(dsCond);
		result.addDataSet("dsRisk", dsData);

		dsData = pj3100pSvc.select02(dsCond);
		result.addDataSet("dsRiskAction", dsData);
		
		dsCond.put("KEY_TBL", "PJ_RISK_ACTION");
		dsCond.put("PK1", dsCond.get("RISK_ID"));
		
		dsData = fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFileList", dsData);
		return result;
	}

	/**
	 * Action Item 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsRisk") List<Map<String, Object>> dsRisk,
								@ParamDataSet(name = "dsRiskAction") List<Map<String, Object>> dsRiskAction) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String riskId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			riskId = pj3100pSvc.save01(dsRisk, dsRiskAction);
		}else {

			return result;
		}
		
		if(!"".equals(riskId))
		{
			dsCond.put("RISK_ID", riskId);
		}

		dsRisk = pj3100pSvc.select01(dsCond);
		result.addDataSet("dsRisk", dsRisk);

		dsRiskAction = pj3100pSvc.select02(dsCond);
		result.addDataSet("dsRiskAction", dsRiskAction);

		Map<String, Object> fileDsCond = new HashMap<>();
		
		fileDsCond.put("PK1", dsCond.get("RISK_ID"));		
		fileDsCond.put("KEY_TBL", "PJ_RISK_ACTION");

		List<Map<String, Object>> dsData = fommMultipartSvc.selectFileList(fileDsCond);
		result.addDataSet("dsFileList", dsData);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}