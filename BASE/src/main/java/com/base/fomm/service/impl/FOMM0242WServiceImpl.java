package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0242WDAO;
import com.base.fomm.service.FOMM0242WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 업무위임관리(PL권한) Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 14.	정해운		최초작성
 */
@Service
public class FOMM0242WServiceImpl implements FOMM0242WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0242WDAO fomm0242wDao;

	/**
	 * 업무위임관리(PL권한) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0242wDao.select01(dsCond);
		return result;
	}

	/**
	 * 업무위임관리(PL권한) 저장
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
	    		fomm0242wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0242wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0242wDao.remove01(rowData);
	    	}
		}
	}
}