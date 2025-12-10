package com.base.fwk.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import org.apache.ibatis.io.Resources;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.dao.FommCodeDAO;

@Controller
@RequestMapping("NacUtil")
public class NacUtil {

	private static Logger log = LoggerFactory.getLogger(NacUtil.class);
	
	@Autowired
	private FommCodeDAO fommCodeDao;

	@RequestMapping("/getIpList")
	public NexacroResult getIpList(@ParamDataSet(name = "dsParams") Map<String, Object> dsParams) throws Exception {

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsIpList", getIpListData(dsParams, StringUtil.safe(dsParams.get("GUBUN"))));		
	    return result;
    }

	public List<Map<String, Object>> getIpListData(Map<String, Object> ipCondMap, String gubun) throws Exception {

		disableSSLVerification();

		String resource = "config.properties";
		Properties properties = new Properties();

		Reader reader = Resources.getResourceAsReader(resource);
    	properties.load(reader);
    	
    	String nacURL = StringUtil.safe(properties.getProperty("nac.url"));
    	String nacApiKey = StringUtil.safe(properties.getProperty("nac.api.key"));

    	String ipAddrStr = "";
    	String sensornId = "";

    	log.debug("getIpListData() GUBUN:[" + gubun + "]");
    	
    	if("CODE".equals(gubun)) {

			Map<String, Object> condMap = new HashMap<String, Object>();
	    	condMap.put("USE_YN", "Y");
	    	condMap.put("UP_CMM_CD", ipCondMap.get("UP_CMM_CD"));
	    	condMap.put("CMM_CD", ipCondMap.get("CMM_CD"));
	    	List<Map<String, Object>> codeList = fommCodeDao.selectGetCode(condMap);
	
	    	if(codeList != null) {
	    		
	    		if(codeList.size() == 1) {
	    			ipAddrStr		= StringUtil.safe(codeList.get(0).get("ITM_VAL_1"));
	    			sensornId	= StringUtil.safe(codeList.get(0).get("ITM_VAL_2"));
	    		}
	
	    	}else {
	    		throw new Exception("IP목록을 조회할 근무장소 내역이 존재하지 않습니다.");
	    	}

    	}else if("IP".equals(gubun)) {
    		ipAddrStr = StringUtil.safe(ipCondMap.get("IP_ADDR"));

    	}else {
    		throw new Exception("IP목록 조회 구분값이 올바르지 않습니다.");
    	}

    	log.debug("getIpListData() SEARCH =======================> ipAddrStr:[" + ipAddrStr + "]");

    	List<Map<String, Object>> rtnListAll = new ArrayList<Map<String,Object>>();
    	List<Map<String, Object>> ipListAll = new ArrayList<Map<String,Object>>();

    	if(!"".equals(ipAddrStr)) {

    		String[] ipList = ipAddrStr.replaceAll(" ", "").split(",");
    		
    		for (int i = 0; i < ipList.length; i++) {

    			Map<String, Object> paramMap = new HashMap<String, Object>();
            	paramMap.put("page", 1);
            	paramMap.put("pageSize", 256);
            	paramMap.put("view", "node");
            	paramMap.put("nid", "All");
            	paramMap.put("apiKey", nacApiKey);
            	paramMap.put("ipUseOption", "all");		//use,unuse,all
            	paramMap.put("ip", ipList[i]);

            	String paramStr = StringUtil.convertMapParamString(paramMap);

            	log.debug("nacURL:[" + nacURL + "?" + paramStr + "]");

        	    URL url = new URL(nacURL + "?" + paramStr);
            	StringBuffer sbReturnStream = new StringBuffer();
            	HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
        	    httpConn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
        	    httpConn.setRequestProperty("Accept", "application/json");
        	    httpConn.setDoInput(true);
        	    httpConn.setDoOutput(true);
        	    httpConn.setUseCaches(false);
        	    httpConn.setRequestMethod("GET");		// 전송방식
        	    httpConn.setConnectTimeout(5000);			// 커넥션타임아웃
        	    httpConn.setReadTimeout(10000);			// 읽기타임아웃
        	    
        	    log.debug("Start executeMethod");
        	    InputStream inputStream = httpConn.getInputStream();
        	    log.debug("End executeMethod");
        		
        	    if (inputStream != null) {
        	        sbReturnStream = new StringBuffer();
        	        BufferedReader bReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
        	        String strLine = null;

        	        while ((strLine = bReader.readLine()) != null) {
        	            sbReturnStream.append(strLine);
        	            //log.debug(strLine);
        	        }	
        	        reader.close();
        	    }
        	    httpConn.disconnect();
//        	    log.debug("sbReturnStream:\n" + sbReturnStream);
        	    
        	    String resultStr = sbReturnStream.toString();
        	    
        	    JSONParser jsonParser = new JSONParser();
        	    JSONObject obj = (JSONObject) jsonParser.parse(resultStr);
        	    JSONArray list = (JSONArray) obj.get("result");

        	    log.debug("list.size()===================>" + list.size());
        	    
        	    for (int j = 0; j < list.size(); j++) {
        			
        	    	JSONObject rowData = (JSONObject) list.get(j);

        	    	Map<String, Object> rowMap = new HashMap<>();
        	    	
        	    	for(Object colNm : rowData.keySet()) {
        	    		
        	    		String colList = StringUtil.safe(ipCondMap.get("COL_LIST"));
        	    		
        	    		if("".equals(colList)) {

        	    			if("NL_IPSTR".equals(colNm) || "NL_NODEID".equals(colNm) || "NL_SENSORNID".equals(colNm)) {
        	    				rowMap.put(StringUtil.safe(colNm), rowData.get(colNm));
        	    			}

        	    		}else {
        	    			
        	    			if(colList.indexOf(colNm.toString()) > -1) {
        	    				rowMap.put(StringUtil.safe(colNm), rowData.get(colNm));
//        	    				log.debug("row=" + j + " COL_NM:[" + colNm + "] VALUE:[" + rowData.get(colNm) + "]");
        	    			}else {
        	    				
        	    				if("NL_IPSTR".equals(colNm) || "NL_NODEID".equals(colNm) || "NL_SENSORNID".equals(colNm)) {
    	        	    			rowMap.put(StringUtil.safe(colNm), rowData.get(colNm));
    	        	    		}
        	    			}
        	    		}
        	    	}
        	    	rowMap.put("USE_YN", "Y");
        	    	rtnListAll.add(rowMap);
        		}
        	    
        	    String[] colNmArr = null;

        	    if(rtnListAll != null) {
    	    		
    	    		colNmArr = new String[rtnListAll.get(0).keySet().size()];
    	    		
    	    		int colIdx = 0;
    	    		for (String colNm : rtnListAll.get(0).keySet()) {
    	    			colNmArr[colIdx] = colNm;
    	    			colIdx++;
					}

        	    }else {
        	    	
        	    	colNmArr = new String[]{"NL_IPSTR", "NL_SENSORNID", "NL_NODEID", "USE_YN"};
        	    }

        	    if("CODE".equals(gubun)) {

        	    	String useYn = StringUtil.safe(ipCondMap.get("USE_YN"));

        	    	log.debug("useYn ========================>" + useYn);

        	    	for (int j = 1; j <= 255; j++) {

        	    		if(j != 10) {	//10번 master라 목록에서 제외

	            	    	String rowIp = ipList[i] + "." + j;
	            	    	Map<String, Object> rowMap = new HashMap<>();
	            	    	
	            	    	int row = -1;
	
	            	    	if(rtnListAll != null) {
	            	    		
	            	    		if(rtnListAll.size() > 0) {
	            	    			
	            	    			for (int k = 0; k < rtnListAll.size(); k++) {
	            	    				
	            	    				String listIp = StringUtil.safe(rtnListAll.get(k).get("NL_IPSTR"));
	            	    				
	            	    				if(listIp.equals(rowIp)) {
	            	    					row = k;
	            	    					break;
	            	    				}
	            	    			}
	            	    		}
	            	    	}
	            	    	
	            	    	if(row > -1) {
	            	    		
	            	    		if("ALL".equals(useYn) || "Y".equals(useYn)) {
//	            	    			log.debug("rtnListAll Add row : [" + row + "]");
	            	    			ipListAll.add(rtnListAll.get(row));
	            	    		}
	
	            	    	}else {
	            	    		
	            	    		if("ALL".equals(useYn) || "N".equals(useYn)) {

		            	    		if("".equals(sensornId)) {
		            	    			throw new Exception("NL_SENSORNID 값이 공통코드에 등록되지 않았습니다.");
		            	    		}
		            	    		
		            	    		for (int k = 0; k < colNmArr.length; k++) {
		    							
		            	    			if("NL_IPSTR".equals(colNmArr[k])) {
		            	    				rowMap.put(colNmArr[k], rowIp);        	    				
		            	    			}else if("NL_SENSORNID".equals(colNmArr[k])) {
		            	    				rowMap.put(colNmArr[k], sensornId);        	    				
		            	    			}else if("USE_YN".equals(colNmArr[k])) {
		            	    				rowMap.put(colNmArr[k], "N");
		            	    			}else {
		            	    				rowMap.put(colNmArr[k], null);
		            	    			}
		    						}
//		            	    		log.debug("ipListAll Add row : [" + row + "]");
		            	    		ipListAll.add(rowMap);
	            	    		}
	            	    	}
        	    		}
    				}

        	    }else if("IP".equals(gubun)) {
        	    	
        	    	if(rtnListAll != null) {
        	    		
        	    		if(rtnListAll.size() > 0) {
        	    			
        	    			int row = -1;
        	    			
        	    			for (int k = 0; k < rtnListAll.size(); k++) {
        	    				
        	    				String listIp = StringUtil.safe(rtnListAll.get(k).get("NL_IPSTR"));
        	    				
        	    				if(listIp.equals(ipList[i])) {
        	    					row = k;
        	    					break;
        	    				}
        	    			}
        	    			
        	    			if(row > -1) {
                	    		ipListAll.add(rtnListAll.get(row));

                	    	}else {
                	    		throw new Exception("조회 결과와 일치하는 IP 목록을 확인할 수 없습니다.");
                	    	}
        	    		}
        	    	}
        	    }
			}
    	}
	    return ipListAll;
    }

	@RequestMapping("/regIp")
	public NexacroResult regIp(@ParamDataSet(name = "dsParams") Map<String, Object> dsParams) throws Exception {

		disableSSLVerification();

		NexacroResult result = new NexacroResult();
		
		Map<String, Object> resultMap = new HashMap<String, Object>();

		String resource = "config.properties";
		Properties properties = new Properties();

		Reader reader = Resources.getResourceAsReader(resource);
    	properties.load(reader);
    	
    	String nacURL = StringUtil.safe(properties.getProperty("nac.url"));
    	String nacApiKey = StringUtil.safe(properties.getProperty("nac.api.key"));

    	resultMap.put("PROC_IP", dsParams.get("IP_ADDR"));
    	resultMap.put("PROC_KEY", dsParams.get("SENSORNID"));
    	
    	JSONObject jsonObject = new JSONObject();
    	jsonObject.put("nl_ipstr", dsParams.get("IP_ADDR"));
    	jsonObject.put("nl_mac", "");
    	jsonObject.put("nl_sensornid", dsParams.get("SENSORNID"));
    	jsonObject.put("nl_genidev", 20);	//PC
    	jsonObject.put("doNotDeleteNode", "true");

    	JSONArray jsonArray = new JSONArray();
    	jsonArray.add(jsonObject);
    	
    	log.debug("regIp() nacURL:[" + nacURL + "]");
    	log.debug("regIp() nl_sensornid:[" + dsParams.get("SENSORNID") + "]");

	    URL url = new URL(nacURL + "?apiKey=" + nacApiKey);
	    
    	StringBuffer sbReturnStream = new StringBuffer();    	
    	HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
	    httpConn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
	    httpConn.setRequestProperty("Accept", "application/json");
	    httpConn.setDoInput(true);
	    httpConn.setDoOutput(true);
	    httpConn.setUseCaches(false);
	    httpConn.setRequestMethod("POST");		// 전송방식
	    httpConn.setConnectTimeout(5000);			// 커넥션타임아웃
	    httpConn.setReadTimeout(10000);			// 읽기타임아웃
	    
	    String strJson = JSONValue.toJSONString(jsonArray);
	    log.debug("regIp() strJson:\n" + strJson);
	    BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(httpConn.getOutputStream(), "UTF-8"));
	    writer.write(strJson);
	    writer.flush();
	    writer.close();
	    
	    log.debug("regIp() Start executeMethod");
	    InputStream inputStream = httpConn.getInputStream();
	    log.debug("regIp() End executeMethod");
		
	    if (inputStream != null) {
	        sbReturnStream = new StringBuffer();
	        BufferedReader bReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
	        String strLine = null;

	        while ((strLine = bReader.readLine()) != null) {
	            sbReturnStream.append(strLine);
	        }	
	        reader.close();
	    }
	    httpConn.disconnect();
	    
	    JSONParser parser = new JSONParser();
    	JSONObject jsonParseObj = (JSONObject) parser.parse(sbReturnStream.toString());

    	JSONArray successArray = (JSONArray) jsonParseObj.get("success");
    	
//    	log.debug("regIp() successArray.size()===================>" + successArray.size());
	    
	    for (int j = 0; j < successArray.size(); j++) {
			
	    	JSONObject rowData = (JSONObject) successArray.get(j);

	    	for(Object colNm : rowData.keySet()) {
	    		
//	    		log.debug("regIp() successArray COL_NM:[" + StringUtil.safe(colNm) + "] VALUE:[" + rowData.get(colNm) + "]");
	    		
	    		if("code".equals(colNm) || "message".equals(colNm)) {
	    			resultMap.put(StringUtil.safe(colNm).toUpperCase(), rowData.get(colNm));
	    		}
	    	}
	    }
    	JSONArray failArray = (JSONArray) jsonParseObj.get("fail");
    	
//    	log.debug("regIp() failArray.size()===================>" + failArray.size());
	    
	    for (int j = 0; j < failArray.size(); j++) {
			
	    	JSONObject rowData = (JSONObject) failArray.get(j);

	    	for(Object colNm : rowData.keySet()) {
	    		
//	    		log.debug("regIp() failArray COL_NM:[" + StringUtil.safe(colNm) + "] VALUE:[" + rowData.get(colNm) + "]");
	    		
	    		if("code".equals(colNm) || "message".equals(colNm)) {
	    			resultMap.put(StringUtil.safe(colNm).toUpperCase(), rowData.get(colNm));
	    		}
	    	}
	    }
    	
	    log.debug("regIp() sbReturnStream:\n" + sbReturnStream);
	    
	    resultMap.put("RTN", sbReturnStream.toString());
	    result.addDataSet("dsResult", resultMap);
	    
	    String code = StringUtil.safe(resultMap.get("CODE"));

	    if("200".equals(code)) {
	    	result.addDataSet("dsIpList", getIpListData(dsParams, "CODE"));
	    }
	    return result;
    }

	@RequestMapping("/deleteIp")
	public NexacroResult deleteIp(@ParamDataSet(name = "dsParams") Map<String, Object> dsParams) throws Exception {

		disableSSLVerification();

		NexacroResult result = new NexacroResult();

		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		String resource = "config.properties";
		Properties properties = new Properties();

		Reader reader = Resources.getResourceAsReader(resource);
    	properties.load(reader);
    	
    	String nacURL = StringUtil.safe(properties.getProperty("nac.url"));
    	String nacApiKey = StringUtil.safe(properties.getProperty("nac.api.key"));

    	String nlNodeId = "";
    	List<Map<String, Object>> rtnListAll = getIpListData(dsParams, "IP");

    	if(rtnListAll != null) {
    		
    		if(rtnListAll.size() > 0) {
    			
    			String ip = StringUtil.safe(dsParams.get("IP_ADDR"));
    			
    			for (int i = 0; i < rtnListAll.size(); i++) {
    				String listIpStr = StringUtil.safe(rtnListAll.get(0).get("NL_IPSTR"));
    				
    				if(ip.equals(listIpStr)) {
    					nlNodeId = StringUtil.safe(rtnListAll.get(0).get("NL_NODEID"));
    					break;
    				}
				}
    		}
    	}
    	
    	resultMap.put("PROC_IP", dsParams.get("IP_ADDR"));
    	resultMap.put("PROC_KEY", nlNodeId);

    	StringBuffer sbReturnStream = new StringBuffer();
    	
    	if(!"".equals(nlNodeId)) {
	    	
    		JSONArray jsonArray = new JSONArray();
        	jsonArray.add(nlNodeId);
	    	
	    	log.debug("deleteIp() nlNodeId:[" + nlNodeId + "]");
	    	log.debug("deleteIp() nacURL:[" + nacURL + "]");
	
	    	URL url = new URL(nacURL + "?apiKey=" + nacApiKey);
	    	HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
		    httpConn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
		    httpConn.setRequestProperty("Accept", "application/json");
		    httpConn.setDoInput(true);
		    httpConn.setDoOutput(true);
		    httpConn.setUseCaches(false);
		    httpConn.setRequestMethod("DELETE");	// 전송방식
		    httpConn.setConnectTimeout(5000);			// 커넥션타임아웃
		    httpConn.setReadTimeout(10000);			// 읽기타임아웃
		    
		    String strJson = JSONValue.toJSONString(jsonArray);
		    log.debug("deleteIp() strJson:\n" + strJson);
		    BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(httpConn.getOutputStream(), "UTF-8"));
		    writer.write(strJson);
		    writer.flush();
		    writer.close();
		    
		    log.debug("deleteIp() Start executeMethod");
		    InputStream inputStream = httpConn.getInputStream();
		    log.debug("deleteIp() End executeMethod");
			
		    if (inputStream != null) {
		        BufferedReader bReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
		        String strLine = null;
	
		        while ((strLine = bReader.readLine()) != null) {
		            sbReturnStream.append(strLine);
		        }	
		        reader.close();
		    }
		    httpConn.disconnect();
		    log.debug("deleteIp() sbReturnStream:\n" + sbReturnStream);

    	}else {
    		//throw new Exception("NL_NODEID를 확인할 수 없어 삭제 처리가 불가능 합니다.");
    		resultMap.put("CODE", "999");
    		resultMap.put("MESSAGE", "NL_NODEID를 확인할 수 없어 삭제 처리가 불가능 합니다.");
    		resultMap.put("RTN", "NL_NODEID를 확인할 수 없어 삭제 처리가 불가능 합니다.");
    	    result.addDataSet("dsResult", resultMap);
    	    return result;
    	}
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonParseObj = (JSONObject) parser.parse(sbReturnStream.toString());

    	JSONArray successArray = (JSONArray) jsonParseObj.get("success");
    	
//    	log.debug("deleteIp() successArray.size()===================>" + successArray.size());
	    
	    for (int j = 0; j < successArray.size(); j++) {
			
	    	JSONObject rowData = (JSONObject) successArray.get(j);

	    	for(Object colNm : rowData.keySet()) {
	    		
//	    		log.debug("deleteIp() successArray COL_NM:[" + StringUtil.safe(colNm) + "] VALUE:[" + rowData.get(colNm) + "]");
	    		
	    		if("code".equals(colNm) || "message".equals(colNm)) {
	    			resultMap.put(StringUtil.safe(colNm).toUpperCase(), rowData.get(colNm));
	    		}
	    	}
	    }
    	JSONArray failArray = (JSONArray) jsonParseObj.get("fail");
    	
//    	log.debug("regIp() failArray.size()===================>" + failArray.size());
	    
	    for (int j = 0; j < failArray.size(); j++) {
			
	    	JSONObject rowData = (JSONObject) failArray.get(j);

	    	for(Object colNm : rowData.keySet()) {
	    		
//	    		log.debug("regIp() failArray COL_NM:[" + StringUtil.safe(colNm) + "] VALUE:[" + rowData.get(colNm) + "]");
	    		
	    		if("code".equals(colNm) || "message".equals(colNm)) {
	    			resultMap.put(StringUtil.safe(colNm).toUpperCase(), rowData.get(colNm));	    			
	    		}
	    	}
	    }

    	resultMap.put("RTN", sbReturnStream.toString());
    	result.addDataSet("dsResult", resultMap);
    	
    	String code = StringUtil.safe(resultMap.get("CODE"));

	    if("200".equals(code)) {
	    	result.addDataSet("dsIpList", getIpListData(dsParams, "CODE"));
	    }
	    return result;
    }

	//SSL security Exception 방지
	public static void disableSSLVerification() {

		try {

			TrustManager[] trustAllcerts = new TrustManager[] { new javax.net.ssl.X509TrustManager() {
					@Override
					public X509Certificate[] getAcceptedIssuers() {
						// TODO Auto-generated method stub
						return null;
					}
					
					@Override
					public void checkServerTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
						// TODO Auto-generated method stub
					}

					@Override
					public void checkClientTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
						// TODO Auto-generated method stub
					}
				}
			};
	
			SSLContext sc = SSLContext.getInstance("SSL");
	    	sc.init(null,  trustAllcerts, new SecureRandom());
	    	HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
	    	
	    	HostnameVerifier allHostsValid = new HostnameVerifier() {
				@Override
				public boolean verify(String arg0, SSLSession arg1) {
					// TODO Auto-generated method stub
					return true;
				}
			};
			HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);

		}catch(Exception e) {}
	}	 
}