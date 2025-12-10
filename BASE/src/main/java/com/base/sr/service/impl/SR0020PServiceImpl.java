package com.base.sr.service.impl;

import java.util.HashMap;
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
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0020PDAO;
import com.base.sr.service.SR0020PService;

/**
 * 
 * <pre>
 * @title
 * - 결재선 지정 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 20.	정보윤		최초작성
 */
@Service
public class SR0020PServiceImpl implements SR0020PService {

	private Logger log = LoggerFactory.getLogger(SR0020PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0020PDAO sr0020pDao;

	/**
	 * 결재자 검색
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr0020pDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 나의 결재 그룹 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		dsCond.put("BOX_USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = sr0020pDao.select02(dsCond);
		return result;
	}

	/**
	 * 나의 결재 그룹 결재자 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		dsCond.put("BOX_USER_ID", sc.get().getScUserId());
		List<Map<String, Object>> result = sr0020pDao.select03(dsCond);

		return result;
	}

	/**
	 * 나의 결재선 마스터 등록
	 */
	@Transactional
	public int save01(List<Map<String, Object>> dsWfApprovalBoxM) {

		int newBoxSeq = -1;

		if(dsWfApprovalBoxM != null) {
			
			for (int i = 0; i <dsWfApprovalBoxM.size(); i++) {
				Map<String, Object> rowData = dsWfApprovalBoxM.get(i);
				rowData.put("BOX_USER_ID",	sc.get().getScUserId());
				rowData.put("LMID",				sc.get().getScUserId());
				rowData.put("LMPID",			sc.get().getScLmpId());
				
				String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
				if("I".equals(rowFlag)) {
					sr0020pDao.insert01(rowData);
					newBoxSeq = StringUtil.safeInt(rowData.get("BOX_SEQ"), -1);
				}else if("U".equals(rowFlag)) {
					sr0020pDao.modify01(rowData);
				}
			}
		}
		return newBoxSeq;
	}
	
	/**
	 * 나의 결재선 상세 저장
	 */
	@Transactional
	public void save02(List<Map<String, Object>> dsWfApprovalBoxD) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("BOX_USER_ID", userId);
    	sr0020pDao.remove02(condMap);	//현재 접속자에 해당하는 결재선 관리 전체 삭제 후 재생성

		for (int i = 0; i < dsWfApprovalBoxD.size(); i++) {

			Map<String, Object> rowData = dsWfApprovalBoxD.get(i);

			rowData.put("BOX_USER_ID", userId);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
			sr0020pDao.insert02(rowData);
		}
	}
}