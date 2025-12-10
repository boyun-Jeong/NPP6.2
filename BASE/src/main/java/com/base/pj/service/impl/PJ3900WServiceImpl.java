package com.base.pj.service.impl;

import java.io.BufferedReader;
import java.io.Reader;
import java.sql.Clob;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.base.com.vo.SessionContext;
import com.base.pj.dao.PJ3900WDAO;
import com.base.pj.service.PJ3900WService;
import com.base.pj.web.PJ3900WController;

/**
 * 
 * <pre>
 * @title
 * - 요구사항 추적(기능) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 30.	정보윤		최초작성
 */
@Service
public class PJ3900WServiceImpl implements PJ3900WService {

	private Logger log = LoggerFactory.getLogger(PJ3900WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3900WDAO pj3900wDao;

	/**
	 * 요구사항 추적(기능) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = pj3900wDao.select01(dsCond);

		String[] columns = new String[] {
				"FUNC_NO_INFO", "FUNC_NAME_INFO", "SCR_NO_INFO", "SCR_NAME_INFO", "INF_NO_INFO",
				"INF_NAME_INFO", "BTJB_NO_INFO", "BTJB_NAME_INFO", "UTEST_NO_INFO", "UTEST_NAME_INFO",
				"STEST_NO_INFO", "STEST_NAME_INFO"
		};
		
		for (int i = 0; i < result.size(); i++) {

			for (int j = 0; j < columns.length; j++) {
				
				StringBuffer sb = new StringBuffer();

				Clob clob = (Clob) result.get(i).get(columns[j]);

				if(clob != null) {
				      String str = "";
				      Reader reader = clob.getCharacterStream();
				      BufferedReader br = new BufferedReader(reader);
				      //2024-10-30 sparrow 조치 - 리소스누수
				      try {
					      while((str = br.readLine()) != null) {
					    	  sb.append(str);   
					      }
				      }catch(Exception e) {
						  log.error("ERROR PJ3900WServiceImpl select01 >> catch");
				      } finally {
				    	  if(br != null) br.close();				    	  
				    	  if(reader != null)	reader.close();
				      }
				      
				      log.debug("data====\n" + sb.toString());
				      result.get(i).put(columns[j], sb.toString().replaceAll("¶", "\n"));
				}
			}
		}
		return result;
	}
}
