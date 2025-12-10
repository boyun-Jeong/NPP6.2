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
import com.base.sr.dao.SR5014DDAO;
import com.base.sr.service.SR5014DService;

/**
 * 
 * <pre>
 * @title
 * - 위치별 IP대역 관리 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 06.	정해운		최초작성
 */
@Service
public class SR5014DServiceImpl implements SR5014DService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR5014DDAO sr5014dDao;

	/**
	 * 위치별 IP대역 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5014dDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 위치별 IP대역 관리 목록 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5014dDao.select02(dsCond);
		return result;
	}

	/**
	 * 위치별 IP대역 관리 저장
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
	    		sr5014dDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr5014dDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr5014dDao.remove01(rowData);
	    	}
		}
	}
}