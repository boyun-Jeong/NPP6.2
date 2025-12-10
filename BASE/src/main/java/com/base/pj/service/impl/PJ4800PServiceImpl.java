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
import com.base.pj.dao.PJ4800PDAO;
import com.base.pj.service.PJ4800PService;

/**
 * 
 * <pre>
 * @title
 * - 프로그램 개발 진척 현황 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 06.	정보윤		최초작성
 */
@Service
public class PJ4800PServiceImpl implements PJ4800PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4800PDAO pj4800pDao;

	/**
	 * 개발 진척 현황 상세(화면)
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4800pDao.select01(dsCond);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(인터페이스)
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4800pDao.select02(dsCond);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(배치프로그램)
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4800pDao.select03(dsCond);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(프로그램)
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4800pDao.select04(dsCond);
		return result;
	}

	/**
	 * 개발 진척 현황 상세(보고서)
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj4800pDao.select05(dsCond);
		return result;
	}
}