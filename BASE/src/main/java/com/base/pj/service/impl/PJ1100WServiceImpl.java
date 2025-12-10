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
import com.base.pj.dao.PJ1100WDAO;
import com.base.pj.service.PJ1100WService;

/**
 * 
 * <pre>
 * @title
 * - 교육관리 Service(구현체)
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
public class PJ1100WServiceImpl implements PJ1100WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1100WDAO pj1100wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 교육관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1100wDao.select01(dsCond);
		return result;
	}

	/**
	 * 교육관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsPjEducation) {

		int rowCnt = dsPjEducation.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjEducation.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

	    	if("D".equals(rowFlag)) {
	    		pj1100wDao.remove01(rowData);
	    		pj1100wDao.remove02(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_EDUCATION");
	    		rowData.put("PK1", rowData.get("EDU_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
	}
}