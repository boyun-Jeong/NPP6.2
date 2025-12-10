package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0143WDAO;
import com.base.sr.service.SR0143WService;

/**
 * 
 * <pre>
 * @title
 * - 결재이력(FLOW)조회 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 19.	김미성		최초작성
 */
@Service
public class SR0143WServiceImpl implements SR0143WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0143WDAO sr0143wDao;

	/**
	 * 결재이력(FLOW)조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		
		String userId 	= sc.get().getScUserId();
		dsCond.put("LMID", userId);
		
		List<Map<String, Object>> result = sr0143wDao.select01(dsCond);
		return result;
	}

	/**
	 * 결재이력(FLOW)조회 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		sr0143wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr0143wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr0143wDao.remove01(rowData);
	    	}
		}
	}
}