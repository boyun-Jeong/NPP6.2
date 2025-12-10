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
import com.base.pj.dao.PJ3820PDAO;
import com.base.pj.service.PJ3820PService;

/**
 * 
 * <pre>
 * @title
 * - 요구사항 조회 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 31.	정보윤		최초작성
 */
@Service
public class PJ3820PServiceImpl implements PJ3820PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3820PDAO pj3820pDao;

	/**
	 * 요구사항 조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3820pDao.select01(dsCond);

		return result;
	}
}