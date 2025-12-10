package com.base.sr.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title
 * - 마스터 프로젝트 종료 요청 Service Intreface
 * @package com.base.sr.service
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 09. 10.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 09. 10.	정보윤		최초작성
 */
public interface SR1100DService {

	/**
	 * 마스터 프로젝트 종료 요청 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 서브 프로젝트 예정종료일 변경 이력
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 담당 BA 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectCgerSrMaBaRev(Map<String, Object> dsCond);
}