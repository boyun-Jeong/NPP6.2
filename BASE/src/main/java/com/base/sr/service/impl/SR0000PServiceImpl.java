package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000PDAO;
import com.base.sr.service.SR0000PService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 05. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 05. 31.	정보윤		최초작성
 */
@Service
public class SR0000PServiceImpl implements SR0000PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0000PDAO sr0000pDao;

	/**
	 * 요청서 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = sr0000pDao.select01(dsCond);
		return result;
		
	}
	/**
	 * 요청서 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		dsCond.put("USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = sr0000pDao.select02(dsCond);
		return result;
		
	}
}