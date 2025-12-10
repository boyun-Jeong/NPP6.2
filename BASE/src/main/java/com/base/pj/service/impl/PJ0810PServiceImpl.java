package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ0810PDAO;
import com.base.pj.service.PJ0810PService;
import com.base.pj.web.PJ0210PController;

/**
 * 
 * <pre>
 * @title
 * - 서브프로젝트상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
@Service
public class PJ0810PServiceImpl implements PJ0810PService {

	private Logger log = LoggerFactory.getLogger(PJ0210PController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0810PDAO pj0810pDao;

	/**
	 * 서브프로젝트상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0810pDao.select01(dsCond);

		return result;
	}
	
	/**
	 * 업무 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0810pDao.select02(dsCond);

		return result;
	}

	/**
	 * 사업방법론 조회
	 */
	public List<Map<String, Object>> select03() {

		List<Map<String, Object>> result = pj0810pDao.select03();

		return result;
	}	

	/**
	 * 서브프로젝트상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjProject, List<Map<String, Object>> dsBizItem, String oriMethodId) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String pjtId = "";
		
		if(dsPjProject.size() > 0) {
			
			Map<String, Object> rowData = dsPjProject.get(0);
	
	        // DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	
	    	if("I".equals(rowFlag)) {
	    		pj0810pDao.insert01(rowData);
	    		pjtId = StringUtil.safe(rowData.get("PJT_ID"));
	    		log.debug("PJ0810PServiceImpl INSERT01 pjtId ===============> " + pjtId);
	    		pj0810pDao.modify03(rowData);
	    		pj0810pDao.insert03(rowData);
	    		pj0810pDao.insert04(rowData);
	
	    	}else if("U".equals(rowFlag)) {
	    		pj0810pDao.modify01(rowData);
	
	    	}else if("D".equals(rowFlag)) {
	    		pj0810pDao.remove01(rowData);
	    		pj0810pDao.remove02(rowData);
	    		pj0810pDao.remove03(rowData);
	    		pj0810pDao.remove04(rowData);
	    		pj0810pDao.remove05(rowData);
	    	}
	    	
	    	if("I".equals(rowFlag)|| "U".equals(rowFlag)) {
		    	String strMethodId =  StringUtil.safe(rowData.get("METHOD_ID"));
	    		
	    		if( !"".equals(oriMethodId) && oriMethodId.equals(strMethodId) ) {
	    			pj0810pDao.remove03(rowData);
	    		}
	    	}
		}

		int rowCnt = dsBizItem.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsBizItem.get(i);
			
			if(!"".equals(pjtId)) {
				rowData.put("PJT_ID", pjtId);
			}
			

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0810pDao.insert02(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj0810pDao.modify02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj0810pDao.remove02(rowData);
	    	}
		}
		return pjtId;
	}
}