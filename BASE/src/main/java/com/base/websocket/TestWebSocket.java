package com.base.websocket;

import java.net.Inet4Address;
import java.net.URI;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.handshake.ServerHandshake;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestWebSocket {

	private static Logger log = LoggerFactory.getLogger(TestWebSocket.class);
	
    public static void main(String[] args) throws Exception {

    	log.debug(Inet4Address.getLocalHost().getHostAddress());
//    	String url = "ws://" + Inet4Address.getLocalHost().getHostAddress() + ":8081/spp/ws/itsm/SPP_MSG";	//localhost:8081/spp/ws/itsm/SPP_MSG/";
//    	String url = "ws://10.120.120.62:8080/spp/ws/itsm/SPP_MSG";	//localhost:8081/spp/ws/itsm/SPP_MSG/";
    	String url = "ws://10.120.120.62:22101/spp/ws/itsm/SPP_MSG";	//localhost:8081/spp/ws/itsm/SPP_MSG/";
        WebSocketClient wc = new WebSocketClient(new URI(url), new Draft_6455()) {

            @Override
            public void onOpen(ServerHandshake handshakedata) {
            	log.debug("[TestWebSocket] onOpen() handshakedata.getHttpStatusMessage() : {}", handshakedata.getHttpStatusMessage());
            }
            @Override
            public void onMessage(String message) {
                log.debug("[TestWebSocket] onMessage() message : {}", message);
            }
            @Override
            public void onError(Exception ex) {
            	log.debug("[TestWebSocket] onError() message : {}", ex.getMessage());
            }
            @Override
            public void onClose(int code, String reason, boolean remote) {
            	log.debug("[TestWebSocket] onClose() reason : " +  reason + " remote : " + remote);
            }
        };

        boolean result = wc.connectBlocking();
        log.debug("[TestWebSocket] main() 클라이언트 접속대기 중 result:[{}]", result);
    
        //메시지type¶수신자목록(,구분자)¶메세지내용
        String message = "01¶1¶테스트 메시지발송";
        wc.send(message);        
        wc.close();
        System.exit(1);
    }
}