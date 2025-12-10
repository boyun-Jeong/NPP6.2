package com.base.sr.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR2001DDAO;
import com.base.sr.service.SR2001DService;

/**
 * 
 * <pre>
 * @title
 * - SR2001D Service(구현체)
 * @package com.base.sr.service.impl
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
@Service
public class SR2001DServiceImpl implements SR2001DService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR2001DDAO sr2001dDao;

	/**
	 * SR2001D 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select01(dsCond);
		return result;
	}
	/**
	 * SR2001D 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select02(dsCond);
		return result;
	}
	/**
	 * SR2001D 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select03(dsCond);
		return result;
	}
	/**
	 * SR2001D 체크리스트 목록 조회
	 */
	public List<Map<String, Object>> select04(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select04(dsCond);
		return result;
	}
	
	/**
	 * SR2001D 프로그램 목록 조회
	 * @param dsCond
	 * @return
	 */
		
	public List<Map<String, Object>> select06(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select06(dsCond);
		return result;
	}
	/**
	 * SR2001D 시나리오 조회
	 * @param dsCond
	 * @return
	 */
		
	public List<Map<String, Object>> select08(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select08(dsCond);
		return result;
	}

	
	public List<Map<String, Object>> selectSrMaPrjTsDtlRslt(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.selectSrMaPrjTsDtlRslt(dsCond);
		if(result.size() == 0 ) return result;

		List<Map<String, Object>> setList = new ArrayList<Map<String,Object>>();
		Map<String, Object> rowMap;
		String id,dt;
		String maxDt;
		boolean existDt;
		
		// SCENR_COMP_DT 업데이트
		for (int i = 0; i < result.size(); i++) {
			result.get(i).put("SCENR_COMP_DT", StringUtil.safeNotNull(result.get(i).get("AT_CNT_DT")) ?  StringUtil.safe(result.get(i).get("AT_CNT_DT")) : StringUtil.safe(result.get(i).get("BOARD_ID_DT"))  );
			
			if("2".equals(StringUtil.safe(result.get(i).get("SCENR_LV")))) {
				maxDt = "";
				existDt = true;
				
				// Lv2 SCENR_COMP_DT 업데이트
				id = StringUtil.safe(result.get(i).get("SCENR_ID"));
				
				for (int j = 0; j < result.size(); j++) {
					
					if((id.equals(StringUtil.safe(result.get(j).get("SCENR_ID"))) && "3".equals(StringUtil.safe(result.get(j).get("SCENR_LV"))))) {
						dt = StringUtil.safe(result.get(j).get("SCENR_COMP_DT"));
						if(dt.isEmpty()) {
							existDt = false;
						}else if( dt.compareTo(maxDt) > 0) {
							maxDt = dt;
						}
					}
				}
				if(existDt) {
					result.get(i).put("SCENR_COMP_DT", maxDt);
				}
				
				if(StringUtil.safeNotNull(result.get(i).get("SCENR_COMP_DT")))
				{
					rowMap = new HashMap<String, Object>();
					rowMap.put("SCENR_ID",StringUtil.safe(result.get(i).get("SCENR_ID")));
					rowMap.put("SCENR_LV",StringUtil.safe(result.get(i).get("SCENR_LV")));
					rowMap.put("SCENR_COMP_DT",StringUtil.safe(result.get(i).get("SCENR_COMP_DT")));
					setList.add(rowMap);
				}
			}
		}

		// Lv3 SCENR_COMP_DT 업데이트
		for (int i = 0; i < setList.size(); i++) {
			id = StringUtil.safe(setList.get(i).get("SCENR_ID"));
			dt = StringUtil.safe(setList.get(i).get("SCENR_COMP_DT"));
			
			for (int j = 0; j < result.size(); j++) {
			
				if(id.equals(StringUtil.safe(result.get(j).get("SCENR_ID")))
					&& "3".equals(StringUtil.safe(result.get(j).get("SCENR_LV")))
					&& StringUtil.safeNull(result.get(j).get("SCENR_COMP_DT")))
				{
					result.get(j).put("SCENR_COMP_DT", dt);
				}
			}
		}
		
		//제외구분 정상처리
		for (int i = 0; i < result.size(); i++) {
			if(!"N".equals(StringUtil.safe(result.get(i).get("SCENR_STAT"))) && !"E".equals(StringUtil.safe(result.get(i).get("SCENR_STAT"))) )
			{
				if(StringUtil.safeNotNull(result.get(i).get("SCENR_COMP_DT")))
					result.get(i).put("SCENR_STAT", "Y");
				else 
					result.get(i).put("SCENR_STAT", "");
			}
			sr2001dDao.modify01(result.get(i));
		}
		
		result = sr2001dDao.selectSrMaPrjTsDtlRslt(dsCond);
		return result;
	}
	
	/**
	 * SR2001D 보안성검토 목록 조회
	 * @param dsCond
	 * @return
	 */
		
	public List<Map<String, Object>> select07(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select07(dsCond);
		return result;
	}
	/**
	 * SR2001D 확장권한관리조회
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond) {
		String userId 	= sc.get().getScUserId();
		dsCond.put("USER_ID", userId);
		List<Map<String, Object>> result = sr2001dDao.select10(dsCond);
		
		return result;
	}
	/**
	 * SR2001D 연관프로젝트 조회
	 * @param dsCond
	 * @return
	 */
		
	public List<Map<String, Object>> select11(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select11(dsCond);
		return result;
	}
	/**
	 * SR2001D 연관프로젝트 조회 (존재유무)
	 * @param dsCond
	 * @return
	 */
		
	public List<Map<String, Object>> select12(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = sr2001dDao.select12(dsCond);
		return result;
	}

	/**
	 * 산출물 확정
	 */
	@Transactional
	public void save01(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
//	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	sr2001dDao.insert01(rowData);
//	    	if("I".equals(rowFlag)) {
//	    		sr2001dDao.insert01(rowData);
//
//	    	}else if("U".equals(rowFlag)) {
//	    		sr2001dDao.modify01(rowData);
//
//	    	}else if("D".equals(rowFlag)) {
//	    		sr2001dDao.remove01(rowData);
//	    	}
		}
	}
	/**
	 * SR2001D 테스트 결과 저장
	 * @param dsData
	 * @return
	 */
	@Transactional
	public void save03(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		sr2001dDao.insert03(rowData);
	    	}else if("U".equals(rowFlag)) {
	    		sr2001dDao.modify01(rowData);
	    	}else if("D".equals(rowFlag)) {
	    		sr2001dDao.remove01(rowData);
	    		sr2001dDao.modify05(rowData);
	    		sr2001dDao.modify06(rowData);
	    	}else if("I_ALL".equals(rowFlag)) {
	    		sr2001dDao.insert04(rowData);
	    	}
		}
	}
	/**
	 * SR2001D  저장
	 * @param dsData
	 * @return
	 */
	@Transactional
	public void save04(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	sr2001dDao.modify04(rowData);

		}
	}
	/**
	 * SR2001D 연관프로젝트아이디 저장
	 * @param dsData
	 * @return
	 */
	@Transactional
	public void save05(List<Map<String, Object>> dsData) {
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
	    	sr2001dDao.modify07(rowData);

		}
	}
}