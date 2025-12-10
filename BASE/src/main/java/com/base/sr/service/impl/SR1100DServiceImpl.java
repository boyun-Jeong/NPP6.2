package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.sr.dao.SR1100DDAO;
import com.base.sr.service.SR1100DService;

/**
 * 
 * <pre>
 * @title
 * - 마스터 프로젝트 종료 요청 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 10.	정보윤		최초작성
 */
@Service
public class SR1100DServiceImpl implements SR1100DService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR1100DDAO sr1100dDao;

	/**
	 * 마스터 프로젝트 종료 요청 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr1100dDao.select01(dsCond);
		return result;
	}

	/**
	 * 서브 프로젝트 예정종료일 변경 이력
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr1100dDao.select02(dsCond);
		return result;
	}

	/**
	 * 담당 BA 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCgerSrMaBaRev(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr1100dDao.selectCgerSrMaBaRev(dsCond);
		return result;
	}
}