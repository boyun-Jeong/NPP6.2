package com.base.com.web;

import java.io.IOException;
import java.net.InetAddress;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import jakarta.servlet.http.HttpServletRequest;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fwk.util.StringUtil;

import java.net.InetAddress;



@Controller
public class FommUnifiedSearchController 
{
	private Logger log = LoggerFactory.getLogger(FommUnifiedSearchController.class); 
	
	@Autowired
	private RestTemplate restTemplate;	
	
	@Value("#{app['unifiedSearch.url.op']}")
	private String searchReqUrlOp;
	
	@Value("#{app['unifiedSearch.url.dev']}")
	private String searchReqUrlDev;

	/*
	private String NITSM_URL 	 = "";
	private String SEARCHREQURL	 = "";
		
	public void setURL(String mode) {
		if("P".equals(mode)) {
			NITSM_URL = "https://nitsm.wemb.co.kr";
			SEARCHREQURL = searchReqUrlOp;
		} else {
			NITSM_URL = "https://nitsmdev.wemb.co.kr";
			SEARCHREQURL = searchReqUrlDev;
		}
	}
	*/
	
	public Map<String, Object> getURL() throws Exception {
		InetAddress server = InetAddress.getLocalHost();
		String serverIp = server.getHostAddress();
		Map<String, Object> retUrlMap = new HashMap<String, Object>();
		
		// P: 운영, D: 개발
		String runMode = serverIp.contains(".100.55.") ? "P" : "D";	
		if("P".equals(runMode)) {
			retUrlMap.put("NITSM_URL"			, "https://nitsm.wemb.co.kr");
			retUrlMap.put("SEARCH_REQURL"		, "unifiedSearch.url.op");
		} else {
			retUrlMap.put("NITSM_URL"			, "https://nitsmdev.wemb.co.kr");
			retUrlMap.put("SEARCH_REQURL"		, "unifiedSearch.url.dev");
		}
		return retUrlMap;
	}
	/**
	 * 
	 * @return
	 * @throws JSONException 
	 * @throws IOException 
	 */
	@RequestMapping(value = "/unifiedSerarch")
	public NexacroResult unifiedSerarch(HttpServletRequest request, @ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException, JSONException, Exception  {
		
		JSONObject jo     = new JSONObject(dsCond);
		 
    	 //운영 or 개발 URL 정보 GET
		 //2024-10-25 sparrow 조치
    	 Map<String, Object> mUrlInfo = getURL();    	
    	 String vNITSM_URL = StringUtil.safe(mUrlInfo.get("NITSM_URL"));
    	 String vSEARCH_REQURL = StringUtil.safe(mUrlInfo.get("SEARCH_REQURL"));
 		
		 //String schUrl = searchReqUrlOp;
    	 String schUrl = vSEARCH_REQURL;
		 String reqUrl = vNITSM_URL;
		 log.debug("vSEARCH_REQURL==" + vSEARCH_REQURL);
		 log.debug("vNITSM_URL==" + vNITSM_URL);
		 
		 if(reqUrl.indexOf("localhost")>-1||reqUrl.indexOf("nitsmdev.wemb.co.kr")>-1) {
			 schUrl = searchReqUrlDev;	
			 // 로컬 SSL 회피
			 if(reqUrl.indexOf("localhost")>-1) {
				 ignrCert();
			 }		 
		 }		
		 
		 
		 NexacroResult result = new NexacroResult();

		 jo.remove("DataSetRowType");
		 
		 HttpHeaders headers = new HttpHeaders();
		 headers.setContentType(new MediaType("application","json",StandardCharsets.UTF_8));
		 headers.setAcceptCharset(java.util.Collections.singletonList(StandardCharsets.UTF_8));
		 
		 HttpEntity<String> entity = new HttpEntity<>(jo.toString(),headers);
		 
		 restTemplate.getMessageConverters().add(0,new StringHttpMessageConverter(StandardCharsets.UTF_8));
		 
		 ResponseEntity<String> response = restTemplate.exchange(schUrl, HttpMethod.POST,entity, String.class);		 
	
		 String responseBody = new String(response.getBody().getBytes());

		 
		 JSONObject rstJson = new JSONObject(responseBody);
		 JSONArray rstArray = rstJson.getJSONArray("resultList");
		 List<Map<String, Object>> rstList = new ArrayList<>();
		 
		 if(rstArray.length() > 0) {
			 for(int k=0;k < rstArray.length(); k++) {
				 if(rstArray.get(k) instanceof JSONArray) {			
					 
					 JSONArray arryRtn = rstArray.getJSONArray(k);				 
					
					 for (int i=0; i< arryRtn.length(); i++) {
						 JSONObject jsonItem = arryRtn.getJSONObject(i);
					 
						 Map<String, Object> mapItem = new HashMap<>();
						 Iterator<String> keys = jsonItem.keys();
						 while (keys.hasNext()) {
							 String key = keys.next();
							 mapItem.put(key, jsonItem.get(key));
						 }
						 rstList.add(mapItem);						 
					 }					 
				 }
			 }			 
		 }	
		 
		 result.addDataSet("dsSchRst", rstList);
		 return result;
	}
	
	// SSL 인증 회피
	private static void ignrCert() {
		TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {

			@Override
			public void checkClientTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
			}

			@Override
			public void checkServerTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
					}

			@Override
			public X509Certificate[] getAcceptedIssuers() {
				return null;
			}
		}};
		
		try {
			SSLContext sc = SSLContext.getInstance("TLS");
			sc.init(null, trustAllCerts, new SecureRandom());
			HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
		} catch(Exception e) {
			
		}
		
	}
	
}
	