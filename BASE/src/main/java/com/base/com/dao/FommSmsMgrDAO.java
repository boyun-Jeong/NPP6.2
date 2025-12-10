package com.base.com.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SMS 전송관리 DAO
 * @package com.base.com.dao
 * <pre>
 *
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
public interface FommSmsMgrDAO {

	/**
	 * SMS 전송관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 
	 */
	public List<Map<String, Object>> selectFommSmstranMtSendTarget(Map<String, Object> dsCond);

	/**
	 * 
	 */
	public void updateFommSmstranMtSendTime(Map<String, Object> rowData);

	/**
	 * 
	 */
	public void updateFommSmstranMtSendTargetYnN(Map<String, Object> rowData);

}