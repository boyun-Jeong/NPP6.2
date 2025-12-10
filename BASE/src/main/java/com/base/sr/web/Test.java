package com.base.sr.web;

import java.net.URLEncoder;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.base.fwk.util.StringUtil;

public class Test {

	private static Logger log = LoggerFactory.getLogger(Test.class);
	
	public static void main(String[] args) throws Exception {
		
		HttpClient client = new HttpClient();
		PostMethod method = new PostMethod("https://newrimsdev.wemb.co.kr/webPage/dataModiNew.jsp");//	itsmKey=123xxx
		
		try {
			method.setParameter("itsmKey", URLEncoder.encode("TT202408280002", "UTF-8"));
			System.out.println("method CALL");
			client.setConnectionTimeout(10000);
			client.setTimeout(600000);
			client.executeMethod(method);

		}catch(Exception e) {
			//2024-10-25 Sparrow 조치
			log.error("Test main >> catch() " + e.getMessage());			
			//System.out.println("[Exception]:\n" + e.getMessage());

		}finally {			
			System.out.println("finally ::: ");
			String resText = method.getResponseBodyAsString();			
			System.out.println("responseText\n" + resText);
			System.out.println("method.getStatusCode() : " + method.getStatusCode());

			if(StringUtil.isJSON(resText)) {
				Map<String, Object> resMap = new HashedMap<String, Object>();
				JSONParser parser = new JSONParser();
				resMap = (Map<String, Object>) parser.parse(resText);
				System.out.println("status:[" + resMap.get("status") + "]");
				System.out.println("message:[" + resMap.get("message") + "]");
			}
			
			client = null;
			method = null;
		}
	}
}