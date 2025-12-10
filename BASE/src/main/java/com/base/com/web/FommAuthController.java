package com.base.com.web;

import java.io.IOException;
import java.net.InetAddress;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

@Controller
public class FommAuthController 
{
	private Logger log = LoggerFactory.getLogger(FommAuthController.class); 

	@Inject
	private Provider<SessionContext> provider;

	@Autowired
	private FommAuthService authService;
	
	@Value("#{app['exchanger.udp.hostname']}")
	private String hostname;

	/**
	 * 
	 * @return
	 * @throws IOException 
	 * @throws Exception 
	 */
	@RequestMapping(value = "/")
	public void home(HttpServletRequest req, HttpServletResponse res) throws IOException  {

		SessionContext sc = provider.get();
		log.info("session =======================================  : " + sc.isAuthenticated());
		res.sendRedirect(req.getContextPath() + "/base/index.html");
	}

	/**
	 * 
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/base")
	public void admin(HttpServletRequest req, HttpServletResponse res) throws IOException {

//		SessionContext sc = provider.get();
//		log.info("session sc.isAuthenticated :: " + sc.isAuthenticated());
		res.sendRedirect(req.getContextPath() + "/base/index.html");
	}

	/**
	 * SSO 로그인 Test용
	 * @return
	 * @throws IOException 
	 * @throws Exception 
	 */
	@RequestMapping(value = "/ssoTest")
	public NexacroResult ssoCheck(HttpServletRequest req, HttpServletResponse res, @ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin) throws Exception {

		NexacroResult result = new NexacroResult();
		
		HttpSession hSession = req.getSession(false);
		hSession.setAttribute("SSO_ID", dsLogin.get("USER_ID"));
		String ssoId = StringUtil.safe(hSession.getAttribute("SSO_ID"));

		log.debug("[FommAuthController] ssoTest() ssoId:[" + ssoId + "]");
		
		Map<String, Object> loginMap = new HashMap<String, Object>();
		loginMap.put("SSO_FLG", "Y");
		loginMap.put("USER_ID", ssoId);
		List<Map<String, String>> list = authService.authenticate(loginMap);
		
		loginMap = new HashMap<String, Object>();
		loginMap.put("SUCC_YN", "N");
		
		if(list != null) {			
			if(list.size() == 1) {
				loginMap = new HashMap<String, Object>();
				loginMap.put("SUCC_YN", "Y");				
			}
		}
		result.addDataSet("dsLoginRtn", loginMap);
		return result;
	}
	
	/**
	 * SSO 로그인 처리
	 * @return
	 * @throws IOException 
	 * @throws Exception 
	 */
	@RequestMapping(value = "/ssoCheck")
	public void ssoCheck(HttpServletRequest req, HttpServletResponse res) throws Exception  {

		HttpSession hSession = req.getSession(false);
		String ssoId = StringUtil.safe(hSession.getAttribute("SSO_ID"));
		//nexess.nls.resession.nonce
		log.debug("[FommAuthController] ssoCheck() ssoId:[" + ssoId + "]");
		
		Map<String, Object> loginMap = new HashMap<String, Object>();
		loginMap.put("SSO_FLG", "Y");
		loginMap.put("USER_ID", ssoId);
		authService.authenticate(loginMap);
		res.sendRedirect(req.getContextPath() + "/base");
	}

	/**
	 * 로그인 처리
	 * @param searchVo
	 * @return
	 */
	@RequestMapping(value = "/login")
	public NexacroResult login(HttpServletRequest req, HttpServletResponse rsp, 
                                        @ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin,
                                        @ParamVariable(name = "userId") String userId, 
                                        @ParamVariable(name = "passwd") String passwd) throws Exception {

		NexacroResult result = new NexacroResult();

		List<Map<String, String>> gdsSession = authService.authenticate(dsLogin);
		SessionContext sc = provider.get();
		
		if( sc.isAuthenticated() != true ) {		// 로그인 실패 시 pw 실패횟수 추가
			authService.addPwFailCnt(dsLogin);		// pw fail ++
			gdsSession = authService.authenticate(dsLogin);	// 갱신
		}
		else {	// 로그인 성공 시
			// 관리자권한(SPP_ADM) 가지고 있는 경우 >> 관리자 IP check (FOMM_USER_ADMIN)
			// SPP_ADM권한 있으면 다른권한 무시하고 ip check한다고 함
			String STR_AUTH_ID = StringUtil.safe(gdsSession.get(0).get("AUTH_ID"));
			if( !"".equals(STR_AUTH_ID) && STR_AUTH_ID.indexOf("SPP_ADM") >= 0 ) 
			{
				// 접속자 IP
				String clientIp = this.getClientIp(req);
				
				// 관리자 허용 IP 조회
				List<Map<String, Object>>  dsAdminIp = authService.selectAdminIp(dsLogin);
				Map<String, Object> dsAdminAllowIp = dsAdminIp.get(0);
				String ADMIN_ALLOW_IP = StringUtil.safe(dsAdminAllowIp.get("ADMIN_ALLOW_IP"));
				
				log.debug("/login >> clientIp :: " + clientIp);
				log.debug("/login >> ADMIN_ALLOW_IP :: " + ADMIN_ALLOW_IP);
				if(ADMIN_ALLOW_IP.indexOf(clientIp) < 0 ) {
					// SPP_ADM 권한 있는데 관리자 허용 IP 없으면 error
					dsAdminAllowIp.put("ADMIN_IP_YN", "N");
					result.addDataSet("dsAdminAllowIp", dsAdminAllowIp); 
				}
			}
		}
		
		result.addDataSet("gdsSession", gdsSession); 
		result.addVariable("isAuthenticated", (sc.isAuthenticated() == true ? "true" : "false"));
		
        return result;
    }
	
	/**
	 * 로그인 성공 시 후처리
	 * @param searchVo
	 * @return
	 */
	@RequestMapping(value = "/loginAfter")
	public NexacroResult loginAfter(HttpServletRequest req, HttpServletResponse rsp, @ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin) throws Exception {

		NexacroResult result = new NexacroResult();
		authService.modifyLoginInfo(dsLogin);
		return result;
    }

	/*
	 * PW 불일치 횟수 조회
	 */
	@RequestMapping(value = "/selectPwFailCnt")
	public NexacroResult selectPwFailCnt(HttpServletRequest req, HttpServletResponse rsp, @ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin) throws Exception {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = authService.selectPwFailCnt(dsLogin);
		
		result.addDataSet("dsPwFailCnt", dsData);
		return result;
    }

	/*
	 * 로그인 실패 > pw 불일치 횟수 +1
	 */
	@RequestMapping(value = "/addPwFailCnt")
	public NexacroResult addPwFailCnt(HttpServletRequest req, HttpServletResponse rsp, @ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin) throws Exception {

		NexacroResult result = new NexacroResult();
		
		authService.addPwFailCnt(dsLogin);
		List<Map<String, Object>> dsData = authService.selectPwFailCnt(dsLogin);
		
		result.addDataSet("dsPwFailCnt", dsData);
		return result;
    }

	@RequestMapping(value = "/logout")
	public void logout(HttpServletRequest req, HttpServletResponse res) throws IOException {
		// session 값 날리기
		SessionContext sc = provider.get();
		
		sc.setAuthenticated(false);		// 인증여부
		sc.setScUserId(null);		// 사용자 ID
		sc.setScUserNm(null);		// 사용자 이름
		sc.setScUserPw(null);		// 
		sc.setScCoCd(null);			// 회사코드
		sc.setScCoNm(null);			// 회사명
		sc.setScDeptCd(null);		// 부서코드
		sc.setScDeptNm(null);		// 부서명
		sc.setScPosCd(null);		// 직급코드
		sc.setScPosNm(null);		// 직급명
		sc.setScRoleCd(null);		// 직책코드
		sc.setScRoleNm(null);		// 직책명
		sc.setScEmailAdr(null);		// 이메일주소
		sc.setScTelnum(null);		// 전화번호
		sc.setScMobileNum(null);	// 휴대폰번호
		sc.setScSysLangCd(null);	// 시스템기본언어코드
		sc.setScLangCd(null);		// 언어코드
		sc.setScSelLangCd(null);	// 선택언어코드
		sc.setScAuthId(null);		// 권한id 목록
		sc.setScAuthNm(null);		// 권한명 목록
		sc.setScAuthAdminYn(null); // 권한그룹 관리자여부(복수 ','구분)
		sc.setScUserType(null);		// 사용자구분; 1:내부, 2:외주, 999:IT본부(default)
		sc.setScLReqMenuId(null);	// 최종요청메뉴ID
		sc.setScLmpId(null);		// 최종수정화면ID
		sc.setScPwInitDt(null);		// 
		sc.setScPwExpDt(null);		// 
		sc.setScMkeyLoginYn(null);		// 
		sc.setScItDeptYn(null);

		Cookie ck = new Cookie("_logoutBtnYn_", "Y");
		//2024-10-25 sparrow 조치 - 
		ck.setSecure(true);
		//-----------------------
		res.addCookie(ck);

		HttpSession hSession = req.getSession(false);
		hSession.invalidate();	// logout
		
		res.sendRedirect(req.getContextPath() + "/base");
	}
	
	@RequestMapping(value = "/killSession")
	public NexacroResult killSession(HttpServletRequest req, HttpServletResponse res) throws IOException {

		NexacroResult result = new NexacroResult();
		
		// session 값 날리기
		SessionContext sc = provider.get();
		
		sc.setAuthenticated(false);		// 인증여부
		sc.setScUserId(null);		// 사용자 ID
		sc.setScUserNm(null);		// 사용자 이름
		sc.setScUserPw(null);		// 
		sc.setScCoCd(null);			// 회사코드
		sc.setScCoNm(null);			// 회사명
		sc.setScDeptCd(null);		// 부서코드
		sc.setScDeptNm(null);		// 부서명
		sc.setScPosCd(null);		// 직급코드
		sc.setScPosNm(null);		// 직급명
		sc.setScRoleCd(null);		// 직책코드
		sc.setScRoleNm(null);		// 직책명
		sc.setScEmailAdr(null);		// 이메일주소
		sc.setScTelnum(null);		// 전화번호
		sc.setScMobileNum(null);	// 휴대폰번호
		sc.setScSysLangCd(null);	// 시스템기본언어코드
		sc.setScLangCd(null);		// 언어코드
		sc.setScSelLangCd(null);	// 선택언어코드
		sc.setScAuthId(null);		// 권한id 목록
		sc.setScAuthNm(null);		// 권한명 목록
		sc.setScAuthAdminYn(null); // 권한그룹 관리자여부(복수 ','구분)
		sc.setScUserType(null);		// 사용자구분; 1:내부, 2:외주, 999:IT본부(default)
		sc.setScLReqMenuId(null);	// 최종요청메뉴ID
		sc.setScLmpId(null);		// 최종수정화면ID
		sc.setScPwInitDt(null);		// 
		sc.setScPwExpDt(null);		// 
		sc.setScMkeyLoginYn(null);		//
		sc.setScItDeptYn(null);
		
		Cookie ck = new Cookie("_logoutBtnYn_", "Y");
		ck.setSecure(true);
		//-----------------------
		res.addCookie(ck);

		HttpSession hSession = req.getSession(false);
		hSession.invalidate();	// logout
		
		return result;
	}

	/**
	 * 
	 * @param searchVo
	 * @return
	 */
	@RequestMapping(value = "/changeUser")
	public NexacroResult changeUser(HttpServletRequest req, HttpServletResponse rsp, @ParamVariable(name = "userId") String userId) throws NexacroException {

		NexacroResult result = new NexacroResult();

		SessionContext sc = provider.get();
		
		if(sc.isAuthenticated()) {
		
			List<Map<String, String>> gdsSession = authService.changeUser(userId);

			if(gdsSession.size() > 0) {
				result.addDataSet("gdsSession", gdsSession); 
				result.addVariable("isAuthenticated", (sc.isAuthenticated() == true ? "true" : "false"));
	
			}else {
				
				if("Y".equals(authService.selectUserMenuAuthYn(userId))) {
					result.setErrorCode(-99997);	//위임기간 만료
					result.setErrorMsg("위임권한기간만료");
				}else {
					result.setErrorCode(-99996);	//메뉴 권한 없음
					result.setErrorMsg("위임자 메뉴권한없음");
				}
			}
			
		}else {
			result.setErrorCode(-99998);
            result.setErrorMsg("Session Out");
		}
        return result;
    }
	
	/**
	 * session check
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/sessCheck")
	public NexacroResult sessCheck(HttpServletRequest req, HttpServletResponse rsp) throws NexacroException {
		NexacroResult result = new NexacroResult();

		SessionContext sc = provider.get();
		String userId = StringUtil.safe(sc.getScUserId());
		
		String logoutBtnYn = "";
		
		Cookie[] cookies = req.getCookies();

		Cookie ck = new Cookie("_logoutBtnYn_", null);
		ck.setSecure(true);
		ck.setMaxAge(0);
		rsp.addCookie(ck);
		
		if(sc.isAuthenticated()) {
			if(!"".equals(userId) ) {
				Map<String, Object> gdsSession = authService.sessCheck(userId);
				result.addDataSet("gdsSession", gdsSession);
			}

		}else {

			for (int i = 0; i < cookies.length; i++) {
				String cName = cookies[i].getName();
				String cValue = cookies[i].getValue();

				if("_logoutBtnYn_".equals(cName)) {
					logoutBtnYn = cValue;
				}
			}

			Map<String, Object> columnMeta = new HashMap<>();
			columnMeta.put("USER_ID",		null);
			columnMeta.put("ORG_USER_ID",	null);
			columnMeta.put("USER_NM",		null);
			columnMeta.put("USER_PW",		null);
			columnMeta.put("CO_CD",			null);
			columnMeta.put("CO_NM",			null);
			columnMeta.put("DEPT_CD",		null);
			columnMeta.put("DEPT_NM",		null);
			columnMeta.put("POS_CD",		null);
			columnMeta.put("POS_NM",		null);
			columnMeta.put("ROLE_CD",		null);
			columnMeta.put("ROLE_NM",		null);
			columnMeta.put("EMAIL_ADR",		null);
			columnMeta.put("TELNUM",		null);
			columnMeta.put("MOBILE_NUM",	null);
			columnMeta.put("SYS_LANG_CD",	null);
			columnMeta.put("LANG_CD",		null);
			columnMeta.put("SEL_LANG_CD",	null);
			columnMeta.put("AUTH_ID",		null);
			columnMeta.put("AUTH_NM",		null);
			columnMeta.put("USER_TYPE",		null);
			columnMeta.put("USER_FLAG",		null);
			columnMeta.put("PW_INIT_DT",		null);
			columnMeta.put("PW_EXP_DT",		null);
			columnMeta.put("MKEY_LOGIN_YN",		null);
			columnMeta.put("IT_DEPT_YN",		null);
			MapMetaData metaData = new MapMetaData(columnMeta);
			
			result.addDataSet("gdsSession", metaData);
			result.setErrorCode(-99998);
            result.setErrorMsg("Session Out");
		}
		result.addVariable("logoutBtnYn", logoutBtnYn);
        return result;
    }

	/**
	 * 사용자 비밀번호 변경
	 * @param dsFommUserMt
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/changePw")
	public NexacroResult changePw(@ParamDataSet(name = "dsFommUserMt") List<Map<String, Object>> dsFommUserMt) throws Exception {		
		NexacroResult result = new NexacroResult();
		
		authService.changePw(dsFommUserMt);
		
		return result;
	}

	/**
	 * set session langCd - scSelLangCd
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/setScSelLangCd")
	public NexacroResult setScSelLangCd(@ParamVariable(name = "selLangCd") String selLangCd) throws NexacroException {
		NexacroResult result = new NexacroResult();

		SessionContext sc = provider.get();
		sc.setScSelLangCd(selLangCd);
		
        return result;
    }
	
	@RequestMapping(value = "/baseExec")
	public NexacroResult baseExec(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = null;
		try {
			dsData = authService.baseExec(dsCond);

		}catch(Exception e)
		{
			Map<String, Object> dsErr = new HashMap<String, Object>();
			dsErr.put("MSG", e.getMessage() );
			result.addDataSet("dsErr", dsErr);
		}
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * menu권한 check
	 * @param authDiv
	 * @return
	 */
	@RequestMapping(value = "/getMenuAuth")
	public NexacroResult getMenuAuth(String authDiv) throws NexacroException {
		return authService.getMenuAuth(authDiv);
    }

	@RequestMapping(value = "/sessOut")
	public NexacroResult sessOut(HttpServletRequest req, HttpServletResponse res) throws IOException {
		NexacroResult result = new NexacroResult();
		
		// session 값 날리기
		SessionContext sc = provider.get();
		
		sc.setAuthenticated(false);		// 인증여부
		sc.setScUserId(null);		// 사용자 ID
		sc.setScUserNm(null);		// 사용자 이름
		sc.setScUserPw(null);		// 비번
		sc.setScCoCd(null);			// 회사코드
		sc.setScCoNm(null);			// 회사명
		sc.setScDeptCd(null);		// 부서코드
		sc.setScDeptNm(null);		// 부서명
		sc.setScPosCd(null);		// 직급코드
		sc.setScPosNm(null);		// 직급명
		sc.setScRoleCd(null);		// 직책코드
		sc.setScRoleNm(null);		// 직책명
		sc.setScEmailAdr(null);		// 이메일주소
		sc.setScTelnum(null);		// 전화번호
		sc.setScMobileNum(null);	// 휴대폰번호
		sc.setScSysLangCd(null);	// 시스템기본언어코드
		sc.setScLangCd(null);		// 언어코드
		sc.setScSelLangCd(null);	// 선택언어코드
		sc.setScAuthId(null);		// 권한id 목록
		sc.setScAuthNm(null);		// 권한명 목록
		sc.setScAuthAdminYn(null); // 권한그룹 관리자여부(복수 ','구분)
		sc.setScUserType(null);		// 사용자구분; 1:내부, 2:외주, 999:IT본부(default)
		sc.setScLReqMenuId(null);	// 최종요청메뉴ID
		sc.setScLmpId(null);		// 최종수정화면ID
		sc.setScPwInitDt(null);		// 비밀번호 초기화 일시
		sc.setScPwExpDt(null);		// 비밀번호 만료 일시
		sc.setScMkeyLoginYn(null);		// 
		sc.setScItDeptYn(null);

		HttpSession hSession = req.getSession(false);
		hSession.invalidate();	// logout
		return result;
	}

	// get 접속자 ip
	public String getClientIp(HttpServletRequest request) throws Exception {

		String[] arrHeader = {"X-Forwarded-For", "Proxy-Client-IP", "WL-Proxy-Client-IP", "HTTP_CLIENT_IP", "HTTP_X_FORWARDED_FOR", "X-Real-IP", "X-RealIP", "REMOTE-ADDR"};
		String ip = "";
		for(int i = 0; i < arrHeader.length; i++) {
			if( ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip) )
				ip = request.getHeader(arrHeader[i]);
			else
				break;
		}
		
		if( ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip) )
			ip = request.getRemoteAddr();
			
		if(ip.equals("0:0:0:0:0:0:0:1") || ip.equals("127.0.0.1") ) {
			InetAddress addr = InetAddress.getLocalHost();
			ip = addr.getHostAddress();
		}
		
		log.debug("getClientIp >> clientIp :: " + ip);
		return ip;
	}
}