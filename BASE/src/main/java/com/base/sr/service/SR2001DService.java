package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - SR2001D Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  김웅기
 * @since   2024. 08. 23.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 08. 23.	김웅기		최초작성
 */
public interface SR2001DService {

	/**
	 * SR2001D 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	/**
	 * SR2001D 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
	/**
	 * SR2001D 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);
	/**
	 * SR2001D 체크리스트 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond);	

	/**
	 * SR2001D 시나리오 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectSrMaPrjTsDtlRslt(Map<String, Object> dsCond);	
	/**
	 * SR2001D 프로그램 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select06(Map<String, Object> dsCond);	
	/**
	 * SR2001D 보안성검토 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select07(Map<String, Object> dsCond);	
	/**
	 * SR2001D 시나리오 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select08(Map<String, Object> dsCond);	
	/**
	 * SR2001D 권한관리조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond);
	/**
	 * SR2001D 연관프로젝트 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select11(Map<String, Object> dsCond);
	/**
	 * SR2001D 연관프로젝트 조회 (존재유무)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select12(Map<String, Object> dsCond);
	/**
	 * SR2001D 저장
	 * @param dsData
	 */
	public void save01(List<Map<String, Object>> dsData);
	/**
	 * SR2001D 테스트 결과 저장
	 * @param dsData
	 * @return
	 */
	public void save03(List<Map<String, Object>> dsData);
	/**
	 * SR2001D 
	 * @param dsData
	 * @return
	 */
	public void save04(List<Map<String, Object>> dsData);
	
	/**
	 * SR2001D 연관프로젝트아이디 저장
	 * @param dsData
	 * @return
	 */
	public void save05(List<Map<String, Object>> dsData);

}