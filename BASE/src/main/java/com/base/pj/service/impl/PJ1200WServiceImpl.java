package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ1200WDAO;
import com.base.pj.service.PJ1200WService;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
@Service
public class PJ1200WServiceImpl implements PJ1200WService {

	private Logger log = LoggerFactory.getLogger(PJ1200WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1200WDAO pj1200wDao;

	/**
	 * 방법론/산출물정의 목록 조회
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
	public List<Map<String, Object>> select01() {

		List<Map<String, Object>> result = pj1200wDao.select01();
		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1200wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 방법론/산출물정의 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjCheckList, List<Map<String, Object>> dsPjCheckItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String checklistId = "";
		
		int rowCnt = dsPjCheckList.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjCheckList.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj1200wDao.insert01(rowData);
	    		checklistId = StringUtil.safe(rowData.get("CHECKLIST_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj1200wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj1200wDao.remove01(rowData);
	    		pj1200wDao.remove02(rowData);
	    	}
		}
		
		rowCnt = dsPjCheckItem.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjCheckItem.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag)) {
	    		String dTmpChecklistId = StringUtil.safe(rowData.get("TEMP_CHECKLIST_ID"));
	    		String dChecklistId = StringUtil.safe(rowData.get("CHECKLIST_ID"));
	    		
	    		if("".equals(dChecklistId)) {
	    			for (int j = 0; j < dsPjCheckList.size(); j++) {
		    			String mTmpChecklistId	= StringUtil.safe(dsPjCheckList.get(j).get("TEMP_CHECKLIST_ID"));
						if(mTmpChecklistId.equals(dTmpChecklistId)) {
							dChecklistId = StringUtil.safe(dsPjCheckList.get(j).get("CHECKLIST_ID"));
							break;
						}
					}
	    		}

	    		rowData.put("CHECKLIST_ID", dChecklistId);
	    		pj1200wDao.insert02(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		pj1200wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj1200wDao.remove03(rowData);
	    	}
		}
		return checklistId;
	}
}