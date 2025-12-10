package com.base.com.service.impl;

import java.io.Reader;
import java.sql.Clob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import javax.naming.Context;
import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import jakarta.servlet.http.HttpSession;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import com.aircuve.web.Auth;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.dao.FommAuthDAO;
import com.base.com.dao.FommMenuDAO;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * 
 * @title - ServiceImpl Sample Class
 * @package com.nexacro.sample.spring.impl
 * 
 *          <pre>
 * 
 * @author WEMB
 * @since 2023. 04. 06.
 * @version 1.0
 * @see
 *
 *      =================== 변경 내역 ================== 날짜 변경자 내용
 *      
 *      2024.06.17	김지수 로그인방식추가 (통합인증, SSO, AD/LDAP) 
 *      
 *      
 *      ------------------------------------------------ 2023.04.06. WEMB 최초작성
 */
@Service
public class FommAuthServiceImpl implements FommAuthService {

	private Logger log = LoggerFactory.getLogger(FommAuthService.class);

	@Inject
	private Provider<SessionContext> sessionContext;

	@Autowired
	private FommAuthDAO fommAuthDao;

	@Autowired
	private FommMenuDAO fommMenuDao;

	@Autowired
	private FommScheduleCommonServiceImpl commNoti;
	
	@Autowired
	HttpSession session;

	@Override
	public List<Map<String, String>> authenticate(Map<String, Object> dsLogin) throws Exception {
		// 로그인 관리자 정보 조회
		List<Map<String, String>> userList = new ArrayList<Map<String, String>>();
		userList = fommAuthDao.selectUserInfo(dsLogin);
		
		return settingUser(userList);
	}
	
	
	public void modifyLoginInfo(Map<String, Object> dsLogin)
	{
		fommAuthDao.modifyLoginInfo(dsLogin);
	}
	
	
	@Override
	public List<Map<String, Object>> selectPwFailCnt(Map<String, Object> dsLogin) {
		List<Map<String, Object>> dsData = fommAuthDao.selectPwFailCnt(dsLogin);
		return dsData;
	}
	
	
	@Transactional
	public void addPwFailCnt(Map<String, Object> dsLogin) {
		fommAuthDao.modifyPwFailCnt(dsLogin);
	}

	@Override
	public List<Map<String, String>> settingUser(List<Map<String, String>> userList) {

		log.debug("settingUser");
		// sessionContext setting
		SessionContext sc = sessionContext.get();
		if (userList.size() <= 0) {
			sc.setAuthenticated(false); // 인증여부
		} else {
			sc.setAuthenticated(true); // 인증여부
			Map<String, String> userInfo = userList.get(0);
			sc.setScOrgUserId(StringUtil.safe(userInfo.get("USER_ID"))); // 실제 사용자 ID

			sc.setScUserId(StringUtil.safe(userInfo.get("USER_ID"))); // 사용자 ID
			sc.setScUserNm(StringUtil.safe(userInfo.get("USER_NM"))); // 사용자 이름
			sc.setScUserPw(StringUtil.safe(userInfo.get("USER_PW"))); // 
			sc.setScCoCd(StringUtil.safe(userInfo.get("CO_CD"))); // 회사코드
			sc.setScCoNm(StringUtil.safe(userInfo.get("CO_NM"))); // 회사명
			sc.setScDeptCd(StringUtil.safe(userInfo.get("DEPT_CD"))); // 부서코드
			sc.setScDeptNm(StringUtil.safe(userInfo.get("DEPT_NM"))); // 부서명
			sc.setScPosCd(StringUtil.safe(userInfo.get("POS_CD"))); // 직급코드
			sc.setScPosNm(StringUtil.safe(userInfo.get("POS_NM"))); // 직급명
			sc.setScRoleCd(StringUtil.safe(userInfo.get("ROLE_CD"))); // 직책코드
			sc.setScRoleNm(StringUtil.safe(userInfo.get("ROLE_NM"))); // 직책명
			sc.setScEmailAdr(StringUtil.safe(userInfo.get("EMAIL_ADR"))); // 이메일주소
			sc.setScTelnum(StringUtil.safe(userInfo.get("TELNUM"))); // 전화번호
			sc.setScMobileNum(StringUtil.safe(userInfo.get("MOBILE_NUM"))); // 휴대폰번호
			sc.setScSysLangCd("KR"); // 시스템언어코드
			sc.setScLangCd(StringUtil.safe(userInfo.get("LANG_CD"), "KR")); // 언어코드
			sc.setScSelLangCd(StringUtil.safe(userInfo.get("SEL_LANG_CD"), "KR"));// 선택언어코드
			sc.setScAuthId(StringUtil.safe(userInfo.get("AUTH_ID"))); // 권한그룹ID(복수 ','구분)
			sc.setScAuthNm(StringUtil.safe(userInfo.get("AUTH_NM"))); // 권한그룹명(복수 ','구분)
			sc.setScAuthAdminYn(StringUtil.safe(userInfo.get("AUTH_ADMIN_YN"))); // 권한그룹 관리자여부(복수 ','구분)
			sc.setScAdminYn(StringUtil.safe(userInfo.get("ADMIN_YN"))); // 전체 관리자여부(복수 ','구분)
			sc.setScUserType(StringUtil.safe(userInfo.get("USER_TYPE")));	// 사용자구분
			sc.setScUserFlag(StringUtil.safe(userInfo.get("USER_FLAG")));		// 메인화면 분기용; 1:IT, 2:현업
			sc.setScPwInitDt(StringUtil.safe(userInfo.get("PW_INIT_DT")));		// 
			sc.setScPwExpDt(StringUtil.safe(userInfo.get("PW_EXP_DT")));		// 
			sc.setScMkeyLoginYn(StringUtil.safe(userInfo.get("MKEY_LOGIN_YN")));		//
			sc.setScItDeptYn(StringUtil.safe(userInfo.get("IT_DEPT_YN"), "N"));
			sc.setScLReqMenuId(""); // 최종요청메뉴ID
			sc.setScLmpId(""); // 최종수정화면ID
			
			if("".equals(StringUtil.safe(userInfo.get("LANG_CD")))) {
				userList.get(0).put("LANG_CD", "KR");
			}
			
			if("".equals(StringUtil.safe(userInfo.get("SEL_LANG_CD")))) {
				userList.get(0).put("SEL_LANG_CD", "KR");
			}

			session.setAttribute("USER_ID", StringUtil.safe(userInfo.get("USER_ID")));
			session.setAttribute("ORG_USER_ID", StringUtil.safe(userInfo.get("USER_ID")));

			userList.get(0).put("ORG_USER_ID", sc.getScOrgUserId());
			userList.get(0).put("SYS_LANG_CD", sc.getScSysLangCd());

			// 로그인 이력 생성
//			userLogService.createUserLogLogin(usrId);
		}
		return userList;
	}

//	public List<Map<String, String>> otpAuth(Map<String, Object> dsLogin) throws Exception {
//
//		List<Map<String, String>> userList = new ArrayList<Map<String, String>>();
//
//		String userId = StringUtil.safe(dsLogin.get("USER_ID"));
//		String password = StringUtil.safe(dsLogin.get("USER_PW"));
//		Auth auth = new Auth();
//		String result = "";
//
//		result = auth.otpAuth("172.16.100.236", userId, password);
//		JSONParser jsParser = new JSONParser();
//
//		if (result != null && !"".equals(result)) {
//			JSONObject json;
//			json = (JSONObject) jsParser.parse(result);
//			
//			String rslt = json.get("success").toString();
//			
//			log.debug("==> OTP login : " + userId + ", result : " + result);
//			
//			if( json.get("success") != null && "false".equals(json.get("success"))) {
//				log.debug("AUTH ==> OTP 인증 시도 실패");
//				rslt = "[OTP 인증 시도 실패] " + json.get("err_msg").toString();
//				throw new Exception(rslt);
//			}
//
//			if (json.get("success") != null && "true".equals(json.get("success"))) {
//				// 인증성공 로그인!
//				log.debug("AUTH ==> OTP 로그인 성공");
//				userList = fommAuthDao.selectUserInfo(dsLogin);
//			}
//		}
//		else
//		{
//			throw new Exception( "사용자 비밀번호가 틀립니다." );
//		}
//		return userList;
//	}

	public List<Map<String, String>> adAuth(Map<String, Object> dsLogin) throws Exception {
		
		List<Map<String, String>> userList = new ArrayList<Map<String, String>>();

		DirContext ctx = null;
		String userId = StringUtil.safe(dsLogin.get("USER_ID"));
		String password = StringUtil.safe(dsLogin.get("USER_PW"));
		String ldapFactory = "com.sun.jndi.ldap.LdapCtxFactory";
		String ldapSecurity = "simple";
		String ldapUrl = "ldap://172.23.1.100";
		String ldapDomain = "@miraeasset.com";

		Hashtable<String, String> property = new Hashtable<String, String>();
		property.put(Context.INITIAL_CONTEXT_FACTORY, ldapFactory);
		property.put(Context.SECURITY_AUTHENTICATION, ldapSecurity);
		property.put(Context.PROVIDER_URL, ldapUrl);
		property.put(Context.SECURITY_PRINCIPAL, userId + ldapDomain);
		property.put(Context.SECURITY_CREDENTIALS, password);

		String rslt = "";
		try {
			log.debug("AUTH ==> AD 인증 시도 중");
			ctx = new InitialDirContext(property);
			userList = fommAuthDao.selectUserInfo(dsLogin);
		} catch (NamingException e) {
			log.debug("AUTH ==> AD 로그인 실패");
			throw new Exception("ID 또는 비밀번호를 확인해 주세요.");
		} finally {
			try {
				if (ctx != null)
					ctx.close();
			} catch (NamingException e) {
				rslt= e.getMessage();
				throw new Exception( rslt );
			}
		}
		return userList;
	}

	@Override
	public List<Map<String, String>> changeUser(String userId) {
		// sessionContext setting
		SessionContext sc = sessionContext.get();

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("USER_ID", userId);
		condMap.put("ORG_USER_ID", sc.getScOrgUserId());
		List<Map<String, String>> userList = fommAuthDao.selectUserInfo(condMap);

		if (userList.size() > 0) {

			Map<String, String> userInfo = userList.get(0);

			sc.setScUserId(StringUtil.safe(userInfo.get("USER_ID"))); // 사용자 ID
			sc.setScUserNm(StringUtil.safe(userInfo.get("USER_NM"))); // 사용자 이름
			sc.setScUserPw(StringUtil.safe(userInfo.get("USER_PW"))); // 사용자 이름
			sc.setScCoCd(StringUtil.safe(userInfo.get("CO_CD"))); // 회사코드
			sc.setScCoNm(StringUtil.safe(userInfo.get("CO_NM"))); // 회사명
			sc.setScDeptCd(StringUtil.safe(userInfo.get("DEPT_CD"))); // 부서코드
			sc.setScDeptNm(StringUtil.safe(userInfo.get("DEPT_NM"))); // 부서명
			sc.setScPosCd(StringUtil.safe(userInfo.get("POS_CD"))); // 직급코드
			sc.setScPosNm(StringUtil.safe(userInfo.get("POS_NM"))); // 직급명
			sc.setScRoleCd(StringUtil.safe(userInfo.get("ROLE_CD"))); // 직책코드
			sc.setScRoleNm(StringUtil.safe(userInfo.get("ROLE_NM"))); // 직책명
			sc.setScEmailAdr(StringUtil.safe(userInfo.get("EMAIL_ADR"))); // 이메일주소
			sc.setScTelnum(StringUtil.safe(userInfo.get("TELNUM"))); // 전화번호
			sc.setScMobileNum(StringUtil.safe(userInfo.get("MOBILE_NUM"))); // 휴대폰번호
			sc.setScAuthId(StringUtil.safe(userInfo.get("AUTH_ID"))); // 권한그룹ID(복수 ','구분)
			sc.setScAuthNm(StringUtil.safe(userInfo.get("AUTH_NM"))); // 권한그룹명(복수 ','구분)
			sc.setScAuthAdminYn(StringUtil.safe(userInfo.get("AUTH_ADMIN_YN"))); // 권한그룹 관리자여부(복수 ','구분)
			sc.setScAdminYn(StringUtil.safe(userInfo.get("ADMIN_YN"))); // 권한그룹 관리자여부(복수 ','구분)
			sc.setScUserType(StringUtil.safe(userInfo.get("USER_TYPE"))); // 사용자구분
			sc.setScUserFlag(StringUtil.safe(userInfo.get("USER_FLAG"))); // 사용자구분 ( 메인화면 분기용; 1:IT, 2:현업 )
			sc.setScLReqMenuId(""); // 최종요청메뉴ID
			sc.setScLmpId(""); // 최종수정화면ID
			sc.setScPwInitDt(StringUtil.safe(userInfo.get("PW_INIT_DT")));
			sc.setScPwExpDt(StringUtil.safe(userInfo.get("PW_EXP_DT")));
			sc.setScMkeyLoginYn(StringUtil.safe(userInfo.get("MKEY_LOGIN_YN")));
			sc.setScItDeptYn(StringUtil.safe(userInfo.get("IT_DEPT_YN"), "N"));

			session.setAttribute("USER_ID", StringUtil.safe(userInfo.get("USER_ID")));

			userList.get(0).put("ORG_USER_ID", sc.getScOrgUserId());

			// 로그인 이력 생성
//			userLogService.createUserLogLogin(usrId);
		}
		return userList;
	}

	@Override
	public Map<String, Object> sessCheck(String userId) {
		SessionContext sc = sessionContext.get();

		log.debug("sessCheck sc.isAuthenticated():[" + sc.isAuthenticated() + "] session:[" + session + "]");

		Map<String, Object> gdsSession = new HashMap<String, Object>();

		if (sc.isAuthenticated()) {
			gdsSession.put("USER_ID", sc.getScUserId());
			gdsSession.put("ORG_USER_ID", sc.getScOrgUserId());
			gdsSession.put("USER_NM", sc.getScUserNm());
			gdsSession.put("USER_PW", sc.getScUserPw());
			gdsSession.put("CO_CD", sc.getScCoCd());
			gdsSession.put("CO_NM", sc.getScCoNm());
			gdsSession.put("DEPT_CD", sc.getScDeptCd());
			gdsSession.put("DEPT_NM", sc.getScDeptNm());
			gdsSession.put("POS_CD", sc.getScPosCd());
			gdsSession.put("POS_NM", sc.getScPosNm());
			gdsSession.put("ROLE_CD", sc.getScRoleCd());
			gdsSession.put("ROLE_NM", sc.getScRoleNm());
			gdsSession.put("EMAIL_ADR", sc.getScEmailAdr());
			gdsSession.put("TELNUM", sc.getScTelnum());
			gdsSession.put("MOBILE_NUM", sc.getScMobileNum());
			gdsSession.put("SYS_LANG_CD", sc.getScSysLangCd());
			gdsSession.put("LANG_CD", sc.getScLangCd());
			gdsSession.put("SEL_LANG_CD", sc.getScSelLangCd());
			gdsSession.put("AUTH_ID", sc.getScAuthId());
			gdsSession.put("AUTH_NM", sc.getScAuthNm());
			gdsSession.put("AUTH_ADMIN_YN", sc.getScAuthAdminYn());
			gdsSession.put("ADMIN_YN", sc.getScAdminYn());
			gdsSession.put("USER_TYPE", sc.getScUserType());
			gdsSession.put("USER_FLAG", sc.getScUserFlag());
			gdsSession.put("PW_INIT_DT", sc.getScPwInitDt());
			gdsSession.put("PW_EXP_DT", sc.getScPwExpDt());
			gdsSession.put("MKEY_LOGIN_YN", sc.getScMkeyLoginYn());
			gdsSession.put("IT_DEPT_YN", StringUtil.safe(sc.getScItDeptYn(), "N"));
		}
		return gdsSession;
	}

	@Override
	public NexacroResult getMenuAuth(String authDiv) {
		NexacroResult result = new NexacroResult();
		Map<String, Object> gdsReqMenuAuth = new HashMap<String, Object>();
		gdsReqMenuAuth.put("ADMIN_YN", "N");
		gdsReqMenuAuth.put("READ_YN", "N");
		gdsReqMenuAuth.put("WRITE_YN", "N");
		gdsReqMenuAuth.put("DELETE_YN", "N");
		gdsReqMenuAuth.put("SAVE_YN", "N");
		gdsReqMenuAuth.put("EXCL_DOWN_YN", "N");
		gdsReqMenuAuth.put("REPORT_PRNT_YN", "N");
		gdsReqMenuAuth.put("FILE_UP_YN", "N");		

		SessionContext sc = sessionContext.get();
		String menuId = sc.getScLReqMenuId();
		String userId = sc.getScUserId();
		String lmpid = sc.getScLmpId();
		log.debug("Checking Menu Auth :: screenId = " + lmpid + " menuId = " + menuId + " userId = " + userId);

		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("MENU_ID", menuId);
		searchMap.put("USER_ID", userId);
		searchMap.put("SYS_LANG_CD", sessionContext.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sessionContext.get().getScSelLangCd());

		List<Map<String, Object>> dsSearchRtn = null;
		if (!("".equals(menuId) && "".equals(userId))) {
			dsSearchRtn = fommMenuDao.selectUserMenu(searchMap);
		}

		//2024-10-25 Sparrow 조치----------
		if (dsSearchRtn != null && dsSearchRtn.size() == 1) {
			gdsReqMenuAuth = dsSearchRtn.get(0);
		} else {
			log.debug("FommAuthServiceImpl getMenuAuth dsSearchRtn is null");
		}
		//--------------------------------
		gdsReqMenuAuth.put("MENU_ID", menuId);		
		gdsReqMenuAuth.put("USER_ID", userId);
		gdsReqMenuAuth.put("SCREEN_ID", lmpid);

		String authYn = StringUtil.safe(gdsReqMenuAuth.get(authDiv));
		gdsReqMenuAuth.put("AUTH_YN", authYn);
		gdsReqMenuAuth.put("AUTH_DIV", authDiv);

		result.addDataSet("gdsReqMenuAuth", gdsReqMenuAuth);
		result.addVariable("AUTH_YN", authYn);
		result.addVariable("AUTH_DIV", authDiv);
		return result;
	}
	
	@Transactional
	public List<Map<String, Object>> baseExec(Map<String, Object> dsCond) throws Exception
	{
		String STR = StringUtil.safe(dsCond.get("STR"));
		STR = STR.trim();
		dsCond.put("STR", STR);

		List<Map<String, Object>> rtn = null;
		String checkSTR = STR.toUpperCase().replaceAll(" ", "");
		if( checkSTR.startsWith("WITH") || checkSTR.startsWith("SELECT") ) {
			rtn = fommAuthDao.sppExec(dsCond);
			// CLOB 처리
			try {
				List<Map<String, Object>> rtnNew = new ArrayList<Map<String,Object>>();
				for(int i = 0; i < rtn.size(); i++)
				{
					Map<String, Object> rowData = rtn.get(i);
					for(String colNm : rowData.keySet()) 
					{
						if(rowData.get(colNm) == null) continue;
						if(rowData.get(colNm).getClass() == null) continue;
						String colType = rowData.get(colNm).getClass().toString().toUpperCase();
						if(colType.indexOf("CLOB") > -1) {
							Clob clob = (Clob) rowData.get(colNm);
							if(clob != null) {
								Reader reader = clob.getCharacterStream();
								String str = IOUtils.toString(reader);
								rowData.put(colNm, str);
								if(reader != null)	
									reader.close();
							}
						}
					}
					rtnNew.add(rowData);
				}
				
				rtn = rtnNew;
			}
			catch(Exception e) {
				e.printStackTrace();
			}

		}else {
			fommAuthDao.sppExec2(dsCond);
		}
		
		return rtn;
	}
	
	
	@Override
	public NexacroResult getMenuAuthEx(String authDiv,String strMenuId, String strUserId, String strLmpid) {
		NexacroResult result = new NexacroResult();
		Map<String, Object> gdsReqMenuAuth = new HashMap<String, Object>();
		gdsReqMenuAuth.put("ADMIN_YN", "N");
		gdsReqMenuAuth.put("READ_YN", "N");
		gdsReqMenuAuth.put("WRITE_YN", "N");
		gdsReqMenuAuth.put("DELETE_YN", "N");
		gdsReqMenuAuth.put("SAVE_YN", "N");
		gdsReqMenuAuth.put("EXCL_DOWN_YN", "N");
		gdsReqMenuAuth.put("REPORT_PRNT_YN", "N");
		gdsReqMenuAuth.put("FILE_UP_YN", "N");		

		SessionContext sc = sessionContext.get();
		String menuId = strMenuId;
		String userId = strUserId;
		String lmpid = strLmpid;
		log.debug("Checking Menu Auth Ex :: screenId = " + lmpid + " menuId = " + menuId + " userId = " + userId);

		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("MENU_ID", menuId);
		searchMap.put("USER_ID", userId);
		searchMap.put("SYS_LANG_CD", sessionContext.get().getScSysLangCd());
		searchMap.put("SEL_LANG_CD", sessionContext.get().getScSelLangCd());

		List<Map<String, Object>> dsSearchRtn = null;
		if (!("".equals(menuId) && "".equals(userId))) {
			dsSearchRtn = fommMenuDao.selectUserMenu(searchMap);
		}
		//20241025-sparrow조치
		if (dsSearchRtn != null && (dsSearchRtn.size() == 1))
			gdsReqMenuAuth = dsSearchRtn.get(0);

		gdsReqMenuAuth.put("MENU_ID", menuId);
		gdsReqMenuAuth.put("USER_ID", userId);
		gdsReqMenuAuth.put("SCREEN_ID", lmpid);

		String authYn = StringUtil.safe(gdsReqMenuAuth.get(authDiv));
		gdsReqMenuAuth.put("AUTH_YN", authYn);
		gdsReqMenuAuth.put("AUTH_DIV", authDiv);

		result.addDataSet("gdsReqMenuAuth", gdsReqMenuAuth);
		result.addVariable("AUTH_YN", authYn);
		result.addVariable("AUTH_DIV", authDiv);

		return result;
	}

	//menu권한 존재여부 체크
	@Override
	public String selectUserMenuAuthYn(String userId) {
		return fommAuthDao.selectUserMenuAuthYn(userId);
	}

	@Transactional
	public void changePw(List<Map<String, Object>> dsFommUserMt) throws Exception 
	{
		String lmid = sessionContext.get().getScUserId();
		String lmpid = sessionContext.get().getScLmpId();
		
		for(int i = 0; i < dsFommUserMt.size(); i++)
		{
			Map<String, Object> rowData = dsFommUserMt.get(i);
			
			String ADMIN_YN = StringUtil.safe(rowData.get("ADMIN_YN"));
			log.debug("PW INIT ADMIN_YN :: " + ADMIN_YN);
			if( "Y".equals(ADMIN_YN) ) {
				// 관리자가 초기화한 경우 메시지 발송
				String USER_ID = StringUtil.safe(rowData.get("USER_ID"));
				String SEND_TYPE_CD = "TALK";
				String title = "비밀번호가 초기화되었습니다.";
				String conts = USER_ID + " 계정의 비밀번호가 초기화되었습니다.";
						 conts += "\n비밀번호는 ID와 동일합니다.";
					
				commNoti.sendMsgTran("", "03", SEND_TYPE_CD, "ITSM", title, conts, dsFommUserMt);	
			}
			
			rowData.put("LMID", lmid);
			rowData.put("LMPID", lmpid);
			fommAuthDao.changePw(rowData);		// 비밀번호 변경
			fommAuthDao.insertUserPwHist(rowData);		// 비밀번호 이력  추가
		}
		
	}
	
	
	
	// 사용자 비밀번호 변경 이력 조회
	@Override
	public List<Map<String, Object>> selectUserPwChgHist(Map<String, Object> dsCond) {
		return fommAuthDao.selectUserPwHist(dsCond);
	}
	
	
	
	// 관리자 접속 가능 IP 조회
	@Override
	public List<Map<String, Object>> selectAdminIp(Map<String, Object> dsCond) {
		return fommAuthDao.selectAdminIp(dsCond);
	}
}