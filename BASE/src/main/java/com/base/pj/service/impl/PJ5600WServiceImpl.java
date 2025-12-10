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
import com.base.pj.dao.PJ5600WDAO;
import com.base.pj.service.PJ5600WService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 결함관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 14.	정보윤		최초작성
 */
@Service
public class PJ5600WServiceImpl implements PJ5600WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5600WDAO pj5600wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 시나리오 테스트 결함관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5600wDao.select01(dsCond);
		return result;
	}

	/**
	 * 시나리오 테스트 결함관리 저장
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
	    		pj5600wDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_ST_DEFECT");
	    		rowData.put("PK1", rowData.get("STDFT_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}