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
import com.base.pj.service.PJ1910PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 품질 이행 평가 관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1910P")
public class PJ1910PController {

	private Logger log = LoggerFactory.getLogger(PJ1910PController.class);

	@Autowired
	private PJ1910PService pj1910pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 품질 이행 평가 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj1910pSvc.select01(dsCond);		
		result.addDataSet("dsPjProject", dsData);		
		
		dsData = pj1910pSvc.select02(dsCond);
		result.addDataSet("dsPjQaRstDisp", dsData);
		
		dsData = pj1910pSvc.select03(dsCond);
		result.addDataSet("dsPjQaRst", dsData);

		return result;
	}

	/**
	 * 품질 이행 평가 관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjQaRst") List<Map<String, Object>> dsPjQaRst) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj1910pSvc.save01(dsPjQaRst);
		}else {

			return result;
		}

		List<Map<String, Object>> dsData = pj1910pSvc.select01(dsCond);		
		result.addDataSet("dsPjProject", dsData);		
		
		dsData = pj1910pSvc.select02(dsCond);
		result.addDataSet("dsPjQaRstDisp", dsData);
		
		dsData = pj1910pSvc.select03(dsCond);
		result.addDataSet("dsPjQaRst", dsData);

		return result;
	}
}