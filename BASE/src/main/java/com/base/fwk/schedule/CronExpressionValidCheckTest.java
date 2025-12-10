package com.base.fwk.schedule;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.quartz.CronExpression;
import org.quartz.CronScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.spi.MutableTrigger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.base.fwk.util.StringUtil;

public class CronExpressionValidCheckTest {

	private static final Logger log = LoggerFactory.getLogger(CronExpressionValidCheckTest.class);

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub

		Date date = StringUtil.getDateTimeFromString("20250219", true);
		log.debug("DATE:[20250219] true " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		date = StringUtil.getDateTimeFromString("20250219", false);
		log.debug("DATE:[20250219] false " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		
		date = StringUtil.getDateTimeFromString("2025021900", false);
		log.debug("DATE:[2025021900] false " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		
		date = StringUtil.getDateTimeFromString("20250219235959", true);
		log.debug("DATE:[20250219235959] true " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		
		date = StringUtil.getDateTimeFromString("20250219230000", false);
		log.debug("DATE:[20250219230000] false " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		
		date = StringUtil.getDateTimeFromString("2025023223", false);
		log.debug("XXXXX DATE:[2025023223] false " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());

		String execDateTime = StringUtil.rightPad("2025021920", 14,'0');
		String yyStr = execDateTime.substring(0, 4);
		String mmStr = execDateTime.substring(4, 6);
		String ddStr = execDateTime.substring(6, 8);
		String hhStr = execDateTime.substring(8, 10);
		String miStr = execDateTime.substring(10, 12);
		String ssStr = execDateTime.substring(12, 14);

		log.debug("DATE STR : " + yyStr + "/" + mmStr + "/" + ddStr + "/" + hhStr + "/" + miStr + "/" + ssStr);
		
		int yy = StringUtil.safeInt(yyStr) -1900;
		int mm = StringUtil.safeInt(mmStr) -1;
		int dd = StringUtil.safeInt(ddStr);
		int hh = StringUtil.safeInt(hhStr);
		int mi = StringUtil.safeInt(miStr);
		int ss = StringUtil.safeInt(ssStr);

		date.setYear(yy);
		date.setMonth(mm);
		date.setDate(dd);
		date.setHours(hh);
		date.setMinutes(mi);
		date.setSeconds(ss);
		log.debug("DATE : " + date.getYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds());
		
		String pattern = "yyyy-MM-dd HH:mm:ss";
		SimpleDateFormat sdf  = new SimpleDateFormat(pattern);
		String dateStr = sdf.format(date);

		log.debug("SIMPLE DATE :" + dateStr);
		
		Trigger trigger = TriggerBuilder.newTrigger().withSchedule(CronScheduleBuilder.cronSchedule("15 * * * * ?")).build();
		
		String cronExp = "15 * * * * ?";
		
		//1. Cron 표현식 유효성 검증
		if(CronExpression.isValidExpression(cronExp)) {
			
			//Cron 작업 스케쥴 Top.5 추출
			Date[] triDate = new Date[5];

			MutableTrigger mtt = CronScheduleBuilder.cronSchedule(cronExp).build();
			triDate[0] = mtt.getFireTimeAfter(null);

			for (int i = 1; i < 5; i++) {
				Date nextAfter = mtt.getFireTimeAfter(triDate[i-1]);
				triDate[i] = nextAfter;
			}

			for (int i = 0; i < 5; i++) {
				log.debug("i=" + i + " Date:[" + triDate[i] + "]");
			}
			
			log.debug("CRON EXPRESSION:[" + cronExp +  "] Is Valid CronExpression");
		}else {
			log.debug("CRON EXPRESSION:[" + cronExp +  "] Is InValid CronExpression");
		}

		cronExp = "15/ * * * * ?";
		
		if(CronExpression.isValidExpression(cronExp)) {
			log.debug("CRON EXPRESSION:[" + cronExp +  "] Is Valid CronExpression");
		}else {
			log.debug("CRON EXPRESSION:[" + cronExp +  "] Is InValid CronExpression");
		}
	}
}