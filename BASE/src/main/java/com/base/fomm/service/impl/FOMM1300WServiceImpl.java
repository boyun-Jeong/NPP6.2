package com.base.fomm.service.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM1300WDAO;
import com.base.fomm.service.FOMM1300WService;

/**
 * 
 * <pre>
 * @title
 * - 업무분류별담당자관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 19.	정해운		최초작성
 */
@Service
public class FOMM1300WServiceImpl implements FOMM1300WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM1300WDAO fomm1300wDao;

	/**
	 * 업무분류별담당자관리 목록 조회
	 */
	public List<Map<String, Object>> selectDataList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1300wDao.selectDataList(dsCond);
		return result;
	} 
	
	public Map<String, Object> selectInitInfo(String strSchList) {
		
		String[] arrSchList = strSchList.toUpperCase().split(":");
		
		boolean isSchSenior		=  Arrays.stream(arrSchList).anyMatch("SENIOR"::equals);
		boolean isSchDevpr		=  Arrays.stream(arrSchList).anyMatch("DEVPR"::equals);
		boolean isSchDept  		=  Arrays.stream(arrSchList).anyMatch("DEPT"::equals);
		boolean isSchSrtype2all	=  Arrays.stream(arrSchList).anyMatch("SRTYPE2"::equals);
		boolean isSchUpmu2all	=  Arrays.stream(arrSchList).anyMatch("UPMU2"::equals);
		
		Map<String, Object> rtnMap = new HashMap<>();
		
		if(isSchDept) {
			List<Map<String, Object>> rstDept = fomm1300wDao.selectDeptList();
			rtnMap.put("dsDeptList",rstDept);
		}
		
		if(isSchDevpr) {
			List<Map<String, Object>> rstDevpr = fomm1300wDao.selectDevprLIst();
			rtnMap.put("dsDevprList",rstDevpr);
		}
		
		if(isSchSenior) {
			List<Map<String, Object>> rstSenior = fomm1300wDao.selectSeniorList();
			rtnMap.put("dsSeniorLsit",rstSenior);			
		}
		
		if(isSchSrtype2all) {
			List<Map<String, Object>> rstSrType2All = fomm1300wDao.selectSrType2All();
			rtnMap.put("dsSrType2ALL",rstSrType2All);			
		}
		
		if(isSchUpmu2all) {
			List<Map<String, Object>> rstUpmu2All = fomm1300wDao.selectUpmu2All();
			rtnMap.put("dsUpmu2All",rstUpmu2All);			
		}
		
		return rtnMap;
	}
	
	public List<Map<String, Object>> selectDevprRegPopList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm1300wDao.selectDevprRegPopList(dsCond);
		return result;
	}
	

	/**
	 * 업무분류별담당자관리 저장
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
	    		fomm1300wDao.insertDevpr(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm1300wDao.updateDevpr(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm1300wDao.deleteDevpr(rowData);
	    	}
		}
	}
}