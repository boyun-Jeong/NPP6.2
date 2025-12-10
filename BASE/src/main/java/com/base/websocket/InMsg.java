package com.base.websocket;
 

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.logging.Logger;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import oracle.jdbc.proxy.annotation.OnError;

@ServerEndpoint(value = "/spp/ws/inmsg/{nickName}")
public class InMsg {
	
	// 유저 닉네임
	// 모든 유저 prefix
	@SuppressWarnings("unused")
	private static final String USER_PREFIX = "User"; 
	// 유저 늘어날 때 마다 숫자 늘어남
	@SuppressWarnings("unused")
	private static final AtomicInteger connectionIds = new AtomicInteger(0);
	
	private static final Logger LOGGER = Logger.getLogger(InMsg.class.getName());
	
    /**
     * 연결 대상 집합
     */
    private static final Set<InMsg> connections = new CopyOnWriteArraySet<InMsg>();
    

    private String nickName;

    /**
     * WebSocket session
     */
    private Session wSession;
    
    /**
     * Http session
     */
    
	
    public InMsg() {
    //	 nickName = USER_PREFIX + connectionIds.getAndIncrement(); // 유저 별명 만들어짐
    }

    /**
     * 열 연결
     * 
     * @param wSession
     * @param nickName
     * @throws Exception 
     */
    @OnOpen
    public void onOpen(Session wSession,
            @PathParam(value = "nickName") String nickName) throws Exception {

        this.wSession = wSession;
        this.nickName = nickName;

        connections.add(this);
        String message = String.format("System> %s %s", this.nickName,
                " has joined.");
        
         InMsg.broadCast(message);
        LOGGER.info("----------------- connections : " + connections);
    }

    /**
     * 연결 끊기
     * @throws Exception 
     */
    @OnClose
    public void onClose() throws Exception {
        connections.remove(this);
        String message = String.format("System> %s, %s", this.nickName,
                " has disconnection.");
        InMsg.broadCast(message);
        LOGGER.info(message);
    }

    /**
     * 수신 메시지
     * 
     * @param message
     * @param nickName
     * @throws Exception 
     */
    @OnMessage
    public void onMessage(String message,
            @PathParam(value = "nickName") String nickName) throws Exception {
    	
    	InMsg.broadCast("RtnVal=" + nickName + ">" + message);
    	System.out.println("##### nickName onMessage : "+nickName);
		String[] parts = message.split(":");
		
		if(parts.length > 1) {
			String senderId = parts[0];
			String targetNickName = parts[1];
			String messageContent = parts[2];
			
			// 특정 사용자에게 메세지 전송
			InMsg.uniCast(senderId, messageContent, targetNickName);
		}
		
		
    	LOGGER.info("---------------- message 종류 확인 : " + message);
    }

    /**
     * 오류 메시지 응답
     * 
     * @param throwable
     */
    @OnError
    public void onError(Throwable throwable) {
    	LOGGER.info(throwable.getMessage());
    }

    /**
     * 방송 정보 보내기 또는
     * 
     * @param message
     * @throws Exception 
     */
    private static void broadCast(String message) throws Exception {
        for (InMsg chat : connections) {
            try {
                synchronized (chat) {
                    chat.wSession.getBasicRemote().sendText(message);
                }
            } catch (IOException e) {
                connections.remove(chat);
                LOGGER.warning("fail IOException =" + e);
                try {
                    chat.wSession.close();
                } catch (Exception e1) {
                	LOGGER.warning("fail Exception =" + e1);
                	throw e1;
                }
                InMsg.broadCast(String.format("System> %s %s", chat.nickName,
                        " has bean disconnection."));
            }
        }
    }
    
  /**
  * 특정 사용자에게만 메세지 보내기 (unicast)
  * 
  * @param message
  * @param targetUser
  * @throws Exception 
  */
    private static void uniCast(String userId, String message, String target) throws Exception {
    	LOGGER.info(userId + "님이 " + target + "에게 메세지를 보냈습니다 : " + message);
        for (InMsg client : connections) {
        	if(client.nickName.equals(target)) {
	            try {
	                synchronized (client) {
	                	// 여기서 특정 유저에게 전송하는 로직 처리
	                	client.wSession.getBasicRemote().sendText(userId + ": " + message);
	                	LOGGER.info(userId + "님이 " + target + "에게 메세지를 보냈습니다 : " + message);
	                }
	            } catch (IOException e) {
	                LOGGER.warning("fail IOException =" + e);
	            }
            break; // 찾았으면 루프 종료
        	}
	    }
	}
	    

}