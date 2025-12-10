package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0180WDAO;
import com.base.fomm.service.FOMM0180WService;

/**
 * 
 * <pre>
 * @title
 * - 세션관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  황채린
 * @since   2024. 02. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 02. 15.	황채린		최초작성
 */
@Service
public class FOMM0180WServiceImpl implements FOMM0180WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0180WDAO fomm0180wDao;

	/**
	 * 세션관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = fomm0180wDao.select01(dsCond);

		return result;
	}

	/**
	 * 세션관리 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = fomm0180wDao.select02(dsCond);

		return result;
	}

	/**
	 * 세션관리 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = fomm0180wDao.select03(dsCond);

		return result;
	}

}