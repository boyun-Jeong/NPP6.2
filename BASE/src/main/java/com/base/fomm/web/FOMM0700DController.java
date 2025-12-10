package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0700DService;
import com.base.fwk.util.StringUtil;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 요청정보 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 06. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 06. 27.	정보윤		최초작성
 */
@Controller
@RequestMapping("FOMM0700D")
public class FOMM0700DController {

	private Logger log = LoggerFactory.getLogger(FOMM0700DController.class);

	@Autowired
	private FOMM0700DService fomm0700dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 체크리스트 문항 및 답변 결과 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectData")
	public NexacroResult selectData(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
//		String chklstId = StringUtil.safe(fomm0700dSvc.select00(dsCond));
//
//		String condChklstId = StringUtil.safe(dsCond.get("CHKLST_ID"));
//		log.debug("FOMM0700D selectData() condChklstId:[" + condChklstId + "] chklstId:[" + chklstId + "]");
//		
//		if(!"".equals(chklstId) && !condChklstId.equals(chklstId)) {
//			dsCond.put("CHKLST_ID", chklstId);
//		}

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
			queryStr += "\n, MAX(CASE WHEN B.EXM_SEQ = " + i + " THEN B.CHKLSTEXM_ID  END) AS CHKLSTEXM_ID" + i;
		}

		dsCond.put("QUERY_STRING", queryStr);
		List<Map<String, Object>> list = fomm0700dSvc.select02(dsCond);
		result.addDataSet("dsData", list);
		
		list = fomm0700dSvc.select03(dsCond);
		result.addDataSet("dsExclude", list);
		
		return result;
	}

	/**
	 * 체크리스트 문항 답변 저장(FOMM0700_D01.xfdl용)
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
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

	/**
	 * 체크리스트 문항 답변 저장(저장 처리 로직만 Only)
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		fomm0700dSvc.save01(dsData);
		return null;
	}

	/**
	 * 체크리스트 문항 및 답변 결과 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectChklstRestSummary")
	public NexacroResult selectChklstQueRstSummary(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		Map<String, Object> mapData = fomm0700dSvc.selectChklstRestSummary(dsCond);
		result.addDataSet("dsChklstRetSummary", mapData);
		return result;
	}

	/**
	 * 표준 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectChklstIdList")
	public NexacroResult selectChklstIdList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		
		String chklstIdStr = StringUtil.safe(dsCond.get("KEY_TBL_STR"));
		String[] chklstIdArr = chklstIdStr.split(",");
		
		dsCond.put("KEY_TBL_ARR", chklstIdArr);

		List<Map<String, Object>> dsChklstIdList = fomm0700dSvc.selectChklstIdList(dsCond);
		result.addDataSet("dsChklstIdList", dsChklstIdList);
		return result;
	}
}