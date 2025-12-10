package com.base.fomm.service.impl;

import java.io.BufferedReader;
import java.io.Reader;
import java.sql.Clob;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.com.web.FommBarcodeFileController;
import com.base.fomm.dao.FOMM0300PDAO;
import com.base.fomm.service.FOMM0300PService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 작업스케쥴 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 18.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 18.	이정빈		최초작성
 */
@Service
public class FOMM0300PServiceImpl implements FOMM0300PService {

	private Logger log = LoggerFactory.getLogger(FOMM0300PService.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0300PDAO fomm0300pDao;

	/**
	 * 작업스케쥴 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = fomm0300pDao.select01(dsCond);
		
		String[] columns = new String[] {"WORK_CONT"};
		
		for (int i = 0; i < result.size(); i++) {

			for (int j = 0; j < columns.length; j++) {
				
				StringBuffer sb = new StringBuffer();

				Clob clob = (Clob) result.get(i).get(columns[j]);

				if(clob != null) {
				      String str = "";
				      Reader reader = clob.getCharacterStream();
				      BufferedReader br = new BufferedReader(reader);
				      //20241025-sparrow조치
				      try {
					      while((str = br.readLine()) != null) {
					    	  sb.append(str);   
					      }
					      result.get(i).put(columns[j], sb.toString());
				      } 
				      catch (Exception e) 
					  {
							log.error("FOMM0300PServiceImpl select01() >> catch");
							log.error(e.toString());								    	  
					  }
					  finally {
						  if (br != null) {
				                try {
				                	br.close();
				                } catch (Exception e1) {
				                }
				          }
						  
						  if(reader != null) {
							  reader.close();
						  }
					  }
				}
			}
		}
		return result;
	}

	/**
	 * 작업스케쥴 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0300pDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		fomm0300pDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		fomm0300pDao.remove01(rowData);
	    	}
		}
	}
}