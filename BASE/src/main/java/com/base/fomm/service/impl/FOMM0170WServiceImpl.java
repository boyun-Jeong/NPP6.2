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

import com.base.fomm.dao.FOMM0170WDAO;
import com.base.fomm.service.FOMM0170WService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 단어 관리 ServiceImpl Class
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
@Service("FOMM0170WService")
public class FOMM0170WServiceImpl implements FOMM0170WService {

	private Logger log = LoggerFactory.getLogger(FOMM0170WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0170WDAO FOMM0170WDao;

	
	/**
	 * SPP 코드 트리 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = FOMM0170WDao.select01(searchMap);
		return result;
	}
	
	
	/**
	 * SPP 하위코드 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> searchMap) 
	{
		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		List<Map<String, Object>> result = FOMM0170WDao.select02(searchMap);
		return result;
	}

	/**
	 * SPP 시스템 기준언어 단어 중복 여부 체크 (해당 단어로 등록된 건수를 리턴)
	 */
	@Override
	public Integer select03(Map<String, Object> searchMap) 
	{
		return FOMM0170WDao.select03(searchMap);
	}

	/**
	 * SPP 코드 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsCmmWordMt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String wordNo = "";
		// 시스템 기준 언어 코드에 대한 단어 데이터 등록/삭제 처리
		int rowCnt = dsCmmWordMt.size();

		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsCmmWordMt.get(i);

			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SYS_LANG_CD", sc.get().getScSysLangCd());
	    	rowData.put("WORD", rowData.get("SYS_WORD"));

	    	if( "I".equals(rowFlag)) {
	    		FOMM0170WDao.insert01(rowData);	    		
	    	}
	    	else if( "D".equals(rowFlag)) {
	    		FOMM0170WDao.remove01(rowData);
	    	}
	    	wordNo = StringUtil.safe(rowData.get("WORD_NO"));
    		log.debug("i=" + i + " rowFlag : " + rowFlag + " wordNo===========================>" + wordNo);
		}
		return wordNo;
	}
	
	/**
	 * SPP 코드 저장
	 */
	@Override
	public void save02(List<Map<String, Object>> dsCmmWordDt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		//단어 데이터 언어코드별 등록/수정/삭제 처리
		int rowCntDt = dsCmmWordDt.size();
		for(int i = 0; i < rowCntDt; i++) 
		{
			Map<String, Object> rowData = dsCmmWordDt.get(i);
			
			// DATA RowFlag 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			String word = StringUtil.safe(rowData.get("WORD"));
			String rmk = StringUtil.safe(rowData.get("RMK"));
			
			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag) && "".equals(word) && "".equals(rmk)) {
    			rowFlag = "";
    		}

	    	if( rowFlag.equalsIgnoreCase("I") || rowFlag.equalsIgnoreCase("U")) {
	    		FOMM0170WDao.modify02(rowData);

	    	}else {

	    		if(!"".equals(rowFlag) && "".equals(word) && "".equals(rmk)) {
	    			rowFlag = "D";
	    		}

	    		if( rowFlag.equalsIgnoreCase("D")) {
		    		FOMM0170WDao.remove02(rowData);
		    	}
	    	}
		}
	}
}