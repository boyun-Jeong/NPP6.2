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
import com.base.pj.dao.PJ5020PDAO;
import com.base.pj.service.PJ5020PService;

/**
 * 
 * <pre>
 * @title
 * - 단위 테스트 검색 팝업 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
@Service
public class PJ5020PServiceImpl implements PJ5020PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5020PDAO pj5020pDao;

	/**
	 * 단위 테스트 검색 팝업 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5020pDao.select01(dsCond);

		return result;
	}
}