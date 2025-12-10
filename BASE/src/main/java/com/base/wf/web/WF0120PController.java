package com.base.wf.web;

import java.sql.Clob;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.wf.service.WF0120PService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - WF프로세스관리(상세) Controller
 * @package com.base.wf.web
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 03. 12.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 12.	정보윤		최초작성
 */
@Controller
@RequestMapping("WF0120P")
public class WF0120PController {

	private Logger log = LoggerFactory.getLogger(WF0120PController.class);

	@Autowired
	private WF0120PService wf0120pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 요청서 화면/테이블 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = wf0120pSvc.select01(dsCond);
		result.addDataSet("dsWfReqScrnDt", dsData);
		
		dsData = wf0120pSvc.select04(dsCond);
		result.addDataSet("dsWfReqScrnDefTblDt", dsData);
		
		return result;
	}

	/**
	 * 요청서 화면 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWfReqScrnDt = wf0120pSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfReqScrnDt", dsWfReqScrnDt);

		return result;
	}
	
	/**
	 * 요청서 화면 기본 테이블 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		List<Map<String, Object>> dsWfReqScrnDefTblDt = wf0120pSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfReqScrnDefTblDt", dsWfReqScrnDefTblDt);

		return result;
	}

	/**
	 * 요청서 화면/기본 테이블 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsWfReqScrnDt") List<Map<String, Object>> dsWfReqScrnDt,
								@ParamDataSet(name = "dsWfReqScrnDefTblDt") List<Map<String, Object>> dsWfReqScrnDefTblDt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			wf0120pSvc.save01(dsWfReqScrnDt, dsWfReqScrnDefTblDt);
		}else {

			return result;
		}

		dsWfReqScrnDt = wf0120pSvc.select01(dsCond);
		result.addDataSet("dsWfReqScrnDt", dsWfReqScrnDt);
		
		dsWfReqScrnDefTblDt = wf0120pSvc.select02(dsCond);
		result.addDataSet("dsWfReqScrnDefTblDt", dsWfReqScrnDefTblDt);

		return result;
	}

	/**
	 * 역할자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	//public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
	public NexacroResult select04() throws NexacroException {
		NexacroResult result = new NexacroResult();
		Map<String, Object> dsCond = new HashedMap<String, Object>();
		List<Map<String, Object>> dsAuthExtdMt = wf0120pSvc.select03(dsCond);		
		result.addDataSet("dsAuthExtdMt", dsAuthExtdMt);
		return result;
	}
}