package com.base.pj.service.impl;

import java.io.BufferedReader;
import java.sql.Clob;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.base.com.vo.SessionContext;
import com.base.pj.dao.PJ3910WDAO;
import com.base.pj.service.PJ3910WService;

/**
 * 
 * <pre>
 * @title
 * - 요구사항 추적(기능) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 30.	정보윤		최초작성
 */
@Service
public class PJ3910WServiceImpl implements PJ3910WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3910WDAO pj3910wDao;

	/**
	 * 요구사항 추적(기능) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = pj3910wDao.select01(dsCond);
		return result;
	}
}
