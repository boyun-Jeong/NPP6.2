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
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR0122WService;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0122W")
public class SR0122WController {

	private Logger log = LoggerFactory.getLogger(SR0122WController.class);

	@Autowired
	private SR0122WService sr0122wSvc;

	/**
	 * SR요청목록조회 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String upWfProcCd = StringUtil.safe(dsCond.get("UP_WF_PROC_CD"));
		
		if("".equals(upWfProcCd)) {
			List<Map<String, Object>> dsCnt  = sr0122wSvc.select00(dsCond);
			result.addDataSet("dsCnt", dsCnt);
		}

		List<Map<String, Object>> dsData = sr0122wSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	

		
	/**
	 * SR요청목록조회(비상) 목록 조회
	 * @param dsCond
	 * @return
	 */	
	@RequestMapping("/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String upWfProcCd = StringUtil.safe(dsCond.get("UP_WF_PROC_CD"));
		
		if("".equals(upWfProcCd)) {
			List<Map<String, Object>> dsCnt  = sr0122wSvc.select05_01(dsCond);
			result.addDataSet("dsCnt", dsCnt);
		}

		List<Map<String, Object>> dsData = sr0122wSvc.select05(dsCond);
		List<Map<String, Object>> dsDataTime = sr0122wSvc.select05_001(dsCond); /* 업무시간 조회 */
		List<Map<String, Object>> dsDataHoliday = sr0122wSvc.select05_002(dsCond); /* 공휴일조회 */
		System.out.println("dsDataHolidaydsDataHolidaydsDataHolidaydsDataHolidaydsDataHolidaydsDataHolidaydsDataHoliday=:    "+dsDataHoliday);
		String varText ="HOIDAY";
		if (dsDataHoliday.size() < 1) varText ="NOHOLIDAY";
		
		result.addDataSet("dsData", dsData);
		result.addDataSet("dsDataTime", dsDataTime);
		dsCond.put("HOLIDAY",varText);
		result.addDataSet("dsCond", dsCond);
		return result;
	}
	
	/**
	 * SR요청목록조회(폐기) 목록 조회
	 * @param dsCond
	 * @return
	 */	
	@RequestMapping("/select06")
	public NexacroResult select06(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		String upWfProcCd = StringUtil.safe(dsCond.get("UP_WF_PROC_CD"));
		
		if("".equals(upWfProcCd)) {
			List<Map<String, Object>> dsCnt  = sr0122wSvc.select06_01(dsCond);
			result.addDataSet("dsCnt", dsCnt);
		}

		List<Map<String, Object>> dsData = sr0122wSvc.select06(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}	
	
		
	
}