package com.base.com.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 헤아림TALK 전송관리 DAO
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
public interface FommHearimTlkMgrDAO {

	/**
	 * 헤아림TALK 전송관리 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 
	 */
	public List<Map<String, Object>> selectFommHearimtlktranMtSendTarget(Map<String, Object> dsCond);

	/**
	 * 
	 */
	public void updateFommHearimtlktranMtSendTime(Map<String, Object> rowData);

	/**
	 * 
	 */
	public void updateFommHearimtlktranMtSendTargetYnN(Map<String, Object> rowData);
}