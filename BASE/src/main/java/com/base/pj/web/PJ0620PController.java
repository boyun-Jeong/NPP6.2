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
import com.base.pj.service.PJ0620PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 회의 상세 Controller
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
@RequestMapping("PJ0620P")
public class PJ0620PController {

	private Logger log = LoggerFactory.getLogger(PJ0620PController.class);

	@Autowired
	private PJ0620PService pj0620pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 회의 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = pj0620pSvc.select01(dsCond);
		result.addDataSet("dsPjMeeting", dsData);

		dsData = pj0620pSvc.select02(dsCond);
		result.addDataSet("dsPjMeetAttnd", dsData);

		return result;
	}

	/**
	 * 회의 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjMeeting") List<Map<String, Object>> dsPjMeeting,
								@ParamDataSet(name = "dsPjMeetAttnd") List<Map<String, Object>> dsPjMeetAttnd) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String meetId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			meetId = pj0620pSvc.save01(dsPjMeeting, dsPjMeetAttnd);
		}else {

			return result;
		}

		if(!"".equals(meetId))
		{
			dsCond.put("MEET_ID", meetId);
		}

		dsPjMeeting = pj0620pSvc.select01(dsCond);
		result.addDataSet("dsPjMeeting", dsPjMeeting);
		
		dsPjMeetAttnd = pj0620pSvc.select02(dsCond);
		result.addDataSet("dsPjMeetAttnd", dsPjMeetAttnd);
		
		result.addDataSet("dsCond", dsCond);

		return result;
	}
}