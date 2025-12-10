package com.base.fomm.service.impl;

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
import com.base.fomm.dao.FOMM0800WDAO;
import com.base.fomm.service.FOMM0800WService;

/**
 * 
 * <pre>
 * @title
 * - 표준 체크리스트 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	김미성		최초작성
 */
@Service
public class FOMM0800WServiceImpl implements FOMM0800WService {

	private Logger log = LoggerFactory.getLogger(FOMM0800WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0800WDAO FOMM0800wDao;

	/**
	 * 표준 체크리스트 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		// session 사번
		String userId 	= sc.get().getScUserId();
		dsCond.put("SESS_USER_ID", userId);

		List<Map<String, Object>> result = FOMM0800wDao.select01(dsCond);
		return result;
	}

}