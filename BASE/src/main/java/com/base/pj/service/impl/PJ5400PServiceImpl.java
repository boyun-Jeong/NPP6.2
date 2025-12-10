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

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ5400PDAO;
import com.base.pj.service.PJ5400PService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
@Service
public class PJ5400PServiceImpl implements PJ5400PService {

	private Logger log = LoggerFactory.getLogger(PJ5400PService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5400PDAO pj5400pDao;

	/**
	 * 시나리오 테스트 상세 조회(PJ_SCNR_TEST)
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception{

		List<Map<String, Object>> result = pj5400pDao.select01(dsCond);
		
		String[] columns = new String[] {"STEP_DESC"};
		
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
					      result.get(i).put(columns[j], sb.toString());
				      }
					  catch(Exception e) {
						  log.error("PJ5400PServiceImpl select01() >> catch");
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
	 * PJ_ST_DEFECT 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5400pDao.select02(dsCond);
		return result;
	}

	/**
	 * PJ_STEST_INF_MAP 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5400pDao.select03(dsCond);
		return result;
	}

	/**
	 * PJ_STEST_SCR_MAP 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5400pDao.select04(dsCond);
		return result;
	}

	/**
	 * PJ_STEST_BTJB_MAP 목록 조회
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5400pDao.select05(dsCond);
		return result;
	}

	/**
	 * 시나리오 테스트 상세 저장
	 */
	@Transactional
	public String save01(@ParamDataSet(name = "dsScnrTest") List<Map<String, Object>> dsScnrTest,
						 @ParamDataSet(name = "dsScrMap") List<Map<String, Object>> dsScrMap,
						 @ParamDataSet(name = "dsBatchjobMap") List<Map<String, Object>> dsBatchjobMap,
						 @ParamDataSet(name = "dsInfMap") List<Map<String, Object>> dsInfMap) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String stestId = "";
		
		if(dsScnrTest.size() > 0) {
			Map<String, Object> rowData = dsScnrTest.get(0);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj5400pDao.insert01(rowData);
	    		stestId = StringUtil.safe(rowData.get("STEST_ID"));
	    	} else if("U".equals(rowFlag)) {
	    		pj5400pDao.modify01(rowData);
	    	}
		}
		
		for (int i = 0; i < dsScrMap.size(); i++) {
			Map<String, Object> rowData = dsScrMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(stestId)) {
	    		rowData.put("REF_ID", stestId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj5400pDao.insert02(rowData);
	    	}else if("D".equals(rowFlag)) {
	    		pj5400pDao.remove01(rowData);
	    	}
		}
		
		for (int i = 0; i < dsBatchjobMap.size(); i++) {
			Map<String, Object> rowData = dsBatchjobMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if(!"".equals(stestId)) {
	    		rowData.put("REF_ID", stestId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj5400pDao.insert03(rowData);
	    	}else if("D".equals(rowFlag)) {
	    		pj5400pDao.remove02(rowData);
	    	}
		}
		
		for (int i = 0; i < dsInfMap.size(); i++) {
			Map<String, Object> rowData = dsInfMap.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if(!"".equals(stestId)) {
	    		rowData.put("REF_ID", stestId);
	    	}

	    	if("I".equals(rowFlag)) {
	    		pj5400pDao.insert04(rowData);
	    	}else if("D".equals(rowFlag)) {
	    		pj5400pDao.remove03(rowData);
	    	}
		}
		return stestId;
	}
}