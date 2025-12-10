package com.base.filter;

import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.net.Inet4Address;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.management.MBeanServer;
import javax.management.ObjectName;
import org.quartz.CronExpression;
import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.base.com.service.FommAuthService;
import com.base.com.service.FommScheduleJobService;
import com.base.com.vo.SessionContext;
import com.base.fwk.schedule.SppScheduleExecuteJob;
import com.base.fwk.util.StringUtil;
import com.base.pj.service.PJ0100PService;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.java.xapi.tx.PlatformType;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class SessionDetector
 */
@Component("commonFilterBean")
public class CommonFilter implements Filter {

	private Logger log = LoggerFactory.getLogger(CommonFilter.class);
	
	private static Logger logs = LoggerFactory.getLogger(CommonFilter.class);

	@Inject
	Provider<SessionContext> provider;

	@Autowired
	FommAuthService authService;

	/*
	 * 필터 예외 URI
	 */
	List<String> whiteReqs = null;	 

	/*
	 * 리소스 파일 목록 (필터 예외)
	 */
	List<String> staticResources = new ArrayList<>();

	private static Scheduler scheduler = null;

	public static Scheduler getScheduler() {
		return scheduler;
	}
	
	public static void resetScheduler() {
		scheduler = null;
	}
	
	@Autowired
	private FommScheduleJobService fommScheduleJobSvc;

	@Autowired
	private PJ0100PService pj0100pSvc;	//휴일 관리

    /**
     * Default constructor. 
     */
    public CommonFilter() {
    	staticResources.add("/attachImg");
    	staticResources.add("/ssoTest");
    	staticResources.add("/ssoCheck");
    	staticResources.add("/base");
    	staticResources.add("/baseExec");
    	staticResources.add("/login");
    	staticResources.add("/logout");
    	staticResources.add("/killSession");
    	staticResources.add("/sessCheck");
    }

	/**
	 * @see Filter#destroy()
	 */
	@Override
	public void destroy() {}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		if(scheduler == null) {
			String ip4 = "";
			
			try {
				ip4 = Inet4Address.getLocalHost().getHostAddress();
				
			}catch(UnknownHostException e) {}

			log.debug("[CommonFilter] doFilter() ip4:[" + ip4 + "]");
			
			//if("10.120.120.62".equals(ip4) || "10.120.15.29".equals(ip4)) {	//개발서버, 운영서버
			if("10.120.15.29".equals(ip4)) {	//운영서버
				System.setProperty("PORT", "8081");
				createScheduler();

			}else {	//Tomcat인 경우

				MBeanServer mBeanServer = ManagementFactory.getPlatformMBeanServer();
				try {
					Set<ObjectName> objectNames = mBeanServer.queryNames(new ObjectName("Catalina:type=Connector,*"), null);
					
					for(ObjectName objNm : objectNames) {
						String protocol = StringUtil.safe(mBeanServer.getAttribute(objNm, "protocol"));
						int port = StringUtil.safeInt(mBeanServer.getAttribute(objNm, "port"), -1);
						System.setProperty("PORT", "" + port);
						log.debug("protocol:[" + protocol + "] port:[" + port + "]");
					}
				}catch(Exception e) {
					e.printStackTrace();
				}
//				log.debug("ServerInfo.getServerInfo() : " + ServerInfo.getServerInfo());
//				log.debug("ServerInfo.getServerNumber() : " + ServerInfo.getServerNumber());

				if("10.230.40.187".equals(ip4)) {	//로컬은 JBY PC만 
//					createScheduler();
				}
			}
		}

		SessionContext sc = provider.get();
		
		// LMPID session값 갱신
		String menuId	= StringUtil.safe(req.getHeader("fommMenuId"));
		String lmpId	= StringUtil.safe(req.getHeader("fommScreenId"));
		String userId	= StringUtil.safe(req.getHeader("fommUserId"));
		
		sc.setScLmpId(lmpId);
		sc.setScLReqMenuId(menuId);
		
//		String pattern = "yyyy-MM-dd HH:mm:ss";
//		SimpleDateFormat sdf  = new SimpleDateFormat(pattern);
//		Date date = new Date();
		
//		HttpSession hSession = req.getSession(false);
		
//		date.setTime(hSession.getCreationTime());
//		String create = sdf.format(date);
//		
//		date.setTime(hSession.getLastAccessedTime());
//		String last = sdf.format(date);
		
		String ssoId = "";
		String uri = req.getRequestURI();
		
		boolean isResource = false;
		for (String staticResouce: staticResources) {
			if ("/".equals(uri) || uri.startsWith(staticResouce) || uri.endsWith(".jsp")) {
				isResource = true;
				break;
			}
		}

		log.debug("[CommonFilter] uri:[" + uri + "] isResource:[" + isResource + "] referer:[" + req.getHeader("referer") + "]");
		
		String referer = StringUtil.safe(req.getHeader("referer"));
		
		if(referer.indexOf("/spp/index.html?CALL_SCRN=") > -1) {
			isResource = true;
		}

		//_SDVA
//		Cookie[] cookies = null;
//		if(req.getCookies() != null) {
//			cookies = req.getCookies();
//			log.debug("cookies.length:::::::::::::::::::::::::::::::::[" + cookies.length + "]");
//		}
		
//		if(cookies != null) {
//			for(int i = 0; i < cookies.length; i++) {
//				Cookie cookie = cookies[i];
//				log.debug("[CommonFilter] i=" + i + " Cookie Name:[" + cookie.getName() + "] Value:[" + cookie.getValue() + "]");
//			}
//		}

		// log.debug("\n");
		// log.debug("[CommonFilter] REQUEST REMOTEHOST:[" + req.getRemoteHost() + "]");
		// log.debug("[CommonFilter] REQUEST REMOTEADDR:[" + req.getRemoteAddr() + "]");

//		Enumeration<String> em = req.getHeaderNames();
//
//		while(em.hasMoreElements()) {
//			String name = em.nextElement().toUpperCase();
//			String value = req.getHeader(name).toUpperCase();
//			log.debug("[CommonFilter] Header Name:[" + name + "] Value:[" + value + "]");
//			
//			if("HOST".equals(name)) {
//				if("NITSM.wemb.co.kr".equals(value)) {
//					isResource = true;
//					break;
//				}
//			}
//		}
//		log.debug("\n");

//		Map<?,?> paramMap = req.getParameterMap();
//
//		for(Object key : paramMap.keySet()) {
//			String keyStr = StringUtil.safe(key);
//			String[] value = (String[]) paramMap.get(keyStr);
//			log.debug("[CommonFilter] PARAM KEY:[" + keyStr + "] VALUE:[" + value + "]");
//		}
//		log.debug("\n");

//		String referer = StringUtil.safe(req.getHeader("referer"));
//
//		if(referer.indexOf("http://localhost:8081") > -1) {
//			System.out.println("referer IndexOf true~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//			isResource = true;
//		}
		if (!isResource)		// isResource == false 
		{
			//log.debug("[CommonFilter]referer====================================[" + referer + "]");
			log.debug("[CommonFilter] uri :[{}]  isResource:[{}] ssoId:[{}] ScUserId:[{}] isAuthenticated:[{}]", uri, isResource, ssoId, sc.getScUserId(), sc.isAuthenticated());
//			log.debug("[CommonFilter] Session ID:[" + hSession.getId() + "]\nSession 생성시간:[" + create + "] Session 최근접속시간:[" + last + "] maxInterval:[" + hSession.getMaxInactiveInterval() + "]");

			if (!sc.isAuthenticated()) {
//				log.debug("============================== [CommonFilter] if (!sc.isAuthenticated()) {================================");

				PlatformData resData = new PlatformData();
				VariableList varList = resData.getVariableList();

//				HttpPlatformResponse platformRes = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
				HttpPlatformResponse platformRes = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_XML, "UTF-8");
				platformRes.setData(resData);
				
				try {
					log.debug("============================== [CommonFilter] Session Out================================");
					varList.add("ErrorCode", -99998);
					varList.add("ErrorMsg", "Session Out");
					platformRes.sendData();
					return;

				}catch(PlatformException e) {}

				if (ssoId == null || "".equals(ssoId)) {
				}else {}
				log.debug("\n");

			}else {

				if(!"/changeUser".equals(uri) && !"/logout".equals(uri)) {	//접속자 변경, 로그아웃이 아닐 때

					if(!"".equals(userId) && !userId.equals(sc.getScUserId())) {
	
						try {
							PlatformData resData = new PlatformData();
							VariableList varList = resData.getVariableList();
							
							HttpPlatformResponse platformRes = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_XML, "UTF-8");
							platformRes.setData(resData);
							
							varList.add("ErrorCode", -99995);
							varList.add("ErrorMsg", "접속 유저 정보가 올바르지 않습니다.");
							platformRes.sendData();
							return;

						}catch(PlatformException e) {}
					}
					log.debug("\n");
				}
			}
		}
		else		// isResource == true
		{
		}
		
		// file upload filter 처리
		if( req.getMethod().toUpperCase().equals("POST") && req.getContentType().startsWith("multipart/form-data")) {
			chain.doFilter(req, res);
		}
		else {
			chain.doFilter(request, response);
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	@Override
	public void init(FilterConfig fConfig) throws ServletException {}

	public void createScheduler() throws IOException {

		try {
			
			if(scheduler != null) {
				log.debug("[CommonFilter]] createScheduler() scheduler != null scheduler.getSchedulerName() : " + scheduler.getSchedulerName());
			}else {
				log.debug("[CommonFilter]] createScheduler() scheduler is null");
			}

			if(scheduler == null) {

//				SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);

				fommScheduleJobSvc.removeJobStatusAll();	//전체 초기화
				
				SimpleDateFormat yDf = new SimpleDateFormat("yyyy");
				Date curDate = new Date();
				String curDateStr = yDf.format(curDate);
	
				log.debug("curDateStr:[{}]", curDateStr);
				
				//배치 생성일자가 휴일 관리에 휴일로 관리되고 있는 일자인지 체크
				Map<String, Object> condMap = new HashMap<String, Object>();
				condMap.put("YEAR", curDateStr);
				condMap.put("HOLI_YN", "Y");
				List<Map<String, Object>> holiDayList = pj0100pSvc.selectHoliday(condMap);
	
				//1. Scheduler 기본 생성
				SchedulerFactory schedulerFactory = new StdSchedulerFactory();
				
				log.debug("schedulerFactory.getScheduler().isInStandbyMode()====================>" + schedulerFactory.getScheduler().isInStandbyMode());
				
				if(scheduler != null) {
					
					if(!schedulerFactory.getScheduler().isShutdown()) {
						schedulerFactory.getScheduler().shutdown(true);
					}
				}
				scheduler = schedulerFactory.getScheduler();
				log.debug("[CommonFilter] schedulerFactory.getScheduler().getSchedulerName() : " + schedulerFactory.getScheduler().getSchedulerName());

				if(!schedulerFactory.getScheduler().isStarted()) {
					//start 를 호출해야 스케줄러가 standby mode에 들어가서 주입된, 그리고 주입될 Job 들을 실행할 수 있는 상태가 됩니다.
					log.debug("[CommonFilter] createSchedule() scheduler.start()");
					scheduler.start();
				}else {
					log.debug("schedulerFactory is Already Start()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
				}
				//2. Scheduler의 설정값으로 사용할 Properties를 설정 후 생성
	//			Properties properties = new Properties();
	//			String resource = "quartz.properties";
	//			Reader reader = Resources.getResourceAsReader(resource);
	//			properties.load(reader);		
	//			scheduler = new StdSchedulerFactory(properties).getScheduler();	//스케줄러를 생성합니다. 참고로 생성했다고 스케줄러가 실제 동작 상태에 들어간 게 아닙니다.
				
				//1. 통보 배치 관리 목록을 조회하여 job을 등록
				condMap = new HashMap<String, Object>();
				condMap.put("USE_YN", "Y");
				List<Map<String, Object>> scheList = new ArrayList<Map<String,Object>>();
				try {
					scheList = fommScheduleJobSvc.selectScheduleJobList(condMap);		//사용중인 통보 설정 List 조회
				}catch(Exception e) { e.printStackTrace(); }

				if(scheList != null) {
					
					for (int i = 0; i < scheList.size(); i++) {
						
						Map<String, Object> rowData = scheList.get(i);
						
						String jobNo					= StringUtil.safe(rowData.get("JOB_NO"));					//JOB_NO
						String useYn				= StringUtil.safe(rowData.get("USE_YN"));							//사용여부
						String title						= StringUtil.safe(rowData.get("TITLE"));						//Job Title
						String contDesc			= StringUtil.safe(rowData.get("CONT_DESC"));					//Job 처리내용
						String cronExpr			= StringUtil.safe(rowData.get("CRON_EXPR"));					//Cron 표현식
						String javaSvcNm			= StringUtil.safe(rowData.get("JAVA_SVC_NM"));			//처리 서비스
						String sendTypeCd		= StringUtil.safe(rowData.get("SEND_TYPE_CD"));				//전송타입
						String dateTermUseYn	= StringUtil.safe(rowData.get("DATE_TERM_USE_YN"));	//날짜기간사용여부
						String strDtime				= StringUtil.safe(rowData.get("STR_DTIME"));				//전송기간(시작일시)
						String endDtime			= StringUtil.safe(rowData.get("END_DTIME"));					//전송기간(종료일시)
						String holidaySendYn	= StringUtil.safe(rowData.get("HOLIDAY_SEND_YN"));		//휴일전송여부(Y/N)
						
						log.debug(
								"[CommonFilter] createSchedule() EXEC-LIST i={} USE_YN={}, TITLE:{}, CONT_DESC:{}, CRON_EXPR:{}, JAVA_SVC_NM:{}, SEND_TYPE_CD:{}, DATE_TERM_USE_YN:{}" +
								", STR_DTIME:{}, END_DTIME:{}, HOLIDAY_SEND_YN:{}",
								i, useYn, title, contDesc, cronExpr, javaSvcNm, sendTypeCd, dateTermUseYn, strDtime, endDtime, holidaySendYn);
	
						if("Y".equals(useYn)) {
		
							if(CronExpression.isValidExpression(cronExpr)) {
	
								Trigger trigger = regScheduleJob(rowData, holiDayList);
								
								if(trigger != null) {
									//STATUS = '1'로 업데이트 칠 대상
									String expectExecDtimeStr = StringUtil.safe(getTriggerTop5DateString(trigger, holidaySendYn, holiDayList));
									log.debug("[CommonFilter] createSchedule() expectExecDtimeStr:[{}]", expectExecDtimeStr);
									if(!"".equals(expectExecDtimeStr)) {
										fommScheduleJobSvc.saveFommScheDuleJobDt(jobNo, "1", expectExecDtimeStr);
									}
								}
							}
						}
					}
				}
	
				//2. 예약작업 처리 대상 내역을 조회하여 예약작업을 등록
				log.debug("[CommonFilter] createSchedule() CALL=selectReserveJobList()");
				condMap = new HashMap<String, Object>();
				condMap.put("EXEC_YN", "N");
				condMap.put("SEND_TARG_YN", "Y");
				scheList = fommScheduleJobSvc.selectReserveJobList(condMap);
		
				if(scheList != null) {
					
					for (int i = 0; i < scheList.size(); i++) {
						
						Map<String, Object> rowData = scheList.get(i);
						
						String reserveNo			= StringUtil.safe(rowData.get("RESERVE_NO"));				//JOB_NO
						String javaSvcNm			= StringUtil.safe(rowData.get("JAVA_SVC_NM"));			//처리 서비스
						String execDtime			= StringUtil.safe(rowData.get("EXEC_DTIME"));				//전송기간(시작일)
						String pk1						= StringUtil.safe(rowData.get("PK1"));							//PK1
						String pk2						= StringUtil.safe(rowData.get("PK2"));							//PK1
						String pk3						= StringUtil.safe(rowData.get("PK3"));							//PK1
	
						log.debug(
								"[CommonFilter] createSchedule() EXEC-LIST i={}, RESERVE_NO:{} JAVA_SVC_NM:{}, EXEC_DTIME:{}, PK1:{}, PK2:{}, PK3:{}",
								i, reserveNo, javaSvcNm, execDtime, pk1, pk2, pk3
						);
						regScheduleReserve(rowData);
					}
				}
			}

		}catch (SchedulerException e) {
	        e.printStackTrace();
	    }
	}

	public static Trigger getTrigger(Map<String, Object> rowData, List<Map<String, Object>> holiDayList) {

		String jobNo						= StringUtil.safe(rowData.get("JOB_NO"));
		String cronExpr				= StringUtil.safe(rowData.get("CRON_EXPR"));
		String dateTermUseYn		= StringUtil.safe(rowData.get("DATE_TERM_USE_YN"), "N");
		String strDtTimeStr			= "";
		String endDtTimeStr			= "";
		Date strDateTime				= null;
		Date endDateTime			= null;

		if("Y".equals(dateTermUseYn)) {
			strDtTimeStr		= StringUtil.safe(rowData.get("STR_DTIME"), "20250101000000");	//전송기간(시작일시)
			endDtTimeStr	= StringUtil.safe(rowData.get("END_DTIME"), "99991231235959");	//전송기간(시작일시)

		}else {
			strDtTimeStr	= "20250101000000";
			endDtTimeStr	= "99991231235959";
		}

		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		strDateTime = StringUtil.getDateTimeFromString(strDtTimeStr, true);
		endDateTime = StringUtil.getDateTimeFromString(endDtTimeStr, true);

		logs.debug("getTrigger() strDtTime:[{}] endDtTime:[{}]", df.format(strDateTime), df.format(endDateTime));
		
		Trigger trigger = TriggerBuilder.newTrigger()
				.startAt(strDateTime)
				.endAt(endDateTime)
				.withIdentity(jobNo, "JOB_TRRIGER_NO")
				.withSchedule(CronScheduleBuilder.cronSchedule(cronExpr))
				.build();

		Date firstDate = trigger.getFireTimeAfter(null);

		if(firstDate != null) {
			logs.debug("getTrigger() firstDate:[{}]", df.format(firstDate));
			return trigger;

		}else {
			logs.debug("getTrigger() firstDate is Null");
			return null;
		}
	}

	public static String getTriggerTop5DateString(Trigger trigger, String holidaySendYn, List<Map<String, Object>> holiDayList) {

		String expectExecDtimeStr = "";
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		Date firstDate = trigger.getFireTimeAfter(null);
		Date execDate;
		Date nextDate = null;
		String[] dateStrArr = new String[5];
		
		if(firstDate != null) {
			
			execDate = firstDate;
			dateStrArr[0] = df.format(execDate);
		
			if(firstDate != null && (StringUtil.isWeekEnd(execDate) || isListExistsDate(holiDayList, "YYYYMMDD", execDate)) ) {
				if(!"Y".equals(holidaySendYn)) {
					dateStrArr[0] += "(휴일)";
				}
			}
			logs.debug("[trigger] 현재시간:[{}], 최초실행일시:[{}]", df.format(execDate), dateStrArr[0]);
			
			for (int i = 1; i < 5; i++) {
				nextDate = trigger.getFireTimeAfter(execDate);

				if(nextDate != null) {
					
					dateStrArr[i]	= df.format(nextDate);

					if(nextDate != null && (StringUtil.isWeekEnd(nextDate) || isListExistsDate(holiDayList, "YYYYMMDD", nextDate)) ) {
						if(!"Y".equals(holidaySendYn)) {
							dateStrArr[i] += "(휴일)";
						}
					}
					execDate = nextDate;
					logs.debug("trigger {}번째 nextDate:[{}]", (i+1), df.format(nextDate));

				}else {
					logs.debug("trigger {}번째 nextDate:[{}]", (i+1), "없음");
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
		}
		return expectExecDtimeStr;
	}

	//통보 배치 스케쥴러 등록
	public static Trigger regScheduleJob(Map<String, Object> rowData, List<Map<String, Object>> holiDayList) {

		logs.debug("[CommonFilter] regScheduleJob()");
		
		try {

			String jobNo	= StringUtil.safe(rowData.get("JOB_NO"));
			String tilte		= StringUtil.safe(rowData.get("TITLE"));
			
			//JobBuilder 를 통해서 스케줄러에 줄 파리미터인 JobDetail을 생성합니다.
			JobDetail jobDetail = JobBuilder.newJob()
					.ofType(SppScheduleExecuteJob.class)	//해당 job이 실행될 때 실행되는 클래스
					.withIdentity(jobNo, "JOB_NO")					//스케줄러가 JobDetail 을 다른 JobDetail 들과 구별하기 위한 일종의 아이디를 제공합니다.
					.withDescription(tilte)								//이 일(JobDetail)에 대한 설명을 작성해줍니다.
					.build();

			Trigger trigger = getTrigger(rowData, holiDayList);

			if(trigger != null) {
				//logs.debug("[CommonFilter] regScheduleJob() jobDetail.getKey().toString() : " + jobDetail.getKey().toString());
				if(trigger.getFireTimeAfter(null) != null) {
					SimpleDateFormat logFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					//logs.debug("[CommonFilter] regScheduleJob() logFormat.format(trigger.getFireTimeAfter(null)) : " + logFormat.format(trigger.getFireTimeAfter(null)));					
					scheduler.scheduleJob(jobDetail, trigger);	//jobDetail, trigger를 하나의 쌍으로 스케쥴러에 등록

				}else {
					logs.debug("[CommonFilter] regScheduleJob() trigger.getFireTimeAfter(null) is null");
				}
				return trigger;
			}else {
				logs.debug("[CommonFilter] regScheduleJob() trigger is null");
				return null;
			}

		}catch(SchedulerException e) {
			logs.debug("[CommonFilter] regScheduleJob() [Exception e] : " + e.getMessage());
		}
		return null;
	}

	//통보 배치 스케쥴러 JOB 중지
	public static void stopScheduleJob(String jobKey) throws Exception {

		if(scheduler != null) {

			try {

				boolean isExist = CommonFilter.getScheduler().checkExists(new JobKey(jobKey, "JOB_NO"));
				
				if(isExist) {
					scheduler.pauseJob(new JobKey(jobKey, "JOB_NO"));
					//fommScheduleJobSvc.updateJobStop(jobKey);
					//Object[] objectParam = new Object[1];
					//objectParam[0] = jobKey;
					//executeServiceMethod("com/FommScheduleJob/updateJobStop", objectParam);
				}

			}catch(SchedulerException e) {
				logs.debug("[CommonFilter] stopScheduleJob() [getJobKeys] e.getMessage() : " + e.getMessage());
			}
		}
	}
		
	//통보 배치 스케쥴러 JOB 삭제
	public static void removeScheduleJob(String jobKey) throws Exception{

		if(scheduler != null) {

			try {

				boolean isExist = CommonFilter.getScheduler().checkExists(new JobKey(jobKey, "JOB_NO"));

				if(isExist) {
					scheduler.interrupt(new JobKey(jobKey, "JOB_NO"));
					scheduler.deleteJob(new JobKey(jobKey, "JOB_NO"));
//					fommScheduleJobSvc.deleteJob(jobKey);
					//Object[] objectParam = new Object[1];
					//objectParam[0] = jobKey;
					//executeServiceMethod("com/FommScheduleJob/deleteJob", objectParam);
				}

			}catch(SchedulerException e) {
				logs.debug("[CommonFilter] removeScheduleJob() e.getMessage() : " + e.getMessage());
			}
		}
	}

	//예약 스케쥴러 JOB 등록
	public static void regScheduleReserve(Map<String, Object> rowData) {

		try {
			//JobBuilder 를 통해서 스케줄러에 줄 파리미터인 JobDetail을 생성합니다.
			JobDetail jobDetail = JobBuilder.newJob()
					.ofType(SppScheduleExecuteJob.class)																	//해당 job이 실행될 때 실행되는 클래스
					.withIdentity(StringUtil.safe(rowData.get("RESERVE_NO")), "RESERVE_NO")				//스케줄러가 JobDetail 을 다른 JobDetail 들과 구별하기 위한 일종의 아이디를 제공합니다.
					.withDescription("예약번호:[" + StringUtil.safe(rowData.get("RESERVE_NO")) + "]")	//이 일(JobDetail)에 대한 설명을 작성해줍니다.
					.build();

			Date curDate = new Date();
			
			String execDTimeStr	= StringUtil.safe(rowData.get("EXEC_DTIME")); //예약실행일시
			Date execDTime = StringUtil.getDateTimeFromString(execDTimeStr, true);

			logs.debug("[CommonFilter] regScheduleReserve() curDate:[{}], execDTimeStr:[{}]", curDate, execDTimeStr);
			
			//if(curDate.equals(execDTime) || curDate.before(execDTime)) {
			
			logs.debug("curDate.before(execDTime) : " + curDate.before(execDTime));
			if(curDate.before(execDTime)) {

				Trigger trigger = TriggerBuilder.newTrigger()
						.startAt(execDTime)
						.withIdentity(StringUtil.safe(rowData.get("RESERVE_NO")), "REV_TRRIGER_NO")
						.forJob(StringUtil.safe(rowData.get("RESERVE_NO")), "RESERVE_NO")
						.build();

				logs.debug("trigger.getFireTimeAfter(null) : " + trigger.getFireTimeAfter(null));
				logs.debug("trigger.getNextFireTime() : " + trigger.getNextFireTime());
				
				if(trigger.getFireTimeAfter(null) != null) {
					scheduler.scheduleJob(jobDetail, trigger);	//jobDetail, trigger를 하나의 쌍으로 스케쥴러에 등록
					logs.debug("[CommonFilter] regScheduleReserve() REG curDate:[{}], execDTimeStr:[{}]", curDate, execDTimeStr);
				}else {
					logs.debug("[CommonFilter] regScheduleReserve() REG curDate:[{}], execDTimeStr:[{}]", curDate, execDTimeStr);
				}
				
			}
//				logs.debug("[CommonFilter] regScheduleReserve() jobDetail.getKey().toString() : " + jobDetail.getKey().toString());

		}catch(SchedulerException e) {
			logs.debug("[CommonFilter] regScheduleReserve() [Exception e] : " + e.getMessage());
		}
	}

	//예약 스케쥴러 JOB 삭제
	public static void removeScheduleReserveJob(Scheduler scheduler, String reserveKey) throws Exception {

		if(scheduler != null) {

			try {
			
				boolean isExist = scheduler.checkExists(new JobKey(reserveKey, "RESERVE_NO"));

				if(isExist) {
					scheduler.interrupt(new JobKey(reserveKey, "RESERVE_NO"));
					scheduler.deleteJob(new JobKey(reserveKey, "RESERVE_NO"));
				}

			}catch(SchedulerException e) {
				logs.debug("[CommonFilter] removeScheduleReserveJob() e.getMessage() : " + e.getMessage());
			}
		}
	}
	
	public static boolean isListExistsDate(List<Map<String, Object>> holiDayList, String attrNm, Date compareDate) {

		SimpleDateFormat logFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		logs.debug("[CommonFilter] isListExistsDate() compareDate:[" + logFormat.format(compareDate) + "]");

		if("".equals(attrNm)) return false;

		if(holiDayList != null) {
			
			String compareDateStr = dateFormat.format(compareDate);
			
			for (int i = 0; i < holiDayList.size(); i++) {
				
				if(holiDayList.get(i).get(attrNm) instanceof Date) {
					
					String dateStr = dateFormat.format(holiDayList.get(i).get(attrNm));
					logs.debug("[CommonFilter] isListExistsDate()  IF i=" + i + " dateStr:[" + dateStr + "]");

					if(compareDateStr.equals(dateStr)) {
						logs.debug("[CommonFilter] isListExistsDate()  IF rowDate:[" + dateStr + "]");
						return true;
					}
					
				}else {
					String dateStr = StringUtil.safe(holiDayList.get(i).get(attrNm));
					logs.debug("[CommonFilter] isListExistsDate()  IF i=" + i + " dateStr:[" + dateStr + "]");

					if(compareDateStr.equals(dateStr)) {
						logs.debug("[CommonFilter] isListExistsDate()  ELSE rowDate:[" + dateStr + "]");
						return true;
					}
				}
			}
			
		}else {
			return false;
		}
		return false;
	}
}