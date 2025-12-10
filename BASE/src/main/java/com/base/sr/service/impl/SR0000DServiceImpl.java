package com.base.sr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.service.impl.FommScheduleJobServiceImpl;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fwk.schedule.SppJobControl;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.dao.SR0010DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR0000DService;
import com.base.sr.web.SRCommController;

/**
 * 
 * <pre>
 * @title
 * - 요청서 기본정보 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Service
public class SR0000DServiceImpl implements SR0000DService {

	@Inject
	private Provider<GlobalReqInfo> reqInfo;

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0000DDAO sr0000dDao;
	
	@Autowired
	private SR0010DDAO sr0010dDao;

	@Autowired
	private SRCommDAO srcommDao;

	@Autowired
	private FommScheduleJobServiceImpl fommScheduleJobSvcImpl;

	@Autowired
	private SppJobControl sppJobCotrol;

	private Logger log = LoggerFactory.getLogger(SRCommController.class);

	/**
	 * REQ_ID에 해당하는 REQ_TMPLAT_ID, REQ_TMPLAT_VER 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectReqTmplatIdVerByReqId(Map<String, Object> dsCond) {
		return sr0000dDao.selectReqTmplatIdVerByReqId(dsCond);
	}
	
	/**
	 * 요청서 기본정보 목록 조회
	 */	
	public Map<String, Object> select01(Map<String, Object> dsCond) {
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			dsCond.put("CUR_USER_ID", sc.get().getScUserId());
		}
		
		String isCopy = StringUtil.safe(dsCond.get("IS_COPY"), "N");
//		dsCond.put("ENC_USER_KEY", sc.get().getEncUserKey());
//		dsCond.put("FIRST_RAN_KEY", sc.get().getFirstRanKey());
//		dsCond.put("LAST_RAN_KEY", sc.get().getLastRanKey());
		dsCond.put("IS_COPY", isCopy);

		Map<String, Object> resultData = sr0000dDao.select01(dsCond);
		return resultData;
	}

	/**
	 * 요청서 기본정보 테이블 전체 원본 데이터 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectBaseInfo(Map<String, Object> dsCond) {
		return sr0000dDao.selectBaseInfo(dsCond);
	}
	
	/**
	 * USER_ID를 통해 결재 SEQ 추출
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectAppvSeq(Map<String, Object> dsCond) {
		return sr0000dDao.selectAppvSeq(dsCond);
	}
	
	/**
	 * 요청서 기본정보 저장
	 */
	public String save01(Map<String, Object> rowData) throws Exception {

		String userId 	= "";
		String lmpId 	= "";
		
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId 	= sc.get().getScUserId();
			lmpId 	= sc.get().getScLmpId();

		}else {
			userId 	= reqInfo.get().getReqUserId();
			lmpId 	= "ITSM";
		}

		log.debug("[SR0000DServiceImpl] save01() reqInfo.get().getTempSaveYn():[" + reqInfo.get().getTempSaveYn() + "] reqInfo.get().getSaveGubun():[" + reqInfo.get().getSaveGubun() + "] reqInfo.get().getWfFuncCd() : [" + reqInfo.get().getWfFuncCd() + "]");

		// DATA RowType 가져오기
    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
    	rowData.put("LMID",	userId);
    	rowData.put("LMPID",	lmpId);

    	if(!"Y".equals(reqInfo.get().getTempSaveYn())) {
    		if("WF_FUNC_00".equals(reqInfo.get().getWfFuncCd())) {
    			rowData.put("SAVE_GUBUN", reqInfo.get().getSaveGubun());	//REG
    		}
    	}
    	
    	String reqId = "";

    	if("I".equals(rowFlag)) {

    		reqId = StringUtil.safe(sr0000dDao.selectKey(rowData));
    		
//    		if("".equals(reqIdArr[0])) {
    		if("".equals(reqId)) {

    			sc.get().setScSessionMsg("요청서 ID 생성 규칙을 찾을 수 없어 요청서 등록이 불가능합니다.");
    			throw new Exception("");

    		}else {
    			rowData.put("REQ_ID", reqId);
    		}

//    		for(String name : rowData.keySet()) {
//    			log.debug("SR0000DServiceImpl() save01() Insert colNm : " + name + " colVal : " + rowData.get(name));
//    		}
    		sr0000dDao.insert01(rowData);

    	}else if("U".equals(rowFlag)) {
    		sr0000dDao.modify01(rowData);
    	}
    	return reqId;
	}

	/**
	 * 요청서 삭제
	 * @param dsData
	 */
	@Transactional
	public void delete01(Map<String, Object> rowData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
    	
    	sr0000dDao.remove01(rowData);
	}
	
	/**
	 * 요청서 회수(취소)
	 * @param dsData
	 */
	@Transactional
	public void cancel(Map<String, Object> rowData) {

		String userId		= sc.get().getScUserId();
		String orgUserId 	= sc.get().getScOrgUserId();
		String lmpId		= sc.get().getScLmpId();

		rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	sr0000dDao.cancel(rowData);

    	//log.debug("orgUserId======================================================>" + orgUserId);
    	
    	Map<String, Object> rowMap = new HashMap<>();
    	
    	rowMap.put("PROC_NUMBER", rowData.get("REQ_ID"));
    	rowMap.put("WF_PROC_CD", rowData.get("WF_PROC_CD"));
    	rowMap.put("APPR_NM", "회수");
    	rowMap.put("APPR_STAT_CD", "APST_90");		/* 결재상태코드[APPR_STAT_CD] - APST_00:[반려], APST_01:[승인대기], APST_02:[검토대기], APST_90:[등록], APST_99:[승인] */
    	rowMap.put("APPR_COMMENT", "등록자 회수 처리");
    	rowMap.put("APPR_GBN_CD", "A00");			/* 결재자구분코드[APPR_GBN_CD] - A00:[등록자], A01:[기안자], A02:[승인자], R01:[검토자] */
    	rowMap.put("SRM_USER_ID", userId);
    	rowMap.put("ORG_USER_ID", orgUserId);

    	srcommDao.insertWfProcHist(rowMap);

    	//회수시 결재선 삭제 처리
    	Map<String, Object> condMap = new HashMap<>();
    	
    	// 서비스/일반 요청서 등록시 순차진행이아니고 우회진행이기때문에 중간에 안보이는 요청서상태 삭제
    	if("WFT250033".equals(rowData.get("REQ_TMPLAT_ID")) || "WFT250048".equals(rowData.get("REQ_TMPLAT_ID")) || "WFT250049".equals(rowData.get("REQ_TMPLAT_ID"))){
    		condMap.put("REQ_ID", rowData.get("REQ_ID"));
    		condMap.put("WF_PROC_CD", "WF_PROC_2010");
        	sr0010dDao.remove01(condMap);
    	} else {
        	condMap.put("REQ_ID", rowData.get("REQ_ID"));
        	condMap.put("WF_PROC_CD", rowData.get("WF_PROC_CD"));
        	sr0010dDao.remove01(condMap);
    	}
	}
 
	/**
	 * 종료 처리
	 * @param rowData
	 */
	@Transactional
	public void updateStop(String reqId) {
		
		Map<String, Object> rowData = new HashMap<>();
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		rowData.put("REQ_ID", reqId);
		rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);
    	
    	sr0000dDao.updateStop(rowData);
	}

	/**
	 * 종료 처리
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrBaseEncEmptyList() {
	
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("USER_KEY", sc.get().getEncUserKey());
		List<Map<String, Object>> list = sr0000dDao.selectSrBaseEncEmptyList(condMap);
	
//		if(list != null) {
//			
//			for (int i = 0; i < list.size(); i++) {
//				String encReqId = StringUtil.encKeyData(StringUtil.safe(list.get(i).get("REQ_ID")));
//				String sumEncReqId = StringUtil.encKeyData(StringUtil.safe(list.get(i).get("REQ_ID")) + sc.get().getEncUserKey());
//				String rtnStr = "UPDATE SR_BASE_INFO SET " +
//						" ENC_REQ_ID = '" + encReqId + "' " +
//						"WHERE REQ_ID='" + list.get(i).get("REQ_ID") + "';";
//
//				log.debug(rtnStr);
//				
//				list.get(i).put("QUERY_STR", rtnStr);
//				list.get(i).put("ENC_REQ_ID", encReqId);
//				list.get(i).put("USER_KEY", sc.get().getEncUserKey());
//				list.get(i).put("MIX_USER_KEY", sumEncReqId);
//			}
//		}
		return list;
	}

	/**
	 * 폐기 처리
	 * @param rowData
	 */
	@Transactional
	public void updateDiscard(Map<String, Object> rowData) {

		rowData.put("LMID", sc.get().getScUserId());
    	rowData.put("LMPID", sc.get().getScLmpId());
    			
    	sr0000dDao.updateDiscard(rowData);		//폐기 처리;
    	
    	rowData.put("PROC_NUMBER", rowData.get("REQ_ID"));
    	rowData.put("WF_PROC_CD", rowData.get("WF_PROC_CD"));
    	rowData.put("APPR_STAT_CD", "APST_97");
    	rowData.put("SRM_USER_ID", sc.get().getScUserId());
    	rowData.put("APPR_COMMENT", "페기");
    	rowData.put("ORG_USER_ID", sc.get().getScOrgUserId());
    	srcommDao.insertWfProcHist(rowData);

    	srcommDao.insertEmptyWfProcEnd(rowData); // 완료 전에 종료되면 중간 단계에 건너뛰기를 Y로 업데이트 해줘야 함
	}

	/**
	 * 요청서 예약 등록
	 * @param rowData
	 */
//	@Transactional
	public void updateProcReserve(Map<String, Object> rowData) throws Exception {
		
		Map<String, Object> reserveData = new HashMap<>();
		reserveData.put("JAVA_SVC_NM",	"sr/SRComm/execReserveProc");			//요청서 예약등록 서비스
		reserveData.put("EXEC_DT",			rowData.get("RESERV_DT"));
		reserveData.put("EXEC_TIME",			rowData.get("RESERV_TIME") + "00");
		reserveData.put("WORK_DIV",			"REQ");
		reserveData.put("PK1",					rowData.get("REQ_ID"));
		reserveData.put("DEL_YN",				"N");
		reserveData.put("LMID",					sc.get().getScUserId());
		reserveData.put("LMPID",				sc.get().getScLmpId());
		
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("WORK_DIV",		"REQ");
		condMap.put("PK1",				rowData.get("REQ_ID"));

		List<Map<String, Object>> list = fommScheduleJobSvcImpl.selectReserveJobList(condMap);

		if(list != null) {
			
			for (int i = 0; i < list.size(); i++) {
				
				String reserveNo = StringUtil.safe(list.get(i).get("RESERVE_NO"));
				
				if(!"".equals(reserveNo)) {
					fommScheduleJobSvcImpl.removeReserveJobMt(reserveNo);
				    setProcStatusJob(reserveNo, "DELETE");
				}
			}
		}
		
		fommScheduleJobSvcImpl.insertReserveJobMt(reserveData);	//예약작업 내역을 등록한다.

		String reserveNo = StringUtil.safe(reserveData.get("RESERVE_NO"));		
		log.debug("[SR0000DServiceImpl] save01() changeGubun:[CREATE], reserveNo:[{}]", reserveNo);
	    setProcStatusJob("CREATE", reserveNo);
	    
	    rowData.put("LMID", sc.get().getScUserId());
    	rowData.put("LMPID", sc.get().getScLmpId());
    	
		sr0000dDao.updateProcReserve(rowData);
	}

	/**
	 * 요청서 예약 등록 취소
	 * @param rowData
	 */
	@Transactional
	public void updateProcCancelReserve(Map<String, Object> rowData) throws Exception {

		rowData.put("LMID", sc.get().getScUserId());
    	rowData.put("LMPID", sc.get().getScLmpId());
    	
    	sr0000dDao.updateProcCancelReserve(rowData);

    	Map<String, Object> condMap = new HashMap<>();
		condMap.put("WORK_DIV",		"REQ");
		condMap.put("PK1",				rowData.get("REQ_ID"));

		List<Map<String, Object>> list = fommScheduleJobSvcImpl.selectReserveJobList(condMap);
				
		if(list != null) {
			
			for (int i = 0; i < list.size(); i++) {
				
				String reserveNo = StringUtil.safe(list.get(i).get("RESERVE_NO"));
				
				if(!"".equals(reserveNo)) {
					log.debug("[SR0000DServiceImpl] save01() changeGubun:[DELETE], reserveNo:[{}]", reserveNo);
				    setProcStatusJob("DELETE", reserveNo);
				}
			}
		}
	}

	/**
	 * 요청 예약 등록 완료 처리
	 * @param rowData
	 */
//	@Transactional
	public void updateReservProcYn(String reqId) throws Exception {

		Map<String, Object> rowData = new HashMap<>();
		rowData.put("REQ_ID", reqId);
		rowData.put("LMPID", "ITSM");
    	sr0000dDao.updateReservProcYn(rowData);	
	}
	
//	@Transactional
	public void setProcStatusJob(String changeGubun, String reserveNo) throws Exception {
		
		log.debug("[SR0000DServiceImpl] setProcStatusJob() changeGubun:[{}], reserveNo:[{}]", changeGubun, reserveNo);
		
		if("CREATE".equals(changeGubun)) {
    		sppJobCotrol.createJob("RESERVE_NO", reserveNo);

    	}else if("UPDATE".equals(changeGubun)) {
    		//sppJobCotrol.stopJob(jobNo);
    		sppJobCotrol.removeJob("RESERVE_NO", reserveNo);
    		sppJobCotrol.createJob("RESERVE_NO", reserveNo);

    	}else if("STOP".equals(changeGubun)) {
    		
    		//sppJobCotrol.stopJob(jobNo);
    		sppJobCotrol.removeJob("RESERVE_NO", reserveNo);

    	}else if("DELETE".equals(changeGubun)) {
    		sppJobCotrol.removeJob("RESERVE_NO", reserveNo);
    	}
	}
}