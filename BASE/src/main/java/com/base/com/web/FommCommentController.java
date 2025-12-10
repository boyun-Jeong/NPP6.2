package com.base.com.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamVariable;
import com.nexacro.uiadapter.jakarta.core.data.NexacroFileResult;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.uiadapter.jakarta.core.util.CharsetUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformType;
import com.base.com.service.FommCommentService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        공통 댓글 Controller
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
@RequestMapping("fommComment")
public class FommCommentController {

	private Logger log = LoggerFactory.getLogger(FommCommentController.class);
	 
	@Inject
	private Provider<SessionContext> provider;
	
	@Autowired
	private FommCommentService fommCommentSvc;
	
	
	
	
		
	/**
	 * 댓글 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectComment")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsFommComment =  fommCommentSvc.selectComment(dsCond);
		result.addDataSet("dsFommComment", dsFommComment);
		
		return result;
	}
	
	
	
	
	/**
	 * 댓글 저장
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/saveComment")
	public NexacroResult saveComment(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond
									, @ParamDataSet(name = "dsFommComment") List<Map<String, Object>> dsFommComment ) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		fommCommentSvc.saveComment(dsFommComment);
		
		dsFommComment = fommCommentSvc.selectComment(dsCond);
		result.addDataSet("dsFommComment", dsFommComment);
		
		return result;
	}
}