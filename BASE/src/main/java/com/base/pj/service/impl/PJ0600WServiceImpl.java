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
import com.base.pj.dao.PJ0600WDAO;
import com.base.pj.service.PJ0600WService;

/**
 * 
 * <pre>
 * @title
 * - 회의 관리 Service(구현체)
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
public class PJ0600WServiceImpl implements PJ0600WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0600WDAO pj0600wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 회의 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = pj0600wDao.select01(dsCond);

		return result;
	}

	/**
	 * 회의 관리 저장
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
	    		pj0600wDao.remove01(rowData);
	    		pj0600wDao.remove02(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_MEETING");
	    		rowData.put("FLDR_NM", "pj");
	    		rowData.put("PK1", rowData.get("MEET_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}