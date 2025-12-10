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
import com.base.pj.service.impl.PJ0620PServiceImpl;
import com.base.fomm.dao.FOMM0700WDAO;
import com.base.fomm.service.FOMM0700WService;

/**
 * 
 * <pre>
 * @title
 * - 표준 체크리스트 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	김미성		최초작성
 */
@Service
public class FOMM0700WServiceImpl implements FOMM0700WService {

	private Logger log = LoggerFactory.getLogger(FOMM0700WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0700WDAO fomm0700wDao;

	/**
	 * 표준 체크리스트 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700wDao.select01(dsCond);
		return result;
	}

	/**
	 * 표준 체크리스트 서브목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700wDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 표준 체크리스트 팝업목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700wDao.select03(dsCond);
		return result;
	}
	
	/**
	 * 표준 체크리스트 제외항목 팝업 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700wDao.select04(dsCond);
		return result;
	}

	
	/**
	 * 표준 체크리스트 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsMaster, List<Map<String, Object>> dsDetail) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		Map<String, Object> rowData = null;

		String chklstId = "";
		
		if(dsMaster.size() > 0) {
			rowData = dsMaster.get(0);
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));	// DATA RowType 가져오기
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0700wDao.insert01(rowData);
	    		chklstId = StringUtil.safe(rowData.get("CHKLST_ID"));	    		
	    		
	    	}else if("U".equals(rowFlag)) {
	    		fomm0700wDao.modify01(rowData);
	    	}
		}
		
		log.debug("FOMM0700WServiceImpl dsDetail.size() ===============> " + dsDetail.size());

		for (int i = 0; i < dsDetail.size(); i++) {
			rowData = dsDetail.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	if(!"".equals(chklstId)) rowData.put("CHKLST_ID", chklstId);

	    	if("I".equals(rowFlag)) {
	    		fomm0700wDao.insert02(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0700wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0700wDao.remove02(rowData);
	    	}
		}
		return chklstId;
	}
	
	/**
	 * 표준 체크리스트 질문저장
	 */
	@Transactional
	public String save02(List<Map<String, Object>> dsMaster) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		Map<String, Object> rowData = null;

		String chklstId = "";
		
		for (int i = 0; i < dsMaster.size(); i++) {
			rowData = dsMaster.get(i);

			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	String rowQueOrExp = StringUtil.safe(rowData.get("LVL"));
	    	
	    	chklstId = StringUtil.safe(rowData.get("CHKLST_ID"));
	    	
	    	log.debug("FOMM0700WServiceImplfpqp lvl ===============> " + rowQueOrExp);
	    	
	    	if("1".equals(rowQueOrExp)) {	    		
	    		if("I".equals(rowFlag)) {
		    		fomm0700wDao.insert03(rowData);

		    	}else if("U".equals(rowFlag)) {
		    		fomm0700wDao.modify03(rowData);

		    	}else if("D".equals(rowFlag)) {
		    		fomm0700wDao.remove03(rowData);
		    	}	    		
	    	}else {
	    		if("I".equals(rowFlag)) {
		    		fomm0700wDao.insert04(rowData);

		    	}else if("U".equals(rowFlag)) {
		    		fomm0700wDao.modify04(rowData);

		    	}else if("D".equals(rowFlag)) {
		    		fomm0700wDao.remove04(rowData);
		    	}
	    	}	    	
		}
		
		log.debug("FOMM0700WServiceImpl dsMaster.size() ===============> " + dsMaster.size());
		
		return chklstId;
	}
	
	
	/**
	 * 표준 체크리스트 제외항목 저장
	 */
	@Transactional
	public String save03(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		Map<String, Object> rowData = null;

		String chklstId = "";
		
		for (int i = 0; i < dsData.size(); i++) {
			rowData = dsData.get(i);

			rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	
	    	chklstId = StringUtil.safe(rowData.get("CHKLST_ID"));
       		
    		if("I".equals(rowFlag)) {
	    		fomm0700wDao.insert05(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0700wDao.modify05(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0700wDao.remove05(rowData);
	    	}	 	
		}
		
		log.debug("FOMM0700WServiceImpl dsData.size() ===============> " + dsData.size());
		
		return chklstId;
	}
}