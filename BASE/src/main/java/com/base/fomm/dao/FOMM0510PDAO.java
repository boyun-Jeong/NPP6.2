package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 슬라이드 알림 관리 상세 DAO
 * @package com.base.fomm.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
@Repository
public interface FOMM0510PDAO {
	
	/**
	 * 슬라이드 알림 상세 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);

	/**
	 * 슬라이드 알림 등록
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 슬라이드 알림 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);
	
	/**
	 * 슬라이드 알림 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
	
	/**
	 * 통보 실행 이력 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);
		
}