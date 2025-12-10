package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ3200PDAO;
import com.base.pj.service.PJ3200PService;

/**
 * 
 * <pre>
 * @title
 * - Action Item 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Service
public class PJ3200PServiceImpl implements PJ3200PService {

	private Logger log = LoggerFactory.getLogger(PJ3200PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3200PDAO pj3200pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3200pDao.select01(dsCond);

		return result;
	}

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3200pDao.select02(dsCond);

		return result;
	}
	
	/**
	 * Action Item 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsIssue, List<Map<String, Object>> dsIssueAction) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsIssue.size();
		Map<String, Object> rowData = null;

		String issueId = "";
		
		if(rowCnt > 0) {
			rowData = dsIssue.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj3200pDao.insert01(rowData);
	    		issueId = StringUtil.safe(rowData.get("ISSUE_ID"));
	    		//log.debug("PJ3200PServiceImpl INSERT01 issueId ===============> " + issueId);
	    		fommMultipartService.replaceTempKey("PJ_ISSUE", null, issueId);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj3200pDao.modify01(rowData);
	    	}
		}
		
		//log.debug("PJ3200PServiceImpl dsRiskAction.size() ===============> " + dsRiskAction.size());
		
		for (int i = 0; i < dsIssueAction.size(); i++) {

			rowData = dsIssueAction.get(i);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			//log.debug("PJ3200PServiceImpl dsRiskAction i=" + i + " ROWFLAG " + rowFlag);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String tempIssueId	= StringUtil.safe(rowData.get("ISSUE_ID"));
	    	String tempActId	= StringUtil.safe(rowData.get("ACT_ID"));
	    	
	    	if("".equals(tempIssueId)) tempIssueId = "TEMP_KEY_" + userId;
	    	
	    	//Master가 신규 저장된 경우 Master에 생성된 키값을 Detail RowData에 셋팅
	    	if(!"".equals(issueId)) rowData.put("ISSUE_ID", issueId);
	    	
	    	//log.debug("PJ3200PServiceImpl dsIssueAction i=" + i + " issueId : " + issueId + " RISK_ID " + rowData.get("ISSUE_ID"));

	    	if("I".equals(rowFlag)) {
	    		pj3200pDao.insert02(rowData);
	    		String pk1 = StringUtil.safe(rowData.get("ISSUE_ID"));
	    		String pk2 = StringUtil.safe(rowData.get("ACT_ID"));
	    		
	    		log.debug("PJ3200PServiceImpl dsRiskAction i=" + i + " tempRiskId=[" + tempIssueId + "] tempActId=[" + tempActId + "] pk1=[" + pk1 + "] pk2=[" + pk2 + "]");
	    		fommMultipartService.replaceTempKey("PJ_ISSUE_ACTION", new String[]{tempIssueId, tempActId}, pk1, pk2);

	    	}else if("U".equals(rowFlag)) {
	    		pj3200pDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj3200pDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_ISSUE_ACTION");
	    		rowData.put("PK1", rowData.get("ISSUE_ID"));
	    		rowData.put("PK2", rowData.get("ACT_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		return issueId;
	}
}