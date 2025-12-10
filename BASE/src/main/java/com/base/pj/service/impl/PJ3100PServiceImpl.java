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
import com.base.pj.dao.PJ3100PDAO;
import com.base.pj.service.PJ3100PService;

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
public class PJ3100PServiceImpl implements PJ3100PService {

	private Logger log = LoggerFactory.getLogger(PJ3100PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3100PDAO pj3100pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3100pDao.select01(dsCond);

		return result;
	}

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3100pDao.select02(dsCond);

		return result;
	}
	
	/**
	 * Action Item 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsRisk, List<Map<String, Object>> dsRiskAction) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsRisk.size();
		Map<String, Object> rowData = null;

		String riskId = "";
		
		if(rowCnt > 0) {
			rowData = dsRisk.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj3100pDao.insert01(rowData);
	    		riskId = StringUtil.safe(rowData.get("RISK_ID"));
	    		//log.debug("PJ3100PServiceImpl INSERT01 riskId ===============> " + riskId);
	    		fommMultipartService.replaceTempKey("PJ_RISK", null, riskId);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj3100pDao.modify01(rowData);
	    	}
		}
		
		//log.debug("PJ3100PServiceImpl dsRiskAction.size() ===============> " + dsRiskAction.size());
		
		for (int i = 0; i < dsRiskAction.size(); i++) {

			rowData = dsRiskAction.get(i);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			//log.debug("PJ3100PServiceImpl dsRiskAction i=" + i + " ROWFLAG " + rowFlag);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String tempRiskId	= StringUtil.safe(rowData.get("RISK_ID"));
	    	String tempActId	= StringUtil.safe(rowData.get("ACT_ID"));
	    	
	    	if("".equals(tempRiskId)) tempRiskId = "TEMP_KEY_" + userId;
	    	
	    	//Master가 신규 저장된 경우 Master에 생성된 키값을 Detail RowData에 셋팅
	    	if(!"".equals(riskId)) rowData.put("RISK_ID", riskId);
	    	
	    	//log.debug("PJ3100PServiceImpl dsRiskAction i=" + i + " riskId : " + riskId + " RISK_ID " + rowData.get("RISK_ID"));

	    	if("I".equals(rowFlag)) {
	    		pj3100pDao.insert02(rowData);
	    		String pk1 = StringUtil.safe(rowData.get("RISK_ID"));
	    		String pk2 = StringUtil.safe(rowData.get("ACT_ID"));
	    		
	    		log.debug("PJ3100PServiceImpl dsRiskAction i=" + i + " tempRiskId=[" + tempRiskId + "] tempActId=[" + tempActId + "] pk1=[" + pk1 + "] pk2=[" + pk2 + "]");
	    		fommMultipartService.replaceTempKey("PJ_RISK_ACTION", new String[]{tempRiskId, tempActId}, pk1, pk2);

	    	}else if("U".equals(rowFlag)) {
	    		pj3100pDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj3100pDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_RISK_ACTION");
	    		rowData.put("PK1", rowData.get("RISK_ID"));
	    		rowData.put("PK2", rowData.get("ACT_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		return riskId;
	}
}