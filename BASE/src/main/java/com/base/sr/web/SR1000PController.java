package com.base.sr.web;

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
import com.base.sr.service.SR1000PService;
import com.base.com.service.FommAuthService;
import com.base.fomm.service.FOMM0700DService;

/**
 * 
 * <pre>
 * @title
 * - 보안성검토  조회(비정기 팝업시) Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  A
 * @since   2024. 10. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 10. 22.	A		최초작성
 */
@Controller
@RequestMapping("SR1000P")
public class SR1000PController {

	private Logger log = LoggerFactory.getLogger(SR1000PController.class);

	@Autowired
	private SR1000PService sr1000pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	@Autowired 
	private FOMM0700DService fomm0700dSvc;

	/**
	 * 보안성검토  조회(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr1000pSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 프로그램  조회(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsChklstCode = sr1000pSvc.select02(dsCond);
		result.addDataSet("dsChklstCode", dsChklstCode);
		return result;
	}

	/**
	 * 보안성검토  조회(비정기 팝업시) 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/saveIrrChkList")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
				NexacroResult result = new NexacroResult();
				
				fomm0700dSvc.save01(dsData);
				
				int maxScore = fomm0700dSvc.selectMaxScore(dsCond);
				int maxAnsCnt = fomm0700dSvc.select01(dsCond);
				
				Map<String, Object> answerCntMap = new HashMap<>();
				answerCntMap.put("MAX_VAL", maxScore);
				answerCntMap.put("MAX_CNT", maxAnsCnt);			
				result.addDataSet("dsAnswerCnt", answerCntMap);
				
				String queryStr = "";
			    
				for (int i=1; i <=maxAnsCnt; i++) {
					queryStr += "\n, MAX(CASE WHEN B.EXM_SEQ = " + i + " THEN B.EXM_SEQ END) AS EXM_SEQ" + i;
					queryStr += "\n, MAX(CASE WHEN B.EXM_SEQ = " + i + " THEN B.EXM_VAL END) AS EXM_VAL" + i;
					queryStr += "\n, MAX(CASE WHEN B.EXM_SEQ = " + i + " THEN B.EXM_NM END) AS EXM_NM" + i;
					queryStr += "\n, MAX(CASE WHEN B.EXM_SEQ = " + i + " THEN B.CHKLSTEXM_ID END) AS CHKLSTEXM_ID" + i;
				}

				dsCond.put("QUERY_STRING", queryStr);
				List<Map<String, Object>> list = fomm0700dSvc.select02(dsCond);
				result.addDataSet("dsData", list);

				list = fomm0700dSvc.select03(dsCond);
				result.addDataSet("dsExclude", list);
				return result;
	}
}