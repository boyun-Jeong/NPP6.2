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
import com.base.pj.dao.PJ0410PDAO;
import com.base.pj.service.PJ0410PService;
import com.base.pj.web.PJ0210PController;

/**
 * 
 * <pre>
 * @title
 * - 보고 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 05.	정보윤		최초작성
 */
@Service
public class PJ0410PServiceImpl implements PJ0410PService {

	private Logger log = LoggerFactory.getLogger(PJ0410PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0410PDAO pj0410pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 보고 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0410pDao.select01(dsCond);

		return result;
	}

	/**
	 * 보고 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String rptId = "";
		
		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0410pDao.insert01(rowData);
	    		rptId = StringUtil.safe(rowData.get("REPORT_ID"));
	    		log.debug("PJ0410PServiceImpl INSERT01 rptId ===============> " + rptId);
	    		fommMultipartService.replaceTempKey("PJ_REPORT", null, rptId);

	    	}else if("U".equals(rowFlag)) {
	    		pj0410pDao.modify01(rowData);
	    	}
		}
		return rptId;
	}
}