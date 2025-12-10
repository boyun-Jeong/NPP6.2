package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ3100WDAO;
import com.base.pj.service.PJ3100WService;

/**
 * 
 * <pre>
 * @title
 * - 위험관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 18.	정보윤		최초작성
 */
@Service
public class PJ3100WServiceImpl implements PJ3100WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3100WDAO pj3100wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 위험관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3100wDao.select01(dsCond);

		return result;
	}

	/**
	 * 위험관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));	    	

	    	if("D".equals(rowFlag)) {	    		
	    		pj3100wDao.remove01(rowData);
	    		pj3100wDao.remove02(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_RISK");
	    		rowData.put("PK1", rowData.get("RISK_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_RISK_ACTION");
	    		rowData.put("PK1", rowData.get("RISK_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}