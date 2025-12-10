package com.base.pj.service.impl;

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
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ4100WDAO;
import com.base.pj.service.PJ4100WService;

/**
 * 
 * <pre>
 * @title
 * - 요구관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 26.	정보윤		최초작성
 */
@Service
public class PJ4100WServiceImpl implements PJ4100WService {

	private Logger log = LoggerFactory.getLogger(PJ4100WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4100WDAO pj4100wDao;

//	@Autowired
//	private FommMultipartService fommMultipartService;

	/**
	 * 요구관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = pj4100wDao.select01(dsCond);

		String[] columns = new String[] {"REQ_NO_INFO", "REQ_NAME_INFO"};
		
		for (int i = 0; i < result.size(); i++) {

			for (int j = 0; j < columns.length; j++) {
				
				StringBuffer sb = new StringBuffer();

				Clob clob = (Clob) result.get(i).get(columns[j]);

				if(clob != null) {
				      String str = "";
				      Reader reader = clob.getCharacterStream();
				      BufferedReader br = new BufferedReader(reader);
				      //2024-10-25 sparrow 처리
				      try {
	
					      while((str = br.readLine()) != null) {
					    	  sb.append(str);   
					      }
					      result.get(i).put(columns[j], sb.toString().replaceAll("¶", "\n"));
				      }
					  catch(Exception e) {
						  log.error("PJ4100WServiceImpl select01() >> catch");
						  log.error(e.toString());							
					  }
					  finally {
						  if (br != null) {
				                try {
				                	br.close();
				                } catch (Exception e1) {
				                }
						  }
						  if(reader != null)	reader.close();
					  }
					      
				}
			}
		}
		
		return result;
	}

	/**
	 * 요구관리 저장
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

	    	if("D".equals(rowFlag)) {
	    		pj4100wDao.remove01(rowData);
	    		pj4100wDao.remove02(rowData);
	    		pj4100wDao.remove03(rowData);
	    		pj4100wDao.remove04(rowData);
	    		pj4100wDao.remove05(rowData);
	    		pj4100wDao.remove06(rowData);
	    	}
		}
	}
}