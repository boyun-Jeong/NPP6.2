package com.base.fomm.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fomm.service.FOMM0170WService;
import com.base.fwk.util.StringUtil;
/**
 * 
 * <pre>
 * @title   
 * -        SPP 단어관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    WEMB	최초작성
 */
@Controller
@RequestMapping("FOMM0170W")
public class FOMM0170WController {

	private Logger log = LoggerFactory.getLogger(FOMM0170WController.class);
	
	@Autowired
	private FOMM0170WService FOMM0170WSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Inject
	private Provider<SessionContext> sc;
	
	/**
	 * SPP 단어 MT 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsCmmWordMt =  FOMM0170WSvc.select01(dsCond);
		result.addDataSet("dsCmmWordMt", dsCmmWordMt);
		return result;
	}

	/**
	 * SPP 단어 DT 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsCmmWordDt =  FOMM0170WSvc.select02(dsCond);
		result.addDataSet("dsCmmWordDt", dsCmmWordDt);
		return result;
	}

	/**
	 * SPP 단어 중복 체크
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsCmmWordDt =  FOMM0170WSvc.select02(dsCond);
		result.addDataSet("dsCmmWordDt", dsCmmWordDt);
		return result;
	}

	/**
	 * SPP 단어 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/saveCheck01")
	public NexacroResult saveCheck01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsCmmWordMt") List<Map<String, Object>> dsCmmWordMt
							  , @ParamDataSet(name = "dsCmmWordDt") List<Map<String, Object>> dsCmmWordDt) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		
		log.debug("FOMM0170W save01 AUTH_YN ===================== " + result.getVariables().get("AUTH_YN"));

		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {

			//좌측 그리드 데이터셋
			int rowCnt = dsCmmWordMt.size();
			
			List<Map<String, Object>> rtnList = new ArrayList<Map<String,Object>>();
			
			for (int i = 0; i < rowCnt; i++) 
			{
				Map<String, Object> rowData = dsCmmWordMt.get(i);

				// DATA RowFlag 가져오기
		    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

				if("I".equals(rowFlag)) {
					
					rowData.put("LANG_CD", sc.get().getScSysLangCd());
					rowData.put("WORD", rowData.get("SYS_WORD"));
					Integer selCnt = FOMM0170WSvc.select03(rowData);
					
					log.debug("MT i= " + i + " selCnt : " + selCnt);

					if(selCnt > 0) {
						//|DUP
						Map<String, Object> rtnMap = new HashMap<>();
						rtnMap.put("RTN_MAP", "MT");
						rtnMap.put("WORD", rowData.get("WORD"));
						rtnList.add(rtnMap);
					}
				}
			}
			
			if(rtnList.size() > 0) {
				result.addDataSet("dsRtnMapMt", rtnList);
				return result;
			}
			
			log.debug("1111rtnList.size : " + rtnList.size());
			
			//우측 그리드 데이터셋
			rowCnt = dsCmmWordDt.size();
			
			log.debug("dsCmmWordDt rowCnt============================> " + rowCnt);
			rtnList = new ArrayList<Map<String,Object>>();
			
			for (int i = 0; i < rowCnt; i++) 
			{
				Map<String, Object> rowData = dsCmmWordDt.get(i);
				
				// DATA RowFlag 가져오기
		    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
		    	String langCd = StringUtil.safe(rowData.get("LANG_CD"));
		    	String word = StringUtil.safe(rowData.get("WORD"));
		    	log.debug("dsCmmWordDt i:" + i + " rowFlag : " + rowFlag + " SysLangCd : " + sc.get().getScSysLangCd() + " langCd : " +langCd + " word : " + word);

		    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {

		    		if(sc.get().getScSysLangCd().equals(langCd)) {		    		

		    			rowData.put("LANG_CD", langCd);
		    			Integer selCnt = FOMM0170WSvc.select03(rowData);

		    			log.debug("DT i= " + i + " selCnt : " + selCnt);

		    			if(selCnt > 0) {
		    				Map<String, Object> rtnMap = new HashMap<>();
		    				rtnMap.put("RTN_MAP", "DT");
		    				rtnMap.put("WORD", rowData.get("WORD"));
		    				rtnList.add(rtnMap);
		    			
		    			}
		    		}
				}
			}
			
			log.debug("222222rtnList.size : " + rtnList.size());
			
			if(rtnList.size() > 0) {
				result.addDataSet("dsRtnMapMt", rtnList);
				return result;
			}

		}else {
			return result;
		}
		return result;
	}
	
	/**
	 * SPP 단어 저장
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsCmmWordMt") List<Map<String, Object>> dsCmmWordMt
							  , @ParamDataSet(name = "dsCmmWordDt") List<Map<String, Object>> dsCmmWordDt) throws NexacroException 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		
		log.debug("FOMM0170W save01 AUTH_YN ===================== " + result.getVariables().get("AUTH_YN"));

		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {

			//좌측 그리드 데이터셋
			String wordNo = FOMM0170WSvc.save01(dsCmmWordMt);

			//우측 그리드 데이터셋
			FOMM0170WSvc.save02(dsCmmWordDt);

			dsCmmWordMt =  FOMM0170WSvc.select01(dsCond);
			result.addDataSet("dsCmmWordMt", dsCmmWordMt);

			Map<String, Object> rstMap = new HashMap<>();
			rstMap.put("WORD_NO", "".equals(wordNo) ? StringUtil.safe(dsCond.get("SEL_WORD_NO")) : wordNo);
			result.addDataSet("dsKey", rstMap);

		}else {
			return result;
		}
		return result;
	}
}