package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 쪽지보내기 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Repository
public interface FOMM0900WDAO {

	/**
	 * 쪽지보내기 목록 조회
	 * @param dsCond
	 * @return
	 */
//	public String select01();

	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
		
	/**
	 * 쪽지보내기 저장(MEMO)
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
	
	/**
	 * 쪽지보내기 저장(MEMO_RCV)
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 쪽지보내기 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 쪽지보내기 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);

	public List<Map<String, Object>> selectMemoDeptUser(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectMemoDeptUserList(Map<String, Object> prmMap);

	public List<Map<String, Object>> selectMemoGrpUser(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectMemoGrpUserList(Map<String, Object> prmMap);

	public List<Map<String, Object>> selectUserRtn(Map<String, Object> dsCond);

	public List<Map<String, Object>> selectMemoUserSingle(Map<String, Object> dsCond);
}