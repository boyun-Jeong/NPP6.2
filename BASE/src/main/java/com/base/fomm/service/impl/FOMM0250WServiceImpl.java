package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0250WDAO;
import com.base.fomm.service.FOMM0250WService;
import com.base.com.service.FommMultipartService;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 10.	이정빈		최초작성
 */
@Service
public class FOMM0250WServiceImpl implements FOMM0250WService {

	private Logger log = LoggerFactory.getLogger(FOMM0250WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0250WDAO fomm0250wDao;

	@Autowired
	private FommMultipartService fommMultipartService;
	
	
	/**
	 * 회의관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		return fomm0250wDao.select01(dsCond);
	}

	
	/**
	 * 회의참여자 목록 조회
	 */
	@SuppressWarnings("null")
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		dsCond.put("USER_NM", sc.get().getScUserNm());
		dsCond.put("DEPT_NM", sc.get().getScDeptNm());
		List<Map<String, Object>> result = fomm0250wDao.select02(dsCond);
		
		// 회의록 열람여부 업데이트
		if(result != null || !result.isEmpty()) {
			for(int i=0; i<result.size(); i++) {
				if (sc.get().getScUserId().equals(result.get(i).get("ATN_USER_ID")) &&  "N".equals(result.get(i).get("READ_YN"))) {
					fomm0250wDao.readYnUpdate(dsCond);
				}
			}

			List<Map<String, Object>> updateResult = fomm0250wDao.select02(dsCond);
			return updateResult;
		} else {
			return result;
		}
		
	}
	
	/**
	 * 회의불참자 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0250wDao.select03(dsCond);
		return result;
	}
	
	
	/**
	 * 회의관리 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		log.info("wint :: " + dsData.size());

		// 회의관리
		String MEET_ID = "";
		
		if(dsData.size() > 0 ) 	MEET_ID = StringUtil.safe(dsData.get(0).get("MEET_ID"));
		for (int i = 0; i < dsData.size(); i++) 
		{
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0250wDao.insert01(rowData);
	    		MEET_ID = StringUtil.safe(rowData.get("MEET_ID"));
	    		fommMultipartService.replaceTempKey("FOMM_MEET_MT", null, MEET_ID);
	    	}
	    	else if("U".equals(rowFlag)) {
	    		fomm0250wDao.modify01(rowData);
	    	}
	    	else if("D".equals(rowFlag)) {
	    		fomm0250wDao.remove01(rowData);
	    		rowData.put("DEL_GBN", "MEET");
	    		fomm0250wDao.remove03(rowData);		// 해당 회의 모든 참여자 삭제
	    	}
		}
		return MEET_ID;
	}
}