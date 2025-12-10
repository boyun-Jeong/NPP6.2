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
import com.base.pj.dao.PJ0900WDAO;
import com.base.pj.service.PJ0900WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 진척 조회(PMO) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 21.	정보윤		최초작성
 */
@Service
public class PJ0900WServiceImpl implements PJ0900WService {

//	@Inject
//	private Provider<SessionContext> sc;

	@Autowired
	private PJ0900WDAO pj0900wDao;

	/**
	 * 프로젝트 진척 조회(PMO) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0900wDao.select01(dsCond);

		return result;
	}
}