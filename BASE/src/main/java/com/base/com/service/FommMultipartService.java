package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        첨부파일 업/다운로드 Servlce Interface
 * @package com.base.com.service
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
public interface FommMultipartService {

	/**
	 * 파일목록 조회
	 * @param dsCond
	 * @return 
	 */
	public List<Map<String, Object>> selectFileList(Map<String, Object> dsCond);
	
	/**
	 * 파일 정보 저장
	 * @param dsCond
	 * @return 
	 */
	public void saveFileInfo(List<Map<String, Object>> dsFommFile);

	/**
	 * 파일정보 PK 정보로 삭제
	 * @param dsCond
	 * @return
	 */
	public void removeFileInfo(Map<String, Object> rowData);

	/**
	 * 파일 tempKey 치환
	 * @param dsCond
	 * @return 
	 */
	public void replaceTempKey(String keyTbl, String tempKey, String PK1);
	public void replaceTempKey(String keyTbl, String[] tempKey, String PK1, String PK2);
	public void replaceTempKey(String keyTbl, String[] tempKey, String PK1, String PK2, String PK3);
	
	public void replaceTempKeyOne(Map<String, Object> rowData);
}