<%@ page language="java"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@page import="com.initech.cryptox.util.Base64Util"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="com.initech.eam.nls.Ticket"%>
<%@page import="com.initech.eam.nls.CookieManager"%>
<%@page import="java.security.SecureRandom"%>
<%@page import="com.initech.eam.nls.NLSHelper"%>
<%@ include file="cutCarriageReturn.jsp" %>

<%
    session.removeAttribute("SSO_ID");
    
    String host = request.getServerName();

    System.out.println("host:[" + host + "]");
    System.out.println("111");
    String noCacheNonce = Ticket.generateNonce();
    System.out.println("222");

     //resession.nonce 생성
     SecureRandom random = new SecureRandom();
     byte[] nonce = new byte[8];
     random.nextBytes(nonce);

     String nonceStr = cutCarriageReturn(new String(Base64Util.encode(nonce)));
     session.setAttribute("nexess.nls.resession.nonce", nonceStr);
%>
<%
if("localhost".equals(host) || "10.120.120.62".equals(host) || "127.0.0.1".equals(host) || "itsmdev.nhfire.co.kr".equals(host)) {	
%>
    <script language="javascript" src="./js/NexessDemonFunc_dev.js" charset="UTF-8"></script>         
<%
}else if("10.120.15.29".equals(host) || "itsm.nhfire.co.kr".equals(host)) {
%>
    <script language="javascript" src="./js/NexessDemonFunc.js" charset="UTF-8"></script>
<%
}else {
%>
    <script language="javascript" src="./js/NexessDemonFunc_test.js" charset="UTF-8"></script>
<%
}
%>

<script language=javascript>
    function fn_close() {
        if(navigator.appVersion.indexOf("MSIE 7.0")>=0 || navigator.appVersion.indexOf("MSIE 8.0")>=0) {
            window.opener = "nothing";
            window.open('', '_parent', '');
            window.close();
        } else {
            window.opener = self;
            self.close();
        }
    }
    /**************************************************************************************
     ** SSO 서버 정보 **
    농협손해 개발계 : NHFIRE_DEV   http://dev-sso.nhfire.co.kr/nls3/clientLogin.jsp
    농협손해 운영계 : NHFIRE          http://sso.nhfire.co.kr/nls3/clientLogin.jsp
    **************************************************************************************/
    /**************************************************************************************
    SERVICE CONFIGURATION 업무시스템 환경설정
    ***************************************************************************************/    
    //ITSM 포탈로 이동이 아닌, SSO로그인 화면으로 이동    
    var SERVER_PORT = "8082";   //업무시스템 서비스포트(WAS포트)

    if('<%=host%>' == 'localhost' || '<%=host%>' == '10.120.120.62' || '<%=host%>' == '127.0.0.1' || '<%=host%>' == 'itsmdev.nhfire.co.kr') {
    	
    	if('<%=host%>' == '10.120.120.62' || '<%=host%>' == 'itsmdev.nhfire.co.kr') {
    		SERVER_PORT = "8080";
    	}
        IP = "dev-sso.nhfire.co.kr:9070";

    //운영계일경우
    }else if("<%=host%>" == "10.120.15.29" || "<%=host%>" == "itsm.nhfire.co.kr") {
    	SERVER_PORT = "8080";
        IP = "sso.nhfire.co.kr:9070";

    }else {
    	SERVER_PORT = "8080";
        IP = "semi-sso.nhfire.co.kr:9070";
    }
    var SSO_LOGIN_URL = "http://" + IP + "/nls3/clientLogin.jsp";
    var USER_URL = "http://" + "<%=host%>" + ":" + SERVER_PORT + "/" + "spp/sso/login_sso.jsp";
//     var USER_URL = "http://10.120.16.173:8080/sso/main_NH.jsp";
    USER_URL = encodeURIComponent(USER_URL);

    try {
        IsLogin();

    }catch(e) {
        //농협생명 NC가 설치 되지 않은경우
        self.location.replace("http://" + "<%=host%>" + ":" + SERVER_PORT +"/spp/index.html");
    }

    /*  NC 응답결과
     *  responseData
     *  resultCode ==> NC클라이언트 통신 정상 여부 1:정상, 0:비정상
     *  msg ===> api 에 해당하는 결과 리턴값
     *  status ==> 커스터마이징 값(사용하지 않음)
     */
    // 1. 로그인 체크
    function IsLogin() {
        Nexess_IsLogin(Callback_IsLogin);
    }
    // 2. 로그인 체크 콜백
    function Callback_IsLogin(responseData) {
        if(responseData.msg == "0" || responseData.msg == "error"){
            
            self.location.replace(SSO_LOGIN_URL + "?UURL=" + USER_URL + "&RTOA=1");
        }else{
            PrepareResession();
        }
    }

    // 3. sso 티켓 암호화에 사용한 시드값 셋팅
    function PrepareResession() {
        Nexess_PrepareResession(Callback_PrepareResession, "<%=nonceStr%>");
    }

    function Callback_PrepareResession(responseData){
        if(responseData.resultCode == '1') {
            parent.Nexess_GetTicket(Callback_GetTicket);
        }
    }

    // 4. 티켓 셋팅     // IE11 종료 대응 추가  Callback_GetTicket
    function Callback_GetTicket(responseData){

        var encNonceAndTicket = responseData.msg;

        while(encNonceAndTicket.indexOf("+") != -1) {
            encNonceAndTicket= encNonceAndTicket.replace("+", "%2b");
        }

        document.cookie="encNonceAndTicket=" + escape(encNonceAndTicket);

        var replaceUrl = "./login_exec.jsp?ticket="+escape(encNonceAndTicket);
        self.location.replace(replaceUrl);
    }
</script>