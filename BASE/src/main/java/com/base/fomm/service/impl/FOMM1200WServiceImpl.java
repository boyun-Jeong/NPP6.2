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
import com.base.fomm.dao.FOMM1200WDAO;
import com.base.fomm.service.FOMM1200WService;

/**
 * 
 * <pre>
 * @title
 * - 서식관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 17.	정해운		최초작성
 */
@Service
public class FOMM1200WServiceImpl implements FOMM1200WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM1200WDAO fomm1200wDao;

	/**
	 * 서식관리 목록 조회
	 */
	public List<Map<String, Object>> selectCatNh(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1200wDao.selectCatNh(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> chkDupCatNh(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1200wDao.chkDupCatNh(dsCond);
		return result;
	}

	/**
	 * 서식관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm 	= sc.get().getScUserNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("userNm", userNm);

	    	if("I".equals(rowFlag)) {
	    		fomm1200wDao.insertCatNh(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm1200wDao.updateCatNh(rowData);
	    	}
		}
	}
}