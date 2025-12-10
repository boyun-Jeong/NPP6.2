package com.base.fomm.dao;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title
 * - 요청정보 DAO
 * @package com.base.sr.dao
 * <pre>
 *
 * @author  정보윤
 * @since   2024. 06. 27.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 06. 27.	정보윤		최초작성
 */
@Repository
public interface FOMM0700DDAO {

	/**
	 * 체크리스트 문항 최대 점수 
	 * @param dsCond
	 * @return
	 */
	public int selectMaxScore(Map<String, Object> dsCond);

	/**
	 * 기존에 응답한 내역인 경우 체크리스트 ID 가져오기 
	 * @param dsCond
	 * @return
	 */
	public String select00(Map<String, Object> dsCond);

	/**
	 * 체크리스트 문항별 답항 최대 갯수 
	 * @param dsCond
	 * @return
	 */
	public int select01(Map<String, Object> dsCond);

	/**
	 * 체크리스트 문항 답항 조회(답항 가로 처리용)
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 체크리스트 문항 답항 선택시 입력 제외 문항 관리 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 체크리스트 답항 저장
	 * @param rowData
	 */
	public void insert01(Map<String, Object> rowData);

	/**
	 * 체크리스트 응답 내역 임시Key PK교체
	 * @param rowData
	 */
	public void replaceTempKeyOne(Map<String, Object> rowData);

	/**
	 * 체크리스트 응답 요약 정보 
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectChklstRestSummary(Map<String, Object> dsCond);

	/**
	 * 체크리스트 응답 총계 정보
	 * @param dsCond
	 * @return
	 */
	public Map<String, Object> selectTotalInfo(Map<String, Object> dsCond);

	/**
	 * 체크리스트 답변 정보 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectChklstIdList(Map<String, Object> dsCond);

	/**
	 * 현재 저장하는 체크리스트 외 이미 저장된 다른 체크리스트 내역은 삭제할 때 사용 
	 * @param rowData
	 */
	public void removeChklstOther(Map<String, Object> rowData);
	
}