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
import com.base.fomm.service.FOMM0400WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 만족도 항목관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 12. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 20.	정보윤		최초작성
 */
@Controller
@RequestMapping("FOMM0400W")
public class FOMM0400WController {

	private Logger log = LoggerFactory.getLogger(FOMM0400WController.class);

	@Autowired
	private FOMM0400WService fomm0400wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 만족도 항목관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsSatiqstMng = fomm0400wSvc.select01(dsCond);
		result.addDataSet("dsSatiqstMng", dsSatiqstMng);
		return result;
	}
	
	/**
	 * 만족도 항목관리 아이템 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsSatiQstItem = fomm0400wSvc.select02(dsCond);
		result.addDataSet("dsSatiQstItem", dsSatiQstItem);
		return result;
	}

	/**
	 * 만족도 항목관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsSatiqstMng") List<Map<String, Object>> dsSatiqstMng,
								@ParamDataSet(name = "dsSatiQstItem") List<Map<String, Object>> dsSatiQstItem) throws Exception {
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0400wSvc.save01(dsSatiqstMng, dsSatiQstItem);
		}else {

			return result;
		}
		dsSatiqstMng = fomm0400wSvc.select01(dsCond);
		result.addDataSet("dsSatiqstMng", dsSatiqstMng);
		return result;
	}
}