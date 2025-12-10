package com.base.fomm.service.impl;


import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0000PDAO;
import com.base.fomm.dao.FOMM0110WDAO;
import com.base.fomm.dao.FOMM0121WDAO;
import com.base.fomm.service.FOMM0121WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 사용자 관리 ServiceImpl Class
 * @package com.base.fomm.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 06.	WEMB		최초작성
 */
@Service("FOMM0121WService")
public class FOMM0121WServiceImpl implements FOMM0121WService {

	private Logger log = LoggerFactory.getLogger(FOMM0121WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0121WDAO fomm0121wDao;

	
	
	/**
	 * SPP 확장권한 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0121wDao.select01(searchMap);
		return result;
	}

	/**
	 * SPP 확장권한별 사용자 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0121wDao.select02(searchMap);
		return result;
	}

	/**
	 * SPP 확장권한별 부서 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select03(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0121wDao.select03(searchMap);
		return result;
	}

	
	/**
	 * SPP 확장 권한, 사용자, 부서 일괄 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsExtdAuthMt, List<Map<String, Object>> dsExtdAuthUserDt, List<Map<String, Object>> dsExtdAuthDeptDt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		// dsFommAuthMt 처리
		int rowCnt = dsExtdAuthMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsExtdAuthMt.get(i);

			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I") || rowFlag.equalsIgnoreCase("U")) {
	    		fomm0121wDao.insert01(rowData);
	    	}
//	    	else if( rowFlag.equalsIgnoreCase("U")) {
//	    		fomm0121wDao.insert01(rowData);
//	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
		    	rowData.put("USE_YN", "N");
	    		fomm0121wDao.insert01(rowData);
//	    		fomm0121wDao.remove01(rowData);
	    	}
		}
		
		saveUserDt(userId, lmpId, dsExtdAuthUserDt);
		saveDeptDt(userId, lmpId, dsExtdAuthDeptDt);
	}

	// dsFommAuthUserDt 처리 - 사용자
	private void saveUserDt(String pUserId, String pLmpId, List<Map<String, Object>> dsExtdAuthUserDt)
	{
		int rowCntDt = dsExtdAuthUserDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsExtdAuthUserDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID",  pUserId);
	    	rowData.put("LMPID", pLmpId);
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0121wDao.insert02(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0121wDao.remove01(rowData);
	    	}
		}
	}

	// dsFommAuthDeptDt 처리 - 부서
	private void saveDeptDt(String pUserId, String pLmpId, List<Map<String, Object>> dsExtdAuthDeptDt)
	{
		int rowCntDt = dsExtdAuthDeptDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsExtdAuthDeptDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID",  pUserId);
	    	rowData.put("LMPID", pLmpId);
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0121wDao.insert03(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0121wDao.remove01(rowData);
	    	}
		}
	}
}