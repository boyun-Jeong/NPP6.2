package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0200DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR0200DService;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Service
public class SR0200DServiceImpl implements SR0200DService {

	private Logger log = LoggerFactory.getLogger(SR0200DServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0200DDAO sr0200dDao;
	
	@Autowired
	private SRCommDAO srCommDao;

	/**
	 * 계정 신청(요청서) 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr0200dDao.select01(dsCond);

		return result;
	}
	
	/**
	 * 계정 신청 계정 내역 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr0200dDao.select02(dsCond);

		return result;
	}

	/**
	 * 계정 신청(요청서) 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsSrInfrJob, List<Map<String, Object>> dsSrInfrAccnt) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
    	String rowFlag = StringUtil.safe(dsSrInfrJob.get("ROWFLAG"));
    	dsSrInfrJob.put("LMID", userId);
    	dsSrInfrJob.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		sr0200dDao.insert01(dsSrInfrJob);
    	} 
    	else if("U".equals(rowFlag)) {
    		sr0200dDao.modify01(dsSrInfrJob);
    	} 
    	else if("D".equals(rowFlag)) {
    		sr0200dDao.remove01(dsSrInfrJob);
    	}
    	
		int rowCnt = dsSrInfrAccnt.size();

		for (int i = 0; i < rowCnt; i++) {
			
			Map<String, Object> rowData = dsSrInfrAccnt.get(i);

	        // DATA RowType 가져오기
	    	rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		sr0200dDao.insert02(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		sr0200dDao.modify02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		sr0200dDao.remove02(rowData);
	    	}
		}
	}
	
	/**
	 * 접수1차 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr0200dDao.select03(dsCond);

		return result;
	}
	
	/**
	 * 접수1차 저장
	 */
	@Transactional
	public void save02(Map<String, Object> rowData)  throws Exception {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String rtn = srCommDao.selectOtherRevUserCnt(rowData);
		
		log.debug("SR0200D save02() rtn :::::::::::::::: " + rtn);
		
		if("Y".equals(rtn)) {
			throw new Exception();

		}else {
			
			rowData.put("LOGIN_ID", userId);
			rowData.put("LMPID", lmpId);

			srCommDao.callPrSrRevProc(rowData);
			
			int outRtnCd = Integer.parseInt(StringUtil.safe(rowData.get("OUT_RTN_CD")));
			String outRtnMsg = StringUtil.safe(rowData.get("OUT_RTN_MSG"));

			if(outRtnCd < 0) {
				log.debug("ERROR OUT_RTN_CD====================> " + outRtnCd);
				log.debug("ERROR OUT_RTN_MSG====================> " + outRtnMsg);
				throw new Exception();

			}else {
				log.debug("OUT_RTN_CD====================> " + outRtnCd);
				log.debug("OUT_RTN_MSG====================> " + outRtnMsg);
			}
		}
	}
}