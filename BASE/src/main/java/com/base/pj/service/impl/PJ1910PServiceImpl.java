package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ1910PDAO;
import com.base.pj.service.PJ1910PService;

/**
 * 
 * <pre>
 * @title
 * - 품질 이행 평가 관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Service
public class PJ1910PServiceImpl implements PJ1910PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1910PDAO pj1910pDao;

	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_PROJECT]
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1910pDao.select01(dsCond);

		return result;
	}

	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_QA_RST_DISP]
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1910pDao.select02(dsCond);

		return result;
	}

	/**
	 * 품질 이행 평가 관리 목록 조회[DS_PJ_QA_RST]
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1910pDao.select03(dsCond);

		return result;
	}

	/**
	 * 품질 이행 평가 관리 저장
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

	    	if("I".equals(rowFlag)) {
	    		pj1910pDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		pj1910pDao.modify01(rowData);
	    	}
		}
	}
}