package com.base.com.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;

public class TestSendHearim {

	public static void main(String[] args) {
		String rcvrIndn	= "e1002274";
		String title			= "테스트 Hearim";
		String content	= "내용 test test";
		String addUrl		= "";
		sendMessengerAlarm(rcvrIndn, title, content, addUrl);
	}

	public static boolean sendMessengerAlarm(String rcvrIndn, String title, String content, String addUrl) {
		boolean bSuccessYn = false;
		
		try {
	    	// title
			if(rcvrIndn == null) {
				throw new IllegalArgumentException("sendMessengerAlarm::rcvrIndn is empty");
			}
			
			// title
			if(title == null) {
				throw new IllegalArgumentException("sendMessengerAlarm::title is empty");
			}
			
			if(title.getBytes().length > 100) {
				throw new IllegalArgumentException("sendMessengerAlarm::title is greater than 100 bytes");
			}
			
			// content
			if(content == null) {
				throw new IllegalArgumentException("sendMessengerAlarm::content is empty");
			}
			
			if(content.getBytes().length > 2000) {
				throw new IllegalArgumentException("sendMessengerAlarm::content is greater than 2000 bytes");
			}
			
			// 메신저 연계 
			String strUrl = "http://10.120.58.113:8080/webmanager/web_alarm.jsp";
		    String strParam1 = "T_CODE=100&B_CODE=101&SENDER=ITSM&SENDERNAME=ITSM";

		    int nConnectTimeout = 1000;
		    int nReadTimeout = 1000;

		    String strReturnStream = null;
		    HttpURLConnection httpConn = null;
		    URL url = null;

		    title = URLEncoder.encode(title, "UTF-8");
		    content = URLEncoder.encode(content, "UTF-8");

		    //String strUrl2 = strUrl + "?" + strParam1 + "&" + "RECEIVER=" + rcvrIndn + "&" + "TITLE=" + title + "&" + "CONTENT=" + content;
		    String strUrl2 = strUrl + "?" + strParam1 + "&" + "RECEIVER=e1002274&" + "TITLE=" + title + "&" + "CONTENT=" + content;

		    url = new URL(strUrl2);
		    httpConn = (HttpURLConnection)url.openConnection();
		    httpConn.setRequestProperty("Content-Type", "text/html");
		    httpConn.setRequestMethod("GET"); // 전송방식
		    httpConn.setConnectTimeout(nConnectTimeout); // 커넥션타임아웃
		    httpConn.setReadTimeout(nReadTimeout); // 읽기타임아웃

		    InputStream inputStream = httpConn.getInputStream();

		    if (inputStream != null) {
		        strReturnStream = "";
		        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
		        String strLine = null;
		        while ((strLine = reader.readLine()) != null) {
		            strReturnStream += strLine;
		        }
		        reader.close();
		    }

		    if (strReturnStream.indexOf("success") != -1) {
		        bSuccessYn = true;
		    }
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (ProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {			
		}
		return bSuccessYn;
	}

}
