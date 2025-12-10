package com.base.fomm.service.impl;


import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.fomm.dao.FOMM0140WDAO;
import com.base.fomm.service.FOMM0140WService;
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
@Service("FOMM0140WService")
public class FOMM0140WServiceImpl implements FOMM0140WService {

	private Logger log = LoggerFactory.getLogger(FOMM0140WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0140WDAO fomm0140wDao;

	
	/**
	 * SPP 메뉴 트리 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) throws IOException, SQLException
	{
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = fomm0140wDao.select01(searchMap);
		
		return result;
	}
	
	
	/**
	 * SPP 권한그룹별 메뉴 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) throws IOException, SQLException
	{
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = fomm0140wDao.select02(searchMap);
		
		return result;
	}

	/**
	 * SPP 메뉴 도움말 조회
	 */
	@Override
	public List<Map<String, Object>> select03(Map<String, Object> searchMap) throws IOException, SQLException
	{
		List<Map<String, Object>> result = fomm0140wDao.select03(searchMap);
		for (int i = 0; i < result.size(); i++) {
			Clob clob = (Clob) result.get(i).get("MENU_HELP");
			if(clob != null) {
			  Reader reader = clob.getCharacterStream();
			  String str = IOUtils.toString(reader);
			  if(reader != null) {
				  reader.close();
			  }
			  result.get(i).put("MENU_HELP", str);
			}
		}
		return result;
	}
	

	/**
	 * SPP 권한그룹별 메뉴권한 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsFommMenuMt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String selLangCd= sc.get().getScSelLangCd();
		// dsFommAuthMenuDt 처리
		int rowCntDt = dsFommMenuMt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsFommMenuMt.get(i);
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SEL_LANG_CD", selLangCd);
	    	
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0140wDao.insert01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("U")) {
	    		fomm0140wDao.modify01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0140wDao.remove01(rowData);
	    	}
		}
		
	}

	// 메뉴 도움말 저장
	@Transactional
	public void save02(List<Map<String, Object>> dsData) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		int rowCnt = dsData.size();
		for(int i = 0; i < rowCnt; i++)
		{
			Map<String, Object> rowData = dsData.get(i);
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0140wDao.remove02(rowData);
	    	}
	    	else {
	    		fomm0140wDao.modify02(rowData);
	    	}
	    	 
		}
	}
}