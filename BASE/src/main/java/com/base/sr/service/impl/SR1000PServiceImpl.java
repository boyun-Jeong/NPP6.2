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
import com.base.sr.dao.SR1000PDAO;
import com.base.sr.service.SR1000PService;

/**
 * 
 * <pre>
 * @title
 * - 보안성검토  조회(비정기 팝업시) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  A
 * @since   2024. 10. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 10. 22.	A		최초작성
 */
@Service
public class SR1000PServiceImpl implements SR1000PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR1000PDAO sr1000pDao;

	/**
	 * 보안성검토  조회(비정기 팝업시) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr1000pDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 프로그램  조회(비정기 팝업시) 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr1000pDao.select02(dsCond);
		return result;
	}
	

	/**
	 * 보안성검토  조회(비정기 팝업시) 저장
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
	    		sr1000pDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr1000pDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr1000pDao.remove01(rowData);
	    	}
		}
	}
}