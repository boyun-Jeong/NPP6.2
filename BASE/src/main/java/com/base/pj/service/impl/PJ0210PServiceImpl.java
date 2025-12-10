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

import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ0210PDAO;
import com.base.pj.service.PJ0210PService;
import com.base.pj.web.PJ0210PController;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 등록/수정 상세조회 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 14.	정보윤		최초작성
 */
@Service
public class PJ0210PServiceImpl implements PJ0210PService {

	private Logger log = LoggerFactory.getLogger(PJ0210PController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0210PDAO pj0210pDao;
	
	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 프로젝트 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0210pDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 프로젝트 Item 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0210pDao.select02(dsCond);
		return result;
	}

	/**
	 * 프로젝트 등록/수정/삭제 상세조회 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsProject, List<Map<String, Object>> dsProjectItem) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String pjtId = "";
		
		if(dsProject.size() > 0) {
			
			Map<String, Object> rowData = dsProject.get(0);
	
	        // DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	
	    	if("I".equals(rowFlag)) {
	    		pj0210pDao.insert01(rowData);
	    		pjtId = StringUtil.safe(rowData.get("PJT_ID"));
	    		log.debug("PJ0210PServiceImpl INSERT01 pjtId ===============> " + pjtId);
	    		fommMultipartService.replaceTempKey("PJ_PROJECT", null, pjtId);
	    		
	    		pj0210pDao.insert03(rowData);
	    		pj0210pDao.insert04(rowData);
	
	    	}else if("U".equals(rowFlag)) {
	    		pj0210pDao.modify01(rowData);
	
	    	}else if("D".equals(rowFlag)) {
	    		pj0210pDao.remove01(rowData);
	    		pj0210pDao.remove02(rowData);
	    		pj0210pDao.remove03(rowData);
	    		pj0210pDao.remove04(rowData);
	    	}
		}
    	
		log.debug("dsProjectItem.size=============================> " + dsProjectItem.size());
		
    	for (int i = 0; i < dsProjectItem.size(); i++) {
			Map<String, Object> rowData = dsProjectItem.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	log.debug("dsProjectItem i=" + i + " ROWFLAG : " + rowFlag);

	    	if("".equals(StringUtil.safe(rowData.get("PJT_ID")))) {
	    		rowData.put("PJT_ID", pjtId);	    		
	    	}	    	 
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0210pDao.insert02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0210pDao.remove02(rowData);
	    	}
		}
		return pjtId;
	}
}