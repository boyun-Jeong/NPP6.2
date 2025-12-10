package com.base.fomm.web;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.quartz.CronExpression;
import org.quartz.JobKey;
import org.quartz.SchedulerException;
import org.quartz.TriggerKey;
import org.quartz.impl.matchers.GroupMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.filter.CommonFilter;
import com.base.fomm.service.FOMM0510PService;
import com.base.fwk.schedule.SppJobControl;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 통보배치관리 Controller
 * @package com.base.fomm.web
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
@Controller
@RequestMapping("FOMM0510P")
public class FOMM0510PController {

	private Logger log = LoggerFactory.getLogger(FOMM0510PController.class);

	@Autowired
	private FOMM0510PService fomm0510pSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Autowired
	private SppJobControl sppJobCotrol;
	/**
	 * CropExpression 체크
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/checkCronValidation")
	public NexacroResult checkCronValidation(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		NexacroResult result = new NexacroResult();
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		boolean isCheck = CronExpression.isValidExpression(StringUtil.safe(dsCond.get("CRON_EXPR")));
		log.debug("Checking CRON_EXPR:[" + StringUtil.safe(dsCond.get("CRON_EXPR")) + "] isCheck:[" + isCheck + "]");
		rtnMap.put("CHK_YN", isCheck ? "Y" : "N");
		result.addDataSet("dsCheck", rtnMap);
		return result;
	}

	/**
	 * 통보설정관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsFommScheduleJobMt = fomm0510pSvc.select01(dsCond);
		result.addDataSet("dsFommScheduleJobMt", dsFommScheduleJobMt);
		return result;
	}

	/**
	 * 통보설정관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsFommScheduleJobMt") List<Map<String, Object>> dsFommScheduleJobMt) throws Exception {
		// 요청 메뉴 권한 확인
		NexacroResult result = fommAuthSvc.getMenuAuth("SAVE_YN");
		String jobNo = "";
		
		if( "Y".equals(result.getVariables().get("AUTH_YN")) ) {

			jobNo = fomm0510pSvc.save01(dsFommScheduleJobMt);
//			Thread.sleep(2000);

		}else {

			return result;
		}
		
		if(!"".equals(jobNo)) {
			dsCond.put("JOB_NO", jobNo);			
			result.addDataSet("dsCond", dsCond);
		}

		dsFommScheduleJobMt = fomm0510pSvc.select01(dsCond);
		result.addDataSet("dsFommScheduleJobMt", dsFommScheduleJobMt);
		return result;
	}
	
	/**
	 * 통보설정관리 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/test01")
	public NexacroResult test01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsFommScheduleJobMt") List<Map<String, Object>> dsFommScheduleJobMt) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		Set<JobKey> allJobKeys = CommonFilter.getScheduler().getJobKeys(GroupMatcher.anyGroup());
		
		allJobKeys.forEach((jobKey)->{
			log.debug("jobKey:[{}]", jobKey);
		});
		
		Set<TriggerKey> allTriggerKeys = CommonFilter.getScheduler().getTriggerKeys(GroupMatcher.anyGroup());
		
		allTriggerKeys.forEach((triggerKey)->{
			try {
				Date fireDate = CommonFilter.getScheduler().getTrigger(triggerKey).getFireTimeAfter(null);
				SimpleDateFormat df	= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				log.debug("triggerKey:[{}], fireDate:[{}]", triggerKey, df.format(fireDate));
			} catch (SchedulerException e) {
				e.printStackTrace();
			}
		});
		return result;
	}
	
	/**
	 * 통보 실행 이력 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsFommScheduleJobExecHt = fomm0510pSvc.select02(dsCond);
		result.addDataSet("dsFommScheduleJobExecHt", dsFommScheduleJobExecHt);
		return result;
	}
}