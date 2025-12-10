package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 결재 팝업 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 07. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 03.	이정빈		최초작성
 */
@Repository
public interface SR0140PDAO {

	/**
	 * 결재함 목록 조회
	 * @param dsCond
	 * @return
	 */
	public void saveApprove(Map<String, Object> dsApprInfo);

	/**
	 * 결재자 목록 조회
	 * @param dsCond
	 * @return
	 */
	public void saveReturn(Map<String, Object> dsApprInfo);
}