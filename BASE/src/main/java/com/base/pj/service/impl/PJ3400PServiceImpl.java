package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ3400PDAO;
import com.base.pj.service.PJ3400PService;
import com.base.pj.web.PJ3400PController;

/**
 * 
 * <pre>
 * @title
 * - 투입인력상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 25.	정보윤		최초작성
 */
@Service
public class PJ3400PServiceImpl implements PJ3400PService {

	private Logger log = LoggerFactory.getLogger(PJ3400PController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ3400PDAO pj3400pDao;

	/**
	 * 투입인력상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400pDao.select01(dsCond);

		return result;
	}

	/**
	 * 투입인력상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400pDao.select02(dsCond);

		return result;
	}

	/**
	 * 투입인력상세 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400pDao.select03(dsCond);

		return result;
	}

	/**
	 * 투입인력상세 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj3400pDao.select04(dsCond);

		return result;
	}

	/**
	 * 투입인력상세 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsCond, List<Map<String, Object>> dsUser, List<Map<String, Object>> dsUserMm) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = null;

		if(dsUserMm.size() > 0) {
			pj3400pDao.insert02(dsCond);	//저장 전 현재 PJ_USER_MM 데이터 PJ_USER_MM_HIST 테이블에 이력 생성
			pj3400pDao.remove01(dsCond);	//프로젝트 기간에 해당하지 않는 데이터는 모두 삭제
			pj3400pDao.insert03(dsCond);	//프로젝트 기간에 해당되는 yyyymm 데이터 없는 yyyymm 데이터 일괄 생성
		}

		for (int i = 0; i < dsUserMm.size(); i++) {
			rowData = dsUserMm.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {
	    		pj3400pDao.modify02(rowData);
	    	}
		}
		
		if(dsUser.size() > 0) {
			rowData = dsUser.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			rowData.put("LMID", userId);
			rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj3400pDao.insert01(rowData);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj3400pDao.modify01(rowData);
	    	}
		}
	}
}