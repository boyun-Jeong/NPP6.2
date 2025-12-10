package com.base.com.service.impl;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.dao.FommMenuDAO;
import com.base.com.service.FommMenuService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 ServiceImpl Class
 * @package com.base.com.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 00.	WEMB		최초작성
 */
@Service
public class FommMenuServiceImpl implements FommMenuService {

	private Logger log = LoggerFactory.getLogger(FommMenuService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommMenuDAO fommMenuDao;

	/**
	 * 사용자 메뉴 조회
	 * @throws SQLException 
	 * @throws IOException 
	 */
	@Override
	public List<Map<String, Object>> selectUserMenu(Map<String, Object> dsCond) 
	{
//		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
//		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		List<Map<String, Object>> result = fommMenuDao.selectUserMenu(dsCond); 
		
		return result;
	}
	
	/**
	 * 개발자용 UTIL 메뉴 LIST 조회
	 */
	@Override
	public List<Map<String, Object>> selectDevMenu(Map<String, Object> dsCond) 
	{
		return fommMenuDao.selectDevMenu(dsCond);
	}

	/**
	 * 테이블 존재 여부 조회(건수를 리턴)
	 */
	@Override
	public Integer selectTableCount(String tblNm) {
		Map<String, Object> dsCond = new HashMap<>();
		dsCond.put("TBL_NM", tblNm);
		return fommMenuDao.selectTableCount(dsCond);
	}
	
	/**
	 * 테이블 목록 조회
	 */
	@Override
	public List<Map<String, Object>> selectTableList(Map<String, Object> dsCond) 
	{
		return fommMenuDao.selectTableList(dsCond);
	}
	
	/**
	 * 테이블 컬럼 목록 조회
	 */
	@Override
	public List<Map<String, Object>> selectTableColumnList(Map<String, Object> dsCond) 
	{
		return fommMenuDao.selectTableColumnList(dsCond);
	}

	
	
	/**
	 * 즐겨찾기 메뉴 저장/삭제
	 */
	@Override
	public void saveBkmkMenu(List<Map<String, Object>> dsMyMenu) 
	{
		String userId = sc.get().getScUserId();
		
		for(int i = 0; i < dsMyMenu.size(); i++)
		{
			Map<String, Object> rowData = dsMyMenu.get(i);
			rowData.put("USER_ID", userId);
			rowData.put("LMID", userId);
			
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			if(rowFlag.equalsIgnoreCase("I")) {
				fommMenuDao.insertMyMenu(rowData);
			}
			else if(rowFlag.equalsIgnoreCase("D")) {
				fommMenuDao.removeMyMenu(rowData);
			}
			
		}

	}
	
	
	/**
	 * 사용로그 추가
	 */
	@Override
	public void saveUserLog(String menuId, String menuNm, String menuUrl, String serverIp, String clientIp) 
	{
		Map<String, Object> rowData = new HashMap<String, Object>();
		String scUserId	= sc.get().getScUserId();
		String scUSerNm	= sc.get().getScUserNm();
		rowData.put("USER_ID", scUserId);
		rowData.put("USER_NAME", scUSerNm);
		rowData.put("MENU_ID", menuId);
		rowData.put("MENU_NM", menuNm);
		rowData.put("MENU_URL", menuUrl);
		rowData.put("SVR_IP", serverIp);
		rowData.put("CLIENT_IP", clientIp);
		
		fommMenuDao.insertUserLog(rowData);
	}
	
	
}