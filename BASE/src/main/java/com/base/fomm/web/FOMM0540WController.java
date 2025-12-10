package com.base.fomm.web;

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
import com.base.fomm.service.FOMM0540WService;
import com.base.fwk.util.StringUtil;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title
 * - 즉시알림발송 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 13.	정보윤		최초작성
 */
@Controller
@RequestMapping("FOMM0540W")
public class FOMM0540WController {

	private Logger log = LoggerFactory.getLogger(FOMM0540WController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0540WService fomm0540wSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 즉시알림발송 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommNotiSendMtHist = fomm0540wSvc.select01(dsCond);
		result.addDataSet("dsFommNotiSendMtHist", dsFommNotiSendMtHist);
		return result;
	}

	/**
	 * 즉시알림발송 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
											   @ParamDataSet(name = "dsFommNotiSendMt") Map<String, Object> dsFommNotiSendMt,
											   @ParamDataSet(name = "dsUserList") List<Map<String, Object>> dsUserList) throws Exception {
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			try {
				fomm0540wSvc.save01(dsFommNotiSendMt, dsUserList);
				List<Map<String, Object>> dsFommNotiSendMtHist = fomm0540wSvc.select01(dsCond);
				result.addDataSet("dsFommNotiSendMtHist", dsFommNotiSendMtHist);

			}catch(Exception e) {
				
				if (!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {

					if (StringUtil.safeInt(sc.get().getScSessionCode(), 0) == 0) {
						result.setErrorCode(-90000);
					} else {
						result.setErrorCode(sc.get().getScSessionCode());
					}
					sc.get().setScSessionCode(0);
					result.setErrorMsg(sc.get().getScSessionMsg());
					sc.get().setScSessionMsg("");
					log.debug("[SRComm]-save result.getErrorCode() : " + result.getErrorCode() + " result.getErrorMsg() : " + result.getErrorMsg() + "");

				} else {

					result.setErrorCode(-1);
					if (e.getMessage() != null) {
						result.setErrorMsg("[ERROR]:" + e.getMessage());
					} else {
						log.debug("SrCommController [save] 실행 중 오류가 발생했습니다.");
						result.setErrorMsg("실행 중 오류가 발생했습니다.");
					}
				}
			}

		}else {

			return result;
		}
		return result;
	}
}