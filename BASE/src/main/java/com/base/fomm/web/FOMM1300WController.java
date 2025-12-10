package com.base.fomm.web;

import java.util.Arrays;
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
import com.base.fomm.service.FOMM1300WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 업무분류별담당자관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 19.	정해운		최초작성
 */
@Controller
@RequestMapping("FOMM1300W")
public class FOMM1300WController {

	private Logger log = LoggerFactory.getLogger(FOMM1300WController.class);

	@Autowired
	private FOMM1300WService fomm1300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 업무분류별담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectDataList")
	public NexacroResult selectDataList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1300wSvc.selectDataList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	
	@RequestMapping("/selectInitInfo")
	public NexacroResult selectInitInfo( @ParamVariable(name = "SCH_LSIT") String strSchList) throws NexacroException {

		NexacroResult result = new NexacroResult();	

		String[] arrSchList = strSchList.toUpperCase().split(":");
		
		boolean isSchSenior		=  Arrays.stream(arrSchList).anyMatch("SENIOR"::equals);
		boolean isSchDevpr		=  Arrays.stream(arrSchList).anyMatch("DEVPR"::equals);
		boolean isSchDept  		=  Arrays.stream(arrSchList).anyMatch("DEPT"::equals);
		boolean isSchSrtype2all	=  Arrays.stream(arrSchList).anyMatch("SRTYPE2"::equals);
		boolean isSchUpmu2all	=  Arrays.stream(arrSchList).anyMatch("UPMU2"::equals);

		Map<String, Object> dsData = fomm1300wSvc.selectInitInfo(strSchList);
		
		if(isSchSenior) {
			result.addDataSet("dsSeniorLsit", dsData.get("dsSeniorLsit"));
		}
		
		if(isSchDevpr) {
			result.addDataSet("dsDevprList", dsData.get("dsDevprList"));
		}
		
		if(isSchDept) {
			result.addDataSet("dsDeptList", dsData.get("dsDeptList"));
		}
		
		if(isSchSrtype2all) {
			result.addDataSet("dsSrType2ALL", dsData.get("dsSrType2ALL"));
		}
		
		if(isSchUpmu2all) {
			result.addDataSet("dsUpmu2All", dsData.get("dsUpmu2All"));		
		}
		
		return result;
	}
	
	@RequestMapping("/selectDevprRegPopList")
	public NexacroResult selectDevprRegPopList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = fomm1300wSvc.selectDevprRegPopList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 업무분류별담당자관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm1300wSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = fomm1300wSvc.selectDataList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
}