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
import com.base.pj.service.PJ3200PService;

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
@RequestMapping("PJ3200P")
public class PJ3200PController {

	private Logger log = LoggerFactory.getLogger(PJ3200PController.class);

	@Autowired
	private PJ3200PService pj3200pSvc;

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
		
		List<Map<String, Object>> dsData = pj3200pSvc.select01(dsCond);
		result.addDataSet("dsIssue", dsData);

		dsData = pj3200pSvc.select02(dsCond);
		result.addDataSet("dsIssueAction", dsData);
		
		dsCond.put("KEY_TBL", "PJ_ISSUE_ACTION");
		dsCond.put("PK1", dsCond.get("ISSUE_ID"));
		
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
								@ParamDataSet(name = "dsIssue") List<Map<String, Object>> dsIssue,
								@ParamDataSet(name = "dsIssueAction") List<Map<String, Object>> dsIssueAction) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String issueId = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			issueId = pj3200pSvc.save01(dsIssue, dsIssueAction);
		}else {

			return result;
		}
		
		if(!"".equals(issueId))
		{
			dsCond.put("ISSUE_ID", issueId);
		}

		dsIssue = pj3200pSvc.select01(dsCond);
		result.addDataSet("dsIssue", dsIssue);

		dsIssueAction = pj3200pSvc.select02(dsCond);
		result.addDataSet("dsIssueAction", dsIssueAction);

		Map<String, Object> fileDsCond = new HashMap<>();
		
		fileDsCond.put("PK1", dsCond.get("ISSUE_ID"));		
		fileDsCond.put("KEY_TBL", "PJ_ISSUE_ACTION");

		List<Map<String, Object>> dsData = fommMultipartSvc.selectFileList(fileDsCond);
		result.addDataSet("dsFileList", dsData);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}