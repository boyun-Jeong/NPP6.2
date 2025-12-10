package com.base.fomm.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        SPP 단어 관리 Service Interface
 * @package com.base.fomm.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 06
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2023.04.06.	WEMB	최초작성
 */
public interface FOMM0170WService {

	/**
	 * SPP 단어 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select01(Map<String, Object> searchMap);
	
	/**
	 * SPP 단어 내용 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> searchMap);
	
	/**
	 * SPP 시스템 기준언어 단어 중복 여부 체크 (해당 단어로 등록된 건수를 리턴)
	 * @param dsCond
	 * @return 
	 */
	public Integer select03(Map<String, Object> searchMap);
	
	
	/**
	 * SPP 단어 저장
	 * @param dsMaster
	 */
	public String save01(List<Map<String, Object>> dsCmmMsgMt);
	
	/**
	 * SPP 단어 저장
	 * @param dsMaster
	 */
	public void save02(List<Map<String, Object>> dsCmmMsgDt);
}
