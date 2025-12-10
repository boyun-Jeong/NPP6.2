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
import com.base.sr.dao.SR0141WDAO;
import com.base.sr.service.SR0141WService;

/**
 * 
 * <pre>
 * @title
 * - 검토함 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	정보윤		최초작성
 */
@Service
public class SR0141WServiceImpl implements SR0141WService 
{
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0141WDAO sr0141wDao;

	
	
	
	/**
	 * 결재함 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{
		// session 사번
		String userId 	= sc.get().getScUserId();
		dsCond.put("USER_ID", userId);
		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = sr0141wDao.select01(dsCond);
		return result;
	}

	
	
	/**
	 * 결재함 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

	}
}