package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 요청서등록 Service Intreface
 * @package com.base.sr.service
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
public interface SR5000DService {

	/**
	 * 요청서등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

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
	 * IP신청서 근무장소 하위뎁스 공통코드 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select05(Map<String, Object> dsCond);
	
	/**
	 * 업무분류 공통코드
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond);
	
	/**
	 * 요청 일괄등록
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData) throws Exception;
	
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
	 * 결재 - 담당자조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select15(Map<String, Object> dsCond);
	
	/**
	 * 결재 - 현장대리인조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select16(Map<String, Object> dsCond);

	/**
	 * 서비스요청/전산기기  담당자 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select24(Map<String, Object> dsCond);

	/**
	 * 서비스요청/전산기기 현장대리인 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select25(Map<String, Object> dsCond);

	/**
	 * 서비스/일반요청 상태조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select26(Map<String, Object> dsCond);
	
	/**
	 *  연관ID 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> relationId(Map<String, Object> dsCond);

	/**
	 *  변경 연관ID 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> chmRelationId(Map<String, Object> dsCond);

	/**
	 * 업무분류별 체크리스트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> upmuChkList(Map<String, Object> dsCond);
	
	/**
	 *  요청서 체크리스트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> reqChkList(Map<String, Object> dsCond);

	/**
	 * 체크리스트등록 저장
	 * @param dsData
	 * @return
	 */
	public void chkListSave(List<Map<String, Object>> dsData);
	
	/**
	 * 체크리스트등록 삭제
	 * @param dsData
	 * @return
	 */
	public void chkListDelete(Map<String, Object> dsData);
	
	/**
	 * 변경이관 추가등록
	 * @param dsCond
	 * @return
	 */
	public void chmAdd(Map<String, Object> dsCond);
	
	/**
	 * 문제등록 상태조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select33(Map<String, Object> dsCond);
	
	/**
	 * 유사요청건조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> alikeSearch(Map<String, Object> dsWfSrm);
	
	/**
	 * 유저테스트 조회조건 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> userTestInfo(Map<String, Object> dsCond);
	
	/**
	 * 유저테스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> userTestList(Map<String, Object> dsCond);
	
	/**
	 * 요청서테스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> reqTestList(Map<String, Object> dsCond);
	
	/**
	 * 유저테스트 목록 저장
	 * @param dsData
	 * @return
	 */
	public void userTestSave(List<Map<String, Object>> dsData);
	
	/**
	 * 요청서테스트 목록 저장
	 * @param dsData
	 * @return
	 */
	public void reqTestSave(List<Map<String, Object>> dsData);

	public void reqTestDelete(Map<String, Object> dsData);
	
	/**
	 * 요청서 본문내용 수정
	 * @param dsData
	 * @return
	 */
	public void contUpdate(Map<String, Object> dsContChk);
	
	/**
	 * 요청서 본문내용 수정횟수
	 * @param dsData
	 * @return
	 */
	public List<Map<String, Object>> contUpdateCnt(Map<String, Object> dsWfSrm);

	/**
	 * PL조회
	 * @param dsData
	 * @return
	 */
	public List<Map<String, Object>> select27(Map<String, Object> dsCond);

	public void connIpUpdate(Map<String, Object> dsCond);

	/**
	 * 요청서 단계 스킵한 부분의 단계업데이트
	 */
	void procInsert(Map<String, Object> dsCond);
	
	/**
	 * 인프라  담당자조회
	 * @return
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond);

	public String selectChkListRegYn(Map<String, Object> dsCond);
	
	public String selectTestCaseRegYn(Map<String, Object> dsCond);
}