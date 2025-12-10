package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 DAO
 * @package com.base.com.dao
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            변경자      내용
 * ------------------------------------------------
 * 2023. 04. 00.  WEMB    	최초작성
 */
@Repository
public interface FommScheduleJobDAO {

	/**
	 * 스케쥴 Job 상태 및 실행주기 정보 전체를 삭제한다.
	 * @param dsLogin
	 * @return
	 */
	public void removeJobStatusAll();
	
	/**
	 * 스케쥴 Job 목록 조회
	 * @param dsLogin
	 * @return
	 */
	public List<Map<String, Object>> selectScheduleJobList(Map<String, Object> dsCond);

	/**
	 * 스케쥴 Job 상태 및 실행주기 Top5를 반영한다.
	 * @param dsLogin
	 * @return
	 */
	public void saveFommScheDuleJobDt(Map<String, Object> dsCond);
	
	/**
	 * 스케쥴 Job USE_YN = 'Y' 인 대상에 대한 JOB 배치 사용중지 처리 및 TOP5 작업 예정일시 정보 CLEAR
	 * @param dsLogin
	 * @return
	 */
	public void updateJobStop(String jobNo);

	/**
	 * 스케쥴 Job 삭제
	 * @param dsLogin
	 * @return
	 */
	public void deleteJob(String jobNo);
	
	/**
	 * 스케쥴 Job 실행 후 실행 처리에 대한 이력 데이터 Insert
	 * @param dsLogin
	 * @return
	 */
	public void insertFommScheduleJobExecHist(Map<String, Object> dsCond);
	
	/**
	 * 예약작업 목록을 조회한다.
	 * @param dsLogin
	 * @return
	 */
	public List<Map<String, Object>> selectReserveJobList(Map<String, Object> dsCond);

	/**
	 * 예약작업 내역을 등록한다.
	 * @param dsLogin
	 * @return
	 */
	public void insertReserveJobMt(Map<String, Object> rowData);
	
	/**
	 * 예약작업 내역을 처리 완료 상태로 변경한다.
	 * @param dsLogin
	 * @return
	 */
	public void updateReserveJobMt(String reserveNo);

	/**
	 * 예약작업 내역을 취소처리 한다.
	 * @param dsLogin
	 * @return
	 */
	public void removeReserveJobMt(Map<String, Object> rowData);

	/**
	 * 예약작업 내역에 처리 이력을 등록한다.
	 * @param dsLogin
	 * @return
	 */
	public void insertReserveJobExecHist(Map<String, Object> rowData);
}
