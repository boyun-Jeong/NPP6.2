package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ0300WDAO;
import com.base.pj.service.PJ0300WService;
import com.base.pj.web.PJ0300WController;

/**
 * 
 * <pre>
 * @title
 * - 산출물 등록 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 27.	정보윤		최초작성
 */
@Service
public class PJ0300WServiceImpl implements PJ0300WService {

	private Logger log = LoggerFactory.getLogger(PJ0300WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0300WDAO pj0300wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 산출물 등록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0300wDao.select01(dsCond);

		return result;
	}

	/**
	 * 서브 프로젝트 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0300wDao.select02(dsCond);

		return result;
	}

	/**
	 * WBS 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0300wDao.select03(dsCond);

		return result;
	}

	/**
	 * 산출물 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0300wDao.select04(dsCond);

		return result;
	}

	/**
	 * 산출물 등록 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsPjDelivery, List<Map<String, Object>> dsPjDlvrWbsMap) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsPjDelivery.size(); i++) {
			Map<String, Object> rowData = dsPjDelivery.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0300wDao.insert01(rowData);
	    		fommMultipartService.replaceTempKey("PJ_DELIVERY", StringUtil.safe(rowData.get("TMP_DLVR_ID")), StringUtil.safe(rowData.get("DLVR_ID")));

	    	}else if("U".equals(rowFlag)) {
	    		pj0300wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0300wDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_DELIVERY");
	    		rowData.put("PK1", StringUtil.safe(rowData.get("DLVR_ID")));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		
		for (int i = 0; i < dsPjDlvrWbsMap.size(); i++) {
			Map<String, Object> rowData = dsPjDlvrWbsMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	String dlvrId = StringUtil.safe(rowData.get("DLVR_ID"));
	    	String tmpDlvrId = StringUtil.safe(rowData.get("DLVR_ID"));
	    	
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("".equals(dlvrId)) {
    			
    			for (int j = 0; j < dsPjDelivery.size(); j++) {
    				
    				String mTmpDlvrId = StringUtil.safe(dsPjDelivery.get(j).get("TMP_DLVR_ID"));	    				
    				
    				log.debug("i==" + i + " j==" + j + " mTmpDlvrId : " + mTmpDlvrId);
    				
    				if(mTmpDlvrId.equals(tmpDlvrId)) {
    					String dDlvrId = StringUtil.safe(dsPjDelivery.get(j).get("DLVR_ID"));
    					String dDlvrName = StringUtil.safe(dsPjDelivery.get(j).get("DLVR_NAME"));
    					
    					log.debug("j==" + j + " dDlvrId : " + dDlvrId + " dDlvrId : " + dDlvrName);
    					rowData.put("DLVR_ID", dDlvrId);
    					rowData.put("DLVR_NAME", dDlvrName);
    					break;
    				}
    			}
    		}

	    	if("I".equals(rowFlag)) {
	    		pj0300wDao.insert02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0300wDao.remove02(rowData);
	    	}
		}
	}
}