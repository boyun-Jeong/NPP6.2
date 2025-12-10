package com.base.pj.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 투입인력관리 DAO
 * @package com.base.pj.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 10. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 10. 23.	정보윤		최초작성
 */
@Repository
public interface PJ3400WDAO {

	/**
	 * 투입인력관리 공수 List
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 투입인력관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 프로젝트 시작~종료일 기준 PJ_USER_MM 테이블 YYYYMM 데이터 없는 데이터만 MERGE문으로 INSERT 
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * PJ_USER_MM 사용자 입력한 공수 데이터 반영 
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * PJ_USER PLAN_TOT_MM, ACT_TOT_MM 재계산 반영 
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * PJ_USER 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * PJ_USER_MM 삭제
	 * @param rowData
	 */
	public void remove02(Map<String, Object> rowData);

	/**
	 * PJ_USER_MM 테이블에서 프로젝트 기간(시작~종료)에 해당하지 않는 YYYYMM 데이터만 삭제 처리
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);

	/**
	 * 데이터 변경 전 기존 PJ_USER_MM 데이터 HISTORY 테이블에 보관 
	 * @param rowData
	 */
	public void insertHist(Map<String, Object> rowData);
}