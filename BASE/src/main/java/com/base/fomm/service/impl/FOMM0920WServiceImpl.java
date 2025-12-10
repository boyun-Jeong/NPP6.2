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
import com.base.fomm.dao.FOMM0920WDAO;
import com.base.fomm.service.FOMM0920WService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지수신함 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Service
public class FOMM0920WServiceImpl implements FOMM0920WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0920WDAO fomm0920wDao;

	/**
	 * 쪽지수신함 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0920wDao.select01(dsCond);
		return result;
	}

	/**
	 * 쪽지수신함 저장
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
	    		fomm0920wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0920wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0920wDao.remove01(rowData);
	    	}
		}
	}
}