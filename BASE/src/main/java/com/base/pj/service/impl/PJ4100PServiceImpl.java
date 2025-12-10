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
import com.base.pj.dao.PJ4100PDAO;
import com.base.pj.service.PJ4100PService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 상세 Service(구현체)
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
public class PJ4100PServiceImpl implements PJ4100PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4100PDAO pj4100pDao;

	/**
	 * 요구관리 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj4100pDao.select01(dsCond);
		return result;
	}

	/**
	 * 요구관리 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj4100pDao.select02(dsCond);
		return result;
	}

	/**
	 * 요구관리 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsFunction, List<Map<String, Object>> dsReqMap) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String funcId = "";

		if(dsFunction.size() > 0) {
			Map<String, Object> rowData = dsFunction.get(0);
			
			 // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj4100pDao.insert01(rowData);
	    		funcId = StringUtil.safe(rowData.get("FUNC_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj4100pDao.modify01(rowData);
	    	}
		}
		
		for (int i = 0; i < dsReqMap.size(); i++) {			

			Map<String, Object> rowData = dsReqMap.get(i);
			
	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(funcId)) {
	    		rowData.put("REF_ID", funcId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4100pDao.insert02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4100pDao.remove01(rowData);
	    	}
		}
		return funcId;
	}
}