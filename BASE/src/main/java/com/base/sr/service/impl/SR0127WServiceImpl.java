package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0127WDAO;
import com.base.sr.service.SR0127WService;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  노익현
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	노익현		최초작성
 */
@Service
public class SR0127WServiceImpl implements SR0127WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0127WDAO sr0127wDao;

	/**
	 * SR요청 현황 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0127wDao.select00(dsCond);
		return result;
	}

	/**
	 * SR요청목록조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0127wDao.select01(dsCond);
		return result;
	}
	
}