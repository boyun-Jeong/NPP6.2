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
import com.base.pj.dao.PJ1000WDAO;
import com.base.pj.service.PJ1000WService;

/**
 * 
 * <pre>
 * @title
 * - 방법론/산출물정의 Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 16.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 16.	정보윤		최초작성
 */
@Service
public class PJ1000WServiceImpl implements PJ1000WService {

	private Logger log = LoggerFactory.getLogger(PJ1000WServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJ1000WDAO pj1000wDao;

	@Autowired
	private FommMultipartService fommMultipartService;

	/**
	 * 방법론/산출물정의 목록 조회
	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
	public List<Map<String, Object>> select01() {

		List<Map<String, Object>> result = pj1000wDao.select01();

		return result;
	}

	/**
	 * 방법론/산출물정의 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = pj1000wDao.select02(dsCond);

		return result;
	}
	
	/**
	 * 방법론/산출물정의 저장
	 */
	@Transactional
	public String save01(List<Map<String, Object>> dsPjMethod, List<Map<String, Object>> dsPjMethodDlvr) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		String methodId = "";
		
		int rowCnt = dsPjMethod.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjMethod.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		pj1000wDao.insert01(rowData);
	    		methodId = StringUtil.safe(rowData.get("METHOD_ID"));
	    	} 
	    	else if("U".equals(rowFlag)) {
	    		methodId = StringUtil.safe(rowData.get("METHOD_ID"));
	    		pj1000wDao.modify01(rowData);
	    	} 
	    	else if("D".equals(rowFlag)) {
	    		pj1000wDao.remove01(rowData);
	    		pj1000wDao.remove02(rowData);
	    		rowData.put("KEY_TBL", "PJ_METHOD_DLVR");
	    		rowData.put("PK1", rowData.get("METHOD_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		
		rowCnt = dsPjMethodDlvr.size();

		for (int i = 0; i < rowCnt; i++) {
			Map<String, Object> rowData = dsPjMethodDlvr.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String tempMethodId		= StringUtil.safe(rowData.get("METHOD_ID"));
	    	String tempDeliveryId	= StringUtil.safe(rowData.get("DELIVERY_ID"));

	    	if("I".equals(rowFlag)) {
	    		String dTmpMethodId = StringUtil.safe(rowData.get("TEMP_METHOD_ID"));
	    		String dMethodId = StringUtil.safe(rowData.get("METHOD_ID"));
	    		
	    		if("".equals(dMethodId)) {
	    			for (int j = 0; j < dsPjMethod.size(); j++) {
		    			String mTmpMethodId	= StringUtil.safe(dsPjMethod.get(j).get("TEMP_METHOD_ID"));
						if(mTmpMethodId.equals(dTmpMethodId)) {
							dMethodId = StringUtil.safe(dsPjMethod.get(j).get("METHOD_ID"));
							break;
						}
					}
	    		}

	    		rowData.put("METHOD_ID", dMethodId);
	    		pj1000wDao.insert02(rowData);
	    		String pk1 = dMethodId;
	    		String pk2 = StringUtil.safe(rowData.get("DELIVERY_ID"));
	    		
	    		log.debug("PJ1000PServiceImpl dsPjMethodDlvr i=" + i + " tempMethodId=[" + tempMethodId + "] tempDeliveryId=[" + tempDeliveryId + "] pk1=[" + pk1 + "] pk2=[" + pk2 + "]");
	    		fommMultipartService.replaceTempKey("PJ_METHOD_DLVR", new String[]{tempMethodId, tempDeliveryId}, pk1, pk2);

	    	}else if("U".equals(rowFlag)) {
	    		pj1000wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		pj1000wDao.remove03(rowData);
	    		rowData.put("KEY_TBL", "PJ_METHOD_DLVR");
	    		rowData.put("PK1", rowData.get("METHOD_ID"));
	    		rowData.put("PK2", rowData.get("DELIVERY_ID"));
	    		fommMultipartService.removeFileInfo(rowData);
	    	}
		}
		return methodId;
	}
}