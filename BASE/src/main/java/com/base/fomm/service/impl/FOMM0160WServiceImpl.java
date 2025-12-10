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

import com.base.fomm.dao.FOMM0160WDAO;
import com.base.fomm.service.FOMM0160WService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 공통메시지 관리 ServiceImpl Class
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
@Service("FOMM0160WService")
public class FOMM0160WServiceImpl implements FOMM0160WService {

	private Logger log = LoggerFactory.getLogger(FOMM0160WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0160WDAO fomm0160wDao;

	
	/**
	 * SPP 메시지 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		
		List<Map<String, Object>> result = fomm0160wDao.select01(searchMap);
		return result;
	}
	
	
	/**
	 * SPP 언어별 메시지 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());			
		List<Map<String, Object>> result = fomm0160wDao.select02(searchMap);
		return result;
	}

	
	/**
	 * SPP 메시지 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsCmmMsgMt, List<Map<String, Object>> dsCmmMsgDt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		// dsCmmMsgMt 처리
		int rowCnt = dsCmmMsgMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsCmmMsgMt.get(i);

			String curLangCd= sc.get().getScSelLangCd();

			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("CUR_LANG_CD", curLangCd);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fomm0160wDao.insert01(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0160wDao.remove01(rowData);
	    	}
		}
		
		// dsCmmMsgDt 처리
		int rowCntDt = dsCmmMsgDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsCmmMsgDt.get(i);
			
			String sysLangCd= sc.get().getScSysLangCd();
			String curLangCd= sc.get().getScSelLangCd();
			
			// DATA RowFlag 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			String msgConts = StringUtil.safe(rowData.get("MSG_CONTS"));
			
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", "");
	    	rowData.put("SYS_LANG_CD", sysLangCd);
	    	rowData.put("SEL_LANG_CD", curLangCd);
	    	
	    	if( rowFlag.equalsIgnoreCase("U")) {
	    		fomm0160wDao.modify02(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fomm0160wDao.remove02(rowData);
	    	}
		}
	}
}