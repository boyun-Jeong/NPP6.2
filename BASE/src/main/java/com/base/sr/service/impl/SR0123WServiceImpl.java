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
import com.base.sr.dao.SR0123WDAO;
import com.base.sr.service.SR0123WService;

/**
 * 
 * <pre>
 * @title
 * - 요청함(CMO/PMO)조회 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 21.	김미성		최초작성
 */
@Service
public class SR0123WServiceImpl implements SR0123WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0123WDAO sr0123wDao;

	/**
	 * 요청함(CMO/PMO)조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0123wDao.select01(dsCond);
		return result;
	}
	
}