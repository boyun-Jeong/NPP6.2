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
import com.base.fomm.dao.FOMM1000WDAO;
import com.base.fomm.service.FOMM1000WService;

/**
 * 
 * <pre>
 * @title
 * - 자동저장 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 12. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 12. 03.	이훈석		최초작성
 */
@Service
public class FOMM1000WServiceImpl implements FOMM1000WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM1000WDAO fomm1000wDao;

	/**
	 * 자동저장 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		
		//System.out.println("============================service impl ========================== dsCond : " + dsCond.toString());
		
		List<Map<String, Object>> result = fomm1000wDao.select01(dsCond);
		return result;
	}

	/**
	 * 자동저장 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsAutoSaveList) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsAutoSaveList.size(); i++) {
			Map<String, Object> rowData = dsAutoSaveList.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("USER_ID", userId);

	    	if("I".equals(rowFlag)) {
	    		fomm1000wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm1000wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm1000wDao.remove01(rowData);
	    	}
		}
	}
}