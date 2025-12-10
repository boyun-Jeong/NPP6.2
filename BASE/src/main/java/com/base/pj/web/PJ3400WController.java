package com.base.pj.web;

import java.io.BufferedReader;
import java.sql.Clob;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.pj.service.PJ3400WService;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 투입인력관리 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 23.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3400W")
public class PJ3400WController {

	private Logger log = LoggerFactory.getLogger(PJ3400WController.class);

	@Autowired
	private PJ3400WService pj3400wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 투입인력관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = pj3400wSvc.select01(dsCond);
		result.addDataSet("dsPjMonth", dsData);

		String queryStr = "";
		int colIdx = 0;
		for (int i = 0; i < dsData.size(); i++) {
			colIdx++;
			String yyyyMm = StringUtil.safe(dsData.get(i).get("PJT_MONTH"));
			queryStr += "\n\t\t\t, NVL((SELECT PLAN_MM FROM PJ_USER_MM WHERE PJT_ID = A.PJT_ID AND USER_ID = A.USER_ID AND YYYYMM = '" + yyyyMm + "'), 0) AS MM" + StringUtils.leftPad("" + colIdx, 3, "0") + "_PLAN_MM";
			queryStr += "\n\t\t\t, NVL((SELECT ACT_MM FROM PJ_USER_MM WHERE PJT_ID = A.PJT_ID AND USER_ID = A.USER_ID AND YYYYMM = '" + yyyyMm + "'), 0) AS MM" + StringUtils.leftPad("" + colIdx, 3, "0") + "_ACT_MM";
		}
		log.debug("queryStr\n" + queryStr);

		dsCond.put("QUERY_STR", queryStr);
		dsData = pj3400wSvc.select02(dsCond);
		result.addDataSet("dsUser", dsData);

//		for (int i = 0; i < dsData.size(); i++) {
//			
//			for(String colNm : dsData.get(i).keySet()) {
//				
//				if(dsData.get(i).get(colNm) != null) {
//					
//					String value = StringUtil.safe(dsData.get(i).get(colNm));
//					
//					log.debug("i=" + i + " colNm : " + colNm + " value : " + value);
//				}
//			}
//		}
		return result;
		
		
	}

	/**
	 * 투입인력관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsUser") List<Map<String, Object>> dsUser,
								@ParamDataSet(name = "dsUserMm") List<Map<String, Object>> dsUserMm) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			pj3400wSvc.save01(dsUser, dsUserMm);
		}else {

			return result;
		}
		
		List<Map<String, Object>> dsData = pj3400wSvc.select01(dsCond);
		result.addDataSet("dsPjMonth", dsData);

		String queryStr = "";
		int colIdx = 0;
		for (int i = 0; i < dsData.size(); i++) {
			colIdx++;
			String yyyyMm = StringUtil.safe(dsData.get(i).get("PJT_MONTH"));
			queryStr += "\n\t\t\t, NVL((SELECT PLAN_MM FROM PJ_USER_MM WHERE PJT_ID = A.PJT_ID AND USER_ID = A.USER_ID AND YYYYMM = '" + yyyyMm + "'), 0) AS MM" + StringUtils.leftPad("" + colIdx, 3, "0") + "_PLAN_MM";
			queryStr += "\n\t\t\t, NVL((SELECT ACT_MM FROM PJ_USER_MM WHERE PJT_ID = A.PJT_ID AND USER_ID = A.USER_ID AND YYYYMM = '" + yyyyMm + "'), 0) AS MM" + StringUtils.leftPad("" + colIdx, 3, "0") + "_ACT_MM";
		}
		log.debug("queryStr\n" + queryStr);

		dsCond.put("QUERY_STR", queryStr);
		dsData = pj3400wSvc.select02(dsCond);
		result.addDataSet("dsUser", dsData);

		return result;
	}
}