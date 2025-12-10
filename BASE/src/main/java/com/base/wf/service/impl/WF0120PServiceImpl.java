package com.base.wf.service.impl;

import java.sql.Clob;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.collections4.map.HashedMap;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.wf.dao.WF0120PDAO;
import com.base.wf.service.WF0120PService;

/**
 * 
 * <pre>
 * @title
 * - WF프로세스관리(상세) Service(구현체)
 * @package com.base.wf.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 03. 12.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 03. 12.	정보윤		최초작성
 */
@Service
public class WF0120PServiceImpl implements WF0120PService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private WF0120PDAO wf0120pDao;

	/**
	 * 요청서 화면 목록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = wf0120pDao.select01(dsCond);
		return result;
	}

	/**
	 * 요청서 화면 기본 테이블 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = wf0120pDao.select02(dsCond);
		return result;
	}

	/**
	 * WF프로세스관리(상세) 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsWfReqScrnDt, List<Map<String, Object>> dsWfReqScrnDefTblDt) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsWfReqScrnDt.size(); i++) {

			Map<String, Object> rowData = dsWfReqScrnDt.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		wf0120pDao.insert01(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		wf0120pDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		wf0120pDao.remove01(rowData);
	    		wf0120pDao.remove02(rowData);
	    	}
		}
		
		for (int i = 0; i < dsWfReqScrnDefTblDt.size(); i++) {

			Map<String, Object> rowData = dsWfReqScrnDefTblDt.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		String tempScrnNo = StringUtil.safe(rowData.get("TEMP_SCRN_NO"));
	    		
	    		if(!"".equals(tempScrnNo)) {

	    			for (int j = 0; j < dsWfReqScrnDt.size(); j++) {
	    				String mTempScrnNo = StringUtil.safe(dsWfReqScrnDt.get(j).get("TEMP_SCRN_NO"));
	    				
	    				if(tempScrnNo.equals(mTempScrnNo)) {
	    					rowData.put("SCRN_NO", StringUtil.safe(dsWfReqScrnDt.get(j).get("SCRN_NO")));
	    					break;
	    				}
					}
	    		}
	    		wf0120pDao.insert02(rowData);
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		wf0120pDao.modify02(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		wf0120pDao.remove02(rowData);
	    	}
		}
	}

	/**
	 * 역할자 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		return wf0120pDao.select03(dsCond);
	}
	
	/**
	 * 요청서 화면 기본 테이블 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) throws Exception {
		return wf0120pDao.select04(dsCond);
	}
}