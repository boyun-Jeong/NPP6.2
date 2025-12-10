package com.base.com.service.impl;

import java.io.Reader;
import java.sql.Clob;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.dao.FommScheduleJobDAO;
import com.base.com.service.FommCodeService;
import com.base.com.service.FommScheduleJobService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        시스템의 모든 코드 조회 관리 ServiceImpl Class
 * @package com.base.com.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 00.	WEMB		최초작성
 */
@Service
public class FommScheduleJobServiceImpl implements FommScheduleJobService {

	private Logger log = LoggerFactory.getLogger(FommCodeService.class);

	@Autowired
	private FommScheduleJobDAO fommScheduleDao;

	/**
	 * 스케쥴 Job 상태 및 실행주기 정보 전체를 삭제한다.
	 * @param dsLogin
	 * @return
	 */
	@Transactional
	public void removeJobStatusAll() {
		fommScheduleDao.removeJobStatusAll();
	}
	
	/**
	 * 스케쥴 Job 목록 조회
	 */
	public List<Map<String, Object>> selectScheduleJobList(Map<String, Object> dsCond) throws Exception {
		String sendTypeCd 	= StringUtil.safe(dsCond.get("SEND_TYPE_CD"));
		if(!"".equals(sendTypeCd)) {
			String[] sendTypeCdArr = sendTypeCd.split(",");
			dsCond.put("SEND_TYPE_CD_ARR", sendTypeCdArr);
		}
		List<Map<String, Object>> dataList = fommScheduleDao.selectScheduleJobList(dsCond);

		String[] columns = new String[] {"CONT_DESC", "QUERY_DESC"};
		
		for (int i = 0; i < dataList.size(); i++) {

			for (int j = 0; j < columns.length; j++) {
				
				Clob clob = (Clob) dataList.get(i).get(columns[j]);

				if(clob != null) {
					Reader reader = clob.getCharacterStream();
					String str = IOUtils.toString(reader);
					if(reader != null)	reader.close();
					dataList.get(i).put(columns[j], str);
				}
			}
		}
		return dataList;
	}

	/**
	 * 스케쥴 Job 상태 및 실행주기 Top5를 반영한다.
	 */
	@Transactional
	public void saveFommScheDuleJobDt(String jobNo, String status, String expectExecDtime) {
		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("JOB_NO", jobNo);
		rowData.put("STATUS", status);
		rowData.put("EXPECT_EXEC_DTIME", expectExecDtime);
		fommScheduleDao.saveFommScheDuleJobDt(rowData);
	}

	/**
	 * 스케쥴 Job USE_YN = 'Y' 인 대상에 대한 JOB 배치 사용중지 처리 및 TOP5 작업 예정일시 정보 CLEAR
	 */
	@Transactional
	public void updateJobStop(String jobNo) {
		fommScheduleDao.updateJobStop(jobNo);
	}

	/**
	 * 스케쥴 Job 삭제
	 */
	@Transactional
	public void deleteJob(String jobNo) {
		fommScheduleDao.deleteJob(jobNo);
	}
	
	/**
	 * 스케쥴 Job 실행 후 실행 처리에 대한 이력 데이터 Insert
	 */
	@Transactional
	public void insertFommScheduleJobExecHist(String jobNo, String expectExecDtime, String exceptionMsg) {
		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("JOB_NO", jobNo);
		rowData.put("EXPECT_EXEC_DTIME", expectExecDtime);
		rowData.put("EXCEPTION_MSG", exceptionMsg);
		fommScheduleDao.insertFommScheduleJobExecHist(rowData);
	}

	/**
	 * 예약작업 목록을 조회한다.
	 */
	public List<Map<String, Object>> selectReserveJobList(Map<String, Object> dsCond) {
		return fommScheduleDao.selectReserveJobList(dsCond);
	}

	/**
	 * 예약작업 내역을 등록한다.
	 */
	@Transactional
	public void insertReserveJobMt(Map<String, Object> rowData) {
		fommScheduleDao.insertReserveJobMt(rowData);
	}
	
	/**
	 * 예약작업 내역을 처리 완료 상태로 변경한다.
	 */
	@Transactional
	public void updateReserveJobMt(String reserveNo) {
		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("RESERVE_NO", reserveNo);
		fommScheduleDao.updateReserveJobMt(reserveNo);
	}

	/**
	 * 예약작업 내역을 취소처리 한다.
	 */
	@Transactional
	public void removeReserveJobMt(String reserveNo) {
		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("RESERVE_NO", reserveNo);
		fommScheduleDao.removeReserveJobMt(rowData);
	}

	/**
	 * 예약작업 내역에 처리 이력을 등록한다.
	 */
	@Transactional
	public void insertReserveJobExecHist(String reserveNo, String expectExecDtime, String exceptionMsg) {
		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("RESERVE_NO", reserveNo);
		rowData.put("EXPECT_EXEC_DTIME", expectExecDtime);
		rowData.put("EXCEPTION_MSG", exceptionMsg);
		fommScheduleDao.insertReserveJobExecHist(rowData);
	}
}