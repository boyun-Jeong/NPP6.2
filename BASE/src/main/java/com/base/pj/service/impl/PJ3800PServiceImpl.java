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
import com.base.pj.dao.PJ3800PDAO;
import com.base.pj.service.PJ3800PService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
@Service
public class PJ3800PServiceImpl implements PJ3800PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3800PDAO pj3800pDao;

	/**
	 * 요구관리 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3800pDao.select01(dsCond);

		return result;
	}

	/**
	 * 요구관리 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsData.size();

		String reqId = "";

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj3800pDao.insert01(rowData);
	    		reqId = StringUtil.safe(rowData.get("REQ_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj3800pDao.modify01(rowData);
	    	}
		}
		return reqId;
	}
}