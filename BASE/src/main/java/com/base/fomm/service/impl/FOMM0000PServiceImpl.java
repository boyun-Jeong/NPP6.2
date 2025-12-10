package com.base.fomm.service.impl;

import java.util.Map;
import java.util.List;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0000PDAO;
import com.base.fomm.service.FOMM0000PService;
import com.base.fwk.util.StringUtil;

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
public class FOMM0000PServiceImpl implements FOMM0000PService {

	private Logger log = LoggerFactory.getLogger(FOMM0000PService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0000PDAO fomm0000pDao;

	
	
	
	/**
	 * SPP sitemap
	 */
	@Override
	public List<Map<String, Object>> selectSiteMap(Map<String, Object> searchMap) 
	{
		searchMap.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0000pDao.selectSiteMap(searchMap);
		return result;
	}
	
	
	
	
	/**
	 * SPP 사용자 목록 조회
	 */
	@Override
	public Map<String, Object> select01(Map<String, Object> searchMap) 
	{
		Map<String, Object> result = fomm0000pDao.select01(searchMap);
		return result;
	}
	
	/**
	 * SPP 대직 조회
	 */
	@Override
	public List<Map<String, Object>> selectAgency(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = fomm0000pDao.selectAgency(searchMap);
		return result;
	}
	
	
	
	/**
	 * SPP 사용자 정보 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsFommUserMt, List<Map<String, Object>> dsFommAgencyInfo) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		log.debug("wint impl 1");
    	// FOMM_USER_MT
		dsFommUserMt.put("LMID", userId);
		dsFommUserMt.put("LMPID", lmpId);
		
		// DATA RowType 가져오기
		String rowFlag = StringUtil.safe(dsFommUserMt.get("ROWFLAG"));
		
		if( "U".equals(rowFlag) )
			fomm0000pDao.modify01(dsFommUserMt);
		
		// FOMM_AGENCY_INFO
		for(int i = 0; i < dsFommAgencyInfo.size(); i++)
		{
			Map<String, Object> rowData = dsFommAgencyInfo.get(i);
			rowData.put("LMID", userId);
			rowData.put("LMPID", lmpId);
			
			// DATA RowType 가져오기
			rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			if( "U".equals(rowFlag) || "I".equals(rowFlag) )
				fomm0000pDao.modify02(rowData);
		}
	}

	/**
	 * SPP 부서 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap)
	{
//		searchMap.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		List<Map<String, Object>> result ; 
		String GBN = StringUtil.safe(searchMap.get("GBN"));
		if("BIZ".equals(GBN) || "IV".equals(GBN)) {
			 result = fomm0000pDao.select06(searchMap);
		}else {
			 result = fomm0000pDao.select02(searchMap);
		}
		return result;
	}

	/**
	 * SPP 부서 검색
	 */
	@Override
	public Map<String, Object> select03(Map<String, Object> searchMap) 
	{
		Map<String, Object> result = fomm0000pDao.select03(searchMap);
		return result;
	}

	/**
	 * SPP 부서 검색
	 */
	@Override
	public Map<String, Object> select04(Map<String, Object> searchMap) 
	{
		Map<String, Object> result = fomm0000pDao.select04(searchMap);
		return result;
	}
	
	/**
	 * SPP 부서 검색
	 */
	@Override
	public Map<String, Object> select05(Map<String, Object> searchMap) 
	{
		Map<String, Object> result = fomm0000pDao.select05(searchMap);
		return result;
	}	
}