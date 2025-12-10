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
import com.base.pj.dao.PJ2400WDAO;
import com.base.pj.service.PJ2400WService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트별 인력 조회 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 19.	정보윤		최초작성
 */
@Service
public class PJ2400WServiceImpl implements PJ2400WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ2400WDAO pj2400wDao;

	/**
	 * 프로젝트별 인력 조회 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj2400wDao.select01(dsCond);

		return result;
	}

	/**
	 * 프로젝트별 인력 조회 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj2400wDao.select02(dsCond);

		return result;
	}

	/**
	 * 프로젝트별 인력 조회 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsData.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj2400wDao.insert02(rowData);	//현재 프로젝트 MM 히스토리 테이블로 이동
	    		pj2400wDao.remove03(rowData);	//프로젝트 기간에 해당하지 않은 공수 제거
	    		pj2400wDao.insert01(rowData);
	    		pj2400wDao.modify02(rowData);	//프로젝트 기간에 해당되나 누락된 년월은 ROWDATA 생성

	    	}else if("U".equals(rowFlag)) {
	    		pj2400wDao.insert02(rowData);	//현재 프로젝트 MM 히스토리 테이블로 이동
	    		pj2400wDao.remove03(rowData);	//프로젝트 기간에 해당하지 않은 공수 제거
	    		pj2400wDao.modify01(rowData);
	    		pj2400wDao.modify02(rowData);	//프로젝트 기간에 해당되나 누락된 년월은 ROWDATA 생성

	    	}else if("D".equals(rowFlag)) {
	    		pj2400wDao.insert02(rowData);	//현재 프로젝트 MM 히스토리 테이블로 이동
	    		pj2400wDao.remove01(rowData);
	    		pj2400wDao.remove02(rowData);
	    	}
		}
	}
}