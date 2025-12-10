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
import com.base.fomm.dao.FOMM1400WDAO;
import com.base.fomm.service.FOMM1400WService;

/**
 * 
 * <pre>
 * @title
 * - 난이도관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 24.	정해운		최초작성
 */
@Service
public class FOMM1400WServiceImpl implements FOMM1400WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM1400WDAO fomm1400wDao;

	/**
	 * 난이도관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1400wDao.select01(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1400wDao.select02(dsCond);
		return result;
	}

	/**
	 * 난이도관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData, List<Map<String, Object>> dsDataItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm 	= sc.get().getScUserNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm1400wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm1400wDao.modify01(rowData);
	    	}else if("D".equals(rowFlag)) {
	    		fomm1400wDao.remove01(rowData);
	    		fomm1400wDao.remove02(rowData);
	    	}
		}
	
		for (int j = 0; j < dsDataItem.size(); j++) {
			Map<String, Object> rowDataItem = dsDataItem.get(j);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowDataItem.get("ROWFLAG"));
	    	rowDataItem.put("LMID", userId);
	    	rowDataItem.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm1400wDao.insert02(rowDataItem);

	    	}else if("U".equals(rowFlag)) {
	    		fomm1400wDao.modify02(rowDataItem);

	    	}else if("D".equals(rowFlag)) {
	    		fomm1400wDao.remove02(rowDataItem);
	    	}
		}
	}
	
	/**
	 * 난이도관리 삭제
	 */
	@Transactional
	public void delMng(Map<String, Object> dsCond) {
		fomm1400wDao.remove01(dsCond);
		fomm1400wDao.remove02(dsCond);
	}
}