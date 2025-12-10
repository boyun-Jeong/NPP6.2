package com.base.fwk.schedule;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import org.quartz.CronScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.base.filter.CommonFilter;
import com.base.fwk.util.StringUtil;

public class TestTrigger {

	private static Logger logs = LoggerFactory.getLogger(CommonFilter.class);
	
	public static void main(String[] args) {

		String cronExpr = "0/5 * * 1/1 * ?";
		String strDateTimeStr = StringUtil.safe("", "20250101000000");
//		String strDateTimeStr = StringUtil.safe("20250228100000", "20250101000000");
//		String endDateTimeStr = StringUtil.safe("", "99991231235959");
		String endDateTimeStr = StringUtil.safe("20250301180000", "99991231235959");

		Date strDateTime = null;
		Date endDateTime = null;

		if(!"".equals(strDateTimeStr)) {
			strDateTime = StringUtil.getDateTimeFromString(strDateTimeStr, true);
		}
		
		if(!"".equals(endDateTimeStr)) {
			endDateTime = StringUtil.getDateTimeFromString(endDateTimeStr, true);
		}
		
		logs.debug("getJobBatchTop5Date() strDateTimeStr:[{}] endDateTimeStr:[{}]", strDateTimeStr, endDateTimeStr);
		
		strDateTimeStr = StringUtil.safe(strDateTimeStr);
		endDateTimeStr = StringUtil.safe(endDateTimeStr);

		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
		df.setLenient(false);
		Date curDate = new Date();
		
		Trigger triggerS = TriggerBuilder.newTrigger()
				.startAt(strDateTime)
				.endAt(endDateTime)
				.withIdentity("TEST", "TRRIGER_NO")
				.withSchedule(CronScheduleBuilder.cronSchedule(cronExpr))
				.build();	

		SimpleDateFormat df2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date firstDate = null;
		Date execDate = null;
		Date nextDate = null;		

		firstDate = triggerS.getFireTimeAfter(null);
		execDate = firstDate;
		nextDate = null;

		if(execDate != null) {
			logs.debug("[triggerS] 현재시간:[{}], 최초실행일시:[{}]", df2.format(curDate), df2.format(execDate));
		}else {
			logs.debug("[triggerS] 현재시간:[{}], 최초실행일시:[{}]", df2.format(curDate), "없음");
		}
		
		for (int i = 1; i < 5; i++) {
			if(execDate != null) {
				nextDate = triggerS.getFireTimeAfter(execDate);
				logs.debug("triggerS {}번째 execDate:[{}], nextDate:[{}]", (i+1), df2.format(execDate), df2.format(nextDate));
				execDate = nextDate;
			}else {
				break;
			}
		}

//		for (int i = 1; i < 5; i++) {
//			
//	    	Date nextAfter = trigger.getFireTimeAfter((Date) rtnList.get(i-1).get("DAY"));
//	    	logs.debug("[CommonFilter] getJobBatchTop5Date() i=" + i + " nextAfter:[" + df2.format(nextAfter) + "]");
//	    	  
//	    	//i번째 작업 배치 일시가 작업시작일시와 같거나 i번째 작업 배치 일시가 작업시작일시보다 이후이고
//	    	//i번째 작업 배치 일시가 작업종료일시보다 작거나 i번째 작업 배치 일시가 작업종료일시와 같은 경우
//	    	if( (nextAfter.equals(strDateTime) || nextAfter.after(strDateTime)) && (nextAfter.before(endDateTime) || nextAfter.equals(endDateTime)) ) {
//	    		rtnMap.put("DAY", nextAfter);
//	    		if(StringUtil.isWeekEnd(nextAfter) || isListExistsDate(holiDayList, "YYYYMMDD", nextAfter)) {
//	    			rtnMap.put("HOLI_STR", "(휴일)");
//	    		}
//	    		rtnList.add(rtnMap);
//	    	}
//		}
	}
}