package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - SUBPRJ_SR요청 Service Intreface
 * @package com.base.sr.service
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
public interface SR2000DService {
	
	/**
	 * 서브프로젝트 진행률 변경
	 * @param dsCond
	 * @return
	 */
	public void updateSrMaPrj(Map<String, Object> dsData);
	public void updateAvgProgressPer(Map<String, Object> dsData);
	
//	/**
//	 * 서브프로젝트 최초 구성원 조회
//	 * @param dsCond
//	 * @return
//	 */
//	public List<Map<String, Object>> selectInitSrMaSubMbr(Map<String, Object> dsCond);
//	
	/**
	 * 서브프로젝트 구성원 변경이력 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjMberHistList(Map<String, Object> dsCond);

	/**
	 * 시나리오 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjTsDtl(Map<String, Object> dsCond);

	/**
	 * 시나리오 저장
	 * @param rowData
	 */
	public void saveSrMaPrjTsDtl(List<Map<String, Object>> dsData);
	

	/**
	 * 이행신청 저장
	 * @param dsData
	 */
	public void saveSrMaRelsReq(Map<String, Object> dsData);
		
	/**
	 * 이행 후 점검 체크리스트 저장
	 * @param dsData
	 */
	public void saveSrMaRelschkDtl(List<Map<String, Object>> dsData);
	
	/**
	 * IT팀장 종료 단계 건너뛰기 여부 체크
	 * @param dsCond
	 * @return
	 */
	public boolean checkNormalD() throws Exception;

	/**
	 * 서브프로젝트를 참조하는 요청서 목록 조회
	 * @param rowData
	 */
	public List<Map<String, Object>> selectSrBaseInfo_subPrj(Map<String, Object> dsCond);
	
	/**
	 * Rims 체크
	 * @throws Exception 
	 * 
	 * */
	public boolean rimsChk() throws Exception;
	
	/**
	 * 서브 프로젝트 중단 상태 확인
	 * @throws Exception
	 */
	public Integer selectExecCnt(Map<String, Object> dsCond) throws Exception;
		
}