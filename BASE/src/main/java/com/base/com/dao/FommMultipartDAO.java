package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title   
 * -        첨부파일 업/다운로드 DAO
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
public interface FommMultipartDAO {

	/**
	 * 파일 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectFileList(Map<String, Object> dsCond);
	
	
	/**
	 * 파일정보 저장
	 * @param dsCond
	 * @return
	 */
	public void insertFileInfo(Map<String, Object> rowData);
	
	/**
	 * 파일정보 수정
	 * @param dsCond
	 * @return
	 */
	public void modifyFileInfo(Map<String, Object> rowData);
	
	/**
	 * 임시파일 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeTempFile();

	/**
	 * 파일정보 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeFileInfo(Map<String, Object> rowData);
	
	/**
	 * 파일정보 PK 조건으로 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeFileInfo2(Map<String, Object> rowData);

	/**
	 * 파일정보 tempKey 치환
	 * @param dsCond
	 * @return
	 */
	public void replaceTempKey(Map<String, Object> rowData);
	
	/**
	 * 파일정보 tempKey 치환
	 * @param dsCond
	 * @return
	 */
	public void replaceTempKeyOne(Map<String, Object> rowData);
}
