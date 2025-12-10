package com.base.pj.web;

import java.util.ArrayList;
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
import com.base.pj.service.PJ5400PService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ5400P")
public class PJ5400PController {

	private Logger log = LoggerFactory.getLogger(PJ5400PController.class);

	@Autowired
	private PJ5400PService pj5400pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 시나리오 테스트 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = new ArrayList<Map<String,Object>>();
		
		try {
			dsData = pj5400pSvc.select01(dsCond);
			result.addDataSet("dsScnrTest", dsData);
		}catch(Exception e) {}

		dsData = pj5400pSvc.select02(dsCond);
		result.addDataSet("dsStDefect", dsData);

		dsData = pj5400pSvc.select03(dsCond);
		result.addDataSet("dsScrMap", dsData);

		dsData = pj5400pSvc.select04(dsCond);
		result.addDataSet("dsBatchjobMap", dsData);

		dsData = pj5400pSvc.select05(dsCond);
		result.addDataSet("dsInfMap", dsData);

		return result;
	}

	/**
	 * 시나리오 테스트 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsScnrTest") List<Map<String, Object>> dsScnrTest,
								@ParamDataSet(name = "dsScrMap") List<Map<String, Object>> dsScrMap,
								@ParamDataSet(name = "dsBatchjobMap") List<Map<String, Object>> dsBatchjobMap,
								@ParamDataSet(name = "dsInfMap") List<Map<String, Object>> dsInfMap
								) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String stestId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			stestId = pj5400pSvc.save01(dsScnrTest, dsScrMap, dsBatchjobMap, dsInfMap);
		}else {

			return result;
		}
		
		if(!"".equals(stestId))
		{
			dsCond.put("STEST_ID", stestId);
		}
		
		try {
			dsScnrTest = pj5400pSvc.select01(dsCond);
			result.addDataSet("dsScnrTest", dsScnrTest);
		}catch(Exception e) {}
		

		dsScnrTest = pj5400pSvc.select02(dsCond);
		result.addDataSet("dsStDefect", dsScnrTest);

		dsScrMap = pj5400pSvc.select03(dsCond);
		result.addDataSet("dsScrMap", dsScrMap);

		dsBatchjobMap = pj5400pSvc.select04(dsCond);
		result.addDataSet("dsBatchjobMap", dsBatchjobMap);

		dsInfMap = pj5400pSvc.select05(dsCond);
		result.addDataSet("dsInfMap", dsInfMap);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}