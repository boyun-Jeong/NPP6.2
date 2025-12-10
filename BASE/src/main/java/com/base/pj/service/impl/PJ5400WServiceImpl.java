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
import com.base.pj.dao.PJ5400WDAO;
import com.base.pj.service.PJ5400WService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 10.	정보윤		최초작성
 */
@Service
public class PJ5400WServiceImpl implements PJ5400WService {

	private Logger log = LoggerFactory.getLogger(PJ5400WService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5400WDAO pj5400wDao;

	/**
	 * 시나리오 테스트 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = pj5400wDao.select01(dsCond);
		
		String[] columns = new String[] {
				"SCR_NO_INFO", "SCR_NAME_INFO", "BTJB_NO_INFO", "BTJB_NAME_INFO",
				"INF_NO_INFO", "INF_NAME_INFO", "STEP_DESC"
		};
		
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
						  log.error("PJ5400WServiceImpl select01() >> catch");
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
	 * 시나리오 테스트 관리 저장
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
	    		pj5400wDao.remove01(rowData);
	    	}
		}
	}
}