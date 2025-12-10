package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title   
 * -        공통 댓글 DAO
 * @package com.base.com.dao
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜          변경자	내용
 * ------------------------------------------------
 * 2023.04.06.  WEMB	최초작성
 */
@Repository
public interface FommCommentDAO {

	/**
	 * 공통 댓글 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectComment(Map<String, Object> dsCond);
	
	
	/**
	 * 공통 댓글 저장
	 * @param dsCond
	 * @return
	 */
	public void insertComment(Map<String, Object> rowData);
	
	/**
	 * 공통 댓글 수정
	 * @param dsCond
	 * @return
	 */
	public void modifyComment(Map<String, Object> rowData);
	
	/**
	 * 공통 댓글 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeComment(Map<String, Object> rowData);

}
