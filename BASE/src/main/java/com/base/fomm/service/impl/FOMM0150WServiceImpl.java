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

import com.base.fomm.dao.FOMM0150WDAO;
import com.base.fomm.service.FOMM0150WService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 공통코드 관리 ServiceImpl Class
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
@Service
public class FOMM0150WServiceImpl implements FOMM0150WService {

	private Logger log = LoggerFactory.getLogger(FOMM0150WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0150WDAO fomm0150wDao;

	
	/**
	 * SPP 코드 트리 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		
		List<Map<String, Object>> result = fomm0150wDao.select01(searchMap);
		return result;
	}
	
	
	/**
	 * SPP 하위코드 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = fomm0150wDao.select02(searchMap);
		return result;
	}

	/**
	 * SPP 선택코드 언어별 조회
	 */
	@Override
	public List<Map<String, Object>> select03(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		List<Map<String, Object>> result = fomm0150wDao.select03(searchMap);
		return result;
	}
	
	
	/**
	 * SPP 코드 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsFommCmmCdMt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String selLangCd= sc.get().getScSelLangCd();
		
		// dsFommCmmCdMt 처리
		int rowCntDt = dsFommCmmCdMt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommCmmCdMt.get(i);
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SEL_LANG_CD", selLangCd);
	    	
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	if( rowFlag.equalsIgnoreCase("I") || 
	    		rowFlag.equalsIgnoreCase("U") ) {
	    		fomm0150wDao.modify01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0150wDao.remove01(rowData);
	    	}
		}
		
	}
}