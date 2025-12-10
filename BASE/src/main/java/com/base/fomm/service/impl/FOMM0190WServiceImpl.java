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
import com.base.fomm.dao.FOMM0190WDAO;
import com.base.fomm.service.FOMM0190WService;

/**
 * 
 * <pre>
 * @title
 * - 부서관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2024. 07. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 02.	이정빈		최초작성
 */
@Service
public class FOMM0190WServiceImpl implements FOMM0190WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0190WDAO fomm0190wDao;

	
	
	/**
	 * 부서관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0190wDao.select01(dsCond);
		return result;
	}

	
	/**
	 * 하위부서 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0190wDao.select02(dsCond);
		return result;
	}
}