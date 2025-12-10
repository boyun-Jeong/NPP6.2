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
import com.base.pj.service.PJ0300WService;
import com.base.com.service.FommAuthService;
import com.base.com.service.FommMultipartService;

/**
 * 
 * <pre>
 * @title
 * - 산출물 등록 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 27.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0300W")
public class PJ0300WController {

	private Logger log = LoggerFactory.getLogger(PJ0300WController.class);

	@Autowired
	private PJ0300WService pj0300wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 산출물 등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = pj0300wSvc.select01(dsCond);
		result.addDataSet("dsPjDelivery", dsData);
		
		dsData = pj0300wSvc.select02(dsCond);
		result.addDataSet("dsPjSubPjtList", dsData);

		dsData = pj0300wSvc.select03(dsCond);
		result.addDataSet("dsPjDlvrWbsMap", dsData);

		dsData = pj0300wSvc.select04(dsCond);
		result.addDataSet("dsPjMethodDlvr", dsData);
		
		return result;
	}

	/**
	 * 산출물 등록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjDelivery") List<Map<String, Object>> dsPjDelivery,
								@ParamDataSet(name = "dsPjDlvrWbsMap") List<Map<String, Object>> dsPjDlvrWbsMap) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj0300wSvc.save01(dsPjDelivery, dsPjDlvrWbsMap);
		}else {

			return result;
		}
		dsPjDelivery = pj0300wSvc.select01(dsCond);
		result.addDataSet("dsPjDelivery", dsPjDelivery);

		List<Map<String, Object>> dsPjSubPjtList = pj0300wSvc.select02(dsCond);
		result.addDataSet("dsPjSubPjtList", dsPjSubPjtList);

		dsPjDlvrWbsMap = pj0300wSvc.select03(dsCond);
		result.addDataSet("dsPjDlvrWbsMap", dsPjDlvrWbsMap);

		List<Map<String, Object>> dsPjMethodDlvr = pj0300wSvc.select04(dsCond);
		result.addDataSet("dsPjMethodDlvr", dsPjMethodDlvr);

		return result;
	}
}