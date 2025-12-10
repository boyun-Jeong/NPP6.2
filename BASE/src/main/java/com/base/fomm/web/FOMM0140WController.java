package com.base.fomm.web;

import java.io.IOException;
import java.sql.SQLException;
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
import com.base.fomm.service.FOMM0140WService;
import com.base.com.service.FommAuthService;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 메뉴관리 Controller
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
@RequestMapping("FOMM0140W")
public class FOMM0140WController {

	private Logger log = LoggerFactory.getLogger(FOMM0140WController.class);
	
	@Autowired
	private FOMM0140WService fomm0140wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	/**
	 * SPP 메뉴 트리 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IOException, SQLException
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsMenuTree =  fomm0140wSvc.select01(dsCond);
		result.addDataSet("dsMenuTree", dsMenuTree);

		return result;
	}

	/**
	 * SPP 하위메뉴 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IOException, SQLException
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsFommMenuMt =  fomm0140wSvc.select02(dsCond);
		result.addDataSet("dsFommMenuMt", dsFommMenuMt);
		
		return result;
	}
	
	
	
	/**
	 * SPP 메뉴 저장
	 * @param dsFommUserMt, dsFommAuthMenuDt
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsFommMenuMt") List<Map<String, Object>> dsFommMenuMt) throws NexacroException, IOException, SQLException
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0140wSvc.save01(dsFommMenuMt);
		}
		else {
			return result;
		}
		
		
		List<Map<String, Object>> dsMenuTree =  fomm0140wSvc.select01(dsCond);
		result.addDataSet("dsMenuTree", dsMenuTree);
		
		return result;
	}
	
	
	
	
	
	
	/**
	 * SPP 메뉴 도움말 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IOException, SQLException
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData =  fomm0140wSvc.select03(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	
	/**
	 * SPP 메뉴 도움말 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save01(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws NexacroException, IOException, SQLException
	{
		NexacroResult result = new NexacroResult();
		fomm0140wSvc.save02(dsData);
		
		return result;
	}
}
