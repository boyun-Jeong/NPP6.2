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

import com.base.com.vo.SessionContext;
import com.base.pj.dao.PJ4620PDAO;
import com.base.pj.service.PJ4620PService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 목록 검색(팝업) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 07.	정보윤		최초작성
 */
@Service
public class PJ4620PServiceImpl implements PJ4620PService {

	private Logger log = LoggerFactory.getLogger(PJ4620PService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4620PDAO pj4620pDao;

	/**
	 * 프로그램 목록 검색(팝업) 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = pj4620pDao.select01(dsCond);
		
		String[] columns = new String[] {"FUNC_NO_INFO", "FUNC_NAME_INFO"};
		
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
						  log.error("PJ4620PServiceImpl select01() >> catch");
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
}