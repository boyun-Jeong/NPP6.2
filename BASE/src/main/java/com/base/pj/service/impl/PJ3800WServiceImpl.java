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
import com.base.pj.dao.PJ3800WDAO;
import com.base.pj.service.PJ3800WService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 26.	정보윤		최초작성
 */
@Service
public class PJ3800WServiceImpl implements PJ3800WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3800WDAO pj3800wDao;

//	@Autowired
//	private FommMultipartService fommMultipartService;

	/**
	 * 요구관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3800wDao.select01(dsCond);

		return result;
	}

	/**
	 * 요구관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("D".equals(rowFlag)) {
	    		pj3800wDao.remove01(rowData);
	    		pj3800wDao.remove02(rowData);
	    		pj3800wDao.remove03(rowData);
	    		pj3800wDao.remove04(rowData);
	    		pj3800wDao.remove05(rowData);
	    		
//	    		rowData.put("KEY_TBL", "PJ_RISK");
//	    		rowData.put("PK1", rowData.get("RISK_ID"));
//	    		fommMultipartService.removeFileInfo(rowData);
//	    		
//	    		rowData.put("KEY_TBL", "PJ_RISK_ACTION");
//	    		rowData.put("PK1", rowData.get("RISK_ID"));
//	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}