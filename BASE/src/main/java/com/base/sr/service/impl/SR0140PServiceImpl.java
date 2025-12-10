package com.base.sr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0140PDAO;
import com.base.sr.service.SR0140PService;
import com.base.sr.service.SRCommService;
import com.base.sr.web.SR0140PController;

/**
 * 
 * <pre>
 * @title
 * - 결재함 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	이정빈		최초작성
 */
@Service
public class SR0140PServiceImpl implements SR0140PService 
{
	private Logger log = LoggerFactory.getLogger(SR0140PService.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0140PDAO sr0140pDao;

	@Autowired
	private SRCommService srcommSvc;
	
	/**
	 * 결재함 저장
	 */
	@Transactional
	public void saveApprove(List<Map<String, Object>> dsApprInfo) throws Exception
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		int rtnCd		= -1;
		String rtnMsg	= "NULL";
		
		Map<String, Object> rowData = dsApprInfo.get(0);

		String reqId = StringUtil.safe(rowData.get("REQ_ID"));
		String wfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));
		String wfFuncCd = StringUtil.safe(rowData.get("WF_FUNC_CD"));

		//다음 단계/기능을 구한다.
		//String[] nextWfProcFuncCd = srcommSvc.getNextWfProcFuncCd(reqId, "APV", wfProcCd, wfFuncCd);		
		
		rowData.put("USER_ID", userId);
		//rowData.put("NEXT_WF_PROC_CD", nextWfProcFuncCd[0]);
		//rowData.put("NEXT_WF_PROC_CD", nextWfProcFuncCd[1]);
    	rowData.put("LMPID", lmpId);
    	rowData.put("RTN_CD", rtnCd);
		rowData.put("RTN_MSG", rtnMsg);

    	sr0140pDao.saveApprove(rowData);

    	rtnCd = Integer.parseInt(StringUtil.safe(rowData.get("RTN_CD"), "-9998"));

    	log.debug("saveApprove()================================ rtnCd::::" + rowData.get("RTN_CD"));
		log.debug("saveApprove()================================ rtnMsg::::" + rowData.get("RTN_MSG"));

		if(rtnCd < 0) {
    		throw new Exception(rtnMsg);
    	}
	}
	
	/**
	 * 결재함 저장
	 */
	@Transactional
	public void saveReturn(List<Map<String, Object>> dsApprInfo) throws Exception
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		int rtnCd		= -9999;
		String rtnMsg	= "NULL";

		Map<String, Object> rowData = dsApprInfo.get(0);
		rowData.put("RTN_CD", rtnCd);
    	rowData.put("RTN_MSG", rtnMsg);
		rowData.put("USER_ID", userId);
    	rowData.put("LMPID", lmpId);
    	
    	sr0140pDao.saveReturn(rowData);
    	
    	rtnCd = Integer.parseInt(StringUtil.safe(rowData.get("RTN_CD"), "-9998"));
    	
    	log.debug("saveReturn()================================ rtnCd::::" + rtnCd);
		log.debug("saveReturn()================================ rtnMsg::::" + rtnMsg);
		
    	if(rtnCd < 0) {
    		throw new Exception(rtnMsg);
    	}
	}	
}