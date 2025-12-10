package com.base.sr.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.DataTypes;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0720WDAO;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR5000DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR5000DService;
import com.base.sr.web.SRCommController;

/**
 * 
 * <pre>
 * @title
 * - 요청서등록 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  조병준
 * @since   2024. 12. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 12. 24.	조병준		최초작성
 */
@Service
public class SR5000DServiceImpl implements SR5000DService {

	private Logger log = LoggerFactory.getLogger(SRCommController.class);

	@Inject
	private Provider<SessionContext> sc;

	@Inject
	private Provider<GlobalReqInfo> reqInfo;
	
	@Autowired
	private FOMM0720WDAO fomm0720wDao;
	
	@Autowired
	private SR5000DDAO sr5000dDao;

	@Autowired
	private SRCommServiceImpl srCommSvcImpl;

	@Autowired
	private SRCommDAO srCommDao;

	/**
	 * 요청서등록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select01(dsCond);
		return result;
	}
	
	/**
	 * 요청서 카테고리 항목 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select02(dsCond);
		return result;
	}
	
	/**
	 * 서비스별 담당자 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select03(dsCond);
		return result;
	}
	
	/**
	 * 요청서용 구성항목 검색 팝업
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select04(dsCond);
		return result;
	}
	/**
	 * IP신청서 근무장소 하위뎁스 공통코드 조회
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select05(dsCond);
		return result;	
	}
	
	/**
	 * 업무분류조회
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select06(dsCond);
		return result;	
	}
	
	/**
	 * 요청서일괄등록 저장
	 */
//	@SuppressWarnings("unchecked")
	public void save01(List<Map<String, Object>> dsData) throws Exception {

		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}
		
		//List<Map<String, Object>> result = sr5000dDao.approver();
		
		for (int i = 0; i < dsData.size(); i++) { // 마지막데이터는 baseinfo로 저장되기때문에 그전 데이터까지 직접 인서트

			String userId = "";
			String lmpId = "";
			
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				userId 			= sc.get().getScUserId();
				lmpId 			= sc.get().getScLmpId();
			}else {
				userId 			= reqInfo.get().getReqUserId();
				lmpId 			= "ITSM";
			}
			
			Map<String, Object> SR_REQ_ID = sr5000dDao.select07(dsData.get(i));
			//String nullChk = REQ_ID.orElse("NULL");
			dsData.get(i).put("REQ_ID", SR_REQ_ID.get("REQ_ID"));
			dsData.get(i).put("LMPID", lmpId);
			
			//sr5000dDao.insert01(dsData.get(i)); // 요청서 등록
			
			sr5000dDao.insertTemp01(dsData.get(i)); // 요청서 등록
			sr5000dDao.insert02(dsData.get(i)); // 요청서 내용등록
			sr5000dDao.insert03(dsData.get(i)); // 요청서 단계별 담당자/검토자
			
			dsData.get(i).put("WF_PROC_CD","WF_PROC_1000");
			dsData.get(i).put("SEQ",1);
			sr5000dDao.insert04(dsData.get(i)); // 스킵여부 프로시저용 inset
			
	        /*dsData.get(i).put("WF_PROC_CD","WF_PROC_2010");
			 dsData.get(i).put("SEQ",2);
			sr5000dDao.insert04(dsData.get(i)); // 스킵여부 프로시저용 inset
			*/
			
			// 일괄등록 결재라인, 히스토리 등록
			Map<String, Object> rowData = dsData.get(i);
			
			rowData.put("REQ_ID",  SR_REQ_ID.get("REQ_ID"));
	    	rowData.put("SEQ",  1); 				// 승인순서
	    	rowData.put("USER_ID", userId);
	    	rowData.put("LMPID", lmpId);
	    	rowData.put("APPR_NM", "등록"); // 현재단계
	    	
	    	sr5000dDao.historyInsert(rowData);		// 등록 히스토리
			sr5000dDao.wfProcDel(rowData);	  		// 등록시 결재자 삭제후 지정
			sr5000dDao.wfProcInsert(rowData);	  	// 등록시 결재자 본인지정				
			//sr5000dDao.wfProcApprove(rowData); // 등록단계 결재자 지정후 결재승인처리
			sr5000dDao.historyDelete(rowData);  	// 등록-요청결재 히스토리, 자가결재이지만  히스토리맵에 필요없는 값이라고 생각해서 제거
			
			
			rowData.put("REQ_ID",  dsData.get(dsData.size()).get("REQ_ID")); // 첫번째 차수 결재라인 조회 저장
			List<Map<String, Object>> result = sr5000dDao.approver(rowData);

			for(int s=0; s<result.size(); s++) {
		    	rowData.put("LMID", userId);
		    	rowData.put("LMPID", lmpId);
		    	
		    	rowData.put("REQ_ID",  SR_REQ_ID.get("REQ_ID"));
		    	//rowData.put("WF_PROC_CD","WF_PROC_2010"); 			// 사전검토
		    	rowData.put("SEQ",  s+1);													// 승인순서
		    	rowData.put("USER_ID", result.get(s).get("USER_ID"));		// 승인자ID
		    	rowData.put("USER_NM", result.get(s).get("USER_NM"));	// 승인자
		    	rowData.put("DEPT_CD", result.get(s).get("DEPT_CD"));	// 승인자부서ID
		    	rowData.put("DEPT_NM", result.get(s).get("DEPT_NM"));	// 승인자부서명
		    	rowData.put("POS_NM", result.get(s).get("POS_NM"));		// 승인자직급
		    	rowData.put("CREATE_USER_ID",  userId);
	
		    	sr5000dDao.wfProcInsert(rowData);	
			}
		}
	}

public void approveUpdate(Map<String, Object> dsData) throws Exception {

	String userId = "";
	String lmpId = "";
	
	if("N".equals(reqInfo.get().getJobReserveYn())) {
		userId 			= sc.get().getScUserId();
		lmpId 			= sc.get().getScLmpId();
	}else {
		userId 			= reqInfo.get().getReqUserId();
		lmpId 			= "ITSM";
	}
		
		dsData.put("USER_ID", userId);
		dsData.put("LMPID", lmpId);
		
		// 버튼컨트롤 확인필요
		dsData.put("APV_BTN_YN", "Y");
		dsData.put("RTRN_BTN_YN", "Y");
		dsData.put("SAVE_BTN_YN", "Y");
		dsData.put("APV_BTN_TEXT", "승인");
		dsData.put("RTRN_BTN_TEXT", "반려");
		dsData.put("SAVE_BTN_TEXT", "저장");
		dsData.put("WF_PROC_CD", "WF_PROC_1000"); 	// 등록단계
		dsData.put("CREATE_USER_ID",  userId); 				// 등록자명
		
		// 승인순서 자가결재하려면 시퀀스0으로 두고 처리이력 히스토리에 남기고싶지않으면 0 이외의 숫자로 교체
		dsData.put("SEQ",  1);
		
		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}

		dsData.put("REQ_ID", reqInfo.get().getReqId());
			
		// 결재자 목록 조회
		List<Map<String, Object>> result = sr5000dDao.approver(dsData);

		sr5000dDao.wfProcDel(dsData);	  		// 등록시 결재자 삭제후 지정
		sr5000dDao.wfProcInsert(dsData);	  	// 등록시 결재자 본인지정
		
		sr5000dDao.wfProcUpdate(dsData);  	// 요청상태 등록(결재중)으로 변경
		
		sr5000dDao.wfProcApprove(dsData); 	// 등록단계 결재자 지정후 결재승인처리

		int outRtnCd = Integer.parseInt(StringUtil.safe(dsData.get("RTN_CD")));
		String outRtnMsg = StringUtil.safe(dsData.get("RTN_MSG"));

		log.debug("[SRCommServiceImpl]-save() [ERROR] [REG] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
		log.debug("[SRCommServiceImpl]-save() [ERROR] [REG] callPrSrReqWfProcNext  OUT_RTN_MSG:[" + outRtnMsg + "]");
		
		if(outRtnCd < 0) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
			}
			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
		}

		sr5000dDao.wfProcDel(dsData);	  		// 결재 처리후 결재 처리 내역 삭제
		sr5000dDao.historyDelete(dsData);  	// 등록-요청결재 히스토리, 자가결재이지만  히스토리맵에 필요없는 값이라고 생각해서 제거

		dsData.put("WF_PROC_CD",  "WF_PROC_2010");

		sr5000dDao.possYnUpdate(dsData);	// 자가 결재를 하게되면 회수권한이 사라짐으로 등록-사전검토 단계에서는 회수가능플래그
		
		for(int s=0; s<result.size(); s++) {
			dsData.put("LMID", userId);
	    	dsData.put("LMPID", lmpId);
	    	
	    	dsData.put("SEQ",  s+1);													// 승인순서
	    	dsData.put("USER_ID", result.get(s).get("USER_ID"));		// 승인자ID
	    	dsData.put("USER_NM", result.get(s).get("USER_NM"));	// 승인자
	    	dsData.put("DEPT_CD", result.get(s).get("DEPT_CD"));	// 승인자부서ID
	    	dsData.put("DEPT_NM", result.get(s).get("DEPT_NM"));	// 승인자부서명
	    	dsData.put("POS_NM", result.get(s).get("POS_NM"));		// 승인자직급
	    	dsData.put("CREATE_USER_ID",  userId);

	    	sr5000dDao.wfProcInsert(dsData);	//등록에서 지정한 결재선 사전검토단계 결재자로 등록
		}
		
		reqInfo.get().setOrgReqStatCd("RQST11");
		reqInfo.get().setReqStatCd("RQST11");
		reqInfo.get().setWfFuncCd("WF_FUNC_01");
		reqInfo.get().setNextWfProcCd("WF_PROC_2010");
		reqInfo.get().setNextWfFuncCd("WF_FUNC_04");
		reqInfo.get().setLastApprovalYn("Y");
		
		//다음 결재자 갱신
		srCommSvcImpl.setRenewNextApprUserByReqInfo();

		// 일괄등록 저장시 임시저장으로 변환후 체크리스트, 사용자테스트 작성
//		if("WFT250033".equals(reqInfo.get().getReqTmplatId()) && "요청결재".equals(reqInfo.get().getNextWfProcNm())) {
//			sr5000dDao.statCdReset(dsData);
//		}
	}
	
	/**
	 *  등록시 설정해놓은 사전검토자 결재라인 
	 */
	public List<Map<String, Object>> approver(Map<String, Object> dsWfSrm) {
		List<Map<String, Object>> result = sr5000dDao.approver(dsWfSrm);
		return result;
	}

	/**
	 * 요청서데이터 데이터셋 컨버전
	 */
	public DataSetList convertToDataSetList(List<Map<String, Object>> dsData) {

		DataSetList dsList = new DataSetList();
		DataSet ds = new DataSet("dsFormInfo"); 
		
		Map<String, Object> firstRow = dsData.get(0);
		for(String key : firstRow.keySet()) {
			ds.addColumn(key, DataTypes.STRING);
		}
		
		for(Map<String, Object> row : dsData) {
			int rowIndex = ds.newRow();
			for(String key : row.keySet()) {
				ds.set(rowIndex, key ,row.get(key) != null ? row.get(key).toString() : "");
			}
		}
		dsList.add(ds);
		return dsList;
		}
	
	/**
	 *  출입관리 상태조회
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select08(dsCond);
		return result;
	}
	
	/**
	 *  출입카드 번호 채번
	 */
	public List<Map<String, Object>> select09(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select09(dsCond);
		return result;
	}
	
	
	// 요청서별로 상이해서 선택적으로 결재 담당자를 선택하게끔 분리
	// 인프라 요청서 등록자가 소속된 기준으로 조회
	// 실제 사용시  사전협의자 - 요청접수자,  요청접수 - 현장관리자, 담당자 선택
	/**
	 * LVL1 담당자
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select10(dsCond);
		return result;
	}
	/**
	 * LVL2 현장대리인
	 */
	public List<Map<String, Object>> select11(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select12(dsCond);
		return result;
	}
	/**
	 * LVL3 QA
	 */
	public List<Map<String, Object>> select12(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select12(dsCond);
		return result;
	}
	/**
	 * LVL4 PL
	 */
	public List<Map<String, Object>> select13(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select13(dsCond);
		return result;
	}
	/**
	 * LVL5 팀장
	 */
	public List<Map<String, Object>> select14(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select14(dsCond);
		return result;
	}
	
	
	// 요청서 접수시 담당자 지정에 의한 조회쿼리
	/**
	 * 해당 담당자 전체 조회
	 */
	public List<Map<String, Object>> select15(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select10(dsCond);
		return result;
	}
	
	/**
	 * 해당 현장대리인 전체 조회
	 */
	public List<Map<String, Object>> select16(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select11(dsCond);
		return result;
	}
	
	/**
	 * 결재시 선택된 현장대리인 조회
	 */
	public List<Map<String, Object>> select17(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select17(dsCond);
		return result;
	}
	
	/**
	 * 결재시 선택된 담당자 조회
	 */
	public List<Map<String, Object>> select18(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select18(dsCond);
		return result;
	}
	
	/**
	 * 일반문의 담당자 조회
	 */
	public List<Map<String, Object>> select19(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select19(dsCond);
		return result;
	}
	
	/**
	 * 결재시 선택된 사전협의자 조회
	 */
	public List<Map<String, Object>> select20(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select15(dsCond);
		return result;
	}
	
	// 전산기기 접수시 담당자 지정에 의한 조회쿼리
	/**
	 * 서비스요청/전산기기 신청 QA 조회
	 */
	public List<Map<String, Object>> select21(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select21(dsCond);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기 사전협의자 조회
	 */
	public List<Map<String, Object>> select22(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select22(dsCond);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기 결재 팀장
	 */
	public List<Map<String, Object>> select23(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select23(dsCond);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기 해당 담당자 전체 조회
	 */
	public List<Map<String, Object>> select24(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select24(dsCond);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기 해당 현장대리인 전체 조회
	 */
	public List<Map<String, Object>> select25(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select25(dsCond);
		return result;
	}
	
	/**
	 * 담당자 본인결재
	 */
	public List<Map<String, Object>> reqUser(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.reqUser(dsCond);
		return result;
	}
	
	/**
	 * 서비스/일반요청 상태조회
	 */
	public List<Map<String, Object>> select26(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select26(dsCond);
		return result;
	}
	
	/**
	 * 문제관리 상태조회
	 */
	public List<Map<String, Object>> select33(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select33(dsCond);
		return result;
	}
	
	/**
	 * 서비스/일반요청 워크플로우 상태변경
	 */
	public void update01(Map<String, Object> dsData) {
		// 서비스 변경 요청시 조회상태값 변경처리중으로 수정
		if("1".equals(dsData.get("EM_YN"))) {
			sr5000dDao.update01(dsData);			
		};
	}
	
	/**
	 * 서비스 변경이관
	 */
//	@Transactional
	public void save02(Map<String, Object> dsWfChm) {

		if(dsWfChm == null || dsWfChm.isEmpty() || !"1".equals(dsWfChm.get("EM_YN"))) {
			return; // 데이터 체크
		}
		
		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("REQ_ID", dsWfChm.get("SRM_REQ_ID"));
		String chmCreYn = StringUtil.safe(sr5000dDao.selectWfSrmChmCreYn(condMap), "N");
		
		//SRM에서 CHM을 자동생성하지 않은 경우만 CHM 생성 처리
		if("N".contentEquals(chmCreYn)) {

			Map<String, Object> SR_REQ_ID = sr5000dDao.select07(dsWfChm);	   // 요청번호 채번
			dsWfChm.put("REQ_ID", SR_REQ_ID.get("REQ_ID"));
	
			sr5000dDao.insert01(dsWfChm); // 요청서 등록
			sr5000dDao.insert05(dsWfChm); // 요청서 변경이관 내용등록
			//sr5000dDao.insert06(dsWfChm); // 요청서 단계별 담당자/검토자
			
			sr5000dDao.insert04(dsWfChm); // 스킵여부 프로시저용 inset
			sr5000dDao.insert07(dsWfChm); // 릴레이션테이블 인서트
			
			sr5000dDao.histInsert(dsWfChm);	// 요청서 히스토리 추가 
	
			List<Map<String, Object>> STAFF_ID = sr5000dDao.select31(dsWfChm); // 담당자 조회
			
			for (int i = 0; i < STAFF_ID.size(); i++) {
				dsWfChm.put("STAFF_ID", STAFF_ID.get(i).get("STAFF_ID"));
				sr5000dDao.insert06(dsWfChm); // 요청서 단계별 담당자/검토자
			}
			
			//SRM 변경 자동 생성 여부 UPDATE 처리
			condMap.put("LMID", sc.get().getScUserId());
			sr5000dDao.updateWfSrmChmCreYn(condMap);
		}
	}
	
	/**
	 * 문제관리 변경이관
	 */
//	@Transactional
	public void save03(Map<String, Object> dsWfChm) {
		
		// 서비스 변경이관과 독립적 관리를 위해 분리시킴
		if(dsWfChm == null || dsWfChm.isEmpty()) {
			return; // 데이터 체크
		}

		Map<String, Object> condMap = new HashMap<String, Object>();
		condMap.put("REQ_ID", dsWfChm.get("SRM_REQ_ID"));
		List<Map<String, Object>> list = sr5000dDao.relationCnt(condMap);
		int cnt = 0;
		
		if(list != null) {
			cnt = list.size();
		}

		if(cnt == 0) {
		
			Map<String, Object> SR_REQ_ID = sr5000dDao.select07(dsWfChm);
			dsWfChm.put("REQ_ID", SR_REQ_ID.get("REQ_ID"));
	
			sr5000dDao.insert01(dsWfChm); // 요청서 등록
			sr5000dDao.insert05(dsWfChm); // 요청서 변경이관 내용등록
			//sr5000dDao.insert06(dsWfChm); // 요청서 단계별 담당자/검토자
			
			sr5000dDao.insert04(dsWfChm); // 스킵여부 프로시저용 inset
			sr5000dDao.insert07(dsWfChm); // 릴레이션테이블 인서트
			
			sr5000dDao.histInsert(dsWfChm);	// 요청서 히스토리 추가
			
			if(dsWfChm.get("CI_ID")  != null) {
				sr5000dDao.insert08(dsWfChm); // 변경 구성항목 등록 
			}
			
			List<Map<String, Object>> STAFF_ID = sr5000dDao.select31(dsWfChm); // 담당자 조회
			
			for (int i = 0; i < STAFF_ID.size(); i++) {
				dsWfChm.put("STAFF_ID", STAFF_ID.get(i).get("STAFF_ID"));
				sr5000dDao.insert06(dsWfChm); // 요청서 단계별 담당자/검토자
			}
		}
	}
	
	/**
	 * 문제관리 파일배포완료 -> 변경 상태값 변경, 담당자 지정
	 */
//	@Transactional
	public void save04(Map<String, Object> dsCond) {
		
		if(dsCond == null || dsCond.isEmpty()) {
			return; // 데이터 체크
		}
			
		Map<String, Object> SR_REQ_ID = sr5000dDao.select30(dsCond); // 변경요청번호 조회
		dsCond.put("REQ_ID", SR_REQ_ID.get("REL_REQ_ID"));

		sr5000dDao.update03(dsCond); 	// SR_BASE_INFO 상태값 변경
		sr5000dDao.insert09(dsCond); 	// 담당자 지정
	}
	
	/**
	 * 서비스/일반요청 회수 -> 등록 진행시  3가지 분기처리로 템플릿 ID 수정 
	 */
	public void update02(Map<String, Object> dsData) {
		
		// 서비스/일반요청와 요청서 일괄등록시 분기처리가 많아서 템플릿ID 맞추는 업데이트
		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}
		String reqTmplatId = StringUtil.safe(dsData.get("REQ_TMPLAT_ID"));

		if(!"".equals(reqTmplatId)) {
			reqInfo.get().setReqTmplatId(reqTmplatId);
		}
		sr5000dDao.update02(dsData);			
	}
	
	/**
	 * 문제관리 담당자 PL 조회
	 */
	public List<Map<String, Object>> select27(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select27(dsCond);
		return result;
	}
	
	/**
	 * 문제관리 담당자 조회
	 */
	public List<Map<String, Object>> select28(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select28(dsCond);
		return result;
	}
	
	/**
	 *  연관ID 조회
	 */
	public List<Map<String, Object>> relationId(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.relationId(dsCond);
		return result;
	}

	/**
	 *  변경 연관ID 조회
	 */
	public List<Map<String, Object>> chmRelationId(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.chmRelationId(dsCond);
		return result;
	}
	
	/**
	 *  업무분류별 체크리스트 조회
	 */
	public List<Map<String, Object>> upmuChkList(Map<String, Object> dsCond) {
		
		if(dsCond.get("REQ_ID") == null) {
			return null;
		}
		
		// 신규(추가)개발, 변경(개선)개발 경우에만 체크리스트의 세부항목표시, 아닌경우 공통영역만 표시
		if("REQC0AA0".equals(dsCond.get("REQ_ID2")) || "REQC0AB0".equals(dsCond.get("REQ_ID2"))) {
			dsCond.put("DETAIL_LIST", "Y");
		} else {
			dsCond.put("DETAIL_LIST", "N");
		}
		
		List<Map<String, Object>> result = sr5000dDao.upmuChkList(dsCond);
		return result;
	}
	
	/**
	 *  요청서 체크리스트 조회
	 */
	public List<Map<String, Object>> reqChkList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.reqChkList(dsCond);
		return result;
	}
	
	/**
	 * 서비스 결재요청시 등록자 팀장조회
	 */
	public List<Map<String, Object>> select29(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.select29(dsCond);
		return result;
	}
	
	/**
	 * 체크리스트 저장
	 */
	public void chkListSave(List<Map<String, Object>> dsData) {
		// TODO Auto-generated method stub
		
		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}

		for (int i = 0; i < dsData.size(); i++) {
			
			//List<Map<String, Object>> dataChk = sr5000dDao.reqChkList(dsData.get(i));
			if ("I".equals(dsData.get(i).get("ROWFLAG"))) {
				sr5000dDao.chkListSave(dsData.get(i));		// 저장					
			} else if("U".equals(dsData.get(i).get("ROWFLAG"))) {
				sr5000dDao.chkListUpdate(dsData.get(i));	// 업데이트					
			} else if("D".equals(dsData.get(i).get("ROWFLAG"))) {
				sr5000dDao.chkListDelete(dsData.get(i));		// 삭제
			}
		}	
	}
		
	/**
	 * 체크리스트 삭제
	 */
	public void chkListDelete(Map<String, Object> dsData) {
		sr5000dDao.chkListDelete(dsData);		// 삭제
	}
	/**
	 *  변경이관추가
	 */
	public void chmAdd(Map<String, Object> dsWfChm) {
		
			if(dsWfChm == null || dsWfChm.isEmpty()) {
				return; // 데이터 체크
			}
			
			Map<String, Object> SR_REQ_ID = sr5000dDao.select07(dsWfChm);	  		 	// 요청번호 채번
			dsWfChm.put("REQ_ID", SR_REQ_ID.get("REQ_ID"));
			
			Map<String, Object> REQ_TMPLAT_VER = sr5000dDao.select32(dsWfChm);   // 최종템플릿버전 조회
			dsWfChm.put("F_REQ_TMPLAT_VER", REQ_TMPLAT_VER.get("REQ_TMPLAT_VER"));
			
			sr5000dDao.insert01(dsWfChm); 		// 요청서 등록
			sr5000dDao.insert05(dsWfChm); 		// 요청서 변경이관 내용등록
			//sr5000dDao.insert06(dsWfChm); 	// 요청서 단계별 담당자/검토자
			
			sr5000dDao.insert04(dsWfChm); 		// 스킵여부 프로시저용 inset
			sr5000dDao.insert07(dsWfChm); 		// 릴레이션테이블 인서트

			sr5000dDao.histInsert(dsWfChm);	// 요청서 히스토리 추가 
			
			List<Map<String, Object>> STAFF_ID = sr5000dDao.select31(dsWfChm); // 담당자 조회
			
			for (int i = 0; i < STAFF_ID.size(); i++) {
				dsWfChm.put("STAFF_ID", STAFF_ID.get(i).get("STAFF_ID"));
				sr5000dDao.insert06(dsWfChm); // 요청서 단계별 담당자/검토자
			}
	}
	
	/**
	 * 유사요청건조회
	 */
	public List<Map<String, Object>> alikeSearch(Map<String, Object> dsCond) {
		
		if(dsCond.get("SR_BRIEF")!=null && !"".equals(dsCond.get("SR_BRIEF"))) {
			String strSchText = dsCond.get("SR_BRIEF").toString();
		
			List<List<String>> orStrCond = new ArrayList<>();
			
			if(strSchText != null && !"".equals(strSchText)) {
				String[] strParts = strSchText.split("\\|\\|");
				
				if(strParts.length>0) {			
					for(String strPart : strParts) {				
						List<String> andStrs = Arrays.asList(strPart.split("&&"));
						orStrCond.add(andStrs);
					}
				}
			}
			
			dsCond.put("orStrCond", orStrCond);			
		}
		
		if(dsCond.get("REQ_CONT")!=null && !"".equals(dsCond.get("REQ_CONT"))) {
			String strSchText = dsCond.get("REQ_CONT").toString();
		
			List<List<String>> orReqCond = new ArrayList<>();
			
			if(strSchText != null && !"".equals(strSchText)) {
				String[] strParts = strSchText.split("\\|\\|");
				
				if(strParts.length>0) {			
					for(String strPart : strParts) {				
						List<String> andStrs = Arrays.asList(strPart.split("&&"));
						orReqCond.add(andStrs);
					}
				}
			}
			
			dsCond.put("orReqCond", orReqCond);			
		}
		
		List<Map<String, Object>> result = sr5000dDao.alikeSearch(dsCond);
		return result;
	}
	
	/**
	 *  사용자테스트 조회조건 조회
	 */
	public List<Map<String, Object>> userTestInfo(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.userTestInfo(dsCond);
		return result;
	}
	
	/**
	 *  사용자테스트 목록 조회
	 */
	public List<Map<String, Object>> userTestList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr5000dDao.userTestList(dsCond);
		return result;
	}
	
	/**
	 *  요청서테스트 목록 조회
	 */
	public List<Map<String, Object>> reqTestList(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = sr5000dDao.reqTestList(dsCond);
		
		if("Y".equals(dsCond.get("UPMU_CHM"))){
			for(int i=0; i<result.size(); i++) {
				Map<String, Object> rowData = result.get(i);
				sr5000dDao.userTestDelete(rowData);
			}
		}
		// 상태변경 후 재조회
		List<Map<String, Object>> deleteResult = sr5000dDao.reqTestList(dsCond);
		return deleteResult;
	}
	
	/**
	 * 사용자테스트 목록 저장
	 */
	public void userTestSave(List<Map<String, Object>> dsData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
			
	    	if ("I".equals(rowFlag)) {
				sr5000dDao.userTestSave(rowData);	// 저장
			} else if("U".equals(rowFlag)) {
				fomm0720wDao.modify01(rowData);	// 업데이트					
			} else if("D".equals(rowFlag)) {
				sr5000dDao.userTestDelete(rowData);		// 삭제
			}
		}
	}
	
	/**
	 * 요청서테스트 목록 저장
	 */
	public void reqTestSave(List<Map<String, Object>> dsData) {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		if(dsData == null || dsData.isEmpty()) {
			return; // 데이터 체크
		}

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
			
	    	if ("I".equals(rowFlag)) {
				sr5000dDao.reqTestSave(rowData);		// 저장
			} else if("U".equals(rowFlag)) {
				sr5000dDao.reqTestUpdate(rowData);	// 업데이트
			} else if("D".equals(rowFlag)) {
				sr5000dDao.reqTestDelete(rowData);	// 삭제
			}
		}
	}

	public void reqTestDelete(Map<String, Object> dsData) {
		sr5000dDao.reqTestDelete(dsData);	// 삭제
	}

	/**
	 *  요청서 본문내용 수정
	 */
	public void contUpdate(Map<String, Object> dsContChk) {
		
		if(dsContChk == null || dsContChk.isEmpty()) {
			return; // 데이터 체크
		}

		sr5000dDao.contUpdate(dsContChk);		//  WF_SRM 메인테이블에 본문내용 업데이트
		sr5000dDao.contHisSave(dsContChk);	//  WF_SRM_CONT_CHG_HIST 히스토리 테이블 내역 저장
		
		List<Map<String, Object>> realtionCnt = sr5000dDao.relationCnt(dsContChk);	// 변경이관된 요청서가 있는지 확인
		
		if(realtionCnt.size() > 0) {
			dsContChk.put("REQ_ID", realtionCnt.get(0).get("REL_REQ_ID"));
			sr5000dDao.chmtUpdate(dsContChk);		//  WF_CHM 메인테이블에 본문내용 업데이트
		}
	}
	
	/**
	 *  요청서 본문내용 수정횟수
	 */
	public List<Map<String, Object>> contUpdateCnt(Map<String, Object> dsWfSrm) {
		List<Map<String, Object>> result = sr5000dDao.contUpdateCnt(dsWfSrm);
		return result;
	}
	
	/**
	 *  현장대리인 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkSiteUserProc() throws Exception {

		Map<String, Object> siteUser = new HashMap<>();
		siteUser.put("REQ_ID", reqInfo.get().getReqId());
		Map<String, Object> resultMap = sr5000dDao.checkSiteProc(siteUser);
		
		//if("e".equals(resultMap.get("REQ_USER_ID").toString().substring(0, 1)) || "P".equals(resultMap.get("REQ_USER_ID").toString().substring(0, 1))) {
		if(resultMap.get("SITE_USER_ID") == null) {
			return true; // 현장대리인 건너뛰기
		} else {
			return false;
		}
	}
	
	/**
	 * 발급ip 업데이트
	 */
	@Override
	public void connIpUpdate(Map<String, Object> dsParams) {
		// connIpUpdate
		sr5000dDao.connIpUpdate(dsParams);	
	}
	
	/**
	 * 전산기기 신청시 자산테이블 업데이트
	 */
	public void amAsstUpdate(List<Map<String, Object>> dsSrSysJunsan) {
		
		if(dsSrSysJunsan == null || dsSrSysJunsan.isEmpty()) {
			return; // 데이터 체크
		}
		
		for (int i = 0; i < dsSrSysJunsan.size(); i++) {
			Map<String, Object> rowData = dsSrSysJunsan.get(i);
		
			if("BIZC0V0AB".equals(dsSrSysJunsan.get(i).get("REQ_CLSS"))){
				// 회수 - 유휴
				rowData.put("ASSET_STAT_CD", "03");
			} else if ("BIZC0V0AA".equals(dsSrSysJunsan.get(i).get("REQ_CLSS")) || "BIZC0V0AC".equals(dsSrSysJunsan.get(i).get("REQ_CLSS"))) {
				// 신규,이동설치 - 운용
				rowData.put("ASSET_STAT_CD", "02");
			}
			sr5000dDao.amAsstUpdate(rowData);	  // 자산마스터
			sr5000dDao.amHwOaUpdate(rowData); // 전산장비테이블
		}
	}
	
	/**
	 * 요청서 단계 스킵한 부분의 단계업데이트
	 */
	public void procInsert(Map<String, Object> dsCond) {
		
		String userId = "";
		
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId 			= sc.get().getScUserId();
		}else {
			userId 			= reqInfo.get().getReqUserId();
		}
		
		dsCond.put("USER_ID", userId);
		sr5000dDao.procInsert(dsCond);	
	}
	
	public String selectChkListRegYn(Map<String, Object> dsCond) {
		// 신규(추가)개발, 변경(개선)개발 경우에만 체크리스트의 세부항목표시, 아닌경우 공통영역만 표시
		if("REQC0AA0".equals(dsCond.get("REQ_ID2")) || "REQC0AB0".equals(dsCond.get("REQ_ID2"))) {
			dsCond.put("DETAIL_LIST", "Y");
		} else {
			dsCond.put("DETAIL_LIST", "N");
		}
		Map<String, Object> rtnMap = sr5000dDao.selectChkListRegYn(dsCond);
		return StringUtil.safe(rtnMap.get("CHKLIST_REG_YN"), "N");
	}

	public String selectTestCaseRegYn(Map<String, Object> dsCond) {
		Map<String, Object> rtnMap = sr5000dDao.selectTestCaseRegYn(dsCond);
		return StringUtil.safe(rtnMap.get("TESTCASE_REG_YN"), "N");
	}

}