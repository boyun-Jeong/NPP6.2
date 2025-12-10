package com.base.pj.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.pj.dao.PJHOMEDAO;
import com.base.pj.service.PJHOMEService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 관리(업무공통) Service(구현체)
 * @package com.base.pj.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Service
public class PJHOMEServiceImpl implements PJHOMEService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private PJHOMEDAO pjHomeDao;

	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) 
	{

		List<Map<String, Object>> result = pjHomeDao.select01(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) 
	{

		List<Map<String, Object>> result = pjHomeDao.select02(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) 
	{

		List<Map<String, Object>> result = pjHomeDao.select03(dsCond);
		return result;
	}

	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select04(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select05(dsCond);
		return result;
	}
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select06(dsCond);
		return result;
	}
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select07(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select07(dsCond);
		return result;
	}
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select08(dsCond);
		return result;
	}
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select09(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select09(dsCond);
		return result;
	}
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond) 
	{
		
		List<Map<String, Object>> result = pjHomeDao.select10(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select11(Map<String, Object> dsCond) 
	{	
		dsCond.put("DEPT_CD", sc.get().getScDeptCd());
		
		List<Map<String, Object>> result = pjHomeDao.select11(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select12(Map<String, Object> dsCond) 
	{	
		dsCond.put("DEPT_CD", sc.get().getScDeptCd());
		
		List<Map<String, Object>> result = pjHomeDao.select12(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select13(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select13(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select14(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select14(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select15(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select15(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select16(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select16(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select17(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select17(dsCond);
		return result;
	}
	
	/**
	 * Main Project에 해당하는 Sub Project 목록을 조회한다.
	 */
	public List<Map<String, Object>> select18(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select18(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select19(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select19(dsCond);
		return result;
	}
	
	public List<Map<String, Object>> select20(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select20(dsCond);
		return result;
	}
	
	
	public List<Map<String, Object>> select21(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select21(dsCond);
		return result;
	}	
	
	public List<Map<String, Object>> select22(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select22(dsCond);
		return result;
	}	
	
	public List<Map<String, Object>> select23(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select23(dsCond);
		return result;
	}	
	
	public List<Map<String, Object>> select24(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select24(dsCond);
		return result;
	}	
	
	
	public List<Map<String, Object>> select25(Map<String, Object> dsCond) 
	{	
		dsCond.put("USER_ID", sc.get().getScUserId());
		
		List<Map<String, Object>> result = pjHomeDao.select25(dsCond);
		return result;
	}	
		
}