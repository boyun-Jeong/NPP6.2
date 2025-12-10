package com.base.fomm.service.impl;

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
import com.base.fomm.dao.FOMM0500WDAO;
import com.base.fomm.service.FOMM0500WService;
import com.base.fomm.web.FOMM0500WController;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 통지관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2025. 02. 24.	정보윤		최초작성
 */
@Service
public class FOMM0500WServiceImpl implements FOMM0500WService {

	private Logger log = LoggerFactory.getLogger(FOMM0500WController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0500WDAO fomm0500wDao;

	/**
	 * workflow 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectWorkflowList(Map<String, Object> dsCond) {
		return fomm0500wDao.selectWorkflowList(dsCond);
	}
	
		/**
	 * 통보설정관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		return fomm0500wDao.select01(dsCond);
	}
		
	/**
	 * 통보설정 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsList) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		if(dsList != null) {
			
			for (int i = 0; i < dsList.size(); i++) {
				Map<String, Object> rowData = dsList.get(i);
	
		        // DATA RowType 가져오기
		    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
		    	
		    	rowData.put("LMID", userId);
		    	rowData.put("LMPID", lmpId);
		    	
		    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {
		    		fomm0500wDao.insert01(rowData);
	
		    	}else if("D".equals(rowFlag)) {
		    		fomm0500wDao.remove01(rowData);
		    	}
			}
		}
	}

	/**
	 * 워크플로우 진행단계매핑 정보 목록
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		return fomm0500wDao.select02(dsCond);
	}
}