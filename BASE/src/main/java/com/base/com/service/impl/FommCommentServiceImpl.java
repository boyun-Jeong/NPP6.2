package com.base.com.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.dao.FommCommentDAO;
import com.base.com.service.FommCommentService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        공통 댓글 ServiceImpl Class
 * @package com.base.com.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 00.	WEMB		최초작성
 */
@Service
public class FommCommentServiceImpl implements FommCommentService {

	private Logger log = LoggerFactory.getLogger(FommCommentService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommCommentDAO fommCommentDao;

	
	
	/**
	 * 공통댓글 조회
	 */	
	public List<Map<String, Object>> selectComment(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> dsData = fommCommentDao.selectComment(dsCond);
		return dsData;
	}
	
	


	/**
	 * 공통 댓글 저장
	 */
	@Transactional
	public void saveComment(List<Map<String, Object>> dsInput) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		for(int i = 0; i < dsInput.size(); i++)
		{
			Map<String, Object> rowData = dsInput.get(i);
			
			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		fommCommentDao.insertComment(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("U")) {
	    		fommCommentDao.modifyComment(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fommCommentDao.removeComment(rowData);
	    	}
			
		}
	}
	

}