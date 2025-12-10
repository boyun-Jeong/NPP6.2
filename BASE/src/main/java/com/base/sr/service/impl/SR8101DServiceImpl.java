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
import com.base.sr.dao.SR8101DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR8101DService;


/**
 * 
 * <pre>
 * @title
 * - 네트워크작업신청 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  김지수
 * @since   2024. 03. 15.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 15.	김지수		최초작성
 */
@Service
public class SR8101DServiceImpl implements SR8101DService {

	private Logger log = LoggerFactory.getLogger(SR8101DServiceImpl.class);
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR8101DDAO sr8101dDao;

	@Autowired
	private SRCommDAO srCommDao;
	
	/**
	 * 네트워크작업신청 요청서 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr8101dDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 네트워크작업신청 요청서 저장
	 */
	@Transactional
	public void save01(Map<String, Object> rowData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

        // DATA RowType 가져오기
    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    log.debug("sr8101dDao.save() rowFlag==================================" + rowFlag);

    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		log.debug("insert01>>>>>>>>>>>>>>>>>>>>>>", rowData);
    		sr8101dDao.insert01(rowData);

    	}else if("U".equals(rowFlag)) {
    		sr8101dDao.modify01(rowData);

    	}
	}

	/**
	 * 접수1차 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr8101dDao.select03(dsCond);

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
		
		log.debug("SR8101D save02() rtn :::::::::::::::: " + rtn);
		
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
	
	
	
	/**
	 * 변경계획 조회
	 */
	public List<Map<String, Object>> selectProc_01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr8101dDao.selectProc_01(dsCond);

		return result;
	}
	/**
	 * 변경계획 저장
	 */
	@Transactional
	public void saveProc_01(Map<String, Object> rowData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

        // DATA RowType 가져오기
    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    log.debug("sr8101dDao.save() rowFlag==================================" + rowFlag);

    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		log.debug("saveProc_01>>>>>>>>>>>>>>>>>>>>>>", rowData);
    		sr8101dDao.saveProc_01(rowData);

    	}else if("U".equals(rowFlag)) {
    		sr8101dDao.saveProc_01(rowData);

    	}
	}
	
	/**
	 * 변경작업 조회
	 */
	public List<Map<String, Object>> selectProc_02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr8101dDao.selectProc_02(dsCond);

		return result;
	}
	/**
	 * 변경작업 저장
	 */
	@Transactional
	public void saveProc_02(Map<String, Object> rowData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

        // DATA RowType 가져오기
    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    log.debug("sr8101dDao.save() rowFlag==================================" + rowFlag);

    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		log.debug("saveProc_02>>>>>>>>>>>>>>>>>>>>>>", rowData);
    		sr8101dDao.saveProc_02(rowData);

    	}else if("U".equals(rowFlag)) {
    		sr8101dDao.saveProc_02(rowData);

    	}
	}
	
}