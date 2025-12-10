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
import com.base.pj.dao.PJ5200WDAO;
import com.base.pj.service.PJ5200WService;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 결함관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	이정빈		최초작성
 */
@Service
public class PJ5200WServiceImpl implements PJ5200WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5200WDAO pj5200wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 단위 테스트 결함관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5200wDao.select01(dsCond);

		return result;
	}

	/**
	 * 단위 테스트 결함관리 저장
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
	    		pj5200wDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_UT_DEFECT");
	    		rowData.put("PK1", rowData.get("UTDFT_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}