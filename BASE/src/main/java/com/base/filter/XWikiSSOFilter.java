package com.base.filter;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class XWikiSSOFilter implements Filter {
    @Override
    public void init(FilterConfig cfg) throws ServletException {
        // 초기화 작업이 필요하면 여기에
    }

    @Override
    public void destroy() {
        // 정리 작업이 필요하면 여기에
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException
    {
        HttpServletRequest reqH = (HttpServletRequest) req;
        HttpServletResponse resH = (HttpServletResponse) res;
        HttpSession session = reqH.getSession(false);
        String uri = reqH.getRequestURI();

        String userId = (session != null)
            ? (String) session.getAttribute("USER_ID")
            : null;

        if (userId != null && !userId.isEmpty()) {

            // 필터가 호출될 때 User_id 가 존재하면 톰캣/JEUS 콘솔에 찍힙니다.
        	// 2025-06-02 21:29:14,279 [XWiki initialization] INFO
        	//System.out.println("uri==================>" + uri);
        	if("/xwiki/".equals(uri)) {
        		String now = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss, SSS").format(new Date());
        		System.out.println(now + " [XWikiSSOFilter] invoked, USER_ID=" + userId);
        	}

            // REMOTE_USER 헤더와 Principal, getRemoteUser()를 오버라이드
            HttpServletRequestWrapper wrapped = new HttpServletRequestWrapper(reqH) {
                @Override
                public String getHeader(String name) {
                    if ("REMOTE_USER".equalsIgnoreCase(name)) {
                        return userId;
                    }
                    return super.getHeader(name);
                }
                @Override
                public java.security.Principal getUserPrincipal() {
                    return () -> userId;
                }
                @Override
                public String getRemoteUser() {
                    return userId;
                }
            };
            chain.doFilter(wrapped, resH);
        } else {
            // USER_ID가 없으면 원본 요청 그대로
            chain.doFilter(reqH, resH);
        }
    }
}
