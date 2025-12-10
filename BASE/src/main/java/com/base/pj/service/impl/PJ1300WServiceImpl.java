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
import com.base.pj.dao.PJ1300WDAO;
import com.base.pj.service.PJ1300WService;

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
public class PJ1300WServiceImpl implements PJ1300WService {

	private Logger log = LoggerFactory.getLogger(PJ1300WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1300WDAO pj1300wDao;

	/**
	 * 방법론/산출물정의 목록 조회
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
	public List<Map<String, Object>> select01() {

		List<Map<String, Object>> result = pj1300wDao.select01();
		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1300wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 방법론/산출물정의 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjEvalList, List<Map<String, Object>> dsPjEvalItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String evalListId = "";
		
		int rowCnt = dsPjEvalList.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjEvalList.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj1300wDao.insert01(rowData);
	    		evalListId = StringUtil.safe(rowData.get("EVAL_LIST_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj1300wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj1300wDao.remove01(rowData);
	    		pj1300wDao.remove02(rowData);
	    	}
		}
		
		rowCnt = dsPjEvalItem.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjEvalItem.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag)) {
	    		String dTmpEvalListId = StringUtil.safe(rowData.get("TEMP_EVAL_LIST_ID"));
	    		String dEvalListId = StringUtil.safe(rowData.get("EVAL_LIST_ID"));
	    		
	    		if("".equals(dEvalListId)) {
	    			for (int j = 0; j < dsPjEvalList.size(); j++) {
		    			String mTmpEvalListId	= StringUtil.safe(dsPjEvalList.get(j).get("TEMP_EVAL_LIST_ID"));
						if(mTmpEvalListId.equals(dTmpEvalListId)) {
							dEvalListId = StringUtil.safe(dsPjEvalList.get(j).get("EVAL_LIST_ID"));
							break;
						}
					}
	    		}

	    		rowData.put("EVAL_LIST_ID", dEvalListId);
	    		pj1300wDao.insert02(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		pj1300wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj1300wDao.remove03(rowData);
	    	}
		}
		return evalListId;
	}
}