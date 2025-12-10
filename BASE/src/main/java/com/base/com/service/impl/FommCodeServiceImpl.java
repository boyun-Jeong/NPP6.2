package com.base.com.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.dao.FommCodeDAO;
import com.base.com.service.FommCodeService;
import com.base.com.vo.SessionContext;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 ServiceImpl Class
 * @package com.base.com.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 00.	WEMB		최초작성
 */
@Service
public class FommCodeServiceImpl implements FommCodeService {

	private Logger log = LoggerFactory.getLogger(FommCodeServiceImpl.class);

	@Inject
	private Provider<SessionContext> sessionContext;

	@Autowired
	private FommCodeDAO fommCodeDao;

	/**
	 * 공통코드 전체 조회
	 */
	@Override
	public List<Map<String, Object>> selectComCode(Map<String, Object> dsCond) {
		List<Map<String, Object>> codeList = fommCodeDao.selectComCode(dsCond);
		return codeList;
	}

	/**
	 * 사용자 메세지 조회
	 */
	@Override
	public List<Map<String, Object>> selectComMsg(Map<String, Object> dsCond) {
		List<Map<String, Object>> messageList = fommCodeDao.selectComMsg(dsCond);
		return messageList;
	}

	/**
	 * 사용자 단어 조회
	 */
	@Override
	public List<Map<String, Object>> selectComWord(Map<String, Object> dsCond) {
		List<Map<String, Object>> messageList = fommCodeDao.selectComWord(dsCond);
		return messageList;
	}
	
	/**
	 * 공통코드 조회 조회
	 */
	@Override
	public List<Map<String, Object>> selectGetCode(Map<String, Object> dsCond) {
		String sysLangCd=  sessionContext.get().getScSysLangCd();
		String selLangCd=  sessionContext.get().getScSelLangCd();
		dsCond.put("SYS_LANG_CD", sysLangCd);
		dsCond.put("SEL_LANG_CD", selLangCd);
		List<Map<String, Object>> messageList = fommCodeDao.selectGetCode(dsCond);

		return messageList;
	}

	/**
	 * 업무 위임자 목록 조회
	 */
	@Override
	public List<Map<String, Object>> selectFommAgencyInfo() {

		Map<String, Object> condMap = new HashMap<>();		
		condMap.put("ORG_USER_ID", sessionContext.get().getScOrgUserId());		
		List<Map<String, Object>> agencyList = fommCodeDao.selectFommAgencyInfo(condMap);
		return agencyList;
	}

	/**
	 * 직급 코드 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectJbcPosiList(Map<String, Object> dsCond) {
		return fommCodeDao.selectJbcPosiList(dsCond);
	}

	/**
	 * 직책 코드 목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectJbcList(Map<String, Object> dsCond) {
		return fommCodeDao.selectJbcList(dsCond);
	}

	/**
	 * 알람 카운트 조회
	 */
	@Override
	public List<Map<String, Object>> selectAlarmCnt(Map<String, Object> dsCond) {
		List<Map<String, Object>> cnt = fommCodeDao.selectAlarmCnt(dsCond);
		return cnt;
	}
}