package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 보안성검토  조회(비정기 팝업시) DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  A
 * @since   2024. 10. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 10. 22.	A		최초작성
 */
@Repository
public interface SR1000PDAO {

	/**
	 * 보안성검토  조회(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond);
	
	/**
	 * 프로그램  조회(비정기 팝업시) 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 보안성검토  조회(비정기 팝업시) 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 보안성검토  조회(비정기 팝업시) 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * 보안성검토  조회(비정기 팝업시) 삭제
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}