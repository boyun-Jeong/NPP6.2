package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 Servlce Intreface
 * @package com.base.com.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2020. 04. 08.	WEMB		최초작성
 */
public interface FommScheduleJobService {

	/**
	 * 스케쥴 Job 상태 및 실행주기 정보 전체를 삭제한다.
	 * @param dsLogin
	 * @return
	 */
	public void removeJobStatusAll();
	
	/**
	 * 스케쥴 Job 목록 조회
	 */
	public List<Map<String, Object>> selectScheduleJobList(Map<String, Object> dsCond) throws Exception;

	/**
	 * 스케쥴 Job 상태 및 실행주기 Top5를 반영한다.
	 */
	public void saveFommScheDuleJobDt(String jobNo, String status, String expectExecDtime);

	/**
	 * 스케쥴 Job USE_YN = 'Y' 인 대상에 대한 JOB 배치 사용중지 처리 및 TOP5 작업 예정일시 정보 CLEAR
	 */
	public void updateJobStop(String jobNo);

	/**
	 * 스케쥴 Job 삭제
	 */
	public void deleteJob(String jobNo);

	/**
	 * 스케쥴 Job 실행 후 실행 처리에 대한 이력 데이터 Insert
	 */
	public void insertFommScheduleJobExecHist(String jobNo, String expectExecDtime, String exceptionMsg);

	/**
	 * 예약작업 목록을 조회한다.
	 */
	public List<Map<String, Object>> selectReserveJobList(Map<String, Object> dsCond);

	/**
	 * 예약작업 내역을 등록한다.
	 */
	public void insertReserveJobMt(Map<String, Object> rowData);
	
	/**
	 * 예약작업 내역을 처리 완료 상태로 변경한다.
	 */
	public void updateReserveJobMt(String reserveNo);

	/**
	 * 예약작업 내역을 취소처리 한다.
	 */
	public void removeReserveJobMt(String reserveNo);

	/**
	 * 예약작업 내역에 처리 이력을 등록한다.
	 */
	public void insertReserveJobExecHist(String reserveNo, String expectExecDtime, String exceptionMsg);
}