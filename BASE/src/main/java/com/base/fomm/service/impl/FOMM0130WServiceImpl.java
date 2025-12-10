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

import com.base.fomm.dao.FOMM0130WDAO;
import com.base.fomm.service.FOMM0130WService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 권한그룹별 메뉴권한 관리 ServiceImpl Class
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
@Service("FOMM0130WService")
public class FOMM0130WServiceImpl implements FOMM0130WService {

	private Logger log = LoggerFactory.getLogger(FOMM0130WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0130WDAO fomm0130wDao;

	
	/**
	 * SPP 권한그룹별 메뉴 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0130wDao.select02(searchMap);
		return result;
	}

	
	/**
	 * SPP 권한그룹별 메뉴권한 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsFommAuthMenuDt, String authId) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		// dsFommAuthMenuDt 처리
		int rowCntDt = dsFommAuthMenuDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommAuthMenuDt.get(i);
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("AUTH_ID", authId);
	    	
	    	fomm0130wDao.insert01(rowData);
		}
		
	}
}