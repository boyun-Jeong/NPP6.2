package com.base.sr.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.service.FommAuthService;
import com.base.com.web.FommSendTestController;
import com.base.fwk.util.NacUtil;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR5000DService;

/**
 * 
 * <pre>
 * @title
 * - 요청서등록 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  조병준
 * @since   2024. 12. 24.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2024. 12. 24.	조병준		최초작성
 */
@Controller
@RequestMapping("SR5000D")
public class SR5000DController {

	private Logger log = LoggerFactory.getLogger(SR5000DController.class);

	@Autowired
	private SR5000DService sr5000dSvc;

	@Autowired
	private FommAuthService fommAuthSvc;

	@Autowired
	private FommSendTestController fommSendTestController;

	@Autowired
	private NacUtil NacUtil;
	
	/**
	 * 요청서등록 목록 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}

	/**
	 * 요청서등록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/save01")
	public NexacroResult save01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsData") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

		if( result.getVariables().get("AUTH_YN").equals("Y") ) {

			sr5000dSvc.save01(dsData);
		}else {

			return result;
		}
		dsData = sr5000dSvc.select01(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 요청서 카테고리 항목 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select02(dsCond);
		result.addDataSet("dsSrCategoryNh", dsData);
		return result;
	}
	
	/**
	 * 서비스별 담당자 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select03(dsCond);
		result.addDataSet("dsSvcStaffMng", dsData);
		return result;
	}
	
	/**
	 * 요청서용 구성항목 검색 팝업
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select04(dsCond);
		result.addDataSet("ds_main", dsData);
		return result;
	}
	
	/**
	 * IP신청서 근무장소 하위뎁스 공통코드 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
			
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsData = null;
		List<Map<String, Object>> ipData = new ArrayList<Map<String, Object>>();
		
		if(!"S".equals(dsCond.get("TYPE"))) {
			dsData = sr5000dSvc.select05(dsCond);
			result.addDataSet("dsWp", dsData);
		} else {
			
			//==============================================================================
			// 테스트 데이터로 운영환경으로 전환시 수정필요 
			
			for(int i = 0; i < StringUtil.safeInt(dsCond.get("IP_COUNT")); i++) {
				Map<String, Object> inputData = new HashMap<String, Object>();
				
				inputData.put("IP_COUNT",  i+1);
				inputData.put("IP_VALUE", dsCond.get("REG_IP") + "." + (1 + java.util.concurrent.ThreadLocalRandom.current().nextInt(1,254))); // 테스트 데이터
				
				ipData.add(inputData);
			}
			
			ipData.sort((v1, v2) ->{
				try {
				String ipValue1 = (String) v1.get("IP_VALUE");
				String ipValue2 = (String) v1.get("IP_VALUE");
				
				// null값 체크
				if(ipValue1 == null || ipValue2 ==null) {
					return 0;
				}
				
				// IP를 마지막자리 기준으로 분할
				String[] parts1 = ipValue1.split("\\.");
				String[] parts2 = ipValue2.split("\\.");
				
				// 올바르지않은 IP체크
				if(parts1.length != 4 || parts2.length != 4) {
					return 0; // 형식체크
				}
				
				for(int i=0; i<4; i++) {
					int segment1 = Integer.parseInt(parts1[i]);
					int segment2 = Integer.parseInt(parts2[i]);
				
					if(segment1 != segment2) {
						return Integer.compare(segment1, segment2);
					}
				}
				return 0;
				} catch (Exception e) {
					e.printStackTrace();
					return 0;
				}
			});
			
			result.addDataSet("dsWpDetail", ipData);
			
			//==============================================================================
		}
		
		return result;
	}
	
	/**
	 * 업무분류 공통코드
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select06")
	public NexacroResult select06(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select06(dsCond);
		result.addDataSet("dsComm", dsData);
		return result;
	}
	
	/**
	 * 출입관리 상태조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select08")
	public NexacroResult select08(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select08(dsCond);
		if(dsData.size() == 0) {
			List<Map<String, Object>> cardKey = sr5000dSvc.select09(dsCond);
			result.addDataSet("dsSrCardChk", cardKey); //출입카드 번호 채번
		} else {
			result.addDataSet("dsSrCardChk", dsData);
		}
		
		//result.addDataSet("dsSrCardChk", dsData);
		return result;
	}
	
	/**
	 * 결재 - 담당자조회
	 * @return
	 */
	@RequestMapping("/select15")
	public NexacroResult select15(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select15(dsCond);
		result.addDataSet("dsWorkUser", dsData);
		return result;
	}
	
	/**
	 * 결재 - 현장대리인조회
	 * @return
	 */
	@RequestMapping("/select16")
	public NexacroResult select16(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select16(dsCond);
		result.addDataSet("dsSiteUser", dsData);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기  담당자조회
	 * @return
	 */
	@RequestMapping("/select24")
	public NexacroResult select24(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select24(dsCond);
		result.addDataSet("dsWorkUser", dsData);
		return result;
	}
	
	/**
	 * 서비스요청/전산기기  현장대리인조회
	 * @return
	 */
	@RequestMapping("/select25")
	public NexacroResult select25(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select25(dsCond);
		result.addDataSet("dsSiteUser", dsData);
		return result;
	}
	
	/**
	 * 서비스/일반요청 상태조회
	 * @return
	 */
	@RequestMapping("/selectSrmTarget")
	public NexacroResult selectSrmTarget(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select26(dsCond);
		result.addDataSet("dsWfSrm", dsData);
		return result;
	}
	
	/**
	 * 연관ID 조회
	 * @return
	 */
	@RequestMapping("/relationId")
	public NexacroResult relationId(@ParamDataSet(name = "dsRelationList") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.relationId(dsCond);
		List<Map<String, Object>> rowData = new ArrayList<Map<String, Object>>();
		
		if("SRM".equals(dsCond.get("REQ_ID").toString().substring(0,3))) {
			rowData = sr5000dSvc.select26(dsCond); // 서비스 변경이관 복사데이터
			result.addDataSet("dsWfSrm", rowData);
		} else if ("PBM".equals(dsCond.get("REQ_ID").toString().substring(0,3))){
			rowData = sr5000dSvc.select33(dsCond); // 문제관리 변경이관 복사데이터
			result.addDataSet("dsWfPbm", rowData);
		}
		
		result.addDataSet("dsRelationList", dsData);
		return result;
	}
	
	/**
	 * 업무분류별 체크리스트 조회
	 * @return
	 */
	@RequestMapping("/upmuChkList")
	public NexacroResult upmuChkList(@ParamDataSet(name = "dsUpmuChkList") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.upmuChkList(dsCond);
		result.addDataSet("dsUpmuChkList", dsData);
		return result;
	}
	
	/**
	 * 요청서 체크리스트 조회
	 * @return
	 */
	@RequestMapping("/reqChkList")
	public NexacroResult reqChkList(@ParamDataSet(name = "dsReqChkList") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.reqChkList(dsCond);
		result.addDataSet("dsReqChkList", dsData);
		return result;
	}
	
	/**
	 * 체크리스트등록 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/chkListSave")
	public NexacroResult chkListSave(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond, @ParamDataSet(name = "dsReqChkList") List<Map<String, Object>> dsData) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

//		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
//			sr5000dSvc.chkListSave(dsData);
//		}else {
//
//			return result;
//		}
		sr5000dSvc.chkListSave(dsData);

		dsData = sr5000dSvc.reqChkList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 체크리스트등록 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/chkListDelete")
	public NexacroResult chkListDelete(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

//		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
//			sr5000dSvc.chkListDelete(dsCond);
//		}
		sr5000dSvc.chkListDelete(dsCond);
		return result;
	}

	/**
	 * 테스트케이스 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/testCaseDelete")
	public NexacroResult testCaseDelete(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

//		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
//			sr5000dSvc.chkListDelete(dsCond);
//		}
		sr5000dSvc.reqTestDelete(dsCond);	// 삭제
		return result;
	}

	/**
	 * 체크리스트/테스트케이스 삭제
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/deleteChkListTestCase")
	public NexacroResult deleteChkListTestCase(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

	// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
	
		sr5000dSvc.chkListDelete(dsCond);
		sr5000dSvc.reqTestDelete(dsCond);	// 삭제
		
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		String chklistRegYn = sr5000dSvc.selectChkListRegYn(dsCond);
		rtnMap.put("CHKLIST_REG_YN", chklistRegYn);
		String testcaseRegYn = sr5000dSvc.selectTestCaseRegYn(dsCond);
		rtnMap.put("TESTCASE_REG_YN", testcaseRegYn);
		result.addDataSet("dsChkListTestCase", rtnMap);
		
		return result;
	}

	/**
	 * 변경이관추가
	 * @return
	 */
	@RequestMapping("/chmAdd")
	public NexacroResult chmAdd(@ParamDataSet(name = "dsWfChm") Map<String, Object> dsWfChm) throws NexacroException {
	
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

		sr5000dSvc.chmAdd(dsWfChm);
		
		return result;
	}
	
	/**
	 * 유사요청건조회
	 * @return
	 */
	@RequestMapping("/alikeSearch")
	public NexacroResult alikeSearch(@ParamDataSet(name = "dsWfSrm") Map<String, Object> dsWfSrm) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.alikeSearch(dsWfSrm);
		result.addDataSet("dsAlikeList", dsData);
		return result;
	}
	
	/**
	 * 유저테스트 조회조건 조회
	 * @return
	 */
	@RequestMapping("/userTestInfo")
	public NexacroResult userTestInfo(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = sr5000dSvc.userTestInfo(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 유저테스트 목록 조회
	 * @return
	 */
	@RequestMapping("/userTestList")
	public NexacroResult userTestList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.userTestList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 유저테스트 목록 조회
	 * @return
	 */
	@RequestMapping("/reqTestList")
	public NexacroResult reqTestList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {
		
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsData = sr5000dSvc.reqTestList(dsCond);
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 사용자테스트 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/userTestSave")
	public NexacroResult userTestSave(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
			@ParamDataSet(name = "dsUserTestList") List<Map<String, Object>> dsUserTestList) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();

//		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
//			sr5000dSvc.userTestSave(dsUserTestList);
//		}else {
//			return result;
//		}
		sr5000dSvc.userTestSave(dsUserTestList);
		
		List<Map<String, Object>> dsData = sr5000dSvc.userTestList(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	
	/**
	 * 요청서테스트 저장
	 * @param dsData
	 * @return
	 */
	@RequestMapping(value = "/reqTestSave")
	public NexacroResult reqTestSave(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond,
			@ParamDataSet(name = "dsReqTestList") List<Map<String, Object>> dsReqTestList) throws Exception 
	{
		// 요청 메뉴 권한 확인
		NexacroResult result = new NexacroResult();
		
//		if( result.getVariables().get("AUTH_YN").equals("Y") ) {
//			sr5000dSvc.reqTestSave(dsReqTestList);
//		}else {
//			return result;
//		}
		sr5000dSvc.reqTestSave(dsReqTestList);

		List<Map<String, Object>> dsData = sr5000dSvc.reqTestList(dsCond);
		result.addDataSet("dsData", dsData);
		
		return result;
	}
	
	/**
	 * 요청서 본문내용 수정
	 * @return
	 */
	@RequestMapping("/contUpdate")
	public NexacroResult contUpdate(@ParamDataSet(name = "dsContChk") Map<String, Object> dsContChk) throws NexacroException {
	
		sr5000dSvc.contUpdate(dsContChk);
		
		String newLine = System.lineSeparator();
		Map<String, Object> fommNotiSendMt = new HashedMap<String, Object>(); 
		fommNotiSendMt.put("SEND_NO", "");												// 배치 JOB에서 사용하는 키값으로 없으면 ""
		fommNotiSendMt.put("SEND_GUBUN", "03"); 										// CODE_DIV:[CMM_CD] 전송구분[SEND_GUBUN] - 00:[통지설정], 01:[JOB], 02:[RESERVE], 03:[실시간(즉시) 알림], 04:[요청서(수동)], 05:[게시글], 06:[댓글], 07:[답글]
		fommNotiSendMt.put("TITLE", "'" + dsContChk.get("REQ_ID") + " - " + dsContChk.get("TITLE") + "' " + " 요청서의  요청내용이 변경되었습니다.");					// 제목  
		fommNotiSendMt.put("SEND_USER_ID", dsContChk.get("REG_USER_ID") );  // 발신자ID 
		fommNotiSendMt.put("SEND_TYPE_CD", "MEMO"); // SMS,TALK,MEMO 해당되는 것 복수로 ","값으로 지정         
		fommNotiSendMt.put("MSG_CONTS", "- 변경 전 내용" + newLine + dsContChk.get("BEFORE_CONT")   + newLine + newLine 
																+ "-변경 후 내용" + newLine  + dsContChk.get("REQ_CONT"));      //알림 내용 
		
		
		List<Map<String, Object>> userList = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> pl = sr5000dSvc.select27(dsContChk);				  // pl조회
		List<Map<String, Object>> workUser = sr5000dSvc.select24(dsContChk);	  // 담당자 조회
		 
		// 요청접수의 담당자 지정 이전의 담당자데이터는 조회시 너무 많은 담당자가 조회될수있기에 추후 협의필요 
		if(pl.size() != 0) {
			for (int i = 0; i < pl.size(); i++) {
				userList.add(pl.get(i));
			}
		}
		if(workUser.size() != 0) {
			for (int i = 0; i < workUser.size(); i++) {
				userList.add(workUser.get(i));
			}
		}

		try {
			// 쪽지발송
			fommSendTestController.send(fommNotiSendMt, userList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}	

	/**
	 * 요청서 본문내용 수정횟수
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/contUpdateCnt")
	public NexacroResult contUpdateCnt(@ParamDataSet(name = "dsWfSrm") Map<String, Object> dsWfSrm) throws NexacroException 
	{
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.contUpdateCnt(dsWfSrm);
		result.addDataSet("dsContChk", dsData);
		return result;
	}

	/**
	 * IP할당
	 * @param dsCond
	 */
	@RequestMapping("/regIp")
	public void regIP(@ParamDataSet(name = "dsWfSrm") List<Map<String, Object>> srSysConnIp) throws NexacroException {
		
		for (int i = 0; i < srSysConnIp.size(); i++) {
			Map<String, Object> dsParams = srSysConnIp.get(i);
		
			try {
				NacUtil.regIp(dsParams);	 // 외부서버에서 할당받은 IP 사용신청
			    sr5000dSvc.connIpUpdate(dsParams); // 발급IP 내부테이블 업데이트
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * 인프라  담당자조회
	 * @return
	 */
	@RequestMapping("/select10")
	public NexacroResult select10(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> dsData = sr5000dSvc.select10(dsCond);
		result.addDataSet("dsWorkUser", dsData);
		return result;
	}

	/**
	 * 체크리스트 & 테스트 케이스 등록 여부 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectChkListTestCase")
	public NexacroResult selectChkListTestCase(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException {

		NexacroResult result = new NexacroResult();
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		String chklistRegYn = sr5000dSvc.selectChkListRegYn(dsCond);
		rtnMap.put("CHKLIST_REG_YN", chklistRegYn);
		String testcaseRegYn = sr5000dSvc.selectTestCaseRegYn(dsCond);
		rtnMap.put("TESTCASE_REG_YN", testcaseRegYn);
		result.addDataSet("dsChkListTestCase", rtnMap);
		return result;
	}
}