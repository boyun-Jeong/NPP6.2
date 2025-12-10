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
import com.base.fomm.dao.FOMM0300WDAO;
import com.base.fomm.service.FOMM0300WService;

/**
 * 
 * <pre>
 * @title
 * - 일정등록 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 14.	이정빈		최초작성
 */
@Service
public class FOMM0300WServiceImpl implements FOMM0300WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0300WDAO fomm0300wDao;

	/**
	 * 조회 월의 시작일 요일과 마지막 날짜 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = fomm0300wDao.select01(dsCond);

		return result;
	}
	
	/**
	 * 일정등록 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = fomm0300wDao.select02(dsCond);

		return result;
	}
}