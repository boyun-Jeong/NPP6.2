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
import com.base.pj.service.PJ3400PService;
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 투입인력상세 Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 25.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJ3400P")
public class PJ3400PController {

	private Logger log = LoggerFactory.getLogger(PJ3400PController.class);

	@Autowired
	private PJ3400PService pj3400pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 투입인력상세 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String userId	= StringUtil.safe(dsCond.get("USER_ID"));
		
		List<Map<String, Object>> dsData = null;
		
		if(!"".equals(userId)) {
			dsData = pj3400pSvc.select01(dsCond);
			result.addDataSet("dsUser", dsData);
			
			dsData = pj3400pSvc.select03(dsCond);
			result.addDataSet("dsUserMm", dsData);

		}else {
			dsData = pj3400pSvc.select02(dsCond);
			result.addDataSet("dsUserMm", dsData);
		}
		
		dsData = pj3400pSvc.select04(dsCond);
		result.addDataSet("dsUserMmHist", dsData);

		return result;
	}

	/**
	 * 투입인력상세 저장
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

			pj3400pSvc.save01(dsCond, dsUser, dsUserMm);
		}else {

			return result;
		}

		List<Map<String, Object>> dsData = pj3400pSvc.select01(dsCond);
		result.addDataSet("dsUser", dsData);
			
		dsData = pj3400pSvc.select03(dsCond);
		result.addDataSet("dsUserMm", dsData);

		dsData = pj3400pSvc.select04(dsCond);
		result.addDataSet("dsUserMmHist", dsData);
		
		return result;
	}
}