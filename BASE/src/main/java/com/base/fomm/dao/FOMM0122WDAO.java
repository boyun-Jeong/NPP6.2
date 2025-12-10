package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - FOMM0122W DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  노익현
 * @since   2024. 11. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 13.	노익현		최초작성
 */
@Repository
public interface FOMM0122WDAO {

	/**
	 * FOMM0122W 확장그룹 코드
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * FOMM0122W 권한그룹 코드
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	
	/**
	 * FOMM0122W 리스트
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	
	/**
	 * FOMM0122W 권한그룹 사용자 중복체크
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);

	/**
	 * FOMM0122W 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * FOMM0122W 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * FOMM0122W 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}