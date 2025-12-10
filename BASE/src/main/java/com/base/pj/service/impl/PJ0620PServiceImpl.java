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
import com.base.pj.dao.PJ0620PDAO;
import com.base.pj.service.PJ0620PService;

/**
 * 
 * <pre>
 * @title
 * - 회의 상세 Service(구현체)
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
public class PJ0620PServiceImpl implements PJ0620PService {

	private Logger log = LoggerFactory.getLogger(PJ0620PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0620PDAO pj0620pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 회의 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0620pDao.select01(dsCond);

		return result;
	}

	/**
	 * 회의 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0620pDao.select02(dsCond);

		return result;
	}

	/**
	 * 회의 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjMeeting, List<Map<String, Object>> dsPjMeetAttnd) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsPjMeeting.size();
		Map<String, Object> rowData = null;

		String meetId = "";
		
		if(rowCnt > 0) {
			rowData = dsPjMeeting.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0620pDao.insert01(rowData);
	    		meetId = StringUtil.safe(rowData.get("MEET_ID"));
	    		log.debug("PJ0610PServiceImpl INSERT01 meetId ===============> " + meetId);
	    		fommMultipartService.replaceTempKey("PJ_MEETING", null, meetId);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj0620pDao.modify01(rowData);
	    	}
		}
		
		log.debug("PJ0510PServiceImpl dsPjMeetAttnd.size() ===============> " + dsPjMeetAttnd.size());
		
		for (int i = 0; i < dsPjMeetAttnd.size(); i++) {

			rowData = dsPjMeetAttnd.get(i);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			if(!"".equals(meetId)) rowData.put("MEET_ID", meetId);
			
			log.debug("PJ0610PServiceImpl dsPjMeetAttnd i=" + i + " ROWFLAG " + rowFlag);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if("I".equals(rowFlag)) {
	    		pj0620pDao.insert02(rowData);
	    	}else if("U".equals(rowFlag)) {
	    		pj0620pDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0620pDao.remove01(rowData);
	    	}
		}
		return meetId;
	}
}