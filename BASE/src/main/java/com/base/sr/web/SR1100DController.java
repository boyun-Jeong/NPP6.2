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
import com.base.sr.service.SR1000DService;
import com.base.sr.service.SR1100DService;

/**
 * 
 * <pre>
 * @title
 * - 마스터 프로젝트 종료 요청 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 10.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR1100D")
public class SR1100DController {

	private Logger log = LoggerFactory.getLogger(SR1100DController.class);

	@Autowired
	private SR1000DService sr1000dSvc;
	
	@Autowired
	private SR1100DService sr1100dSvc;

	/**
	 * 마스터 프로젝트 종료 요청 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr1100dSvc.select01(dsCond);
		result.addDataSet("dsSrMaReq", dsData);

		dsCond.put("MASTER_SUB_DIV_CD", "M");
		Map<String, Object> mapData = sr1000dSvc.selectSrMaPrjMaster(dsCond);
		result.addDataSet("dsMasterPrj", mapData);

		dsCond.put("MASTER_SUB_DIV_CD", "S");
		dsData = sr1000dSvc.selectSrMaPrjAll(dsCond);
		result.addDataSet("dsPrjList", dsData);

		dsData = sr1100dSvc.select02(dsCond);
		result.addDataSet("dsSrBaseInfosubPrj", dsData);

		return result;
	}

	/**
	 * 마스터 프로젝트 종료 요청 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSrMaPrjMaster")
	public NexacroResult selectSrMaPrjMaster(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		Map<String, Object> mapData = sr1000dSvc.selectSrMaPrjMaster(dsCond);
		result.addDataSet("dsMasterPrj", mapData);

		return result;
	}
}