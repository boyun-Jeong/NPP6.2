package com.base.com.web;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - SMS 전송관리 Controller
 * @package com.base.com.web
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 03. 07.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 07.	정보윤		최초작성
 */
@Controller
@RequestMapping("TestSend")
public class FommSendTestController {

	private Logger log = LoggerFactory.getLogger(FommSendTestController	.class);

	@Autowired
	private FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;

	/**
	 * 사용자별 메뉴/메뉴권한/즐겨찾기메뉴 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/send")
	public NexacroResult send(@ParamDataSet(name = "dsFommNotiSendMt", required=false) Map<String, Object> fommNotiSendMt,
											@ParamDataSet(name = "dsUserList", required=false) List<Map<String, Object>> userList) throws Exception {
		
			NexacroResult result = new NexacroResult();
			
			String sendNo			= StringUtil.safe(fommNotiSendMt.get("SEND_NO"));			//배치 JOB에서 사용하는 키값으로 없으면 ""
			String sendGubun		= StringUtil.safe(fommNotiSendMt.get("SEND_GUBUN"));		//CODE_DIV:[CMM_CD] 전송구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
			String title					= StringUtil.safe(fommNotiSendMt.get("TITLE"));					//제목
			String sendUserId		= StringUtil.safe(fommNotiSendMt.get("SEND_USER_ID"));		//발신자ID
			String sendTypeCd		= StringUtil.safe(fommNotiSendMt.get("SEND_TYPE_CD"));	//SMS,TALK,MEMO 해당되는 것 복수로 ","값으로 지정
			String msgConts		= StringUtil.safe(fommNotiSendMt.get("MSG_CONTS"));		//알림 내용
			
			/* Param1 전송번호 [String] sendNo			- 해당 전송 건에 해당하는 마스터 키
			 * Param2 전송구분 [String] sendGubun	- CODE_DIV:[CMM_CD] 전송구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
			 * Param3 전송구분 [String] sendTypeCd	- SMS,TALK,MEMO 구분자를 ","로 발송을 원하는 통보매체 복수로 지정
			 * Param4 전송구분 [List] sendUserId		- 발신자 사번ID
			 * Param5 전송구분 [List] sendUserId		- 제목
			 * Param6 전송구분 [List] sendUserId		- 내용
			 * Param7 전송구분 [List] userList				- 수신할 사용자 LIST [USER_ID]만 존재하면 됨
			 */
			try {
				fommScheduleCommonSvcImpl.sendMsgTran(sendNo, sendGubun, sendTypeCd, sendUserId, title, msgConts, userList);
			}catch(Exception e) {
				e.printStackTrace();
			}
			return result;
	}
}