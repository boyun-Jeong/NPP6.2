package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0240WDAO;
import com.base.fomm.service.FOMM0160WService;
import com.base.fomm.service.FOMM0240WService;

/**
 * 
 * <pre>
 * @title
 * - 업무위임관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 08.	황채린		최초작성
 */
@Service
public class FOMM0240WServiceImpl implements FOMM0240WService {

	@Inject
	private Provider<SessionContext> sc;

	private Logger log = LoggerFactory.getLogger(FOMM0240WService.class);
	
	@Autowired
	private FOMM0240WDAO fomm0240wDao;

	/**
	 * 업무위임관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("LMDEPTNM", deptNm);
		dsCond.put("LMPOSNM", posNm);
		
		List<Map<String, Object>> result = fomm0240wDao.select01(dsCond);
		return result;
	}
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("LMDEPTNM", deptNm);
		dsCond.put("LMPOSNM", posNm);
		
		List<Map<String, Object>> result = fomm0240wDao.select02(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("LMDEPTNM", deptNm);
		dsCond.put("LMPOSNM", posNm);
		
		List<Map<String, Object>> result = fomm0240wDao.select03(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMPID", lmpId);
		dsCond.put("LMDEPTNM", deptNm);
		dsCond.put("LMPOSNM", posNm);
		
		List<Map<String, Object>> result = fomm0240wDao.select04(dsCond);
		return result;
	}
	
	
	public List<Map<String, Object>> selectYN(List<Map<String, Object>> dsData) {
		List<Map<String, Object>> result = fomm0240wDao.selectYN(dsData.get(0));
		return result;
	}

	/**
	 * 업무위임관리 저장
	 */
	@Transactional
	public void saveAdd(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

			//Map<String, Object> rowData = new HashedMap<String, Object>();

			List<Map<String, Object>> cntYn = fomm0240wDao.selectYN(rowData);
			log.debug("FOMM0240WServiceImpl ::: cntYn : " + cntYn);
			log.debug("FOMM0240WServiceImpl ::: CNT : " + cntYn.get(i).get("CNT"));
			log.debug("FOMM0240WServiceImpl ::: ALERT_YN : " + cntYn.get(i).get("ALERT_YN"));
			log.debug("FOMM0240WServiceImpl ::: equals 1 : " + cntYn.get(i).get("CNT").equals("0"));
			log.debug("FOMM0240WServiceImpl ::: equals 2 : " + cntYn.get(i).get("CNT").equals('0'));
			log.debug("FOMM0240WServiceImpl ::: equals 3 : " + cntYn.get(i).get("CNT").equals(0));
			log.debug("FOMM0240WServiceImpl ::: equals 4 : " + cntYn.get(i).get("ALERT_YN").equals("저장 되었습니다."));
			
			if(cntYn.get(i).get("ALERT_YN").equals("저장 되었습니다."))
			{
				rowData.put("LMID", userId);
		    	rowData.put("LMPID", lmpId);
		    	rowData.put("LMDEPTNM", deptNm);
		    	rowData.put("LMPOSNM", posNm);
		    	
	    		// 저장
	    		fomm0240wDao.insert01(rowData);
			}
			else 
			{
				return;
			}

		}
	}
	@Transactional
	public void saveAdd2(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

			//Map<String, Object> rowData = new HashedMap<String, Object>();

			List<Map<String, Object>> cntYn = fomm0240wDao.selectYN(rowData);
			
			if(cntYn.get(i).get("ALERT_YN").equals("저장 되었습니다."))
			{
				rowData.put("LMID", userId);
		    	rowData.put("LMPID", lmpId);
		    	rowData.put("LMDEPTNM", deptNm);
		    	rowData.put("LMPOSNM", posNm);
		    	
	    		// 저장
	    		fomm0240wDao.insert01(rowData);
			}
			else 
			{
				return;
			}

		}
	}

	/**
	 * 업무위임관리 위임중단
	 */
	@Transactional
	public void saveStop(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("LMDEPTNM", deptNm);
	    	rowData.put("LMPOSNM", posNm);

    		// 위임중단
    		fomm0240wDao.modify01(rowData);
		}
	}

	/**
	 * 업무위임관리 관리자삭제
	 */
	@Transactional
	public void saveDelete(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		String deptNm	= sc.get().getScDeptNm();
		String posNm	= sc.get().getScPosNm();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("LMDEPTNM", deptNm);
	    	rowData.put("LMPOSNM", posNm);

    		// 관리자삭제
    		fomm0240wDao.remove01(rowData);
		}
	}
}