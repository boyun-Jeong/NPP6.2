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
import com.base.pj.service.PJ1000WService;
import com.base.com.service.FommAuthService;
import com.base.com.service.FommMultipartService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ1000W")
public class PJ1000WController {

	private Logger log = LoggerFactory.getLogger(PJ1000WController.class);

	@Autowired
	private PJ1000WService pj1000wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Autowired
	private FommMultipartService fommMultipartSvc;

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
//	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
	public NexacroResult select01() throws NexacroException {
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsPjMethod = pj1000wSvc.select01();
		result.addDataSet("dsPjMethod", dsPjMethod);
		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj1000wSvc.select02(dsCond);
		result.addDataSet("dsPjMethodDlvr", dsData);
		
		dsCond.put("KEY_TBL", "PJ_METHOD_DLVR");
		dsCond.put("PK1", dsCond.get("METHOD_ID"));
		
		dsData = fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFileList", dsData);
		
		return result;
	}

	/**
	 * 방법론/산출물정의 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjMethod") List<Map<String, Object>> dsPjMethod,
								@ParamDataSet(name = "dsPjMethodDlvr") List<Map<String, Object>> dsPjMethodDlvr) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String methodId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			methodId = pj1000wSvc.save01(dsPjMethod, dsPjMethodDlvr);
		}else {

			return result;
		}
		dsPjMethod = pj1000wSvc.select01();
		result.addDataSet("dsPjMethod", dsPjMethod);

		dsCond.put("METHOD_ID", "".equals(methodId) ? StringUtil.safe(dsCond.get("METHOD_ID")) : methodId);
		
		dsPjMethodDlvr = pj1000wSvc.select02(dsCond);
		result.addDataSet("dsPjMethodDlvr", dsPjMethodDlvr);
		
		dsCond.put("KEY_TBL", "PJ_METHOD_DLVR");
		dsCond.put("PK1", dsCond.get("METHOD_ID"));
		
		List<Map<String, Object>> dsFile = fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFileList", dsFile);

		result.addDataSet("dsCond", dsCond);

		return result;
	}
}