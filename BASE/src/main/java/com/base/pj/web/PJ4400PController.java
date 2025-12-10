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
import com.base.pj.service.PJ4400PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 배치JOB 상세 Controller
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
@RequestMapping("PJ4400P")
public class PJ4400PController {

	private Logger log = LoggerFactory.getLogger(PJ4400PController.class);

	@Autowired
	private PJ4400PService pj4400pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 배치JOB 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj4400pSvc.select01(dsCond);
		result.addDataSet("dsBatchJob", dsData);
		
		dsData = pj4400pSvc.select02(dsCond);
		result.addDataSet("dsReqMap", dsData);
		return result;
	}

	/**
	 * 배치JOB 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsBatchJob") List<Map<String, Object>> dsBatchJob,
								@ParamDataSet(name = "dsReqMap") List<Map<String, Object>> dsReqMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String btjbId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			btjbId = pj4400pSvc.save01(dsBatchJob, dsReqMap);
		}else {

			return result;
		}

		if(!"".equals(btjbId))
		{
			dsCond.put("BTJB_ID", btjbId);
		}
		
		dsBatchJob = pj4400pSvc.select01(dsCond);
		result.addDataSet("dsBatchJob", dsBatchJob);

		dsReqMap = pj4400pSvc.select02(dsCond);
		result.addDataSet("dsReqMap", dsReqMap);
		
		result.addDataSet("dsCond", dsCond);
		return result;
	}
}