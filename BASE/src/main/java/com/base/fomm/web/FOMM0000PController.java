package com.base.fomm.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.apache.commons.collections4.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.vo.SessionContext;
import com.base.com.web.FommMultipartController;
import com.base.fomm.service.FOMM0000PService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 사용자 및 사용자별 권한그룹 관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    이정빈	최초작성
 */
@Controller
@RequestMapping("FOMM0000P")
public class FOMM0000PController {

	private Logger log = LoggerFactory.getLogger(FOMM0000PController.class);

	@Inject
	private Provider<SessionContext> sessionContext;

	@Autowired
	private FOMM0000PService fomm0000PSvc;

	@Autowired
	private FommAuthService fommAuthSvc;
	
	@Autowired
	private FommMultipartController multipartController;
	
	
	/**
	 * SITEMAP
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectSiteMap")
	public NexacroResult selectSiteMap(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData =  fomm0000PSvc.selectSiteMap(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	
	
	
	
	
	/**
	 * 사용자 목록 조회
	 * @param dsCond
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws IOException 
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> dsFommUserMt =  fomm0000PSvc.select01(dsCond);
		
		// 사용자 이미지 base64 추가
		if( dsFommUserMt != null )
		{
			String IMG_FILE_PATH 	= StringUtil.safe(dsFommUserMt.get("IMG_FILE_PATH"));
			String IMG_FILE_NM		= StringUtil.safe(dsFommUserMt.get("IMG_NEW_FILE_NM"));
			String IMG_FILE_BASE64	= "";
			
			if( !"".equals(IMG_FILE_PATH) && !"".equals(IMG_FILE_NM)) {
				IMG_FILE_BASE64 = multipartController.fileToBase64(IMG_FILE_PATH, IMG_FILE_NM);
			}
			dsFommUserMt.put("IMG_FILE_BASE64", IMG_FILE_BASE64);
			
	    	
			// 서명 이미지 base64 추가
			String FILE_PATH = StringUtil.safe(dsFommUserMt.get("FILE_PATH"));
			String FILE_NM		= StringUtil.safe(dsFommUserMt.get("NEW_FILE_NM"));
			String FILE_BASE64 = "";
			if( !"".equals(FILE_PATH) && !"".equals(FILE_NM)) {
				FILE_BASE64 = multipartController.fileToBase64(FILE_PATH, FILE_NM);
			}
			dsFommUserMt.put("FILE_BASE64", FILE_BASE64);
		}
		
		result.addDataSet("dsFommUserMt", dsFommUserMt);
		
		// 사용자 비밀번호 변경 이력
		List<Map<String, Object>> dsFommUserPwChgHist = fommAuthSvc.selectUserPwChgHist(dsFommUserMt);
		result.addDataSet("dsFommUserPwChgHist", dsFommUserPwChgHist);
		
		return result;
	}
	
	
	/**
	 * 대직 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectAgency")
	public NexacroResult selectAgency(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData =  fomm0000PSvc.selectAgency(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	
	
	
	
	/**
	 * 사용자/사용자별 권한그룹 일괄 저장
	 * @param dsFommUserMt, dsFommAuthUserDt
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
							  , @ParamDataSet(name = "dsFommUserMt") Map<String, Object> dsFommUserMt
							  , @ParamDataSet(name = "dsFommAgencyInfo") List<Map<String, Object>> dsFommAgencyInfo) throws NexacroException 
	{		
		NexacroResult result = new NexacroResult();

		String userId	= StringUtil.safe(dsFommUserMt.get("USER_ID"));
		String sessUserId	= StringUtil.safe(sessionContext.get().getScUserId());

		String bfDeptCd = "";
		
		if(userId.equals(sessUserId)) {
		
			Map<String, Object> bfFommUserMt =  fomm0000PSvc.select01(dsCond);
			bfDeptCd = StringUtil.safe(bfFommUserMt.get("DEPT_CD"));
		}
		
		fomm0000PSvc.save01(dsFommUserMt, dsFommAgencyInfo);

		dsFommUserMt =  fomm0000PSvc.select01(dsCond);
		result.addDataSet("dsFommUserMt", dsFommUserMt);

		log.debug("[save01] bfDeptCd ::::::::::::::::::::::: " + bfDeptCd);

		if(userId.equals(sessUserId)) {

			if(!MapUtils.isEmpty(dsFommUserMt)) {
				String cuDeptCd = StringUtil.safe(dsFommUserMt.get("DEPT_CD"));
				
				log.debug("[save01] cuDeptCd ::::::::::::::::::::::: " + cuDeptCd);
				
				if(!bfDeptCd.equals(cuDeptCd)) {
					
					String cuDeptNm = StringUtil.safe(dsFommUserMt.get("DEPT_NM"));
					
					sessionContext.get().setScDeptCd(cuDeptCd);
					sessionContext.get().setScDeptNm(cuDeptNm);
					sessionContext.get().setScItDeptYn(StringUtil.safe(dsFommUserMt.get("IT_DEPT_YN"), "N"));
					
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("IT_DEPT_YN", StringUtil.safe(dsFommUserMt.get("IT_DEPT_YN"), "N"));
					result.addDataSet("dsItDeptYn", map);
				}
			}
		}

		dsFommAgencyInfo = fomm0000PSvc.selectAgency(dsCond);
		result.addDataSet("dsFommAgencyInfo", dsFommAgencyInfo);
		return result;
	}

	
	
	/**
	 * 부서 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsDeptTreeMt =  fomm0000PSvc.select02(dsCond);
		result.addDataSet("dsDeptTreeMt", dsDeptTreeMt);
		
		return result;
	}

	

	/**
	 * 부서 검색
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> dsDept =  fomm0000PSvc.select03(dsCond);
		result.addDataSet("dsDept",dsDept);
		
		return result;
	}

	/**
	 * 부서 검색
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> dsDept =  fomm0000PSvc.select04(dsCond);
		result.addDataSet("dsDept",dsDept);
		
		return result;
	}
	
	
	/**
	 * 부서 검색
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> dsDept =  fomm0000PSvc.select05(dsCond);
		result.addDataSet("dsDept",dsDept);
		
		return result;
	}	
	
}
