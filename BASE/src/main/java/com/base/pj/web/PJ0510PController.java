package com.base.pj.web;

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
import com.base.com.service.FommMultipartService;
import com.base.pj.service.PJ0510PService;

/**
 * 
 * <pre>
 * @title
 * - Action Item 상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ0510P")
public class PJ0510PController {

	private Logger log = LoggerFactory.getLogger(PJ0510PController.class);

	@Autowired
	private PJ0510PService pj0510pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	@Autowired
	private FommMultipartService fommMultipartSvc;

	/**
	 * Action Item 상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = pj0510pSvc.select01(dsCond);
		result.addDataSet("dsPjActionItem", dsData);

		dsData = pj0510pSvc.select02(dsCond);
		result.addDataSet("dsPjActAction", dsData);
		
		dsCond.put("KEY_TBL", "PJ_ACT_ACTION");
		dsCond.put("PK1", dsCond.get("ACT_ITEM_ID"));
		
		dsData = fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFileList", dsData);
		return result;
	}

	/**
	 * Action Item 상세 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsPjActionItem") List<Map<String, Object>> dsPjActionItem,
								@ParamDataSet(name = "dsPjActAction") List<Map<String, Object>> dsPjActAction) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		String actItemCd = "";

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			actItemCd = pj0510pSvc.save01(dsPjActionItem, dsPjActAction);
		}else {

			return result;
		}
		
		if(!"".equals(actItemCd))
		{
			dsCond.put("ACT_ITEM_ID", actItemCd);
		}

		dsPjActionItem = pj0510pSvc.select01(dsCond);
		result.addDataSet("dsPjActionItem", dsPjActionItem);

		dsPjActAction = pj0510pSvc.select02(dsCond);
		result.addDataSet("dsPjActAction", dsPjActAction);

		Map<String, Object> fileDsCond = new HashMap<>();
		
		fileDsCond.put("PK1", dsCond.get("ACT_ITEM_CD"));		
		fileDsCond.put("KEY_TBL", "PJ_ACT_ACTION");
		fileDsCond.put("FLDR_NM", "pj");

		List<Map<String, Object>> dsData = fommMultipartSvc.selectFileList(fileDsCond);
		result.addDataSet("dsFileList", dsData);

		result.addDataSet("dsCond", dsCond);
		return result;
	}
}