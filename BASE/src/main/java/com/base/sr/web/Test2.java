package com.base.sr.web;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.base.sr.service.impl.SRCommServiceImpl;

public class Test2 {

	@Autowired
	private SRCommServiceImpl srcommSvc;
	
	private static Logger log = LoggerFactory.getLogger(Test2.class);
	
	public static void main(String[] args) throws Exception {
		
		Map<String, Object> dsCond = new HashMap<String, Object>();
		BufferedReader br = null;

		Map<String, Object> resultMap = new HashMap<String, Object>();
		HttpURLConnection conn = null;
		String rtnStr = "";
		
		InputStreamReader isr = null;
		/*
		try {
			
			String urlStr = "https://newrimsdev.wemb.co.kr/webPage/dataModiNew.jsp?itsmKey=123xxx";
			log.debug("URL:[" + urlStr + "]");

			URL url = new URL(urlStr);

			log.debug("==============================================================URL SETTING======================================================");
			
			StringBuilder postData = new StringBuilder();
			
			postData.append(URLEncoder.encode("itsmKey", "UTF-8"));
			postData.append("=");
			postData.append(URLEncoder.encode("123xxx", "UTF-8"));
			
//			postData.append("=");
//			postData.append(URLEncoder.encode(StringUtil.safe(params.getValue()), "UTF-8"));
//	
//			//Map에 담아온 데이터 셋팅해주기
//			for(Map.Entry<String, Object> params : dsCond.entrySet()) {
//				
//				if(postData.length() != 0)	postData.append("&");
//				postData.append(URLEncoder.encode(params.getKey(), "UTF-8"));
//				postData.append("=");
//				postData.append(URLEncoder.encode(StringUtil.safe(params.getValue()), "UTF-8"));
//			}
			byte[] postDataBytes = postData.toString().getBytes("UTF-8");

			//URL 연결
			conn = (HttpURLConnection) url.openConnection();
			
			log.debug("conn.getPermission()");
			log.debug("==============================================================openConnection======================================================");
			
			conn.setConnectTimeout(5000);
			
			log.debug("==============================================================setConnectTimeout======================================================");
			
			//conn.setReadTimeout(3000);
			log.debug("conn.getReadTimeout()::::: " + conn.getReadTimeout());
			
			log.debug("==============================================================setReadTimeout======================================================");

			//method setting
			//conn.setRequestMethod("GET");
			conn.setRequestMethod("POST");
	
			log.debug("==============================================================setRequestMethod======================================================");
			
			//받는 API따라 맞는 content-Type을정해주면된다.
			conn.setRequestProperty("Content-Type", "text/html;charset=UTF-8");
//			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			
			log.debug("==============================================================setRequestProperty======================================================");
			
			//content-length로 보내는 데이터의 길이
			conn.setRequestProperty("content-Length", String.valueOf(postDataBytes.length));

			//서버에서 온 데이터를 출력할 수 있는 상태인지
			conn.setDoOutput(true);
			
//			JSONObject commands = new JSONObject();
			
			int resCode = conn.getResponseCode();
			String resMsg = conn.getResponseMessage();

			log.debug("resCode:[" + resCode + "]\nresMsg:[" + resMsg + "]");

						
			if(resCode < HttpURLConnection.HTTP_BAD_REQUEST) {
				log.debug("==============================================================111 resCode < HttpURLConnection.HTTP_BAD_REQUEST======================================================");
				isr = new InputStreamReader(conn.getInputStream(), "UTF-8");
				log.debug("==============================================================222 resCode < HttpURLConnection.HTTP_BAD_REQUEST======================================================");
			}else {
				log.debug("==============================================================ELSE 111 resCode < HttpURLConnection.HTTP_BAD_REQUEST======================================================");
				isr = new InputStreamReader(conn.getErrorStream(), "UTF-8");
				log.debug("==============================================================ELSE 222 resCode < HttpURLConnection.HTTP_BAD_REQUEST======================================================");
			}
			
			br = new BufferedReader(isr);
			log.debug("==============================================================new BufferedReader======================================================");
			StringBuilder sb = new StringBuilder();
			String line = "";
			
			while( (line = br.readLine()) != null) {
				sb.append(line);
			}
			
			log.debug("==============================================================while END======================================================");

			if(sb != null) {
				rtnStr = sb.toString();
				log.debug("sb.toString() :::::::\n" + sb.toString());
			}
				
//			commands = new JSONObject(sb.toString());
//			log.debug("commands::::\n" + commands);
//			resultMap = (Map<String, Object>) parser.parse(jsonStr);

		}catch(Exception e) {
			log.debug("CATCH e.getMessage()" + e.getMessage());
			throw new Exception(e.getMessage());

		}finally {
			log.debug("Finally~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
			if(conn != null) {
				log.debug("conn != null");
				conn.disconnect();
			}
			if( br != null) {
				br.close();
			}
			if( isr != null) {
				isr.close();
			}
			
		}
		//return ResponseEntity.ok(rtnStr);
 
		*/
	}

}
