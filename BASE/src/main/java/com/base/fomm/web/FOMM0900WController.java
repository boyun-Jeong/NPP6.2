package com.base.fomm.web;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fomm.service.FOMM0900WService;
import com.base.fomm.service.FOMM0950WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지보내기 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Controller
@RequestMapping("FOMM0900W")
public class FOMM0900WController {

	private Logger log = LoggerFactory.getLogger(FOMM0900WController.class);

	@Autowired
	private FOMM0900WService fomm0900wSvc;
	
	@Autowired
	private FOMM0950WService fomm0950wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 쪽지보내기 목록 조회
	 * @param dsCond
	 * @return
	 */
	
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0900wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

  // Memo 테이블 Insert시 Memo_ID(키값)을 가져와야함
	/**
	 * 쪽지보내기 저장
	 * @param dsData
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(
			@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond,
			@ParamDataSet(name = "dsPtMemo", required=false) Map<String, Object> dsPtMemo,
			@ParamDataSet(name = "dsPtMemoRcv") List<Map<String, Object>> dsPtMemoRcv) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		String MEMO_ID = "";
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			//System.out.println("===================Controller===================================");
			MEMO_ID = fomm0900wSvc.save01(dsPtMemo, dsPtMemoRcv);
		}else {
			return result;
		}
		System.out.println("=================== 컨트롤러 Save and New MEMO ID===================================" + MEMO_ID);
		dsCond.put("MEMO_ID", MEMO_ID);
		List<Map<String, Object>> dsData = fomm0950wSvc.select10(dsCond);
		result.addDataSet("ds_new_memo_id", dsData);
		
		return result;
	}
	
	@RequestMapping("/selectMemoDeptUser")
	public NexacroResult selectMemoDeptUser(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsDeptUser = fomm0900wSvc.selectMemoDeptUser(dsCond);
		result.addDataSet("dsDeptUser", dsDeptUser);
		return result;
	}
	
	@RequestMapping("/selectMemoDeptUserList")
	public NexacroResult selectMemoDeptUserList(@ParamVariable(name = "DEPT_CD") String DEPT_CD, @ParamVariable(name = "SCH_NM") String SCH_NM) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUserList = fomm0900wSvc.selectMemoDeptUserList(DEPT_CD, SCH_NM);
		result.addDataSet("dsUserList", dsUserList);
		return result;
	}
	
	@RequestMapping("/selectMemoGrpUser")
	public NexacroResult selectMemoGrpUser(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsDeptUser = fomm0900wSvc.selectMemoGrpUser(dsCond);
		result.addDataSet("dsDeptUser", dsDeptUser);
		return result;
	}	
	
	@RequestMapping("/selectMemoGrpUserList")
	public NexacroResult selectMemoGrpUserList(@ParamVariable(name = "GROUP_ID") String GROUP_ID, @ParamVariable(name = "SCH_NM") String SCH_NM) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUserList = fomm0900wSvc.selectMemoGrpUserList(GROUP_ID, SCH_NM);
		result.addDataSet("dsUserList", dsUserList);
		return result;
	}	
	
	@RequestMapping("/selectUserRtn")
	public NexacroResult selectUserRtn(@ParamDataSet(name = "dsCond") List<Map<String, Object>> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommUserMt = fomm0900wSvc.selectUserRtn(dsCond);
		result.addDataSet("dsFommUserMt", dsFommUserMt);
		return result;
	}
	
	@RequestMapping("/selectMemoUserSingle")
	public NexacroResult selectMemoUserSingle(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsUserList = fomm0900wSvc.selectMemoUserSingle(dsCond);
		result.addDataSet("dsUserList", dsUserList);
		return result;
	}
}