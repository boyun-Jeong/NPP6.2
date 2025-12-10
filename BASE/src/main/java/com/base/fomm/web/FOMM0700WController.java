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
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.fomm.service.FOMM0700WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 표준 체크리스트 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	김미성		최초작성
 */
@Controller
@RequestMapping("FOMM0700W")
public class FOMM0700WController {

	private Logger log = LoggerFactory.getLogger(FOMM0700WController.class);

	@Autowired
	private FOMM0700WService fomm0700wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 표준 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		String chklstIdStr = StringUtil.safe(dsCond.get("CHKLST_ID_STR"));
		String[] chklstIdArr = chklstIdStr.split(",");
		
		dsCond.put("CHKLST_ID_ARR", chklstIdArr);

		List<Map<String, Object>> dsFommChklst = fomm0700wSvc.select01(dsCond);
		result.addDataSet("dsFommChklst", dsFommChklst);
		return result;
	}
	
	/**
	 * 표준 체크리스트 서브 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommChkSublst = fomm0700wSvc.select02(dsCond);
		result.addDataSet("dsFommChkSublst", dsFommChkSublst);
		return result;
	}
	
	/**
	 * 표준 체크리스트 팝업 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String chklstIdStr = StringUtil.safe(dsCond.get("CHKLST_ID_STR"));
		String[] chklstIdArr = chklstIdStr.split(",");
		
		dsCond.put("CHKLST_ID_ARR", chklstIdArr);

		List<Map<String, Object>> dsData = fomm0700wSvc.select01(dsCond);
		result.addDataSet("dsFommChklst", dsData);
		
		dsData = fomm0700wSvc.select03(dsCond);
		result.addDataSet("dsFommChklstGrd", dsData);
		
		
		return result;
	}
	
	/**
	 * 표준 체크리스트 제외문항 팝업 목록조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommChklstExl = fomm0700wSvc.select04(dsCond);
		result.addDataSet("dsFommChklstExl", dsFommChklstExl);
		return result;
	}

	/**
	 * 표준 체크리스트 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsFommChklst") List<Map<String, Object>> dsFommChklst,
								@ParamDataSet(name = "dsFommChklstGrd") List<Map<String, Object>> dsFommChklstGrd) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String chklstId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			chklstId = fomm0700wSvc.save01(dsFommChklst, dsFommChklstGrd);
			
		}else {

			return result;
		}
		
		if(!"".equals(chklstId))
		{
			dsCond.put("CHKLST_ID", chklstId);
		}
		
		dsFommChklst = fomm0700wSvc.select01(dsCond);		
		result.addDataSet("dsFommChklst", dsFommChklst);

		dsFommChklstGrd = fomm0700wSvc.select03(dsCond);		
		result.addDataSet("dsFommChklstGrd", dsFommChklstGrd);

		result.addDataSet("dsCond", dsCond);
		
		return result;
	}
	
	/**
	 * 표준 체크리스트 질문저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsFommChklstQ") List<Map<String, Object>> dsFommChklstQ) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String chklstId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			chklstId = fomm0700wSvc.save02(dsFommChklstQ);
			
		}else {

			return result;
		}		
		
		dsFommChklstQ = fomm0700wSvc.select03(dsCond);		
		result.addDataSet("dsFommChklstQ", dsFommChklstQ);		

		result.addDataSet("dsCond", dsCond);
		
		return result;
	}
	
	/**
	 * 표준 체크리스트 제외문항 팝업 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save03")
	public NexacroResult save03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsFommChklstExl") List<Map<String, Object>> dsFommChklstExl) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String chklstId = "";
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			chklstId = fomm0700wSvc.save03(dsFommChklstExl);
			
		}else {

			return result;
		}		
		
		dsFommChklstExl = fomm0700wSvc.select04(dsCond);		
		result.addDataSet("dsFommChklstExl", dsFommChklstExl);		

		result.addDataSet("dsCond", dsCond);
		
		return result;
	}
	
}