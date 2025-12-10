package com.base.fomm.service.impl;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0000PDAO;
import com.base.fomm.dao.FOMM0110WDAO;
import com.base.fomm.dao.FOMM0540WDAO;
import com.base.fomm.service.FOMM0540WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 즉시알림발송 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 13.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 13.	정보윤		최초작성
 */
@Service
public class FOMM0540WServiceImpl implements FOMM0540WService {

	private Logger log = LoggerFactory.getLogger(FOMM0540WServiceImpl.class);
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0540WDAO fomm0540wDao;

	@Autowired
	private FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;

	@Autowired
	private FOMM0000PDAO fomm0000pDao;

	@Autowired
	private FOMM0110WDAO fomm0110wDao;

	/**
	 * 즉시알림발송 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = fomm0540wDao.select01(dsCond);
		return result;
	}

	/**
	 * 즉시알림발송 저장
	 */	
	public void save01(Map<String, Object> dsFommNotiSendMt, List<Map<String, Object>> userList) throws Exception {

		//SMS, 헤아림TALK, 쪽지 수신 대상자 등록
		String sendNo 			= "";
		String title					= StringUtil.safe(dsFommNotiSendMt.get("TITLE"));
		String sendUserId		= StringUtil.safe(dsFommNotiSendMt.get("SEND_USER_ID"));
		String sendTypeCd		= StringUtil.safe(dsFommNotiSendMt.get("SEND_TYPE_CD"));
		String msgConts		= StringUtil.safe(dsFommNotiSendMt.get("MSG_CONTS"));
		String recvDivCd		= StringUtil.safe(dsFommNotiSendMt.get("RECV_DIV_CD"));
		
		if("IT".equals(recvDivCd)) {
			Map<String, Object> condMap = new HashMap<String, Object>();
			condMap.put("DEPT_CD", "96651");	//IT지원부
			List<Map<String, Object>> listDept = fomm0000pDao.select02(condMap);

			if(listDept != null) {
				
				log.debug("listDept.size()=======================>" + listDept.size());
				
				String[] arrDeptCd = new String[listDept.size()];
				
				for (int i = 0; i < listDept.size(); i++) {
					arrDeptCd[i] = StringUtil.safe(listDept.get(i).get("DEPT_CD"));
					//96651
				}
				
				condMap = new HashMap<String, Object>();
				condMap.put("ARR_DEPT_CD",	arrDeptCd);
				condMap.put("USE_YN",				"Y");
				userList = fomm0110wDao.select01(condMap);
				
				//USER_ID 열만 남기고 모두 제거
				userList.forEach(map -> map.keySet().retainAll(Collections.singleton("USER_ID")));
				
//				for (int i = 0; i < userList.size(); i++) {
//					
//					for (String colNm : userList.get(0).keySet()) {
//						log.debug(i + "행:" + " COL_NM:[" + colNm + "] VALUE:[" + userList.get(i).get(colNm) + "]");
//					}
//				}
				
				if(userList.size() == 0) {
					//Exception
					log.debug("listDept.size()=======================>0");
					sc.get().setScSessionMsg("실시간 일림 발송할 수신대상자가 존재하지 않습니다.");
					throw new Exception("실시간 일림 발송할 수신대상자가 존재하지 않습니다.");
				}

			}else {
				//Exception
				log.debug("listDept.size()=======================>0");
				sc.get().setScSessionMsg("실시간 일림 발송할 수신대상자가 존재하지 않습니다.");
				throw new Exception("실시간 일림 발송할 수신대상자가 존재하지 않습니다.");
			}
		}
		sendNo = saveProc(dsFommNotiSendMt, userList);

		//전송 처리
		/* Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
		 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 알림구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
		 * Param3 전송구분 [String] sendTypeCd	- SMS,TALK,MEMO 구분자를 ","로 발송을 원하는 통보매체 복수로 지정
		 * Param4 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
		 */
		fommScheduleCommonSvcImpl.sendMsgTran(sendNo, "03", sendTypeCd, sendUserId, title, msgConts, userList);
	}

	public String saveProc(Map<String, Object> dsFommNotiSendMt, List<Map<String, Object>> userList) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		 // DATA RowType 가져오기
		dsFommNotiSendMt.put("LMID", userId);
		dsFommNotiSendMt.put("LMPID", lmpId);

		//실시간 알림 발송시 마스터 데이터 생성
    	fomm0540wDao.insert01(dsFommNotiSendMt);
		return StringUtil.safe(dsFommNotiSendMt.get("SEND_NO"));
	}
}