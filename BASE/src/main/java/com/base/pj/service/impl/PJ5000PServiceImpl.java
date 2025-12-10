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
import com.base.pj.dao.PJ5000PDAO;
import com.base.pj.service.PJ5000PService;

/**
 * 
 * <pre>
 * @title
 * - 단위테스트 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 07.	정보윤		최초작성
 */
@Service
public class PJ5000PServiceImpl implements PJ5000PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5000PDAO pj5000pDao;

	/**
	 * 단위테스트 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5000pDao.select01(dsCond);

		return result;
	}

	/**
	 * 단위테스트 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5000pDao.select02(dsCond);

		return result;
	}

	/**
	 * 단위테스트 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String utestId = "";

		if(dsData.size() > 0) {
			Map<String, Object> rowData = dsData.get(0);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj5000pDao.insert01(rowData);
	    		utestId = StringUtil.safe(rowData.get("UTEST_ID"));

	    	}else if("U".equals(rowFlag)) {
	    		pj5000pDao.modify01(rowData);
	    	}
		}
		return utestId;
	}
}