package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.sr.dao.SR0010PDAO;
import com.base.sr.service.SR0010PService;

/**
 * 
 * <pre>
 * @title
 * - 사용자 정보(workflow) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	정보윤		최초작성
 */
@Service
public class SR0010PServiceImpl implements SR0010PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0010PDAO sr0010pDao;

	/**
	 * 사용자 정보(workflow) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0010pDao.select01(dsCond);
		return result;
	}

	/**
	 * 사용자 정보(workflow) 목록 조회(결재선)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0010pDao.select02(dsCond);
		return result;
	}

	/**
	 * 요청서 처리 이력 조회(팝업)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0010pDao.select03(dsCond);
		return result;
	}

	/**
	 * 요청서 처리 이력 조회(요청서 상단에 이력 표기용)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0010pDao.select04(dsCond);
		return result;
	}
}