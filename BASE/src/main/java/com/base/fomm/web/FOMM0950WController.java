package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0950WService;
import com.base.com.service.FommAuthService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지처리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 25.	이훈석		최초작성
 */
@Controller
@RequestMapping("FOMM0950W")
public class FOMM0950WController {

	private Logger log = LoggerFactory.getLogger(FOMM0950WController.class);

	@Autowired
	private FOMM0950WService fomm0950wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 쪽지처리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData01 = fomm0950wSvc.select01(dsCond);
		List<Map<String, Object>> dsData02 = fomm0950wSvc.select02(dsCond);
		//List<Map<String, Object>> dsData03 = fomm0950wSvc.select03(dsCond);
		
		result.addDataSet("dsPtMemo", dsData01);
		result.addDataSet("dsPtMemoRcv", dsData02);
		//result.addDataSet("dsPtMemoReply", dsData03); 댓글 모듈 사용 안함
		return result;
	}

	/**
	 * 쪽지처리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(
			@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
			//@ParamDataSet(name = "dsCond") String dsCond,
			@ParamDataSet(name = "dsPtMemo") Map<String, Object> dsPtMemo, 
			@ParamDataSet(name = "dsPtMemoRcv") Map<String, Object> dsPtMemoRcv) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			fomm0950wSvc.save01(dsCond,dsPtMemo,dsPtMemoRcv);
		}else {

			return result;
		}
		//dsData = fomm0950wSvc.select01(dsCond);
		//result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 임시저장후 수정 혹은 발송
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(
			@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
			@ParamDataSet(name = "dsPtMemo") Map<String, Object> dsPtMemo, 
			@ParamDataSet(name = "dsPtMemoRcvTmp") List<Map<String, Object>> dsPtMemoRcvTmp,
			@ParamDataSet(name = "ds_userRcv_All") List<Map<String, Object>>  ds_userRcv_All) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0950wSvc.save02(dsCond, dsPtMemo, dsPtMemoRcvTmp, ds_userRcv_All);
		}else {
			return result;
		}
		return result;
	}
	
	/**
	 * 임시저장후 수정 혹은 발송
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/save03")
	public NexacroResult save03(
			@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
			fomm0950wSvc.save03(dsCond);
		}else {
			return result;
		}
		return result;
	}
}