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

import com.base.fomm.dao.FOMM0110WDAO;
import com.base.fomm.service.FOMM0110WService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 사용자 및 사용자별 권한그룹 관리 ServiceImpl Class
 * @package com.base.fomm.service.impl
 * <pre>

 * @author  이정빈
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 06.	이정빈		최초작성
 */
@Service
public class FOMM0110WServiceImpl implements FOMM0110WService {

	private Logger log = LoggerFactory.getLogger(FOMM0110WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0110WDAO fomm0110wDao;

	
	
	/**
	 * SPP 사용자 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		List<Map<String, Object>> result = fomm0110wDao.select01(searchMap);
		return result;
	}

	/**
	 * SPP 사용자별 권한그룹 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0110wDao.select02(searchMap);
		return result;
	}

	
	/**
	 * SPP 사용자/사용자별 권한그룹 일괄 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsFommUserMt, List<Map<String, Object>> dsFommAuthUserDt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		// dsFommUserMt 처리
		int rowCnt = dsFommUserMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsFommUserMt.get(i);

			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0110wDao.insert01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("U")) {
	    		fomm0110wDao.modify01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0110wDao.remove01(rowData);
	    	}
		}
		
		
		int rowCntDt = dsFommAuthUserDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthUserDt.get(i);
			
			// DATA AUTH_YN(권한 체크여부) 가져오기
	    	String chk = StringUtil.safe(rowData.get("AUTH_YN"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", "");
	    	
	    	if( chk.equalsIgnoreCase("1")) {
	    		fomm0110wDao.insert02(rowData);
	    	}
	    	else if( chk.equalsIgnoreCase("0")) {
	    		fomm0110wDao.remove02(rowData);
	    	}
		}
		
	}
}