package com.base.sr.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

/**
 * 
 * <pre>
 * @title
 * - SR요청 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 07. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 07. 22.	정보윤		최초작성
 */
public interface SR1000DService {

	/**
	 * SR요청 BA-IT 접수정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectMaBaItRev(Map<String, Object> dsCond);

	/**
	 * SR요청 BA-IT 체크리스트 정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectMaBaItRevChklst(Map<String, Object> dsCond);

	/**
	 * SR요청 BA-IT 접수정보 수정
	 * @param rowData
	 */
	public void modifyMaBaItRev(List<Map<String, Object>> dsData) throws Exception;

	/**
	 * SR요청 BA 접수정보 저장
	 * @param dsData
	 */
	public void saveMaBaRev(List<Map<String, Object>> dsData) throws Exception;

	/**
	 * SR요청 IT 담당자 접수정보 저장
	 * @param dsData
	 */
	public void saveMaItRev(List<Map<String, Object>> dsData) throws Exception;

	/**
	 * BA담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateBaChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;

	/**
	 * BA담당자 팀장 보안성심의 여부 평가 의견작성
	 * @param dsData
	 */
	public void updateBaTeamChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;
	
	/**
	 * IT담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItCgerChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;

	/**
	 * IT담당자 팀장 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItTeamChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;

	/**
	 * IT담당자 등급 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItCgerGrdChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;

	/**
	 * IT담당자 팀장 등급 평가 서명 및 의견작성
	 * @param dsData
	 */
	public void updateItTeamGrdChklstInfo(Map<String, Object> dsBaChklstInfo) throws Exception;

	/**
	 * IT담당자 보안성심의 평가 등록시 보안등급 UPDATE
	 * @param dsData
	 */
	public void updateSecureGradeCd(Map<String, Object> dsCond) throws Exception;

	/**
	 * IT담당자 등급평가 등록시 위험등급 UPDATE
	 * @param dsData
	 */
	public void updateDangerGradeCd(Map<String, Object> dsCond) throws Exception;

	/**
	 * SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param dsData
	 */
	public void updateSrBaseReqDate(Map<String, Object> dsSrMaBaItRev) throws Exception;
	
	/**
	 * 마스터 프로젝트 등록
	 * @param rowData
	 */
	public void mergeMasterPrject() throws Exception ;
	
	/**
	 * 서브 프로젝트 등록
	 * @param rowData
	 * @return 
	 */
	public void newSubPrj(Map<String, Object> dsCond) throws Exception ;

	/**
	 * 서브 프로젝트 PL 변경
	 * @param rowData
	 * @return 
	 */
	public void updateSubPrjPl(Map<String, Object> dsCond) throws Exception ;

	/**
	 * SR요청 서브 프로젝트 내역 등록
	 * @param dsCond
	 * @return
	 */
	public void insertSrMaPrjSub(Map<String, Object> dsCond);
	
	/**
	 * SR요청 BA, IT 담당자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectBaItCger(Map<String, Object> dsCond);
	
	/**
	 * SR요청 마스터 프로젝트 정보 조회
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectSrMaPrjMaster(Map<String, Object> dsCond);

	/**
	 * SR요청  프로젝트 마스터/서브 프로젝트 전체 정보 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjAll(Map<String, Object> dsCond);

	/**
	 * SR요청  프로젝트 내역 수정
	 * @param dsCond
	 * @return
	 */
	public void updateSrMaPrj(Map<String, Object> dsCond);

	/**
	 * SR요청 서브 프로젝트 내역 삭제(삭제여부 Y처리)
	 * @param dsCond
	 * @return
	 */
	public void removeSrMaPrj(List<Map<String, Object>> dsData);
	
	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateRtrnBaSecChklst();

	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateRtrnItSecGrdChklst();

	/**
	 * 마스터 프로젝트에 해당하는 진행중인 서브프로젝트 건수
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectSubPrjProcCnt(Map<String, Object> dsCond);
	
	/**
	 * 마스터 프로젝트 기준 최초 이행배포일시 체크 (1주일 지난경우는 서브프로젝트 추가할수 없음)
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectRimsDtChk(Map<String, Object> dsCond);

	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param dsCond
	 * @return
	 */
	public void updateMasterPrjEndDt(Map<String, Object> rowData);

	/**
	 * 보안담당자 결재시 보안등급 저장
	 * @param rowData
	 */
	public void updateSecGrade(Map<String, Object> rowData);

	/**
	 * PMO 결재 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkPMOProc() throws Exception;

	/**
	 * 보안담당자 결재 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkSecCgerProc() throws Exception;
	
	/**
	 * 서브프로젝트 구성원 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjMber(Map<String, Object> dsCond);

	/**
	 * 마스터 프로젝트 종료/중단 요청서 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectMasterReqList(Map<String, Object> dsCond);

	/**
	 * 서브 프로젝트 변경 신청 내용 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrBaseInfo_subPrj(Map<String, Object> dsCond);

	/**
	 * 마스터 프로젝트 진행중 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjIngReq(Map<String, Object> rowData);
	
	/**
	 * 마스터 프로젝트 종료 요청 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjEndReq(Map<String, Object> rowData);

	/**
	 * 프로젝트 수행 → PMO 종료 단계 전환(임시)
	 * @param rowData
	 */
	public void procSrMasterWfProcCd(Map<String, Object> rowData) throws Exception;
	
	/**
	 * 마스터 프로젝트 중단 요청 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjStopReq(Map<String, Object> rowData);
	
	/**
	 * 요청서 종결
	 * @param dsData
	 */
	public void quit(Map<String, Object> rowData);
	
	/**
	 * 요청등록-[일반] PMO 종료 단계 폐기 가능 여부 체크
	 * @param dsCond
	 * @return
	 */
	public String selectDiscardCheck(Map<String, Object> dsCond);

	/**
	 * 마스터 프로젝트 중단 요청 상태로 변경
	 * @param rowData
	 * @throws Exception 
	 */
	public void updateDisCard(Map<String, Object> rowData) throws Exception;
	
	/**
	 * SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param dsCond
	 * @return
	 */
	public void updateSubcommitTargYn(Map<String, Object> dsSrMaBaItRev);
	
	/**
	 * 체크리스트 위험평가구분에 따른 체크리스트 체크
	 * @param dsCond
	 * @return
	 */
	public void chkDangerDivChg(Map<String, Object> dsCond)  throws Exception;
	
	/**
	 * 변경대상평가 등록 기록삭제
	 * @param dsCond
	 * @return
	 */
	public void removeReqChgTargeChkist(Map<String, Object> rowData);
	
	/**
	 * 처리 단계시 요청자, BA, 팀장 리스트
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> nowStepActor(Map<String, Object> dsCond);
}