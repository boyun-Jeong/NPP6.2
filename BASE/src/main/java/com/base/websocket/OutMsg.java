package com.base.websocket;
 
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.logging.Logger;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/ws/outmsg/{nickName}")
public class OutMsg {
	
	// 유저 닉네임
	// 모든 유저 prefix
	@SuppressWarnings("unused")
	private static final String USER_PREFIX = "User"; 
	// 유저 늘어날 때 마다 숫자 늘어남
	@SuppressWarnings("unused")
	private static final AtomicInteger connectionIds = new AtomicInteger(0); 
	
	private static final Logger LOGGER = Logger.getLogger(OutMsg.class.getName());
    /**
     * 연결 대상 집합
     */
    private static final Set<OutMsg> connections = new CopyOnWriteArraySet<OutMsg>();
    

    private String nickName;

    /**
     * WebSocket Session
     */
    private Session session;

    public OutMsg() {
    //	 nickName = USER_PREFIX + connectionIds.getAndIncrement(); // 유저 별명 만들어짐
    }

    /**
     * 열 연결
     * 
     * @param session
     * @param nickName
     * @throws Exception 
     */
    @OnOpen
    public void onOpen(Session session,
            @PathParam(value = "nickName") String nickName) throws Exception {

        this.session = session;
        this.nickName = nickName;

        connections.add(this);
        String message = String.format("System> %s %s", this.nickName,
                " has joined.");
        OutMsg.broadCast(message);
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
        OutMsg.broadCast(message);
        //System.out.println(message);
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
    	OutMsg.broadCast("RtnVal=" + nickName + ">" + message);
    }

    /**
     * 오류 메시지 응답
     * 
     * @param throwable
     */
    @OnError
    public void onError(Throwable throwable) {
       // System.out.println(throwable.getMessage());
    	LOGGER.info(throwable.getMessage());
    }

    /**
     * 방송 정보 보내기 또는
     * 
     * @param message
     * @throws Exception 
     */
    private static void broadCast(String message) throws Exception {
        for (OutMsg chat : connections) {
            try {
                synchronized (chat) {
                    chat.session.getBasicRemote().sendText(message);
                }
            } catch (IOException e) {
                connections.remove(chat);
                LOGGER.warning("fail IOException =" + e);
                try {
                    chat.session.close();
                } catch (Exception e1) {
                	LOGGER.warning("fail Exception =" + e);
                	throw e1;
                }
                OutMsg.broadCast(String.format("System> %s %s", chat.nickName,
                        " has bean disconnection."));
            }
        }
    }
}