package com.base.com.vo;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import com.base.fwk.util.StringUtil;
import com.nexacro.java.xapi.data.DataSet;
import jakarta.inject.Provider;

@Component("ReqInfo")
@Scope("request")
public class GlobalReqInfo implements Serializable {

	private static Logger log = LoggerFactory.getLogger(GlobalReqInfo.class);
	
	private static final long serialVersionUID = 1L;

	private String gTempReqId;						// TEMP 요청서ID
	private String gReqId;								// 요청서ID
	private String gTitle;									// 요청서 제목
	private String gRefReqId;							// 참조요청서ID
	private String gReqTmplatId;						// 요청서양식ID
	private String gReqTmplatVer;					// 요청서양식버전
	private String gWfProcCd;							// 요청서 단계코드
	private String gWfProcNm;							// 요청서 단계명
	private String gWfFuncCd;							// 요청서 기능
	private String gNextWfProcCd;					// 다음단계코드
	private String gNextWfProcNm;					// 다음단계명
	private String gNextWfFuncCd;					// 다음기능
	private String gReqStatCd;							// 요청서상태코드
	private String gOrgReqStatCd;					// 요청서원본상태코드
	private String gReqUserId;							// 요청자ID
	private String gReqUserNm;						// 요청자명
	private String gCancelPossYn;						// 요청서취소가능여부
	private String gSaveGubun;						// 저장구분
	private String gTempSaveYn;						// 임시저장여부
	private String gOpinion;								// 의견
	private String gInDataset;							// 입력데이터셋
	private String gOutDataset;						// 출력데이터셋
	private String gLastApprovalYn;					// 최종결재여부
	private int gSeq;										// 결재SEQ
	private String gMapProcCd;						// 매핑코드
	private String gMapWfProcCd;					// 단계매핑코드
	private String gNextMapWfProcCd;			// 다음단계매핑코드
	private String gReqBatchRegYn;					// 요청서 일괄등록 여부
	private String gJobReserveYn;
	private String gUIYn;

	//TEMP 요청서ID
	public String getTempReqId() 													{ return gTempReqId; }
	public void setTempReqId(String gTempReqId)							{ this.gTempReqId = gTempReqId; }
	
	//요청서ID
	public String getReqId() 															{ return gReqId; }
	public void setReqId(String gReqId)											{ this.gReqId = gReqId; }

	//요청서 제목
	public String getTitle() 																{ return gTitle; }
	public void setTitle(String gTitle)												{ this.gTitle = gTitle; }

	//참조 요청서ID
	public String getRefReqId() 														{ return gRefReqId; }
	public void setRefReqId(String gRefReqId)									{ this.gRefReqId = gRefReqId; }
	
	//요청서양식ID
	public String getReqTmplatId()													{ return gReqTmplatId; }
	public void setReqTmplatId(String gReqTmplatId)						{ this.gReqTmplatId = gReqTmplatId; }
	
	//요청서양식버전
	public String getReqTmplatVer()													{ return gReqTmplatVer; }
	public void setReqTmplatVer(String gReqTmplatVer)					{ this.gReqTmplatVer = gReqTmplatVer; }

	//요청서 단계코드
	public String getWfProcCd()														{ return gWfProcCd; }
	public void setWfProcCd(String gWfProcCd)								{ this.gWfProcCd = gWfProcCd; }

	//요청서 단계명
	public String getWfProcNm()														{ return gWfProcNm; }
	public void setWfProcNm(String gWfProcNm)								{ this.gWfProcNm = gWfProcNm; }
	
	//요청서 기능
	public String getWfFuncCd() 														{ return gWfFuncCd; }
	public void setWfFuncCd(String gWfFuncCd) 								{ this.gWfFuncCd = gWfFuncCd; }

	//다음단계코드
	public String getNextWfProcCd() 												{ return gNextWfProcCd; }
	public void setNextWfProcCd(String gNextWfProcCd) 					{ this.gNextWfProcCd = gNextWfProcCd; }

	//다음단계명
	public String getNextWfProcNm() 												{ return gNextWfProcNm; }
	public void setNextWfProcNm(String gNextWfProcNm)				{ this.gNextWfProcNm = gNextWfProcNm; }

	//다음기능
	public String getNextWfFuncCd() 												{ return gNextWfFuncCd; }
	public void setNextWfFuncCd(String gNextWfFuncCd) 					{ this.gNextWfFuncCd = gNextWfFuncCd; }
		
	//요청서상태코드
	public String getReqStatCd() 														{ return gReqStatCd; }
	public void setReqStatCd(String gReqStatCd)								{ this.gReqStatCd = gReqStatCd; }
	
	//요청서원본상태코드
	public String getOrgReqStatCd() 												{ return gOrgReqStatCd; }
	public void setOrgReqStatCd(String gOrgReqStatCd)					{ this.gOrgReqStatCd = gOrgReqStatCd; }

	//요청자ID
	public String getReqUserId() 														{ return gReqUserId; }
	public void setReqUserId(String gReqUserId) 							{ this.gReqUserId = gReqUserId; }

	//요청자명
	public String getReqUserNm() 													{ return gReqUserNm; }
	public void setReqUserNm(String gReqUserNm) 						{ this.gReqUserNm = gReqUserNm; }

	//요청서취소가능여부
	public String getCancelPossYn() 													{ return gCancelPossYn; }
	public void setCancelPossYn(String gCancelPossYn)						{ this.gCancelPossYn = gCancelPossYn; }

	//저장구분
	public String getSaveGubun() 													{ return gSaveGubun; }
	public void setSaveGubun(String gSaveGubun) 							{ this.gSaveGubun = gSaveGubun; }
		
	//임시저장여부
	public String getTempSaveYn() 													{ return gTempSaveYn; }
	public void setTempSaveYn(String gTempSaveYn)						{ this.gTempSaveYn = gTempSaveYn; }

	//의견
	public String getOpinion() 															{ return gOpinion; }
	public void setOpinion(String gOpinion)										{ this.gOpinion = gOpinion; }
	
	//입력데이터셋
	public String getInDataset() 														{ return gInDataset; }
	public void setInDataset(String gInDataset)									{ this.gInDataset = gInDataset; }
	
	//출력데이터셋
	public String getOutDataset() 													{ return gOutDataset; }
	public void setOutDataset(String gOutDataset) 							{ this.gOutDataset = gOutDataset; }
	
	//최종결재여부
	public String getLastApprovalYn() 												{ return gLastApprovalYn; }
	public void setLastApprovalYn(String gLastApprovalYn) 				{ this.gLastApprovalYn = gLastApprovalYn; }

	//결재SEQ
	public int getSeq() 																	{ return gSeq; }
	public void setSeq(int gSeq) 														{ this.gSeq = gSeq; }

	//매핑코드
	public String getMapProcCd()													{ return gMapProcCd; }
	public void setMapProcCd(String gMapProcCd)							{ this.gMapProcCd = gMapProcCd;}

	//매핑단계코드
	public String getMapWfProcCd()												{ return gMapWfProcCd; }
	public void setMapWfProcCd(String gMapWfProcCd)					{ this.gMapWfProcCd = gMapWfProcCd;}

	//다음매핑단계코드
	public String getNextMapWfProcCd()											{ return gNextMapWfProcCd; }
	public void setNextMapWfProcCd(String gNextMapWfProcCd)	{ this.gNextMapWfProcCd = gNextMapWfProcCd;}

	
	//배치예약등록여부
	public String getReqBatchRegYn()												{ return StringUtil.safe(gReqBatchRegYn, "N"); }
	public void setReqBatchRegYn(String gReqBatchRegYn)				{ this.gReqBatchRegYn = gReqBatchRegYn;}
		
	//배치예약등록여부
	public String getJobReserveYn()													{ return StringUtil.safe(gJobReserveYn, "N"); }
	public void setJobReserveYn(String gJobReserveYn)					{ this.gJobReserveYn = gJobReserveYn;}

	//요청서 화면을 통한 처리인지 여부
	public String getUIYn()																{ return StringUtil.safe(gUIYn, "N"); }
	public void setUIYn(String gUIYn)												{ this.gUIYn = gUIYn;}
	

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	/**
	 * request로 넘어온 정보에 대한 글로벌 변수 셋팅 
	 * @param GlobalreqInfo
	 * @param DataSet
	 * @return void
	 */
	public static void setReqInfo(Provider<GlobalReqInfo> reqInfo, DataSet dsObj) throws Exception {

		reqInfo.get().setTempReqId(StringUtil.safe(dsObj.getString(0, "TEMP_REQ_ID")));
		reqInfo.get().setReqId(StringUtil.safe(dsObj.getString(0, "REQ_ID")));
		reqInfo.get().setTitle(StringUtil.safe(dsObj.getString(0, "TITLE")));
		reqInfo.get().setRefReqId(StringUtil.safe(dsObj.getString(0, "REF_REQ_ID")));
		reqInfo.get().setReqTmplatId(StringUtil.safe(dsObj.getString(0, "REQ_TMPLAT_ID")));
		reqInfo.get().setReqTmplatVer(StringUtil.safe(dsObj.getString(0, "REQ_TMPLAT_VER")));
		reqInfo.get().setWfProcCd(StringUtil.safe(dsObj.getString(0, "WF_PROC_CD")));
		reqInfo.get().setWfProcNm(StringUtil.safe(dsObj.getString(0, "WF_PROC_NM")));
		reqInfo.get().setWfFuncCd(StringUtil.safe(dsObj.getString(0, "WF_FUNC_CD")));
		reqInfo.get().setNextWfProcCd(StringUtil.safe(dsObj.getString(0, "NEXT_WF_PROC_CD")));
		reqInfo.get().setNextWfProcNm(StringUtil.safe(dsObj.getString(0, "NEXT_WF_PROC_NM")));
		reqInfo.get().setNextWfFuncCd(StringUtil.safe(dsObj.getString(0, "NEXT_WF_FUNC_CD")));
		reqInfo.get().setReqStatCd(StringUtil.safe(dsObj.getString(0, "REQ_STAT_CD")));
		reqInfo.get().setOrgReqStatCd(StringUtil.safe(dsObj.getString(0, "ORG_REQ_STAT_CD")));
		reqInfo.get().setReqUserId(StringUtil.safe(dsObj.getString(0, "REQ_USER_ID")));
		reqInfo.get().setReqUserNm(StringUtil.safe(dsObj.getString(0, "REQ_USER_NM")));
		reqInfo.get().setCancelPossYn(StringUtil.safe(dsObj.getString(0, "CANCEL_POSS_YN")));
		reqInfo.get().setSaveGubun(StringUtil.safe(dsObj.getString(0, "SAVE_GUBUN")));
		reqInfo.get().setTempSaveYn(StringUtil.safe(dsObj.getString(0, "TEMP_SAVE_YN")));
		reqInfo.get().setLastApprovalYn(StringUtil.safe(dsObj.getString(0, "LAST_APPROVAL_YN")));
		reqInfo.get().setOpinion(StringUtil.safe(dsObj.getString(0, "OPINION")));
		reqInfo.get().setInDataset(StringUtil.safe(dsObj.getString(0, "IN_DATASET")));
		reqInfo.get().setOutDataset(StringUtil.safe(dsObj.getString(0, "OUT_DATASET")));
		reqInfo.get().setSeq(StringUtil.safeInt(dsObj.getString(0, "SEQ"), -1));
		reqInfo.get().setMapProcCd(StringUtil.safe(dsObj.getString(0, "MAP_PROC_CD")));
		reqInfo.get().setMapWfProcCd(StringUtil.safe(dsObj.getString(0, "MAP_WF_PROC_CD")));
		reqInfo.get().setNextMapWfProcCd(StringUtil.safe(dsObj.getString(0, "NEXT_MAP_WF_PROC_CD")));
		reqInfo.get().setReqBatchRegYn(StringUtil.safe(dsObj.getString(0, "REQ_BATCH_REG_YN"), "N"));
		reqInfo.get().setJobReserveYn(StringUtil.safe(dsObj.getString(0, "JOB_RESERVE_YN"), "N"));
		reqInfo.get().setUIYn(StringUtil.safe(dsObj.getString(0, "UI_YN"), "Y"));

		log.debug("[GlobalReqInfo]-setReqInfo()");
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getTempReqId():[{}]",			reqInfo.get().getTempReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqId():[{}]",					reqInfo.get().getReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getTitle():[{}]",						reqInfo.get().getTitle());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getRefReqId():[{}]",				reqInfo.get().getRefReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqTmplatId():[{}]",			reqInfo.get().getReqTmplatId());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqTmplatVer():[{}]",		reqInfo.get().getReqTmplatVer());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getWfProcCd():[{}]",				reqInfo.get().getWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getWfProcNm():[{}]",				reqInfo.get().getWfProcNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getWfFuncCd():[{}]",				reqInfo.get().getWfFuncCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getNextWfProcCd():[{}]",		reqInfo.get().getNextWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getNextWfProcNm():[{}]",		reqInfo.get().getNextWfProcNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getNextWfFuncCd():[{}]",		reqInfo.get().getNextWfFuncCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqStatCd():[{}]",				reqInfo.get().getReqStatCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getOrgReqStatCd():[{}]",		reqInfo.get().getOrgReqStatCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqUserId():[{}]",				reqInfo.get().getReqUserId());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqUserNm():[{}]",			reqInfo.get().getReqUserNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getCancelPossYn():[{}]",			reqInfo.get().getCancelPossYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getSaveGubun():[{}]",			reqInfo.get().getSaveGubun());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getTempSaveYn():[{}]",			reqInfo.get().getTempSaveYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getLastApprovalYn():[{}]",		reqInfo.get().getLastApprovalYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getOpinion():[{}]",					reqInfo.get().getOpinion());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getInDataset():[{}]",				reqInfo.get().getInDataset());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getOutDataset():[{}]",			reqInfo.get().getOutDataset());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getSeq():[{}]",						reqInfo.get().getSeq());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getMapProcCd():[{}]",			reqInfo.get().getMapProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getMapWfProcCd():[{}]",		reqInfo.get().getMapWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getNextMapWfProcCd():[{}]",	reqInfo.get().getNextMapWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getReqBatchRegYn():[{}]",		reqInfo.get().getReqBatchRegYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getJobReserveYn():[{}]",		reqInfo.get().getJobReserveYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [DS] reqInfo.get().getUIYn():[{}]",						reqInfo.get().getUIYn());
	}

	/**
	 * request로 넘어온 정보에 대한 글로벌 변수 셋팅 
	 * @param GlobalreqInfo
	 * @param Map
	 * @return void
	 */
	public static void setReqInfo(Provider<GlobalReqInfo> reqInfo, Map<String, Object> formInfoMap) throws Exception {
		
		reqInfo.get().setTempReqId(StringUtil.safe(formInfoMap.get("TEMP_REQ_ID")));
		reqInfo.get().setReqId(StringUtil.safe(formInfoMap.get("REQ_ID")));
		reqInfo.get().setTitle(StringUtil.safe(formInfoMap.get("TITLE")));
		reqInfo.get().setRefReqId(StringUtil.safe(formInfoMap.get("REF_REQ_ID")));
		reqInfo.get().setReqTmplatId(StringUtil.safe(formInfoMap.get("REQ_TMPLAT_ID")));
		reqInfo.get().setReqTmplatVer(StringUtil.safe(formInfoMap.get("REQ_TMPLAT_VER")));
		reqInfo.get().setWfProcCd(StringUtil.safe(formInfoMap.get("WF_PROC_CD")));
		reqInfo.get().setWfProcNm(StringUtil.safe(formInfoMap.get("WF_PROC_NM")));
		reqInfo.get().setWfFuncCd(StringUtil.safe(formInfoMap.get("WF_FUNC_CD")));
		reqInfo.get().setNextWfProcCd(StringUtil.safe(formInfoMap.get("NEXT_WF_PROC_CD")));
		reqInfo.get().setNextWfProcNm(StringUtil.safe(formInfoMap.get("NEXT_WF_PROC_NM")));
		reqInfo.get().setNextWfFuncCd(StringUtil.safe(formInfoMap.get("NEXT_WF_FUNC_CD")));
		reqInfo.get().setReqStatCd(StringUtil.safe(formInfoMap.get("REQ_STAT_CD")));
		reqInfo.get().setOrgReqStatCd(StringUtil.safe(formInfoMap.get("ORG_REQ_STAT_CD")));
		reqInfo.get().setReqUserId(StringUtil.safe(formInfoMap.get("REQ_USER_ID")));
		reqInfo.get().setReqUserNm(StringUtil.safe(formInfoMap.get("REQ_USER_NM")));
		reqInfo.get().setCancelPossYn(StringUtil.safe(formInfoMap.get("CANCEL_POSS_YN")));
		reqInfo.get().setSaveGubun(StringUtil.safe(formInfoMap.get("SAVE_GUBUN")));
		reqInfo.get().setTempSaveYn(StringUtil.safe(formInfoMap.get("TEMP_SAVE_YN")));
		reqInfo.get().setLastApprovalYn(StringUtil.safe(formInfoMap.get("LAST_APPROVAL_YN")));
		reqInfo.get().setOpinion(StringUtil.safe(formInfoMap.get("OPINION")));
		reqInfo.get().setInDataset(StringUtil.safe(formInfoMap.get("IN_DATASET")));
		reqInfo.get().setOutDataset(StringUtil.safe(formInfoMap.get("OUT_DATASET")));
		reqInfo.get().setSeq(StringUtil.safeInt(formInfoMap.get("SEQ"), -1));
		reqInfo.get().setMapProcCd(StringUtil.safe(formInfoMap.get("MAP_PROC_CD")));
		reqInfo.get().setMapWfProcCd(StringUtil.safe(formInfoMap.get("MAP_WF_PROC_CD")));
		reqInfo.get().setNextMapWfProcCd(StringUtil.safe(formInfoMap.get("NEXT_MAP_WF_PROC_CD")));
		reqInfo.get().setReqBatchRegYn(StringUtil.safe(formInfoMap.get("REQ_BATCH_REG_YN"), "N"));
		reqInfo.get().setJobReserveYn(StringUtil.safe(formInfoMap.get("JOB_RESERVE_YN"), "N"));
		reqInfo.get().setUIYn(StringUtil.safe(formInfoMap.get("UI_YN"), "N"));
		
		log.debug("[GlobalReqInfo]-setReqInfo()");
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getTempReqId():[{}]",				reqInfo.get().getTempReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqId():[{}]",						reqInfo.get().getReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getTitle():[{}]",						reqInfo.get().getTitle());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getRefReqId():[{}]",				reqInfo.get().getRefReqId());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqTmplatId():[{}]",			reqInfo.get().getReqTmplatId());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqTmplatVer():[{}]",			reqInfo.get().getReqTmplatVer());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getWfProcCd():[{}]",				reqInfo.get().getWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getWfProcNm():[{}]",				reqInfo.get().getWfProcNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getWfFuncCd():[{}]",				reqInfo.get().getWfFuncCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getNextWfProcCd():[{}]",			reqInfo.get().getNextWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getNextWfProcNm():[{}]",		reqInfo.get().getNextWfProcNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getNextWfFuncCd():[{}]",			reqInfo.get().getNextWfFuncCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqStatCd():[{}]",				reqInfo.get().getReqStatCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getOrgReqStatCd():[{}]",			reqInfo.get().getOrgReqStatCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqUserId():[{}]",				reqInfo.get().getReqUserId());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqUserNm():[{}]",			reqInfo.get().getReqUserNm());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getCancelPossYn():[{}]",			reqInfo.get().getCancelPossYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getSaveGubun():[{}]",				reqInfo.get().getSaveGubun());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getTempSaveYn():[{}]",			reqInfo.get().getTempSaveYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getLastApprovalYn():[{}]",		reqInfo.get().getLastApprovalYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getOpinion():[{}]",					reqInfo.get().getOpinion());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getInDataset():[{}]",				reqInfo.get().getInDataset());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getOutDataset():[{}]",				reqInfo.get().getOutDataset());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getSeq():[{}]",						reqInfo.get().getSeq());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getMapProcCd():[{}]",				reqInfo.get().getMapProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getMapWfProcCd():[{}]",			reqInfo.get().getMapWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getNextMapWfProcCd():[{}]",	reqInfo.get().getNextMapWfProcCd());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getReqBatchRegYn():[{}]",		reqInfo.get().getReqBatchRegYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getJobReserveYn():[{}]",			reqInfo.get().getJobReserveYn());
		log.debug("[GlobalReqInfo]-setReqInfo() [MAP] reqInfo.get().getUIYn():[{}]",						reqInfo.get().getUIYn());
	}
	
	/**
	 * 인자로 받는 map 객체가 존재하는 경우 해당 map 객체를 FormInfo의 DataSet으로 변환하고
	 * 인자로 받는 map 객체가 존재하지 않는 경우 reqInfo.get()의 정보를 DataSet객체로 리턴한다. 
	 * @return Map<String, Object>
	 */
	public static Map<String, Object> getMapReqInfo(Provider<GlobalReqInfo> reqInfo) throws Exception {

		Map<String, Object> reqInfoMap = new HashMap<String, Object>();
		
		reqInfoMap.put("TEMP_REQ_ID",						reqInfo.get().getTempReqId());       
		reqInfoMap.put("REQ_ID",								reqInfo.get().getReqId());
		reqInfoMap.put("TITLE",									reqInfo.get().getTitle());
		reqInfoMap.put("REF_REQ_ID",						reqInfo.get().getRefReqId());
		reqInfoMap.put("REQ_TMPLAT_ID",					reqInfo.get().getReqTmplatId());
		reqInfoMap.put("REQ_TMPLAT_VER",				reqInfo.get().getReqTmplatVer());
		reqInfoMap.put("WF_PROC_CD",						reqInfo.get().getWfProcCd());
		reqInfoMap.put("WF_PROC_NM",					reqInfo.get().getWfProcNm());
		reqInfoMap.put("WF_FUNC_CD",						reqInfo.get().getWfFuncCd());
		reqInfoMap.put("NEXT_WF_PROC_CD",			reqInfo.get().getNextWfProcCd());
		reqInfoMap.put("NEXT_WF_PROC_NM",			reqInfo.get().getNextWfProcNm());
		reqInfoMap.put("NEXT_WF_FUNC_CD",			reqInfo.get().getNextWfFuncCd());    
		reqInfoMap.put("REQ_STAT_CD",						reqInfo.get().getReqStatCd());
		reqInfoMap.put("ORG_REQ_STAT_CD",				reqInfo.get().getOrgReqStatCd());
		reqInfoMap.put("REQ_USER_ID",						reqInfo.get().getReqUserId());
		reqInfoMap.put("REQ_USER_NM",					reqInfo.get().getReqUserNm());
		reqInfoMap.put("CANCEL_POSS_YN",				reqInfo.get().getCancelPossYn());    
		reqInfoMap.put("SAVE_GUBUN",						reqInfo.get().getSaveGubun());       
		reqInfoMap.put("TEMP_SAVE_YN",					reqInfo.get().getTempSaveYn());      
		reqInfoMap.put("LAST_APPROVAL_YN",			reqInfo.get().getLastApprovalYn());  
		reqInfoMap.put("OPINION",							reqInfo.get().getOpinion());         
		reqInfoMap.put("IN_DATASET",						reqInfo.get().getInDataset());       
		reqInfoMap.put("OUT_DATASET",					reqInfo.get().getOutDataset());      
		reqInfoMap.put("SEQ",									reqInfo.get().getSeq());
		reqInfoMap.put("MAP_PROC_CD",					reqInfo.get().getMapProcCd());
		reqInfoMap.put("MAP_WF_PROC_CD",				reqInfo.get().getMapWfProcCd());
		reqInfoMap.put("MAP_NEXT_WF_PROC_CD",	reqInfo.get().getNextMapWfProcCd());
		reqInfoMap.put("REQ_BATCH_REG_YN",			StringUtil.safe(reqInfo.get().getReqBatchRegYn(), "N"));
		reqInfoMap.put("JOB_RESERVE_YN",				StringUtil.safe(reqInfo.get().getJobReserveYn(), "N"));
		reqInfoMap.put("UI_YN",								StringUtil.safe(reqInfo.get().getUIYn(), "Y"));

		log.debug("[GlobalReqInfo]-getMapReqInfo()");
		log.debug("[GlobalReqInfo]-getMapReqInfo() TEMP_REQ_ID:[{}]",					reqInfoMap.get("TEMP_REQ_ID"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_ID:[{}]",							reqInfoMap.get("REQ_ID"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() TITLE:[{}]",								reqInfoMap.get("TITLE"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REF_REQ_ID:[{}]",						reqInfoMap.get("REF_REQ_ID"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_TMPLAT_ID:[{}]",				reqInfoMap.get("REQ_TMPLAT_ID"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_TMPLAT_VER:[{}]",			reqInfoMap.get("REQ_TMPLAT_VER"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() WF_PROC_CD:[{}]",					reqInfoMap.get("WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() WF_PROC_NM:[{}]",					reqInfoMap.get("WF_PROC_NM"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() WF_FUNC_CD:[{}]",					reqInfoMap.get("WF_FUNC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() NEXT_WF_PROC_CD:[{}]",			reqInfoMap.get("NEXT_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() NEXT_WF_PROC_NM:[{}]",		reqInfoMap.get("NEXT_WF_PROC_NM"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() NEXT_WF_FUNC_CD:[{}]",			reqInfoMap.get("NEXT_WF_FUNC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_STAT_CD:[{}]",					reqInfoMap.get("REQ_STAT_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() ORG_REQ_STAT_CD:[{}]",			reqInfoMap.get("ORG_REQ_STAT_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_USER_ID:[{}]",					reqInfoMap.get("REQ_USER_ID"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_USER_NM:[{}]",				reqInfoMap.get("REQ_USER_NM"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() CANCEL_POSS_YN:[{}]",			reqInfoMap.get("CANCEL_POSS_YN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() SAVE_GUBUN:[{}]",					reqInfoMap.get("SAVE_GUBUN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() TEMP_SAVE_YN:[{}]",				reqInfoMap.get("TEMP_SAVE_YN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() LAST_APPROVAL_YN:[{}]",			reqInfoMap.get("LAST_APPROVAL_YN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() OPINION:[{}]",						reqInfoMap.get("OPINION"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() IN_DATASET:[{}]",					reqInfoMap.get("IN_DATASET"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() OUT_DATASET:[{}]",					reqInfoMap.get("OUT_DATASET"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() SEQ:[{}]",								reqInfoMap.get("SEQ"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() MAP_PROC_CD:[{}]",				reqInfoMap.get("MAP_PROC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() MAP_WF_PROC_CD:[{}]",			reqInfoMap.get("MAP_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() MAP_NEXT_WF_PROC_CD:[{}]",	reqInfoMap.get("MAP_NEXT_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() REQ_BATCH_REG_YN:[{}]",		reqInfoMap.get("REQ_BATCH_REG_YN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() JOB_RESERVE_YN:[{}]",				reqInfoMap.get("JOB_RESERVE_YN"));
		log.debug("[GlobalReqInfo]-getMapReqInfo() UI_YN:[{}]",								reqInfoMap.get("UI_YN"));
		return reqInfoMap;
	}
	
	/**
	 * 인자로 받는 map 객체가 존재하는 경우 해당 map 객체를 FormInfo의 DataSet으로 변환하고
	 * 인자로 받는 map 객체가 존재하지 않는 경우 reqInfo.get()의 정보를 DataSet객체로 리턴한다. 
	 * @param Map<String, Object>
	 * @return DataSet
	 */
	public static DataSet getDsReqInfo(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, Map<String, Object> mapFormInfo) throws Exception {

		DataSet dsFormInfo = new DataSet("dsFormInfo");
		
		dsFormInfo.setChangeStructureWithData(true);
		dsFormInfo.addColumn("TEMP_REQ_ID", 1);
		dsFormInfo.addColumn("REQ_ID", 1);
		dsFormInfo.addColumn("REF_REQ_ID", 1);
		dsFormInfo.addColumn("REQ_TMPLAT_ID", 1);
		dsFormInfo.addColumn("REQ_TMPLAT_VER", 1);
		dsFormInfo.addColumn("WF_PROC_CD", 1);
		dsFormInfo.addColumn("WF_PROC_NM", 1);
		dsFormInfo.addColumn("WF_FUNC_CD", 1);
		dsFormInfo.addColumn("NEXT_WF_PROC_CD", 1);
		dsFormInfo.addColumn("NEXT_WF_PROC_NM", 1);
		dsFormInfo.addColumn("NEXT_WF_FUNC_CD", 1);
		dsFormInfo.addColumn("REQ_STAT_CD", 1);
		dsFormInfo.addColumn("ORG_REQ_STAT_CD", 1);
		dsFormInfo.addColumn("REQ_USER_ID", 1);
		dsFormInfo.addColumn("REQ_USER_NM", 1);
		dsFormInfo.addColumn("CANCEL_POSS_YN", 1);
		dsFormInfo.addColumn("SAVE_GUBUN", 1);
		dsFormInfo.addColumn("TEMP_SAVE_YN", 1);
		dsFormInfo.addColumn("LAST_APPROVAL_YN", 1);
		dsFormInfo.addColumn("OPINION", 1);
		dsFormInfo.addColumn("IN_DATASET", 1);
		dsFormInfo.addColumn("OUT_DATASET", 1);
		dsFormInfo.addColumn("SEQ", 1);
		dsFormInfo.addColumn("MAP_PROC_CD", 1);
		dsFormInfo.addColumn("MAP_WF_PROC_CD", 1);
		dsFormInfo.addColumn("NEXT_MAP_WF_PROC_CD", 1);
		dsFormInfo.addColumn("REQ_BATCH_REG_YN", 1);
		dsFormInfo.addColumn("JOB_RESERVE_YN", 1);
		dsFormInfo.addColumn("UI_YN", 1);		
		dsFormInfo.setChangeStructureWithData(false);
		
		int row = dsFormInfo.newRow();
		
		if(mapFormInfo != null) {
			
			String reqTmplatId = StringUtil.safe(mapFormInfo.get("REQ_TMPLAT_ID"));
			String reqTmplatVer = StringUtil.safe(mapFormInfo.get("REQ_TMPLAT_VER"));
			
			log.debug("reqTmplatVer=====================>" + reqTmplatVer);
			
			if("".equals(reqTmplatId)) {
				sc.get().setScSessionMsg("getDsReqInfo() 처리시 REQ_TMPLAT_ID가 존재하지 않습니다.");
				throw new Exception("getDsReqInfo() 처리시 REQ_TMPLAT_ID가 존재하지 않습니다.");
			}
			
			if("".equals(reqTmplatVer)) {
				sc.get().setScSessionMsg("getDsReqInfo() 처리시 REQ_TMPLAT_VER가 존재하지 않습니다.");
				throw new Exception("getDsReqInfo() 처리시 REQ_TMPLAT_VER가 존재하지 않습니다.");
			}
			
			dsFormInfo.set(row, "TEMP_REQ_ID",					mapFormInfo.get("TEMP_REQ_ID"));
			dsFormInfo.set(row, "REQ_ID",							mapFormInfo.get("REQ_ID"));
			dsFormInfo.set(row, "REF_REQ_ID",						mapFormInfo.get("REF_REQ_ID"));
			dsFormInfo.set(row, "REQ_TMPLAT_ID",				mapFormInfo.get("REQ_TMPLAT_ID"));
			dsFormInfo.set(row, "REQ_TMPLAT_VER",				mapFormInfo.get("REQ_TMPLAT_VER"));
			dsFormInfo.set(row, "WF_PROC_CD",					mapFormInfo.get("WF_PROC_CD"));
			dsFormInfo.set(row, "WF_PROC_NM",					mapFormInfo.get("WF_PROC_NM"));
			dsFormInfo.set(row, "WF_FUNC_CD",					mapFormInfo.get("WF_FUNC_CD"));
			dsFormInfo.set(row, "NEXT_WF_PROC_CD",			mapFormInfo.get("NEXT_WF_PROC_CD"));
			dsFormInfo.set(row, "NEXT_WF_PROC_NM",			mapFormInfo.get("NEXT_WF_PROC_NM"));
			dsFormInfo.set(row, "NEXT_WF_FUNC_CD",			mapFormInfo.get("NEXT_WF_FUNC_CD"));
			dsFormInfo.set(row, "REQ_STAT_CD",					mapFormInfo.get("REQ_STAT_CD"));
			dsFormInfo.set(row, "ORG_REQ_STAT_CD",			mapFormInfo.get("ORG_REQ_STAT_CD"));
			dsFormInfo.set(row, "REQ_USER_ID",					mapFormInfo.get("REQ_USER_ID"));
			dsFormInfo.set(row, "REQ_USER_NM",					mapFormInfo.get("REQ_USER_NM"));
			dsFormInfo.set(row, "CANCEL_POSS_YN",				mapFormInfo.get("CANCEL_POSS_YN"));
			dsFormInfo.set(row, "SAVE_GUBUN",					mapFormInfo.get("SAVE_GUBUN"));
			dsFormInfo.set(row, "TEMP_SAVE_YN",					mapFormInfo.get("TEMP_SAVE_YN"));
			dsFormInfo.set(row, "LAST_APPROVAL_YN",			StringUtil.safe(mapFormInfo.get("LAST_APPROVAL_YN"), "N"));
			dsFormInfo.set(row, "OPINION",							mapFormInfo.get("OPINION"));
			dsFormInfo.set(row, "IN_DATASET",						mapFormInfo.get("IN_DATASET"));
			dsFormInfo.set(row, "OUT_DATASET",					mapFormInfo.get("OUT_DATASET"));
			dsFormInfo.set(row, "SEQ",									mapFormInfo.get("SEQ"));
			dsFormInfo.set(row, "MAP_PROC_CD",					mapFormInfo.get("MAP_PROC_CD"));
			dsFormInfo.set(row, "MAP_WF_PROC_CD",			mapFormInfo.get("MAP_WF_PROC_CD"));
			dsFormInfo.set(row, "NEXT_MAP_WF_PROC_CD",	mapFormInfo.get("NEXT_MAP_WF_PROC_CD"));
			dsFormInfo.set(row, "REQ_BATCH_REG_YN",			StringUtil.safe(mapFormInfo.get("REQ_BATCH_REG_YN"), "N"));
			dsFormInfo.set(row, "JOB_RESERVE_YN",				StringUtil.safe(mapFormInfo.get("JOB_RESERVE_YN"), "N"));
			dsFormInfo.set(row, "UI_YN",								StringUtil.safe(mapFormInfo.get("UI_YN"), "N"));

		}else {

			if("".equals(reqInfo.get().getReqTmplatId())) {
				sc.get().setScSessionMsg("getDsReqInfo() 처리시 REQ_TMPLAT_ID가 존재하지 않습니다.");
				throw new Exception("getDsReqInfo() 처리시 REQ_TMPLAT_ID가 존재하지 않습니다.");
			}
			
			if("".equals(reqInfo.get().getReqTmplatVer())) {
				sc.get().setScSessionMsg("getDsReqInfo() 처리시 REQ_TMPLAT_VER가 존재하지 않습니다.");
				throw new Exception("getDsReqInfo() 처리시 REQ_TMPLAT_VER가 존재하지 않습니다.");
			}
			
			dsFormInfo.set(row, "TEMP_REQ_ID",					reqInfo.get().getTempReqId());
			dsFormInfo.set(row, "REQ_ID",							reqInfo.get().getReqId());
			dsFormInfo.set(row, "REF_REQ_ID",						reqInfo.get().getRefReqId());
			dsFormInfo.set(row, "REQ_TMPLAT_ID",				reqInfo.get().getReqTmplatId());
			dsFormInfo.set(row, "REQ_TMPLAT_VER",				reqInfo.get().getReqTmplatVer());
			dsFormInfo.set(row, "WF_PROC_CD",					reqInfo.get().getWfProcCd());
			dsFormInfo.set(row, "WF_PROC_NM",					reqInfo.get().getWfProcNm());
			dsFormInfo.set(row, "WF_FUNC_CD",					reqInfo.get().getWfFuncCd());
			dsFormInfo.set(row, "NEXT_WF_PROC_CD",			reqInfo.get().getNextWfProcCd());
			dsFormInfo.set(row, "NEXT_WF_PROC_NM",			reqInfo.get().getNextWfProcNm());
			dsFormInfo.set(row, "NEXT_WF_FUNC_CD",			reqInfo.get().getNextWfFuncCd());
			dsFormInfo.set(row, "REQ_STAT_CD",					reqInfo.get().getReqStatCd());
			dsFormInfo.set(row, "ORG_REQ_STAT_CD",			reqInfo.get().getOrgReqStatCd());
			dsFormInfo.set(row, "REQ_USER_ID",					reqInfo.get().getReqUserId());
			dsFormInfo.set(row, "REQ_USER_NM",					reqInfo.get().getReqUserNm());
			dsFormInfo.set(row, "CANCEL_POSS_YN",				reqInfo.get().getCancelPossYn());
			dsFormInfo.set(row, "SAVE_GUBUN",					reqInfo.get().getSaveGubun());
			dsFormInfo.set(row, "TEMP_SAVE_YN",					reqInfo.get().getTempSaveYn());
			dsFormInfo.set(row, "LAST_APPROVAL_YN",			StringUtil.safe(reqInfo.get().getLastApprovalYn(), "N"));
			dsFormInfo.set(row, "OPINION",							reqInfo.get().getOpinion());
			dsFormInfo.set(row, "IN_DATASET",						reqInfo.get().getInDataset());
			dsFormInfo.set(row, "OUT_DATASET",					reqInfo.get().getOutDataset());
			dsFormInfo.set(row, "SEQ",									reqInfo.get().getSeq());
			dsFormInfo.set(row, "MAP_PROC_CD",					reqInfo.get().getMapProcCd());
			dsFormInfo.set(row, "MAP_WF_PROC_CD",			reqInfo.get().getMapWfProcCd());
			dsFormInfo.set(row, "NEXT_MAP_WF_PROC_CD",	reqInfo.get().getNextMapWfProcCd());
			dsFormInfo.set(row, "REQ_BATCH_REG_YN",			StringUtil.safe(reqInfo.get().getReqBatchRegYn(), "N"));
			dsFormInfo.set(row, "JOB_RESERVE_YN",				StringUtil.safe(reqInfo.get().getJobReserveYn(), "N"));
			dsFormInfo.set(row, "UI_YN",								StringUtil.safe(reqInfo.get().getUIYn(), "Y"));
		}
		
		log.debug("[GlobalReqInfo]-getDsReqInfo()");
		log.debug("[GlobalReqInfo]-getDsReqInfo() TEMP_REQ_ID:[{}]",						dsFormInfo.getString(0, "TEMP_REQ_ID"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_ID:[{}]",								dsFormInfo.getString(0, "REQ_ID"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REF_REQ_ID:[{}]",						dsFormInfo.getString(0, "REF_REQ_ID"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_TMPLAT_ID:[{}]",					dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_TMPLAT_VER:[{}]",				dsFormInfo.getString(0, "REQ_TMPLAT_VER"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() WF_PROC_CD:[{}]",						dsFormInfo.getString(0, "WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() WF_PROC_NM:[{}]",					dsFormInfo.getString(0, "WF_PROC_NM"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() WF_FUNC_CD:[{}]",						dsFormInfo.getString(0, "WF_FUNC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() NEXT_WF_PROC_CD:[{}]",			dsFormInfo.getString(0, "NEXT_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() NEXT_WF_PROC_NM:[{}]",			dsFormInfo.getString(0, "NEXT_WF_PROC_NM"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() NEXT_WF_FUNC_CD:[{}]",			dsFormInfo.getString(0, "NEXT_WF_FUNC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_STAT_CD:[{}]",						dsFormInfo.getString(0, "REQ_STAT_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() ORG_REQ_STAT_CD:[{}]",				dsFormInfo.getString(0, "ORG_REQ_STAT_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_USER_ID:[{}]",						dsFormInfo.getString(0, "REQ_USER_ID"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_USER_NM:[{}]",					dsFormInfo.getString(0, "REQ_USER_NM"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() CANCEL_POSS_YN:[{}]",				dsFormInfo.getString(0, "CANCEL_POSS_YN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() SAVE_GUBUN:[{}]",						dsFormInfo.getString(0, "SAVE_GUBUN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() TEMP_SAVE_YN:[{}]",					dsFormInfo.getString(0, "TEMP_SAVE_YN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() LAST_APPROVAL_YN:[{}]",			dsFormInfo.getString(0, "LAST_APPROVAL_YN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() OPINION:[{}]",							dsFormInfo.getString(0, "OPINION"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() IN_DATASET:[{}]",						dsFormInfo.getString(0, "IN_DATASET"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() OUT_DATASET:[{}]",					dsFormInfo.getString(0, "OUT_DATASET"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() SEQ:[{}]",									dsFormInfo.getString(0, "SEQ"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() MAP_PROC_CD:[{}]",					dsFormInfo.getString(0, "MAP_PROC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() MAP_WF_PROC_CD:[{}]",				dsFormInfo.getString(0, "MAP_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() NEXT_MAP_WF_PROC_CD:[{}]",	dsFormInfo.getString(0, "NEXT_MAP_WF_PROC_CD"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() REQ_BATCH_REG_YN:[{}]",			dsFormInfo.getString(0, "REQ_BATCH_REG_YN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() JOB_RESERVE_YN:[{}]",				dsFormInfo.getString(0, "JOB_RESERVE_YN"));
		log.debug("[GlobalReqInfo]-getDsReqInfo() UI_YN:[{}]",								dsFormInfo.getString(0, "UI_YN"));
		return dsFormInfo;
	}

}