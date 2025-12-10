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
import com.base.pj.dao.PJ4700PDAO;
import com.base.pj.service.PJ4700PService;

/**
 * 
 * <pre>
 * @title
 * - 보고서 상세 Service(구현체)
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
public class PJ4700PServiceImpl implements PJ4700PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4700PDAO pj4700pDao;

	/**
	 * 보고서 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4700pDao.select01(dsCond);
		return result;
	}

	/**
	 * 보고서 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4700pDao.select02(dsCond);
		return result;
	}

	/**
	 * 보고서 상세 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4700pDao.select03(dsCond);
		return result;
	}

	/**
	 * 보고서 상세 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4700pDao.select04(dsCond);
		return result;
	}

	/**
	 * 보고서 상세 목록 조회
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4700pDao.select05(dsCond);
		return result;
	}

	/**
	 * 보고서 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsReportprg,
						 List<Map<String, Object>> dsScrMap,
						 List<Map<String, Object>> dsBatchjobMap,
						 List<Map<String, Object>> dsFuncMap,
						 List<Map<String, Object>> dsReqMap) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String rpprId = "";

		if(dsReportprg.size() > 0) {
			Map<String, Object> rowData = dsReportprg.get(0);
			
			 // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj4700pDao.insert01(rowData);
	    		rpprId = StringUtil.safe(rowData.get("RPPR_ID"));
	    	}
	    	else if("U".equals(rowFlag)) {
	    		pj4700pDao.modify01(rowData);
	    	}
		}
		
		for (int i = 0; i < dsScrMap.size(); i++) {
			Map<String, Object> rowData = dsScrMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if(!"".equals(rpprId)) {
	    		rowData.put("REF_ID", rpprId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4700pDao.insert02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4700pDao.remove01(rowData);
	    	}
		}

		for (int i = 0; i < dsBatchjobMap.size(); i++) {			

			Map<String, Object> rowData = dsBatchjobMap.get(i);
			
	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(rpprId)) {
	    		rowData.put("REF_ID", rpprId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4700pDao.insert03(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4700pDao.remove02(rowData);
	    	}
		}

		for (int i = 0; i < dsFuncMap.size(); i++) {			

			Map<String, Object> rowData = dsFuncMap.get(i);
			
	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(rpprId)) {
	    		rowData.put("REF_ID", rpprId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4700pDao.insert04(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4700pDao.remove03(rowData);
	    	}
		}

		for (int i = 0; i < dsReqMap.size(); i++) {			

			Map<String, Object> rowData = dsReqMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if(!"".equals(rpprId)) {
	    		rowData.put("REF_ID", rpprId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj4700pDao.insert05(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj4700pDao.remove04(rowData);
	    	}
		}
		return rpprId;
	}
}