package com.base.fwk.schedule;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.collections4.map.HashedMap;
import org.quartz.CronExpression;
import org.quartz.JobKey;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.service.FommScheduleJobService;
import com.base.filter.CommonFilter;
import com.base.fwk.util.StringUtil;
import com.base.pj.service.PJ0100PService;

@Service
public class SppJobControl {

	private final Logger log = LoggerFactory.getLogger(SppJobControl.class);

    @Autowired
	private FommScheduleJobService fommScheduleJobSvc;

    @Autowired
	private PJ0100PService pj0100pSvc;	//휴일 관리

    public void createJob(String gubun, String scheNo) throws Exception {

		log.debug("[SppJobControl] createJob() gubun:[{}], scheNo:[{}]", gubun, scheNo);

		try {

			Map<String, Object> condMap = new HashMap<String, Object>();

			List<Map<String, Object>> scheList = null;
			
			if("JOB_NO".equals(gubun)) {
				condMap.put(gubun, scheNo);
				scheList = fommScheduleJobSvc.selectScheduleJobList(condMap);		//사용중인 통보 설정 List 조회

			}else if("RESERVE_NO".equals(gubun)) {
				condMap.put("EXEC_YN", "N");
				condMap.put("SEND_TARG_YN", "Y");
				scheList = fommScheduleJobSvc.selectReserveJobList(condMap);		//사용중인 예약 설정 List 조회
			}

			if(scheList != null) {
			
				if("JOB_NO".equals(gubun)) {
				
					Map<String, Object> rowData = scheList.get(0);
					
					String jobNo					= StringUtil.safe(rowData.get("JOB_NO"));					//JOB_NO
					String useYn					= StringUtil.safe(rowData.get("USE_YN"));						//사용여부
					String title						= StringUtil.safe(rowData.get("TITLE"));						//Job Title
					String contDesc				= StringUtil.safe(rowData.get("CONT_DESC"));				//Job 처리내용
					String cronExpr				= StringUtil.safe(rowData.get("CRON_EXPR"));				//Cron 표현식
					String javaSvcNm			= StringUtil.safe(rowData.get("JAVA_SVC_NM"));			//처리 서비스
					String sendTypeCd			= StringUtil.safe(rowData.get("SEND_TYPE_CD"));			//전송타입
					String dateTermUseYn	= StringUtil.safe(rowData.get("DATE_TERM_USE_YN"));	//날짜기간사용여부
					String strDtime				= StringUtil.safe(rowData.get("STR_DTIME"));				//전송기간(시작일)
					String endDtime				= StringUtil.safe(rowData.get("END_DTIME"));				//전송기간(종료일)
					String holidaySendYn		= StringUtil.safe(rowData.get("HOLIDAY_SEND_YN"));	//휴일전송여부(Y/N)
	
					String expectExecDtimeStr = "";
					
					log.debug(
							"[SppJobControl] createJob() EXEC-LIST USE_YN={}, TITLE:{}, CONT_DESC:{}, CRON_EXPR:{}, JAVA_SVC_NM:{}, SEND_TYPE_CD:{}, DATE_TERM_USE_YN:{}" +
							", STR_DTIME:{}, END_DTIME:{}, HOLIDAY_SEND_YN:{}",
							useYn, title, contDesc, cronExpr, javaSvcNm, sendTypeCd, dateTermUseYn, strDtime, endDtime, holidaySendYn);

					if("Y".equals(useYn)) {
	
						SimpleDateFormat yDf = new SimpleDateFormat("yyyy");
						Date curDate = new Date();
						String curDateStr = yDf.format(curDate);

						log.debug("[SppJobControl] createJob() curDateStr:[{}]", curDateStr);

						List<Map<String, Object>> holiDayList = new ArrayList<Map<String,Object>>();
						if(!"Y".equals(holidaySendYn)) {
							condMap = new HashedMap<String, Object>();
							condMap.put("YEAR", curDateStr);
							condMap.put("HOLI_YN", "Y");
							holiDayList = pj0100pSvc.selectHoliday(condMap);
						}
						
						if(CronExpression.isValidExpression(cronExpr)) {
	
							Trigger trigger = CommonFilter.regScheduleJob(scheList.get(0), holiDayList);

							if(trigger != null) {
								expectExecDtimeStr = CommonFilter.getTriggerTop5DateString(trigger, holidaySendYn, holiDayList);
								log.debug("[SppJobControl] createJob() JOB_NO={}, EXPECT_EXEC_DTIME={}",  jobNo, expectExecDtimeStr);
								
								//STATUS = '1'로 업데이트 칠 대상
								if(!"".equals(expectExecDtimeStr)) {
									fommScheduleJobSvc.saveFommScheDuleJobDt(jobNo, "1", expectExecDtimeStr);
								}

							}else {
								log.debug("[SppJobControl] createJob() JOB_NO={}, TRIGGER IS NULL");
								fommScheduleJobSvc.updateJobStop(jobNo);
							}
						}

					}else {
						fommScheduleJobSvc.updateJobStop(jobNo);
					}
				
				}else if("RESERVE_NO".equals(gubun)) {
	
					for (int i = 0; i < scheList.size(); i++) {
	
						Map<String, Object> rowData = scheList.get(i);
						
						String reserveNo			= StringUtil.safe(rowData.get("RESERVE_NO"));				//JOB_NO
						String javaSvcNm			= StringUtil.safe(rowData.get("JAVA_SVC_NM"));			//처리 서비스
						String execDtime			= StringUtil.safe(rowData.get("EXEC_DTIME"));				//전송기간(시작일)
						String pk1						= StringUtil.safe(rowData.get("PK1"));							//PK1
						String pk2						= StringUtil.safe(rowData.get("PK2"));							//PK2
						String pk3						= StringUtil.safe(rowData.get("PK3"));							//PK3
	
						log.debug(
								"[SppJobControl] createJob() EXEC-LIST i={}, RESERVE_NO:{} JAVA_SVC_NM:{}, EXEC_DTIME:{}, PK1:{}, PK2:{}, PK3:{}",
								i, reserveNo, javaSvcNm, execDtime, pk1, pk2, pk3
						);
						CommonFilter.regScheduleReserve(rowData);
					}
				}
			}

			CommonFilter.getScheduler().resumeJob(new JobKey(scheNo, gubun));

		}catch(SchedulerException e) {
			log.debug("[SppJobControl] createJob() Exception : " + e.getMessage());
		}
	}

	public void removeJob(String gubun, String scheNo) throws Exception {
		
		log.debug("[SppJobControl] removeJob( gubun:[{}], scheNo:[{}])", gubun, scheNo);
		
		try {

			boolean isExist = CommonFilter.getScheduler().checkExists(new JobKey(scheNo, gubun));
			
			if(isExist) {
				
				log.debug("[SppJobControl] removeJob() gubun:[{}], scheNo:[{}]", gubun, scheNo);
				
				if("JOB_NO".equals(gubun)) {
					CommonFilter.removeScheduleJob(scheNo);
					fommScheduleJobSvc.deleteJob(scheNo);
					
				}else if("RESERVE_NO".equals(gubun)) {
					CommonFilter.removeScheduleReserveJob(CommonFilter.getScheduler(), scheNo);
					fommScheduleJobSvc.removeReserveJobMt(scheNo);
				}
			}

		}catch(SchedulerException e) {
			log.debug("[SppJobControl] removeJob() Exception : " + e.getMessage());
		}
	}
}