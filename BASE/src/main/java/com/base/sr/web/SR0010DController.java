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
import com.base.com.service.FommAuthService;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR0010DService;
import com.base.sr.service.impl.SR0010DServiceImpl;

/**
 * 
 * <pre>
 * @title
 * - 결재선 공통 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 26.	정보윤		최초작성
 */
@Controller
@RequestMapping("SR0010D")
public class SR0010DController {

	private Logger log = LoggerFactory.getLogger(SR0010DController.class);
	
	@Autowired
	private SR0010DService sr0010dSvc;
	
	@Autowired
	private SR0010DServiceImpl sr0010dSvcImpl;

	@Autowired
	private FommAuthService fommAuthSvc;

	/**
	 * 결재차수 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectApprInfo")
	public NexacroResult selectApprInfo(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();
		
		String[] apvWfProcCdArr = sr0010dSvcImpl.getApvWfPorCdStr(dsCond, true);

		Map<String, Object> dsCurApprLvlSeq = sr0010dSvcImpl.getCurApprLvlSeq(dsCond);
		result.addDataSet("dsCurApprLvlSeq", dsCurApprLvlSeq);
		
		String reqTmplatId	= StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer = StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));
		
		List<Map<String, Object>> procAppvHtList = sr0010dSvcImpl.getProcAppvHtList(reqTmplatId, reqTmplatVer, apvWfProcCdArr);
		result.addDataSet("dsWfReqAppvDt", procAppvHtList);

		List<Map<String, Object>> wfApprovalMtList = sr0010dSvcImpl.getProcAppvUserList(dsCond, true);	//단계별 결재선을 취합해서 UI에 전체로 보낼 LIST
		List<Map<String, Object>> wfApprovalRefMtList = sr0010dSvcImpl.getProcAppvRefUserList(dsCond);	//단계별 결재선(참조) 을 취합해서 UI에 전체로 보낼 LIST
		
		if(wfApprovalMtList != null) {
			log.debug("wfApprovalMtList.size()=======================================================>" + wfApprovalMtList.size());
		}

		if(wfApprovalRefMtList != null) {
			log.debug("wfApprovalRefMtList.size()=======================================================>" + wfApprovalRefMtList.size());
		}
		
		result.addDataSet("dsWfApprovalMt", wfApprovalMtList);
		result.addDataSet("dsWfApprovalRefMt", wfApprovalRefMtList);

		return result;
	}

	/**
	 * 결재선 공통 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsWfApprovalMt = sr0010dSvc.select01(dsCond);
		result.addDataSet("dsWfApprovalMt", dsWfApprovalMt);
		
		String searchRefYn = StringUtil.safe(dsCond.get("SEARCH_REF_YN"));
		
		if("Y".equals(searchRefYn)) {
			List<Map<String, Object>> dsWfApprovalRefMt = sr0010dSvc.select03(dsCond);
			result.addDataSet("dsWfApprovalRefMt", dsWfApprovalRefMt);
		}
		return result;
	}

	/**
	 * 결재선 공통 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsWfApprovalMt") List<Map<String, Object>> dsWfApprovalMt,
								@ParamDataSet(name = "dsWfApprovalRefMt") List<Map<String, Object>> dsWfApprovalRefMt) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr0010dSvc.save01(dsWfApprovalMt, dsWfApprovalRefMt);
		}else {

			return result;
		}
		return result;
	}

	/**
	 * 만족도조사 문항 및 응답 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsSatiInvest = sr0010dSvc.select02(dsCond);
		result.addDataSet("dsSatiInvest", dsSatiInvest);
		return result;
	}

	/**
	 * 만족도조사 답변 등록
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save02")
	public NexacroResult save02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
								@ParamDataSet(name = "dsSatiInvest") List<Map<String, Object>> dsSatiInvest) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		sr0010dSvc.save02(dsCond, dsSatiInvest);
		return result;
	}

	/**
	 * 결재선 참조 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsWfApprovalRefMt = sr0010dSvc.select03(dsCond);
		result.addDataSet("dsWfApprovalRefMt", dsWfApprovalRefMt);
		return result;
	}
	
	
}