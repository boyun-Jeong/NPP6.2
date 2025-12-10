package com.base.fomm.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 서비스별 담당자관리 Service Intreface
 * @package com.base.fomm.service
 * <pre>
 *
 * @author  정해운
 * @since   2025. 02. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 10.	정해운		최초작성
 */
public interface FOMM1100WService {

	/**
	 * 서비스별 담당자관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectStaffSvcMng(Map<String, Object> dsCond);

	/**
	 * 서비스별 담당자관리 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);

	public List<Map<String, Object>> selectSvcType(Map<String, Object> dsCond);

	public List<Map<String, Object>> chkDup(List<Map<String, Object>> dsChkTmp);

	public List<Map<String, Object>> selectChgHist(Map<String, Object> dsCond);

	public List<LinkedHashMap<String, Object>> selectExlStaffSvcMng();

	public void saveBatch(List<Map<String, Object>> dsData);

	public void saveChg(List<Map<String, Object>> dsData);
}