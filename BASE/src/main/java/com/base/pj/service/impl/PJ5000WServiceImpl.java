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
import com.base.pj.dao.PJ5000WDAO;
import com.base.pj.service.PJ5000WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트관리 > 테스트 관리 >  단위테스트 관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 11. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 07.	정보윤		최초작성
 */
@Service
public class PJ5000WServiceImpl implements PJ5000WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5000WDAO pj5000wDao;

	/**
	 * 프로젝트관리 > 테스트 관리 >  단위테스트 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5000wDao.select01(dsCond);

		return result;
	}

	/**
	 * 프로젝트관리 > 테스트 관리 >  단위테스트 관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

	    	if("D".equals(rowFlag)) {
	    		pj5000wDao.remove01(rowData);
	    		pj5000wDao.remove02(rowData);
	    	}
		}
	}
}