package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SR요청 DAO
 * @package com.base.sr.dao
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
@Repository
public interface SR1000DDAO {

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
	 * SR요청 BA-IT 접수정보 등록
	 * @param rowData
	 */
	public void insertMaBaItRev(Map<String, Object> rowData);

	/**
	 * SR요청 BA-IT 접수정보 수정
	 * @param rowData
	 */
	public void modifyMaBaItRev(Map<String, Object> rowData);
	
	
	/**
	 * SR요청 BA 접수정보 수정
	 * @param rowData
	 */
	public void modifyMaBaRev(Map<String, Object> rowData);

	/**
	 * SR요청 IT 접수정보 수정
	 * @param rowData
	 */
	public void modifyMaItRev(Map<String, Object> rowData);

	/**
	 * SR요청 PM 셋팅(BA 접수에서 IT접수구분 팀으로 접수한 경우 PM 지정이 안되어 있으므로 IT담당자 접수시점 현재 접수를 진행하는 담당자가 PM에 셋팅되도록 처리)  
	 * @param rowData
	 */
	public void modifyMaBaItRevPmUser(Map<String, Object> rowData);
	
	/**
	 * SR요청BA-IT 접수정보  삭제
	 * @param rowData
	 */
	public void removeMaBaItRev(Map<String, Object> rowData);
	
	/**
	 * BA담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param rowData
	 */
	public void updateBaChklstInfo(Map<String, Object> rowData);

	/**
	 * BA담당자 팀장 보안성심의 여부 평가 의견작성
	 * @param rowData
	 */
	public void updateBaTeamChklstInfo(Map<String, Object> rowData);

	/**
	 * IT담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param rowData
	 */
	public void updateItCgerChklstInfo(Map<String, Object> rowData);

	/**
	 * IT담당자 팀장 보안성심의 여부 평가 서명 및 의견작성
	 * @param rowData
	 */
	public void updateItTeamChklstInfo(Map<String, Object> rowData);

	/**
	 * IT담당자 등급 평가 서명 및 의견작성
	 * @param rowData
	 */
	public void updateItCgerGrdChklstInfo(Map<String, Object> rowData);

	/**
	 * IT담당자 팀장 등급 평가 서명 및 의견작성
	 * @param rowData
	 */
	public void updateItTeamGrdChklstInfo(Map<String, Object> rowData);

	/**
	 * IT담당자 보안성심의 평가 등록시 보안등급 UPDATE
	 * @param rowData
	 */
	public void updateSecureGradeCd(Map<String, Object> rowData);

	/**
	 * IT담당자 등급평가 등록시 위험등급 UPDATE
	 * @param rowData
	 */
	public void updateDangerGradeCd(Map<String, Object> rowData);

	/**
	 *  SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param rowData
	 */
	public void updateSrBaseReqDate(Map<String, Object> rowData);
	
	/**
	 * BA/IT 접수 단계 요청서 중단요청시 상태 UPDATE
	 * @param rowData
	 */
	public void updateChkStopQuit(Map<String, Object> rowData);
	
	/**
	 * BA/IT 접수 단계 요청서 중단요청시 SR_BASE 상태 UPDATE
	 * @param rowData
	 */
	public void updateReqStop(Map<String, Object> rowData);
	
	/**
	 * 마스터 프로젝트 등록
	 * @param rowData
	 */
	public void mergeMasterPrject(Map<String, Object> rowData);

	/**
	 * 서브 프로젝트 등록
	 * @param rowData
	 */
	public void newSubPrj(Map<String, Object> rowData);
	
	/**
	 * 서브 프로젝트 PL 변경
	 * @param rowData
	 */
	public void updateSubPrjPl(Map<String, Object> rowData);

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
	 * SR요청 프로젝트 정보 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrj(Map<String, Object> dsCond);

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
	public void removeSrMaPrj(Map<String, Object> dsCond);

	/**
	 * SR요청 반려시(BA팀장 결재/IT담당자 접수 단계 반려시)
	 * @param rowData
	 */
	public void updateRtrnBaSecChklst(Map<String, Object> rowData);

	/**
	 * SR요청 반려(IT팀장 결재, PMO결재, 보안담당자 결재 단계 반려시)
	 * @param rowData
	 */
	public void updateRtrnItSecGrdChklst(Map<String, Object> rowData);

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
	 * 마스터 프로젝트의 종료일 서브프로젝트 중 가장 큰 종료일로 교체
	 * @param rowData
	 */
	public void updateMasterPrjEndDt(Map<String, Object> rowData);
	
	/**
	 * 보안담당자 결재시 보안등급 저장
	 * @param rowData
	 */
	public void updateSecGrade(Map<String, Object> rowData);

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
	 * 마스터 프로젝트 종료 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjEnd(Map<String, Object> rowData);

	/**
	 * 마스터 프로젝트 중단 요청 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjStopReq(Map<String, Object> rowData);

	/**
	 * 프로젝트 중단 상태로 변경
	 * @param rowData
	 */
	public void updateSrMaPrjStop(Map<String, Object> rowData);
	
	/**
	 * 마스터 프로젝트 종결 상태로 변경
	 * @param rowData
	*/
	public void updateSrMaPrjQuit(Map<String, Object> rowData);

	/**
	 * 요청등록-[일반] PMO 종료 단계 폐기 가능 여부 체크
	 * @param dsCond
	 * @return
	 */
	public String selectDiscardCheck(Map<String, Object> dsCond);
	
	/**
	 * 요청등록-[일반] PMO, CMO 권한 체크
	 * @param dsCond
	 * @return
	 */
	public int selectPMOCMO(Map<String, Object> dsCond);
	
	/**
	 * 실무분과대상여부 update
	 * @param rowData
	 */
	public void updateSubcommiTargYn(Map<String, Object> dsCond);
	
	/**
	 * 체크리스트 위험평가구분에 따른 체크리스트 체크
	 * @param dsCond
	 * @return
	 */
	public String chkDangerDivChg(Map<String, Object> rowData);
	
	/**
	 * 변경대상평가 등록 기록삭제
	 * @param dsCond
	 * @return
	 */
	public void removeReqChgTargeChkist(Map<String, Object> dsCond);
	
	/**
	 * 처리 단계시 요청자, BA, 팀장 리스트
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> nowStepActor(Map<String, Object> dsCond);
}