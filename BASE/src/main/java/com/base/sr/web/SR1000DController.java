package com.base.sr.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fomm.service.FOMM0700DService;
import com.base.fwk.util.StringUtil;
import com.base.sr.service.SR1000DService;

/**
 * 
 * <pre>
 * @title
 * - 요청정보 Controller
 * @package com.base.sr.web
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
@Controller
@RequestMapping("SR1000D")
public class SR1000DController {

	private Logger log = LoggerFactory.getLogger(SR1000DController.class);

	@Autowired
	private FOMM0700DService fomm0700dSvc;

	@Autowired
	private SR1000DService sr1000dSvc;

	/**
	 * SR요청 BA-IT 체크리스트 정보 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectMaBaItRevChklst")
	public NexacroResult selectMaBaItRevChklst(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		Map<String, Object> rtnMap = sr1000dSvc.selectMaBaItRevChklst(dsCond);
		result.addDataSet("dsChklstInfo", rtnMap);
		return result;
	}

	/**
	 * BA 체크리스트 처리 정보 저장
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateBaChklstInfo")
	public NexacroResult updateBaChklstInfo(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData,
											@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();
		
		if(dsData.size() > 0) {
			fomm0700dSvc.save01(dsData);
		}

		sr1000dSvc.updateBaChklstInfo(dsChklstInfo);
		
		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}

	/**
	 * 팀장 체크리스트 처리 정보 저장
	 * @param dsCond
	 * @return
	 */
//	@RequestMapping("/updateBaTeamChklstInfo")
//	public NexacroResult updateBaTeamChklstInfo(@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {
//
//		NexacroResult result = new NexacroResult();		
//		sr1000dSvc.updateBaTeamChklstInfo(dsChklstInfo);
//		return result;
//	}

	/**
	 * IT담당자 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateItCgerChklstInfo")
	public NexacroResult updateItCgerChklstInfo(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData,
												@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();

		if(dsData.size() > 0) {
			fomm0700dSvc.save01(dsData);
		}

		sr1000dSvc.updateItCgerChklstInfo(dsChklstInfo);
		
		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}
	
	/**
	 * BA 체크리스트 처리 정보 저장
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateBaItChklstInfo")
	public NexacroResult updateBaItChklstInfo(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData,
											@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();
		
		if(dsData.size() > 0) {
			fomm0700dSvc.save01(dsData);
		}

		String orgBaChklstSignYn = StringUtil.safe(dsChklstInfo.get("ORG_BA_CHKLST_SIGN_YN"));
		String baChklstSignYn = StringUtil.safe(dsChklstInfo.get("BA_CHKLST_SIGN_YN"));
		String orgItChklstSignYn = StringUtil.safe(dsChklstInfo.get("ORG_IT_CHKLST_SIGN_YN"));
		String itChklstSignYn = StringUtil.safe(dsChklstInfo.get("IT_CHKLST_SIGN_YN"));
		
		if(!orgBaChklstSignYn.equals(baChklstSignYn)) {
			sr1000dSvc.updateBaChklstInfo(dsChklstInfo);
		}
		
		if(!orgItChklstSignYn.equals(itChklstSignYn)) {
			sr1000dSvc.updateItCgerChklstInfo(dsChklstInfo);
		}

		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}

	/**
	 * IT담당자 팀장 보안성심의 여부 평가 서명 및 의견작성
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateItTeamChklstInfo")
	public NexacroResult updateItTeamChklstInfo(@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();		
		sr1000dSvc.updateItTeamChklstInfo(dsChklstInfo);
		
		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}

	/**
	 * IT담당자 등급 평가 서명 및 의견작성
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateItCgerGrdChklstInfo")
	public NexacroResult updateItCgerGrdChklstInfo(@ParamDataSet(name = "dsData") List<Map<String, Object>> dsData,
													@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();

		if(dsData.size() > 0) {
			fomm0700dSvc.save01(dsData);
		}

		sr1000dSvc.updateItCgerGrdChklstInfo(dsChklstInfo);

		log.debug("[END] updateItCgerGrdChklstInfo()");
		
		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}

	/**
	 * IT담당자 팀장 등급 평가 서명 및 의견작성
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateItTeamGrdChklstInfo")
	public NexacroResult updateItTeamGrdChklstInfo(@ParamDataSet(name = "dsChklstInfo") Map<String, Object> dsChklstInfo) throws Exception {

		NexacroResult result = new NexacroResult();		
		sr1000dSvc.updateItTeamGrdChklstInfo(dsChklstInfo);

		dsChklstInfo = sr1000dSvc.selectMaBaItRevChklst(dsChklstInfo);
		result.addDataSet("dsChklstInfo", dsChklstInfo);
		return result;
	}

	/**
	 * IT담당자 보안성심의 평가 등록시 보안등급 UPDATE
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateSecureGradeCd")
	public NexacroResult updateSecureGradeCd(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		sr1000dSvc.updateSecureGradeCd(dsCond);
		
		dsCond = sr1000dSvc.selectMaBaItRev(dsCond);
		
		Map<String, Object> rtnMap = new HashMap<>();		
		
		for(String colNm : dsCond.keySet()) {
			
			if("SECURE_GRADE_CD".equals(colNm)) {
				rtnMap.put(colNm, dsCond.get(colNm));
				break;
			}						
		}
		result.addDataSet("dsSecureGradeCd", rtnMap);
		return result;
	}

	/**
	 * IT담당자 등급평가 등록시 위험등급 UPDATE
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateDangerGradeCd")
	public NexacroResult updateDangerGradeCd(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		sr1000dSvc.updateDangerGradeCd(dsCond);

		Map<String, Object> rtnMap = new HashMap<>();

		for(String colNm : dsCond.keySet()) {
			
			if("DANGER_GRADE_CD".equals(colNm)) {
				rtnMap.put(colNm, dsCond.get(colNm));
				break;
			}						
		}
		result.addDataSet("dsDangerGradeCd", rtnMap);
		return result;
	}
	
	/**
	 * SR요청 프로젝트기간 등록시 희망완료일에 마지막 일자 셋팅
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateSrBaseReqDate")
	public NexacroResult updateSrBaseReqDate(@ParamDataSet(name = "dsSrMaBaItRev") Map<String, Object> dsSrMaBaItRev) throws Exception {
		
		NexacroResult result = new NexacroResult();

		sr1000dSvc.updateSrBaseReqDate(dsSrMaBaItRev);
		return result;
	}

	/**
	 * 서브 프로젝트 등록
	 * @param rowData
	 */
	@RequestMapping("/newSubPrj")
	public NexacroResult newSubPrject(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {
		
		NexacroResult result = new NexacroResult();

		sr1000dSvc.newSubPrj(dsCond);

		return result;
	}
	
	/**
	 * 서브 프로젝트 PL 변경
	 * @param rowData
	 */
	@RequestMapping("/updateSubPrjPl")
	public NexacroResult updateSubPrjPl(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {
		
		NexacroResult result = new NexacroResult();

		sr1000dSvc.updateSubPrjPl(dsCond);

		return result;
	}

	/**
	 * SR요청 BA, IT 담당자 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectBaItCger")
	public NexacroResult selectBaItCger(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {
		
		NexacroResult result = new NexacroResult();		
		List<Map<String, Object>> rtnMap = sr1000dSvc.selectBaItCger(dsCond);
		result.addDataSet("dsCger", rtnMap);
		return result;
	}
	
	/**
	 * 마스터 프로젝트에 해당하는 진행중인 서브프로젝트 건수
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSrMaPrjMaster")
	public NexacroResult selectSrMaPrjMaster(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		Map<String, Object> rtnMap = sr1000dSvc.selectSrMaPrjMaster(dsCond);
		result.addDataSet("dsMasterPrj", rtnMap);
		return result;
	}
	
	
	/**
	 * 마스터 프로젝트에 해당하는 진행중인 서비프로젝트 건수
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSubPrjProcCnt")
	public NexacroResult selectSubPrjProcCnt(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		Map<String, Object> rtnMap = sr1000dSvc.selectSubPrjProcCnt(dsCond);
		result.addDataSet("dsProcCnt", rtnMap);
		return result;
	}

	/**
	 * 마스터 프로젝트 기준 최초 이행배포일시 체크 (1주일 지난경우는 서브프로젝트 추가할수 없음)
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectRimsDtChk")
	public NexacroResult selectRimsDtChk(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		Map<String, Object> rtnMap = sr1000dSvc.selectRimsDtChk(dsCond);
		result.addDataSet("dsRimsDtChk", rtnMap);
		return result;
	}
	
	/**
	 * 마스터 프로젝트에 해당하는 진행중인 서비프로젝트 건수
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectDiscardCheck")
	public NexacroResult selectDiscardCheck(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		String possYn = sr1000dSvc.selectDiscardCheck(dsCond);
		
		Map<String, Object> rtnMap = new HashMap<>();
		rtnMap.put("POSS_YN", possYn);
		result.addDataSet("dsDiscardCheck", rtnMap);
		return result;
	}

	/**
	 * 마스터 프로젝트 폐기 처리
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/updateDisCard")
	public NexacroResult updateDisCard(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();
		sr1000dSvc.updateDisCard(dsCond);
		return result;
	}
	
	/**
	 * 마스터 프로젝트 종결 처리
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/quit")
	public NexacroResult quit(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();
		sr1000dSvc.quit(dsCond);
		return result;
	}

	/**
	 * 마스터 프로젝트에 종료/중단 요청서 목록
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectMasterReqList")
	public NexacroResult selectMasterReqList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		List<Map<String, Object>> list = sr1000dSvc.selectMasterReqList(dsCond);
		result.addDataSet("dsMasterReqRefList", list);
		return result;
	}

	/**
	 * 서브 프로젝트에 요청서 목록
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSubReqList")
	public NexacroResult selectSubReqList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		List<Map<String, Object>> list = sr1000dSvc.selectSrBaseInfo_subPrj(dsCond);
		result.addDataSet("dsSubReqRefList", list);
		return result;
	}
	
	/**
	 * 서브 프로젝트 목록
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/selectSubPrjList")
	public NexacroResult selectSubPrjList(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws Exception {

		NexacroResult result = new NexacroResult();		
		
		List<Map<String, Object>> list = sr1000dSvc.selectSrMaPrjAll(dsCond);
		result.addDataSet("dsPrjList", list);
		return result;
	}	
}