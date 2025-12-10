package com.base.fomm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.base.com.dao.FommCodeDAO;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0950WDAO;
import com.base.fomm.service.FOMM0950WService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지처리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 25.	이훈석		최초작성
 */
@Service
public class FOMM0950WServiceImpl implements FOMM0950WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0950WDAO fomm0950wDao;
	
	@Autowired
	private FommCodeDAO fommCodeDao;

	/**
	 * 쪽지처리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result01 = fomm0950wDao.select01(dsCond);
		return result01;
	}
	
	/**
	 * 쪽지처리 목록 조회
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {
		List<Map<String, Object>> result02 = fomm0950wDao.select02(dsCond);
		return result02;
	}
	
	/**
	 * 쪽지처리 목록 조회
	 */
	public List<Map<String, Object>> select03(Map<String, Object> dsCond) {
		List<Map<String, Object>> result03 = fomm0950wDao.select03(dsCond);
		return result03;
	}
	
	/**
	 * 쪽지처리 목록 조회
	 */
	public List<Map<String, Object>> select10(Map<String, Object> dsCond) {
		List<Map<String, Object>> result03 = fomm0950wDao.select10(dsCond);
		return result03;
	}
	

	/**
	 * READ_YN 업데이트
	 */
	@Transactional
	public void save01(Map<String, Object> dsCond,Map<String, Object> dsPtMemo,Map<String, Object> dsPtMemoRcv) {
		// dsCond,dsPtMemo,dsPtMemoRcv
		
		String userId = sc.get().getScUserId();
		String userNm = sc.get().getScUserNm();
		String lmpDepCd = sc.get().getScDeptCd();
		String lmpDepNm = sc.get().getScDeptNm();
		
		String MODIFY_TYPE = StringUtil.safe(dsCond.get("MODIFY_TYPE"));
		//String FV_FLAG = StringUtil.safe(dsCond.get("FV_FLAG"));
		//String MEMO_ID = StringUtil.safe(dsCond.get("MEMO_ID"));
		//String MEMO_RCV_ID = StringUtil.safe(dsPtMemoRcv.get("MEMO_RCV_ID"));
		
		dsPtMemo.put("LMID", userId);
		dsPtMemo.put("LMNM", userNm);
		dsPtMemo.put("LMDCD", lmpDepCd);
		dsPtMemo.put("LMDNM", lmpDepNm);
				
		dsPtMemoRcv.put("LMID", userId);
		dsPtMemoRcv.put("LMNM", userNm);
		dsPtMemoRcv.put("LMDCD", lmpDepCd);
		dsPtMemoRcv.put("LMDNM", lmpDepNm);
		    	
    	if("RR".equals(MODIFY_TYPE)) {				
    		
    		fomm0950wDao.modify01(dsCond);	//수신자 READ_YN 을 Y로 업데이트
    		Map<String, Object> rowData = new HashMap<String, Object>();
            rowData.put("USER_ID", userId);
    		fommCodeDao.updateAlarmCnt(rowData);
    		
    	} else if("DRCV".contentEquals(MODIFY_TYPE)) {
    		
    		fomm0950wDao.modify02(dsCond);	//수신자 DEL_YN을 Y로 업데이트
    		
    	}else if("DSND".contentEquals(MODIFY_TYPE)) {
    		
    		fomm0950wDao.modify03(dsPtMemo);	//발신자 DEL_YN을 Y로 업데이트
    		
    	}else if("USND".contentEquals(MODIFY_TYPE)) {
    		
    		fomm0950wDao.modify03(dsPtMemo);	//임시저장 후 임시수정
    	}	
    	
    	/*
    	else if("U".equals(rowFlag)) {
    		wf0120pDao.modify01(rowData);
    	} 
    	else if("D".equals(rowFlag)) {
    		wf0120pDao.remove01(rowData);
    		wf0120pDao.remove02(rowData);
    	}
    	fomm0950wDao.modify01(dsData);
        */
		/*
		for (int i = 0; i < dsData.size(); i++) {
			Map<String, Object> rowData = dsData.get(i);
			

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if("I".equals(rowFlag)) {
	    		fomm0950wDao.insert01(rowData);

	    	}else if("U".equals(rowFlag)) {
	    		fomm0950wDao.modify01(rowData);

	    	}else if("D".equals(rowFlag)) {
	    		fomm0950wDao.remove01(rowData);
	    	}
		}
		*/
    	
	}
	/**
	 * 임시저장 후 수정 혹은 발송
	 */
	@Transactional
	public void save02(Map<String, Object> dsCond, Map<String, Object> dsPtMemo, List<Map<String, Object>> dsPtMemoRcvTmp, List<Map<String, Object>> ds_userRcv_All) {
		
		String userId = sc.get().getScUserId();
		String userNm = sc.get().getScUserNm();
		String lmpDepCd = sc.get().getScDeptCd();
		String lmpDepNm = sc.get().getScDeptNm();
		
		String MODIFY_TYPE = StringUtil.safe(dsCond.get("MODIFY_TYPE"));
		//String FV_FLAG = StringUtil.safe(dsCond.get("FV_FLAG"));
		//String MEMO_ID = StringUtil.safe(dsCond.get("MEMO_ID"));
		//String MEMO_RCV_ID = StringUtil.safe(dsPtMemoRcv.get("MEMO_RCV_ID"));
		
		dsPtMemo.put("LMID", userId);
		dsPtMemo.put("LMNM", userNm);
		dsPtMemo.put("LMDCD", lmpDepCd);
		dsPtMemo.put("LMDNM", lmpDepNm);
		
		// 발신자 임시저장 후 수정 혹은 발송 처리
		fomm0950wDao.modify05(dsPtMemo);
		
		// 메모 수신자 테이블 수정 dsPtMemoRcvTmp-기존수신자, ds_userRcv_All-신규추가자
		//기존 수신자중 삭제된 수신자 DEL_YN -> N 업데이트
		for (int i = 0; i < dsPtMemoRcvTmp.size(); i++) {
			Map<String, Object> rowData = dsPtMemoRcvTmp.get(i);

	        // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);
	    	// 기존데이터셋과 비교해서 없는 수신자면(D FLAG) DEL_YN = Y

	    	if("D".equals(rowFlag)) {
	    		fomm0950wDao.remove01(rowData);
	    	}else if ("U".equals(rowFlag)) {
	    		fomm0950wDao.modify06(rowData);
	    	}
		}
		//신규 추가자 RCV테이블 INSERT
		for (int i = 0; i < ds_userRcv_All.size(); i++) {
			Map<String, Object> rowData = ds_userRcv_All.get(i);

	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	rowData.put("LMID", userId);

	    	if("I".equals(rowFlag)) {
	    		fomm0950wDao.insert02(rowData);
	    	}
		}
				
		//dsPtMemoRcv.put("LMID", userId);
		//dsPtMemoRcv.put("LMNM", userNm);
		//dsPtMemoRcv.put("LMDCD", lmpDepCd);
		//dsPtMemoRcv.put("LMDNM", lmpDepNm);

	}
	

	/**
	 * MEMO 삭제
	 */
	@Transactional
	public void save03(Map<String, Object> dsCond) {
		// dsCond,dsPtMemo,dsPtMemoRcv
		
		String userId = sc.get().getScUserId();
		String userNm = sc.get().getScUserNm();
		String lmpDepCd = sc.get().getScDeptCd();
		String lmpDepNm = sc.get().getScDeptNm();
		
		dsCond.put("LMID", userId);
		dsCond.put("LMNM", userNm);
		dsCond.put("LMDCD", lmpDepCd);
		dsCond.put("LMDNM", lmpDepNm);
		    	
   		fomm0950wDao.remove02(dsCond);
	}
}