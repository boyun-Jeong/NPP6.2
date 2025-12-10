package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 표준 체크리스트 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  김미성
 * @since   2024. 08. 05.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 05.	김미성		최초작성
 */
@Repository
public interface FOMM0700WDAO {

	/**
	 * 표준 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트 서브목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트 서브목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트 재외항목 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);
	
	/**
	 * 표준 체크리스트  재외항목 저장
	 * @param rowData
	 */
	public void insert05(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트  재외항목 수정
	 * @param rowData
	 */
	public void modify05(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트  재외항목 삭제
	 * @param rowData
	 */
	public void remove05(Map<String, Object> rowData);
	
	
	/**
	 * 표준 체크리스트 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 평가표 저장
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 평가표 수정
	 * @param rowData
	 */
	public void modify02(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 평가표 삭제
	 * @param rowData
	 */
	
	public void remove02(Map<String, Object> rowData);
	
	/**
	 * 표준 체크리스트 질문 저장
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 질문 수정
	 * @param rowData
	 */
	public void modify03(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 질문 삭제
	 * @param rowData
	 */
	public void remove03(Map<String, Object> rowData);
	
	/**
	 * 표준 체크리스트 질문 저장
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 질문 수정
	 * @param rowData
	 */
	public void modify04(Map<String, Object> rowData);

	/**
	 * 표준 체크리스트 질문 삭제
	 * @param rowData
	 */
	public void remove04(Map<String, Object> rowData);
}
