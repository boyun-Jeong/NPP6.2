package com.base.sr.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - SR2001D DAO
 * @package com.base.sr.dao
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
@Repository
public interface SR2001DDAO {

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
	 * SR2001D 체크리스트 seq  조회
	 * @param dsCond
	 * @return
	 */
	
	
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
	 * SR2001D 권한관리 조회
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
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * SR2001D 저장
	 * @param rowData
	 */
	public void insert03(Map<String, Object> rowData);
	/**
	 * SR2001D 저장
	 * @param rowData
	 */
	public void insert04(Map<String, Object> rowData);

	/**
	 * SR2001D 수정
	 * @param rowData
	 */
	public void modify01(Map<String, Object> rowData);

	/**
	 * SR2001D 삭제
	 * @param rowData
	 */
	public void modify04(Map<String, Object> rowData);

	/**
	 * SR2001D 삭제 첨부파일 
	 * @param rowData
	 */
	public void modify05(Map<String, Object> rowData);

	/**
	 * SR2001D 삭제 웹에디터
	 * @param rowData
	 */
	public void modify06(Map<String, Object> rowData);

	/**
	 * SR2001D 연관프로젝트아이디 저장
	 * @param rowData
	 */
	public void modify07(Map<String, Object> rowData);
	
	/**
	 * SR2001D 업데이트
	 * @param rowData
	 */
	public void remove01(Map<String, Object> rowData);
}