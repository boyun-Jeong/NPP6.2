package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ2500WDAO;
import com.base.pj.service.PJ2500WService;

/**
 * 
 * <pre>
 * @title
 * - 인력별 프로젝트 조회 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 19.	정보윤		최초작성
 */
@Service
public class PJ2500WServiceImpl implements PJ2500WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ2500WDAO pj2500wDao;

	/**
	 * 인력별 프로젝트 조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj2500wDao.select01(dsCond);

		return result;
	}

	/**
	 * 인력별 프로젝트 조회 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj2500wDao.select02(dsCond);

		return result;
	}
}