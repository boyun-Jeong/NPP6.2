package com.base.websocket;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.base.fwk.util.StringUtil;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import oracle.jdbc.proxy.annotation.OnError;

@ServerEndpoint(value = "/spp/ws/itsm/{userId}")
public class SppSocketMsg {

	// 모든 유저 prefix
	@SuppressWarnings("unused")
	private static final String USER_PREFIX = "User";

	// 유저 늘어날 때 마다 숫자 늘어남
	@SuppressWarnings("unused")
	private static final AtomicInteger connectionIds = new AtomicInteger(0);
	
	private static final Logger log = LoggerFactory.getLogger(SppSocketMsg.class);
	
    /**
     * 연결 대상 집합
     */
    private static final Set<SppSocketMsg> connections = new CopyOnWriteArraySet<SppSocketMsg>();

    private String userId;

    /**
     * WebSocket session
     */
    private Session wSession;

    /**
     * 열 연결
     * @param wSession
     * @param nickName
     * @throws Exception 
     */
    @OnOpen
    public void onOpen(Session wSession, @PathParam(value = "userId") String userId) throws Exception {

        this.wSession = wSession;
        this.userId = userId;

        connections.add(this);
        String message = String.format("System> %s %s", this.userId, " WebSocket 접속");
        String port = StringUtil.safe(System.getProperty("PORT"), "8080");
		log.debug("[SppSocketMsg] onOpen() message : " + message + " port:[" + port + "]");
    }

    /**
     * 연결 종료
     * @throws Exception 
     */
    @OnClose
    public void onClose() throws Exception {
        connections.remove(this);
        String message = String.format("System> %s, %s", this.userId, " WebSocket 접속 해제");
        log.debug("[SppSocketMsg] onClose() message : {}", message);
    }

    /**
     * 수신 메시지
     * @param message
     * @param nickName
     * @throws Exception 
     */
    @OnMessage
    public void onMessage(String message, @PathParam(value = "userId") String senderId) throws Exception {
    	
    	log.debug("[SppSocketMsg] onMessage() ##### message : {}", message);
    	log.debug("[SppSocketMsg] onMessage() ##### userId : {}", senderId);
    	
    	try {
	    	String[] parts = message.split("¶");
	    	
	    	if(parts != null) {
	    		log.debug("[SppSocketMsg] onMessage() ##### parts.length : {}", parts.length);
	    	}

	    	String type			= "";
	    	String targetId	= "";
	    	String msgCont	= "";
	    	
	    	if(parts.length > 1) {
	    		type	= StringUtil.safe(parts[0]).replaceAll(" ","");
	    		targetId	= StringUtil.safe(parts[1]).replaceAll(" ","");

		    	if(parts.length> 2) {
		    		msgCont	= StringUtil.safe(parts[2]);
		    	}
	
		    	//type [01 : 슬라이드, 02 : 알림, 03 : 쪽지]
		    	if(!"".equals(type)) {
					broadCast(senderId, type, targetId, msgCont);	// 특정 사용자에게 메세지 전송
		    	}
				log.debug("[SppSocketMsg] onMessage() type :{}, targetId : {}, 전송 메시지 : {}", type, targetId, msgCont);
	    	}

    	}catch(Exception e) {
    		e.printStackTrace();
    		Thread.interrupted();
    	}
    }

    /**
     * 오류 메시지 응답
     * @param throwable
     */
    @OnError
    public void onError(Throwable throwable) {
    	log.debug("[SppSocketMsg] onError() 에러메시지 : {}", throwable.getMessage());
    }

    /**
     * Clinet로 메시지 전송
     * @param message
     * @ type : [01 : 슬라이드, 02 : 알림, 03 : 쪽지]
     * @throws Exception 
     */
    private static void broadCast(String sendId, String type, String targetId, String message) throws Exception {

    	String port = StringUtil.safe(System.getProperty("PORT"), "8080");
		log.debug("[SppSocketMsg] broadCast() port:[" + port + "]");
		
    	log.debug("연결 Client 수 : " + connections.size());

        for (SppSocketMsg client : connections) {

        	log.debug("client.nickName : " + client.userId + " targetId : " + targetId);

        	if( !client.userId.equals(sendId) && (targetId.indexOf(client.userId) > -1 || "".equals(targetId) ) ) {

        		try {
        			synchronized (client) {
        				client.wSession.getBasicRemote().sendText(type + "¶" + message);
	                	log.debug("[SppSocketMsg] broadCast() [메세지TYPE]:[{}] [{}]님이 [{}] 에게 메세지 전송. [메세지 내용] : {} ", type, sendId, client.userId, message);	                	
	                }

	            }catch (IOException e) {

	            	connections.remove(client);
	            	log.debug("[SppSocketMsg] broadCast() fail IOException : " + e.getMessage());

	                try {
	                	client.wSession.close();

	                }catch (Exception e1) {
	                	log.debug("[SppSocketMsg] broadCast() fail Exception : " + e1.getMessage());
	                	throw e1;
	                }
	            }
        	}
        }
    }
}