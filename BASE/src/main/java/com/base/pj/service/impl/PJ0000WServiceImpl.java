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
import com.base.pj.dao.PJ0000WDAO;
import com.base.pj.service.PJ0000WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 관리(업무공통) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Service
public class PJ0000WServiceImpl implements PJ0000WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0000WDAO pj0000wDao;

	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> selectSubPjtInfo(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0000wDao.selectSubPjtInfo(dsCond);

		return result;
	}
	
	/**
	 * Main Project에 해당하는 WBS 레벨 목록을 조회한다.
	 */
	public List<Map<String, Object>> selectPjtWBSLvlInfo(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0000wDao.selectPjtWBSLvlInfo(dsCond);

		return result;
	}

	/**
	 * 프로젝트에 해당하는 업무 목록을 조회한다.
	 */
	public List<Map<String, Object>> selectProjectBiz(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0000wDao.selectProjectBiz(dsCond);

		return result;
	}
	
}