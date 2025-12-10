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
import com.base.pj.service.PJ1100PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 교육 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 14.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1100P")
public class PJ1100PController {

	private Logger log = LoggerFactory.getLogger(PJ1100PController.class);

	@Autowired
	private PJ1100PService pj1100pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 교육 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = pj1100pSvc.select01(dsCond);
		result.addDataSet("dsPjEducation", dsData);

		dsData = pj1100pSvc.select02(dsCond);
		result.addDataSet("dsPjEduAttnd", dsData);

		return result;
	}

	/**
	 * 교육 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjEducation") List<Map<String, Object>> dsPjEducation,
								@ParamDataSet(name = "dsPjEduAttnd") List<Map<String, Object>> dsPjEduAttnd) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String eduId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			eduId = pj1100pSvc.save01(dsPjEducation, dsPjEduAttnd);
		}else {

			return result;
		}

		if(!"".equals(eduId))
		{
			dsCond.put("EDU_ID", eduId);
		}

		dsPjEducation = pj1100pSvc.select01(dsCond);
		result.addDataSet("dsPjEducation", dsPjEducation);
		
		dsPjEduAttnd = pj1100pSvc.select02(dsCond);
		result.addDataSet("dsPjEduAttnd", dsPjEduAttnd);

		return result;
	}
}