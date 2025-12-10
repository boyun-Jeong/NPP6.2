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
import com.base.sr.dao.SR7100DDAO;
import com.base.sr.service.SR7100DService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 단계승인요청 Service(구현체)
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
public class SR7100DServiceImpl implements SR7100DService {

	private Logger log = LoggerFactory.getLogger(SR0200DServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR7100DDAO sr7100dDao;

	/**
	 * 프로젝트 단계승인요청 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr7100dDao.select01(dsCond);
		return result;
	}

	/**
	 * 프로젝트 단계승인요청 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsWfPbm) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
	    String rowFlag = StringUtil.safe(dsWfPbm.get("ROWFLAG"));
	    
	    log.debug("sr7100dDao.save() rowFlag==================================" + rowFlag);
	    
	    dsWfPbm.put("LMID", userId);
	    dsWfPbm.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		sr7100dDao.insert01(dsWfPbm);

    	}else if("U".equals(rowFlag)) {
    		sr7100dDao.modify01(dsWfPbm);
    	}
	}
}