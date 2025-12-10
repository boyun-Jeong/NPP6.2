package com.base.com.web;

import java.io.IOException;
import java.io.Reader;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.base.com.service.FommMenuService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * 
 * <pre>
 * @title   
 * -        시스템 메뉴권한 조회 Controller
 * @package com.base.com.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    WEMB	최초작성
 */
@Controller
@RequestMapping("FommMenu")
public class FommMenuController {

	private Logger log = LoggerFactory.getLogger(FommMenuController.class);
	
	@Inject
	private Provider<SessionContext> provider;
	
	@Autowired
	private FommMenuService fommMenuSvc;

	/**
	 * 사용자별 메뉴/메뉴권한/즐겨찾기메뉴 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectUserMenu")
	public NexacroResult selectUserMenu(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IOException, SQLException
	{
		NexacroResult result = new NexacroResult();

		SessionContext sc = provider.get();
		String userId = sc.getScUserId();
		if( "".equals(userId)) {
			return result;
		}
		
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("USER_ID", StringUtil.safe(dsCond.get("USER_ID")));
		
		for(String colNm : condMap.keySet()){			
			log.debug("[condMap] colNm:[" + colNm + "] value:[" + condMap.get(colNm) + "]");
		}

		// SPP 메뉴 조회
		List<Map<String, Object>> gdsMenu =  fommMenuSvc.selectUserMenu(condMap);

		//개발 UTIL용 메뉴 테이블이 존재하면 개발 Util용 메뉴 추가
		int devMenuTblCnt = fommMenuSvc.selectTableCount("FOMM_DEV_MENU_MT");
		if(devMenuTblCnt > 0) {
			List<Map<String, Object>> selMenu =  fommMenuSvc.selectDevMenu(condMap);	//개발 UTIL용 메뉴
			gdsMenu.addAll(selMenu);
		}
		result.addDataSet("gdsMenu", gdsMenu);
		
		// 즐겨찾기 메뉴 조회
		dsCond.put("MY_MENU_YN", "Y");
		List<Map<String, Object>> gdsMyMenu = fommMenuSvc.selectUserMenu(condMap);
		result.addDataSet("gdsMyMenu", gdsMyMenu);
		return result;
	}
	
	
	/**
	 * 테이블 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectTableList")
	public NexacroResult selectTableList(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		List<Map<String, Object>> dsTblList =  fommMenuSvc.selectTableList(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsTblList", dsTblList);

		return result;
	}
	
	/**
	 * 테이블 컬럼 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectTableColumnList")
	public NexacroResult selectTableColumnList(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		List<Map<String, Object>> dsTblColList =  fommMenuSvc.selectTableColumnList(dsCond);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsTblColList", dsTblColList);

		return result;
	}
	
	
	
	/**
	 * 사용자별 즐겨찾기 메뉴 저장
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/saveMyMenu")
	public NexacroResult saveBkmkMenu(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
									, @ParamDataSet(name = "gdsMyMenu", required=false) List<Map<String, Object>> gdsMyMenu) throws IOException, SQLException
	{
		fommMenuSvc.saveBkmkMenu(gdsMyMenu);
		
		gdsMyMenu =  fommMenuSvc.selectUserMenu(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("gdsMyMenu", gdsMyMenu);

		return result;
	}
	
	
	/**
	 * 사용로그(사용자 메뉴접근) 추가
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/saveUserLog")
	public NexacroResult saveUserLog(HttpServletRequest req, HttpServletResponse res
									, @ParamVariable(name = "MENU_ID") String MENU_ID
									, @ParamVariable(name = "MENU_NM") String MENU_NM
									, @ParamVariable(name = "MENU_URL") String MENU_URL )
	{
		NexacroResult result = new NexacroResult();
		
		String serverIp = "";
		InetAddress local  = null;
		try {
			local = InetAddress.getLocalHost();
		}
		catch(Exception e) {
			//2024-10-25 Sparrow 조치
			log.error("FommMenuController saveUserLog >> catch() " + e.getMessage());
		    //e.printStackTrace();			
		}
		
		if( local != null)	
			serverIp = local.getHostAddress();
		
		String clientIp = getClientIp(req);
		
		fommMenuSvc.saveUserLog(MENU_ID, MENU_NM, MENU_URL, serverIp, clientIp);
		return result;
	}
	
	
	
	public String getClientIp(HttpServletRequest req)
	{
		log.info("getClientIp");
		String ip = "";
		String[] headers = {  "X-Forwarded-For"
							, "Proxy-Client-IP"
							, "WL-Proxy-Client-IP"
							, "HTTP_CLIENT_IP"
							, "HTTP_X_FORWARDED_FOR"
							, "X-Real-IP"
							, "X-RealIP"
							, "REMOTE_ADDR"
							};
		for(int i = 0; i < headers.length; i++)
		{
			ip = req.getHeader(headers[i]);
			if( ip != null && !"".equals(ip) ) {
				log.info(headers[i] + " :: " + ip);
				break;
			}
		}
		
		if (ip == null || "".equals(ip) ) {
			ip = req.getRemoteAddr();
			log.info("getRemoteAddr :: " + ip);
		}
		
		if( ip.equals("0:0:0:0:0:0:0:1") || ip.equals("127.0.0.1") ) {
			InetAddress address = null;
			try {
				address = InetAddress.getLocalHost();
			} catch(UnknownHostException e) {
				log.info("InetAddress.getLocalHost Exception " + e.getMessage());
				//e.printStackTrace();
			}
			
			//20241025-sparrow조치
			if(address != null) {
				ip = address.getHostAddress();
				log.info("getHostAddress() :: " + ip);
			} else {
				log.info("ERROR getHostAddress() :: " + ip);
			}
		}
		
		return ip;
	}
}