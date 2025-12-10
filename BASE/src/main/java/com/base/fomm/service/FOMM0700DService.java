package com.base.fomm.service;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0700DDAO;
import com.base.fomm.service.FOMM0700DService;

/**
 * 
 * <pre>
 * @title
 * - 요청정보 Service(구현체)
 * @package com.base.sr.service.impl
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
@Service
public interface FOMM0700DService {

	/**
	 * 체크리스트 문항 최대 점수 
	 */
	public int selectMaxScore(Map<String, Object> dsCond);

	/**
	 * 기존에 응답한 내역인 경우 체크리스트 ID 가져오기 
	 */
	public String select00(Map<String, Object> dsCond);
	
	/**
	 * 체크리스트 문항별 답항 최대 갯수 
	 */
	public int select01(Map<String, Object> dsCond);

	/**
	 * 체크리스트 문항 답항 조회(답항 가로 처리용) 
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond);

	/**
	 * 체크리스트 문항 답항 선택시 입력 제외 문항 관리 목록 조회 
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond);

	/**
	 * 요청정보 저장
	 */
	public void save01(List<Map<String, Object>> dsData);

	/**
	 * 체크리스트 응답 내역 임시Key PK교체
	 */
	public void replaceTempKeyOne(Map<String, Object> dsData);

	/**
	 * 체크리스트 응답 요약 정보
	 */
	public Map<String, Object> selectChklstRestSummary(Map<String, Object> dsCond);

	/**
	 * 체크리스트 응답 총계 정보
	 */
	public Map<String, Object> selectTotalInfo(Map<String, Object> dsCond);

	/**
	 * 체크리스트 답변 정보 목록 조회
	 */
	public List<Map<String, Object>> selectChklstIdList(Map<String, Object> dsCond);
}