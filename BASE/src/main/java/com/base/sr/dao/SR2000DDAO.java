package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SUBPRJ_SR요청 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  김지수
 * @since   2024. 08. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 23.	김지수		최초작성
 */
@Repository
public interface SR2000DDAO {

	/**
	 * 서브프로젝트 구성원 최초 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectInitSrMaSubMbr(Map<String, Object> dsCond);
	
	/**
	 * 서브프로젝트 상태 업데이트
	 * @param dsData
	 * @return
	 */
	public void updateSrMaPrjSubStat(Map<String, Object> rowData);
	
	/**
	 * 서브프로젝트 구성원 변경이력 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjMberHistList(Map<String, Object> dsCond);

	/**
	 * 서브프로젝트 구성원 변경이력 저장
	 * @param rowData
	 */
	public void insertSrMaPrjMberHist(Map<String, Object> rowData);

	/**
	 * 설계단계 - 시나리오 CRUD
	 */
	public List<Map<String, Object>> selectSrMaPrjTsDtl(Map<String, Object> dsCond);
	public void insertSrMaPrjTsDtl(Map<String, Object> rowData);
	public void updateSrMaPrjTsDtl(Map<String, Object> rowData);
	public void mergeSrMaPrjTsDtl(Map<String, Object> rowData);
	public void removeSrMaPrjTsDtl(Map<String, Object> rowData);
	
	public void clearSrMaPrjTsDtlRslt(Map<String, Object> rowData);
	public void insertSrMaPrjTsDtlRslt(Map<String, Object> rowData);

	/**
	 * SR요청 담당자 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCgerSrMaPrjSub(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectCgerSrMaPrjSub_TL(Map<String, Object> dsCond);
	
	/**
	 * 이행신청 CRUD
	 */
	public List<Map<String, Object>> selectSrMaRelsReq(Map<String, Object> dsCond);
	public void insertSrMaRelsReq(Map<String, Object> rowData);
	public void updateSrMaRelsReq(Map<String, Object> rowData);
	public void deleteSrMaRelsReq(Map<String, Object> rowData);
	
	/**
	 * 이행 후 점검 체크리스트 CRUD
	 */
	public List<Map<String, Object>> selectSrMaRelschkDtl(Map<String, Object> dsCond);
	public void insertSrMaRelschkDtl(Map<String, Object> rowData);
	public void updateSrMaRelschkDtl(Map<String, Object> rowData);
	public void deleteSrMaRelschkDtl(Map<String, Object> rowData);
	
	/**
	 * SR요청 결재자 
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectApprsubPrjRole(Map<String, Object> dsCond);
	
	public List<Map<String, Object>> selectApprSrMaSub(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectApprSrMaSubTeamLeader(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectApprSrMaPrjPM(Map<String, Object> dsCond);
	public List<Map<String, Object>> selectApprPMO(Map<String, Object> dsCond);
	
	public List<Map<String, Object>> selectSrMaPrjSubIt(Map<String, Object> dsCond);
	
	
	/**
	 * 요청관리 프로젝트 중단 요청 CRUD
	 */
	public List<Map<String, Object>> selectSrMaPrj(Map<String, Object> dsCond);
	public void stopSrMaPrj(Map<String, Object> rowData);
	// 변경신청내용 리스트조회
	public List<Map<String, Object>> selectSrBaseInfo_subPrj(Map<String, Object> dsCond);

	/**
	 * 진행률, 종료일 변경
	 */
	public void updateSrMaPrj(Map<String, Object> rowData);
	public void chgDtSrMaPrj(Map<String, Object> rowData);
	public void updateAvgProgressPer(Map<String, Object> rowData);

	/**
	 *  BA, 요청자 단계 건너뛰기 여부 체크
	 */
	public String selectReqTmplatId(Map<String, Object> rowData);
	
	/**
	 * 요청관리 프로젝트 정보 형상관리에 전달
	 */
	public void insertViPmsChgPfmc(Map<String, Object> rowData);
	public void updateViPmsChgPfmc(Map<String, Object> rowData);
	
	/**
	 * Rims 체크
	 * 
	 * */
	public Integer selectRimsMigrCnt(Map<String, Object> dsCond);
	public Integer selectRimsMigrNendCnt(Map<String, Object> dsCond);
	
	/**
	 * 서브 프로젝트 중단 상태 확인
	 */
	public Integer selectExecCnt(Map<String, Object> dsCond);
	
	/**
	 * 진행중인 서브 프로젝트 cnt
	 */
	public Integer selectIngSubPrjCnt(Map<String, Object> dsCond);
	
}