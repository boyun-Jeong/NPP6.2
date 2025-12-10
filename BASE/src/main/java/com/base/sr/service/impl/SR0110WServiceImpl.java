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
import com.base.sr.dao.SR0110WDAO;
import com.base.sr.service.SR0110WService;

/**
 * 
 * <pre>
 * @title
 * - 요청서 등록 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 26.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 26.	정보윤		최초작성
 */
@Service
public class SR0110WServiceImpl implements SR0110WService {
	
	@Inject
	private Provider<SessionContext> sc;
	
	@Autowired
	private SR0110WDAO sr0110wDao;

	/**
	 * 요청서 등록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = sr0110wDao.select01(dsCond);

		return result;
	}
}