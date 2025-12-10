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
import com.base.pj.dao.PJ5500WDAO;
import com.base.pj.service.PJ5500WService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 현황 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 13.	정보윤		최초작성
 */
@Service
public class PJ5500WServiceImpl implements PJ5500WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5500WDAO pj5500wDao;

	/**
	 * 시나리오 테스트 현황 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5500wDao.select01(dsCond);

		return result;
	}
}