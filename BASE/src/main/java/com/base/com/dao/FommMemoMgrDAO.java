package com.base.com.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 메모 전송관리 DAO
 * @package com.base.com.dao
 * <pre>
 * @author  정보윤
 * @since   2025. 03. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 07.	정보윤		최초작성
 */
@Repository
public interface FommMemoMgrDAO {

	/**
	 * 쪽지 마스터 정보 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);
	
	/**
	 * 쪽지 수신자 정보 등록
	 * @param rowData
	 */
	public void insert02(Map<String, Object> rowData);

	/**
	 * 쪽지 수신대상자 등록
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);

	/**
	 * 
	 */
	public List<Map<String, Object>> selectFommMemotranMtSendTarget(Map<String, Object> dsCond);

	/**
	 * 
	 */
	public void updateFommMemotranMtSendTime(Map<String, Object> rowData);

	/**
	 * 
	 */
	public void updateFommMemotranMtSendTargetYnN(Map<String, Object> rowData);

	public void removeFommMemo(Map<String, Object> rowData);
}