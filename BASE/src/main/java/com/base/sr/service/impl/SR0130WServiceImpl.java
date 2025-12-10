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
import com.base.sr.dao.SR0130WDAO;
import com.base.sr.service.SR0130WService;

/**
 * 
 * <pre>
 * @title
 * - 처리함 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	정보윤		최초작성
 */
@Service
public class SR0130WServiceImpl implements SR0130WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0130WDAO sr0130wDao;

	
	/**
	 * 처리함 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{
		// session 사번
		String userId 	= sc.get().getScUserId();
		dsCond.put("USER_ID", userId);
		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = sr0130wDao.select01(dsCond);
		return result;
	}

	
	
	/**
	 * 처리함 저장
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
	    		sr0130wDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		sr0130wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		sr0130wDao.remove01(rowData);
	    	}
		}
	}
}