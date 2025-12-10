package com.base.sr.web;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.sr.service.SR0140WService;
import com.base.sr.service.impl.SRCommServiceImpl;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 결재함 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0140W")
public class SR0140WController {

	private Logger log = LoggerFactory.getLogger(SR0140WController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0140WService sr0140wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	@Autowired
	private SRCommServiceImpl srCommSvcImpl;

	/**
	 * 결재함 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		List<Map<String, Object>> dsData = sr0140wSvc.select01(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);

		return result;
	}

	
	/**
	 * 결재 정보 / 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		List<Map<String, Object>> dsWfApprovalMt 	= sr0140wSvc.select01(dsCond);
		List<Map<String, Object>> dsApprList 		= sr0140wSvc.select02(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsWfApprovalMt", dsWfApprovalMt);
		result.addDataSet("dsApprList", dsApprList);

		return result;
	}
	
	
	
	/**
	 * 결재함 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsAppv") List<Map<String, Object>> dsAppv) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {

			try {

				sr0140wSvc.save01(dsAppv);
				srCommSvcImpl.sendNotiReq();
				dsAppv = sr0140wSvc.select01(dsCond);
				result.addDataSet("dsData", dsAppv);

			}catch(Exception e) {
				
				e.printStackTrace();

				if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {

					if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
						result.setErrorCode(-90000);
					}else {
						result.setErrorCode(sc.get().getScSessionCode());
					}
					sc.get().setScSessionCode(0);
					result.setErrorMsg(sc.get().getScSessionMsg());
					sc.get().setScSessionMsg("");
					log.debug("[SRComm]-execReqProc() result.getErrorCode() : " + result.getErrorCode() + " result.getErrorMsg() : " + result.getErrorMsg() + "");

				}else {

					result.setErrorCode(-1);
					if (e.getMessage() != null) {
						result.setErrorMsg("[ERROR]:" + e.getMessage());

					}else {
						log.debug("[SrCommController]-execReqProc() 실행 중 오류가 발생했습니다.");
						result.setErrorMsg("실행 중 오류가 발생했습니다.");
					}
				}
			}
		}
		return result;
	}
}