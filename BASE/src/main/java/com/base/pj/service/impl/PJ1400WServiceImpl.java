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
import com.base.pj.dao.PJ1400WDAO;
import com.base.pj.service.PJ1400WService;

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
public class PJ1400WServiceImpl implements PJ1400WService {

	private Logger log = LoggerFactory.getLogger(PJ1400WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1400WDAO pj1400wDao;

	/**
	 * 방법론/산출물정의 목록 조회
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
	public List<Map<String, Object>> select01() {

		List<Map<String, Object>> result = pj1400wDao.select01();
		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1400wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 방법론/산출물정의 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjQaList, List<Map<String, Object>> dsPjQaItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String qaListId = "";
		
		int rowCnt = dsPjQaList.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjQaList.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj1400wDao.insert01(rowData);
	    		qaListId = StringUtil.safe(rowData.get("QA_LIST_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj1400wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj1400wDao.remove01(rowData);
	    		pj1400wDao.remove02(rowData);
	    	}
		}
		
		rowCnt = dsPjQaItem.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjQaItem.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag)) {
	    		String dTmpQaListId = StringUtil.safe(rowData.get("TEMP_QA_LIST_ID"));
	    		String dQaListId = StringUtil.safe(rowData.get("QA_LIST_ID"));
	    		
	    		if("".equals(dQaListId)) {
	    			for (int j = 0; j < dsPjQaList.size(); j++) {
		    			String mTmpQaListId	= StringUtil.safe(dsPjQaList.get(j).get("TEMP_QA_LIST_ID"));
						if(mTmpQaListId.equals(dTmpQaListId)) {
							dQaListId = StringUtil.safe(dsPjQaList.get(j).get("QA_LIST_ID"));
							break;
						}
					}
	    		}

	    		rowData.put("QA_LIST_ID", dQaListId);
	    		pj1400wDao.insert02(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		pj1400wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj1400wDao.remove03(rowData);
	    	}
		}
		return qaListId;
	}
}