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

import com.base.fomm.dao.FOMM0210WDAO;
import com.base.fomm.service.FOMM0210WService;
import com.base.com.service.FommMultipartService;
import com.base.fwk.util.StringUtil;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 게시판 관리 ServiceImpl Class
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
@Service("FOMM0210WService")
public class FOMM0210WServiceImpl implements FOMM0210WService {

	private Logger log = LoggerFactory.getLogger(FOMM0210WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0210WDAO FOMM0210WDao;
	
	@Autowired
	private FommMultipartService fommMultipartService;

	
	/**
	 * SPP 게시판 목록 조회
	 */
	@Override
	public List<Map<String, Object>> select01(Map<String, Object> searchMap) 
	{
		List<Map<String, Object>> result = FOMM0210WDao.select01(searchMap);
		return result;
	}
	
	
	/**
	 * SPP 게시판 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsBoardMt) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsBoardMt.size();
		for (int i = 0; i < rowCnt; i++) 
		{
			Map<String, Object> rowData = dsBoardMt.get(i);

			// DATA RowFlag 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("SYS_LANG_CD", sc.get().getScSysLangCd());
	    	rowData.put("WORD", rowData.get("SYS_WORD"));

	    	if( "I".equals(rowFlag)) {
	    		FOMM0210WDao.insert01(rowData);
	    		String boardNo = StringUtil.safe(rowData.get("BOARD_NO"));
	    		fommMultipartService.replaceTempKey("FOMM_BOARD_MT", null, boardNo);
	    	}
	    	else if( "U".equals(rowFlag) ) {
	    		FOMM0210WDao.modify01(rowData);
	    	}
	    	else if( "D".equals(rowFlag) ) {
	    		FOMM0210WDao.remove01(rowData);
	    	}
		}
	}
	
}