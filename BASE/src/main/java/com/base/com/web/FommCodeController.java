package com.base.com.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommCodeService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 Controller
 * @package com.base.com.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            변경자      내용
 * ------------------------------------------------
 * 2023. 04. 00.  WEMB    	최초작성
 */
@Controller
@RequestMapping("util")
public class FommCodeController {

	private Logger log = LoggerFactory.getLogger(FommCodeController.class);
	
	@Autowired
	private FommCodeService fommCodeSvc;

	@Inject
	private Provider<SessionContext> sessionContext;

	/**
	 * 공통코드 전체 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectComCode")
	public NexacroResult selectComCode(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		List<Map<String, Object>> gdsCode =  fommCodeSvc.selectComCode(dsCond);

		NexacroResult resultList = new NexacroResult();
		resultList.addDataSet("gdsCode", gdsCode);

		return resultList;
	}

	/**
	 * 시스템 메세지 목록 조회
	 * @return
	 */
	@RequestMapping(value = "/selectComMsg")
	public NexacroResult selectComMsg() {

		NexacroResult resultList = new NexacroResult();
		
		Map<String, Object> searchMap = new HashMap<>();
		
		searchMap.put("USE_YN", "Y");
		searchMap.put("CODE_DIV", "CMM_CD");
		searchMap.put("UP_CMM_CD", "LANG_CD");
		List<Map<String, Object>> langCode =  fommCodeSvc.selectGetCode(searchMap);
		
		String queryMsgStr1 = "";
		String queryMsgStr2 = "";
		
		for (int i = 0; i < langCode.size(); i++) {
			
			String langCd = StringUtil.safe(langCode.get(i).get("CMM_CD"));
			
			if(sessionContext.get().getScSysLangCd().equals(langCd)) {
				queryMsgStr1 += "\n,SYS_MSG";
				queryMsgStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN MSG_CONTS END)  AS SYS_MSG";
				break;
			}
		}

		for (int i = 0; i < langCode.size(); i++) {
			
			String langCd = StringUtil.safe(langCode.get(i).get("CMM_CD"));

			queryMsgStr1 += "\n," + langCd + "_MSG";
			queryMsgStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN MSG_CONTS END)  AS " + langCd + "_MSG";
		}
		
		searchMap.put("QUERY_STR1", queryMsgStr1);
		searchMap.put("QUERY_STR2", queryMsgStr2);
		List<Map<String, Object>> gdsMessage =  fommCodeSvc.selectComMsg(searchMap);
		resultList.addDataSet("gdsMessage", gdsMessage);

		return resultList;
	}
	
	/**
	 * 시스템 단어 목록 조회
	 * @return
	 */
	@RequestMapping(value = "/selectComWord")
	public NexacroResult selectComWord() {

		NexacroResult resultList = new NexacroResult();
		
		Map<String, Object> searchMap = new HashMap<>();
		
		searchMap.put("USE_YN", "Y");
		searchMap.put("CODE_DIV", "CMM_CD");
		searchMap.put("UP_CMM_CD", "LANG_CD");
		List<Map<String, Object>> langCode =  fommCodeSvc.selectGetCode(searchMap);

		String queryWordStr1 = "";
		String queryWordStr2 = "";		

		for (int i = 0; i < langCode.size(); i++) {
			
			String langCd = StringUtil.safe(langCode.get(i).get("CMM_CD"));
			
			if(sessionContext.get().getScSysLangCd().equals(langCd)) {
				queryWordStr1 += "\n,SYS_WORD";
				queryWordStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN WORD END)  AS SYS_WORD";
				break;
			}
		}

		for (int i = 0; i < langCode.size(); i++) {
			
			String langCd = StringUtil.safe(langCode.get(i).get("CMM_CD"));
			
			queryWordStr1 += "\n," + langCd + "_WORD";
			queryWordStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN WORD END)  AS " + langCd + "_WORD";
		}
		
		searchMap.put("QUERY_STR1", queryWordStr1);
		searchMap.put("QUERY_STR2", queryWordStr2);
		List<Map<String, Object>> gdsWord =  fommCodeSvc.selectComWord(searchMap);
		resultList.addDataSet("gdsWord", gdsWord);

		return resultList;
	}
	
	/**
	 * 코드 전체 목록 조회
	 * @return
	 */
	@RequestMapping(value = "/selectComCodeDataAll")
	public NexacroResult selectComCodeDataAll() {

		NexacroResult resultList = new NexacroResult();
		
		List<Map<String, Object>> gdsCode =  fommCodeSvc.selectComCode(new HashMap<>());
		resultList.addDataSet("gdsCode", gdsCode);

		Map<String, Object> searchMap = new HashMap<>();
		
		searchMap.put("USE_YN", "Y");
		searchMap.put("CODE_DIV", "CMM_CD");
		searchMap.put("UP_CMM_CD", "LANG_CD");
		gdsCode =  fommCodeSvc.selectGetCode(searchMap);
		
		String queryMsgStr1 = "";
		String queryMsgStr2 = "";
		
		for (int i = 0; i < gdsCode.size(); i++) {
			
			String langCd = StringUtil.safe(gdsCode.get(i).get("CMM_CD"));
			
			if(sessionContext.get().getScSysLangCd().equals(langCd)) {
				queryMsgStr1 += "\n,SYS_MSG";
				queryMsgStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN MSG_CONTS END)  AS SYS_MSG";
				break;
			}
		}

		for (int i = 0; i < gdsCode.size(); i++) {
			
			String langCd = StringUtil.safe(gdsCode.get(i).get("CMM_CD"));

			queryMsgStr1 += "\n," + langCd + "_MSG";
			queryMsgStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN MSG_CONTS END)  AS " + langCd + "_MSG";
		}

		searchMap.put("QUERY_STR1", queryMsgStr1);
		searchMap.put("QUERY_STR2", queryMsgStr2);
		List<Map<String, Object>> gdsMessage =  fommCodeSvc.selectComMsg(searchMap);
		resultList.addDataSet("gdsMessage", gdsMessage);
		
		String queryWordStr1 = "";
		String queryWordStr2 = "";

		for (int i = 0; i < gdsCode.size(); i++) {
			
			String langCd = StringUtil.safe(gdsCode.get(i).get("CMM_CD"));
			
			if(sessionContext.get().getScSysLangCd().equals(langCd)) {
				queryWordStr1 += "\n,SYS_WORD";
				queryWordStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN WORD END)  AS SYS_WORD";
				break;
			}
		}
		
		for (int i = 0; i < gdsCode.size(); i++) {
			
			String langCd = StringUtil.safe(gdsCode.get(i).get("CMM_CD"));
			
			queryWordStr1 += "\n," + langCd + "_WORD";
			queryWordStr2 += "\n,MAX(CASE WHEN B.LANG_CD = '" + langCd + "' THEN WORD END)  AS " + langCd + "_WORD";
		}
		
		searchMap.put("QUERY_STR1", queryWordStr1);
		searchMap.put("QUERY_STR2", queryWordStr2);
		List<Map<String, Object>> gdsWord =  fommCodeSvc.selectComWord(searchMap);
		resultList.addDataSet("gdsWord", gdsWord);

		List<Map<String, Object>> agencyList =  fommCodeSvc.selectFommAgencyInfo();
		resultList.addDataSet("gdsFommAgencyInfo", agencyList);
		return resultList;
	}

	/**
	 * 직급 코드 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectJbcPosiList")
	public NexacroResult selectJbcPosiList(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		NexacroResult resultList = new NexacroResult();
		List<Map<String, Object>> dsJbcPosi =  fommCodeSvc.selectJbcPosiList(dsCond);
		resultList.addDataSet("dsJbcPosi", dsJbcPosi);
		return resultList;
	}

	/**
	 * 직책 코드 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectJbcList")
	public NexacroResult selectJbcJidList(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		NexacroResult resultList = new NexacroResult();
		List<Map<String, Object>> dsJbc =  fommCodeSvc.selectJbcList(dsCond);
		resultList.addDataSet("dsJbc", dsJbc);
		return resultList;
	}

	/**
	 * 알람 cnt 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectAlarmCnt")
	public NexacroResult selectAlarmCnt(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		NexacroResult resultList = new NexacroResult();
		List<Map<String, Object>> dsAlarmCnt =  fommCodeSvc.selectAlarmCnt(dsCond);
		log.debug("------selectAlarmCnt------dsCond : " + dsCond);
		resultList.addDataSet("dsAlarmCnt", dsAlarmCnt);
		log.debug("------------resultList : " + resultList.getDataSets() + "------------dsAlarmCnt : " + dsAlarmCnt);
		return resultList;
	}
}