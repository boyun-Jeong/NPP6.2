package com.base.fomm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.fomm.dao.FOMM0900WDAO;
import com.base.fomm.service.FOMM0900WService;

/**
 * 
 * <pre>
 * @title
 * - 쪽지보내기 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  이훈석
 * @since   2024. 11. 19.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 11. 19.	이훈석		최초작성
 */
@Service
public class FOMM0900WServiceImpl implements FOMM0900WService {

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0900WDAO fomm0900wDao;
	
	//@Autowired
	//private FommMultipartService fommMultipartService;
	
	@Autowired
	private FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;

	/**
	 * 쪽지보내기 저장
	 * @throws Exception 
	 */
	@Transactional
	public String save01(Map<String, Object> dsPtMemo, List<Map<String, Object>> dsPtMemoRcv) throws Exception {
		
		//System.out.println("============================서비스 임플 시작 = =========================");
		
//		Map<String, Object> MEMO_ID = fomm0900wDao.select01(dsPtMemo); //메모 ID max 값으로 받아옴
//		StringM EMO_ID = fomm0900wDao.select01();					
		
//		Map<String, Object> M_rowData = dsPtMemo.get(0);		//메모데이터는 1건이므로...
//		M_rowData.put("MEMO_ID", MEMO_ID);
		String MEMO_ID = "";
		
		String userId 	= sc.get().getScUserId();				//로그인 유저 id
		String userNm = sc.get().getScUserNm();			//로그인 유저 이름
		String lmpId 	= sc.get().getScLmpId();					//화면 ID
		String lmpDepCd = sc.get().getScDeptCd();			//로그인 유저 부서코드
		String lmpDepNm = sc.get().getScDeptNm();		//로그인 유저 부서이름
		
		fommScheduleCommonSvcImpl.sendMsgTran("", "03", "", "", "", "", dsPtMemoRcv);
//		fommScheduleCommonSvcImpl.sendMsgTran(sendNo, "03", sendTypeCd, sendUserId, title, msgConts, userList);
//    	System.out.println("====================================================== userId : " + userId);
//    	System.out.println("====================================================== userNm : " + userNm);
//    	System.out.println("====================================================== lmpId : " + lmpId);
//    	System.out.println("====================================================== lmpDepCd : " + lmpDepCd);
//    	System.out.println("====================================================== lmpDepNm : " + lmpDepNm);
//    	System.out.println("====================================================== dsPtMemoRcv.size() : " + dsPtMemoRcv.size());
		
    	//MEMO 저장
		
		dsPtMemo.put("LMID", userId);
//		dsPtMemo.put("LMPID", lmpId);
		dsPtMemo.put("LMNM", userNm);
		dsPtMemo.put("LMDCD", lmpDepCd);
		dsPtMemo.put("LMDNM", lmpDepNm);
		
    	String MEMO_STATUS_CD = StringUtil.safe(dsPtMemo.get("MEMO_STATUS_CD"));
    	//System.out.println("========================= MEMO_STATUS_CD ============================= ::  " + MEMO_STATUS_CD);
    	//System.out.println("========================= dsPtMemoRcv.size() ============================= ::  " + dsPtMemoRcv.size());
    	fomm0900wDao.insert01(dsPtMemo);
    	MEMO_ID = StringUtil.safe(dsPtMemo.get("MEMO_ID"));		// 메모테이블에 저장할때 생성한 MEMO_ID를 가져옴
    	
    	//System.out.println("========================= 서비스 임플 MEMO_ID ============================= ::  " + MEMO_ID);
    	
    	//임시저장시 수신자가 1명도 없을때
    	if(dsPtMemoRcv.size() > 0) {
    		    	    	
			//MEMO_RVC 저장
			for (int i = 0; i < dsPtMemoRcv.size(); i++) {
				Map<String, Object> rowData = dsPtMemoRcv.get(i);
	
		        // DATA RowType 가져오기
		    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
		    	
		    	rowData.put("MEMO_ID", MEMO_ID);
		    	
		    	rowData.put("LMID", userId);
		    	rowData.put("LMNM", userNm);
		    	rowData.put("LMDCD", lmpDepCd);
		    	rowData.put("LMDNM", lmpDepNm);
		    	
	//	    	System.out.println("============================for문 ========================== rowFlag : " + rowFlag);
	//	    	System.out.println("============================for문 ========================== lmpDepNm : " + lmpDepNm);
		    	
		    	if("I".equals(rowFlag)) {
		    		fomm0900wDao.insert02(rowData);
	
		    	}else if("U".equals(rowFlag)) {
		    		fomm0900wDao.modify01(rowData);
	
		    	}else if("D".equals(rowFlag)) {
		    		fomm0900wDao.remove01(rowData);
		    	}
			}
		}
		
		
    	// 여기도 닫음 String rowFlag = StringUtil.safe(dsPtMemo.get("ROWFLAG"));
    	//dsPtMemo.put("LMID", userId);
    	//dsPtMemo.put("LMPID", lmpId);
    	
    	
    	//내가 추가한 부분 시작 오로지 Insert가  키값을 가지고 잘 되는지만 테스트
    	    	
    	//fomm0900wDao.insert01(dsPtMemo);
    	//fomm0900wDao.insert02(dsPtMemo);
    	
    	//내가 추가한 부분 끝
    	
    	/* 여기 주석처리 시작
    	System.out.println("============================서비스 임플========================== rowFlag : " + rowFlag);
    	
    	System.out.println("============================서비스 임플 ========================== dsPtMemo : " + dsPtMemo.toString());
    	
    	//dsPtMemo.put("MEMO_ID", memoSeq);
    	fomm0900wDao.insert01(dsPtMemo);
    	
    	String memoId = StringUtil.safe(dsPtMemo.get("MEMO_ID"));
		fommMultipartService.replaceTempKey("FOMM_MEMO", null, memoId);

    	System.out.println("============================서비스 임플 ========================== dsPtMemoRcv.size() : " + dsPtMemoRcv.size());
    	
    	
		for (int i = 0; i < dsPtMemoRcv.size(); i++) {
			Map<String, Object> rowData = dsPtMemoRcv.get(i);

	        // DATA RowType 가져오기
	    	String rowFlagRcv = StringUtil.safe(rowData.get("ROWFLAG"));
	    	
	    	//rowData.put("MEMO_ID", memoSeq);
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	System.out.println("============================서비스 임플 ========================== rowFlagRcv : " + rowFlagRcv);
	    	
	    	System.out.println("============================ 서비스 임플 ========================== dsPtMemoRcv : " + dsPtMemoRcv.toString());

	  
	    	fomm0900wDao.insert02(rowData);

		}
		
		여기 주석처리 끝*/
		
		//System.out.println("============================서비스 임플 = 끝========================= ");
    	
    	
    	return MEMO_ID;
	}
	

	
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0900wDao.select01(dsCond);
		return result;
	} 	
/*	@Override
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		// TODO Auto-generated method stub
		return null;
	} 
*/

	public List<Map<String, Object>> selectMemoDeptUser(Map<String, Object> dsCond) {
			
			List<Map<String, Object>> result = fomm0900wDao.selectMemoDeptUser(dsCond);
			return result;
	} 
	
	public List<Map<String, Object>> selectMemoGrpUser(Map<String, Object> dsCond) {
		
		String userId 	= sc.get().getScUserId();
		dsCond.put("OWNER_ID", userId);
		
		List<Map<String, Object>> result = fomm0900wDao.selectMemoGrpUser(dsCond);
		return result;
} 
	
	public List<Map<String, Object>> selectMemoDeptUserList(String DEPT_CD, String SCH_NM) {
		
		Map<String, Object> prmMap = new HashMap<>();
		
		prmMap.put("DEPT_CD", DEPT_CD);
		prmMap.put("SCH_NM", SCH_NM);
		
		List<Map<String, Object>> result = fomm0900wDao.selectMemoDeptUserList(prmMap);
		return result;
	} 
	
	public List<Map<String, Object>> selectMemoGrpUserList(String GROUP_ID, String SCH_NM) {
		
		Map<String, Object> prmMap = new HashMap<>();
		
		prmMap.put("GROUP_ID", GROUP_ID);
		prmMap.put("SCH_NM", SCH_NM);
		
		List<Map<String, Object>> result = fomm0900wDao.selectMemoGrpUserList(prmMap);
		return result;
	}
	
	public List<Map<String, Object>> selectUserRtn(List<Map<String, Object>> dsCond) {	

		Map<String, Object> prmMap = new HashMap<>();	
		
		List<Map<String, Object>> result  = new ArrayList<>();
		
		int maxCnt = 1000;
		
		if(dsCond.size() > maxCnt) {
			
			List<List<Map<String, Object>>> subCond  = new ArrayList<>();
			
			for(int i=0; i <dsCond.size(); i += maxCnt ) {
				int lastIdx = Math.min(dsCond.size(), i +maxCnt );
				subCond.add(dsCond.subList(i, lastIdx));
			}
			
			for(int j=0;j < subCond.size(); j++) {
				prmMap.put("userList", subCond.get(j));	
				result.addAll( fomm0900wDao.selectUserRtn(prmMap));	
			}
			
			
		} else {
			   prmMap.put("userList", dsCond);				
			   result = fomm0900wDao.selectUserRtn(prmMap);			
		}
	

		return result;
	} 
	
	public List<Map<String, Object>> selectMemoUserSingle(Map<String, Object> dsCond) {
		
		List<Map<String, Object>> result = fomm0900wDao.selectMemoUserSingle(dsCond);
		return result;
} 

}