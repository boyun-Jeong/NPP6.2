package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ4600PDAO;
import com.base.pj.service.PJ4600PService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 27.	정보윤		최초작성
 */
@Service
public class PJ4600PServiceImpl implements PJ4600PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4600PDAO pj4600pDao;

	/**
	 * 프로그램 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj4600pDao.select01(dsCond);
		return result;
	}

	/**
	 * 프로그램 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj4600pDao.select02(dsCond);
		return result;
	}

	/**
	 * 프로그램 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsProgram, List<Map<String, Object>> dsReqMap) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String prgId = "";

		if(dsProgram.size() > 0) {
			Map<String, Object> rowData = dsProgram.get(0);
			
			 // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj4600pDao.insert01(rowData);
	    		prgId = StringUtil.safe(rowData.get("PRG_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj4600pDao.modify01(rowData);
	    	}
		}
		
		for (int i = 0; i < dsReqMap.size(); i++) {			

			Map<String, Object> rowData = dsReqMap.get(i);
			
	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(prgId)) {
	    		rowData.put("REF_ID", prgId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4600pDao.insert02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4600pDao.remove01(rowData);
	    	}
		}
		return prgId;
	}
}