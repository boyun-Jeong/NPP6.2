package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.sr.dao.SR0140WDAO;
import com.base.sr.service.SR0140WService;

/**
 * 
 * <pre>
 * @title
 * - 결재함 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	정보윤		최초작성
 */
@Service
public class SR0140WServiceImpl implements SR0140WService 
{
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0140WDAO sr0140wDao;

	@Autowired
	private SRCommServiceImpl srcommSvcImpl;

	/**
	 * 결재함 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{
		// session 사번
		String userId 	= sc.get().getScUserId();
		dsCond.put("USER_ID", userId);
		List<Map<String, Object>> result = sr0140wDao.select01(dsCond);
		return result;
	}

	/**
	 * 결재자 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> result = sr0140wDao.select03(dsCond);
		
		if(result != null) {
			
			if(result.size() == 1) {
				
				dsCond.put("APPR_LVL_SEQ", result.get(0).get("APPR_LVL_SEQ"));
				dsCond.put("APPR_GRP_SEQ", result.get(0).get("APPR_GRP_SEQ"));
				
				result = sr0140wDao.select02(dsCond);
			}
		}
		return result;
	}

	/**
	 * 일괄승인 저장
	 */
	public void save01(List<Map<String, Object>> dsData) throws Exception {

		if(dsData != null) {

			for (int i = 0; i < dsData.size(); i++) {
				Map<String, Object> dataMap = dsData.get(i);
				srcommSvcImpl.execReqProc(dataMap);
			}
		}
	}
}