package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0700DDAO;
import com.base.fomm.service.FOMM0700DService;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.impl.SRCommServiceImpl;

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
public class FOMM0700DServiceImpl implements FOMM0700DService {

	private Logger log = LoggerFactory.getLogger(FOMM0700DServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0700DDAO fomm0700dDao;

	/**
	 * 체크리스트 문항 최대 점수 
	 */
	public int selectMaxScore(Map<String, Object> dsCond) {
		return fomm0700dDao.selectMaxScore(dsCond);
	}

	/**
	 * 기존에 응답한 내역인 경우 체크리스트 ID 가져오기
	 */
	public String select00(Map<String, Object> dsCond) {
		return fomm0700dDao.select00(dsCond);
	}
	
	/**
	 * 체크리스트 문항별 답항 최대 갯수 
	 */
	public int select01(Map<String, Object> dsCond) {
		return fomm0700dDao.select01(dsCond);
	}
	
	/**
	 * 체크리스트 문항 답항 조회(답항 가로 처리용)
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700dDao.select02(dsCond);
		return result;
	}

	/**
	 * 체크리스트 문항 답항 선택시 입력 제외 문항 관리 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0700dDao.select03(dsCond);
		return result;
	}

	/**
	 * 체크리스트 문항 답변 결과 저장
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		if(dsData.size() > 0) {
			fomm0700dDao.removeChklstOther(dsData.get(0));
		}

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
			String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
			if("I".equals(rowFlag) || "U".equals(rowFlag)) {
				rowData.put("LMID", userId);
				rowData.put("LMPID", lmpId);

				fomm0700dDao.insert01(rowData);
			}
		}
	}

	/**
	 * 체크리스트 응답 내역 임시Key PK교체
	 */
	@Transactional
	public void replaceTempKeyOne(Map<String, Object> dsData) {
		fomm0700dDao.replaceTempKeyOne(dsData);
	}

	/**
	 * 체크리스트 응답 요약 정보
	 */
	public Map<String, Object> selectChklstRestSummary(Map<String, Object> dsCond) {

		String keyTblStr	= StringUtil.safe(dsCond.get("KEY_TBL_STR")).replaceAll(" ", "");
		String chklstIdStr	= StringUtil.safe(dsCond.get("CHKLST_ID_STR")).replaceAll(" ", "");

		log.debug("[FOMM0700DServiceImpl] selectChklstRestSummary() keyTblStr:[" + keyTblStr + "]");
		log.debug("[FOMM0700DServiceImpl] selectChklstRestSummary() chklstIdStr:[" + chklstIdStr + "]");
		
		String[] keyTblArr	= null;
		String[] chklstIdArr	= null;
		
		if(keyTblStr.indexOf(",") > -1) {
			keyTblArr = new String[keyTblStr.split(",").length];
			keyTblArr = keyTblStr.split(",");
		}else {
			keyTblArr = new String[1];
			keyTblArr[0] = keyTblStr;
		}

		if(chklstIdStr.indexOf(",") > -1) {
			chklstIdArr = new String[chklstIdStr.split(",").length];
			chklstIdArr = chklstIdStr.split(",");

		}else {
			chklstIdArr = new String[1];
			chklstIdArr[0] = chklstIdStr;
		}
		
		dsCond.put("KEY_TBL_ARR", keyTblArr);
		dsCond.put("CHKLST_ID_ARR", chklstIdArr);
		
		log.debug("[FOMM0700DServiceImpl] selectChklstRestSummary() keyTblArr.length:[" + keyTblArr.length + "]");
		log.debug("[FOMM0700DServiceImpl] selectChklstRestSummary() chklstIdArr.length:[" + chklstIdArr.length + "]");

		return fomm0700dDao.selectChklstRestSummary(dsCond);
	}

	/**
	 * 체크리스트 응답 총계 정보
	 */
	public Map<String, Object> selectTotalInfo(Map<String, Object> dsCond) {
		
		String keyTbl	= StringUtil.safe(dsCond.get("KEY_TBL")).replaceAll(" ", "");
		String chklstId	= StringUtil.safe(dsCond.get("CHKLST_ID")).replaceAll(" ", "");

		log.debug("[FOMM0700DServiceImpl] selectTotalInfo() keyTbl:[" + keyTbl + "]");
		log.debug("[FOMM0700DServiceImpl] selectTotalInfo() chklstId:[" + chklstId + "]");

		String[] keyTblArr	= null;
		String[] chklstIdArr	= null;
		
		if(keyTbl.indexOf(",") > -1) {
			keyTblArr = new String[keyTbl.split(",").length];
			keyTblArr = keyTbl.split(",");
		}else {
			keyTblArr = new String[1];
			keyTblArr[0] = keyTbl;
		}
		
		if(chklstId.indexOf(",") > -1) {
			chklstIdArr = new String[chklstId.split(",").length];
			chklstIdArr = chklstId.split(",");
		}else {
			chklstIdArr = new String[1];
			chklstIdArr[0] = chklstId;
		}
		
		dsCond.put("KEY_TBL_ARR", keyTblArr);
		dsCond.put("CHKLST_ID_ARR", chklstIdArr);

		log.debug("[FOMM0700DServiceImpl] selectTotalInfo() keyTblArr.length:[" + keyTblArr.length + "]");
		log.debug("[FOMM0700DServiceImpl] selectTotalInfo() chklstIdArr.length:[" + chklstIdArr.length + "]");

		return fomm0700dDao.selectTotalInfo(dsCond);
	}

	/**
	 * 체크리스트 답변 정보 목록 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> selectChklstIdList(Map<String, Object> dsCond) {
		return fomm0700dDao.selectChklstIdList(dsCond);
	}
}