package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0530WDAO;
import com.base.fomm.service.FOMM0530WService;

/**
 * 
 * <pre>
 * @title
 * - 문자발송이력 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정해운		최초작성
 */
@Service
public class FOMM0530WServiceImpl implements FOMM0530WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0530WDAO fomm0530wDao;

	/**
	 * 문자발송이력 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0530wDao.select01(dsCond);
		return result;
	}

	/**
	 * 문자발송이력 저장
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
	    		fomm0530wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0530wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0530wDao.remove01(rowData);
	    	}
		}
	}
}