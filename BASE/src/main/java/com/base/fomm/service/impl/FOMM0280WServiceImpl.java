package com.base.fomm.service.impl;

import java.io.Reader;
import java.sql.Clob;
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

import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0280WDAO;
//import com.base.fomm.service.FOMM0250WService;
import com.base.fomm.service.FOMM0280WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 회의관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 04. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 02.	정해운		최초작성
 */
@Service
public class FOMM0280WServiceImpl implements FOMM0280WService {
	
	private Logger log = LoggerFactory.getLogger(FOMM0280WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0280WDAO fomm0280wDao;
	
	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 회의관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = fomm0280wDao.select01(dsCond);
		return result;
	}

	
	/**
	 * 회의참여자 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0280wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 회의불참자 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0280wDao.select03(dsCond);
		return result;
	}
	
	/**
	 * 회의참여자 목록 조회 - FOMM0280_P01 용
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0280wDao.select04(dsCond);
		return result;
	}
	
	/**
	 * 회의불참자 목록 조회 - FOMM0280_P01 용
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond) 
	{
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = fomm0280wDao.select06(dsCond);
		return result;
	}
	
	/**
	 * 회의참여자 목록 조회 - 관리자용 FOMM0280_W
	 */	
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) throws Exception {
		dsCond.put("USER_ID", sc.get().getScUserId());
		//dsCond.put("LMPID",sc.get().getScLmpId());
		List<Map<String, Object>> result = fomm0280wDao.select05(dsCond);
		
		for (int i = 0; i < result.size(); i++) {

			Clob clob = (Clob) result.get(i).get("CONTENTS");

			if(clob != null) {
				Reader reader = clob.getCharacterStream();
				String str = IOUtils.toString(reader);
				if(reader != null)	reader.close();
				result.get(i).put("CONTENTS", str);
			}
		}
		return result;
	}
	
	/**
	 * 회의관리 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData, List<Map<String, Object>> dsAttnd) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		log.info("dsData :: " + dsData.size());
		log.info("dsAttnd" + dsAttnd.size());

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
	    		fomm0280wDao.insert01(rowData);
	    		MEET_ID = StringUtil.safe(rowData.get("MEET_ID"));
	    		fommMultipartService.replaceTempKey("FOMM_MEET_MT", null, MEET_ID);
	    	}
	    	else if("U".equals(rowFlag)) {
	    		fomm0280wDao.modify01(rowData);
	    	}
	    	else if("D".equals(rowFlag)) {
	    		fomm0280wDao.remove01(rowData);
	    		rowData.put("DEL_GBN", "MEET");
	    		fomm0280wDao.remove03(rowData);		// 해당 회의 모든 참여자 삭제
	    	}
		}
		
		if( "".equals(MEET_ID)) {
			if(dsAttnd.size() > 0)	MEET_ID = StringUtil.safe(dsAttnd.get(0).get("MEET_ID"));
		}

		// 참여대상자
		for (int i = 0; i < dsAttnd.size(); i++) 
		{
			Map<String, Object> rowData = dsAttnd.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMNM", sc.get().getScUserNm());
	    	rowData.put("LM_DEPTNM", sc.get().getScDeptNm());
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		String sMeetId = StringUtil.safe(rowData.get("MEET_ID"));
	    		if ("".equals(sMeetId)) {
	    			rowData.put("MEET_ID", MEET_ID);
	    		}
	    		fomm0280wDao.insert02(rowData);
	    	}
	    	else if("U".equals(rowFlag)) {
	    		fomm0280wDao.modify02(rowData);
	    	}
	    	else if("D".equals(rowFlag)) {
	    		fomm0280wDao.remove02(rowData);
	    	}
		}
		return MEET_ID;
	}
	
	/**
	 *  FOMM0280 회의관리(관리자용)-회의삭제
	 */
	@Transactional
	public void save03(List<Map<String, Object>> dsData) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String userNm = sc.get().getScUserNm();			//로그인 유저 이름
		
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0280wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0280wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0280wDao.remove01(rowData);
	    		rowData.put("DEL_GBN", "MEET");
	    		fomm0280wDao.remove03(rowData);		// 해당 회의 모든 참여자 삭제
	    	}
		}
	}
	/**
	 *  참석자가 확인버튼 클릭시 CONF_YN, OPNION 업데이트
	 */
	@Transactional
	public void save04(Map<String, Object> dsCond) 
	{
	
    	dsCond.put("LMID", sc.get().getScUserId());
    	dsCond.put("LMNM", sc.get().getScUserNm());
    	dsCond.put("LM_DEPTNM", sc.get().getScDeptNm());
		System.out.println("===========================MEET_ATTND_ID=====================================" + dsCond.get("MEET_ATTND_ID"));
		System.out.println("===========================U_TYPE=====================================" + dsCond.get("U_TYPE"));
		fomm0280wDao.modify03(dsCond);
	}
}