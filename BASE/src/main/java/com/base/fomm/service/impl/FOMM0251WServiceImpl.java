package com.base.fomm.service.impl;

import java.io.IOException;
import java.io.Reader;
import java.math.BigDecimal;
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
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0251WDAO;
import com.base.fomm.service.FOMM0251WService;

/**
 * 
 * <pre>
 * @title   
 * - 게시판(트리구조) ServiceImpl Class
 * @package com.base.fomm.service.impl
 * <pre>

 * @author  정하림
 * @since   2024. 12. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2024. 12. 09.	정하림		최초작성
 */
@Service("FOMM0251WService")
public class FOMM0251WServiceImpl implements FOMM0251WService {
	
	private Logger log = LoggerFactory.getLogger(FOMM0251WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0251WDAO FOMM0251WDao;
	
	@Autowired
	private FommMultipartService fommMultipartService;

	
	/**
	 * SPP 게시글 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception
	{
		List<Map<String, Object>> result = FOMM0251WDao.select01(dsCond);
		
		for (int i = 0; i < result.size(); i++) {

			Clob clob = (Clob) result.get(i).get("CONTS");

			if(clob != null) {
			  Reader reader = clob.getCharacterStream();
			  String str = IOUtils.toString(reader);
			  if(reader != null) {
				  reader.close();
			  }
			  result.get(i).put("CONTS", str);
			}
			
		}
		return result;
	}
	
	/**
	 * SPP 게시판 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		System.out.println("--------------dsCond :: " + dsCond);
		List<Map<String, Object>> result = FOMM0251WDao.select02(dsCond);
		return result;
	}
	
	/**
	 * SPP 게시판 종류 및 템플릿 조회
	 */
	@Override
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) throws Exception {
		List<Map<String, Object>> result = FOMM0251WDao.select03(dsCond);
		
		for (int i = 0; i < result.size(); i++) {

			Clob clob = (Clob) result.get(i).get("CONTS");

			if(clob != null) {
			  Reader reader = clob.getCharacterStream();
			  String str = IOUtils.toString(reader);
			  if(reader != null) {
				  reader.close();
			  }
			  result.get(i).put("CONTS", str);
			}
			
		}
		return result;
	}

	/**
	 * SPP SW/IT 게시판 그리드 - 조회
	 * @throws IllegalAccessException 
	 */
	@Override
	public List<Map<String, Object>> select04(Map<String, Object> dsCond, String reqTypeNm) throws IllegalAccessException {
		
		List<Map<String, Object>> result = null;
		
		switch (reqTypeNm) {
			case "SW":
				result = FOMM0251WDao.selectSW(dsCond);
				break;
				
			case "EDU":
				result = FOMM0251WDao.selectEDU(dsCond);
				break;
				
			default:
				throw new IllegalAccessException("알 수 없는 인자 :: " + reqTypeNm);
		}
		
		return result;
	}
	
	
	/**
	 * SPP 게시글 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPostDt,  List<Map<String, Object>> dsEduMt, List<Map<String, Object>> dsSwMt) 
	{
		String userId 	= sc.get().getScUserId();
		String deptId	= sc.get().getScDeptCd();
		String lmpId 	= sc.get().getScLmpId();
		
		
		/*********		게시글 번호 PK		************/
		String POST_DT_NO 	= "";
		
		int postDtRowCnt	= dsPostDt.size(); 	// 게시글
		int eduMtRowCnt		= dsEduMt.size(); 	// 교육조사 - 그리드
		int swMtRowCnt		= dsSwMt.size();	// sw조사 - 그리드	
		
		Map<String, Object> dtRowData = null;
		Map<String, Object> eduRowData = null;
		Map<String, Object> swRowData = null;
		String rowFlag = null;
		String popType = null;
		String leafYn = null;
		
		
		// dsPostDt :: save
		for (int i = 0; i < postDtRowCnt; i++) 
		{
			dtRowData = dsPostDt.get(i);

			// DATA RowFlag 가져오기
			rowFlag = StringUtil.safe(dtRowData.get("ROWFLAG"));
			leafYn = StringUtil.safe(dtRowData.get("LEAF_YN"));
	    	dtRowData.put("FRID", userId);
	    	dtRowData.put("LMID", userId);
	    	dtRowData.put("LMPID", lmpId);
	    	dtRowData.put("SYS_LANG_CD", sc.get().getScSysLangCd());
	    	dtRowData.put("WORD", dtRowData.get("SYS_WORD"));
	    	dtRowData.put("LEAF_YN", leafYn);

	    	if( "I".equals(rowFlag)) {
	    		FOMM0251WDao.insert01(dtRowData);
	    		POST_DT_NO = StringUtil.safe(dtRowData.get("POST_DT_NO"));
	    		fommMultipartService.replaceTempKey("FOMM_POST_DT", null, POST_DT_NO);
	    	}
	    	else if( "U".equals(rowFlag) ) {
	    		FOMM0251WDao.modify01(dtRowData);
	    	}
	    	else if( "D".equals(rowFlag) ) {
	    		FOMM0251WDao.remove01(dtRowData);
	    		
//	    		if("1".equals(leafYn)) {
//	    			FOMM0251WDao.remove01_leaf(dtRowData);	
//	    		}else {
//	    			FOMM0251WDao.remove01(dtRowData);
//	    		}
	    		
	    	}
		}
		
		if(dsEduMt.size() > 0) { // dsEduMt 데이터가 정상적으로 들어올 경우

			// dsEduMt :: save
			for (int i = 0; i < eduMtRowCnt; i++) 
			{
				eduRowData = dsEduMt.get(i);

				// DATA RowFlag 가져오기
		    	rowFlag = StringUtil.safe(eduRowData.get("ROWFLAG"));
		    	popType = StringUtil.safe(eduRowData.get("POPTYPE"));

		    	eduRowData.put("FRID", userId);
		    	eduRowData.put("REQ_USER_ID", userId);
		    	eduRowData.put("REQ_DEPT_ID", deptId);
		    	eduRowData.put("LMID", userId);
		    	eduRowData.put("LMPID", lmpId);

		    	if( "I".equals(rowFlag)) {
		    		if(!"U".equals(popType) && !"R".equals(popType)) { // (수정 팝업이 아닐 때만) 게시글 생성할 때 만드는 PK를 함께 보냄
			    		eduRowData.put("POST_DT_NO", POST_DT_NO);
		    		}
		    		
		    		FOMM0251WDao.insert04(eduRowData);
		    		String seq = StringUtil.safe(eduRowData.get("SEQ"));
		    		fommMultipartService.replaceTempKey("FOMM_POST_EDU_REQ", null, seq);
		    	}
		    	else if( "U".equals(rowFlag) ) {
		    		FOMM0251WDao.modify04(eduRowData);
		    	}
		    	else if( "D".equals(rowFlag) ) {
		    		FOMM0251WDao.remove04(eduRowData);
		    	}
			}
		}
		
		if(dsSwMt.size() > 0) { // 데이터가 정상적으로 들어올 경우
			
			// dsSwMt :: save
			for (int i = 0; i < swMtRowCnt; i++) 
			{
				swRowData = dsSwMt.get(i);

				// DATA RowFlag 가져오기
		    	rowFlag = StringUtil.safe(swRowData.get("ROWFLAG"));
		    	popType = StringUtil.safe(swRowData.get("POPTYPE"));

		    	swRowData.put("FRID", userId);
		    	swRowData.put("REQ_USER_ID", userId);
		    	swRowData.put("REQ_DEPT_ID", deptId);
		    	swRowData.put("LMID", userId);
		    	swRowData.put("LMPID", lmpId);

		    	if( "I".equals(rowFlag)) {
		    		if(!"U".equals(popType) && !"R".equals(popType)) { // (수정 팝업이 아닐 때만) 게시글 생성할 때 만드는 PK를 함께 보냄
			    		swRowData.put("POST_DT_NO", POST_DT_NO);
		    		}
		    		
		    		FOMM0251WDao.insert03(swRowData);
		    		String seq = StringUtil.safe(swRowData.get("SEQ"));
		    		fommMultipartService.replaceTempKey("FOMM_POST_SW_REQ", null, seq);
		    	}
		    	else if( "U".equals(rowFlag) ) {
		    		FOMM0251WDao.modify03(swRowData);
		    	}
		    	else if( "D".equals(rowFlag) ) {
		    		FOMM0251WDao.remove03(swRowData);
		    	}
			}
		}
		return POST_DT_NO;
	}

	/**
	 * SPP 게시판 저장
	 */
	@Transactional
	@Override
	public void save02(List<Map<String, Object>> dsPostMt) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsPostMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsPostMt.get(i);
			
			System.out.println("#### rowData : " + rowData);
			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("FRID", userId);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SYS_LANG_CD", sc.get().getScSysLangCd());
	    	rowData.put("WORD", rowData.get("SYS_WORD"));

	    	if( "I".equals(rowFlag)) {
	    		FOMM0251WDao.insert02(rowData);
	    	}
	    	else if( "U".equals(rowFlag) ) {
	    		FOMM0251WDao.modify02(rowData);
	    	}
	    	else if( "D".equals(rowFlag) ) {
	    		FOMM0251WDao.remove02(rowData);
	    	}
		}
		
	}

	
	/**
	 * 	SPP 게시판 템플릿 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) throws Exception{
		List<Map<String, Object>> result = FOMM0251WDao.select05(dsCond);
		
		for (int i = 0; i < result.size(); i++) {

			Clob clob = (Clob) result.get(i).get("CONTS");

			if(clob != null) {
				Reader reader = clob.getCharacterStream();
				String str = IOUtils.toString(reader);
				result.get(i).put("CONTS", str);
				
				if(reader != null) {
	            	reader.close();
	            }
			}
			
		}
		return result;
	}

	/**
	 * 	SPP 게시판 템플릿 저장
	 */
	@Transactional
	@Override
	public void save03(List<Map<String, Object>> dsTmplMt) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsTmplMt.size();

		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsTmplMt.get(i);
			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("FRID", userId);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SYS_LANG_CD", sc.get().getScSysLangCd());
	    	rowData.put("WORD", rowData.get("SYS_WORD"));
	    	
	    	if( "I".equals(rowFlag)) {
	    		FOMM0251WDao.insert05(rowData);
	    	}
	    	else if( "U".equals(rowFlag) ) {
	    		FOMM0251WDao.modify05(rowData);
	    	}
	    	else if( "D".equals(rowFlag) ) {
	    		FOMM0251WDao.remove05(rowData);
	    	}
		}
	}

	/**
	 * 	SPP 게시판 조회수 증가
	 */
	@Transactional
	public void updateCnt(Map<String, Object> dsCond) {
		FOMM0251WDao.updateCnt(dsCond);
	}

	/**
	 * SPP 게시판 CRUD 권한 visible 처리
	 */
	@Override
	public List<Map<String, Object>> select06(Map<String, Object> dsSessUser) {
		List<Map<String, Object>> result = FOMM0251WDao.select06(dsSessUser);
		return result;
	}

	@Override
	public List<Map<String, Object>> select07(Map<String, Object> dsCond) {
		System.out.println("--------------dsCond :: " + dsCond);
		List<Map<String, Object>> result = FOMM0251WDao.select07(dsCond);
		return result;
	}
	



}
