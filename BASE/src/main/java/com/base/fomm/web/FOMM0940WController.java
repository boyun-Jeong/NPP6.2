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
import com.base.fomm.service.FOMM0940WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지 그룹 관리 Controller
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
@RequestMapping("FOMM0940W")
public class FOMM0940WController {

	private Logger log = LoggerFactory.getLogger(FOMM0940WController.class);

	@Autowired
	private FOMM0940WService fomm0940wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 쪽지 그룹 관리(개인) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamVariable(name = "admYn") String admYn) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0940wSvc.select01(admYn);
		result.addDataSet("ds_memo_group", dsData);
		return result;
	}
	
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm0940wSvc.select02(dsCond);
		result.addDataSet("ds_memo_group_user", dsData);
		return result;
	}

	/**
	 * 쪽지 그룹 관리(개인) 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamVariable(name = "admYn") String admYn
			, @ParamDataSet(name = "ds_memo_group") List<Map<String, Object>> ds_memo_group, @ParamDataSet(name = "ds_memo_group_user") List<Map<String, Object>> ds_memo_group_user) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0940wSvc.save01(ds_memo_group, ds_memo_group_user);
		}else {
			return result;
		}
		ds_memo_group = fomm0940wSvc.select01(admYn);
		result.addDataSet("ds_memo_group", ds_memo_group);
		return result;
	}
}