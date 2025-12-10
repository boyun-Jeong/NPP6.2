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
import com.base.pj.dao.PJ5700WDAO;
import com.base.pj.service.PJ5700WService;

/**
 * 
 * <pre>
 * @title
 * - 시나리오 테스트 결함 통계 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 15.	정보윤		최초작성
 */
@Service
public class PJ5700WServiceImpl implements PJ5700WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5700WDAO pj5700wDao;

	/**
	 * 시나리오 테스트 결함 통계 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = pj5700wDao.select01(dsCond);
		return result;
	}
}