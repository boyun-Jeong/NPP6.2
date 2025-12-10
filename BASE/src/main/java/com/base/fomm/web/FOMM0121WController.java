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
import com.base.fomm.service.FOMM0121WService;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 사용자 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    WEMB	최초작성
 */
@Controller
@RequestMapping("FOMM0121W")
public class FOMM0121WController {

	private Logger log = LoggerFactory.getLogger(FOMM0121WController.class);
	
	@Autowired
	private FOMM0121WService fomm0121wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	
	/**
	 * SPP 확장권한 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsExtdAuthMt =  fomm0121wSvc.select01(dsCond);
		result.addDataSet("dsExtdAuthMt", dsExtdAuthMt);

		return result;
	}

	/**
	 * SPP 확장권한별 사용자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsExtdAuthUserDt =  fomm0121wSvc.select02(dsCond);
		result.addDataSet("dsExtdAuthUserDt", dsExtdAuthUserDt);
		
		return result;
	}

	/**
	 * SPP 확장권한별 부서 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsExtdAuthDeptDt =  fomm0121wSvc.select03(dsCond);
		result.addDataSet("dsExtdAuthDeptDt", dsExtdAuthDeptDt);

		return result;
	}
	
	
	
	/**
	 * SPP 권한그룹/사용자 일괄 저장
	 * @param dsFommUserMt, dsFommAuthUserDt
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsExtdAuthMt") List<Map<String, Object>> dsExtdAuthMt
							  , @ParamDataSet(name = "dsExtdAuthUserDt") List<Map<String, Object>> dsExtdAuthUserDt
							  , @ParamDataSet(name = "dsExtdAuthDeptDt") List<Map<String, Object>> dsExtdAuthDeptDt) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0121wSvc.save01(dsExtdAuthMt, dsExtdAuthUserDt, dsExtdAuthDeptDt);
		}
		else {
			return result;
		}

		dsCond.put("EXTD_ID", "");
		dsCond.put("EXTD_GB", "00");
		dsExtdAuthMt =  fomm0121wSvc.select01(dsCond);
		result.addDataSet("dsExtdAuthMt", dsExtdAuthMt);
		
		return result;
	}
}
