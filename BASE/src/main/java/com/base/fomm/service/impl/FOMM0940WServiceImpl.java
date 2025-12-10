package com.base.fomm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0940WDAO;
import com.base.fomm.service.FOMM0940WService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지 그룹 관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Service
public class FOMM0940WServiceImpl implements FOMM0940WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0940WDAO fomm0940wDao;

	/**
	 * 쪽지 그룹 관리 목록 조회
	 */
	public List<Map<String, Object>> select01(String admYn) {
		
		String userId 	= sc.get().getScUserId();
		//String sysAdminYn  = sc.get().getScAdminYn();
		
		Map<String, Object> dsCond = new HashMap<>();
		dsCond.put("OWNER_ID", userId);

		if("Y".equals(admYn)) {			
			dsCond.put("ADMIN_YN", "Y");
		}
		
		List<Map<String, Object>> result = fomm0940wDao.select01(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = fomm0940wDao.select02(dsCond);
		return result;
	}

	/**
	 * 쪽지 그룹 관리 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> ds_memo_group, List<Map<String, Object>> ds_memo_group_user) {

		String userId 	= sc.get().getScUserId();
		String userNm 	= sc.get().getScUserNm();
		
		for (int i = 0; i < ds_memo_group.size(); i++) {
			Map<String, Object> rowData = ds_memo_group.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("userNm", userNm);

	    	if("I".equals(rowFlag)) {
	    		rowData.put("OWNER_ID", userId);
	    		fomm0940wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0940wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0940wDao.remove01(rowData);
	    		fomm0940wDao.remove03(rowData);
	    	}
		}
		
		for (int j = 0; j < ds_memo_group_user.size(); j++) {
			Map<String, Object> rowData = ds_memo_group_user.get(j);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("userId", userId);
	    	rowData.put("userNm", userNm);

	    	if("I".equals(rowFlag)) {
	    		fomm0940wDao.insert02(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0940wDao.modify02(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0940wDao.remove02(rowData);
	    	}
		}
		
	}
}