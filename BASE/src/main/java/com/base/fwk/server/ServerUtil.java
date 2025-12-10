package com.base.fwk.server;

import java.io.Reader;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import jakarta.servlet.http.HttpServletRequest;

import org.apache.ibatis.io.Resources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import com.base.fwk.util.StringUtil;

public class ServerUtil {

	private static Logger log = LoggerFactory.getLogger(ServerUtil.class);

	//ServerIP를 리턴한다.
	public static String getServerIP() throws Exception {
		String serverIP = InetAddress.getLocalHost().getHostAddress();
	    log.debug("ServerUtil.getServerIP():[" + serverIP + "]");
	    return serverIP; 
	}

	//ClientIP를 리턴한다.
	public static String getClientIP(HttpServletRequest request) {
	    String clientIP = null;
	    boolean isIpInHeader = false;

	    List<String> headerList = new ArrayList<>();
	    headerList.add("X-Forwarded-For");
	    headerList.add("HTTP_CLIENT_IP");
	    headerList.add("HTTP_X_FORWARDED_FOR");
	    headerList.add("HTTP_X_FORWARDED");
	    headerList.add("HTTP_FORWARDED_FOR");
	    headerList.add("HTTP_FORWARDED");
	    headerList.add("Proxy-Client-IP");
	    headerList.add("WL-Proxy-Client-IP");
	    headerList.add("HTTP_VIA");    
	    headerList.add("IPV6_ADR");

	    for (String header : headerList) {
	    	clientIP = request.getHeader(header);
	        if (StringUtils.hasText(clientIP) && !clientIP.equals("unknown")) {
	            isIpInHeader = true;
	            break;
	        }
	    }

	    if (!isIpInHeader) {
	    	clientIP = request.getRemoteAddr();
	    }
	    log.debug("ServerUtil.getClientIp(HttpServletRequest):[" + clientIP + "]");
	    return clientIP;
	}

	/*
	public static String getServerIPaddr() {
	    try {
	        Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
	        while(interfaces.hasMoreElements()) {
	            NetworkInterface ni = interfaces.nextElement();
	            
	            //MAC 주소 조회
	            byte[] hardwareAddress = ni.getHardwareAddress();
	            
	            //Virtual Box의 MAC 주소 형태의 차이로 구별
	            boolean virtual = false;
	            if(hardwareAddress != null) {
	                //hardwareAddress와 localIp 값을 각각 출력해보고
	                //Virtual Box IP가 아닐 때의 MAC 주소를 아래 조건문을 통해 필터링
	                if(hardwareAddress[0] != -44)
	                    virtual = true;
	            }
	            if(virtual) continue;
					
	            for(InterfaceAddress addr : ni.getInterfaceAddresses()) {
	                InetAddress address = addr.getAddress();
	                if(address.isSiteLocalAddress()) {
	                    //주소 문자열에서 /가 나오는 것을 치환
	                    String localIp = addr.getAddress().toString().replace("/", "");
	                    log.debug("localIp:[" + localIp + "]");
	                    return localIp;
	                }
	            }
	        }
	    } catch (SocketException e) {
	        e.printStackTrace();
	    }
			
	    //Virtual Box가 없는 경우 위에서 걸리지 않는 것으로 보임
	    //따라서, 위에서 반환되지 않은 경우
	    //서버 IP를 조회하는 기존 코드를 추가 작성
	    try {
	        return InetAddress.getLocalHost().getHostAddress();
	    } catch (UnknownHostException e) {
	        e.printStackTrace();
	    }
	    
	    return null;
	}
	*/

	//현재 서버가 개발 서버인지 체크
	public static boolean isDevServer(HttpServletRequest request) throws Exception {

		Properties properties = new Properties();

		//properties 파일의 udp정보를 가져온다.
		String resource = "config.properties";
		Reader reader = Resources.getResourceAsReader(resource);
		properties.load(reader);
		
		String devServerIP = StringUtil.safe(properties.getProperty("dev.server.ip"));
		
		String serverIP = getServerIP();
		if(serverIP.equals(devServerIP)) {
			return true;
		}else {
			return false;
		}
	}
	
	//현재 서버가 로컬 서버인지 체크
	public static boolean isLocalServer(HttpServletRequest request) throws Exception {
		String serverIP = getServerIP();
		String clientIP = getClientIP(request);

		log.debug("ServerUtil.isLocalServer() serverIP :[" + serverIP + "] clientIP:[" + clientIP + "]");
		if("127.0.0.1".equals(clientIP) || "0:0:0:0:0:0:0:1".equals(clientIP)) {
			return true;
		}else {
			//String serverIP = getServerIP();
			
			if(clientIP.equals(serverIP)) return true;
			else return false;
		}
	}
}