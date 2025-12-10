package com.base.fwk.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
//@EnableScheduling
public class TestSchedule {

	private Logger log = LoggerFactory.getLogger(TestSchedule.class);

	@Scheduled(cron = "0 0 9 * * *")
	public void testSchedule() {
		log.debug("[TestSchedule]- 매일 9시 출근 ");
/*
	1. 하루에 한 번 DB에 저장 된 배치 일정 SELECT 
		1.1 FOMM0500WMapper >> selectScheduled01 
		1.2 param으로 NOTI_SND_DATE, NOTI_SND_DAY 보냄
	2. 오늘 날짜와 일치한다면 저장 된 시간에 지정 된 함수가 실행되도록 함
		2.1 if(NOTI_SND_GAP_TYPE == 'TERM_D') 시간 체크해서 실행
		2.2 if(NOTI_SND_GAP_TYPE == 'TERM_M') 날짜(DATE) 오늘과 같은 지 확인 후
			2.2.1 오늘 날짜와 같다면 시간 체크해서 실행
		2.3 if(NOTI_SND_GAP_TYPE == 'TERM_W') 요일(DAY) 	오늘과 같은 지 확인 후
			2.3.1 오늘 요일과 같다면 시간 체크해서 실행
*/			
		
	}
}