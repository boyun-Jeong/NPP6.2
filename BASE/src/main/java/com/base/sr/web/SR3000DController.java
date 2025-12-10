package com.base.sr.web;

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
import com.base.sr.service.SR3000DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요청관리 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  황채린
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	황채린		최초작성
 */
@Controller
@RequestMapping("SR3000D")
public class SR3000DController {

	private Logger log = LoggerFactory.getLogger(SR3000DController.class);

	@Autowired
	private SR3000DService sr3000dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요청관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr3000dSvc.selectReq(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 요청관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr3000dSvc.saveReq(dsData);
		}else {

			return result;
		}
		dsData = sr3000dSvc.selectReq(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 결재 히스토리에서 IT팀장결재완료 여부 조회
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/selectReqTeamChk")
	public NexacroResult selectReqTeamChk(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> rtnMap = new HashMap<>();
		
		String itTeamYn = sr3000dSvc.selectReqTeamChk(dsCond);
		rtnMap.put("TEAM_YN", itTeamYn);
		
		result.addDataSet("dsCondYn",rtnMap);
		return result;
	}
}