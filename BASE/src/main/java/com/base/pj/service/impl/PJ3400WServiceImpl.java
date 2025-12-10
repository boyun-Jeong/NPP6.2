package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ3400WDAO;
import com.base.pj.service.PJ3400WService;

/**
 * 
 * <pre>
 * @title
 * - 투입인력관리 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 23.	정보윤		최초작성
 */
@Service
public class PJ3400WServiceImpl implements PJ3400WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3400WDAO pj3400wDao;

	/**
	 * 투입인력관리 공수 List
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400wDao.select01(dsCond);
		return result;
	}

	/**
	 * 투입인력관리 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400wDao.select02(dsCond);
		return result;
	}

	/**
	 * 투입인력관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsUser, List<Map<String, Object>> dsUserMm) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsUser.size(); i++) {
			Map<String, Object> rowData = dsUser.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

	    	if("U".equals(rowFlag) || "D".equals(rowFlag)) {
	    		pj3400wDao.insertHist(rowData);
	    	}
	    	
	    	if("U".equals(rowFlag)) {
	    		pj3400wDao.remove03(rowData);	//PJ_USER_MM 테이블에서 프로젝트 기간(시작~종료)에 해당하지 않는 YYYYMM 데이터만 삭제 처리
	    		pj3400wDao.insert01(rowData);	//프로젝트 시작~종료일 기준 PJ_USER_MM 테이블 YYYYMM 데이터 없는 데이터만 MERGE문으로 INSERT 

	    	}else if("D".equals(rowFlag)) {
	    		pj3400wDao.remove01(rowData);	//PJ_USER 삭제
	    		pj3400wDao.remove02(rowData);	//PJ_USER_MM 삭제
	    	}
		}

		for (int i = 0; i < dsUserMm.size(); i++) {
			Map<String, Object> rowData = dsUserMm.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	pj3400wDao.modify01(rowData);	//PJ_USER_MM 사용자 입력한 공수(계획/실적) 데이터 반영
		}
		
		for (int i = 0; i < dsUser.size(); i++) {
			Map<String, Object> rowData = dsUser.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

	    	if("U".equals(rowFlag)) {
	    		pj3400wDao.modify02(rowData);
	    	}
		}
	}
}