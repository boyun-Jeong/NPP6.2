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
import com.base.fomm.dao.FOMM0120WDAO;
import com.base.fomm.service.FOMM0120WService;
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
@Service("FOMM0120WService")
public class FOMM0120WServiceImpl implements FOMM0120WService {

	private Logger log = LoggerFactory.getLogger(FOMM0120WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0000PDAO fomm0000pDao;

	@Autowired
	private FOMM0110WDAO fomm0110wDao;

	@Autowired
	private FOMM0120WDAO fomm0120wDao;

	
	
	/**
	 * SPP 권한그룹 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0120wDao.select01(searchMap);
		return result;
	}

	/**
	 * SPP 권한그룹별 사용자 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0120wDao.select02(searchMap);
		return result;
	}

	/**
	 * SPP 권한그룹별 부서 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select03(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0120wDao.select03(searchMap);
		return result;
	}

	/**
	 * SPP 권한그룹별 확장권한 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select04(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0120wDao.select04(searchMap);
		return result;
	}

	
	/**
	 * SPP 권한그룹/사용자 일괄 저장SPP 권한그룹/사용자 일괄 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsFommAuthMt, List<Map<String, Object>> dsFommAuthUserDt, List<Map<String, Object>> dsFommAuthDeptDt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		// dsFommAuthMt 처리
		int rowCnt = dsFommAuthMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthMt.get(i);

			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0120wDao.insert01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("U")) {
	    		fomm0120wDao.modify01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0120wDao.remove01(rowData);
	    	}
		}
		
		saveUserDt(userId, dsFommAuthUserDt);
		saveDeptDt(userId, dsFommAuthDeptDt);
/*
		// dsFommAuthUserDt 처리
		int rowCntDt = dsFommAuthUserDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthUserDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", "");
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0110wDao.insert02(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0110wDao.remove02(rowData);
	    	}
		}
*/
	}

	// dsFommAuthUserDt 처리 - 사용자
	private void saveUserDt(String pUserId, List<Map<String, Object>> dsFommAuthUserDt)
	{
		int rowCntDt = dsFommAuthUserDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthUserDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", pUserId);
	    	rowData.put("LMPID", "");
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0110wDao.insert02(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0110wDao.remove02(rowData);
	    	}
		}
	}

	// dsFommAuthDeptDt 처리 - 부서
	private void saveDeptDt(String pUserId, List<Map<String, Object>> dsFommAuthDeptDt)
	{
		int rowCntDt = dsFommAuthDeptDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthDeptDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", pUserId);
	    	rowData.put("LMPID", "");
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0000pDao.insert01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0000pDao.remove01(rowData);
	    	}
		}
	}

	// dsFommAuthExtdDt 처리 - 확장권한
	private void saveExtdDt(String pUserId, List<Map<String, Object>> dsFommAuthExtdDt)
	{
		int rowCntDt = dsFommAuthExtdDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthExtdDt.get(i);
			
			// DATA ROWFLAG 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", pUserId);
	    	rowData.put("LMPID", "");
	    	
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0000pDao.insert02(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0000pDao.remove02(rowData);
	    	}
		}
	}
}