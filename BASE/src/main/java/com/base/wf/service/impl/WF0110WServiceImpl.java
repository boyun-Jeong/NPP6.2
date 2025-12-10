package com.base.wf.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.wf.dao.WF0110WDAO;
import com.base.wf.service.WF0110WService;

/**
 * 
 * <pre>
 * @title
 * - 워크플로우 관리 Service(구현체)
 * @package com.base.wf.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 24.	정보윤		최초작성
 */
@Service
public class WF0110WServiceImpl implements WF0110WService {

	private Logger log = LoggerFactory.getLogger(WF0110WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private WF0110WDAO wf0110wDao;

	/**
	 * 워크플로우 Type 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = wf0110wDao.select01(dsCond);

		return result;
	}
	
	/**
	 * 워크플로우 Type 단계 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = wf0110wDao.select02(dsCond);

		return result;
	}

	/**
	 * 워크플로우 Type 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsDataM, List<Map<String, Object>> dsDataD) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		int rowCnt = dsDataM.size();
		
		String lastWfId = "";
		String newWfId = "";

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsDataM.get(i);
			
			 // DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			if("U".equals(rowFlag)) {
				lastWfId = StringUtil.safe(rowData.get("WF_ID"));
			}

			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		wf0110wDao.insert01(rowData);
	    		lastWfId = StringUtil.safe(rowData.get("WF_ID"));
	    		
	    		if("Y".equals(rowData.get("SEL_YN"))) {
	    			newWfId = StringUtil.safe(rowData.get("WF_ID"));;
	    		}
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		wf0110wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		wf0110wDao.remove01(rowData);
	    	}
		}
		
		log.debug("WF0110WServiceImpl save01() lastWfId : " + lastWfId + " newWfId : " + newWfId);
		log.debug("WF0110WServiceImpl save01() dsDataD.size() :::::::::::::::::: " + dsDataD.size());

		rowCnt = dsDataD.size();
		
		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsDataD.get(i);
			
			if(!"".equals(newWfId)) {
				rowData.put("WF_ID", newWfId);
			}

	        // DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

			if("I".equals(rowFlag)) {
				wf0110wDao.modify02(rowData);
	    	}
	    	else if("D".equals(rowFlag)) {
	    		wf0110wDao.remove02(rowData);
	    	}
		}
		
		return lastWfId;	//마스터 그리드 최종 수정된 행의 wf_id 값을 리턴한다. 
	}
}