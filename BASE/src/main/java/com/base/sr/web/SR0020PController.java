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
import com.base.com.service.FommAuthService;
import com.base.sr.service.SR0020PService;

/**
 * 
 * <pre>
 * @title
 * - 결재선 지정 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 20.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0020P")
public class SR0020PController {

	private Logger log = LoggerFactory.getLogger(SR0020PController.class);

	@Autowired
	private SR0020PService sr0020pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 결재자 검색
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsUser = sr0020pSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUser", dsUser);

		return result;
	}
	
	/**
	 * 나의 결재 그룹 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWfApprovalBoxM = sr0020pSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfApprovalBoxM", dsWfApprovalBoxM);

		return result;
	}
	
	/**
	 * 나의 결재 그룹 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWfApprovalBoxD = sr0020pSvc.select03(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfApprovalBoxD", dsWfApprovalBoxD);

		return result;
	}

	/**
	 * 나의 결재 그룹 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsWfApprovalBoxM = sr0020pSvc.select02(dsCond);
		result.addDataSet("dsWfApprovalBoxM", dsWfApprovalBoxM);
		
		List<Map<String, Object>> dsWfApprovalBoxD = sr0020pSvc.select03(dsCond);
		result.addDataSet("dsWfApprovalBoxD", dsWfApprovalBoxD);

		return result;
	}

	/**
	 * 나의 결재선 마스터 등록
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsWfApprovalBoxM") List<Map<String, Object>> dsWfApprovalBoxM) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {

//			int boxSeq = 
			sr0020pSvc.save01(dsWfApprovalBoxM);	//, dsWfApprovalBoxD
//			Map<String, Object> rtnMap = new HashMap<>();
//			rtnMap.put("BOX_SEQ", boxSeq);
//			result.addDataSet("dsRtn", rtnMap);
			
			dsWfApprovalBoxM = sr0020pSvc.select02(dsCond);
			result.addDataSet("dsWfApprovalBoxM", dsWfApprovalBoxM);

		}else {
			return result;
		}
		return result;
	}
	
	/**
	 * 나의 결재선 변경
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(@ParamDataSet(name = "dsWfApprovalBoxD") List<Map<String, Object>> dsWfApprovalBoxD) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {
			sr0020pSvc.save02(dsWfApprovalBoxD);

			Map<String, Object> condMap = new HashMap<>();
			List<Map<String, Object>> dsWfApprovalBoxM = sr0020pSvc.select02(condMap);
			result.addDataSet("dsWfApprovalBoxM", dsWfApprovalBoxM);
			
			dsWfApprovalBoxD = sr0020pSvc.select03(condMap);
			result.addDataSet("dsWfApprovalBoxD", dsWfApprovalBoxD);

		}else {
			return result;
		}
		return result;
	}
}