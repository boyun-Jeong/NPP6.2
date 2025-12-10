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
import com.base.sr.dao.SR0111WDAO;
import com.base.sr.service.SR0111WService;

/**
 * 
 * <pre>
 * @title
 * - SR0111_W Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 29.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 29.	이정빈		최초작성
 */
@Service
public class SR0111WServiceImpl implements SR0111WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0111WDAO sr0111wDao;

	/**
	 * SR0111_W 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		dsCond.put("GET_USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = sr0111wDao.select01(dsCond);
		return result;
	}

	/**
	 * SR0111_W 저장
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
	    		sr0111wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr0111wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr0111wDao.remove01(rowData);
	    	}
		}
	}
}