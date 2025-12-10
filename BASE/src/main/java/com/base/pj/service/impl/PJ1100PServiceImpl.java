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
import com.base.pj.dao.PJ1100PDAO;
import com.base.pj.service.PJ1100PService;

/**
 * 
 * <pre>
 * @title
 * - 교육 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 14.	정보윤		최초작성
 */
@Service
public class PJ1100PServiceImpl implements PJ1100PService {

	private Logger log = LoggerFactory.getLogger(PJ1100PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1100PDAO pj1100pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 교육 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1100pDao.select01(dsCond);

		return result;
	}

	/**
	 * 교육 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1100pDao.select02(dsCond);

		return result;
	}

	/**
	 * 교육 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjEducation, List<Map<String, Object>> dsPjEduAttnd) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsPjEducation.size();
		Map<String, Object> rowData = null;

		String eduId = "";
		
		if(rowCnt > 0) {
			rowData = dsPjEducation.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj1100pDao.insert01(rowData);
	    		eduId = StringUtil.safe(rowData.get("EDU_ID"));
	    		log.debug("PJ0610PServiceImpl INSERT01 eduId ===============> " + eduId);
	    		fommMultipartService.replaceTempKey("PJ_EDUCATION", null, eduId);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj1100pDao.modify01(rowData);
	    	}
		}
		
		log.debug("PJ0510PServiceImpl dsPjEducation.size() ===============> " + dsPjEducation.size());
		
		for (int i = 0; i < dsPjEduAttnd.size(); i++) {

			rowData = dsPjEduAttnd.get(i);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			if(!"".equals(eduId)) rowData.put("EDU_ID", eduId);
			
			log.debug("PJ1100PServiceImpl dsPjMeetAttnd i=" + i + " ROWFLAG " + rowFlag);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag)) {
	    		pj1100pDao.insert02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj1100pDao.remove01(rowData);
	    	}
		}
		return eduId;
	}
}