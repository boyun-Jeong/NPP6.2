package com.base.sr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR3000DDAO;
import com.base.sr.service.SR3000DService;

/**
 * 
 * <pre>
 * @title
 * - 요청관리 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  황채린
 * @since   2024. 09. 02.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 02.	황채린		최초작성
 */
@Service
public class SR3000DServiceImpl implements SR3000DService {

	private Logger log = LoggerFactory.getLogger(SR3000DServiceImpl.class);
	
	@Inject
	private Provider<GlobalReqInfo> reqInfo;
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR3000DDAO sr3000dDao;

	/**
	 * 요청관리 목록 조회
	 */
	public List<Map<String, Object>> selectReq(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr3000dDao.selectReq(dsCond);
		return result;
	}
	public List<Map<String, Object>> selectDtl(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr3000dDao.selectDtl(dsCond);
		return result;
	}
	
	public String selectReqTeamChk(Map<String, Object> dsCond) {
		return sr3000dDao.selectReqTeamChk(dsCond);
	}

	/**
	 * 요청관리 비상-현업-주간 등록 후 바로 실행SQL
	 */
	@Transactional
	public void insertSql(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	sr3000dDao.insertSql(rowData);
		}
	}

	/**
	 * 요청관리 비상-IT자체-주간 팀장승인 시 실행SQL
	 */
	@Transactional
	public void insertSqlIt(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	sr3000dDao.insertSqlIt(rowData);
		}
	}

	/**
	 * 요청관리 요청관리-폐기 등록 후 바로 실행SQL
	 */
	@Transactional
	public void insertSqlPg(List<Map<String, Object>> dsData) {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	sr3000dDao.insertSqlPg(rowData);
		}
	}

	
	/**
	 * 요청관리 비상-IT자체 등록 후 팀장 승인시 실행SQL (본부장x 팀장만)
	 */
	@Transactional
	public void insertAppvSql(List<Map<String, Object>> dsData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = dsData.get(0);
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	if("WF_PROC_2010".equals(reqInfo.get().getNextWfProcCd()) && "WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd()))
    	{
	    	sr3000dDao.insertSql(rowData);
    	}
	}

	/**
	 * 요청관리 저장
	 */
	@Transactional
	public void saveReq(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		sr3000dDao.insertReq(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr3000dDao.modifyReq(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr3000dDao.removeReq(rowData);
	    	}
		}
	}

	/**
	 * 요청관리 저장
	 */
	@Transactional
	public void saveDtl(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		sr3000dDao.insertDtl(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		sr3000dDao.modifyDtl(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		sr3000dDao.removeDtl(rowData);
	    	}
		}
	}
	
	
	

	
	
	
	/**
	 * IT작업신청서-IP신청서 내용 procedure 실행SQL
	 */
	@Transactional
	public void call_prc_opNwIpMt() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
	    sr3000dDao.call_prc_opNwIpMt(rowData);
	}	

	/**
	 * IT작업신청서-외주사번신청 내용 사번생성 procedure 실행SQL
	 */
	@Transactional
	public void call_prc_omUserMt_create() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
	    sr3000dDao.call_prc_omUserMt_create(rowData);
	}	


	/**
	 * IT작업신청서-외주사번신청 내용 사번해지, 연장 procedure 실행SQL
	 */
	@Transactional
	public void call_prc_omUserMt_update() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
	    sr3000dDao.call_prc_omUserMt_update(rowData);
	}	
	
	
	/**
	 * IT작업신청서-백업신청서  내용 실행SQL
	 */
	@Transactional
	public void insertBackupMt() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	sr3000dDao.insertBackupMt(rowData);
	}
	
	/**
	 * IT작업신청서-IP신청서 내용  실행SQL 사용안함 >> call_prc_opNwIpMt 대체함
	*/
	@Transactional
	public void insertNwIpMt() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
	    sr3000dDao.insertNwIpMt(rowData);
	}
	
	/**
	 * IT작업신청서-Cloud신청서  내용 실행SQL
	 */
	@Transactional
	public void insertOpCloudMt() {
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		Map<String, Object> rowData = new HashMap<String, Object>();
		rowData.put("REQ_ID", reqInfo.get().getReqId());
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	sr3000dDao.insertOpCloudMt(rowData);
	}	
	
}