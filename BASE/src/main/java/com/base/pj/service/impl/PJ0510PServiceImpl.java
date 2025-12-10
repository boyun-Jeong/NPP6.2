package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJ0510PDAO;
import com.base.pj.service.PJ0510PService;

/**
 * 
 * <pre>
 * @title
 * - Action Item 상세 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 06.	정보윤		최초작성
 */
@Service
public class PJ0510PServiceImpl implements PJ0510PService {

	private Logger log = LoggerFactory.getLogger(PJ0510PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ0510PDAO pj0510pDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0510pDao.select01(dsCond);

		return result;
	}

	/**
	 * Action Item 상세 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj0510pDao.select02(dsCond);

		return result;
	}
	
	/**
	 * Action Item 상세 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjActionItem, List<Map<String, Object>> dsPjActAction) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		int rowCnt = dsPjActionItem.size();
		Map<String, Object> rowData = null;

		String actItemCd = "";
		
		if(rowCnt > 0) {
			rowData = dsPjActionItem.get(0);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj0510pDao.insert01(rowData);
	    		actItemCd = StringUtil.safe(rowData.get("ACT_ITEM_ID"));
	    		//log.debug("PJ0510PServiceImpl INSERT01 actItemCd ===============> " + actItemCd);
	    		fommMultipartService.replaceTempKey("PJ_ACTION_ITEM", null, actItemCd);
	    		
	    	}else if("U".equals(rowFlag)) {
	    		pj0510pDao.modify01(rowData);
	    	}
		}
		
		//log.debug("PJ0510PServiceImpl dsPjActAction.size() ===============> " + dsPjActAction.size());
		
		for (int i = 0; i < dsPjActAction.size(); i++) {

			rowData = dsPjActAction.get(i);
			
			// DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			
			//log.debug("PJ0510PServiceImpl dsPjActAction i=" + i + " ROWFLAG " + rowFlag);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String tempActItemCd	= StringUtil.safe(rowData.get("ACT_ITEM_ID"));
	    	String tempActId		= StringUtil.safe(rowData.get("ACT_ID"));
	    	
	    	if("".equals(tempActItemCd)) tempActItemCd = "TEMP_KEY_" + userId;
	    	
	    	//Master가 신규 저장된 경우 Master에 생성된 키값을 Detail RowData에 셋팅
	    	if(!"".equals(actItemCd)) rowData.put("ACT_ITEM_ID", actItemCd);
	    	
	    	//log.debug("PJ0510PServiceImpl dsPjActAction i=" + i + " actItemCd : " + actItemCd + " ACT_ITEM_ID " + rowData.get("ACT_ITEM_ID"));

	    	if("I".equals(rowFlag)) {
	    		pj0510pDao.insert02(rowData);
	    		String pk1 = StringUtil.safe(rowData.get("ACT_ITEM_ID"));
	    		String pk2 = StringUtil.safe(rowData.get("ACT_ID"));
	    		
	    		//log.debug("PJ0510PServiceImpl dsPjActAction i=" + i + " tempActItemCd=[" + tempActItemCd + "] tempActId=[" + tempActId + "] pk1=[" + pk1 + "] pk2=[" + pk2 + "]");
	    		fommMultipartService.replaceTempKey("PJ_ACT_ACTION", new String[]{tempActItemCd, tempActId}, pk1, pk2);

	    	}else if("U".equals(rowFlag)) {
	    		pj0510pDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj0510pDao.remove01(rowData);
	    		
	    		rowData.put("KEY_TBL", "PJ_ACT_ACTION");
	    		rowData.put("FLDR_NM", "pj");
	    		rowData.put("PK1", rowData.get("ACT_ITEM_ID"));
	    		rowData.put("PK2", rowData.get("ACT_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		return actItemCd;
	}
}