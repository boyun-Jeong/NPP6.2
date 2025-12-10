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
import com.base.pj.dao.PJ1900WDAO;
import com.base.pj.service.PJ1900WService;

/**
 * 
 * <pre>
 * @title
 * - 품질 이행 관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Service
public class PJ1900WServiceImpl implements PJ1900WService {

//	@Inject
//	private Provider<SessionContext> sc;

	@Autowired
	private PJ1900WDAO pj1900wDao;

	/**
	 * 품질 이행 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1900wDao.select01(dsCond);

		return result;
	}
}