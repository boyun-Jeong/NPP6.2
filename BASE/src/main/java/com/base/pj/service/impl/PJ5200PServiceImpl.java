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
import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ5200PDAO;
import com.base.pj.service.PJ5200PService;

/**
 * 
 * <pre>
 * @title
 * - 단위결함 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 11. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 11. 09.	이정빈		최초작성
 */
@Service
public class PJ5200PServiceImpl implements PJ5200PService {

	private Logger log = LoggerFactory.getLogger(PJ5200PServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ5200PDAO pj5200pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 단위결함 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj5200pDao.select01(dsCond);

		return result;
	}

	/**
	 * 단위결함 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String utdftId = "";

		if(dsData.size() > 0) {
			Map<String, Object> rowData = dsData.get(0);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj5200pDao.insert01(rowData);
	    		utdftId = StringUtil.safe(rowData.get("UTDFT_ID"));
	    		log.debug("PJ5200PServiceImpl INSERT01 utdftId ===============> " + utdftId);
	    		fommMultipartService.replaceTempKey("PJ_UT_DEFECT", null, utdftId);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		pj5200pDao.modify01(rowData);
	    	}
		}
		return utdftId;
	}
}