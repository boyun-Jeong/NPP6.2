package com.base.sr.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR9921WDAO;
import com.base.sr.service.SR9921WService;

/**
 * 
 * <pre>
 * @title
 * - 서비스조회(요청서목록) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정해운
 * @since   2025. 03. 08.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 08.	정해운		최초작성
 */
@Service
public class SR9921WServiceImpl implements SR9921WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR9921WDAO sr9921wDao;
	
	@Autowired
	private FommAuthService fommAuthSvc;

//	/**
//	 * 서비스조회(요청서목록) 목록 조회
//	 */
//	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
//		List<Map<String, Object>> result = sr9921wDao.select01(dsCond);
//		return result;
//	}
//	
	
	
	
	/**
	 * 내 요청함 WF단계 그룹별 CNT
	 */
	public List<Map<String, Object>> select00(Map<String, Object> dsCond, String strMenuId, String strUserId, String strScreenId ) 
	{		
		// session 사번
		String userId 	= sc.get().getScUserId();
		dsCond.put("SESS_USER_ID", userId);
		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		
		NexacroResult chkAdmin = new NexacroResult();		
		chkAdmin =  fommAuthSvc.getMenuAuthEx("ADMIN_YN",strMenuId,strUserId,strScreenId);
		//chkAdmin =  fommAuthSvc.getMenuAuth("ADMIN_YN");
		
		//boolean bAdminYn = false;
		boolean bAdminYn = true; // 기본적으로 모든 사용자가 전체 요청서를 조회 할 수 있다기에 전체 조회가 가능한 관리자 쿼리로 분기하기 위함.
		                                         // 아래 필요 없는 부분는 추후 삭제하기를 권장. 
		
		//if( chkAdmin.getVariables().get("AUTH_YN").equals("Y") ) {
		//	bAdminYn = true;
		//} 
		
		List<Map<String, Object>> result = new ArrayList<>();
		
		if(!"P".equals(dsCond.get("menuType"))) {
			
			if(dsCond.get("TITLE")!=null && !"".equals(dsCond.get("TITLE"))) {
				String strSchText = dsCond.get("TITLE").toString();
			
				List<List<String>> orStrCond = new ArrayList<>();
				
				if(strSchText != null && !"".equals(strSchText)) {
					String[] strParts = strSchText.split("\\|\\|");
					
					if(strParts.length>0) {			
						for(String strPart : strParts) {				
							List<String> andStrs = Arrays.asList(strPart.split("&&"));
							orStrCond.add(andStrs);
						}
					}
				}
				
				dsCond.put("orStrCond", orStrCond);			
			}
			
			if(bAdminYn) { // 관리자 권한
				if("120".equals(dsCond.get("formType"))) {	// MY 요청함, IT작업신청진행현 등 진행중인 요청서 조회 화면	
					if("A".equals(dsCond.get("menuType"))) { // MY 요청함
							result = sr9921wDao.select00(dsCond);
					} else {
						result = sr9921wDao.selectAdminCnt(dsCond);	
					}
				} else { // IT작업신청서조회, 요청관리 조회 등 완료 포함 요청서 조회 화면
					if("Y".equals(dsCond.get("MYREQ_YN"))) { // 내작업
						result = sr9921wDao.select00(dsCond);
					} else {	
						result = sr9921wDao.selectAdminCnt(dsCond);	
					}
				}
			} else { // 일반 권한
				result = sr9921wDao.select00(dsCond);
			}
		}
		
		return result;
	}

	/**
	 * 내 요청함 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond, String strMenuId, String strScreenId, String strUserId) 
	{
		// session 사번
		String userId 	= sc.get().getScUserId();
		
		String reqTemplatIdArrStr = StringUtil.safe(dsCond.get("REQ_TEMPLAT_ID_ARR"));
		String[] reqTemplatIdArr = null;

		if(!"".contentEquals(reqTemplatIdArrStr)) {
			reqTemplatIdArr = reqTemplatIdArrStr.split(",");
			dsCond.put("REQ_TMPLAT_ID_ARR", reqTemplatIdArr);
		}
		
		dsCond.put("SESS_USER_ID", userId);
		dsCond.put("SYS_LANG_CD", sc.get().getScSysLangCd());
		dsCond.put("SEL_LANG_CD", sc.get().getScSelLangCd());
		
		
		NexacroResult chkAdmin = new NexacroResult();		
		chkAdmin =  fommAuthSvc.getMenuAuthEx("ADMIN_YN",strMenuId,strScreenId,strUserId);
		//chkAdmin =  fommAuthSvc.getMenuAuth("ADMIN_YN");

		//boolean bAdminYn = false;
		boolean bAdminYn = true; // 기본적으로 모든 사용자가 전체 요청서를 조회 할 수 있다기에 전체 조회가 가능한 관리자 쿼리로 분기하기 위함.
		                                         // 아래 필요 없는 부분는 추후 삭제하기를 권장. 
		
		//if( chkAdmin.getVariables().get("AUTH_YN").equals("Y") ) {
		//	bAdminYn = true;
		//}  
		
		List<Map<String, Object>> result = new ArrayList<>();
		
		
		if("P".equals(dsCond.get("menuType"))) {	// 처리이력조회	
				result = sr9921wDao.select02(dsCond);
		} else {
			
			if(dsCond.get("TITLE")!=null && !"".equals(dsCond.get("TITLE"))) {
				String strSchText = dsCond.get("TITLE").toString();
			
				List<List<String>> orStrCond = new ArrayList<>();
				
				if(strSchText != null && !"".equals(strSchText)) {
					String[] strParts = strSchText.split("\\|\\|");
					
					if(strParts.length>0) {			
						for(String strPart : strParts) {				
							List<String> andStrs = Arrays.asList(strPart.split("&&"));
							orStrCond.add(andStrs);
						}
					}
				}
				
				dsCond.put("orStrCond", orStrCond);			
			}
			
			if(bAdminYn) { // 관리자 권한
				if("120".equals(dsCond.get("formType"))) { // MY 요청함, IT작업신청진행현 등 진행중인 요청서 조회 화면
					if("A".equals(dsCond.get("menuType"))) { // MY 요청함
						result = sr9921wDao.select01(dsCond);
					} else {
						result = sr9921wDao.selectAdmin(dsCond);
					}
				} else { // IT작업신청서조회, 요청관리 조회 등 완료 포함 요청서 조회 화면
					if("Y".equals(dsCond.get("MYREQ_YN"))) { // 내작업
						result = sr9921wDao.select01(dsCond);
					} else {
						result = sr9921wDao.selectAdmin(dsCond);
					}
				}
			} else { // 일반 권한
				result = sr9921wDao.select01(dsCond);
			}
		}
		return result;
	}
	
	
	
	
	
	
	

	/**
	 * 서비스조회(요청서목록) 저장
	 */
//	@Transactional
//	public void save01(List<Map<String, Object>> dsData) {
//
//		String userId 	= sc.get().getScUserId();
//		String lmpId 	= sc.get().getScLmpId();
//
//		for (int i = 0; i < dsData.size(); i++) {
//			Map<String, Object> rowData = dsData.get(i);
//
//	        // DATA RowType 가져오기
//	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
//	    	rowData.put("LMID", userId);
//	    	rowData.put("LMPID", lmpId);
//
//	    	if("I".equals(rowFlag)) {
//	    		sr9921wDao.insert01(rowData);
//
//	    	}else if("U".equals(rowFlag)) {
//	    		sr9921wDao.modify01(rowData);
//
//	    	}else if("D".equals(rowFlag)) {
//	    		sr9921wDao.remove01(rowData);
//	    	}
//		}
//	}
}