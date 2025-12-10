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
import com.base.sr.service.SR2001DService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - SR2001D Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  김웅기
 * @since   2024. 08. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 23.	김웅기		최초작성
 */
@Controller
@RequestMapping("SR2001D")
public class SR2001DController {

	private Logger log = LoggerFactory.getLogger(SR2001DController.class);

	@Autowired
	private SR2001DService sr2001dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * SR2001D 산출물 유형 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr2001dSvc.select01(dsCond);
		List<Map<String, Object>> dsData2 = sr2001dSvc.select02(dsCond);
		
		result.addDataSet("dsData", dsData);
		result.addDataSet("dsData2", dsData2);
		
		return result;
	}
	/**
	 * SR2001D 산출물 유형 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr2001dSvc.select03(dsCond);

		result.addDataSet("dsData", dsData);

		return result;
	}

	/**
	 * SR2001D 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsChklstCode = sr2001dSvc.select04(dsCond);

		result.addDataSet("dsChklstCode", dsChklstCode);

		return result;
	}

	/**
	 * SR2001D 프로그램 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select06")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsProgList = sr2001dSvc.select06(dsCond);
		

		result.addDataSet("dsProgList", dsProgList);
		
		return result;
	}
	/**
	 * SR2001D 보안성검토  조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select07")
	public NexacroResult select07(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsCheckListSR = sr2001dSvc.select07(dsCond);
		;
		

		result.addDataSet("dsCheckListSR", dsCheckListSR);
		

		return result;
	}

	/**
	 * SR2001D 시나리오 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select08")
	public NexacroResult selectSrMaPrjTsResult(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsSrMaPrjTsResult = sr2001dSvc.selectSrMaPrjTsDtlRslt(dsCond);

		result.addDataSet("dsSrMaPrjTsResult", dsSrMaPrjTsResult);
		

		return result;
	}
	/**
	 * SR2001D 연관프로젝트 ID 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select11")
	public NexacroResult select11(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsSrRefPrj = sr2001dSvc.select11(dsCond);

		result.addDataSet("dsSrRefPrj", dsSrRefPrj);
		

		return result;
	}
	/**
	 * SR2001D 연관프로젝트 ID 조회 (존재유무)
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select12")
	public NexacroResult select12(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsSrRefPrjId = sr2001dSvc.select12(dsCond);

		result.addDataSet("dsSrRefPrjId", dsSrRefPrjId);
		

		return result;
	}
	/**
	 * SR2001D 저장
	 * @param dsData
	 * @return
	 */
	
	
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsData2") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr2001dSvc.save01(dsData);
		}else {

			return result;
		}

		return result;
	}
	/**
	 * SR2001D 테스트 결과 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save03")
	public NexacroResult save03 (@ParamDataSet(name = "dsSrMaPrjTsResult") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		
		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr2001dSvc.save03(dsData);
		}else {

			return result;
		}

		return result;
	}
	/**
	 * SR2001D 저장
	 * @param dsData
	 * @return
	 */
	
	
	@RequestMapping(value = "/save04")
	public NexacroResult save04(@ParamDataSet(name = "dsMethodList") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr2001dSvc.save04(dsData);
		}else {

			return result;
		}

		return result;
	}
	/**
	 * SR2001D 연관프로젝트아이디 저장
	 * @param dsData
	 * @return
	 */
	
	
	@RequestMapping(value = "/save05")
	public NexacroResult save05(@ParamDataSet(name = "dsCond") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr2001dSvc.save05(dsData);
		}else {

			return result;
		}

		return result;
	}
}