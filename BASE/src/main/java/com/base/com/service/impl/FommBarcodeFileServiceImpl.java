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

import com.base.com.dao.FommBarcodeFileDAO;
import com.base.com.service.FommBarcodeFileService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        첨부파일 업/다운로드 ServiceImpl Class
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
public class FommBarcodeFileServiceImpl implements FommBarcodeFileService {

	private Logger log = LoggerFactory.getLogger(FommBarcodeFileService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommBarcodeFileDAO fommBarcodeFileDao;

	
	
	
	/**
	 * 바코드 출력 이력 저장
	 */
	@Transactional
	public void insertBarcodeHist(List<Map<String, Object>> dsBarCode) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		for(int i = 0; i < dsBarCode.size(); i++)
		{
			Map<String, Object> rowData = dsBarCode.get(i);
			
			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	fommBarcodeFileDao.insertBarcodeHist(rowData);
		}
	}
}