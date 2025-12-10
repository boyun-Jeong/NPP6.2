package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0400WDAO;
import com.base.fomm.service.FOMM0400WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 만족도 항목관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 12. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 20.	정보윤		최초작성
 */
@Service
public class FOMM0400WServiceImpl implements FOMM0400WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0400WDAO fomm0400wDao;

	/**
	 * 만족도 항목관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0400wDao.select01(dsCond);
		return result;
	}

	/**
	 * 만족도 항목관리 아이템 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0400wDao.select02(dsCond);
		return result;
	}

	/**
	 * 만족도 항목관리/아이템 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsSatiqstMng, List<Map<String, Object>> dsSatiQstItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i <dsSatiqstMng.size(); i++) {
			Map<String, Object> rowData = dsSatiqstMng.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0400wDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		fomm0400wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		fomm0400wDao.remove01(rowData);
	    	}
		}

		for (int i = 0; i <dsSatiQstItem.size(); i++) {
			Map<String, Object> rowData = dsSatiQstItem.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		String tempSatiQstId = StringUtil.safe(rowData.get("TEMP_SATI_QST_ID"));
	    		String satiQstId = StringUtil.safe(rowData.get("SATI_QST_ID"));

	    		if("".equals(satiQstId)) {
	    			for (int j = 0; j < dsSatiqstMng.size(); j++) {
	    				String MtempSatiQstId = StringUtil.safe(dsSatiqstMng.get(j).get("TEMP_SATI_QST_ID"));
	    				
	    				if(tempSatiQstId.equals(MtempSatiQstId)) {
	    					rowData.put("SATI_QST_ID", StringUtil.safe(dsSatiqstMng.get(j).get("SATI_QST_ID")));
	    					break;
	    				}
					}
	    		}
	    		fomm0400wDao.insert02(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		fomm0400wDao.modify02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		fomm0400wDao.remove02(rowData);
	    	}
		}
	}
}