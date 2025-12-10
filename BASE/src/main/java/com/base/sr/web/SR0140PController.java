package com.base.sr.web;

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
import com.base.sr.service.SR0140PService;

/**
 * 
 * <pre>
 * @title
 * - 결재 팝업 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	이정빈		최초작성
 */
@Controller
@RequestMapping("SR0140P")
public class SR0140PController {

	private Logger log = LoggerFactory.getLogger(SR0140PController.class);

	@Autowired
	private SR0140PService sr0140pSvc;

	

	
	/**
	 * 결재 승인
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveApprove")
	public NexacroResult save01(@ParamDataSet(name = "dsApprInfo") List<Map<String, Object>> dsApprInfo) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		sr0140pSvc.saveApprove(dsApprInfo);
		return result;
	}
	
	
	/**
	 * 결재 반려
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveReturn")
	public NexacroResult save02(@ParamDataSet(name = "dsApprInfo") List<Map<String, Object>> dsApprInfo) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		sr0140pSvc.saveReturn(dsApprInfo);
		return result;
	}
}