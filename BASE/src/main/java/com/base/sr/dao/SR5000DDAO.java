package com.base.sr.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청서등록 DAO
 * @package com.base.sr.dao
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
@Repository
public interface SR5000DDAO {

	/**
	 * 요청서등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 요청서등록 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 요청서등록 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 요청서 카테고리 항목 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 서비스별 담당자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 요청서용 구성항목 검색 팝업
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);
	
	/**
	 *  IP신청서 근무장소 하위뎁스 공통코드 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);

	/**
	 *  업무분류 하위뎁스 공통코드 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond);

	/**
	 *  요청서 REQ_ID 채번
	 * @param dsWfChm 
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> select07(Map<String, Object> dsWfChm);
	
	/**
	 * 요청서등록
	 * @param dsData
	 */
	public void insert01(Map<String, Object> dsData);
	
	/**
	 * 요청서내용 등록
	 * @param dsData
	 */
	public void insert02(Map<String, Object> dsData);
	
	/**
	 * 요청서 단계별 담당자/검토자
	 * @param dsData
	 */
	public void insert03(Map<String, Object> dsData);
	
	/**
	 * 스킵여부 프로시저용 inset
	 * @param dsData
	 */
	public void insert04(Map<String, Object> dsData);
	
	/**
	 * 변경이관
	 * @param dsData
	 */
	public void insert05(Map<String, Object> dsData);
	public void insert06(Map<String, Object> dsData);
	public void insert07(Map<String, Object> dsData);
	public void insert08(Map<String, Object> dsWfChm);

	/**
	 * 출입관리 상태조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond);
	
	/**
	 * 출입카드 번호 채번
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select09(Map<String, Object> dsCond);
	
	/**
	 * LVL2 담당자
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond);
	
	/**
	 * LVL2 현장대리인
	 */
	public List<Map<String, Object>> select11(Map<String, Object> dsCond);
	
	/**
	 * LVL3 QA
	 */
	public List<Map<String, Object>> select12(Map<String, Object> dsCond);
	
	/**
	 * LVL4 PL
	 */
	public List<Map<String, Object>> select13(Map<String, Object> dsCond);
	
	/**
	 * LVL5 팀장
	 */
	public List<Map<String, Object>> select14(Map<String, Object> dsCond);
	
	/**
	 * 요청접수자(사전협의자)
	 */
	public List<Map<String, Object>> select15(Map<String, Object> dsCond);

	/**
	 * 결재시 선택된 현장대리인 조회
	 */
	public List<Map<String, Object>> select17(Map<String, Object> dsCond);
	
	/**
	 * 결재시 선택된 담당자 조회
	 */
	public List<Map<String, Object>> select18(Map<String, Object> dsCond);
	
	/**
	 * 일반문의 담당자 조회
	 */
	public List<Map<String, Object>> select19(Map<String, Object> dsCond);
	
	/**
	 * 전산기기 신청 QA 조회
	 */
	public List<Map<String, Object>> select21(Map<String, Object> dsCond);
	
	/**
	 * 전산기기 신청 PL 조회
	 */
	public List<Map<String, Object>> select22(Map<String, Object> dsCond);
	
	/**
	 * 전산기기 결재 팀장
	 */
	public List<Map<String, Object>> select23(Map<String, Object> dsCond);

	/**
	 * 전산기기 해당 담당자 전체 조회
	 */
	public List<Map<String, Object>> select24(Map<String, Object> dsCond);
	
	/**
	 * 전산기기 해당 현장대리인 전체 조회
	 */
	public List<Map<String, Object>> select25(Map<String, Object> dsCond);
	
	/**
	 * 서비스/일반요청 상태조회
	 */
	public List<Map<String, Object>> select26(Map<String, Object> dsCond);
	
	/**
	 * 서비스요청시 상태값 변경
	 */
	public void update01(Map<String, Object> dsData);
	
	/**
	 * 템플릿 ID 수정
	 */
	public void update02(Map<String, Object> dsData);
	
	/**
	 * 문제관리 담당자 PL 조회
	 */
	public List<Map<String, Object>> select27(Map<String, Object> dsCond);

	/**
	 * 연관ID 조회
	 */
	public List<Map<String, Object>> relationId(Map<String, Object> dsCond);

	/**
	 * 변경 연관ID 조회
	 */
	public List<Map<String, Object>> chmRelationId(Map<String, Object> dsCond);
	
	/**
	 * 문제관리 담당자 조회
	 */
	public List<Map<String, Object>> select28(Map<String, Object> dsCond);
	
	/**
	 * 서비스 결재요청시 등록자 팀장조회
	 */
	public List<Map<String, Object>> select29(Map<String, Object> dsCond);

	/**
	 * SR_BASE_INFO 상태값 변경 
	 */
	public void update03(Map<String, Object> dsWfChm);
	
	/**
	 * 담당자 지정
	 */
	public void insert09(Map<String, Object> dsWfChm);
	
	/**
	 * 문제 - 변경 요청번호 조회
	 */
	public Map<String, Object> select30(Map<String, Object> dsCond);
	
	/**
	 *  업무분류별 체크리스트 조회
	 */
	public List<Map<String, Object>> upmuChkList(Map<String, Object> dsCond);
	
	/**
	 * 요청서 체크리스트 조회
	 */
	public List<Map<String, Object>> reqChkList(Map<String, Object> dsCond);
	
	/**
	 * 체크리스트 등록
	 */
	public void chkListSave(Map<String, Object> dsData);
	
	/**
	 * 체크리스트 업데이트
	 */
	public void chkListUpdate(Map<String, Object> map);

	/**
	 * 체크리스트 삭제
	 */
	public void chkListDelete(Map<String, Object> map);
	
	/**
	 * 변경이관 담당자 목록조회
	 */
	public List<Map<String, Object>> select31(Map<String, Object> dsCond);
	
	/**
	 * 최종템플릿버전 조회
	 */
	public Map<String, Object> select32(Map<String, Object> dsWfChm);
	
	/**
	 * 문제관리 상태조회
	 */
	public List<Map<String, Object>> select33(Map<String, Object> dsCond);
	
	/**
	 *  사용자테스트 조회조건 조회
	 */
	public List<Map<String, Object>> userTestInfo(Map<String, Object> dsCond);
	
	/**
	 *  사용자테스트 목록 조회
	 */
	public List<Map<String, Object>> userTestList(Map<String, Object> dsCond);
	
	/**
	 * 사용자테스트 목록 등록
	 */
	public void userTestSave(Map<String, Object> dsData);
	
	/**
	 * 사용자테스트 목록 업데이트
	 */
	public void userTestUpdate(Map<String, Object> map);

	/**
	 * 사용자테스트 목록 삭제
	 */
	public void userTestDelete(Map<String, Object> map);
	
	/**
	 *  요청서테스트 목록 조회
	 */
	public List<Map<String, Object>> reqTestList(Map<String, Object> dsCond);
	
	/**
	 * 요청서테스트 등록
	 */
	public void reqTestSave(Map<String, Object> dsData);
	
	/**
	 * 요청서테스트 업데이트
	 */
	public void reqTestUpdate(Map<String, Object> map);

	/**
	 * 요청서테스트 삭제
	 */
	public void reqTestDelete(Map<String, Object> map);
	
	/**
	 * 유사요청건조회
	 */
	public List<Map<String, Object>> alikeSearch(Map<String, Object> dsCond);
	
	/**
	 * WF_SRM 메인테이블에 본문내용 업데이트
	 */
	public void contUpdate(Map<String, Object> map);
	
	/**
	 *  WF_SRM_CONT_CHG_HIST 히스토리 테이블 내역 저장
	 */
	public void contHisSave(Map<String, Object> map);
	
	/**
	 *  요청서 본문내용 수정횟수
	 */
	public List<Map<String, Object>> contUpdateCnt(Map<String, Object> dsWfSrm);
	
	/**
	 *  릴레이션 테이블 확인
	 */
	public List<Map<String, Object>> relationCnt(Map<String, Object> dsContChk);

	/**
	 *  본문 변경시 변경테이블 본문영역 수정
	 */	
	public void chmtUpdate(Map<String, Object> dsContChk);

	/**
	 *  현장대리인 유무 확인
	 */	
	public Map<String, Object> checkSiteProc(Map<String, Object> condMap);

	
	
	/**
	 *  등록단계 -> 사전검토단계
	 */
	public void wfProcDel(Map<String, Object> dsData); // 지정되었던 결재자 삭제
	public void wfProcApprove(Map<String, Object> dsData); // 결재승인
	public void wfProcInsert(Map<String, Object> dsData); // 등록시 결재자 본인지정
	public void wfProcUpdate(Map<String, Object> dsData); // 요청서 상태 사전검토로 업데이트
	public List<Map<String, Object>> approver(Map<String, Object> dsWfSrm); // 결재라인
	public void wfProcDelete(Map<String, Object> dsData);
	public void possYnUpdate(Map<String, Object> dsData);
	
	/**
	 *  요청서 일괄등록 히스토리 저장,삭제
	 */
	public void historyInsert(Map<String, Object> rowData);
	public void historyDelete(Map<String, Object> rowData);
	
	/**
	 * 요청서 일괄등록 임시저장요청서
	 */
	public void insertTemp01(Map<String, Object> map);
	
	/**
	 * 요청서 일괄등록 상태변경
	 */
	public void statCdReset(Map<String, Object> dsData);

	public void connIpUpdate(Map<String, Object> dsParams);

	/**
	 * 담당자 본인결재
	 */
	public List<Map<String, Object>> reqUser(Map<String, Object> dsCond);
	
	/**
	 * 전산기기 신청시 자산테이블 업데이트
	 */
	public void amAsstUpdate(Map<String, Object> dsSrSysJunsan);
	public void amHwOaUpdate(Map<String, Object> dsSrSysJunsan);

	/**
	 * 요청서 단계 스킵한 부분의 단계업데이트
	 */
	public void procInsert(Map<String, Object> dsCond);

	/**
	 * 요청서 히스토리 추가
	 */
	public void histInsert(Map<String, Object> dsWfChm);

	public void userContDelete(Object object);

	public Map<String, Object> selectChkListRegYn(Map<String, Object> dsCond);
	
	public Map<String, Object> selectTestCaseRegYn(Map<String, Object> dsCond);

	//SRM 요청검토시 CHM 자동 생성이 됐는지 여부를 조회
	public String selectWfSrmChmCreYn(Map<String, Object> dsCond);
	
	//SRM 프로세스 진행중 CHM 자동 생성 여부 UPDATE
	public void updateWfSrmChmCreYn(Map<String, Object> dsCond);
}
