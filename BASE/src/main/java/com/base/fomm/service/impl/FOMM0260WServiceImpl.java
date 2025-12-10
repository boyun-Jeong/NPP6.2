package com.base.fomm.service.impl;

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
import com.base.fomm.dao.FOMM0260WDAO;
import com.base.fomm.service.FOMM0260WService;

/**
 * 
 * <pre>
 * @title
 * - 휴일관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  황채린
 * @since   2024. 07. 11.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 11.	황채린		최초작성
 */
@Service
public class FOMM0260WServiceImpl implements FOMM0260WService {

	@Inject
	private Provider<SessionContext> sc;

	private Logger log = LoggerFactory.getLogger(FOMM0260WService.class);

	@Autowired
	private FOMM0260WDAO FOMM0260wDao;

	/**
	 * 휴일관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = FOMM0260wDao.select01(dsCond);
		return result;
	}
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = FOMM0260wDao.select02(dsCond);
		return result;
	}

	/**
	 * 휴일관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

			//log.debug("FOMM0260WServiceImpl ::: HOLI_NAME : " + rowData.get("HOLI_NAME"));
			//log.debug("FOMM0260WServiceImpl ::: equals 1 : " + rowData.get("HOLI_NAME").equals(""));
			
	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		FOMM0260wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		//if(rowData.get("HOLI_NAME").equals(""))			FOMM0260wDao.remove01(rowData);
	    		//else if(!rowData.get("HOLI_NAME").equals(""))	FOMM0260wDao.modify01(rowData);
	    		FOMM0260wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		FOMM0260wDao.remove01(rowData);
	    	}
		}
	}
}