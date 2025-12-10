package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0110WDAO;
import com.base.fomm.dao.FOMM0120WDAO;
import com.base.fomm.dao.FOMM0121WDAO;
import com.base.fomm.dao.FOMM0122WDAO;
import com.base.fomm.service.FOMM0122WService;

/**
 * 
 * <pre>
 * @title
 * - FOMM0122W Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  노익현
 * @since   2024. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 13.	노익현		최초작성
 */
@Service
public class FOMM0122WServiceImpl implements FOMM0122WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0122WDAO fomm0122wDao;
	
	@Autowired
	private FOMM0110WDAO fomm0110wDao;
	
	@Autowired
	private FOMM0121WDAO fomm0121wDao;

	/**
	 * FOMM0122W 확장그룹 코드
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0122wDao.select01(dsCond);
		return result;
	}
	/**
	 * FOMM0122W 권한그룹 코드
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0122wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * FOMM0122W 리스트
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0122wDao.select03(dsCond);
		return result;
	}
	/**
	 * FOMM0122W 권한그룹 중복체크
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0122wDao.select04(dsCond);
		return result;
	}


	/**
	 * FOMM0122W 권한저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA 권한 코드 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	String AUTH_GRP_GB = StringUtil.safe(rowData.get("AUTH_GRP_GB"));
	    	
	    	String strCode = StringUtil.safe(rowData.get("AUTH_ID"));
	    	String strName = StringUtil.safe(rowData.get("AUTH_NM"));
	    	String strUserId = StringUtil.safe(rowData.get("USER_ID"));
	    	
	    	
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	if("I".equals(rowFlag)) {
		    	if("X".equals(AUTH_GRP_GB)) {
		    		rowData.put("EXTD_ID",strCode);
		    		rowData.put("EXTD_NM",strName);
		    		rowData.put("EXTD_GB","10");
		    		//rowData.put("USER_ID",strUserId);
		    		rowData.put("USE_YN","Y");
		    		
		    		fomm0121wDao.insert02(rowData); // 확장권한
		    		
		    	}else if("G".equals(AUTH_GRP_GB)) {

		    		fomm0110wDao.insert02(rowData); //권한그룹 
		    	}
		 
	    	}else if("U".equals(rowFlag)) {
	    		fomm0122wDao.modify01(rowData);
	    		
	    	}else if("D".equals(rowFlag)) {
		    	if("X".equals(AUTH_GRP_GB)) {
		    		rowData.put("EXTD_ID",strCode);
		    		rowData.put("EXTD_NM",strName);
		    		rowData.put("EXTD_GB","10");
		    		rowData.put("DEST_CD",strUserId);
		    		rowData.put("USE_YN","Y");
		    		
		    		fomm0121wDao.remove01(rowData); // 확장권한
		    		
		    	}else if("G".equals(AUTH_GRP_GB)) {

		    		fomm0110wDao.remove02(rowData); //권한그룹 
		    	}
	    	}
	    	
	    	//이력 저장
	    	if(!"U".equals(rowFlag)) fomm0122wDao.insert01(rowData);
		}
	}
	
	
}