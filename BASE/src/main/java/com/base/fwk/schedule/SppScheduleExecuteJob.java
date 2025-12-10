package com.base.fwk.schedule;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.Inet4Address;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.quartz.DisallowConcurrentExecution;
import org.quartz.InterruptableJob;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobKey;
import org.quartz.SchedulerException;
import org.quartz.UnableToInterruptJobException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.base.com.service.FommScheduleJobService;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.filter.CommonFilter;
import com.base.fwk.server.BeanUtils;
import com.base.fwk.util.StringUtil;
import com.base.pj.service.PJ0100PService;
import com.base.sr.dao.SRCommDAO;

@DisallowConcurrentExecution
public class SppScheduleExecuteJob implements InterruptableJob {

	private Thread currThread = null;

    private static final Logger log = LoggerFactory.getLogger(SppScheduleExecuteJob.class);

    @Autowired
	private FommScheduleJobService fommScheduleJobSvc;
    
    @Autowired
	private PJ0100PService pj0100pSvc;	//휴일 관리

    @Autowired
	private FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;
    
    @Autowired
    private SRCommDAO srCommDao;
    
    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {

    	log.debug("[SppScheduleExecuteJob] execute()");
    	log.debug("[SppScheduleExecuteJob] execute() Name:[{}], No:[{}]" + context.getJobDetail().getKey().getName(), context.getJobDetail().getKey());

    	SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);

    	this.currThread = Thread.currentThread();
    	
    	String ip4 = "";
		
		try {
			ip4 = Inet4Address.getLocalHost().getHostAddress();
		}catch(UnknownHostException e) {}
		
    	SimpleDateFormat yDf = new SimpleDateFormat("yyyy");
		Date curDate = new Date();
		String curDateStr = yDf.format(curDate);

		log.debug("curDateStr:[{}]", curDateStr);
		
		//배치 생성일자가 휴일 관리에 휴일로 관리되고 있는 일자인지 체크
		Map<String, Object> condMap = new HashMap<String, Object>();		
		List<Map<String, Object>> holiDayList = new ArrayList<Map<String,Object>>();

		String execKey	= StringUtil.safe(context.getJobDetail().getKey().getGroup());
    	String execNo	= StringUtil.safe(context.getJobDetail().getKey().getName());

// 		log.debug("[SppScheduleExecuteJob] execute() key:[" + context.getJobDetail().getKey() + "] " +
// 						 "JOB_NO:" + execJobNo + "] " +
// 						 "GROUP:[" + context.getJobDetail().getKey().getGroup() + "] " +
// 						 "DESCRIPTION:[" + context.getJobDetail().getDescription() + "]"
// 		);

    	List<Map<String, Object>> scheList = new ArrayList<Map<String,Object>>();
    	

 		SimpleDateFormat df	= new SimpleDateFormat("yyyyMMddHHmmss");
 		Date fireTime = null;
    	String curFireTime = "";
    	String holidaySendYn = "";
    	String svcNm = "";
    	String execGubun = "";
    	
    	//통보설정인 경우
 		if("JOB_NO".equals(execKey)) {
 		
 			condMap = new HashMap<String, Object>();
 			condMap.put("JOB_NO", context.getJobDetail().getKey().getName());
 			try {
 				scheList = fommScheduleJobSvc.selectScheduleJobList(condMap);		//사용중인 통보 설정 List 조회
 			}catch(Exception e) { e.printStackTrace(); }
 	 		
 	 		fireTime = context.getFireTime();
 	 		curFireTime = df.format(fireTime);
 	    	log.debug("[SppScheduleExecuteJob] execute() execKey:[{}], execNo:[{}] curFireTime:[{}]", execKey, execNo, curFireTime);
 	    	log.debug("[SppScheduleExecuteJob] execute() execKey:[{}], execNo:[{}] context.getTrigger().getFireTimeAfter:[{}]", execKey, execNo, df.format(context.getTrigger().getFireTimeAfter(null)));

	 		if(scheList != null) {

	 			holidaySendYn = StringUtil.safe(scheList.get(0).get("HOLIDAY_SEND_YN"));

	 			String expectExecDtime1 = StringUtil.safe(scheList.get(0).get("EXPECT_EXEC_DTIME1")).replaceAll("-", "").replaceAll(":", "").replaceAll(" ", "");
	 			log.debug("[SppScheduleExecuteJob] expectExecDtime:{}, expectExecDtime1:{}", curFireTime, expectExecDtime1);

//	 			if(curFireTime.equals(expectExecDtime1)) {

		 			if(scheList.size() == 1) {
		
		 				String useYn	= StringUtil.safe(scheList.get(0).get("USE_YN"));
		 				
		 				log.debug("[SppScheduleExecuteJob] execute() useYn:[{}]", useYn);

		 				if("Y".equals(useYn)) {
		 				
		 					//공휴일 실행 여부가 "N"인 경우 등록된 공휴일을 조회하여 공휴일에 해당하면 서비스 실행을 SKIP한다.
		 					if(!"Y".equals(holidaySendYn)) {
		 						condMap.put("YEAR", curDateStr);
		 						condMap.put("HOLI_YN", "Y");
		 						holiDayList = pj0100pSvc.selectHoliday(condMap);
		 					}
		 					
		 					//공휴일 실행 여부가 Y거나 공휴일 실행 여부가 N이면서 주말도 아니고 공휴일도 아닌 경우만 서비스를 실행한다. 
		 			 		if("Y".equals(holidaySendYn) || ("N".equals(holidaySendYn) && !StringUtil.isWeekEnd(fireTime) && !CommonFilter.isListExistsDate(holiDayList, "YYYYMMDD", fireTime)) ) {
		 			 			
		 			 			execGubun	= StringUtil.safe(scheList.get(0).get("EXEC_GUBUN"));		 				
			 					log.debug("[SppScheduleExecuteJob] execute() execGubun:[{}]", execGubun);

			 					if("01".equals(execGubun)) {	//JAVA SERVICE 실행

			 						svcNm = StringUtil.safe(scheList.get(0).get("JAVA_SVC_NM"));
				 					String[] svcArr = svcNm.split("/");
				 					
				 					for (int i = 0; i < svcArr.length; i++) {
										log.debug("i=" + i + " " + svcArr[i]);
									}

				 		 			try {
				 			 			
				 			 			if(svcArr == null) {
		 			 						
		 			 						//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "] 서비스명이 입력되지 않았습니다.");
				 			 				fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "서비스명이 입력되지 않았습니다.");
		 			 			 	    	throw new Exception("JOB_NO [SppScheduleExecuteJob] execute() 서비스명이 입력되지 않았습니다.");
		 			 			 	    	
		 			 					}else {
		 			 						
		 			 						if(svcArr.length != 3) {
		 			 							//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm + "Method가 존재하지 않습니다.");
		 			 							fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, svcNm + "Method가 존재하지 않습니다.");
		 			 				 	    	throw new Exception("JOB_NO [SppScheduleExecuteJob] execute() " + svcNm + "Method가 존재하지 않습니다.");
		 			 						}else {
		 			 							
		 			 							for (int i = 0; i < svcArr.length; i++) {
		 			 								String val = StringUtil.safe(svcArr[i]);
		 			 								if("".equals(val)) {
		 			 									if(i==0) {
		 			 										//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Package 폴더명이 지정되지 않았습니다.");
		 			 										fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "Service Package 폴더명이 지정되지 않았습니다.");
		 			 										throw new Exception("JOB_NO [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Package 폴더명이 지정되지 않았습니다.");
		 			 									}else if(i==1) {
		 			 										//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Class명이 지정되지 않았습니다.");
		 			 										fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "Service Class명이 지정되지 않았습니다.");
		 			 										throw new Exception("JOB_NO [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Class명이 지정되지 않았습니다.");
		 			 									}else if(i==2) {
		 			 										//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Method명이 지정되지 않았습니다.");
		 			 										fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "Service Method명이 지정되지 않았습니다.");
		 			 										throw new Exception("JOB_NO [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Method명이 지정되지 않았습니다.");
		 			 									}
		 			 								}
		 										}
		 			 						}
		 			 					}

		 			 					log.debug("svcArr[0] : " + svcArr[0]);
		 			 					String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
		 			 					log.debug("svcArr[1] : " + svcArr[1]);
		 			 					String classNm = path + "." + svcArr[1] + "ServiceImpl";
		 			 					Class svcClass = Class.forName(classNm);
		 			 					log.debug("svcArr[2] : " + svcArr[2]);
		 			 					Object object  = BeanUtils.getBean(svcClass);
//			 			 					Object object  = ApplicationContextProvider.getApplicationContext().getBean(svcClass);
		 			 					Method method = null;

		 			 					log.debug("JOB_NO 1.실행시간:[" + fireTime + "] JOB_NO:[" + execNo + "] JAVA_SVC_NM:[" + svcNm + "] path:[" + path + "] svcClass:[" + svcClass + "]");

		 			 					if(svcClass != null) {

		 			 						Method[] methodList = svcClass.getMethods();
		 			 						Class<?>[] paramTypes = null;

		 			 						for (int i = 0; i < methodList.length; i++) {

		 			 							if(methodList[i].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우
		 			 								paramTypes = methodList[i].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
		 			 								log.debug("JOB_NO paramTypes.length===========>" + paramTypes.length);					
		 			 							}
		 			 						}
		 			 						String[] paramClassNm = new String[paramTypes.length];
		 			 						Class<?>[] paramClass = new Class<?>[paramTypes.length];

		 			 						for (int i = 0; i < paramClass.length; i++) {
		 			 							paramClassNm[i] = paramTypes[i].getName();	//해당 METHOD의 매개변수 Class명을 구한다.
		 			 							paramClass[i] = Class.forName(paramClassNm[i]);
		 			 						}
		 			 						
		 			 						Object[] oParam = new Object[paramClass.length];
		 			 						oParam[0] = scheList.get(0);
//			 			 						method = svcClass.getMethod(svcArr[2], paramClass);
		 			 						method = object.getClass().getMethod(svcArr[2], paramClass);

		 			 						//log.debug("JOB_NO 1.실행시간:[" + fireTime + "] JOB_NO:[" + execNo + "] JAVA_SVC_NM:[" + svcNm + "] path:[" + path + "] method:[" + method + "]");
		 			 						
		 			 						if(method != null) {
		 			 							
		 			 							try {
		 			 								
			 			 							log.debug("JOB_NO [SppScheduleExecuteJob] [IF] invoke()  Service Method Exist");
			 			 							log.debug("JOB_NO [SppScheduleExecuteJob] [IF] invoke()  getBean 전 {}", svcArr[1] + "ServiceImpl");
			 			 							
			 			 							log.debug("JOB_NO [SppScheduleExecuteJob] [IF] getBean 후 object.getClass().getName() : " + object.getClass().getName());
			 			 							Object rtnObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행
			 			 				 			log.debug("JOB_NO [SppScheduleExecuteJob] [IF] invoke()  실행 완료");
			 		 				 	 			//예약작업 Job 실행이력 등록
			 		 				 	 			//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[정상-" + svcNm + "]");
			 		 				 				//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "] 정상");
			 			 				 			fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "");

		 			 							}catch(InvocationTargetException e) {
		 			 								e.getTargetException().printStackTrace();
		 			 							}

		 			 				 		}else {
		 			 				 			log.debug("JOB_NO [SppScheduleExecuteJob] [ELSE] invoke() Service Method Not Exist");
		 			 				 			//예약작업 Job 실행이력 등록 			
		 			 				 			//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm + "Method가 존재하지 않습니다.");
		 			 				 			fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, svcNm + "Method가 존재하지 않습니다.");
		 			 				 	    	throw new Exception("JOB_NO [SppScheduleExecuteJob] execute() " + svcNm + "Method가 존재하지 않습니다.");
		 			 				 		}

		 			 					}else {
		 			 						
		 			 						//log.debug("JOB_NO [SppScheduleExecuteJob] execute() Service Class Not Exist");
		 			 			 			//예약작업Job 실행이력 등록 			
		 			 						//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + classNm + "JAVA Class가 존재하지 않습니다.");
		 			 						fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, classNm + "JAVA Class가 존재하지 않습니다.");
		 			 			 	    	throw new Exception("JOB_NO [SppScheduleExecuteJob] execute() " + classNm + "JAVA Class가 존재하지 않습니다.");
		 			 					}
		
				 		 			}catch(Exception e) {
			 		 					log.debug("e.getCause():\n" + e.getCause());
					 		 			log.debug("JOB_NO [SppScheduleExecuteJob] execute() Service Invoke " + "[catch-" + svcNm + "]" + e.getStackTrace()[0]);
					 		 			//Job 실행이력 등록 			
					 		 	    	//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "] [catch-" + svcNm + "]" + e.getStackTrace()[0]);
					 		 			fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[catch-" + svcNm + "]" + e.getStackTrace()[0]);
						 		 	}

			 					}else if("02".equals(execGubun)) {	//QUERY 실행
			 						
			 						String queryDesc = StringUtil.safe(scheList.get(0).get("QUERY_DESC"));
			 						
			 						if(queryDesc.replaceAll("\\s", "").toUpperCase().startsWith("SELECT") || queryDesc.replaceAll("\\s", "").toUpperCase().startsWith("WITH")) {
			 							Map<String, Object> queryMap = new HashMap<String, Object>();
			 							queryMap.put("QUERY_STRING", queryDesc);
			 							List<Map<String, Object>> userList = srCommDao.execSelectQueryString(queryMap);

			 							String sendNo		= StringUtil.safe(scheList.get(0).get("JOB_NO"));
			 							String sendTypeCd	= StringUtil.safe(scheList.get(0).get("SEND_TYPE_CD"));
			 							String title				= StringUtil.safe(scheList.get(0).get("TITLE"));
			 							String msgConts	= StringUtil.safe(scheList.get(0).get("CONT_DESC"));
			 							String sendUserId	= "ITSM";
			 							String sendGubun	= "01";	//JOB
			 							
			 							log.debug("JOB_NO 1.실행시간:[" + fireTime + "] JOB_NO:[" + execNo + "] QUERY STRING EXECUTE userList.size()" + userList.size());

			 							try {
			 								fommScheduleCommonSvcImpl.sendMsgTran(sendNo, sendGubun, sendTypeCd, sendUserId, title, msgConts, userList);
			 								//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "] 정상");
			 								fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "");

			 							}catch(Exception e) {
			 								log.debug("e.getCause():\n" + e.getCause());
						 		 			log.debug("JOB_NO [SppScheduleExecuteJob] execute() Service Invoke " + "[catch-" + svcNm + "]" + e.getMessage());
						 		 			//Job 실행이력 등록
						 		 			//fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[" + ip4 + "] [catch-" + svcNm + "]" + e.getStackTrace()[0]);
						 		 			fommScheduleJobSvc.insertFommScheduleJobExecHist(execNo, curFireTime, "[catch-" + svcNm + "]" + e.getStackTrace()[0]);
			 							}
			 						}
			 					}
		 			 		}
		 				}
		 				
		 				//위에서 Job 실행 후 다음 일정을 업데이트 하기 위한 처리 시작
			 			Map<String, Object> rowData = scheList.get(0);
						
						String jobNo						= StringUtil.safe(rowData.get("JOB_NO"));					//JOB_NO						
						String cronExpr					= StringUtil.safe(rowData.get("CRON_EXPR"));				//Cron 표현식
						String dateTermUseYn		= StringUtil.safe(rowData.get("DATE_TERM_USE_YN"));	//날짜기간사용여부
						String strDtime					= StringUtil.safe(rowData.get("STR_DTIME"));				//전송기간(시작일시)
						String endDtime					= StringUtil.safe(rowData.get("END_DTIME"));				//전송기간(종료일시)								
						String expectExecDtimeStr = "";

						log.debug(
								"[SppScheduleExecuteJob] execute() CALL JOB_NO={}, USE_YN={}, CRON_EXPR:{}, DATE_TERM_USE_YN:{}, STR_DTIME:{}, END_DTIME:{}",
								jobNo, useYn, cronExpr, dateTermUseYn, strDtime, endDtime);

						if("Y".equals(useYn)) {

							Date firstDate = context.getTrigger().getFireTimeAfter(context.getFireTime());
							Date execDate;
							Date nextDate = null;
							String[] dateStrArr = new String[5];
							
							if(firstDate != null) {

								df	= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

								execDate = firstDate;
								dateStrArr[0] = df.format(execDate);
							
								if(firstDate != null && (StringUtil.isWeekEnd(execDate) || CommonFilter.isListExistsDate(holiDayList, "YYYYMMDD", execDate)) ) {
									if(!"Y".equals(holidaySendYn)) {
										dateStrArr[0] += "(휴일)";
									}
								}
								
								log.debug("[SppScheduleExecuteJob] execute() trigger 현재시간:[{}], 최초실행일시:[{}]", df.format(execDate), dateStrArr[0]);
								
								for (int i = 1; i < 5; i++) {
									nextDate = context.getTrigger().getFireTimeAfter(execDate);

									if(nextDate != null) {

										dateStrArr[i]	= df.format(nextDate);

										if(nextDate != null && (StringUtil.isWeekEnd(nextDate) || CommonFilter.isListExistsDate(holiDayList, "YYYYMMDD", nextDate)) ) {
											if(!"Y".equals(holidaySendYn)) {
												dateStrArr[i] += "(휴일)";
											}
										}
										execDate = nextDate;
										log.debug("[SppScheduleExecuteJob] execute() trigger {}번째 nextDate:[{}]", (i+1), df.format(nextDate));

									}else {
										log.debug("[SppScheduleExecuteJob] execute() trigger {}번째 nextDate:[{}]", (i+1), "없음");
										break;
									}
								}
				
								for (int i = 0; i < dateStrArr.length; i++) {

									if(i==0) {

										if(dateStrArr[i] != null) {
											expectExecDtimeStr = dateStrArr[i];
										}else {
											break;
										}

									}else {
										if(dateStrArr[i] != null) {
											expectExecDtimeStr += (dateStrArr[i] != null ? "," : "") + StringUtil.safe(dateStrArr[i]);
										}else {
											break;
										}
									}
								}							
								log.debug("[SppScheduleExecuteJob] execute()  JOB_NO={}, EXPECT_EXEC_DTIME={}", jobNo, expectExecDtimeStr);

								//STATUS = '1'로 업데이트 칠 대상
								if(!"".equals(expectExecDtimeStr)) {
									
									fommScheduleJobSvc.saveFommScheDuleJobDt(jobNo, "1", expectExecDtimeStr);	//스케쥴 Job 실행주기 Top5를 반영

								}else {	

									removeJob(jobNo);
									fommScheduleJobSvc.updateJobStop(jobNo);
								}

							}else {
								removeJob(jobNo);
							}

						}else {	
							removeJob(jobNo);
							fommScheduleJobSvc.updateJobStop(jobNo);
						}
		 			}
//		 		}
	 		}

 		}else {

 			//예약작업 처리완료로 변경
 			fommScheduleJobSvc.updateReserveJobMt(execNo);
 			
 			//예약작업인 경우(RESERVE_NO)
 			condMap = new HashMap<String, Object>();
 			condMap.put("RESERVE_NO", execNo);
 			scheList = fommScheduleJobSvc.selectReserveJobList(condMap);
 			
 			int logInsCnt = 0;
 			try {
	 			
	 			if(scheList != null) {
	 				
	 				if(scheList.size() == 1) {

	 					svcNm = StringUtil.safe(scheList.get(0).get("JAVA_SVC_NM"));
	 					String[] svcArr = svcNm.split("/");
	 					
	 					if(svcArr == null) {
	 						
	 						//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "서비스명이 입력되지 않았습니다.");
	 						fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "] 서비스명이 입력되지 않았습니다.");
	 						logInsCnt++;
	 			 	    	throw new Exception("RESERVE [SppScheduleExecuteJob] execute() 서비스명이 입력되지 않았습니다.");
	 			 	    	
	 					}else {
	 						
	 						if(svcArr.length != 3) {
	 							//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm + "Method가 존재하지 않습니다.");
	 							fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, svcNm + "Method가 존재하지 않습니다.");
	 							logInsCnt++;
	 				 	    	throw new Exception("RESERVE [SppScheduleExecuteJob] execute() " + svcNm + "Method가 존재하지 않습니다.");

	 						}else {
	 							
	 							for (int i = 0; i < svcArr.length; i++) {
	 								String val = StringUtil.safe(svcArr[i]);
	 								if("".equals(val)) {
	 									if(i==0) {
	 										//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Package 폴더명이 지정되지 않았습니다.");
	 										fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "Service Package 폴더명이 지정되지 않았습니다.");
	 										logInsCnt++;
	 										throw new Exception("RESERVE [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Package 폴더명이 지정되지 않았습니다.");
	 									}else if(i==1) {
	 										//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Class명이 지정되지 않았습니다.");
	 										fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "Service Class명이 지정되지 않았습니다.");
	 										logInsCnt++;
	 										throw new Exception("RESERVE [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Class명이 지정되지 않았습니다.");
	 									}else if(i==2) {
	 										//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]Service Method명이 지정되지 않았습니다.");
	 										fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "Service Method명이 지정되지 않았습니다.");
	 										logInsCnt++;
	 										throw new Exception("RESERVE [SppScheduleExecuteJob] execute()  [" + ip4 + "]Service Method명이 지정되지 않았습니다.");
	 									}
	 								}
								}
	 						}
	 					}

	 					String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
	 					String classNm = path + "." + svcArr[1] + "ServiceImpl";
	 					Method method = null;
	 					
	 					Object object  = BeanUtils.getBean(svcArr[1] + "ServiceImpl");
	 					
	 					//log.debug("RESERVE object:[" + object + "]");
	 					//log.debug("RESERVE 1.실행시간:[" + fireTime + "] JOB_NO:[" + execNo + "] JAVA_SVC_NM:[" + svcNm + "] path:[" + path + "] svcClass:[" + object.getClass() + "]");

	 					if(object != null) {

	 						Method[] methodList = object.getClass().getMethods();
	 						Class<?>[] paramTypes = null;

	 						for (int i = 0; i < methodList.length; i++) {

	 							if(methodList[i].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우
	 								paramTypes = methodList[i].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
	 								log.debug("paramTypes.length===========>" + paramTypes.length);					
	 							}
	 						}
	 						String[] paramClassNm = new String[paramTypes.length];
	 						Class<?>[] paramClass = new Class<?>[paramTypes.length];

	 						for (int i = 0; i < paramClass.length; i++) {
	 							paramClassNm[i] = paramTypes[i].getName();	//해당 METHOD의 매개변수 Class명을 구한다.
	 							paramClass[i] = Class.forName(paramClassNm[i]);
	 						}
	 						
	 						Object[] oParam = new Object[paramClass.length];
	 						oParam[0] = scheList.get(0);
	 						method = object.getClass().getMethod(svcArr[2], paramTypes);

	 						//log.debug("RESERVE 2.실행시간:[" + fireTime + "] JOB_NO:[" + execNo + "] JAVA_SVC_NM:[" + svcNm + "] path:[" + path + "] method:[" + method + "]");
	 						
	 						if(method != null) {
	 							
	 							try {
	 								log.debug("method.getReturnType().getName() =======================>" + method.getReturnType().getName());
	 								Object rtnObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행
	 								
	 								if("java.lang.String".equals(rtnObj.getClass().getName())) {
	 									
	 									if(!"".equals(rtnObj.toString())) {
	 										log.debug("rtnObj.toString() : " + rtnObj.toString());
	 										fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, svcNm + " " + rtnObj.toString());
	 										logInsCnt++;
	 										throw new Exception("[SppScheduleExecuteJob] execute() " + svcNm + " " + rtnObj.toString());

	 									}
	 								}
	 								//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm);
	 								fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, svcNm);
	 								logInsCnt++;

	 							}catch(InvocationTargetException e) {
	 								e.printStackTrace();
	 								//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm + e.getStackTrace()[0]);
	 								fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, svcNm + e.getStackTrace()[0]);
		 				 			logInsCnt++;
		 				 			throw new Exception("[SppScheduleExecuteJob] execute() " + svcNm + e.getStackTrace()[0]);
		 				 			
	 							}
	 				 			
 				 				//log.debug("RESERVE [SppScheduleExecuteJob] insertReserveJobExecHist 예약작업Job 실행이력등록");
 				 	 			//예약작업 Job 실행이력 등록
 				 	 			//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[정상-" + svcNm + "]");

	 				 		}else {
	 				 			
	 				 			//log.debug("RESERVE [SppScheduleExecuteJob] execute() Service Method Not Exist");
	 				 			//예약작업 Job 실행이력 등록
	 				 			//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + svcNm + "Method가 존재하지 않습니다.");
	 				 			fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, svcNm + "Method가 존재하지 않습니다.");
	 				 			logInsCnt++;
	 				 	    	throw new Exception("[SppScheduleExecuteJob] execute() " + svcNm + "Method가 존재하지 않습니다.");
	 				 		}

	 					}else {
	 						
	 						//log.debug("RESERVE [SppScheduleExecuteJob] execute() Service Class Not Exist");
	 			 			//예약작업Job 실행이력 등록
	 						//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "]" + classNm + "JAVA Class가 존재하지 않습니다.");
	 						fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, classNm + "JAVA Class가 존재하지 않습니다.");
	 						logInsCnt++;
	 			 	    	throw new Exception("RESERVE [SppScheduleExecuteJob] execute() " + classNm + "JAVA Class가 존재하지 않습니다.");
	 					}
	 				}
	 			}
				
	 		}catch(Exception e) {	
	 			//log.debug("RESERVE [SppScheduleExecuteJob] execute() Service Invoke " + "[catch-" + svcNm + "]" + e.getMessage());
	 			//예약작업 Job 실행이력 등록 			
	 	    	
	 			if(logInsCnt == 0) {
	 				//fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[" + ip4 + "] [catch-" + svcNm + "]" + e.getStackTrace()[0]);
	 				fommScheduleJobSvc.insertReserveJobExecHist(execNo, curFireTime, "[catch-" + svcNm + "]" + e.getMessage());
	 			}
	 		}
 			
 			try {

	 			if(CommonFilter.getScheduler() != null) {
		    		  
		    		  try {
		    			  Thread.sleep(2000);
		    		  }catch(InterruptedException e) {
		    			  e.printStackTrace();
		    		  }
		    		  
		    		  try {
			    		  CommonFilter.getScheduler().interrupt(new JobKey(execNo, "RESERVE_NO"));
						  CommonFilter.getScheduler().deleteJob(new JobKey(execNo, "RESERVE_NO"));

		    		  }catch(UnableToInterruptJobException e) {}
				}

 			}catch (SchedulerException e) {
		 			e.printStackTrace();
	 		}
 		}
 		System.gc();
    }

    public void removeJob(String jobNo) {
    	
    	log.debug("[SppScheduleExecuteJob] removeJob()");
    	if(CommonFilter.getScheduler() != null) {
    		try {
    			Thread.sleep(1000);
    		}catch(InterruptedException e) {
    			e.printStackTrace();
    		}
    		
    		try {
    			CommonFilter.getScheduler().interrupt(new JobKey(jobNo, "JOB_NO"));    			
    		}catch(UnableToInterruptJobException e) {
    			log.debug("[SppScheduleExecuteJob] removeJob() UnableToInterruptJobException", e.getMessage());
    		}
    		
    		try {
    			CommonFilter.getScheduler().deleteJob(new JobKey(jobNo, "JOB_NO"));    			
    		}catch(SchedulerException e) {
    			log.debug("[SppScheduleExecuteJob] removeJob() SchedulerException", e.getMessage());
    		}
    	}
    	fommScheduleJobSvc.updateJobStop(jobNo);
    }

    @Override
    public void interrupt() throws UnableToInterruptJobException {

    	if(this.currThread != null) {
    		this.currThread.interrupt();
    	}
    }
}