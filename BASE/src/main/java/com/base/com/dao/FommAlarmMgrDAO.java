package com.base.com.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 알람관리 DAO
 * @package com.base.com.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 20.	정보윤		최초작성
 */
@Repository
public interface FommAlarmMgrDAO {

	/**
	 * 알림 수신 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	public void modify01(Map<String, Object> rowData);
	
	public void modify02(Map<String, Object> rowData);

	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 알람 수신자 정보 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
}