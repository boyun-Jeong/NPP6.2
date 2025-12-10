package com.base.sr.service.impl;

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
import com.base.sr.dao.SR6110DDAO;
import com.base.sr.service.SR6110DService;

/**
 * 
 * <pre>
 * @title
 * - 자산실사계획 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 01.	이정빈		최초작성
 */
@Service
public class SR6110DServiceImpl implements SR6110DService {

	private Logger log = LoggerFactory.getLogger(SR6110DServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR6110DDAO sr6110dDao;

	/**
	 * 자산실사계획 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr6110dDao.select01(dsCond);
		return result;
	}

	/**
	 * 자산실사계획 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsAmReqJob) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
	    String rowFlag = StringUtil.safe(dsAmReqJob.get("ROWFLAG"));
	    
	    log.debug("sr6110dDao.save() rowFlag==================================" + rowFlag);
	    
	    dsAmReqJob.put("LMID", userId);
	    dsAmReqJob.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		sr6110dDao.insert01(dsAmReqJob);
    	}else if("U".equals(rowFlag)) {
    		sr6110dDao.modify01(dsAmReqJob);
    	}
	}
}