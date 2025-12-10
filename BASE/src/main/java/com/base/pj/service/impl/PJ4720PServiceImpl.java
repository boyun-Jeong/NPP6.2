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
import com.base.pj.dao.PJ4720PDAO;
import com.base.pj.service.PJ4720PService;

/**
 * 
 * <pre>
 * @title
 * - 보고서 검색 팝업 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 08.	정보윤		최초작성
 */
@Service
public class PJ4720PServiceImpl implements PJ4720PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ4720PDAO pj4720pDao;

	/**
	 * 보고서 검색 팝업 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj4720pDao.select01(dsCond);
		return result;
	}
}