package com.base.sr.web;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.sr.service.SR0200DService;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0200D")
public class SR0200DController {

	private Logger log = LoggerFactory.getLogger(SR0200DController.class);

	@Autowired
	private SR0200DService sr0200dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 계정 신청 내용(요청서) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectAll")
	public NexacroResult selectAll(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsOut = sr0200dSvc.select01(dsCond);
		result.addDataSet("dsSrInfrJob", dsOut);

		dsOut = sr0200dSvc.select02(dsCond);
		result.addDataSet("dsSrInfrAccnt", dsOut);

		return result;
	}
	
	/**
	 * 계정 신청 내용(요청서) 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsSrInfrJob = sr0200dSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSrInfrJob", dsSrInfrJob);

		return result;
	}
	
	/**
	 * 계정 신청 계정 내역 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsSrInfrAccnt = sr0200dSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSrInfrAccnt", dsSrInfrAccnt);

		return result;
	}

	/**
	 * 계정 신청(요청서) 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsSrInfrJob") Map<String, Object> dsSrInfrJob,
								@ParamDataSet(name = "dsSrInfrAccnt") List<Map<String, Object>> dsSrInfrAccnt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr0200dSvc.save01(dsSrInfrJob, dsSrInfrAccnt);
		}else {

			return result;
		}
//
//		List<Map<String, Object>> outData;
//		outData = sr0200dSvc.select01(dsCond);
//		result.addDataSet("dsSrInfrJob", outData);
//
//		outData = sr0200dSvc.select02(dsCond);
//		result.addDataSet("dsSrInfrAccnt", outData);

		return result;
	}
}