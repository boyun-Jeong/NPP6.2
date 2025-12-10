<%@ page language="java" contentType="text/html;charset=UTF-8" %>
<%@page import="com.initech.provider.crypto.InitechProvider"%>
<%@page import="com.initech.provider.crypto.Provider"%>
<%@ page import="java.net.URLDecoder"%>
<%@ page import="java.util.List"%>
<%@ page import="com.wemb.spp.fwk.util.StringUtil"%>
<%@page import="com.initech.eam.nls.TicketV3"%>
<%@ include file="cutCarriageReturn.jsp" %>

<%!
    static {
        InitechProvider xx = new InitechProvider();
        xx.changeMode();
    }
%>
<%

    String host = request.getServerName();

    //1.SSO ID 수신
    List res                        = null;
    String userid               = null;       //SSOID(사번)
    String toa                  = null;          //인증타입
    String SERVER_PORT  = "8082";
    String NLS_URL          = "";

    if("localhost".equals(host) || "10.120.120.62".equals(host) || "127.0.0.1".equals(host) || "itsmdev.nhfire.co.kr".equals(host)) {
        //개발서버일 경우
        if("10.120.120.62".equals(host) || "itsmdev.nhfire.co.kr".equals(host)) {
            SERVER_PORT = "8080";
        }
        NLS_URL = "dev-sso.nhfire.co.kr:9070";

    //운영서버일 경우
    }else if("10.120.15.29".equals(host) || "itsm.nhfire.co.kr".equals(host)) {
        SERVER_PORT = "8080";
        NLS_URL = "sso.nhfire.co.kr:9070";

    }else {
        SERVER_PORT = "8080";
        NLS_URL = "semi-sso.nhfire.co.kr:9070";
    }

    String NLS_LOGIN_URL = NLS_URL + "/nls3/clientLogin.jsp";    //"http://" +  

    try {
        
        session.setAttribute("SSO_ID", "");
        String ticket = StringUtil.safe(request.getParameter("ticket"));
        System.out.println("*================== ticket = " + ticket);
        String savedNonce = StringUtil.safe(session.getAttribute("nexess.nls.resession.nonce"));
        System.out.println("*================== nexess.nls.resession.nonce = "+savedNonce);

        System.out.println("=================================1=========================================");
        if (!"".equals(ticket)) {
            ticket = URLDecoder.decode(ticket);
            System.out.println("ticket : [" + ticket + "]");
        }
        System.out.println("=================================2=========================================");
        int firstIndex        = ticket.indexOf("&&");
        int secondeIndex      = ticket.lastIndexOf("&&");
        String encNonce       = ticket.substring(0, firstIndex);
        String encSKIPAndTime = ticket.substring(firstIndex + 2, secondeIndex);
        String encIDAndTOA    = ticket.substring(secondeIndex + 2);
        
        System.out.println("encNonce:[" + encNonce + "] encSKIPAndTime:[" + encSKIPAndTime + "] encIDAndTOA:[" + encIDAndTOA + "]");

        System.out.println("=================================3=========================================");
        String decNonce = "";
        try {
            decNonce = StringUtil.safe(cutCarriageReturn(TicketV3.decryptNonce(encSKIPAndTime, encNonce)));

        } catch (Exception e) {
            System.out.println("티켓검증 실패! 로그인 페이지로 이동필요");
            //goLoginPage(response, host);
            response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://" + host + ":" + SERVER_PORT +"/spp/sso/login_sso.jsp" + "&RTOA=1");
//             response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://10.120.16.173:8080/sso/main_NH.jsp" + "&RTOA=1");
        }
        System.out.println("=================================4=========================================");
        System.out.println("decNonce:[" + decNonce + "] savedNonce:[" + savedNonce + "]");

        if (decNonce.equals(savedNonce)) {

            res = TicketV3.readIDAndTOA(encSKIPAndTime, encIDAndTOA);
            userid = StringUtil.safe(res.get(0));
            toa = StringUtil.safe(res.get(1));
            System.out.println("*================== [login_exec.jsp]  userid = "+userid);

        }else{

            System.out.println("티켓검증 실패! 로그인 페이지로 이동필요");
            //goLoginPage(response, host);
            response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://" + host + ":" + SERVER_PORT + "/spp/sso/login_sso.jsp" + "&RTOA=1");
//             response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://10.120.16.173:8080/sso/main_NH.jsp" + "&RTOA=1");
        }
        System.out.println("=================================5=========================================");

    } catch (Exception e) {
        System.out.println("티켓검증 실패! 로그인 페이지로 이동필요");
        e.printStackTrace();
        //혹호화 실패 로그인 페이지로 이동
        //goLoginPage(response, host);
        response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://" + host + ":" + SERVER_PORT + "/spp/sso/login_sso.jsp" + "&RTOA=1");
//         response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://10.120.16.173:8080/sso/main_NH.jsp" + "&RTOA=1");
    }
        System.out.println("=================================6=========================================");
    if (userid == null || userid == "") {
        //goLoginPage(response, host);
        response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://" + host + ":" + SERVER_PORT + "/spp/sso/login_sso.jsp" + "&RTOA=1");
//         response.sendRedirect(NLS_LOGIN_URL+"?UURL=http://10.120.16.173:8080/sso/main_NH.jsp" + "&RTOA=1");
        return;

    } else {

        System.out.println("=================================7=========================================");
        //업무시스템에 읽을 사용자 아이디를 세션으로 생성
        String EAM_ID = StringUtil.safe(session.getAttribute("SSO_ID"));
        System.out.println("EAM_ID:[" + EAM_ID + "]");

        if("".equals(EAM_ID)) {
            session.setAttribute("SSO_ID", userid);            
        }
        System.out.println("SSO 인증 성공!!");
        System.out.println("********************** 권한정보 가져오기 끄으으읕 *****************************");
        //6.업무시스템 페이지 호출(세션 페이지 또는 메인페이지 지정)  --> 업무시스템에 맞게 URL 수정!
//         String redirURL = response.encodeURL("http://" + host + ":" + SERVER_PORT + "/spp/index.html");
        System.out.println("SERVER_PORT:[" + SERVER_PORT + "]");
        String redirURL = response.encodeURL("http://" + host + ":" + SERVER_PORT + "/ssoCheck");
//         String redirURL = response.encodeURL("http://10.120.16.173:8080/sso/main_NH.jsp");
        response.sendRedirect(redirURL);
        System.out.println("인증성공");
    }
%>