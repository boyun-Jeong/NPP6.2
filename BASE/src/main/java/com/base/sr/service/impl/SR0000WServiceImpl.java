package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000WDAO;
import com.base.sr.service.SR0000WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 공통 처리 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 30.	정보윤		최초작성
 */
@Service
public class SR0000WServiceImpl implements SR0000WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0000WDAO sr0000wDao;

	/**
	 * 요청서 공통 처리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr0000wDao.select01(dsCond);
		
		if(result.size() > 0) {
			
			if("".equals(StringUtil.safe(result.get(0).get("REQ_ID")))) {
				result.get(0).put("REQ_WISH_TIME", "");
				result.get(0).put("REQ_USER_ID", sc.get().getScUserId());
				result.get(0).put("REQ_USER_NM", sc.get().getScUserNm());
				result.get(0).put("REQ_DEPT_CD", sc.get().getScDeptCd());
				result.get(0).put("REQ_DEPT_NM", sc.get().getScDeptNm());
			}
		}
		return result;
	}

	/**
	 * 요청서 공통 처리 저장
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
	    		sr0000wDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		sr0000wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		sr0000wDao.remove01(rowData);
	    	}
		}
	}
}