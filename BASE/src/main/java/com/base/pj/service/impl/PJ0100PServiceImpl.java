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
import com.base.pj.dao.PJ0100PDAO;
import com.base.pj.service.PJ0100PService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 검색 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 20.	정보윤		최초작성
 */
@Service
public class PJ0100PServiceImpl implements PJ0100PService {

	private Logger log = LoggerFactory.getLogger(PJ0100PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0100PDAO pj0100pDao;

	/**
	 * 프로젝트 검색 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		
		dsCond.put("USER_ID", StringUtil.safe(sc.get().getScUserId()));	//현재 접속자 사번 검색 조건에 셋팅
		List<Map<String, Object>> result = pj0100pDao.select01(dsCond);

		return result;		
	}
	
	/**
	 * 프로젝트 WBS 예외일정 목록
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = pj0100pDao.select02(dsCond);
		return result;
	}

	/**
	 * 시스템 공휴일 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectHoliday(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = pj0100pDao.selectHoliday(dsCond);
		return result;
	}

	/**
	 * 프로젝트 WBS 예외일정 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsPjWbsDay) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsPjWbsDay.size(); i++) {
			Map<String, Object> rowData = dsPjWbsDay.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {
	    		pj0100pDao.insert01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0100pDao.remove01(rowData);
	    	}
		}
	}

	/**
	 * 프로젝트 WBS 일괄등록
	 */
	@Transactional
	public void save02(Map<String, Object> dsCond, List<Map<String, Object>> dsPjWbs) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		pj0100pDao.remove02(dsCond);	//SUB_PJT_ID에 해당하는 PJ_WBS 내역 일괄삭제

		for (int i=0; i<dsPjWbs.size(); i++) {
			Map<String, Object> rowData = dsPjWbs.get(i);
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0100pDao.insert02(rowData);	//WBS 내역 등록
	    	}
		}

		pj0100pDao.insert03(dsCond);	//PJ_WBS_TOT에 VERSION 정보 갱신

		pj0100pDao.remove03(dsCond);	//등록하고자 하는 VERSION의 PJ_WBS_VERSION 내역 전체 삭제
		
		pj0100pDao.insert04(dsCond);	//일괄등록한 PJ_WBS의 내역을 설정한 버전 데이터로 일괄등록
		
		
		dsCond.put("LMID", userId);
		dsCond.put("GUBUN", "1");
		dsCond.put("SEL_PJT_ID", StringUtil.safe(dsCond.get("PJT_ID")));
		dsCond.put("SEL_SUB_PJT_ID", StringUtil.safe(dsCond.get("SUB_PJT_ID")));

		pj0100pDao.callPrPjWbsRateCacuProc(dsCond);
		
		log.debug("OUT_RTN_CD : " + StringUtil.safe(dsCond.get("OUT_RTN_CD")));
		log.debug("OUT_RTN_MSG : " + StringUtil.safe(dsCond.get("OUT_RTN_MSG")));
		
		
		
	}
}