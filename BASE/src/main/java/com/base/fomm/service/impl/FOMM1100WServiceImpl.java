package com.base.fomm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM1100WDAO;
import com.base.fomm.service.FOMM1100WService;

/**
 * 
 * <pre>
 * @title
 * - 서비스별 담당자관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 10.	정해운		최초작성
 */
@Service
public class FOMM1100WServiceImpl implements FOMM1100WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM1100WDAO fomm1100wDao;

	/**
	 * 서비스별 담당자관리 목록 조회
	 */
	public List<Map<String, Object>> selectStaffSvcMng(Map<String, Object> dsCond) {
		
		String deptNm 	= sc.get().getScDeptNm();
		
		dsCond.put("DEPT_NM", deptNm);
		
		List<Map<String, Object>> result = fomm1100wDao.selectStaffSvcMng(dsCond);
		return result;
	}  
	
	public List<LinkedHashMap<String, Object>> selectExlStaffSvcMng() {
		List<LinkedHashMap<String, Object>> result = fomm1100wDao.selectExlStaffSvcMng();
		return result;
	}	
	
	public List<Map<String, Object>> selectChgHist(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1100wDao.selectChgHist(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> selectSvcType(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1100wDao.selectSvcType(dsCond);
		return result;
	} 
	
	public List<Map<String, Object>> chkDup(List<Map<String, Object>> dsChkTmp) {
		
		
		Map<String, Object> rowData = new HashMap<>();
		
		List<Map<String, Object>> rtnList = new ArrayList<>();
		
		for (int i = 0; i < dsChkTmp.size(); i++) {
			rowData = dsChkTmp.get(i);
			
			Map<String, Object> result = fomm1100wDao.chkDup(rowData);
			if(result != null && result.size() > 0) {
				rtnList.add(result);
			}
			
		}
		return rtnList;
	} 

	/**
	 * 서비스별 담당자관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm	= sc.get().getScUserNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("userNm", userNm);
	    	
	    	Map<String, Object> preMap = new HashMap<>();	    	
 		
	    	if("I".equals(rowFlag)){
	    		preMap.put("CHG_REASON", rowData.get("CHG_REASON"));
	    		preMap.put("CRUD_FLAG", "C");
	    		preMap.put("SVC_CLSS_CD",  rowData.get("SVC_CLSS_CD"));
	    		preMap.put("BSE_LVL1_CD",  rowData.get("BSE_LVL1_CD"));
	    		preMap.put("BSE_LVL2_CD",  rowData.get("BSE_LVL2_CD"));
	    		preMap.put("STAFF_ID",  rowData.get("STAFF_ID"));
	    		preMap.put("STAFF_NM",  rowData.get("STAFF_NM"));
	    		preMap.put("BSE_LVL1_NM",  rowData.get("BSE_LVL1_NM"));
	    		preMap.put("BSE_LVL2_NM",  rowData.get("BSE_LVL2_NM"));
	    		preMap.put("userId", userId);		    
	    		preMap.put("userNm", userNm);
	    	} else {
	    		preMap = fomm1100wDao.selectPreStaffSvcMng(rowData);
	    		preMap.put("CHG_REASON", rowData.get("CHG_REASON"));	    
	    		preMap.put("userId", userId);		    
	    		preMap.put("userNm", userNm);
	    	}

	    	if("I".equals(rowFlag)) {	    		
	    		fomm1100wDao.insertStaffMng(rowData);		
	    	}else if("U".equals(rowFlag)) {
	    		preMap.put("CRUD_FLAG", "U");
	    		fomm1100wDao.updateStaffMng(rowData);	    	
	    	}else if("D".equals(rowFlag)) {
	    		preMap.put("CRUD_FLAG", "D");
	    		fomm1100wDao.deleteStaffMng(rowData);	    
	    	}	    	
			fomm1100wDao.insertChgHist(preMap);
		}
	}
	
	/**
	 * 서비스별 담당자관리 저장
	 */
	/*
	@Transactional
	public void saveBatch(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm	= sc.get().getScUserNm();
		
		Map<String, Object> dsCond = new HashMap();
		
		List<Map<String, Object>> dsOldData = fomm1100wDao.selectStaffSvcMng(dsCond);
		fomm1100wDao.deleteStaffMngAll();	 
		
		for (int i = 0; i < dsOldData.size(); i++) {
			
			Map<String, Object> rowDataDel = dsOldData.get(i);

	        // DATA RowType 가져오기	    
			rowDataDel.put("userId", userId);
			rowDataDel.put("LMPID", lmpId);
			rowDataDel.put("userNm", userNm);
			rowDataDel.put("CHG_REASON", "담당자 일괄 등록");
			rowDataDel.put("CRUD_FLAG", "D");			
			fomm1100wDao.insertChgHist(rowDataDel);
		}
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기	    
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("userNm", userNm);
	    	
	    	if("I".equals(rowFlag)){
	    		Map<String, Object> preMap = new HashMap<>();	    	
	    		
	    		preMap.put("CHG_REASON", "담당자 일괄 등록");
	    		preMap.put("CRUD_FLAG", "C");
	    		preMap.put("SVC_CLSS_CD",  rowData.get("SVC_CLSS_CD"));
	    		preMap.put("BSE_LVL1_CD",  rowData.get("BSE_LVL1_CD"));
	    		preMap.put("BSE_LVL2_CD",  rowData.get("BSE_LVL2_CD"));
	    		preMap.put("STAFF_ID",  rowData.get("STAFF_ID"));
	    		preMap.put("STAFF_NM",  rowData.get("STAFF_NM"));
	    		preMap.put("BSE_LVL1_NM",  rowData.get("BSE_LVL1_NM"));
	    		preMap.put("BSE_LVL2_NM",  rowData.get("BSE_LVL2_NM"));
	    		preMap.put("userId", userId);		    
	    		preMap.put("userNm", userNm);	    		
	    		fomm1100wDao.insertStaffMng(rowData);		    		
	    		fomm1100wDao.insertChgHist(preMap);
	    	}
		}
	}
	*/
	
	@Transactional
	public void saveBatch(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm	= sc.get().getScUserNm();
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기	    
			
			Map<String, Object> chkMap = new HashMap<>();	  
			
			chkMap = fomm1100wDao.chkDup(rowData);
			
			if(chkMap != null) {
				rowData.put("ROWFLAG", "U");				
			} else {
				rowData.put("ROWFLAG", "I");
			}		
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("userNm", userNm);
	    	
	    	Map<String, Object> hisMap = new HashMap<>();	    	
	    	
	    	if("I".equals(rowFlag)){  
	    	
	    		hisMap.put("CHG_REASON", "담당자 일괄 등록(변경)");
	    		hisMap.put("CRUD_FLAG", "C");
	    		hisMap.put("SVC_CLSS_CD",  rowData.get("SVC_CLSS_CD"));
	    		hisMap.put("BSE_LVL1_CD",  rowData.get("BSE_LVL1_CD"));
	    		hisMap.put("BSE_LVL2_CD",  rowData.get("BSE_LVL2_CD"));
	    		hisMap.put("STAFF_ID",  rowData.get("STAFF_ID"));
	    		hisMap.put("STAFF_NM",  rowData.get("STAFF_NM"));
	    		hisMap.put("BSE_LVL1_NM",  rowData.get("BSE_LVL1_NM"));
	    		hisMap.put("BSE_LVL2_NM",  rowData.get("BSE_LVL2_NM"));
	    		hisMap.put("userId", userId);		    
	    		hisMap.put("userNm", userNm);	    		
	    		fomm1100wDao.insertStaffMng(rowData);		    		
	    		fomm1100wDao.insertChgHist(hisMap);
	    	} else if("U".equals(rowFlag)) {
	    		hisMap.putAll(chkMap);
	    		hisMap.put("CHG_REASON", "담당자 일괄 등록(변경)");
	    		hisMap.put("CRUD_FLAG", "U");
	    		//hisMap.put("SVC_CLSS_CD",  rowData.get("SVC_CLSS_CD"));
	    		//hisMap.put("BSE_LVL1_CD",  rowData.get("BSE_LVL1_CD"));
	    		//hisMap.put("BSE_LVL2_CD",  rowData.get("BSE_LVL2_CD"));
	    		//hisMap.put("STAFF_ID",  rowData.get("STAFF_ID"));
	    		//hisMap.put("STAFF_NM",  rowData.get("STAFF_NM"));
	    		//hisMap.put("BSE_LVL1_NM",  rowData.get("BSE_LVL1_NM"));
	    		//hisMap.put("BSE_LVL2_NM",  rowData.get("BSE_LVL2_NM"));
	    		hisMap.put("userId", userId);		    
	    		hisMap.put("userNm", userNm);	    		
	    		fomm1100wDao.updateStaffMng(rowData);		    		
	    		fomm1100wDao.insertChgHist(hisMap);	    		
	    	}	
		}
	}
	
	@Transactional
	public void saveChg(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm	= sc.get().getScUserNm();
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기	    
			
			Map<String, Object> delMap = new HashMap<>();	  
			
			delMap.putAll(rowData);
			
			delMap.put("CHG_REASON", "담당자 변경 : "+delMap.get("STAFF_NM")+"("+delMap.get("STAFF_ID")+")");
			delMap.put("STAFF_ID", rowData.get("OLD_STAFF_ID"));
			delMap.put("STAFF_NM", rowData.get("OLD_STAFF_NM"));
			delMap.put("userId", userId);
			delMap.put("LMPID", lmpId);
			delMap.put("userNm", userNm);
			delMap.put("CRUD_FLAG", "D");
	    	fomm1100wDao.deleteStaffMng(delMap);		    		
	    	fomm1100wDao.insertChgHist(delMap);
	    	
	    	Map<String, Object> hisMap = new HashMap<>();
	    	
	    	//newMap.putAll(rowData);
	    	
	    	hisMap.put("CHG_REASON", "담당자 변경 : "+rowData.get("OLD_STAFF_NM")+"("+rowData.get("OLD_STAFF_ID")+")");
	    	hisMap.put("SVC_CLSS_CD",  rowData.get("SVC_CLSS_CD"));
	    	hisMap.put("BSE_LVL1_CD",  rowData.get("BSE_LVL1_CD"));
	    	hisMap.put("BSE_LVL2_CD",  rowData.get("BSE_LVL2_CD"));
	    	hisMap.put("STAFF_ID",  rowData.get("STAFF_ID"));
	    	hisMap.put("STAFF_NM",  rowData.get("STAFF_NM"));
	    	hisMap.put("BSE_LVL1_NM",  rowData.get("BSE_LVL1_NM"));
	    	hisMap.put("BSE_LVL2_NM",  rowData.get("BSE_LVL2_NM"));
	    	hisMap.put("userId", userId);
	    	hisMap.put("LMPID", lmpId);
	    	hisMap.put("userNm", userNm);
	    	hisMap.put("CRUD_FLAG", "C");
	    	fomm1100wDao.insertStaffMng(rowData);		    		
	    	fomm1100wDao.insertChgHist(hisMap);

		}
	}	
}