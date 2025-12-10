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
import com.base.sr.dao.SR0122WDAO;
import com.base.sr.service.SR0122WService;

/**
 * 
 * <pre>
 * @title
 * - SR요청목록조회 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 08. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 08.	정보윤		최초작성
 */
@Service
public class SR0122WServiceImpl implements SR0122WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0122WDAO sr0122wDao;

	/**
	 * SR요청 현황 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select00(dsCond);
		return result;
	}

	/**
	 * SR요청목록조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select01(dsCond);
		return result;
	}

	
	
	/**
	 * SR요청 현황(비상) 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05_01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select05_01(dsCond);
		return result;
	}
	
	/**
	 * SR요청목록조회(비상) 목록 조회
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select05(dsCond);
		return result;
	}
	
	/**
	 * SR요청 현황(비상) 업무시간 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05_001(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select05_001(dsCond);
		return result;
	}
	
	/**
	 * SR요청 현황(비상) 공휴일 조회
	 * @param dsCond
	 * @return
	 */
	public  List<Map<String, Object>> select05_002(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select05_002(dsCond);
		return result;
	}
	
	/**
	 * SR요청 현황(폐기) 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06_01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select06_01(dsCond);
		return result;
	}
	
	/**
	 * SR요청목록조회(폐기) 목록 조회
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0122wDao.select06(dsCond);
		return result;
	}
	
}