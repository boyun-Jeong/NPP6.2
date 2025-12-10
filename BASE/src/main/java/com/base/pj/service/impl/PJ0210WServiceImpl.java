package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.pj.dao.PJ0210WDAO;
import com.base.pj.service.PJ0210WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트등록 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 11.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 11.	정보윤		최초작성
 */
@Service
public class PJ0210WServiceImpl implements PJ0210WService {

	@Autowired
	private PJ0210WDAO pj0210wDao;

	/**
	 * 프로젝트등록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0210wDao.select01(dsCond);

		return result;
	}
}