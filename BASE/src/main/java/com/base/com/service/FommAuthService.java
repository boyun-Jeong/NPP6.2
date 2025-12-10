package com.base.com.service;

import java.util.List;
import java.util.Map;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;

/**
 * 
 * <pre>
 * @title   
 * -        Servlce Sample Intreface
 * @package com.base.com.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.04.00.	WEMB	  	최초작성
 */
public interface FommAuthService {

	/**
	 * login 
	 * @param dsLogin
	 */
	public List<Map<String, String>> authenticate(Map<String, Object> dsLogin) throws Exception;
	
	
	public void modifyLoginInfo(Map<String, Object> dsLogin);
	
	// PW FAIL CNT
	public List<Map<String, Object>> selectPwFailCnt(Map<String, Object> dsLogin);
	public void addPwFailCnt(Map<String, Object> dsLogin);
	
	
	/**
	 * login 
	 * @param dsLogin
	 */
	List<Map<String, String>> settingUser(List<Map<String, String>> userList);
	public List<Map<String, String>> changeUser(String UserId);
	/**
	 * session check
	 * @param userId
	 */
	public Map<String, Object> sessCheck(String userId);
	
	
	/**
	 * 사용자 비밀번호 변경
	 * @param searchMap
	 */
	public void changePw(List<Map<String, Object>> dsFommUserMt)  throws Exception;
	
	// 사용자 비밀번호 변경 이력 조회
	public List<Map<String, Object>> selectUserPwChgHist(Map<String, Object> dsCond);
	
	// 관리자 가능 IP 조회
	public List<Map<String, Object>> selectAdminIp(Map<String, Object> dsCond);
		
		
	/**
	 * menu권한 check
	 * @param searchMap
	 */
	public NexacroResult getMenuAuth(String authDiv);

	/**
	 * menu권한 존재여부 체크
	 * @param userId
	 */
	public String selectUserMenuAuthYn(String userId);

	public List<Map<String, Object>> baseExec(Map<String, Object> dsCond) throws Exception;
	
	public NexacroResult getMenuAuthEx(String authDiv,String strMenuId, String strUserId, String strLmpid);
}
