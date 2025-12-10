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
import com.base.pj.dao.PJ0700WDAO;
import com.base.pj.service.PJ0700WService;

/**
 * 
 * <pre>
 * @title
 * - 마일스톤 관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 25.	정보윤		최초작성
 */
@Service
public class PJ0700WServiceImpl implements PJ0700WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0700WDAO pj0700wDao;

	/**
	 * 마일스톤 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0700wDao.select01(dsCond);

		return result;
	}

	/**
	 * 마일스톤 관리 저장
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
	    		pj0700wDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj0700wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj0700wDao.remove01(rowData);
	    	}
		}
	}
}