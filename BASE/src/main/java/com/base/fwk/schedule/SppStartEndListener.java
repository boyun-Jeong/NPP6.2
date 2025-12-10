
package com.base.fwk.schedule;

import org.quartz.JobDetail;
import org.quartz.JobExecutionContext;
import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.base.com.service.FommScheduleJobService;
import com.base.filter.CommonFilter;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class SppStartEndListener implements ServletContextListener {

	private static final Logger log = LoggerFactory.getLogger(SppStartEndListener.class);
	
	@Autowired
	private FommScheduleJobService fommScheduleJobSvc;
	
	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		log.debug("[SppStartEndListener] contextInitialized()");
	}

	@Override
	public void contextDestroyed(ServletContextEvent ev) {
		log.debug("[SppStartEndListener] contextDestroyed() CALL");

		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);

		fommScheduleJobSvc.removeJobStatusAll();	//전체 초기화
		log.debug("SppStartEndListener contextDestroyed() CommonFilter.getScheduler() ============>" + CommonFilter.getScheduler());
		
		try {

			//Job 강제 중단
			if(CommonFilter.getScheduler() != null) {
				for (JobExecutionContext jobExecutionContext : CommonFilter.getScheduler().getCurrentlyExecutingJobs()) {
					final JobDetail jb = jobExecutionContext.getJobDetail();
					CommonFilter.getScheduler().interrupt(jb.getKey());
					CommonFilter.getScheduler().deleteJob(jb.getKey());
					log.debug("[jobExecutionContext] jb.getKey():[{}]", jb.getKey());
				}
//				Set<JobKey> allJobKeys = CommonFilter.getScheduler().getJobKeys(GroupMatcher.anyGroup());
//	
//		         allJobKeys.forEach((jobKey)->{
//		             try {
//		            	 CommonFilter.getScheduler().interrupt(jobKey);
//		             } catch (UnableToInterruptJobException e) {
//		                 e.printStackTrace();
//		             }
//		         });
		         CommonFilter.getScheduler().shutdown(true);
		         CommonFilter.getScheduler().clear();
		         CommonFilter.resetScheduler();
			}

		}catch (SchedulerException e) {
			log.debug("[SppStartEndListener] contextDestroyed() [catch]:{}", e.getMessage());
    		e.printStackTrace();
    	}
		log.debug("SppStartEndListener END ============>");
	}
}