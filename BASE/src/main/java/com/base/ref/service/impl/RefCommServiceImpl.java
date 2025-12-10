package com.base.ref.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.ref.dao.RefCommDAO;
import com.base.ref.service.RefCommService;

/**
 * 
 * <pre>
 * @title
 * - 개발가이드 Service(구현체)
 * @package com.base.ref.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 04. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 04. 30.	정보윤		최초작성
 */
@Service
public class RefCommServiceImpl implements RefCommService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private RefCommDAO refcommDao;

	/**
	 * DB FUNC/PROC 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectFuncProcList(Map<String, Object> dsCond) {
		return refcommDao.selectFuncProcList(dsCond);
	}

	/**
	 * DB FUNC/PROC 현재 내용 조회
	 * @param dsCond
	 * @return
	 */
	public String selectCurrentFuncProcData(Map<String, Object> dsCond) {
		List<Map<String, Object>> dataList = refcommDao.selectCurrentFuncProcData(dsCond);
		StringBuffer sb = new StringBuffer();
		if(dataList != null) {			
			for (int i = 0; i < dataList.size(); i++) {
				sb.append(StringUtil.safe(dataList.get(i).get("TEXT"))); 
			}
		}
		return sb.toString();
	}
	
	/**
	 * DB FUNC/PROC 이력 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = refcommDao.select01(dsCond);
		return result;
	}

	/**
	 * DB FUNC/PROC 이력 등록/수정/삭제
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();

		for (int i = 0; i < dsData.size(); i++) {

			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);

	    	if("I".equals(rowFlag)) {
	    		refcommDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		refcommDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		refcommDao.remove01(rowData);
	    	}
		}
	}
}