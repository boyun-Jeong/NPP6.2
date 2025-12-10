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

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ0100WDAO;
import com.base.pj.service.PJ0100WService;
import com.base.sr.service.impl.SRCommServiceImpl;

/**
 * 
 * <pre>
 * @title
 * - WBS 관리(프로젝트일정계획) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 25.	정보윤		최초작성
 */
@Service
public class PJ0100WServiceImpl implements PJ0100WService {

	private Logger log = LoggerFactory.getLogger(PJ0100WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0100WDAO pj0100wDao;

	/**
	 * WBS 관리(프로젝트일정계획) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0100wDao.select01(dsCond);

		return result;
	}

	/**
	 * WBS 관리(프로젝트일정계획) 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0100wDao.select02(dsCond);

		return result;
	}

	/**
	 * WBS 관리(프로젝트일정계획) 저장
	 */
	@Transactional
	public void save01(String saveType, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsPjWbs") List<Map<String, Object>> dsPjWbs) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsPjWbs.size(); i++) {
			Map<String, Object> rowData = dsPjWbs.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {
	    		pj0100wDao.insert01(rowData);
	    		String chgYn = StringUtil.safe(pj0100wDao.select03(rowData), "N");

	    		if("Y".equals(chgYn)) {
	    			pj0100wDao.insert02(rowData);
	    		}

	    	}else if("D".equals(rowFlag)) {
	    		pj0100wDao.remove01(rowData);
	    	}
		}

		dsCond.put("LMID", userId);
		
		pj0100wDao.callPrPjWbsRateCacuProc(dsCond);
		
		log.debug("OUT_RTN_CD : " + StringUtil.safe(dsCond.get("OUT_RTN_CD")));
		log.debug("OUT_RTN_MSG : " + StringUtil.safe(dsCond.get("OUT_RTN_MSG")));
	}
}