package com.base.sr.service.impl;

import java.io.Reader;
import java.lang.reflect.Method;
import java.sql.Clob;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.base.com.dao.FommMultipartDAO;
import com.base.com.service.FommMultipartService;
import com.base.com.service.FommScheduleJobService;
import com.base.com.service.impl.FommScheduleCommonServiceImpl;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0700DDAO;
import com.base.fwk.schedule.SppJobControl;
import com.base.fwk.server.BeanUtils;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0000DDAO;
import com.base.sr.dao.SR0010DDAO;
import com.base.sr.dao.SR0140PDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR0000DService;
import com.base.sr.service.SR0010DService;
import com.base.sr.service.SRCommService;
import com.base.wf.dao.WF0120WDAO;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Transactional(rollbackFor = {Exception.class})
@Service
public class SRCommServiceImpl implements SRCommService {

	private Logger log = LoggerFactory.getLogger(SRCommServiceImpl.class);

	@Inject
	private Provider<GlobalReqInfo> reqInfo;
	
	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommMultipartService fommMultipartService;
	
	@Autowired
	private SRCommDAO srCommDao;

	@Autowired
	private SR0000DDAO sr0000Dao;
	
	@Autowired
	private SR0000DService sr0000dSvc;

	@Autowired
	private SR0010DService sr0010DSvc;

	@Autowired
	private SR0010DServiceImpl sr0010DSvcImpl;

	@Autowired
	private SR0010DDAO sr0010Ddao;

	@Autowired
	private WF0120WDAO wf0120wDao;

	@Autowired
	private SR0140PDAO sr0140pDao;

	@Autowired
	private FOMM0700DDAO fomm0700dDao;
	
	@Autowired
	private FommMultipartDAO fommMultipartDao;

	@Autowired
	private  FommScheduleCommonServiceImpl fommScheduleCommonSvcImpl;
	
	@Autowired
	private FommScheduleJobService fommScheduleJobSvc;
	
	@Autowired
	private SppJobControl sppJobCotrol;

	@Autowired
	private SRCommServiceImpl srCommSvcImpl;

	/* Controller에서 호출되는 내부 처리 메서드 정의 시작 */
	/* ================================ */

	/**
	 * 요청서 조회 전처리
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> preSelect(DataSetList dataSetList) throws Exception {

		//log.debug("[SRCommServiceImpl]-preSelect");
		//글로벌 변수 셋팅
		GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));
		return execWfProcSvc("SELECT", "BF", null, dataSetList.get("dsFormInfo"), dataSetList);
	}

	/**
	 * 요청서 조회 후처리
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> postSelect(DataSetList dataSetList) throws Exception {
		//log.debug("[SRCommServiceImpl]-postSelect()");
		//글로벌 변수 셋팅
		GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));
		return execWfProcSvc("SELECT", "AF", null, dataSetList.get("dsFormInfo"), dataSetList);
	}

	/**
	 * 요청서 조회 전처리/후처리 처리 로직
	 * @param String 			["PRE", "POST"]
	 * @param DataSetList
	 * @return	NexacroResult
	 */
	public NexacroResult prePostSelectProc(String gubun, DataSetList pDataSetList) throws Exception {

		NexacroResult result = new NexacroResult();

		if (pDataSetList.get("dsFormInfo").hasData()) {

			List<Map<String, Object>> selectObj = null;

			if ("PRE".equals(gubun)) {
				selectObj = preSelect(pDataSetList);
			} else if ("POST".equals(gubun)) {
				selectObj = postSelect(pDataSetList);
			}

			if (selectObj != null) {

				for (int i = 0; i < selectObj.size(); i++) {

					for (String name : selectObj.get(i).keySet()) {

						if (name.indexOf("_MapMeta_") > -1) { // 조회된 데이터가 없는 경우는 MapMeta가 붙어서 넘어온다.
							String dsNm = name.replaceAll("_MapMeta_", "");
							// log.debug("[SRCommServiceImpl]-prePostSelectProc() gubun : [" + gubun + "] dsNm ::::: " + dsNm);
							DataSet ds = new DataSet(dsNm);
							Map<String, Object> map = (Map<String, Object>) selectObj.get(i).get(name);

							for (String colNm : map.keySet())
								ds.addColumn(colNm, 1);
							// for (int j = 0; j < ds.getColumnCount(); j++) {
							// log.debug("[SRCommServiceImpl]-prePostSelectProc() _MapMeta_ name:[" + dsNm + "] j=" + j + " ColumnName:[" +
							// ds.getColumn(j).getName() + "]");
							// }
							result.addDataSet(ds);

						} else {
							result.addDataSet(name, selectObj.get(i).get(name));
						}
					}
				}
			}

		} else {
			log.debug("[SRCommServiceImpl]-prePostSelectProc() [" + gubun + "] SELECT시 [dsFormInfo] 데이터셋에 데이터가 올바르게 셋팅되지 않았습니다.");
			result.setErrorCode(-1);
			result.setErrorMsg("[" + gubun + "] SELECT시 [dsFormInfo] 데이터셋에 데이터가 올바르게 셋팅되지 않았습니다.");
		}
		return result;
	}

	/**
	 * 요청서 조회(공통 모듈)
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> select(DataSetList dataSetList) throws Exception {

		//글로벌 변수 셋팅
		GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));
				
		List<Map<String, Object>> rtnDataObj = new ArrayList<Map<String,Object>>();
		
		log.debug("[SRCommServiceImpl]-select() dataSetList.size():[" + dataSetList.size() + "]");
		
		for (int i = 0; i < dataSetList.size(); i++) {
			String dsNm = dataSetList.get(i).getName();
			log.debug("[SRCommServiceImpl]-select() 파라미터로 넘어온 dsNm=[" + dsNm + "]");
		}

		DataSet formInfo = dataSetList.get("dsFormInfo");

		//조회 서비스 실행 하기 전 WF프로세스 관리에 정의한 서비스를 먼저 실행
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfProcSvc() [CU] [FR] 조회 시작");
		List<Map<String, Object>> rtnFrDataObj = execWfProcSvc("SELECT", "CU", "FR", formInfo, dataSetList);
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfProcSvc() [CU] [FR] 조회 종료 rtnFrDataObj.size():[{}]", rtnFrDataObj.size());

		if(rtnFrDataObj.size() > 0) {
			rtnDataObj.addAll(rtnFrDataObj);
		}

		//요청서 등록 화면 관련 테이블 조회 쿼리 추출
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfSelectRegTblInfo() 조회 시작");
		List<Map<String, Object>> rtnReqRegDataObj = execWfSelectRegTblInfo(dataSetList.get("dsFormInfo"));
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfProcSvc() 조회 종료 rtnReqRegDataObj.size():[{}]", rtnReqRegDataObj.size());
		
		if(rtnReqRegDataObj.size() > 0) {
			rtnDataObj.addAll(rtnReqRegDataObj);
		}

		DataSetList pDataSetList = new DataSetList();

		for (int i = 0; i < dataSetList.size(); i++) {
			String dsNm = dataSetList.get(i).getName();
			log.debug("[SRCommServiceImpl]-select() dsNm=[" + dsNm + "]");
			int isExists = pDataSetList.indexOf(dsNm);	//중복된 데이터셋은 제거하기 위해
			log.debug("[SRCommServiceImpl]-select() i = " + i + " isExists : " + isExists);
			if(isExists == -1) pDataSetList.add(dataSetList.get(i));
		}

		for (int i = 0; i < pDataSetList.size(); i++) {
			log.debug("[SRCommServiceImpl]-select() i=" + i + " : Name=[" + pDataSetList.get(i).getName() + "] Type:[" + pDataSetList.get(i).getClass().toString() + "]"); 
		}

		log.debug("[SRCommServiceImpl]-select() dsSelectService rowcount:[" + pDataSetList.get("dsSelectService").getRowCount() + "]");
		DataSet dsSelectService = pDataSetList.get("dsSelectService");

		//log.debug("[SRCommServiceImpl]-select dsSelectService 시작");
		
		//요청서 기본정보, 결재선이 있는 경우 결재선 조회 쿼리에 대한 처리
		for (int i = 0; i < dsSelectService.getRowCount(); i++) {

			String svcNm = dsSelectService.getString(i, "SVC_NM");
			String inDs = dsSelectService.getString(i, "FORM_INDS");
			String outDs = dsSelectService.getString(i, "FORM_OUTDS");

			Object retObj = executeServiceMethod(svcNm, dataSetList, inDs);

			if(retObj != null) {

				Map<String, Object> outMap = new HashMap<>();

				//log.debug("[SRCommServiceImpl]-select() svcNm:[" + svcNm + "] outDs:[" + outDs + "] retObj.getClass():[" + retObj.getClass().toString() + "]");

				if(retObj.getClass() == java.util.HashMap.class || retObj.getClass() == java.util.Map.class) {
					Map<String, Object> resultData = (Map<String, Object>) retObj;

					for(String colNm : resultData.keySet()) {
						String colType = resultData.get(colNm).getClass().toString().toUpperCase();
						if(colType.indexOf("CLOB") > -1) {

							Clob clob = (Clob) resultData.get(colNm);

							if(clob != null) {
								Reader reader = clob.getCharacterStream();
								String str = IOUtils.toString(reader);
								resultData.put(colNm, str);
								if(reader != null)	reader.close();
							}
						}
					}
					outMap.put(outDs, resultData);
					rtnDataObj.add(outMap);

				}else if(retObj.getClass() == java.util.List.class || retObj.getClass() == java.util.ArrayList.class) {
					List<Map<String, Object>> resultData = (List<Map<String, Object>>) retObj;
					
					//log.debug("[SRCommServiceImpl]-select() svcNm:[" + svcNm + "] outDs:[" + outDs + "] resultData.size():[" + resultData.size() + "]");

					for (int k = 0; k < resultData.size(); k++) {

						for(String colNm : resultData.get(k).keySet()) {

							//if(k==0) log.debug("[SRCommServiceImpl]-select() svcNm:[" + svcNm + "] outDs:[" + outDs + "] colNm:[" + colNm + "]");

							if(resultData.get(k).get(colNm) != null) {

								String colType = resultData.get(k).get(colNm).getClass().toString().toUpperCase();
								if(colType.indexOf("CLOB") > -1) {

									Clob clob = (Clob) resultData.get(k).get(colNm);

	    							if(clob != null) {
	    								Reader reader = clob.getCharacterStream();
	    								String str = IOUtils.toString(reader);
	    								if(reader != null)	reader.close();
	    								resultData.get(k).put(colNm, str);
	    							}
								}
							}
						}
					}
					outMap.put(outDs, resultData);
					rtnDataObj.add(outMap);

				}else if(retObj.getClass() == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
					MapMetaData metaData = (MapMetaData) retObj;
					//Map<String, Object> ddd = (Map<String, Object>) metaData.getMetaData();
					
					//for(String colNm : ddd.keySet()) {
						//log.debug("[SRCommServiceImpl]-select svcNm:[" + svcNm + "] colNm:[" + colNm + "]");
					//}
					outMap.put(outDs, metaData);
					rtnDataObj.add(outMap);

				}
				//else {
					//log.debug("[SRCommServiceImpl]-select svcNm:[" + svcNm + "] retObj is null");
				//}
    		}
			//else {
    			//log.debug("[SRCommServiceImpl]-select retObj is null [outDs]:[" + outDs + "] retObj.getClass():[" + retObj.getClass().toString() + "]");
    		//}
		}

		//WF프로세스 관리에 정의한 조회 전 호출할 서비스 먼저 실행
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfProcSvc() [CU] [BK] 조회 시작");
		List<Map<String, Object>> rtnBkDataObj = execWfProcSvc("SELECT", "CU", "BK", formInfo, dataSetList);
		log.debug("[SRCommServiceImpl]-select() [CALL] execWfProcSvc() [CU] [BK] 조회 종료 rtnFrDataObj.size():[{}]", rtnBkDataObj.size());
		rtnDataObj.addAll(rtnBkDataObj);
		return rtnDataObj;
	}

	/**
	 * 요청서 템플릿에서 Form DIV 영역 조회 서비스를 얻어와서 통합으로 조회 서비스를 실행 로직
	 * @param DataSetList
	 * @return	NexacroResult
	 * @throws Exception
	 */
	public NexacroResult selectProc(DataSetList pDataSetList) throws Exception {
		
		NexacroResult result = new NexacroResult();

	    //log.debug("[SRCommServiceImpl]-selectProc() pDataSetList.size() : " + pDataSetList.size());
		//for (int i = 0; i < pDataSetList.size(); i++) {
			//log.debug("[SRCommServiceImpl]-selectProc() i=" + i + " DSName:[" + pDataSetList.get(i).getName() + "]");
		//}

		if (pDataSetList.get("dsFormInfo").hasData()) {

//			log.debug("[SRCommServiceImpl]-selectProc() pDataSetList.get(\"dsFormInfo\").hasData()");
			List<Map<String, Object>> selectObj = null;

			selectObj = select(pDataSetList);
			log.debug("[SRCommServiceImpl]-selectProc() selectObj.size():[" + selectObj.size() + "]");

			if (selectObj != null) {

				for (int i = 0; i < selectObj.size(); i++) {

					for (String name : selectObj.get(i).keySet()) {
						log.debug("[SRCommServiceImpl]-selectProc() result.addDataSet name:[" + name + "]");
						result.addDataSet(name, selectObj.get(i).get(name));
					}
				}
			}
			for(String dsName : result.getDataSets().keySet()) {
				log.debug("[SRCommServiceImpl]-selectProc() dsName:[" + dsName + "] value:[" + result.getDataSets().get(dsName) + "]");
			}

		} else {
			
			log.debug("[SRComm]-selectProc() dsFormInfo 데이터가 올바르게 설정되지 않았습니다.");
			result.setErrorCode(-1);
			result.setErrorMsg("[SRComm]-selectProc() dsFormInfo 데이터가 올바르게 설정되지 않았습니다.");			
		}
		return result;
	}

	/**
	 * 요청서 저장 전처리
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> preSave(DataSetList dataSetList) throws Exception {

		List<Map<String, Object>> rtnListAll = new ArrayList<Map<String,Object>>();
		
		//글로벌 변수 셋팅
		GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));
		
		String saveGubun = reqInfo.get().getSaveGubun();
		String procGubun = "";
		
		if("TEMP".equals(saveGubun) || "REG".equals(saveGubun) || "REV".equals(saveGubun) || "APV".equals(saveGubun)) {
			procGubun = "SAVE";
		}else if("RTRN".equals(saveGubun) || "SCRN_RTRN".equals(saveGubun)) {
			procGubun = "RTRN";
		}
		
		List<Map<String, Object>> rtnList = execWfProcSvc(procGubun, "BF", null, dataSetList.get("dsFormInfo"), dataSetList);
		rtnListAll.addAll(rtnList);

		if("N".equals(reqInfo.get().getTempSaveYn()) && "APV".equals(saveGubun)) {
			
			try {
				rtnList = execWfProcSvc("SAVE-END", "BF", null, dataSetList.get("dsFormInfo"), dataSetList);
				rtnListAll.addAll(rtnList);

			}catch(Exception e) {
				e.printStackTrace();
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					if(sc.get().getScSessionMsg() != null) {
						sc.get().setScSessionMsg("[save-ERROR] " + e.getMessage());
					}else {
						log.debug("[save-ERROR] " + e.getMessage());
					}
					throw new Exception(sc.get().getScSessionMsg());
				}else {
					log.debug("[save-ERROR] " + e.getMessage());
					throw new Exception(e.getMessage());
				}
			}
		}
		return rtnListAll;
	}

	/**
	 * 요청서 저장 후처리
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> postSave(DataSetList dataSetList) throws Exception {

		List<Map<String, Object>> rtnListAll = new ArrayList<Map<String,Object>>();
		
		//글로벌 변수 셋팅
		GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));

		String saveGubun = reqInfo.get().getSaveGubun();
		String procGubun = "";
		
		if("TEMP".equals(saveGubun) || "REG".equals(saveGubun) || "REV".equals(saveGubun) || "APV".equals(saveGubun)) {
			procGubun = "SAVE";

		}else if("RTRN".equals(saveGubun) || "SCRN_RTRN".equals(saveGubun)) {
			procGubun = "RTRN";
		}

		List<Map<String, Object>> rtnList = new ArrayList<Map<String,Object>>();

		try {
			rtnList = execWfProcSvc(procGubun, "AF", null, dataSetList.get("dsFormInfo"), dataSetList);
			rtnListAll.addAll(rtnList);

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				if(sc.get().getScSessionMsg() != null) {
					sc.get().setScSessionMsg("[save-ERROR] " + e.getMessage());
				}else {
					log.debug("[save-ERROR] " + e.getMessage());
				}
				throw new Exception(sc.get().getScSessionMsg());
			}else {
				log.debug("[save-ERROR] " + e.getMessage());
				throw new Exception(e.getMessage());
			}
		}		

		if("N".equals(reqInfo.get().getTempSaveYn()) && "APV".equals(reqInfo.get().getSaveGubun())) {
			
			try {
				rtnList = execWfProcSvc("SAVE-END", "AF", null, dataSetList.get("dsFormInfo"), dataSetList);
				rtnListAll.addAll(rtnList);

			}catch(Exception e) {
				e.printStackTrace();
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					if(sc.get().getScSessionMsg() != null) {
						sc.get().setScSessionMsg("[save-ERROR] " + e.getMessage());
					}else {
						log.debug("[save-ERROR] " + e.getMessage());
					}
					throw new Exception(sc.get().getScSessionMsg());
				}else {
					log.debug("[save-ERROR] " + e.getMessage());
					throw new Exception(e.getMessage());
				}
			}
		}
		return rtnListAll;
	}

	/**
	 * 요청서 조회 전처리/후처리 처리 로직
	 * @param String 				["PRE", "POST"]
	 * @param DataSetList
	 * @return	NexacroResult
	 */
	public NexacroResult prePostSaveProc(String gubun, DataSetList pDataSetList) throws Exception {

		NexacroResult result = new NexacroResult();
		
		if (pDataSetList.get("dsFormInfo").hasData()) {

			if ("PRE".equals(gubun)) {

				DataSet dsFormInfo = pDataSetList.get("dsFormInfo");

				String reqId = "";
				String reqTmplatId = "";
				String wfProcCd = "";
				String orgReqStatCd = "";

				if (dsFormInfo != null) {

					if (dsFormInfo.getRowCount() == 1) {

						if (!StringUtil.safe(dsFormInfo.getString(0, "REQ_ID")).startsWith("REQ_")) {
							reqId = dsFormInfo.getString(0, "REQ_ID");
						}
						reqTmplatId = StringUtil.safe(dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
						wfProcCd = StringUtil.safe(dsFormInfo.getString(0, "WF_PROC_CD"));
						orgReqStatCd = StringUtil.safe(dsFormInfo.getString(0, "ORG_REQ_STAT_CD"));

						Map<String, Object> condMap = new HashMap<>();
						condMap.put("REQ_ID", reqId);
						condMap.put("REQ_TMPLAT_ID", reqTmplatId);
						Map<String, Object> srBaseInfo = sr0000Dao.select01(condMap);

						if (srBaseInfo != null) {

							String dataWfProcCd = StringUtil.safe(srBaseInfo.get("WF_PROC_CD"));
							String dataReqStatCd = StringUtil.safe(srBaseInfo.get("REQ_STAT_CD"));

							log.debug("wfProcCd:[" + wfProcCd + "] dataWfProcCd:[" + dataWfProcCd + "]");
							log.debug("orgReqStatCd:[" + orgReqStatCd + "] dataReqStatCd:[" + dataReqStatCd + "]");

							if (!wfProcCd.equals(dataWfProcCd) || !orgReqStatCd.equals(dataReqStatCd)) {

								result.setErrorCode(-92000);
								result.setErrorMsg("요청서 상태가 변경되었습니다.");
								return result;
							}
						}
					}
				}
			}

			List<Map<String, Object>> saveObj = null;

			if ("PRE".equals(gubun)) {
				
				try {
					saveObj = preSave(pDataSetList);

				}catch(Exception e) {
					e.printStackTrace();
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						if(sc.get().getScSessionMsg() != null) {
							sc.get().setScSessionMsg("[save-ERROR] " + e.getMessage());
						}else {
							log.debug("[save-ERROR] " + e.getMessage());
						}
						throw new Exception(sc.get().getScSessionMsg());
					}else {
						log.debug("[save-ERROR] " + e.getMessage());
						throw new Exception(e.getMessage());
					}
				}
				
			} else if ("POST".equals(gubun)) {
				
				try {
					saveObj = postSave(pDataSetList);

				}catch(Exception e) {
					e.printStackTrace();
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						if(sc.get().getScSessionMsg() != null) {
							sc.get().setScSessionMsg("[postSave-ERROR] " + e.getMessage());
						}else {
							log.debug("[postSave-ERROR] " + e.getMessage());
						}
					}else {
						log.debug("[postSave-ERROR] " + e.getMessage());
					}
				}
			}

			if (saveObj != null) {

				for (int i = 0; i < saveObj.size(); i++) {

					for (String name : saveObj.get(i).keySet()) {
						if (name.indexOf("_MapMeta_") > -1) { // 조회된 데이터가 없는 경우는 MapMeta가 붙어서 넘어온다.
							String dsNm = name.replaceAll("_MapMeta_", "");
							DataSet ds = new DataSet(dsNm);
							Map<String, Object> map = (Map<String, Object>) saveObj.get(i).get(name);

							for (String colNm : map.keySet())
								ds.addColumn(colNm, 1);
							// for (int j = 0; j < ds.getColumnCount(); j++) {
							// log.debug("_MapMeta_ name:[" + dsNm + "] j=" + j + " ColumnName:[" +
							// ds.getColumn(j).getName() + "]");
							// }
							result.addDataSet(ds);
						} else {
							result.addDataSet(name, saveObj.get(i).get(name));
						}
					}
				}
			}

		}else {
			result.setErrorCode(-1);
			result.setErrorMsg("[SRComm]-prePostSave [" + gubun + "] dsFormInfo 데이터가 올바르게 설정되지 않았습니다.");
		}
		return result;
	}

	/**
	 * 요청서 저장(공통 모듈)
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> save(DataSetList dataSetList) throws Exception {

		List<Map<String, Object>> rtnDataObj = new ArrayList<Map<String,Object>>();

		//글로벌 변수 셋팅
		if("".equals(StringUtil.safe(reqInfo.get().getReqId()))) {
			GlobalReqInfo.setReqInfo(reqInfo, dataSetList.get("dsFormInfo"));
		}
				
		//log.debug("[SRCommServiceImpl]-save() dataSetList.size():[" + dataSetList.size() + "]");

	    String returnKey = "";

	    DataSet dsFormInfo = dataSetList.get("dsFormInfo");

	    String tempReqId = reqInfo.get().getTempReqId();
	    String tempSaveYn = reqInfo.get().getTempSaveYn();

	    if(!dsFormInfo.hasData()) {
	    	if("N".equals(reqInfo.get().getJobReserveYn())) {
	    		sc.get().setScSessionMsg("dsFormInfo에 데이터가 존재하지 않습니다.");
	    	}
	    	log.debug("[SRCommServiceImpl]-save() dsFormInfo에 데이터가 존재하지 않습니다.");
	    	throw new Exception("dsFormInfo에 데이터가 존재하지 않습니다.");
	    }

	    DataSetList pDataSetList = new DataSetList();

		for (int i = 0; i < dataSetList.size(); i++) {
			String dsNm = dataSetList.get(i).getName();
			//log.debug("[SRCommServiceImpl]-save() dsNm=[" + dsNm + "]");
			int isExists = pDataSetList.indexOf(dsNm);	//중복된 데이터셋은 제거하기 위해
			//log.debug("[SRCommServiceImpl]-save() i = " + i + " isExists : " + isExists);
			if(isExists == -1) {
				pDataSetList.add(dataSetList.get(i));
				//log.debug("[SRCommServiceImpl]-save() i=" + i + " : Name=[" + dataSetList.get(i).getName() + "] Type:[" + dataSetList.get(i).getClass().toString() + "]");
			}
		}

		DataSet dsSaveService = pDataSetList.get("dsSaveService");

		//log.debug("[SRCommServiceImpl]-save() tempSaveYn:[" + tempSaveYn + "] saveGubun:[" + saveGubun + "]");

		//요청서 기본정보, 결재선이 있는 경우 결재선 저장 쿼리에 대한 처리
		for (int i = 0; i < dsSaveService.getRowCount(); i++) {

			String svcNm = dsSaveService.getString(i, "SVC_NM");
			String inDs = dsSaveService.getString(i, "FORM_INDS");

			Object retObj = null;

			if("sr/SR0000D/save01".equals(svcNm)) {			//요청서 기본정보

				if(!"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {
					
					try {
						retObj = executeServiceMethod(svcNm, pDataSetList, inDs);

					}catch(Exception e) {
						e.printStackTrace();
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							if(sc.get().getScSessionMsg() != null) {
								throw new Exception(sc.get().getScSessionMsg());
							}else {
								throw new Exception(e.getMessage());
							}
						}else {
							throw new Exception(e.getMessage());
						}
					}
				}

			}else if("sr/SR0010D/save01".equals(svcNm)) {	//결재선
				
				if(!"APV".equals(reqInfo.get().getSaveGubun()) && !"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {
					
					try {
						retObj = executeServiceMethod(svcNm, pDataSetList, inDs);

					}catch(Exception e) {
						e.printStackTrace();
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							if(sc.get().getScSessionMsg() != null) {
								throw new Exception(sc.get().getScSessionMsg());
							}else {
								throw new Exception(e.getMessage());
							}

						}else {
							throw new Exception(e.getMessage());
						}
					}
				}

			}else {

				if(!"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {
					
					try {
						retObj = executeServiceMethod(svcNm, pDataSetList, inDs);

					}catch(Exception e) {
						e.printStackTrace();
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							if(sc.get().getScSessionMsg() != null) {
								throw new Exception(sc.get().getScSessionMsg());
							}else {
								throw new Exception(e.getMessage());
							}

						}else {
							throw new Exception(e.getMessage());
						}
					}
				}
			}

			if(retObj != null) {

				Map<String, Object> outMap = new HashMap<>();

				log.debug("[SRCommServiceImpl]-save() svcNm:[" + svcNm + "] retObj.getClass().getName():[" + retObj.getClass().getName() + "]");

				if("java.lang.String".equals(retObj.getClass().getName())) { 

					if("sr/SR0000D/save01".equals(svcNm)) {	//요청서 기본 정보 저장

						String reqId = (String) StringUtil.safe(retObj);

						if(!"".equals(reqId)) {
							 
							log.debug("[SRCommServiceImpl]-save() svcNm:[" + svcNm + "] reqId:[" + reqId + "] retObj:[" + retObj + "]");
							
	    					returnKey = reqId;
	    					dsFormInfo.set(i, "REQ_ID", returnKey);
	    					outMap.put("INSERT_KEY", "REQ_ID=" + returnKey);	// + "&ENC_REQ_ID=" + StringUtil.encKeyData(returnKey + sc.get().getEncUserKey())
	    					fommMultipartService.replaceTempKey("SR0000_W_divFormFile", null, returnKey);
	    					reqInfo.get().setReqId(returnKey);
	    					rtnDataObj.add(outMap);

	    					//요청서ID[REQ_ID]가 신규 생성된 경우 해당 컬럼을 모두 찾아 적용해 준다.
	    					for(int j = 0; j < pDataSetList.size(); j++) {
	    						
	    						for (int k = 0; k < pDataSetList.get(j).getRowCount(); k++) {

	    							for (int l = 0; l < pDataSetList.get(j).getColumnCount(); l++) {
	    								
	    								if("REQ_ID".equals(pDataSetList.get(j).getColumn(l).getName()) || 
	    								   "PK1".equals(pDataSetList.get(j).getColumn(l).getName())) {	//요청서에서 체크리스트 저장시 REQ_ID를 PK1에 저장
	    									log.debug(pDataSetList.get(j).getName() + " row=" + k + " KEY : " + returnKey);
	    									pDataSetList.get(j).set(k, pDataSetList.get(j).getColumn(l).getName(), returnKey);
	    								}
	    							}
	    						}
	    					}
	    				}
					}
				}
    		}
		}

		//log.debug("[SRCommServiceImpl]-save() returnKey:[" + returnKey + "]");

		//저장 서비스 실행 하기 전 WF프로세스 관리에 정의한 서비스를 먼저 실행
		String procGubun = "";
		if(!"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun()))	procGubun = "SAVE";
		else																																						procGubun = "RTRN";

		List<Map<String, Object>> rtnFrDataObj = new ArrayList<Map<String,Object>>();

		try {
			rtnFrDataObj = execWfProcSvc(procGubun, "CU", "FR", dsFormInfo, pDataSetList);

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(reqInfo.get().getJobReserveYn())) {

				if(sc.get().getScSessionMsg() != null) {
					throw new Exception(sc.get().getScSessionMsg());
				}else {
					throw new Exception(e.getMessage());
				}

			}else {
				throw new Exception(e.getMessage());
			}
		}
		
		//log.debug("[SRCommServiceImpl]-save() rtnFrDataObj.size() :[" + rtnFrDataObj.size() + "]");

		if(rtnFrDataObj.size() > 0) {
 			rtnDataObj.addAll(rtnFrDataObj);
  		}

		if(!"Y".equals(tempSaveYn)) {	//임시저장 일 때는 실행 안함

			if("APV".equals(reqInfo.get().getSaveGubun())) {	//승인인 경우
				
				if("Y".equals(reqInfo.get().getLastApprovalYn())) {
					//최종-승인 시점 처리 예정
					
					List<Map<String, Object>> rtnFrEndDataObj = new ArrayList<Map<String,Object>>();

					try {
						rtnFrEndDataObj = execWfProcSvc("SAVE-END", "CU", "FR", dsFormInfo, pDataSetList);
						//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

					}catch(Exception e) {
						e.printStackTrace();
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							if(sc.get().getScSessionMsg() != null) {
								throw new Exception(sc.get().getScSessionMsg());
							}else {
								throw new Exception(e.getMessage());
							}

						}else {
							throw new Exception(e.getMessage());
						}
					}

					if(rtnFrEndDataObj.size() > 0) {
			 			rtnDataObj.addAll(rtnFrEndDataObj);
			  		}
				}
			}
	    }
		//log.debug("=====================tempReqId========================" + tempReqId);

		String[] addColumn = new String[]{
					"SAVE_GUBUN", "TEMP_SAVE_YN", "LAST_APPROVAL_YN", "REQ_TMPLAT_ID", "REQ_TMPLAT_VER",
					"MAP_WF_PROC_CD", "WF_PROC_CD", "NEXT_WF_PROC_CD", "REQ_USER_ID", "REQ_USER_NM",
					"REQ_DEPT_CD", "REQ_DEPT_NM"
		};

		//요청서 등록 화면 관련 테이블 I/U/D 쿼리 실행
		for (int i = 0; i < pDataSetList.size(); i++) {
			
			DataSet ds = pDataSetList.get(i);

			if(!"dsFormInfo".equals(ds.getName()) && !"dsSaveService".equals(ds.getName()) &&
			   !"dsSrBaseInfo_TOP".equals(ds.getName()) && !"dsWfApprovalMt_APPV".equals(ds.getName()) &&
			   !"dsWfApprovalRefMt_APPV".equals(ds.getName())) {

				for (int j = 0; j < ds.getRowCount(); j++) {

					for (int k = 0; k < addColumn.length; k++) {
						
						if(j==0) {

							if(!ds.containsColumn("F_" + addColumn[k])) {
								ds.setChangeStructureWithData(true);
								ds.addColumn("F_" + addColumn[k], 1);
								ds.setChangeStructureWithData(false);
							}
						}
						ds.set(j, "F_" + addColumn[k], pDataSetList.get("dsFormInfo").getString(0, addColumn[k]));
					}
				}
				if(ds.getRowCount() > 0) {
					log.debug("[SRCommServiceImpl]-save() execWfSaveRegTblInfo Before " + ds.getName() + "\n" + ds.saveXml());
				}
			}
		}

		if(!"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {

			try {
				execWfSaveRegTblInfo(pDataSetList);
				//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

			}catch(Exception e) {
				e.printStackTrace();
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					if(sc.get().getScSessionMsg() != null) {
						throw new Exception(sc.get().getScSessionMsg());
					}else {
						throw new Exception(e.getMessage());
					}

				}else {
					throw new Exception(e.getMessage());
				}
			}
		}
		
  		String reqId	= StringUtil.safe(dsFormInfo.getString(0, "REQ_ID"));

		String userId = "";
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId	= sc.get().getScUserId();
		}else {
			userId	= reqInfo.get().getReqUserId();
		}
		
		int seq	= StringUtil.safeInt(dsFormInfo.getString(0, "SEQ"), -1);

		String orgUserId 	= "";
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			orgUserId 	= sc.get().getScOrgUserId();
		}else {
			orgUserId 	= reqInfo.get().getReqUserId();
		}
		
		String lmpId = "";
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			lmpId = sc.get().getScLmpId();
		}else {
			lmpId = "ITSM";
		}
		
		log.debug("[SRCommServiceImpl]-save() userId:[{}]", userId);
		log.debug("[SRCommServiceImpl]-save() orgUserId:[{}]", orgUserId);
		log.debug("[SRCommServiceImpl]-save() lmpId:[{}]", lmpId);
		
		String reqTmplatId	= StringUtil.safe(dsFormInfo.getString(0, "REQ_TMPLAT_ID"));

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);

		//log.debug("[SRCommServiceImpl]-save() getNextWfProcFuncCd saveGubun:[" + saveGubun + "] wfProcCd:[ " + wfProcCd + "] wfFuncCd:[" + "] 결과=newWfProcCd:[" + reqInfo.get().getNextWfProcCd() + "] newWfFuncCd:[" + reqInfo.get().getNextWfFuncCd() + "]");

		 // 다음 단계/기능을 구한다. 로직이 진행된 상태에서는 절대 다음단계를 구하지 않는다.
		String[] nextWfProcFuncCd = null;
		
		try {
			nextWfProcFuncCd = getNextWfProcFuncCd(reqId, reqTmplatId, reqInfo.get().getSaveGubun(), reqInfo.get().getWfProcCd(), reqInfo.get().getLastApprovalYn());
			//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				if(sc.get().getScSessionMsg() != null) {
					throw new Exception(sc.get().getScSessionMsg());
				}else {
					throw new Exception(e.getMessage());
				}

			}else {
				throw new Exception(e.getMessage());
			}
		}
		
		reqInfo.get().setNextWfProcCd(nextWfProcFuncCd[0]);
		reqInfo.get().setNextWfFuncCd(nextWfProcFuncCd[1]);
		dsFormInfo.set(0, "NEXT_WF_PROC_CD", nextWfProcFuncCd[0]);
		dsFormInfo.set(0, "NEXT_WF_PROC_NM", reqInfo.get().getNextWfProcNm());
		dsFormInfo.set(0, "NEXT_WF_FUNC_CD", nextWfProcFuncCd[1]);
		dsFormInfo.set(0, "NEXT_MAP_WF_PROC_CD", reqInfo.get().getNextMapWfProcCd());

		log.debug("[SRCommServiceImpl]-save() getNextWfProcFuncCd() reqInfo.get().getNextWfProcCd():[{}]", reqInfo.get().getNextWfProcCd());
		log.debug("[SRCommServiceImpl]-save() getNextWfFuncCd() reqInfo.get().getNextWfProcCd():[{}]", reqInfo.get().getNextWfFuncCd());
		log.debug("[SRCommServiceImpl]-save() reqInfo.get().getSaveGubun():[{}]", reqInfo.get().getSaveGubun());
		log.debug("[SRCommServiceImpl]-save() reqInfo.get().getJobReserveYn():[{}]", reqInfo.get().getJobReserveYn());

		if("REG".equals(reqInfo.get().getSaveGubun())) {

			if("N".equals(reqInfo.get().getJobReserveYn())) {

				condMap = new HashMap<>();
				condMap.put("REQ_TMPLAT_ID", reqTmplatId);
				condMap.put("REQ_ID", reqId);
				Map<String, Object> srBaseInfo = sr0000dSvc.selectBaseInfo(condMap);
				
				String reservFlag = StringUtil.safe(srBaseInfo.get("RESERV_FLAG"));
				
				if("Y".equals(reservFlag)) {
	
					srBaseInfo.put("LMID", sc.get().getScUserId());
					srBaseInfo.put("LMPID", sc.get().getScLmpId());
					sr0000dSvc.updateProcCancelReserve(srBaseInfo);	//기존 예약 내역 취소 처리

//					condMap = new HashMap<>();
//					condMap.put("WORK_DIV", "REQ");
//					condMap.put("EXEC_YN", "N");
//					condMap.put("PK1", reqId);
//					List<Map<String, Object>> reservList = fommScheduleJobSvc.selectReserveJobList(condMap);
//
//					if(reservList != null) {
//	
//						for (int i = 0; i < reservList.size(); i++) {
//							String reserveNo = StringUtil.safe(reservList.get(i).get("RESERVE_NO"));
//							fommScheduleJobSvc.removeReserveJobMt(reserveNo);
//							sppJobCotrol.removeJob("RESERVE_NO", reserveNo);		//스케쥴러 job 삭제
//						}
//					}
				}
			}

			Map<String, Object> prMap = new HashMap<>();
			prMap.put("SAVE_GUBUN",			reqInfo.get().getSaveGubun());
			prMap.put("REQ_ID",					reqId);
			prMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
			prMap.put("USER_ID",				userId);
			prMap.put("ORG_USER_ID",		orgUserId);
			prMap.put("GUBUN_NM",			"요청자(등록자)");
			prMap.put("PROC_EXAM_OPIN",	StringUtil.safe(dsFormInfo.getString(0, "OPINION")));
			prMap.put("LOGIN_ID",				userId);
			prMap.put("LMPID",					lmpId);
			callPrSrRevProc(prMap);

			if(!"Y".equals(tempSaveYn)) {	//임시저장 일 때는 실행 안함

				prMap = new HashMap<>();
				prMap.put("SAVE_GUBUN",				reqInfo.get().getSaveGubun());
				prMap.put("REQ_ID",						reqId);
				prMap.put("USER_ID",					userId);
				prMap.put("WF_PROC_CD",				reqInfo.get().getWfProcCd());
				prMap.put("NEXT_WF_PROC_CD",	reqInfo.get().getNextWfProcCd());
				prMap.put("NEXT_WF_FUNC_CD",	reqInfo.get().getNextWfFuncCd());
				prMap.put("LOGIN_ID",					userId);
				prMap.put("LMPID",						lmpId);
				callPrSrReqWfProcNext(prMap);

				int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
				String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));

				log.debug("[SRCommServiceImpl]-save() [ERROR] [REG] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
				log.debug("[SRCommServiceImpl]-save() [ERROR] [REG] callPrSrReqWfProcNext  OUT_RTN_MSG:[" + outRtnMsg + "]");

				if(outRtnCd < 0) {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
					}
					throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
				//else {
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REG] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REG] callPrSrReqWfProcNext  OUT_RTN_MSG:[" + outRtnMsg + "]");
				//}
	
				//다음 단계에 해당하는 담당자 또는 검토자 셋팅
				log.debug("[SRCommServiceImpl]-save() [다음 단계 담당자 셋팅]reqInfo.get().getNextWfProcCd()===============>" + reqInfo.get().getNextWfProcCd());
				log.debug("[SRCommServiceImpl]-save() [다음 단계 담당자 셋팅]reqInfo.get().getNextWfFuncCd()===============>" + reqInfo.get().getNextWfFuncCd());
				
				//다음 단계에 해당하는 담당자 또는 검토자 셋팅
				if(!"WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd())) {
					
					if("WF_PROC_9020".equals(reqInfo.get().getNextWfProcCd())) {
						Map<String, Object> reqUserMap = new HashMap<>();
						reqUserMap.put("REQ_ID",				reqInfo.get().getReqId());
						reqUserMap.put("WF_PROC_CD",		reqInfo.get().getNextWfProcCd());
						reqUserMap.put("WF_FUNC_NM",	"요청자");
						reqUserMap.put("USER_ID",			reqInfo.get().getReqUserId());
						reqUserMap.put("LMID",				userId);
						reqUserMap.put("LMPID",				lmpId);
						srCommDao.insertSrCgerDt(reqUserMap);
						
					}else {
						
						try {
							procReqCgerDt(dsFormInfo.getRowToMap(0));
							//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

						}catch(Exception e) {
							e.printStackTrace();
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								if(sc.get().getScSessionMsg() != null) {
									throw new Exception(sc.get().getScSessionMsg());
								}else {
									throw new Exception(e.getMessage());
								}

							}else {
								throw new Exception(e.getMessage());
							}
						}
					}
				}
			}

		}else if("REV".equals(reqInfo.get().getSaveGubun())) {

			Map<String, Object> prMap = new HashMap<>();
			
			//현재 처리가 만족도조사 진행단계인 경우만 접수 내역을 자동 등록해준다.
			if("WF_PROC_9020".equals(reqInfo.get().getWfProcCd())) {
				prMap.put("SAVE_GUBUN",			reqInfo.get().getSaveGubun());
				prMap.put("REQ_ID",					reqId);
				prMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
				prMap.put("USER_ID",				userId);
				prMap.put("ORG_USER_ID",		orgUserId);
				prMap.put("GUBUN_NM",			"요청자");
				prMap.put("PROC_EXAM_OPIN",	"만족도조사 응답");
				prMap.put("CEGR_ID",				"");
				prMap.put("LOGIN_ID",				userId);
				prMap.put("LMPID",					lmpId);
				callPrSrRevProc(prMap);

				int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
				String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));

				if(outRtnCd < 0) {
					//log.debug("[SRCommServiceImpl]-save() [ERROR] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
					//log.debug("[SRCommServiceImpl]-save() [ERROR] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
					}
	    			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
				//else {
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REV] callPrSrRevProc OUT_RTN_MSG:[" + outRtnMsg + "]");
				//}
			}

			if(!"Y".equals(tempSaveYn)) {	//임시저장 일 때는 실행 안함
				prMap = new HashMap<>();
				prMap.put("SAVE_GUBUN",				reqInfo.get().getSaveGubun());
				prMap.put("REQ_ID",						reqId);
				prMap.put("USER_ID",					userId);
				prMap.put("ORG_USER_ID",			orgUserId);
				prMap.put("WF_PROC_CD",				reqInfo.get().getWfProcCd());
				prMap.put("NEXT_WF_PROC_CD",	reqInfo.get().getNextWfProcCd());
				prMap.put("NEXT_WF_FUNC_CD",	reqInfo.get().getNextWfFuncCd());
				prMap.put("LMPID",						lmpId);
				callPrSrReqWfProcNext(prMap);
	
				int outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
				String outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));
	
				log.debug("[SRCommServiceImpl]-save() [ERROR] [REV] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
				log.debug("[SRCommServiceImpl]-save() [ERROR] [REV] callPrSrReqWfProcNext OUT_RTN_MSG:[" + outRtnMsg + "]");
				
				if(outRtnCd < 0) {					
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
					}
					throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
				//else {
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REV] callPrSrReqWfProcNext OUT_RTN_CD:[" + outRtnCd + "]");
					//log.debug("[SRCommServiceImpl]-save() [SUCC] [REV] callPrSrReqWfProcNext OUT_RTN_MSG:[" + outRtnMsg + "]");
				//}
				
				log.debug("[SRCommServiceImpl]-save() [다음 단계 담당자 셋팅]reqInfo.get().getNextWfProcCd()===============>" + reqInfo.get().getNextWfProcCd());
				log.debug("[SRCommServiceImpl]-save() [다음 단계 담당자 셋팅]reqInfo.get().getNextWfFuncCd()===============>" + reqInfo.get().getNextWfFuncCd());
				
				//다음 단계에 해당하는 담당자 또는 검토자 셋팅
				if(!"WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd())) {
					
					if("WF_PROC_9020".equals(reqInfo.get().getNextWfProcCd())) {
						Map<String, Object> reqUserMap = new HashMap<>();
						reqUserMap.put("REQ_ID",				reqInfo.get().getReqId());
						reqUserMap.put("WF_PROC_CD",		reqInfo.get().getNextWfProcCd());
						reqUserMap.put("WF_FUNC_NM",	"요청자");
						reqUserMap.put("USER_ID",			reqInfo.get().getReqUserId());
						reqUserMap.put("LMID",				userId);
						reqUserMap.put("LMPID",				lmpId);

						try {
							srCommDao.insertSrCgerDt(reqUserMap);
							//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

						}catch(Exception e) {
							e.printStackTrace();
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								if(sc.get().getScSessionMsg() != null) {
									throw new Exception(sc.get().getScSessionMsg());
								}else {
									throw new Exception(e.getMessage());
								}

							}else {
								throw new Exception(e.getMessage());
							}
						}

					}else {
						
						try {
							procReqCgerDt(dsFormInfo.getRowToMap(0));
							//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnFrEndDataObj.size() + "]");

						}catch(Exception e) {
							e.printStackTrace();
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								if(sc.get().getScSessionMsg() != null) {
									throw new Exception(sc.get().getScSessionMsg());
								}else {
									throw new Exception(e.getMessage());
								}

							}else {
								throw new Exception(e.getMessage());
							}
						}
					}
				}
			}

		}else if("APV".equals(reqInfo.get().getSaveGubun())) {	//결재/검토 승인인 경우

			if(!"Y".equals(tempSaveYn)) {	//임시저장 일 때는 실행 안함
				DataSet dsApprInfo = dataSetList.get("dsApprInfo");
	
				Map<String, Object> prMap = new HashMap<>();
				prMap.put("REQ_ID",						reqId);
				prMap.put("WF_PROC_CD",				reqInfo.get().getWfProcCd());
				prMap.put("SEQ",							seq);
				prMap.put("NEXT_WF_PROC_CD",	reqInfo.get().getNextWfProcCd());
				prMap.put("NEXT_WF_FUNC_CD",	reqInfo.get().getNextWfFuncCd());				
				prMap.put("USER_ID",					userId);
				prMap.put("ORG_USER_ID",			orgUserId);
				prMap.put("APPR_DESC",				dsApprInfo.getString(0, "APPR_DESC"));
				prMap.put("LMPID",						lmpId);
	
		    	sr0140pDao.saveApprove(prMap);
	
		    	int outRtnCd			= Integer.parseInt(StringUtil.safe(prMap.get("RTN_CD")));
				String outRtnMsg	= StringUtil.safe(prMap.get("RTN_MSG"));
	
				if(outRtnCd < 0) {
					//log.debug("[SRCommServiceImpl]-save() [ERROR] [APV] sr0140pDao.saveApprove OUT_RTN_CD:[" + outRtnCd + "]");
					//log.debug("[SRCommServiceImpl]-save() [ERROR] [APV] sr0140pDao.saveApprove OUT_RTN_MSG:[" + outRtnMsg + "]");
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
					}
					throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
				else {
					log.debug("[SRCommServiceImpl]-save() [SUCC] [APV] sr0140pDao.saveApprove OUT_RTN_CD:[" + outRtnCd + "]");
	    			log.debug("[SRCommServiceImpl]-save() [SUCC] [APV] sr0140pDao.saveApprove OUT_RTN_MSG:[" + outRtnMsg + "]");
				}

				try {
					//다음 결재자 갱신
					setRenewNextApprUserByReqInfo();

				}catch(Exception e) {
					e.printStackTrace();
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						if(sc.get().getScSessionMsg() != null) {
							throw new Exception(sc.get().getScSessionMsg());
						}else {
							throw new Exception(e.getMessage());
						}

					}else {
						throw new Exception(e.getMessage());
					}
				}
			}

		}else if("SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {	//(화면/검토/결재)반려

			Map<String, Object> prMap = new HashMap<>();
			
			int outRtnCd		= -1;
			String outRtnMsg	= "";

			prMap.put("REQ_ID",				reqId);
			prMap.put("WF_PROC_CD",		reqInfo.get().getWfProcCd());
			prMap.put("RTN_DESC",			StringUtil.safe(dsFormInfo.getString(0, "OPINION")));
			prMap.put("USER_ID",			userId);
			prMap.put("ORG_USER_ID",	orgUserId);
			callPrScrnRtnProc(prMap);	//화면 반려 처리

			outRtnCd = Integer.parseInt(StringUtil.safe(prMap.get("OUT_RTN_CD")));
			outRtnMsg = StringUtil.safe(prMap.get("OUT_RTN_MSG"));

			if(outRtnCd < 0) {
				//log.debug("[SRCommServiceImpl]-save() [ERROR] [RTRN] callPrScrnRtnProc OUT_RTN_CD:[" + outRtnCd + "]");
				//log.debug("[SRCommServiceImpl]-save() [ERROR] [RTRN] callPrScrnRtnProc OUT_RTN_MSG:[" + outRtnMsg + "]");
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
				throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");

			}
			//else {
				//log.debug("[SRCommServiceImpl]-save() [SUCC] [RTRN] callPrScrnRtnProc OUT_RTN_CD:[" + outRtnCd + "]");
				//log.debug("[SRCommServiceImpl]-save() [SUCC] [RTRN] callPrScrnRtnProc OUT_RTN_MSG:[" + outRtnMsg + "]");
			//}

		}else if("RTRN".equals(reqInfo.get().getSaveGubun())) {	//승인 반려

			Map<String, Object> prMap = new HashMap<>();
			
			int outRtnCd		= -1;
			String outRtnMsg	= "";

			DataSet dsApprInfo = dataSetList.get("dsApprInfo");
			prMap.put("REQ_ID",				reqId);
			prMap.put("WF_PROC_CD",		reqInfo.get().getWfProcCd());
			prMap.put("SEQ",					seq);
			prMap.put("USER_ID",			userId);
			prMap.put("ORG_USER_ID",	orgUserId);
			prMap.put("APPR_DESC",		dsApprInfo.getString(0, "APPR_DESC"));
			prMap.put("LMPID",				lmpId);
	    	sr0140pDao.saveReturn(prMap);

	    	outRtnCd	= Integer.parseInt(StringUtil.safe(prMap.get("RTN_CD")));
			outRtnMsg	= StringUtil.safe(prMap.get("RTN_MSG"));

			if(outRtnCd < 0) {
				//log.debug("[SRCommServiceImpl]-save() [ERROR] [RTRN] sr0140pDao.saveReturn OUT_RTN_CD:[" + outRtnCd + "]");
				//log.debug("[SRCommServiceImpl]-save() [ERROR] [RTRN] sr0140pDao.saveReturn OUT_RTN_MSG:[" + outRtnMsg + "]");
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
				}
    			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
			}
			//else {
				//log.debug("[SRCommServiceImpl]-save() [SUCC] [RTRN] sr0140pDao.saveReturn OUT_RTN_CD:[" + outRtnCd + "]");
				//log.debug("[SRCommServiceImpl]-save() [SUCC] [RTRN] sr0140pDao.saveReturn OUT_RTN_MSG:[" + outRtnMsg + "]");
			//}
		}

		//WF프로세스 관리에 정의한 저장 후 호출할 서비스 먼저 실행
		procGubun = "";
		if(!"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun()))		procGubun = "SAVE";
		else																																							procGubun = "RTRN";

		List<Map<String, Object>> rtnBkDataObj = new ArrayList<Map<String,Object>>();
				
		try {
			rtnBkDataObj = execWfProcSvc(procGubun, "CU", "BK", dsFormInfo, dataSetList);

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				if(sc.get().getScSessionMsg() != null) {
					throw new Exception(sc.get().getScSessionMsg());
				}else {
					throw new Exception(e.getMessage());
				}

			}else {
				throw new Exception(e.getMessage());
			}
		}
		
		//log.debug("[SRCommServiceImpl]-save() [BK] saveGubun:[ " + saveGubun + "] procGubun:[ " + procGubun + "] rtnBkDataObj.size() :[" + rtnBkDataObj.size() + "]");

		if(rtnBkDataObj.size() > 0) {
			rtnDataObj.addAll(rtnBkDataObj);
		}
		
		if(!"Y".equals(tempSaveYn)) {	//임시저장 일 때는 실행 안함

  			if("APV".equals(reqInfo.get().getSaveGubun())) {	//승인인 경우

				if("Y".equals(reqInfo.get().getLastApprovalYn())) {
					//최종-승인 시점 처리
					List<Map<String, Object>> rtnBkEndDataObj = new ArrayList<Map<String,Object>>();
					
					try {
						rtnBkEndDataObj = execWfProcSvc("SAVE-END", "CU", "BK", dsFormInfo, dataSetList);
						//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnBkEndDataObj.size() + "]");
					}catch(Exception e) {
						e.printStackTrace();
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							if(sc.get().getScSessionMsg() != null) {
								throw new Exception(sc.get().getScSessionMsg());
							}else {
								throw new Exception(e.getMessage());
							}

						}else {
							throw new Exception(e.getMessage());
						}
					}

					if(rtnBkEndDataObj.size() > 0) {
			 			rtnDataObj.addAll(rtnBkEndDataObj);
			  		}
				}
			}
  		}
		
		if("SCRN_RTRN".equals(reqInfo.get().getSaveGubun()) || "RTRN".equals(reqInfo.get().getSaveGubun())) {

			condMap = new HashMap<>();
			condMap.put("REQ_ID", reqInfo.get().getReqId());
			Map<String, Object> baseInfo = sr0000Dao.select01(condMap);

			String rtrnWfProcCd = StringUtil.safe(baseInfo.get("WF_PROC_CD"));
			String rtrnMapWfProcCd = StringUtil.safe(baseInfo.get("MAP_WF_PROC_CD"));

			reqInfo.get().setWfProcCd(rtrnWfProcCd);
			reqInfo.get().setMapWfProcCd(rtrnMapWfProcCd);

			condMap.put("REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
			condMap.put("REQ_TMPLAT_VER", reqInfo.get().getReqTmplatVer());
			condMap.put("WF_PROC_CD", rtrnWfProcCd);

			log.debug("[SRCommServiceImpl]-save()  rtrnWfProcCd=>{}", rtrnWfProcCd);
			List<Map<String, Object>> rtrnWfList = wf0120wDao.selectWfReqTmplatProcHt(condMap);

			if(rtrnWfList != null) {
				
				if(rtrnWfList.size() == 1) {
					
					String rtrnCger = StringUtil.safe(rtrnWfList.get(0).get("CGER"));
					String rtrnFunc = StringUtil.safe(rtrnWfList.get(0).get("FUNC"));
					
					log.debug("[SRCommServiceImpl]-save() rtrnCger=>{} rtrnFunc=>",  rtrnCger, rtrnFunc);
					
					if("true".equals(rtrnCger)) {
						Map<String, Object> formInfoMap = dsFormInfo.getRowToMap(0);
						formInfoMap.put("NEXT_WF_PROC_CD", rtrnWfProcCd);
						formInfoMap.put("NEXT_WF_FUNC_CD", "WF_FUNC_04");
						procReqCgerDt(formInfoMap);

					}else {
						
						if("WF_FUNC_01".equals(rtrnFunc)) {
							
							condMap = new HashedMap<String, Object>();
							condMap.put("REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
							condMap.put("REQ_TMPLAT_VER", reqInfo.get().getReqTmplatVer());
							condMap.put("REQ_ID", reqInfo.get().getReqId());
							condMap.put("WF_PROC_CD", rtrnWfProcCd);
							condMap.put("WF_FUNC_CD", "CREATE");
							List<Map<String, Object>> appvUserList = sr0010DSvcImpl.getProcAppvUserList(condMap, false);

							if(appvUserList != null) {	log.debug("[SrCommServiceImpl]-save() appvUserList.size()===============>" + appvUserList.size());	}
							log.debug("[SrCommServiceImpl]-save() rtrnWfProcCd--->" +rtrnWfProcCd);
							String orgWfProcCd = reqInfo.get().getWfProcCd();
							reqInfo.get().setWfProcCd(rtrnWfProcCd);
							sr0010DSvc.save01(appvUserList, null);
							reqInfo.get().setWfProcCd(orgWfProcCd);
						}
					}
				}
			}
		}

		if(!"Y".equals(tempSaveYn) && !"RTRN".equals(reqInfo.get().getSaveGubun()) && !"SCRN_RTRN".equals(reqInfo.get().getSaveGubun())) {		//임시저장 또는 반려가 아닐 때
			
			if("WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd())) {	//다음 기능의 결재인 경우

				Map<String, Object> prMap = new HashMap<>();
				prMap.put("REQ_ID", reqId);
				prMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());

				int cnt = srCommDao.selectWfApprovalMtCnt(prMap);
				
				if(cnt == 0) {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 결재자가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");						
					}
					log.debug("[SRCommServiceImpl]-save() 다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 결재자가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");
					throw new Exception("다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 결재자가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");
				}

			}else if("WF_FUNC_04".equals(reqInfo.get().getNextWfFuncCd())) {	//다음 기능의 검토 또는 담당자인 경우

				if(!"WF_PROC_9020".equals(reqInfo.get().getNextWfProcCd())) {

					condMap = new HashMap<>();
					condMap.put("REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
					condMap.put("REQ_TMPLAT_VER", reqInfo.get().getReqTmplatVer());
					condMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
					List<Map<String, Object>> procDtList = wf0120wDao.selectProc(condMap);
					
					String cgerTypeCd = "";
					String extdId = "";
	
					if(procDtList != null) {
						
						if(procDtList.size() == 1) {
							cgerTypeCd = StringUtil.safe(procDtList.get(0).get("CGER_TYPE_CD"));
						}
					}
					
					if("03".equals(cgerTypeCd)) {	//역할자 지정
						
						condMap = new HashMap<>();
						condMap.put("REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
						condMap.put("REQ_TMPLAT_VER", reqInfo.get().getReqTmplatVer());
						condMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
						List<Map<String, Object>> extdIdList = srCommDao.selectWfHistExtdNm(condMap);
						
						if(extdIdList != null) {
							
							if(extdIdList.size() == 1) {
								extdId = StringUtil.safe(extdIdList.get(0).get("EXTD_ID"));
							}
						}
						
					}else if("".equals(cgerTypeCd)) {

						if("N".equals(reqInfo.get().getJobReserveYn())) {
							sc.get().setScSessionMsg("역할자 지정 타입이 입력되지 않았습니다.");						
						}
						throw new Exception("역할자 지정 타입이 입력되지 않았습니다.");
					}
					
					if( !"03".equals(cgerTypeCd) || !"EXTD_DATA_MODI".equals(extdId)) {
					
						Map<String, Object> prMap = new HashMap<>();
						prMap.put("REQ_ID", reqId);
						prMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
						int cnt = srCommDao.selectSrCgerDtCnt(prMap);
	
						if(cnt == 0) {

							String labelNm = "";
							if("WF_FUNC_02".equals(reqInfo.get().getNextWfFuncCd()))		labelNm = "검토자";
							else if("WF_FUNC_04".equals(reqInfo.get().getNextWfFuncCd()))	labelNm = "담당자";
	
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 " + labelNm + "가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");						
							}
							log.debug("[SRCommServiceImpl]-save() 다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 " + labelNm + "가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");
							throw new Exception("다음 단계[" + reqInfo.get().getNextWfProcCd() + "]에 설정된 " + labelNm + "가 존재하지 않아 다음 단계 진행 처리가 불가능합니다.");
						}
					}
				}
			}
		}
		
		if(!"".equals(tempReqId) && !tempReqId.equals(reqId)) {
			Map<String, Object> keyMap = new HashMap<>();
			keyMap.put("TEMP_KEY", tempReqId);
			keyMap.put("REPLACE_KEY", reqId);
			
			try {
				fomm0700dDao.replaceTempKeyOne(keyMap);
				fommMultipartDao.replaceTempKeyOne(keyMap);
				//log.debug("[SRCommServiceImpl]-save() rtnFrEndDataObj.size() :[" + rtnBkEndDataObj.size() + "]");

			}catch(Exception e) {
				e.printStackTrace();
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					if(sc.get().getScSessionMsg() != null) {
						throw new Exception(sc.get().getScSessionMsg());
					}else {
						throw new Exception(e.getMessage());
					}
				}else {
					throw new Exception(e.getMessage());
				}
			}
		}
		return rtnDataObj;
	}

	/**
	 * 요청서 템플릿에서 Form DIV 영역 저장 서비스를 얻어와서 통합으로 저장 서비스를 실행 함수
	 * @param DataSetList
	 * @return	 NexacroResult
	 * @throws Exception
	 */
	public NexacroResult saveProc(DataSetList pDataSetList) throws Exception {
			
		NexacroResult result = new NexacroResult();
		
//			log.debug("[SRComm]-saveProc() Start:::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//			log.debug("[SRComm]-save pDataSetList.size():[" + pDataSetList.size() + "]");
//			for (int i = 0; i < pDataSetList.size(); i++) {
//				log.debug("SRComm]-save i=" + i + " DsName:[" + pDataSetList.get(i).getName() + "] rowCount:[" + pDataSetList.get(i).getRowCount() + "]");
//			}
		Map<String, Object> srBaseInfo = new HashMap<String, Object>();
		
		if (pDataSetList.get("dsFormInfo").hasData()) {

			DataSet dsSrBaseInfo_TOP = pDataSetList.get("dsSrBaseInfo_TOP");			
			DataSet dsFormInfo = pDataSetList.get("dsFormInfo");
			
			String srBaseInfoTitle = StringUtil.safe(dsSrBaseInfo_TOP.getString(0, "TITLE"));
			String formInfoTitle = StringUtil.safe(dsFormInfo.getString(0, "TITLE"));
			
			if("".equals(formInfoTitle)) {
				
				if(!"".equals(srBaseInfoTitle)) {
					dsFormInfo.set(0, "TITLE", srBaseInfoTitle);
				}
			}

			String reqId = "";
			String reqTmplatId = "";
			String wfProcCd = "";
			String orgReqStatCd = "";

			if (dsFormInfo != null) {

				if (dsFormInfo.getRowCount() == 1) {

					if (!StringUtil.safe(dsFormInfo.getString(0, "REQ_ID")).startsWith("REQ_")) {
						reqId = dsFormInfo.getString(0, "REQ_ID");
					}
					reqTmplatId = StringUtil.safe(dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
					wfProcCd = StringUtil.safe(dsFormInfo.getString(0, "WF_PROC_CD"));
					orgReqStatCd = StringUtil.safe(dsFormInfo.getString(0, "ORG_REQ_STAT_CD"));

					Map<String, Object> condMap = new HashMap<>();
					condMap.put("REQ_ID", reqId);
					condMap.put("REQ_TMPLAT_ID", reqTmplatId);
					srBaseInfo = sr0000Dao.select01(condMap);

					if (srBaseInfo != null) {

						String dataWfProcCd = StringUtil.safe(srBaseInfo.get("WF_PROC_CD"));
						String dataReqStatCd = StringUtil.safe(srBaseInfo.get("REQ_STAT_CD"));

						log.debug("wfProcCd:[" + wfProcCd + "] dataWfProcCd:[" + dataWfProcCd + "]");
						log.debug("orgReqStatCd:[" + orgReqStatCd + "] dataReqStatCd:[" + dataReqStatCd + "]");

						if (!wfProcCd.equals(dataWfProcCd) || !orgReqStatCd.equals(dataReqStatCd)) {

							result.setErrorCode(-92000);
							result.setErrorMsg("요청서 상태가 변경되었습니다.");
							log.debug("result.getErrorCode() :[" + result.getErrorCode() + "]");
							log.debug("result.getErrorMsg() :[" + result.getErrorMsg() + "]");
							return result;
						}
					}
				}
			}
		}

		List<Map<String, Object>> saveObj = new ArrayList<Map<String, Object>>();

		// 요청서 신규 저장인 경우 생성된 키값을 Form에 등록된 서비스 영역에도 KEY값을 전달
		String insertKey = "";

//			log.debug("[SRComm]-save saveObj.size():[" + saveObj.size() + "]");
		// 저장 실행
		try {
			saveObj = save(pDataSetList);

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				if(sc.get().getScSessionMsg() != null) {
					sc.get().setScSessionMsg("[save-ERROR] " + e.getMessage());
				}else {
					log.debug("[save-ERROR] " + e.getMessage());
				}
				throw new Exception(sc.get().getScSessionMsg());
			}else {
				log.debug("[save-ERROR] " + e.getMessage());
				throw new Exception(e.getMessage());
			}
		}

		if (saveObj != null) {

			for (int i = 0; i < saveObj.size(); i++) {

				for (String name : saveObj.get(i).keySet()) {

					//log.debug("[SRComm]-save i=" + i + " name:[" + name + "] " + "===" + saveObj.get(i).get(name));
					if (!"INSERT_KEY".equals(name)) {
						result.addDataSet(name, saveObj.get(i).get(name));

					} else {
						insertKey = StringUtil.safe(saveObj.get(i).get(name));
						log.debug("insertKey========>" + insertKey);
					}
				}
			}
		}

		String reqId = "";// 요청번호

		if (reqInfo.get().getReqId().startsWith("REQ_")) {

			String[] keys = insertKey.split("&");

			if (keys != null) {

				for (int i = 0; i < keys.length; i++) {

					String[] keyVal = keys[i].split("=");

					if (keyVal != null) {

						if ("REQ_ID".equals(keyVal[0])) {

							reqId = keyVal[1];
							reqInfo.get().setReqId(keyVal[1]);
						}
					}
				}
			}

		} else {
			reqId = reqInfo.get().getReqId(); // 요청번호
		}

		//log.debug("[SRComm save] insertKey[" + insertKey + "]");
		// 저장 처리 로직 끝

		// 조회 처리 로직 시작
		String[] keys = insertKey.split("&");

		if (keys != null) {

			for (int i = 0; i < keys.length; i++) {

				String[] keyInfo = keys[i].split("=");

				String keyNm = "";
				String keyVal = "";

				if (keyInfo != null) {

					if (keyInfo.length > 1) {

						keyNm = keyInfo[0];
						keyVal = keyInfo[1];

						pDataSetList.get("dsFormInfo").set(0, keyNm, keyVal);
						Map<String, Object> dsFormInfo = pDataSetList.get("dsFormInfo").getRowToMap(0);
						result.addDataSet("dsFormInfo", dsFormInfo);
					}
				}
			}
		}
		//log.debug("[SRComm]-save keyNm:[" + keyNm + "] keyVal:[ " + keyVal + "] result.getDataSets().size():[" + result.getDataSets().size() + "] result.getPlatformData().getDataSetCount():[" + result.getPlatformData().getDataSetCount() + "]");

		String[] dsNmArr = new String[result.getDataSets().size()];

		int idx = 0;

		if (result != null) {

			for (String name : result.getDataSets().keySet()) {
				// log.debug("result.getDataSets() name:[" + name + "]");
				dsNmArr[idx] = name;
				idx++;
			}
		}
		return result;
	}

	/* ================================ */
	/* Controller에서 호출되는 내부 처리 메서드 정의 종료 */

	/**
	 * 요청서 등록 화면의 DB TABLE CRUD 생성 쿼리를 조회한다. 
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectRegTblQuery(Map<String, Object> dsCond) throws Exception {
		List<Map<String, Object>> result = srCommDao.selectRegTblQuery(dsCond);
		return result;
	}

	/**
	 * 요청서 등록 화면의 DB TABLE 및 DATASET 정보를 조회한다.
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectReqRegTblInfo(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = srCommDao.selectReqRegTblInfo(dsCond);
		
		//Clob 처리
		String[] columns = new String[] {"SELECT_QUERY", "INSERT_QUERY", "UPDATE_QUERY", "DELETE_QUERY"};

		for (int i = 0; i < result.size(); i++) {

			for (int j = 0; j < columns.length; j++) {
				Clob clob = (Clob) result.get(i).get(columns[j]);

				if(clob != null) {
					Reader reader = clob.getCharacterStream();
					String str = IOUtils.toString(reader);
					if(reader != null)	reader.close();
					result.get(i).put(columns[j], str);
				}
			}
		}
		return result;
	}

	/**
	 * 요청서 진행단계별 정의된 서비스 정보를 조회한다.
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectReqProcSvcInfo(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = srCommDao.selectReqProcSvcInfo(dsCond);
		return result;
	}

	/**
	 * 결재 처리인 경우 최종승인시점 여부 조회
	 * @param Map<String, Object>
	 * @return String
	 */
	public String selectLastApprvalYn(Map<String, Object> dsCond) {
		String lastApprovalYn = srCommDao.selectLastApprvalYn(dsCond);
		return lastApprovalYn;
	}

	/**
	 * 조회하고자 하는 WORKFLOW의 단계 목록을 조회한다.
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfProcCdList(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = srCommDao.selectWfProcCdList(dsCond);
		return result;
	}

	/**
	 * 조회하고자 하는 WORKFLOW의 단계 목록을 조회한다.
	 * @param Map<String, Object>
	 * @return Map<String, Object>
	 */
	public Map<String, Object> selectRevProc(Map<String, Object> dsCond) {
		Map<String, Object> result = srCommDao.selectRevProc(dsCond);
		return result;
	}

	/**
	 * 결재 이력을 등록한다.
	 * @param Map<String, Object>
	 * @return void
	 */
	public void insertWfProcHist(Map<String, Object> rowData) {
		srCommDao.insertWfProcHist(rowData);
	}

	/**
	 * 등록/접수 처리 후 다음 단계로 넘어가거나 결재중으로 처리하기 위해 등록/접수 후 호출하는 프로시져
	 * @param Map<String, Object>
	 * @return void
	 */
	public void callPrSrReqWfProcNext(Map<String, Object> rowData) {

		String userId 	= "";
		String lmpId 	= "";

		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId 	= sc.get().getScUserId();
			lmpId 	= sc.get().getScLmpId();
			
		}else {
			userId 	= reqInfo.get().getReqUserId();
			lmpId 	= "ITSM";
		}

		rowData.put("LOGIN_ID", userId);
		rowData.put("LMPID", lmpId);

		srCommDao.callPrSrReqWfProcNext(rowData);
	}

	/**
	 * 요청서 접수 등의 단계 등록을 처리.
	 * @param Map<String, Object>
	 * @return Map<String, Object>
	 */
	public Map<String, Object> callPrSrRevProc(Map<String, Object> rowData) throws Exception {
		
		String tempSaveYn	= reqInfo.get().getTempSaveYn();	//임시저장 여부

		String userId			= StringUtil.safe(rowData.get("USER_ID"));
		String orgUserId	= "";
		String lmpId			= "";

		log.debug("::[callPrSrRevProc] reqInfo.get().getJobReserveYn() : " + reqInfo.get().getJobReserveYn());

		if("".equals(userId)) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				userId		= StringUtil.safe(sc.get().getScUserId());
			}else {
				userId		= StringUtil.safe(reqInfo.get().getReqUserId());
			}
		}
		
		if("N".equals(reqInfo.get().getJobReserveYn())) {
			orgUserId		= StringUtil.safe(sc.get().getScOrgUserId());
		}else {
			orgUserId		= StringUtil.safe(reqInfo.get().getReqUserId());
		}

		if("N".equals(reqInfo.get().getJobReserveYn())) {
			lmpId		= StringUtil.safe(sc.get().getScLmpId());
		}else {
			lmpId		= "ITSM";
		}

		log.debug("callPrSrRevProc :::::::: START  >> " + userId);
		//for(String colNm : rowData.keySet()) {
			//log.debug("[SRCommServiceImpl]-callPrSrRevProc rowData " + colNm + ":[" + rowData.get(colNm) + "]");
		//}
		
		/* Param으로 개발자가 넘겨줘야 할 필수 항목
		 * REQ_ID(요청서ID-필수), WF_PROC_CD(현재 접수의 진행단계-필수), GUBUN_NM(담당자의 명칭-필수아님),
		 * PROC_EXAM_OPIN(검토의견-필수), CEGR_ID(다음 처리자 지정일 때만 필수)
		 */
		if("".equals(StringUtil.safe(rowData.get("REQ_ID")))) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("접수 처리시 요청서ID[REQ_ID]가 누락되었습니다.");
			}
			throw new Exception("접수 처리시 요청서ID[REQ_ID]가 누락되었습니다.");
		}
		
		if("".equals(StringUtil.safe(rowData.get("WF_PROC_CD")))) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("접수 처리시 현재-접수진행단계[WF_PROC_CD]가 누락되었습니다.");
			}
			throw new Exception("접수 처리시 현재-접수진행단계[WF_PROC_CD]가 누락되었습니다.");
		}

		//log.debug("tempSaveYn=======>" + tempSaveYn);
		//log.debug("reqInfo.get().getSaveGubun()=======>" + reqInfo.get().getSaveGubun());
		//log.debug("SAVE_GUBUN" + rowData.get("SAVE_GUBUN"));

		if("".equals(StringUtil.safe(rowData.get("SAVE_GUBUN")))) {
			rowData.put("SAVE_GUBUN", "Y".equals(tempSaveYn) ? "TEMP" : reqInfo.get().getSaveGubun());
		}
		//rowData.put("SAVE_GUBUN", "Y".equals(tempSaveYn) ? "TEMP" : "REV");

		if("".equals(StringUtil.safe(rowData.get("REQ_ID")))) {
			rowData.put("REQ_ID", reqInfo.get().getReqId());
		}
		
		if("".equals(StringUtil.safe(rowData.get("WF_PROC_CD")))) {
			rowData.put("WF_PROC_CD", reqInfo.get().getWfProcCd());
		}
		log.debug("userId=======>" + userId);
		log.debug("ORG_USER_ID=======>" + orgUserId);

			rowData.put("USER_ID", userId);
			rowData.put("ORG_USER_ID", orgUserId);
			rowData.put("LOGIN_ID", userId);
			rowData.put("LMPID", lmpId);
		
		srCommDao.callPrSrRevProc(rowData);
		
		int outRtnCd = Integer.parseInt(StringUtil.safe(rowData.get("OUT_RTN_CD")));
		String outRtnMsg = StringUtil.safe(rowData.get("OUT_RTN_MSG"));

		log.debug("[SRCommServiceImpl]-save [ERROR] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
		log.debug("[SRCommServiceImpl]-save [ERROR] [REV] callPrSrRevProc  OUT_RTN_MSG:[" + outRtnMsg + "]");
		
		if(outRtnCd < 0) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg(outRtnMsg + "[ERR:" + outRtnCd + "]");
			}
			throw new Exception(outRtnMsg + "[ERR:" + outRtnCd + "]");
		}
		//else {
			//log.debug("[SRCommServiceImpl]-save [SUCC] [REV] callPrSrRevProc OUT_RTN_CD:[" + outRtnCd + "]");
			//log.debug("[SRCommServiceImpl]-save [SUCC] [REV] callPrSrRevProc  OUT_RTN_MSG:[" + outRtnMsg + "]");
		//}
		return rowData;
	}

	/**
	 * 요청서 화면 반려를 처리
	 * @param dsCond
	 * @return
	 */
	public void callPrScrnRtnProc(Map<String, Object> rowData) {
		srCommDao.callPrScrnRtnProc(rowData);
	}

	/**
	 * 요청서의 NEXT WF_PROC_CD를 구한다.
	 * @param String
	 * @param String
	 * @param String
	 * @return	 String
	 */
	public String getReqNextWfProcCd(String reqTmplatId, String reqTmplatVer, String wfProcCd) throws Exception {

		//log.debug("[SRCommServiceImpl]-getReqNextWfProcCd REQ_TMPLAT_ID[" + reqTmplatId + "] WF_PROC_CD[" + wfProcCd + "]");
		Map<String, Object> dsCond = new HashMap<>();
		dsCond.put("REQ_TMPLAT_ID", reqTmplatId);
		dsCond.put("REQ_TMPLAT_VER", reqTmplatVer);
		dsCond.put("WF_PROC_CD", wfProcCd);
		List<Map<String, Object>> resultData = srCommDao.selectNextWfProcCd(dsCond);

		//log.debug("[SRCommServiceImpl]-getReqNextWfProcCd resultData.size:[" + resultData + "]");
		
		if(resultData.size() == 1) {
			return StringUtil.safe(resultData.get(0).get("WF_PROC_CD"));

		}else {

			for (int i = 0; i < resultData.size(); i++) {

				String rtnWfProcCd = StringUtil.safe(resultData.get(i).get("WF_PROC_CD"));
				dsCond = new HashMap<>();
				dsCond.put("REQ_TMPLAT_ID", reqTmplatId);
				dsCond.put("REQ_TMPLAT_VER", reqTmplatVer);
				dsCond.put("WF_PROC_CD", rtnWfProcCd);

				Map<String, Object> wfProcMap = srCommDao.selectNextWfProcSvcInfo(dsCond);

				String skipYn = StringUtil.safe(wfProcMap.get("SKIP_YN"));
				String skipOpt = StringUtil.safe(wfProcMap.get("SKIP_OPT"));

				//log.debug("[SRCommServiceImpl]-getReqNextWfProcCd i:[" + i + "] skipYn:[" + skipYn + "] skipOpt:[" + skipOpt + "]");

				if("Y".equals(skipYn)) {

					Object rtnObj = executeServiceMethod(skipOpt, dsCond);	//단계 건너뛰기에 설정된 서비스를 호출하여 조건에 부합한지 체크

					//log.debug("[SRCommServiceImpl]-getReqNextWfProcCd i:[" + i + "] rtnObj:[" + rtnObj + "]");
					if (rtnObj != null) {
						if(rtnObj.getClass() == java.lang.Boolean.class) {
							
							if(!(Boolean) rtnObj) {
								return rtnWfProcCd;
							}
							
						}else {
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("단계 건너뛰기 체크시 Return값은 Boolean으로만 설정해야 합니다.");
							}
							throw new Exception("단계 건너뛰기 체크시 Return값은 Boolean으로만 설정해야 합니다.");
						}

					}else {
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							sc.get().setScSessionMsg("단계 건너뛰기 체크시 RETURN 된 데이터가 없습니다.");
						}
						throw new Exception("단계 건너뛰기 체크시 RETURN 된 데이터가 없습니다.");
					}

				}else {
					return rtnWfProcCd;
				}
			}
			return wfProcCd;
		}
	}

	/**
	 * 요청서 히스토리맵 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfHistMap(Map<String, Object> dsCond) {
		List<Map<String, Object>> resultData = srCommDao.selectWfHistMap(dsCond);
		return resultData;
	}
	
	/**
	 * 요청서 히스토리맵 내용 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfHistMapConts(Map<String, Object> dsCond) {
		List<Map<String, Object>> resultData = srCommDao.selectWfHistMapConts(dsCond);
		return resultData;
	}

	/**
	 * 요청서 히스토리맵 내용 Flow
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfHistFlow(Map<String, Object> dsCond) {
		List<Map<String, Object>> resultData = srCommDao.selectWfHistFlow(dsCond);
		return resultData;
	}

	/**
	 * 요청서 히스토리맵 내용 flow title
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfHistExtdNm(Map<String, Object> dsCond) {
		List<Map<String, Object>> resultData = srCommDao.selectWfHistExtdNm(dsCond);
		return resultData;
	}

	/**
	 * 요청서 히스토리맵 처리 상세 내용
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfHistProcCont(Map<String, Object> dsCond) {
		List<Map<String, Object>> resultData = srCommDao.selectWfHistProcCont(dsCond);
		return resultData;
	}

	/**
	 * [※UI에서 전처리/후처리 요청시 수행되는 메서드]
	 * WF_REQ_PROC_SVC_DT에 정의된 요청서 단계별 서비스로 호출하여 실행 후 결과를 반환한다.
	 * @param String	["SELECT", "SAVE"]
	 * @param String	["BF", "CU", "AF"]
	 * @param String	["FR", "BK"]
	 * @param DataSet
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> execWfProcSvc(String procGubun, String preGubun, String frBkGubun, DataSet formInfo, DataSetList dataSetList) throws Exception {

		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getTempReqId():[" + reqInfo.get().getTempReqId() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getReqId():[" + reqInfo.get().getReqId() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getReqTmplatId():[" + reqInfo.get().getReqTmplatId() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getReqTmplatVer():[" + reqInfo.get().getReqTmplatVer() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getWfProcCd():[" + reqInfo.get().getWfProcCd() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getWfFuncCd():[" + reqInfo.get().getWfFuncCd() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getNextWfProcCd():[" + reqInfo.get().getNextWfProcCd() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getNextWfFuncCd():[" + reqInfo.get().getNextWfFuncCd() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getReqStatCd():[" + reqInfo.get().getReqStatCd() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getReqUserId():[" + reqInfo.get().getReqUserId() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getCancelPossYn():[" + reqInfo.get().getCancelPossYn() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getSaveGubun():[" + reqInfo.get().getSaveGubun() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getTempSaveYn():[" + reqInfo.get().getTempSaveYn() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() procGubun:[" + procGubun + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() preGubun:[" + preGubun + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() frBkGubun:[" + frBkGubun + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getLastApprovalYn():[" + reqInfo.get().getLastApprovalYn() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getInDataset():[" + reqInfo.get().getInDataset() + "]");
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() reqInfo.get().getOutDataset():[" + reqInfo.get().getOutDataset() + "]");
		
		Map<String, Object> dsFormInfo = formInfo.getRowToMap(0);

		/*
		log.debug("[SRCommServiceImpl]-execWfProcSvc() " + 
				  "WF_PROC_CD:[" + dsFormInfo.get("WF_PROC_CD") + "] " +
				  "WF_FUNC_CD:[" + dsFormInfo.get("WF_FUNC_CD") + "] " +
				  "PROC_GUBUN:[" + procGubun + " ] " +
				  "PRE_GUBUN:[" + preGubun + "] " +
				  "FR_BK_GUBUN:[" + frBkGubun + "] "
		);
		
		for (int i = 0; i < dataSetList.size(); i++) {
			log.debug("[SRCommServiceImpl]-execWfProcSvc() i=[" + i + "] DS NAME:[" + dataSetList.get(i).getName() + "]");
			log.debug("[SRCommServiceImpl]-execWfProcSvc()\n" + dataSetList.get(i).saveXml());
		}

		for (int i = 0; i < formInfo.getColumnCount(); i++) {
			log.debug("[SRCommServiceImpl]-execWfProcSvc() " +
				"ColNm : " + formInfo.getColumn(i).getName() +
				" Value : " + formInfo.getString(0, formInfo.getColumn(i).getName())
			);
		}
		*/
		
		dsFormInfo.put("PROC_GUBUN", procGubun);	//구분[SELECT(조회시점), SAVE(저장 범주-REG:등록, REV:접수, APV:[개별]승인시점), SAVE-END([최종]승인시점), RTRN(반려시점)]
		//dsFormInfo.put("TEMP_YN", reqInfo.get().getTempSaveYn());	//구분[SELECT(조회시점), SAVE(저장 범주-REG:등록, REV:접수, APV:[개별]승인시점), SAVE-END([최종]승인시점), RTRN(반려시점)]
		
		//log.debug("[SRCommServiceImpl]-execWfProcSvc() preGubun : " + preGubun + " procGubun:" + procGubun);
		dsFormInfo.put("PRE_GUBUN", preGubun);		//전처리구분(BF:이전, CU:기본, AF:이후)

		if(!"".equals(frBkGubun)) {
			dsFormInfo.put("FR_BK_GUBUN", frBkGubun);	//전/후구분(FR:전, BK:후) ※PRE_GUBUN이 'CU'인 경우 사용
		}

		String saveGubun = StringUtil.safe(dsFormInfo.get("SAVE_GUBUN"));		
		log.debug("[SRCommServiceImpl]-execWfProcSvc() saveGubun:" + saveGubun);

		if(!"".equals(saveGubun)) {
			dsFormInfo.put("SAVE_GUBUN", saveGubun);
		}

		List<Map<String, Object>> result = srCommDao.selectReqProcSvcInfo(dsFormInfo);	//현재 진행 단계까지 WF프로세스 관리에 정의된 서비스 목록을 조회 

		List<Map<String, Object>> rtnDataObj = new ArrayList<Map<String,Object>>();
		
		String curWfProcCd = reqInfo.get().getWfProcCd();

		for (int i = 0; i < result.size(); i++) {

			Map<String, Object> rowData = result.get(i);
			
			String svcNm = StringUtil.safe(result.get(i).get("SVC_NM"));
			String[] svcArr = svcNm.split("/");
			
			String wfProcCd			= StringUtil.safe(rowData.get("WF_PROC_CD"));
			String incTempSaveYn	= StringUtil.safe(rowData.get("INC_TEMP_SAVE_YN"));	//임시저장포함여부
			String wfProcAgreeYn	= StringUtil.safe(rowData.get("WF_PROC_AGREE_YN"));	//단계일치여부			
			String tempSaveYn	= reqInfo.get().getTempSaveYn();
			
			boolean rowExec = false;
			
			if(!"SELECT".equals(procGubun)) {
			
				//임시저장인 경우
				if( ("Y".equals(tempSaveYn))) {
	
					//현재 단계가 테이블 등록 서비스의 단계와 일치할 경우만
					if("Y".equals(wfProcAgreeYn)) {
	
						if(curWfProcCd.equals(wfProcCd)) {
							
							//임시저장 포함일 경우만
							if("Y".equals(incTempSaveYn)) {
								rowExec = true;
							}
						}
	
					//단계 일치 여부 미체크
					}else {
	
						//임시저장 포함일 경우만
						if("Y".equals(incTempSaveYn)) {
							rowExec = true;
						}
					}
	
				//등록, 접수, 승인인 경우
				}else {
					
					//현재 단계가 테이블 등록 서비스의 단계와 일치할 경우만
					if("Y".equals(wfProcAgreeYn)) {
	
						if(curWfProcCd.equals(wfProcCd)) {
							rowExec = true;
						}
					}else {
						rowExec = true;
					}
				}

			}else {
				rowExec = true;
			}
				
			if(rowExec) {

			log.debug("[SRCommServiceImpl]-execWfProcSvc() svcNm:[" + svcNm + "]");

				if(svcArr.length == 3) {

					String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
		    		String classNm = path + "." + svcArr[1] + "ServiceImpl";
		    		Class svcClass = Class.forName(classNm);
	
		    		if(svcClass != null) {
	
		    			Method[] methodList = svcClass.getMethods();	//해당 ServiceImpl Clsss에 있는 Method 목록
			    		String[] paramClassNm = null;

			    		boolean isExistsMethod = false;
			    		
			    		for (int j = 0; j < methodList.length; j++) {
	
			    			//log.debug([SRCommServiceImpl]-execWfProcSvc() svcArr[1] + " " + (j+1) + ". method Name : " + methodList[j].getName());
			    			
			    			if(methodList[j].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우
			    				
			    				isExistsMethod = true;
	
			    				String inDsInfo = StringUtil.safe(rowData.get("IN_DATASET"));	//WF프로세스 관리에 정의한 서비스명 호출시 IN_DATASET
					    		
			    				Class<?>[] paramTypes = methodList[j].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
			    				
			    				//log.debug("[SRCommServiceImpl]-execWfProcSvc() " + svcNm + "의 매개변수 갯수 : [" + paramTypes.length + "]");	    				
				    			paramClassNm = new String[paramTypes.length];
				    			
				    			String[] inDsArr = null;
				    			
				    			boolean isEmptyInDs = true;	//단계 화면에 정의된 파라미터 데이터셋이 없는 경우
				    			
				    			if(!"".equals(inDsInfo)) {
					    			inDsArr = inDsInfo.split(",");
					    			isEmptyInDs = false;
	
				    			}else {
				    				inDsArr = new String[] {"dsFormInfo"};
				    			}
				    			
				    			//log.debug("[SRCommServiceImpl]-execWfProcSvc() inDsArr.length = " + inDsArr.length);
	
				    			for (int k = 0; k < paramTypes.length; k++) {
				    				paramClassNm[k] = paramTypes[k].getName();	//해당 METHOD의 매개변수 Class명을 구한다.
								}
	
				    			Class<?>[] paramClass = new Class<?>[paramClassNm.length];
					    		Object[] oParam = new Object[paramClassNm.length];
					    		
					    		for (int k = 0; k < paramClassNm.length; k++) {
									
					    			paramClass[k] = Class.forName(paramClassNm[k]);
					    			//log.debug("[SRCommServiceImpl]-execWfProcSvc " + (k + 1) + "번째 매개변수 : [" + paramClass[k].getName() + "]");
					    			
					    			if(inDsArr.length > k)
				    				{
					    				String dsNm = inDsArr[k];
				    					if(!isEmptyInDs)	dsNm += "_" + wfProcCd;		//설정한 데이터셋명에 진행단계를 붙여 화면에서 넘어온 데이터셋 정보와 이름을 맞춘다.
				    					
				    					//dataSetList.get(inDsArr[k]).
				    					int chkCnt = 0;
				    					for (int l = 0; l < dataSetList.size(); l++) {
											
				    						if(dsNm.equals(dataSetList.get(l).getName())) {
				    							chkCnt++;
				    							break;
				    						}
										}

				    					log.debug("[SRCommServiceImpl]-execWfProcSvc() chkCnt:{} REQ_TMPLAT_ID:{}", chkCnt, formInfo.getString(0, "REQ_TMPLAT_ID"));

				    					if(chkCnt == 0 && !"WFT250033".equals(formInfo.getString(0, "REQ_TMPLAT_ID"))) {
				    						
				    						log.debug("[SRCommServiceImpl]-execWfProcSvc() dataSetList.size():{}", dataSetList.size());

				    						dsNm = "";
				    						
				    						for (int l = 0; l < dataSetList.size(); l++) {
												
				    							String dsListNm = dataSetList.get(l).getName();
				    							log.debug("[SRCommServiceImpl]-execWfProcSvc() dsListNm:{}", dsListNm);
					    						if(dsListNm.indexOf(inDsArr[k]) > -1) {
					    							dsNm = dsListNm;
					    							break;
					    						}
											}
				    					}

				    					log.debug("[SRCommServiceImpl]-execWfProcSvc() inDsArr[k] : " + inDsArr[k] + " dsNm : " + dsNm);

				    					if("".equals(dsNm)) {

				    						if("sr/SRComm/selectRevProc".equals(svcNm) && inDsArr[k].indexOf("dsCond")> -1) {
				    							//continue;

					    					}else {
					    						if("N".equals(reqInfo.get().getJobReserveYn())) {
						    						sc.get().setScSessionMsg("SVC_NM:[" + svcNm + "] WF_PROC_CD:[" + wfProcCd + "]\n" +
						    															 "[" + procGubun + " / " + preGubun + " / " + frBkGubun + "]\n" +
						    															 "DATASET : [" + inDsArr[k] + "] 존재하지 않습니다.");
					    						}
					    						throw new Exception("SVC_NM:[" + svcNm + "] WF_PROC_CD:[" + wfProcCd + "]\n" +
														   						"[" + procGubun + " / " + preGubun + " / " + frBkGubun + "]\n" +
														   						"DATASET : [" + inDsArr[k] + "] 존재하지 않습니다.");
					    					}
				    						
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() svcNm:[" + svcNm + "]");
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() procGubun:[" + procGubun + "]");
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() preGubun:[" + preGubun + "]");
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() frBkGubun:[" + frBkGubun + "]");
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() DS NAME:[" + inDsArr[k] + "]");				    						
				    					}
				    					
			    						DataSet paramDs = null;
			    						
			    						if("sr/SRComm/selectRevProc".equals(svcNm) && inDsArr[k].indexOf("dsCond")> -1) {
			    							DataSet dsCond = new DataSet("dsCond");			    							
			    							dsCond.setChangeStructureWithData(true);
			    							dsCond.addColumn("REQ_ID", 1);
			    							dsCond.addColumn("WF_PROC_CD", 1);
			    							dsCond.setChangeStructureWithData(false);
			    							dsCond.newRow();
			    							dsCond.set(0, "REQ_ID",			reqInfo.get().getReqId());
			    							dsCond.set(0, "WF_PROC_CD", wfProcCd);				    						
			    							paramDs = dsCond;

				    					}else {
				    						paramDs = dataSetList.get(dsNm);
				    					}		
			    						
			    						Map<String, Object> inMap = null;
			    						List<Map<String, Object>> inList = null;
			    						
			    						//if(paramDs == null) {
			    							//log.debug("[SRCommServiceImpl]-execWfProcSvc() paramDs IS NULL inDsArr[k] : " + inDsArr[k]);
			    						//}

			    						log.debug("[SRCommServiceImpl]-execWfProcSvc()  paramDs : " + paramDs.saveXml());
			    						log.debug("[SRCommServiceImpl]-execWfProcSvc()  paramClass[" + k + "] : " + paramClass[k]);
			    						log.debug("[SRCommServiceImpl]-execWfProcSvc()  paramClassNm[" + k + "]:[" + paramClassNm[k] + "]");
	
				    					if(paramClass[k] == java.util.Map.class || paramClass[k] == java.util.HashMap.class) {
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() Map paramDs.getColumnCount() : " + paramDs.getColumnCount());
				    						inMap = new HashMap<>();
	
				    						if(paramDs != null) {

					    						for (int l = 0; l < paramDs.getColumnCount(); l++) {
					    	    					String colNm = paramDs.getColumn(l).getName();
					    	    					inMap.put(colNm, paramDs.getString(0, colNm));
					    						}
					    						oParam[k] = inMap;
				    						}
	
				    					}else if(paramClass[k] == java.util.List.class || paramClass[k] == java.util.ArrayList.class) {
				    						
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() List paramDs.getColumnCount() : " + paramDs.getColumnCount());
				    						inList = new ArrayList<Map<String,Object>>();
				    						
				    						if(paramDs != null) {

					    						for (int l = 0; l < paramDs.getRowCount(); l++) {
					    							
					    							Map<String, Object> rowMap = new HashMap<>();
					    							
					    							for (int m = 0; m < paramDs.getColumnCount(); m++) {
					    								String colNm = paramDs.getColumn(m).getName();
					    								rowMap.put(colNm, paramDs.getString(l, colNm));
					    							}
					    							inList.add(rowMap);
					    						}
					    						oParam[k] = inList;
				    						}
	
				    					}
				    					//else {
				    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() ELSE TypeName:[" + paramClass[k].getTypeName() + "]");
				    					//}
				    				}
								}
	
					    		Method method = svcClass.getMethod(svcArr[2], paramClass);
	
					    		if(method == null) {
					    			if("N".equals(reqInfo.get().getJobReserveYn())) {
					    				sc.get().setScSessionMsg("[" + svcNm + "] 존재하지 않습니다.");
					    			}
					    			throw new Exception("[SRCommServiceImpl]-execWfProcSvc() svcNm:[" + svcNm + "] 존재하지 않습니다.");
					    		}
	
					    		//log.debug("[SRCommServiceImpl]-execWfProcSvc() 매개변수 갯수:[" + oParam.length + "]");
					    		//log.debug("[SRCommServiceImpl]-execWfProcSvc() method.getReturnType().getName():[" + method.getReturnType().getName() + "]");
					    		Object retObj = null;
					    		
					    		try {

					    			Object object  = BeanUtils.getBean(svcArr[1] + "ServiceImpl");				    			
					    			//log.debug("[SRCommServiceImpl]-execWfProcSvc() object:[" + object + "]");
					    			retObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행
					    			log.debug("retObj = method.invoke svcArr[1]:{}", svcArr[1]);

					    		}catch(Exception e) {
					    			e.printStackTrace();
					    			log.debug("[catch] retObj = method.invoke svcArr[1]:{}", svcArr[1]);
					    			if("N".equals(reqInfo.get().getJobReserveYn())) {
					    				sc.get().setScSessionMsg("[" + svcNm + "] 실행시 오류");
					    			}
					    			throw new Exception("[SRCommServiceImpl]-execWfProcSvc() svcNm:[" + svcNm + "]");
					    		}
	
		    					if("java.util.List".equals(method.getReturnType().getName())) {
		    						List<Map<String, Object>> A = (List<Map<String, Object>>) retObj;
		    						
		    						//if(A == null || A.size() == 0) {
		    							//log.debug("[SRCommServiceImpl]-execWfProcSvc() SIZE====0");
		    						//}
		    					}
	
		    					if(retObj != null) {
	
		    						Map<String, Object> outMap = new HashMap<>();
		    						String outDsNm = StringUtil.safe(rowData.get("OUT_DATASET") + "_" + wfProcCd);
		    						
		    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] outDsNm:[" + outDsNm + "] retObj.getClass():[" + retObj.getClass().getName() + "]");
		    						//log.debug("[SRCommServiceImpl]-execWfProcSvc() [outDsNm] :::: " + outDsNm);

		    						if(retObj.getClass() == java.util.HashMap.class || retObj.getClass() == java.util.Map.class) {
		    	    					Map<String, Object> resultData = (Map<String, Object>) retObj;
		    	    					outMap.put(outDsNm, resultData);
	
		    	    				}else if(retObj.getClass() == java.util.List.class || retObj.getClass() == java.util.ArrayList.class) {
	
		    	    					List<Map<String, Object>> resultData = (List<Map<String, Object>>) retObj;
		    	    					
//		    	    					String[] keys = resultData.stream().map(Map::keySet).flatMap(Set::stream).toArray(String[]::new);
	
		    	    					//log.debug("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] outDsNm:[" + outDsNm + "] resultData.size():[ " + resultData.size() + "] keys.length:[" + keys.length + "]");
		    	    					
		    	    					//for (int n = 0; n < keys.length; n++) {
											//log.debug("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] outDsNm:[" + outDsNm + "] col:[" + keys[n] + "]");
										//}

		    	    					for (int k = 0; k < resultData.size(); k++) {

		    	    						for(String colNm : resultData.get(k).keySet()) {

		    	    							if(resultData.get(k).get(colNm) != null) {

		    	    								String colType = resultData.get(k).get(colNm).getClass().toString().toUpperCase();
		    	    								if(colType.indexOf("CLOB") > -1) {

		    	    									Clob clob = (Clob) resultData.get(k).get(colNm);

		    	    	    							if(clob != null) {
		    	    	    								Reader reader = clob.getCharacterStream();
		    	    	    								String str = IOUtils.toString(reader);
		    	    	    								if(reader != null)	reader.close();
		    	    	    								resultData.get(k).put(colNm, str);
		    	    	    							}
		    	    								}
		    	    							}
		    								}
		    							}
		    	    					outMap.put(outDsNm, resultData);
	
		    	    				}else if(retObj.getClass() == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
		    	    					MapMetaData metaData = (MapMetaData) retObj;
		    	    					outMap.put(outDsNm, metaData);
		    	    				}
		    		    			rtnDataObj.add(outMap);
		    		    		}
		    					//else {
		    		    			//log.debug("[SRCommServiceImpl]-execWfProcSvc() retObj null");
		    		    		//}
				    			break;
			    			}
			    		}
			    		
			    		if(!isExistsMethod) {
			    			if("N".equals(reqInfo.get().getJobReserveYn())) {
			    				sc.get().setScSessionMsg("[" + svcNm + "] 정의되지 않은 Method입니다.");
			    			}
			    			log.debug("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] 정의되지 않은 Method입니다.");
				       		throw new Exception("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] 정의되지 않은 Method입니다.");
			    		}

		    		}else {
		    			log.debug("[SRCommServiceImpl]-execWfProcSvc() svcClass:[{}]", svcClass);
		    		}

		       	}else {

		       		if("N".equals(reqInfo.get().getJobReserveYn())) {
		       			sc.get().setScSessionMsg("[" + svcNm + "] 서비스명이 올바르게 지정되지 않았습니다.");
		       		}
		       		log.debug("[SRCommServiceImpl]-execWfProcSvc() [" + svcNm + "] 서비스명이 올바르게 지정되지 않았습니다.");
		       		throw new Exception("[SRCommServiceImpl]-[" + svcNm + "] 서비스명이 올바르게 지정되지 않았습니다.");
		       	}
			}
		}
		return rtnDataObj;
	}

	/**
	 * WF_REQ_PROC_SVC_DT에 정의된 요청서 단계별 서비스로 호출하여 실행 후 결과를 반환한다.
	 * @param DataSet
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> execWfSelectRegTblInfo(DataSet formInfo) throws Exception {

		Map<String, Object> dsFormInfo = formInfo.getRowToMap(0);
		dsFormInfo.put("GUBUN", "SELECT");
		List<Map<String, Object>> result = srCommDao.selectReqRegTblInfo(dsFormInfo);	//요청서 등록 화면 관련 테이블 목록 조회

		//log.debug("[SRCommServiceImpl]-execWfSelectRegTblInfo() result.size()=" + result.size());

		List<Map<String, Object>> rtnDataObj = new ArrayList<Map<String,Object>>();

		for (int i = 0; i < result.size(); i++) {

			Map<String, Object> outMap = new HashMap<>();
			
			Map<String, Object> rowData = result.get(i);
			
			String datasetNm = StringUtil.safe(rowData.get("DATASET_NM"));
			String wfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));

			Clob cSelectQuery = (Clob) rowData.get("SELECT_QUERY");

			if(cSelectQuery != null) {

				Reader reader = cSelectQuery.getCharacterStream();
				String selectQueryStr = IOUtils.toString(reader);
				String str = IOUtils.toString(reader);
				if(reader != null)	reader.close();

				if(!"".equals(selectQueryStr)) {

					if(selectQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("SELECT") || selectQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("WITH")) {
						dsFormInfo.put("QUERY_STRING", selectQueryStr);
						List<Map<String, Object>> resultData = srCommDao.execSelectQueryString(dsFormInfo);
						
						//log.debug("[SRCommServiceImpl]-execWfSelectRegTblInfo()-execSelectQueryString() DATASET_NM:[" + datasetNm + "] wfProcCd : [" + wfProcCd + "] resultData.size()=" + resultData.size());

						for (int j = 0; j < resultData.size(); j++) {
							
							for(String colNm : resultData.get(j).keySet()) {

								if(resultData.get(j).get(colNm) != null) {
									
									String colType = resultData.get(j).get(colNm).getClass().toString().toUpperCase();
									if(colType.indexOf("CLOB") > -1) {
										
										Clob clobCol = (Clob) resultData.get(j).get(colNm);
		    							
		    							if(clobCol != null) {
		    								Reader reader1 = clobCol.getCharacterStream();
		    								String col = IOUtils.toString(reader1);
		    								if(reader1 != null)	reader1.close();
		    								resultData.get(j).put(colNm, col);
		    							}

									}else {
										log.debug("[execWfSelectRegTblInfo] " + datasetNm + "_" + wfProcCd + " row : " + j + " colNm : " + colNm + " val : " + resultData.get(j).get(colNm));
									}
								}
							}
						}

						log.debug("[SRCommServiceImpl]-execWfSelectRegTblInfo() " + datasetNm + "_" + wfProcCd + " resultData.size() : " + resultData.size());
						outMap.put(datasetNm + "_" + wfProcCd, resultData);	//"_WF_PROC_1000"
						rtnDataObj.add(outMap);
						
					}else {
						
						if("N".equals(reqInfo.get().getJobReserveYn())) {
							sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT]문이 올바르지 않습니다.");
						}
						log.debug("[SRCommServiceImpl]-execWfSelectRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT]문이 올바르지 않습니다.");
						throw new Exception("[SRCommServiceImpl]-execWfSelectRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT]문이 올바르지 않습니다.");
					}
					
				}else {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT] SQL이 존재하지 않습니다.");
					}
					log.debug("[SRCommServiceImpl]-execWfSelectRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT] SQL이 존재하지 않습니다.");
					throw new Exception("[SRCommServiceImpl]-execWfSelectRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SELECT] SQL이 존재하지 않습니다.");
				}
			}
		}
		return rtnDataObj;
	}
	
	/**
	 * WF_REQ_PROC_SVC_DT에 정의된 요청서 단계별 서비스로 호출하여 실행 후 결과를 반환한다.
	 * @param DataSetList
	 * @return void
	 */
	public void execWfSaveRegTblInfo(DataSetList dataSetList) throws Exception {

		DataSet dsFormInfo = dataSetList.get("dsFormInfo");
		/*
		for (int i = 0; i < dsFormInfo.getColumnCount(); i++) {
			log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() " +
				"ColNm : " + dsFormInfo.getColumn(i).getName() +
				" Value : " + dsFormInfo.getString(0, dsFormInfo.getColumn(i).getName())
			);
		}
		*/

		Map<String, Object> formInfo = dsFormInfo.getRowToMap(0);
		formInfo.put("GUBUN", "SAVE");
		List<Map<String, Object>> result = srCommDao.selectReqRegTblInfo(formInfo);	//요청서 등록 화면 관련 테이블 목록 조회 

		//log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() result.size()=" + result.size());

		String curWfProcCd = reqInfo.get().getWfProcCd();
		
		for (int i = 0; i < result.size(); i++) {

			Map<String, Object> rowData = result.get(i);
			
			String wfProcCd				= StringUtil.safe(rowData.get("WF_PROC_CD"));
			String incTempSaveYn	= StringUtil.safe(rowData.get("INC_TEMP_SAVE_YN"));	//임시저장포함여부
			String wfProcAgreeYn		= StringUtil.safe(rowData.get("WF_PROC_AGREE_YN"));	//단계일치여부
			
			String tempSaveYn	= reqInfo.get().getTempSaveYn();
			String datasetNm	= StringUtil.safe(rowData.get("DATASET_NM"));
			String tblNm			= StringUtil.safe(rowData.get("TBL_NM"));
			DataSet ds				= dataSetList.get(datasetNm + "_" + wfProcCd);
			
			boolean rowExec = false;
			
			//임시저장인 경우
			if( ("Y".equals(tempSaveYn))) {

				//현재 단계가 테이블 등록 서비스의 단계와 일치할 경우만
				if("Y".equals(wfProcAgreeYn)) {

					if(curWfProcCd.equals(wfProcCd)) {
						//임시저장 포함일 경우만
						if("Y".equals(incTempSaveYn)) {
							rowExec = true;
						}
					}

				//단계 일치 여부 미체크
				}else {

					//임시저장 포함일 경우만
					if("Y".equals(incTempSaveYn)) {
						rowExec = true;
					}
				}

			//등록, 접수, 승인인 경우
			}else {
				
				//현재 단계가 테이블 등록 서비스의 단계와 일치할 경우만
				if("Y".equals(wfProcAgreeYn)) {

					if(curWfProcCd.equals(wfProcCd)) {
						rowExec = true;
					}
				}else {
					rowExec = true;
				}
			}

			log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() i=" + i + " tempSaveYn : " + tempSaveYn + " curWfProcCd=>" + curWfProcCd + " wfProcCd=>" + wfProcCd + " incTempSaveYn=>" + incTempSaveYn + " wfProcAgreeYn=>" + wfProcAgreeYn);
			log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() i=" + i + " rowExec===================>" + rowExec);
			
			if(rowExec) {

				if(ds == null) {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SAVE] DATASET[" + datasetNm + "]이 존재하지 않습니다.");
					}
					log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SAVE] DATASET[" + datasetNm +"]이 존재하지 않습니다.");
					throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [SAVE] DATASET[" + datasetNm + "]이 존재하지 않습니다.");

				}else {
					
					log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() DsName :[" + ds.getName() + "] ds.getRowCount() : " + ds.getRowCount());
					//String UPMU_ID1 = "";
					//String UPMU_ID2 = "";
					//String UPMU_ID3 = "";
					//String WORK_USER_ID = "";
					
					for (int j = 0; j < ds.getRowCount(); j++) {
						for (int k = 0; k < ds.getColumnCount(); k++) {
							String colNm = ds.getColumn(k).getName();
							String colVal = ds.getString(j, k);
							//if("UPMU_ID1".equals(colNm)) {
								//UPMU_ID1 = colVal;
							//}else if("UPMU_ID2".equals(colNm)) {
								//UPMU_ID2 = colVal;
							//}else if("UPMU_ID3".equals(colNm)) {
								//UPMU_ID3 = colVal;
							//}else if("WORK_USER_ID".equals(colNm)) {
								//WORK_USER_ID = colVal;
							//}
							log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() DB TABLE [" + rowData.get("TBL_NM") + "] [" + ds.getName() + "] " + (j+1) + "행 colNm:[" + colNm + "] colVal:[" + colVal + "]");
						}
					}
				}

				Clob iClob = (Clob) rowData.get("INSERT_QUERY");
				Clob uClob = (Clob) rowData.get("UPDATE_QUERY");
				Clob dClob = (Clob) rowData.get("DELETE_QUERY");

				String insertQueryStr = "";
				String updateQueryStr = "";
				String deleteQueryStr = "";
				
				if(iClob != null) {
					Reader reader = iClob.getCharacterStream();
					insertQueryStr = IOUtils.toString(reader);
					if(reader != null)	reader.close();
				}				
//				log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() insertQueryStr\n" + insertQueryStr);
				
				if(uClob != null) {
					Reader reader = uClob.getCharacterStream();
					updateQueryStr = IOUtils.toString(reader);
					if(reader != null)	reader.close();
				}
//				log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() updateQueryStr\n" + updateQueryStr);
				
				if(dClob != null) {
					Reader reader = dClob.getCharacterStream();
					deleteQueryStr = IOUtils.toString(reader);
					if(reader != null)	reader.close();
				}
//				log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() deleteQueryStr\n" + deleteQueryStr);

				for (int j = 0; j < ds.getRowCount(); j++) {

					Map<String, Object> dsRow = ds.getRowToMap(j);
					String rowFlag = StringUtil.safe(dsRow.get("ROWFLAG"));
					
					log.debug("i=" + i + " rowFlag : " + rowFlag);
					String userId 	= sc.get().getScUserId();
					String lmpId 	= sc.get().getScLmpId();
					
					dsRow.put("TEMP_REQ_ID", StringUtil.safe(dsFormInfo.getString(0, "TEMP_REQ_ID")));
					dsRow.put("FRID", userId);
					dsRow.put("LMID", userId);
					dsRow.put("LMPID", lmpId);
					
					boolean isConf = false;
					String[] srBaseInfoSaveTargetTblNmArr = new String[] {"WF_SRM", "WF_CHM", "WF_PBM", "WF_ICM", "WF_BACH"};
					
					if("I".equals(rowFlag)) {

						if(!"".equals(insertQueryStr)) {

							if(insertQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("INSERT") || insertQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("MERGE") ||
							   insertQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("DECLARE") || insertQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("BEGIN")) {
	
								try {
									dsRow.put("QUERY_STRING", insertQueryStr);
									srCommDao.execQueryString(dsRow);

								}catch(Exception e) {
									e.printStackTrace();
								}
								
								try {
									//if(Arrays.stream(srBaseInfoSaveTargetTblNmArr).anyMatch(x -> x == tblNm))	isConf = true;
									if( Arrays.asList(srBaseInfoSaveTargetTblNmArr).contains(tblNm) ) isConf = true;
								}catch(Exception e) {
									e.printStackTrace();
								}
	
							}else {
								
								if("N".equals(reqInfo.get().getJobReserveYn())) {
									sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT]문이 올바르지 않습니다.");
								}
								log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT]문이 올바르지 않습니다.");
								throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT]문이 올바르지 않습니다.");
							}

						}else {
							
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT] SQL이 존재하지 않습니다.");
							}
							log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT] SQL이 존재하지 않습니다.");
							throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [INSERT] SQL이 존재하지 않습니다.");
						}
						
					}else if("U".equals(rowFlag)) {
	
						if(!"".equals(updateQueryStr)) {
						
							if(updateQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("UPDATE") || updateQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("MERGE") ||
							   updateQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("DECLARE") || updateQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("BEGIN")
							  ) {
								dsRow.put("QUERY_STRING", updateQueryStr);
								srCommDao.execQueryString(dsRow);
								
								
								//if(Arrays.stream(srBaseInfoSaveTargetTblNmArr).anyMatch(x -> x == tblNm))	isConf = true;
								if( Arrays.asList(srBaseInfoSaveTargetTblNmArr).contains(tblNm) ) isConf = true;
								
							}else {
								if("N".equals(reqInfo.get().getJobReserveYn())) {
									sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE]문이 올바르지 않습니다.");
								}
								log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE]문이 올바르지 않습니다.");
								throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE]문이 올바르지 않습니다.");
							}

						}else {
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE] SQL이 존재하지 않습니다.");
							}
							log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE] SQL이 존재하지 않습니다.");
							throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [UPDATE] SQL이 존재하지 않습니다.");
						}
	
					}else if("D".equals(rowFlag)) {
	
						if(!"".equals(deleteQueryStr)) {

							if(deleteQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("DELETE") || deleteQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("UPDATE") || deleteQueryStr.replaceAll("\\s", "").toUpperCase().startsWith("BEGIN")) {
								dsRow.put("QUERY_STRING", deleteQueryStr);
								srCommDao.execQueryString(dsRow);
		
							}else {
								if("N".equals(reqInfo.get().getJobReserveYn())) {
									sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE]문이 올바르지 않습니다.");
								}
								log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE]문이 올바르지 않습니다.");
								throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE]문이 올바르지 않습니다.");
							}

						}else {
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE] SQL이 존재하지 않습니다.");
							}
							log.debug("[SRCommServiceImpl]-execWfSaveRegTblInfo() 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE] SQL이 존재하지 않습니다.");
							throw new Exception("[SRCommServiceImpl]-execWfSaveRegTblInfo 요청서 등록 테이블[" + StringUtil.safe(rowData.get("TBL_NM")) + "] 등록된 [DELETE] SQL이 존재하지 않습니다.");
						}
					}

//					log.debug("tblNm : " + tblNm + " isConf : " + isConf);
//					if(isConf) {
//
//						for (String colNm : rowData.keySet()) {
//
//							if("REQ_WISH_SDT".equals(colNm)) {
//								dsRow.put("REQ_WISH_DT", dsRow.get(colNm));
//
//							}else if("REQ_WISH_STIME".equals(colNm)) {
//								dsRow.put("REQ_WISH_TIME", dsRow.get(colNm));
//							}
//						}
//						sr0000Dao.updateWfColInfo(dsRow);
//					}
				}
			}
		}
	}

	/** (※ 해당 메서드 사용중인 내역은 수정 후 아래의 오버라이드 메서드로 변환 후 삭제 할 예정)
	 * 다음 단계 진행시 다음에 처리할 담당자 또는 결재자를 등록 처리 한다.
	 * @param Map<String, Object>
	 * @return void
	 */
	public void procReqCgerDt(Map<String, Object> mapFormInfo) throws Exception {
		
		DataSet dsFormInfo = GlobalReqInfo.getDsReqInfo(reqInfo, sc, mapFormInfo);
		
		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_TMPLAT_ID", dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
		condMap.put("REQ_TMPLAT_VER", dsFormInfo.getString(0, "REQ_TMPLAT_VER"));

		//WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회
		List<Map<String, Object>> wfReqTmplatProcDt = wf0120wDao.selectProc(condMap);
		
		String nextWfProcCd = dsFormInfo.getString(0, "NEXT_WF_PROC_CD");
		String nextWfFuncCd = dsFormInfo.getString(0, "NEXT_WF_FUNC_CD");

		/*
		if("".equals(nextWfProcCd)) {
			throw new Exception("procReqCgerDt() 처리시 NEXT_WF_PROC_CD(다음 단계)[" + nextWfProcCd + "]가 존재하지 않습니다.");
		}
		
		if("".equals(nextWfFuncCd)) {
			throw new Exception("procReqCgerDt() 처리시 NEXT_WF_FUNC_CD(다음 단계 기능)[" + nextWfFuncCd + "]가 존재하지 않습니다.");
		}
		log.debug("[SRCommServiceImpl]-procReqCgerDt nextWfProcCd:[" + nextWfProcCd + "] nextFuncCd:[" + nextWfFuncCd + "]");
		*/

		//현재 처리가 만족도조사 진행단계인 경우만 접수 내역을 자동 등록해준다.
		if("WF_PROC_9020".equals(nextWfProcCd)) {

			Map<String, Object> reqUserMap = new HashMap<>();
			reqUserMap.put("REQ_ID", mapFormInfo.get("REQ_ID"));
			reqUserMap.put("WF_PROC_CD", nextWfFuncCd);
			reqUserMap.put("WF_FUNC_NM", "요청자");
			reqUserMap.put("USER_ID", mapFormInfo.get("REQ_USER_ID"));
			reqUserMap.put("LMID", sc.get().getScUserId());
			reqUserMap.put("LMPID", sc.get().getScLmpId());
			srCommDao.insertSrCgerDt(reqUserMap);
			
		}else {
		
			//다음 단계 처리가 검토/담당자인 경우
			if("WF_FUNC_02".equals(nextWfFuncCd) || "WF_FUNC_04".equals(nextWfFuncCd)) {
	
				for (int i = 0; i < wfReqTmplatProcDt.size(); i++) {
					
					Map<String, Object> rowData = wfReqTmplatProcDt.get(i);
					String tmpWfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));
					String tmpWfFuncCd = StringUtil.safe(rowData.get("FUNC"));
					String funcNm = "";
					
					if("WF_FUNC_02".equals(nextWfFuncCd)) {
						funcNm = StringUtil.safe(rowData.get("FUNC_NM"));
					}else if("WF_FUNC_04".equals(nextWfFuncCd)) {
						funcNm = StringUtil.safe(rowData.get("CGER_NM"));
					}
	
					//log.debug("[SRCommServiceImpl]-procReqCgerDt() i=" + i + " tmpWfProcCd:[" + tmpWfProcCd + "] tmpWfFuncCd:[" + tmpWfFuncCd + "] funcNm :[" + funcNm + "]");
	
					if(tmpWfProcCd.equals(nextWfProcCd)) {	// && tmpWfFuncCd.equals(nextFuncCd)
	
						String cgerFuncTypeCd = "";
	
						if("WF_FUNC_02".equals(nextWfFuncCd)) {			//다음 단계 처리가 검토인 경우
							cgerFuncTypeCd = StringUtil.safe(rowData.get("FUNC_TYPE_CD"));
	
						}else if("WF_FUNC_04".equals(nextWfFuncCd)) {	//다음 단계 처리가 담당자인 경우
							cgerFuncTypeCd = StringUtil.safe(rowData.get("CGER_TYPE_CD"));
						}
	
						//log.debug("[SRCommServiceImpl]-procReqCgerDt() cgerFuncTypeCd:[" + cgerFuncTypeCd + "]");
	
						condMap = new HashMap<>();
						condMap.put("REQ_TMPLAT_ID", dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
						condMap.put("REQ_TMPLAT_VER", dsFormInfo.getString(0, "REQ_TMPLAT_VER"));
						condMap.put("WF_PROC_CD", nextWfProcCd);		//다음단계
	
						if("01".equals(cgerFuncTypeCd)) {	//사람 지정인 경우

							List<Map<String, Object>> wfReqTemplatCgerHt = wf0120wDao.selectWfReqTmplatCgerHt(condMap);	//담당자/검토자 지정 대상자								

							insertSrCommReqCgerDt(dsFormInfo.getString(0, "REQ_ID"), nextWfProcCd, wfReqTemplatCgerHt);	//WF 프로세스에 등록된 담당자를 등록

						}else if("02".equals(cgerFuncTypeCd)) {	//서비스 지정인 경우

							List<Map<String, Object>> wfReqTemplatCgerSvcHt = wf0120wDao.selectWfReqTmplatCgerSvcHt(condMap);	//담당자/검토자 서비스

							if(wfReqTemplatCgerSvcHt.size() == 1) {

								String cgerSvcNm = StringUtil.safe(wfReqTemplatCgerSvcHt.get(0).get("JAVA_SVC_NM"));
							
								//log.debug("[SRCommServiceImpl]-procReqCgerDt() dsFormInfo\n" + dsFormInfo.saveXml());

								DataSetList dsList = new DataSetList();
								DataSet dsCgerCond = new DataSet("dsCgerCond");
								dsCgerCond.copyFrom(dsFormInfo);
								//log.debug("[SRCommServiceImpl]-procReqCgerDt() dsCgerCond\n" + dsCgerCond.saveXml());

								boolean isExistsNextWfProcCdCol = false;
								boolean isExistsNextWfFuncCdCol = false;

								if(dsCgerCond != null) {

									for (int j = 0; j < dsCgerCond.getColumnCount(); j++) {

										if("NEXT_WF_PROC_CD".equals(dsCgerCond.getColumn(j).getName())) {
											isExistsNextWfProcCdCol = true;
										}

										if("NEXT_WF_FUNC_CD".equals(dsCgerCond.getColumn(j).getName())) {
											isExistsNextWfFuncCdCol = true;
										}
									}

									if(!isExistsNextWfProcCdCol || !isExistsNextWfFuncCdCol) {
										dsCgerCond.setChangeStructureWithData(true);

										if(!isExistsNextWfProcCdCol) {
											dsCgerCond.addColumn("NEXT_WF_PROC_CD", 1);
										}

										if(!isExistsNextWfFuncCdCol) {
											dsCgerCond.addColumn("NEXT_WF_FUNC_CD", 1);
										}

										dsCgerCond.setChangeStructureWithData(false);
									}
									//log.debug("[SRCommServiceImpl]-procReqCgerDt() dsCgerCond\n" + dsCgerCond.saveXml());

									dsCgerCond.set(0, "NEXT_WF_PROC_CD", nextWfProcCd);
									dsCgerCond.set(0, "NEXT_WF_FUNC_CD", nextWfFuncCd);
								}
								dsList.add(dsCgerCond);
	
								Object rtnCger = executeServiceMethod(cgerSvcNm, dsList, "dsCgerCond");
								
								log.debug("[SRCommServiceImpl]-procReqCgerDt() rtnCger.getClass().getName() :::::::::::::::::::::" + rtnCger.getClass().getName());
								
								List<Map<String, Object>> cgerList = new ArrayList<Map<String,Object>>();
								
								if(rtnCger.getClass() == java.util.Map.class || rtnCger.getClass() == java.util.HashMap.class) {
									cgerList.add((Map<String, Object>) rtnCger);
					
								}else if(rtnCger.getClass() == java.util.List.class || rtnCger.getClass() == java.util.ArrayList.class) {
									cgerList = (List<Map<String, Object>>) rtnCger;
								}
								
								log.debug("dsFormInfo.getString(0, \"REQ_ID\") : " + dsFormInfo.getString(0, "REQ_ID"));
								log.debug("[SRCommServiceImpl]-procReqCgerDt() cgerList.size():::::::::::::::::::::::::::::::::::::::>" + cgerList.size());
								insertSrCommReqCgerDt(dsFormInfo.getString(0, "REQ_ID"), nextWfProcCd, cgerList);	//WF 프로세스에 등록된 담당자를 등록
	
							}else if(wfReqTemplatCgerSvcHt.size() == 0) {
								if("N".equals(reqInfo.get().getJobReserveYn())) {
									sc.get().setScSessionMsg("다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명을 가져올 수 없습니다.");
								}
								log.debug("[SRCommServiceImpl]-procReqCgerDt() 다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명을 가져올 수 없습니다.");
								throw new Exception("다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명을 가져올 수 없습니다.");
	
							}else {
								if("N".equals(reqInfo.get().getJobReserveYn())) {
									sc.get().setScSessionMsg("다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명 정의가 올바르지 않습니다.");
								}
								log.debug("[SRCommServiceImpl]-procReqCgerDt() 다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명 정의가 올바르지 않습니다.");
								throw new Exception("다음 단계[" + nextWfProcCd + "] 담당자 처리가 서비스인 경우 처리할 서비스명 정의가 올바르지 않습니다.");
							}
	
						}else if("03".equals(cgerFuncTypeCd)) {	//역할자 지정인 경우
	
							Map<String, Object> dsCond = new HashMap<String, Object>();
							dsCond.put("REQ_TMPLAT_ID", dsFormInfo.getString(0, "REQ_TMPLAT_ID"));
							dsCond.put("REQ_TMPLAT_VER", dsFormInfo.getString(0, "REQ_TMPLAT_VER"));
							dsCond.put("NEXT_WF_PROC_CD", nextWfProcCd);
	
							List<Map<String, Object>> fommAuthExtdMtUser = srCommDao.selectAuthExtdUser(dsCond);
							
							if(fommAuthExtdMtUser.size() == 0) {
								//sc.get().setScSessionMsg("다음 단계[" + nextWfProcCd + "] 담당자 역할자 등록된 사용자가 존재하지 않습니다.");
								//throw new Exception("다음 단계[" + nextWfProcCd + "] 담당자 역할자 등록된 사용자가 존재하지 않습니다.");
								
							}else {
							
								for (int j = 0; j < fommAuthExtdMtUser.size(); j++) {
									fommAuthExtdMtUser.get(j).put("WF_FUNC_CD", nextWfFuncCd);
									fommAuthExtdMtUser.get(j).put("WF_FUNC_NM", funcNm);
								}
								insertSrCommReqCgerDt(dsFormInfo.getString(0, "REQ_ID"), nextWfProcCd, fommAuthExtdMtUser);	//WF 프로세스에 등록된 담당자를 등록
							}

						}else {
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("다음 단계[" + nextWfProcCd + "] 담당자 설정이 올바르게 지정되지 않았습니다.");
							}
							log.debug("[SRCommServiceImpl]-procReqCgerDt() 다음 단계[" + nextWfProcCd + "] 담당자 설정이 올바르게 지정되지 않았습니다.");
							throw new Exception("다음 단계[" + nextWfProcCd + "] 담당자 설정이 올바르게 지정되지 않았습니다.");
						}
					}
				}
			}
		}
	}

	/**
	 * 부서 기준 사용자 목록 기존 담당자로 등록(부서기준 담당자 생성시 사용)
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> insertCgerListByDept(Map<String, Object> dsFormInfo, String deptCd) throws Exception {

		dsFormInfo.put("DEPT_CD", deptCd);
		List<Map<String, Object>> result = srCommDao.selectCgerListByDept(dsFormInfo);
		insertSrCommReqCgerDt(StringUtil.safe(dsFormInfo.get("REQ_ID")), StringUtil.safe(dsFormInfo.get("NEXT_WF_PROC_CD")), result);
		return result;
	}
	
	/**
	 * 요청자를 담당자로 등록
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> insertCgerByReqUser() throws Exception {

		List<Map<String, Object>> result = new ArrayList<Map<String,Object>>();
		Map<String, Object> cgerMap = new HashMap<String, Object>();
		
		cgerMap.put("REQ_ID", reqInfo.get().getReqId());
		cgerMap.put("WF_FUNC_CD", "WF_FUNC_04");
		cgerMap.put("WF_FUNC_NM", "담당자");
		cgerMap.put("ESS_YN", "N");
		cgerMap.put("USER_ID", reqInfo.get().getReqUserId());
		result.add(cgerMap);

		insertSrCommReqCgerDt(reqInfo.get().getReqId(), reqInfo.get().getNextWfProcCd(), result);
		return result;
	}

	/**
	 * SR_REV_PROC 테이블 기준 요청서 [담당/검토]자 자동 등록
	 * @param String
	 * @param String
	 * @return void
	 */
	public void insertSrCommReqCgerDtBySrRevProc(String reqId, String wfProcCd)  throws Exception {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		Map<String, Object> dsCond = new HashMap<>();
		dsCond.put("REQ_ID", reqId);
		dsCond.put("WF_PROC_CD", wfProcCd);
		
		srCommDao.removeSrCgerDt(dsCond);	//단계 담당자 초기화
		
		Map<String, Object> mapData = srCommDao.selectRevProc(dsCond);

		mapData.put("REQ_ID", mapData.get("REQ_ID"));
		mapData.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
		mapData.put("ESS_YN", "Y");
		mapData.put("USER_ID", mapData.get("CGER_ID"));
		mapData.put("LMID", userId);
		mapData.put("LMPID", lmpId);
		srCommDao.insertSrCgerDt(mapData);
	}

	/**
	 * SR_CGER_DT 사용되지 않는 임의의 담당자 로우를 추가
	 * @param String
	 * @param String
	 * @return List<Map<String, Object>> 
	 */
	public List<Map<String, Object>> emptySrCommCgerDt(String reqId, String wfProcCd)  throws Exception {
		
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();		
		Map<String, Object> mapData = new HashMap<String, Object>();
		mapData.put("REQ_ID", mapData.get("REQ_ID"));
		mapData.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
		mapData.put("ESS_YN", "N");
		mapData.put("USER_ID", "XXXXXXX");
		mapData.put("LMID", userId);
		mapData.put("LMPID", lmpId);
		list.add(mapData);
		return list;
	}

	
	/**
	 * 파라미터로 받은 List 객체를 요청서 [담당/검토]자로 등록
	 * @param String
	 * @param String
	 * @param List<Map<String, Object>>
	 * @return void
	 */
	public void insertSrCommReqCgerDt(String reqId, String nextWfProcCd, List<Map<String, Object>> data) throws Exception {

		log.debug("[SRCommServiceImpl]-insertSrCommReqCgerDt() reqId:[{}]",				reqId);
		log.debug("[SRCommServiceImpl]-insertSrCommReqCgerDt() nextWfProcCd:[{}]",	nextWfProcCd);
		log.debug("[SRCommServiceImpl]-insertSrCommReqCgerDt() data.size():[{}]",			data.size());

		if(data == null || data.size() == 0) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("담당자 생성시 담당자 대상 목록이 존재하지 않습니다.");
			}
			log.debug("[SRCommServiceImpl]-insertSrCommReqCgerDt() 담당자 생성시 담당자 대상 목록이 존재하지 않습니다.");
			throw new Exception("담당자 생성시 담당자 대상 목록이 존재하지 않습니다.");
		}

		String userId 	= "";
		String lmpId 	= "";

		if("N".equals(reqInfo.get().getJobReserveYn())) {
			userId 	= sc.get().getScUserId();
			lmpId 	= sc.get().getScLmpId();

		}else {
			userId 	= reqInfo.get().getReqUserId();
			lmpId 	= "ITSM";
		}

		Map<String, Object> delMap = new HashMap<>();
		delMap.put("REQ_ID",				reqId);
		delMap.put("WF_PROC_CD",	nextWfProcCd);
		srCommDao.removeSrCgerDt(delMap);

		for (int i=0; i<data.size(); i++) {
			Map<String, Object> rowData = data.get(i);
			String cgerUserId = StringUtil.safe(rowData.get("USER_ID"));
			
			if("".equals(cgerUserId)) {
				
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("[" + reqId + "] 등록할 담당자 사번이 존재하지 않습니다.");
				}
				log.debug("[SRCommServiceImpl]-insertSrCommReqCgerDt() [" + reqId + "] 등록할 담당자 사번이 존재하지 않습니다.");
				throw new Exception("[" + reqId+ "] 등록할 담당자 사번이 존재하지 않습니다.");
			}

			rowData.put("REQ_ID",			reqId);
			rowData.put("WF_PROC_CD",	nextWfProcCd);
			rowData.put("WF_FUNC_CD",	"WF_FUNC_04");
			rowData.put("LMID", 				userId);
			rowData.put("LMPID", 			lmpId);
			srCommDao.insertSrCgerDt(rowData);
		}
	}

	/**
	 * 서비스명, 데이터셋 목록, 파라미터로 적용할 데이터셋명칭을 입력받아 해당 서비스를 실행
	 * @param String
	 * @param DataSetList
	 * @param String
	 * @return Object
	 */
	public Object executeServiceMethod(String svcNm, DataSetList dsList, String inDsStr) throws Exception {

		Object rtnObj = null;
		String[] svcArr = svcNm.split("/");		
		String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
		String classNm = path + "." + svcArr[1] + "ServiceImpl";
		Class svcClass = Class.forName(classNm);

		String[] inDsParam = inDsStr.split(",");
		
		//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS svcNm:[" + svcNm + "]");

		if(svcClass != null) {

			Method[] methodList = svcClass.getMethods();	//해당 ServiceImpl Clsss에 있는 Method 목록
			String[] paramClassNm = null;

			for (int i = 0; i < methodList.length; i++) {
	
				if(methodList[i].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우
					
					Class<?>[] paramTypes = methodList[i].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
					//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS " + svcNm + "의 매개변수 갯수 : [" + paramTypes.length + "]");
					paramClassNm = new String[paramTypes.length];
					
					for (int j = 0; j < paramTypes.length; j++) {
	    				paramClassNm[j] = paramTypes[j].getName();	//해당 METHOD의 매개변수 Class명을 구한다.
					}
					break;
				}
			}
			
			if(paramClassNm == null) {
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("[" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
				}
				log.debug("[SRCommServiceImpl]-executeServiceMethod() [" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
				throw new Exception("[" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
			}
	
			Class<?>[] paramClass = new Class<?>[paramClassNm.length];
			Object[] oParam = new Object[paramClassNm.length];
			
			for (int k = 0; k < paramClassNm.length; k++) {

				paramClass[k] = Class.forName(paramClassNm[k]);
				log.debug("[SRCommServiceImpl]-executeServiceMethod() DS " + (k + 1) + "번째 매개변수 : [" + paramClass[k].getName() + "] dsNm:[" + inDsParam[k] + "]");
				
				DataSet paramDs = null;
				if(inDsParam.length >= k) paramDs = dsList.get(inDsParam[k]);

				Map<String, Object> inMap = null;
				List<Map<String, Object>> inList = null;

				//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS paramDs : " + paramDs.saveXml());
				//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS paramClass[" + k + "] : " + paramClass[k]);
				//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS paramClassNm[" + k + "]:[" + paramClassNm[k] + "]");
	
				if(paramClass[k] == java.util.Map.class || paramClass[k] == java.util.HashMap.class) {

					//log.debug("[SRCommServiceImpl]-executeServiceMethod DS [Map[ paramDs.getColumnCount() : " + paramDs.getColumnCount());
					inMap = new HashMap<>();
	
					if(paramDs != null) {
						
						String colNm = null;
						for (int l = 0; l < paramDs.getColumnCount(); l++) {

							if(paramDs.getColumn(l).getName() != null) {
								colNm = paramDs.getColumn(l).getName();
								inMap.put(colNm, paramDs.getString(0, colNm));
							}
							//else {
								//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS [List] paramDs.getColumn() is null" );
							//}
						}
						oParam[k] = inMap;
					}
	
				}else if(paramClass[k] == java.util.List.class || paramClass[k] == java.util.ArrayList.class) {
					
					//log.debug("[SRCommServiceImpl]-executeServiceMethod() DS [List] paramDs.getColumnCount() : " + paramDs.getColumnCount());
					inList = new ArrayList<Map<String,Object>>();
					
					if(paramDs != null) {

						for (int l = 0; l < paramDs.getRowCount(); l++) {
							
							Map<String, Object> rowMap = new HashMap<>();
							
							for (int m = 0; m < paramDs.getColumnCount(); m++) {
								String colNm = paramDs.getColumn(m).getName();
								rowMap.put(colNm, paramDs.getString(l, colNm));
							}
							inList.add(rowMap);
						}
						oParam[k] = inList;
					}
	
				}else {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("시스템 오류 paramClass 체크");
					}
					log.debug("[SRCommServiceImpl]-executeServiceMethod() 시스템 오류 paramClass 체크");
					throw new Exception("시스템 오류 paramClass 체크");
				}
			}
	
			//log.debug("[SRCommServiceImpl]-executeServiceMethod DS 매개변수 갯수:[" + oParam.length + "]");

			Object object  = BeanUtils.getBean(svcArr[1] + "ServiceImpl");
			Method method = svcClass.getMethod(svcArr[2], paramClass);
			rtnObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행
		}
		return rtnObj;
	}

	/**
	 * 서비스명, 인자로 넘길 Map을 입력받아 해당 서비스를 실행(조회용)
	 * @param String
	 * @param Map<String, Object>
	 * @return Object
	 */
	public Object executeServiceMethod(String svcNm, Map<String, Object> dsCond) throws Exception {

		Object rtnObj = null;
				
		String[] svcArr = svcNm.split("/");
		
		for (int i = 0; i < svcArr.length; i++) {
			svcArr[i] = StringUtil.safe(svcArr[i]);
			
			if("".equals(svcArr[i])) {
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("지정된 SERVICE가 올바르지 않습니다.");
				}
				throw new Exception("지정된 SERVICE가 올바르지 않습니다.");
			}
		}
		
		//log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] MAP svcNm:[" + svcNm + "]");
		
		String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
		String classNm = path + "." + svcArr[1] + "ServiceImpl";
		
		//log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] MAP path:[" + path + "]");
		//log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] MAP classNm:[" + classNm + "]");
		
		Class svcClass = Class.forName(classNm);
		Method[] methodList = svcClass.getMethods();	//해당 ServiceImpl Clsss에 있는 Method 목록
		Class<?>[] paramTypes = null;
		String[] paramClassNm = null;

		for (int j = 0; j < methodList.length; j++) {
			if(methodList[j].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우
				paramTypes = methodList[j].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
				//log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] " + svcNm + "의 매개변수 갯수 : [" + paramTypes.length + "]");
				paramClassNm = new String[paramTypes.length];
				
				for (int k = 0; k < paramTypes.length; k++) {
    				paramClassNm[k] = paramTypes[k].getName();	//해당 METHOD의 매개변수 Class명을 구한다.
				}
			}
		}
		
		if(paramClassNm == null) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("[" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
			}
			log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] [" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
			throw new Exception("[" + svcNm + "]\n실행시 파라미터 DS가 존재하지 않습니다.");
		}

		Class<?>[] paramClass = new Class<?>[paramClassNm.length];
		Object[] oParam = new Object[paramClassNm.length];
		
		//String logStr = "[SRCommServiceImpl]-executeServiceMethod() [조회용] MAP svcNm:[ \" + svcNm + \"] 매개변수 갯수:[" + paramClass.length + "] ParamClass:[";
		String paramClsStr = "";

		for (int k = 0; k < paramClassNm.length; k++) {

			paramClass[k] = Class.forName(paramClassNm[k]);
			paramClsStr = ("".equals(paramClsStr) ? "" : ", ") + paramClass[k].getName();

			if(paramClass[k] == java.util.Map.class || paramClass[k] == java.util.HashMap.class) {
				//log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] Map paramDs.getColumnCount() : " + dsCond.keySet().size());
				oParam[k] = dsCond;

			}else {
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("[SRCommServiceImpl]-executeServiceMethod() MAP TypeName:[" + paramClass[k].getTypeName() + "]");
				}
				log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] [SRCommServiceImpl]-executeServiceMethod() [조회용] MAP TypeName:[" + paramClass[k].getTypeName() + "]");
				throw new Exception("[SRCommServiceImpl]-executeServiceMethod() [조회용] MAP TypeName:[" + paramClass[k].getTypeName() + "]");
			}
		}
		
		//logStr += paramClsStr + "]";
		//log.debug(logStr);

		Method method = svcClass.getMethod(svcArr[2], paramClass);

		if(method != null) {
			log.debug("[SRCommServiceImpl]-executeServiceMethod() [조회용] SVC_IMPL:[" + svcArr[1] + "] METHOD_NM:[" + method.getName() + "] PARAM_CALSS:[" + paramClass.getClass().getName() + "]");
			Object object  = BeanUtils.getBean(svcArr[1] + "ServiceImpl");
			rtnObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행
		}
		return rtnObj;
	}

	/**
	 * 현재 진행단계에서 다음 단계 및 기능을 추출 한다.
	 * @param String
	 * @param String
	 * @param String
	 * @param String
	 * @param String
	 * @return String Array
	 */
	public String[] getNextWfProcFuncCd(String reqId, String reqTmplatId, String curSaveGubun, String curWfProcCd, String lastAppvYn) throws Exception {

		log.debug("[SRCommServiceImpl]-getNextWfProcFuncCd() reqId : " + reqId + " reqTmplatId : " + reqTmplatId + " curSaveGubun : " + curSaveGubun + " curWfProcCd : " + curWfProcCd + " lastAppvYn : " + lastAppvYn);

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqId);
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		Map<String, Object> baseInfo = sr0000Dao.select01(condMap);
		reqInfo.get().setMapProcCd(StringUtil.safe(baseInfo.get("MAP_PROC_CD")));
		reqInfo.get().setMapWfProcCd(StringUtil.safe(baseInfo.get("MAP_WF_PROC_CD")));

		String[] nextWfProcFuncCd = new String[2];
		String reqTmplatVer = StringUtil.safe(baseInfo.get("REQ_TMPLAT_VER"));

		condMap = new HashMap<>();
		condMap.put("REQ_TMPLAT_ID", reqTmplatId);
		condMap.put("REQ_TMPLAT_VER", reqTmplatVer);

		//WF_REQ_TMPLAT_PROC_DT [요청서양식 워크플로우 단계 상세] 목록 조회
		List<Map<String, Object>> wfReqTmplatProcDt = wf0120wDao.selectProc(condMap);

		for (int i = 0; i < wfReqTmplatProcDt.size(); i++) {
			
			Map<String, Object> rowData = wfReqTmplatProcDt.get(i);
			String tmpWfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));
			String tmpWfFuncCd = StringUtil.safe(rowData.get("FUNC"));

			if("REG".equals(curSaveGubun)) {	//현재 처리가 등록인 경우

				if("WF_PROC_1000".equals(curWfProcCd) && "WF_PROC_1000".equals(tmpWfProcCd)) {
					
					if("WF_FUNC_01".equals(tmpWfFuncCd)) {	//등록 후 결재가 있는지 체크(결재가 존재하면 단계는 유지가 됨)
						nextWfProcFuncCd[0] = curWfProcCd;
						nextWfProcFuncCd[1] = tmpWfFuncCd;

					}else {
						nextWfProcFuncCd[0] = getReqNextWfProcCd(reqTmplatId, reqTmplatVer, curWfProcCd);
						nextWfProcFuncCd[1] = getStartWfFuncCd(wfReqTmplatProcDt, nextWfProcFuncCd[0]);
					}
					break;
				}

			}else if("REV".equals(curSaveGubun)) {	//현재 처리가 접수인 경우
				
				if(tmpWfProcCd.equals(curWfProcCd)) {	//현재 단계에 해당하는 WF_REQ_TMPLAT_PROC_DT 정보
					
					if("WF_FUNC_01".equals(tmpWfFuncCd)) {	//기능 결재가 있는지 확인
						nextWfProcFuncCd[0] = curWfProcCd;
						nextWfProcFuncCd[1] = tmpWfFuncCd;

					}else {

						nextWfProcFuncCd[0] = getReqNextWfProcCd(reqTmplatId, reqTmplatVer, curWfProcCd);
						nextWfProcFuncCd[1] = getStartWfFuncCd(wfReqTmplatProcDt, nextWfProcFuncCd[0]);
					}
				}

			}else if("APV".equals(curSaveGubun)) {	//현재 처리가 승인인 경우

				//log.debug("[SRCommServiceImpl]-getNextWfProcFuncCd() [APV] reqTmplatId : " + reqTmplatId + " tmpWfProcCd : " + tmpWfProcCd + " curWfProcCd : " + curWfProcCd + " lastAppvYn : " + lastAppvYn);

				if(tmpWfProcCd.equals(curWfProcCd)) {	//현재 단계에 해당하는 WF_REQ_TMPLAT_PROC_DT 정보
				
					if("Y".equals(lastAppvYn)) {	//최종승인 인경우

						nextWfProcFuncCd[0] = getReqNextWfProcCd(reqTmplatId, reqTmplatVer, curWfProcCd);	//최종승인이므로 다음 단계를 구한다.
						nextWfProcFuncCd[1] = getStartWfFuncCd(wfReqTmplatProcDt, nextWfProcFuncCd[0]);

					}else {		//결재나 검토가 최종 승인이 아니므로 현재 상태 현재 처리자 계속 유지
						nextWfProcFuncCd[0] = curWfProcCd;
						nextWfProcFuncCd[1] = "WF_FUNC_01";
					}
				}
			}
		}

		if("SCRN_RTRN".equals(curSaveGubun) || "RTRN".equals(curSaveGubun)) {	//반려
			nextWfProcFuncCd = getRtrnWfProcFuncCd();
		}

		if("WF_FUNC_01".equals(nextWfProcFuncCd[1])) {	//selectNextWfProcSvcInfo
			condMap = new HashMap<>();
			condMap.put("REQ_TMPLAT_ID", reqTmplatId);
			condMap.put("REQ_TMPLAT_VER", reqTmplatVer);
			condMap.put("WF_PROC_CD", nextWfProcFuncCd[0]);
			condMap.put("APPR_LVL_SEQ", 1);
			List<Map<String, Object>> list = srCommDao.selectAppvInfo(condMap);
			
			if(list != null) {
				
				if(list.size() == 1) {
					reqInfo.get().setNextWfProcNm(StringUtil.safe(list.get(0).get("APPR_NM")));
					reqInfo.get().setNextMapWfProcCd(StringUtil.safe(list.get(0).get("MAP_WF_PROC_CD")));					
				}
			}

		}else {
			condMap = new HashMap<>();
			condMap.put("REQ_TMPLAT_ID", reqTmplatId);
			condMap.put("REQ_TMPLAT_VER", reqTmplatVer);
			condMap.put("WF_PROC_CD", nextWfProcFuncCd[0]);
			Map<String, Object> map = srCommDao.selectNextWfProcSvcInfo(condMap);
			
			if(map != null) {
				reqInfo.get().setNextWfProcNm(StringUtil.safe(map.get("WF_PROC_NM")));
				reqInfo.get().setNextMapWfProcCd(StringUtil.safe(map.get("MAP_WF_PROC_CD")));
			}
		}
		return nextWfProcFuncCd;
	}

	/**
	 * 인자로 받은 다음 단계에 시작 기능을 리턴한다.
	 * @param List<Map<String, Object>>
	 * @param String
	 * @return String
	 */
	public String getStartWfFuncCd(List<Map<String, Object>> wfReqTmplatProcDt, String nextWfProcCd) throws Exception {

		//log.debug("[SRCommServiceImpl]-getStartWfFuncCd() nextWfProcCd:[" + nextWfProcCd + "]");
		if(nextWfProcCd == null || "".equals(nextWfProcCd)) {
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("단계의 시작 기능을 추출하기 위한 [단계] PARAM 값이 존재하지 않습니다.");
			}
			throw new Exception("[SRCommServiceImpl]-단계의 시작 기능을 추출하기 위한 [단계] PARAM 값이 존재하지 않습니다.");
		}

		//구해진 다음 단계에 해당하는 다음 기능을 구한다.
		for(int i=0; i<wfReqTmplatProcDt.size(); i++) {
			
			Map<String, Object> rowData = wfReqTmplatProcDt.get(i);
			
			String wfProcCd = StringUtil.safe(rowData.get("WF_PROC_CD"));
			
			if(nextWfProcCd.equals(wfProcCd)) {	//다음 단계에 해당하는 WF_REQ_TMPLAT_PROC_DT 정보

				if("WF_PROC_9020".equals(wfProcCd)) {
					return "WF_FUNC_04";

				}else {

					String cger = StringUtil.safe(rowData.get("CGER"));
					//log.debug("[SRCommServiceImpl]-getStartWfFuncCd() for i=[" + i + "] wfProcCd:[" + wfProcCd + "] cger:[" + cger + "]");

					if("true".equals(cger)) {	//담당자 처리가 있으면
						return "WF_FUNC_04";

					}else {						//담당자 처리가 없는 경우
						return StringUtil.safe(rowData.get("FUNC"));
					}
				}
			}
		}
		return "";
	}

	/**
	 * 역할자 목록 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectAuthExtdUser(Map<String, Object> dsCond) {
		List<Map<String, Object>> result = srCommDao.selectAuthExtdUser(dsCond);
		return result;
	}

	/**
	 * 담당자 진행단계 건수 조회
	 * @param Map<String, Object>
	 * @return int
	 */
	public int selectSrCgerDtCnt(Map<String, Object> dsCond) {
		return srCommDao.selectSrCgerDtCnt(dsCond);
	}

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectSrCgerDt(Map<String, Object> dsCond) {
		return srCommDao.selectSrCgerDt(dsCond);
	}
	
	/**
	 * 워크플로우 단계 담당자 권한 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectSrCgerDtAuth(Map<String, Object> dsCond) {
		return srCommDao.selectSrCgerDtAuth(dsCond);
	}

	/**
	 * 결재선 진행단계 건수 조회
	 * @param Map<String, Object>
	 * @return int
	 */
	public int selectWfApprovalMtCnt(Map<String, Object> dsCond) {
		
		return srCommDao.selectWfApprovalMtCnt(dsCond);
	}

	/**
	 * 워크플로우 단계 결재자 목록 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectWfApprovalMt(Map<String, Object> dsCond) {
		return srCommDao.selectWfApprovalMt(dsCond);
	}

	/**
	 * 현재 결재 SEQ 기준 다음 결재자 목록
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectNextAppvUser(Map<String, Object> dsCond) {
		return srCommDao.selectNextAppvUser(dsCond);
	}

	/**
	 * 요청서 종료시 SW_WF_PROC 테이블에 채워지지 않은 단계코드 데이터 로우를 삽입한다.
	 * @param Map<String, Object> REQ_ID, WF_PROC_CD
	 * @return void
	 */
	public void insertEmptySetWfProc(Map<String, Object> rowData) {
		rowData.put("LMID", sc.get().getScUserId());
		srCommDao.insertEmptySetWfProc(rowData);
	}
	
	/**
	 * 요청서 종료시 SW_WF_PROC 테이블에 채워지지 않은 단계코드 데이터 로우를 삽입한다.
	 * @param Map<String, Object>
	 * @return void
	 */
	public void insertEmptyWfProcEnd(Map<String, Object> rowData) {
		rowData.put("LMID", sc.get().getScUserId());
		srCommDao.insertEmptyWfProcEnd(rowData);
	}

	/**
	 * Map으로 받은 값을 이용해 현재 결재 처리가 최종 결재가 아닌 경우 승인 처리까지 진행한 시점에 해당 메서드를 호출하여 다음 결재를 갱신해 준다.
	 * @return void
	 */
	public void setRenewNextApprUserByReqInfo() throws Exception {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("TEMP_REQ_ID",					reqInfo.get().getTempReqId());
		map.put("REQ_ID",								reqInfo.get().getReqId());
		map.put("REQ_TMPLAT_ID",				reqInfo.get().getReqTmplatId());
		map.put("REQ_TMPLAT_VER",				reqInfo.get().getReqTmplatVer());
		map.put("WF_PROC_CD",						reqInfo.get().getWfProcCd());
		map.put("WF_PROC_NM",					reqInfo.get().getWfProcNm());
		map.put("WF_FUNC_CD",						reqInfo.get().getWfFuncCd());
		map.put("NEXT_WF_PROC_CD",			reqInfo.get().getNextWfProcCd());
		map.put("NEXT_WF_PROC_NM",			reqInfo.get().getNextWfProcNm());
		map.put("NEXT_WF_FUNC_CD",			reqInfo.get().getNextWfFuncCd());
		map.put("REQ_STAT_CD",					reqInfo.get().getReqStatCd());
		map.put("ORG_REQ_STAT_CD",			reqInfo.get().getOrgReqStatCd());
		map.put("REQ_USER_ID",					reqInfo.get().getReqUserId());
		map.put("CANCEL_POSS_YN",				reqInfo.get().getCancelPossYn());
		map.put("SAVE_GUBUN",					reqInfo.get().getSaveGubun());
		map.put("TEMP_SAVE_YN",					reqInfo.get().getTempSaveYn());
		map.put("LAST_APPROVAL_YN",			reqInfo.get().getLastApprovalYn());
		map.put("OPINION",							reqInfo.get().getOpinion());
		map.put("IN_DATASET",						reqInfo.get().getInDataset());
		map.put("OUT_DATASET",					reqInfo.get().getOutDataset());
		map.put("SEQ",									reqInfo.get().getSeq());
		map.put("MAP_PROC_CD",					reqInfo.get().getMapProcCd());
		map.put("MAP_WF_PROC_CD",				reqInfo.get().getMapWfProcCd());
		map.put("NEXT_MAP_WF_PROC_CD",	reqInfo.get().getNextMapWfProcCd());
		setRenewNextApprUser(map);
	}
	
	/**
	 * Map으로 받은 값을 이용해 현재 결재 처리가 최종 결재가 아닌 경우 승인 처리까지 진행한 시점에 해당 메서드를 호출하여 다음 결재를 갱신해 준다.
	 * @param Map<String, Object>
	 * @return void
	 */
	public void setRenewNextApprUserByMap(Map<String, Object> dsCond) throws Exception {
		setRenewNextApprUser(dsCond);
	}

	/**
	 * Map으로 받은 값을 이용해 현재 결재 처리가 최종 결재가 아닌 경우 승인 처리까지 진행한 시점에 해당 메서드를 호출하여 다음 결재를 갱신해 준다.
	 * @param Map<String, Object>
	 * @return void
	 */
	public void setRenewNextApprUser(Map<String, Object> dsCond) throws Exception {
		
		String reqTmplatId		= StringUtil.safe(dsCond.get("REQ_TMPLAT_ID"));
		String reqTmplatVer	= StringUtil.safe(dsCond.get("REQ_TMPLAT_VER"));
		String reqId				= StringUtil.safe(dsCond.get("REQ_ID"));
		String wfProcCd			= StringUtil.safe(dsCond.get("WF_PROC_CD"));
		String nextWfFuncCd	= StringUtil.safe(dsCond.get("NEXT_WF_FUNC_CD"));
		String lastAppvYn		= StringUtil.safe(dsCond.get("LAST_APPROVAL_YN"));
		int seq						= StringUtil.safeInt(dsCond.get("SEQ"), -1);

		log.debug("결재 최종 결제여부 체크 : " + lastAppvYn);

		if("Y".equals(lastAppvYn)) {
			//다음 단계에 해당하는 담당자 또는 검토자 셋팅
			if(!"WF_FUNC_01".equals(nextWfFuncCd)) {
				log.debug("[다음 단계 담당자 셋팅]reqInfo.get().getNextWfProcCd()===============>" + reqInfo.get().getNextWfProcCd());
				log.debug("[다음 단계 담당자 셋팅]reqInfo.get().getNextWfFuncCd()===============>" + reqInfo.get().getNextWfFuncCd());
				
				//다음 단계에 해당하는 담당자 또는 검토자 셋팅
				if(!"WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd())) {
					
					if("WF_PROC_9020".equals(reqInfo.get().getNextWfProcCd())) {
						Map<String, Object> reqUserMap = new HashMap<>();
						reqUserMap.put("REQ_ID", reqInfo.get().getReqId());
						reqUserMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
						reqUserMap.put("WF_FUNC_NM", "요청자");
						reqUserMap.put("USER_ID", reqInfo.get().getReqUserId());
						reqUserMap.put("LMID", sc.get().getScUserId());
						reqUserMap.put("LMPID", sc.get().getScLmpId());
						srCommDao.insertSrCgerDt(reqUserMap);
						
					}else {
						
						try {
							procReqCgerDt(dsCond);
						}catch(Exception e) {
							e.printStackTrace();
						}
					}
				}
			}

		}else {	//최종결재가 아닌 경우
			Map<String, Object> condMap = new HashMap<>();
			condMap = new HashMap<>();
			condMap.put("REQ_ID", reqId);
			condMap.put("WF_PROC_CD", wfProcCd);
			condMap.put("SEQ", seq);

			//현재 결재 건의 결재선 상세 정보
			List<Map<String, Object>> apprUserInfo = srCommDao.selectAppvUserInfo(condMap);

			//현재 결재 건
			if(apprUserInfo != null) {
				
				if(apprUserInfo.size() == 1) {

					condMap = new HashMap<>();
					condMap.put("REQ_ID", reqId);
					condMap.put("WF_PROC_CD", wfProcCd);
					//현재 처리한 결재의 차수
					int appvLvlSeq	= StringUtil.safeInt(apprUserInfo.get(0).get("APPR_LVL_SEQ"), -1);

					//처리한 결재 이후 진행될 결재차수
					int curApprLvlSeq = srCommDao.selectCurrentApprLvlSeq(condMap);

					log.debug("xxxxx curApprLvlSeq : " + curApprLvlSeq + " appvLvlSeq : " + appvLvlSeq);

					if(curApprLvlSeq > -1 && curApprLvlSeq > appvLvlSeq) {

						condMap = new HashMap<>();
						condMap.put("REQ_TMPLAT_ID",	reqTmplatId);
						condMap.put("REQ_TMPLAT_VER",	reqTmplatVer);
						condMap.put("WF_PROC_CD",		wfProcCd);
						condMap.put("APPR_LVL_SEQ",		curApprLvlSeq);
						List<Map<String, Object>> curAppvInfo = srCommDao.selectAppvInfo(condMap);

						//처리한 결재 이후 진행될 정보
						if(curAppvInfo != null) {

							if(curAppvInfo.size() == 1) {

								String apprProcDivCd	= StringUtil.safe(curAppvInfo.get(0).get("APPR_PROC_DIV_CD"));

								//CODE_DIV:[WORKFLOW_CD] UP_CMM_CD:[APPR_PROC_CD]  결재처리구분[APPR_PROC_CD] - 01:[직접지정], 02:[요청자 팀장], 03:[담당자 팀장], 04:[담당본부장], 05:[요청본부장], 99:[서비스 지정]
								if("02".equals(apprProcDivCd) || "03".equals(apprProcDivCd) || "04".equals(apprProcDivCd) || "05".equals(apprProcDivCd)) {

									List<Map<String, Object>> wfReqTmplatProcDtList = wf0120wDao.selectWfReqTmplatProcHt(dsCond);

									int curSeq = -1;
									boolean chkB = false;
									String draftWfProcCd = "";

									if(wfReqTmplatProcDtList != null) {

										for (int i = 0; i < wfReqTmplatProcDtList.size() ; i++) {

											String rowWfProcCd = StringUtil.safe(wfReqTmplatProcDtList.get(i).get("WF_PROC_CD"));

											if(wfProcCd.equals(rowWfProcCd)) {
												curSeq	= StringUtil.safeInt(wfReqTmplatProcDtList.get(i).get("SEQ"));
												break;
											}
										}
									}

									if(curSeq > -1) {

										for (int i = curSeq; i >= 0; i--) {

											if(chkB) break;

											String rowWfProcCd = StringUtil.safe(wfReqTmplatProcDtList.get(i).get("WF_PROC_CD"));
											String rowCger			= StringUtil.safe(wfReqTmplatProcDtList.get(i).get("CGER"));

											if("".equals(draftWfProcCd))	draftWfProcCd = rowWfProcCd;
											if("true".equals(rowCger))	chkB = true;
											if(!chkB)								draftWfProcCd = rowWfProcCd;
										}
									}
									log.debug("draftWfProcCd=============>" + draftWfProcCd);

									//결재를 기안한 기안자를 조회
									condMap = new HashMap<>();
									condMap.put("REQ_ID",		reqId);
									condMap.put("WF_PROC_CD",	draftWfProcCd);
									condMap.put("APPR_GRP_SEQ", 0);
									condMap.put("SEQ", 0);

									String regUserId = "";

									if("03".equals(apprProcDivCd) || "04".equals(apprProcDivCd)) {

										List<Map<String, Object>> regApprInfo = srCommDao.selectAppvUserInfo(condMap);

										if(regApprInfo != null) {

											if(regApprInfo.size() == 1) {
												regUserId = StringUtil.safe(regApprInfo.get(0).get("USER_ID"));
											}
										}

									}else if("02".equals(apprProcDivCd) || "05".equals(apprProcDivCd)) {

										Map<String, Object> baseInfo = sr0000Dao.select01(condMap);
										regUserId = StringUtil.safe(baseInfo.get("REQ_USER_ID"));
									}

									//결재를 올린 기안자									
									if(!"".equals(regUserId)) {

										log.debug("xxxxx regUserId=============> " + regUserId);										
										String gubun = sr0010DSvc.selectUserCheck(regUserId);

										if("T".equals(gubun) || "B".equals(gubun)) {
											apprProcDivCd = "04";	//본부장
										}

										List<Map<String, Object>> selAppv = sr0010DSvc.selectApprListByCode(regUserId, apprProcDivCd);

										//결재선 대상자의 정보를 조회
										if( selAppv != null) {

											if(selAppv.size() == 1) {
												//삭제 후
												condMap = new HashMap<>();
												condMap.put("REQ_ID", reqId);
												condMap.put("WF_PROC_CD", wfProcCd);
												condMap.put("APPR_LVL_SEQ", curApprLvlSeq);
												sr0010Ddao.remove01(condMap);

												//재생성
												condMap = new HashMap<>();
												condMap.put("REQ_ID", reqId);
												condMap.put("WF_PROC_CD", wfProcCd);
												condMap.put("APPR_LVL_SEQ", curApprLvlSeq);
												condMap.put("APPR_GRP_SEQ", 1);
												condMap.put("APPR_SEQ", 1);
												condMap.put("APPR_STAT_CD", "APST_01");
												condMap.put("USER_ID", selAppv.get(0).get("USER_ID"));
												condMap.put("DIRECT_YN", "N");
												condMap.put("LMID", sc.get().getScUserId());
												sr0010Ddao.insert01(condMap);
											}
										}

									}else {
										if("N".equals(reqInfo.get().getJobReserveYn())) {
											sc.get().setScSessionMsg("팀장/본부장 조회할 대상 USER_ID가 확인되지 않았습니다.");
										}
										throw new Exception("팀장/본부장 조회할 대상 USER_ID가 확인되지 않았습니다.");
									}
								}
							}
						}
					}
						
				}else {
					//Exception
					log.debug("[예외처리 대상] 현재 결재 처리자에 대한 정보가 없거나 1건 이상이면 예외처리대상");
				}

			}else {
				//Exception
				log.debug("[예외처리 대상] 현재 결재 처리자에 대한 정보 조회가 불가하면 예외처리 대상");
			}
		}
	}

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectSrCgerSubDt(Map<String, Object> dsCond) {
		return srCommDao.selectSrCgerSubDt(dsCond);
	}

	/**
	 * 워크플로우 단계 담당자 목록 조회
	 * @param Map<String, Object>
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectSrCgerSubDtAuth(Map<String, Object> dsCond) {
		return srCommDao.selectSrCgerSubDtAuth(dsCond);
	}

	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 등록
	 * @param Map<String, Object>
	 * @return void
	 */
	public void insertSrCgerSubDt(List<Map<String, Object>> dsData) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		if(dsData != null) {

			for (int i = 0; i < dsData.size(); i++) {

				Map<String, Object> rowData = dsData.get(i);
				rowData.put("LMID", userId);
				rowData.put("LMPID", lmpId);
				srCommDao.insertSrCgerSubDt(rowData);
			}
		}
	}

	/**
	 * SR_REQ_CGER_DT (요청서 처리 담당/검토자) 삭제
	 * @param List<Map<String, Object>>
	 * @return void
	 */
	public void removeSrCgerSubDt(List<Map<String, Object>> dsData) {

		if(dsData != null) {

			for (int i = 0; i < dsData.size(); i++) {

				Map<String, Object> rowData = dsData.get(i);
				srCommDao.removeSrCgerSubDt(rowData);
			}
		}		
	}

	/**
	 * 반려시 진행단계와 기능을 구한다.
	 * @return String Array
	 */
	public String[] getRtrnWfProcFuncCd() throws Exception {

		String[] rtrnWfProcFuncCdArr = new String[2];

		Map<String, Object> condMap = new HashMap<>();
		condMap.put("REQ_ID", reqInfo.get().getReqId());
		condMap.put("RTRN_DIV", reqInfo.get().getSaveGubun());
		Map<String, Object> rtrnWfProcFuncCd = srCommDao.selectBaseRtrnWfProcCd(condMap);

		String baseWfProcSkipYn	= StringUtil.safe(rtrnWfProcFuncCd.get("WF_PROC_SKIP_YN"));
		String baseRtrnWfProcCd	=	StringUtil.safe(rtrnWfProcFuncCd.get("RTRN_WF_PROC_CD"));
		String baseRtrnWfFuncCd	=	StringUtil.safe(rtrnWfProcFuncCd.get("RTRN_WF_FUNC_CD"));

		log.debug("기본 조회된 반려 단계 rtrnWfProcCd:[" + baseRtrnWfProcCd + "]");
		log.debug("기본 조회된 반려 기능 rtrnWfFuncCd:[" + baseRtrnWfFuncCd + "]");
		log.debug("기본 조회된 반려 단계 baseWfProcSkipYn:[" + baseWfProcSkipYn + "]");

		//기본 반려 단계 및 기능
		if("".equals(baseRtrnWfProcCd)) {
			//Exception
			if("N".equals(reqInfo.get().getJobReserveYn())) {
				sc.get().setScSessionMsg("기본 반려 단계가 설정되지 않았습니다.");
			}
			throw new Exception("기본 반려 단계가 설정되지 않았습니다.");

		}else {

			if(!"WF_PROC_9999".equals(baseRtrnWfProcCd)) {

				if("".equals(baseRtrnWfFuncCd)) {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("기본 반려 단계에 설정된 단계 기능이 존재하지 않습니다.");
					}
					throw new Exception("기본 반려 단계에 설정된 단계 기능이 존재하지 않습니다.");
				}
			}
			else
			{
				//종료 처리인 경우
				rtrnWfProcFuncCdArr[0] = "WF_PROC_9999";
				return rtrnWfProcFuncCdArr;
			}
		}

		//단계 건너뛰기가 설정되지 않은 경우
		if("N".equals(baseWfProcSkipYn)) {

			if(!"".equals(baseRtrnWfProcCd) && !"".equals(baseRtrnWfFuncCd)) {
				rtrnWfProcFuncCdArr[0] = baseRtrnWfProcCd;
				rtrnWfProcFuncCdArr[1] = baseRtrnWfFuncCd;

				log.debug("11반려 단계 rtrnWfProcFuncCdArr[0] : " + rtrnWfProcFuncCdArr[0]);
				log.debug("11반려 기능 rtrnWfProcFuncCdArr[1] : " + rtrnWfProcFuncCdArr[1]);
				return rtrnWfProcFuncCdArr;
			}

		//단계 건너뛰기가 설정된 경우
		}else {

			//기본 반려 단계부터 이전 단계로 loop를 돌면서 체크
			condMap = new HashMap<>();
			condMap.put("REQ_ID", reqInfo.get().getReqId());
			condMap.put("RTRN_WF_PROC_CD", baseRtrnWfProcCd);
			List<Map<String, Object>> srWfProcList = srCommDao.selectSrWfProcRtrnCheck(condMap);

			if(srWfProcList != null) {

				String rtrnWfProcCd = "";
				String rtrnWfFuncCd = "";

				for (int i = 0; i < srWfProcList.size(); i++) {

					Map<String, Object> curRow = srWfProcList.get(i);					
					Map<String, Object> nextRow = new HashMap<String, Object>();

					if(i+1 < srWfProcList.size()) {
						nextRow = srWfProcList.get(i+1);
					}else {
						nextRow = null;
					}

					String curRowWfProcSkipYn	= StringUtil.safe(curRow.get("WF_PROC_SKIP_YN"));					
					String nextRowWfProcSkipYn	= "";

					if( nextRow != null ) {
						nextRowWfProcSkipYn	= StringUtil.safe(nextRow.get("WF_PROC_SKIP_YN"));
					}

					String curRowWfProcCd		= StringUtil.safe(curRow.get("WF_PROC_CD"));
					String curRowCger				= StringUtil.safe(curRow.get("CGER"));
					String curRowFunc				= StringUtil.safe(curRow.get("FUNC"));
//					String curRowScreenRtrn	= StringUtil.safe(curRow.get("SCREEN_RTRN"));
//					String curRowRtrn				= StringUtil.safe(curRow.get("RTRN"));

					if(nextRow != null) {

						//건너뛰기 이전 단계에선 반려시 단계를 보지 않고 요청서 원 단계를 보고 리턴
						rtrnWfProcCd = curRowWfProcCd;
						
						if("true".equals(curRowCger)) {
							//rtrnWfProcCd = curRowScreenRtrn;
							rtrnWfFuncCd = "WF_FUNC_04";

						}else if("WF_FUNC_01".equals(curRowFunc)) {
							//rtrnWfProcCd = curRowRtrn;
							rtrnWfFuncCd = "WF_FUNC_01";

						}else {
							if("N".equals(reqInfo.get().getJobReserveYn())) {
								sc.get().setScSessionMsg("반려 단계 설정 체크시 오류[1]");
							}
							throw new Exception("반려 단계 설정 체크시 오류[1]");
						}

						if("Y".equals(curRowWfProcSkipYn) && "N".equals(nextRowWfProcSkipYn)) {	//반려 단계에 해당하고 건너뛰기가 아니면)
							break;
						}
					}
				}

				if("".equals(rtrnWfProcCd)) {
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("반려 단계 설정 체크시 오류[2]");
					}
					throw new Exception("반려 단계 설정 체크시 오류[2]");

				}else {

					log.debug("[ELSE] baseRtrnWfProcCd================>" + baseRtrnWfProcCd);

					//설정된 반려시 단계부터 건너뛰기 체크
					condMap = new HashMap<>();
					condMap.put("REQ_ID", reqInfo.get().getReqId());
					condMap.put("RTRN_WF_PROC_CD", baseRtrnWfProcCd);
					srWfProcList = srCommDao.selectSrWfProcRtrnCheck(condMap);

					if(srWfProcList != null) {

						for (int i = 0; i < srWfProcList.size(); i++) {

							Map<String, Object> curRow = srWfProcList.get(i);
							String rowWfProcSkipYn	= StringUtil.safe(curRow.get("WF_PROC_SKIP_YN"));
							String rowWfProcCd		= StringUtil.safe(curRow.get("WF_PROC_CD"));
							String rowCger				= StringUtil.safe(curRow.get("CGER"));
							String rowFunc				= StringUtil.safe(curRow.get("FUNC"));

							log.debug("i=" + i + " rowWfProcSkipYn : " + rowWfProcSkipYn + " rowWfProcCd : " + rowWfProcCd + " rowCger : " + rowCger + " rowFunc : " + rowFunc);

							if("N".equals(rowWfProcSkipYn)) {

								rtrnWfProcFuncCdArr[0] = rowWfProcCd;

								if("true".equals(rowCger)) {
									rtrnWfProcFuncCdArr[1] = "WF_FUNC_04";

								}else if("WF_FUNC_01".equals(rowFunc)) {									
									rtrnWfProcFuncCdArr[1] = "WF_FUNC_01";

								}else {
									if("N".equals(reqInfo.get().getJobReserveYn())) {
										sc.get().setScSessionMsg("반려 단계 설정 체크시 오류[3]");
									}
									throw new Exception("반려 단계 설정 체크시 오류[3]");
								}

								log.debug("22반려 단계 rtrnWfProcFuncCdArr[0] : " + rtrnWfProcFuncCdArr[0]);
								log.debug("22반려 기능 rtrnWfProcFuncCdArr[1] : " + rtrnWfProcFuncCdArr[1]);
								return rtrnWfProcFuncCdArr;
							}
						}
					}
					if("N".equals(reqInfo.get().getJobReserveYn())) {
						sc.get().setScSessionMsg("최종 반려 단계를 구할 수 없습니다.");
					}
					throw new Exception("최종 반려 단계를 구할 수 없습니다.");
				}

			}else {
				//Exception
				if("N".equals(reqInfo.get().getJobReserveYn())) {
					sc.get().setScSessionMsg("반려 단계 체크시 체크할 단계 목록이 존재하지 않습니다.");
				}
				throw new Exception("반려 단계 체크시 체크할 단계 목록이 존재하지 않습니다.");
			}
		}
		return null;
	}

	/**
	 * 종료 삭제 처리
	 * @param Map<String, Object>
	 * @return void
	 */	
	public void wfProcDelete(Map<String, Object> dsData) throws Exception {

		//1. 강제 종료 처리 삭제에 대한 이력 생성
		dsData.put("PROC_NUMBER", dsData.get("REQ_ID"));
		dsData.put("SRM_USER_ID", sc.get().getScUserId());
//		dsData.put("WF_PROC_CD", "DELETE");
//		dsData.put("APPR_NM", "강제종료");
//		srCommDao.insertWfProcHist(dsData);

		//2. 진행된 단계부터 종료까지의 단계 SKIP처리
		dsData.put("LMID", sc.get().getScUserId());
		srCommDao.insertEmptyWfProcEnd(dsData);

		//3. 요청서 기본 강제종료 처리
		sr0000Dao.updateWfProcDelete(dsData);	//요청서 강제종료처리

		//4. 강제 종료 처리 삭제에 대한 이력 생성
		dsData.put("WF_PROC_CD", "WF_PROC_9999");
		srCommDao.insertWfProcHist(dsData);
	}

	/**
	 * 결재의 기안자를 조회
	 * @param Map<String, Object>
	 * @return Map<String, Object>
	 */
	public Map<String, Object> selectAppvDraftUser(Map<String, Object> dsCond) {
		return srCommDao.selectAppvDraftUser(dsCond);
	}

	/**
	 * 요청서 일괄처리
	 * @param Map<String, Object>
	 * @return void 
	 */
	public String execReqProc(Map<String, Object> dsData) throws Exception {

		DataSetList selectDataSetList = new DataSetList();
		DataSetList saveDataSetList = new DataSetList();

		//필수항목 : [REQ_ID, SAVE_GUBUN, WF_PROC_CD, MAP_WF_PROC_CD, SEQ(※결재인 경우 필수]
		Map<String, Object> formInfoMap = new HashMap<String, Object>();
		String jobReserveYn = StringUtil.safe(dsData.get("JOB_RESERVE_YN"), "N");

		log.debug("jobReserveYn==================================>" + jobReserveYn);
		
		String reqId						= StringUtil.safe(dsData.get("REQ_ID"));
		String saveGubun				= StringUtil.safe(dsData.get("SAVE_GUBUN"));
		int seq								= StringUtil.safeInt(dsData.get("SEQ"), -1);
		String tempSaveYn				= StringUtil.safe(dsData.get("TEMP_SAVE_YN"), "N");
		String wfFuncCd					= "";
		String scrnWfProcCd			= StringUtil.safe(dsData.get("WF_PROC_CD"));
		String scrnMapWfProcCd	= StringUtil.safe(dsData.get("MAP_WF_PROC_CD"));
		String scrnReqStatCd			= StringUtil.safe(dsData.get("REQ_STAT_CD"));
		
		if("REG".equals(saveGubun)) {
			wfFuncCd	= "WF_FUNC_00";
		}else if("REV".equals(saveGubun)) {
			wfFuncCd	= "WF_FUNC_04";
		}else if("APV".equals(saveGubun)) {
			wfFuncCd	= "WF_FUNC_01";
		}else if("RTRN".equals(saveGubun)) {
			wfFuncCd	= "WF_FUNC_01";
		}else if("SCRN_RTRN".equals(saveGubun)) {
			wfFuncCd	= "WF_FUNC_04";
		}else if("TEMP".equals(saveGubun)) {
			if("WF_PROC_1000".equals(scrnWfProcCd)) {
				wfFuncCd	= "WF_FUNC_00";
			}else {
				wfFuncCd	= "WF_FUNC_04";
			}
		}

		Map<String, Object> condMap = new HashMap<>();		
		DataSet dsSrBaseInfo_TOP = new DataSet("dsSrBaseInfo_TOP");
		DataSet dsFormInfo = new DataSet("dsFormInfo");

		//1. 요청서 기본 정보 조회
		condMap.put("REQ_ID",			reqId);
		condMap.put("WF_FUNC_CD", wfFuncCd);
		Map<String, Object> srBaseInfo = sr0000Dao.select01(condMap);
		
		DataSetList pDataSetList = new DataSetList();
		
		String reqTmplatId		= StringUtil.safe(srBaseInfo.get("REQ_TMPLAT_ID"));
		String reqTmplatVer	= StringUtil.safe(srBaseInfo.get("REQ_TMPLAT_VER"));
		String wfProcCd			= StringUtil.safe(srBaseInfo.get("WF_PROC_CD"));			//요청서 진행단계
		String mapWfProcCd	= StringUtil.safe(srBaseInfo.get("MAP_WF_PROC_CD"));	//요청서 매핑진행단계
		String reqStatCd		= StringUtil.safe(srBaseInfo.get("REQ_STAT_CD"));			//요청서 매핑진행단계

		formInfoMap = srBaseInfo;
		
		if("Y".equals(jobReserveYn) ) {
			formInfoMap.put("JOB_RESERVE_YN", jobReserveYn);
		}
		dsSrBaseInfo_TOP	= StringUtil.getDataSetObject("dsSrBaseInfo_TOP",	srBaseInfo);

		//현재 일괄 처리에 대한 처리 기능이 확인되지 않으면 일괄 처리 불가
		if("".equals(wfFuncCd)) {

			if("N".equals(jobReserveYn)) {
				sc.get().setScSessionMsg("일괄 처리시 요청서번호:[" + reqId + "]에 대한 [WF_FUNC_CD]값이 전달되지 않았습니다.");
				log.debug("[SRCommServiceImpl]-execReqProc() WF_FUNC_CD값이 전달되지 않았습니다.");
				throw new Exception("[SRCommServiceImpl]-execReqProc() WF_FUNC_CD값이 전달되지 않았습니다.");

			}else {
				return "[예약등록] 요청서번호:[" + reqId + "]에 대한 [WF_FUNC_CD]값이 전달되지 않았습니다.";
			}
		}
		
		if(srBaseInfo != null) {

//			for(String colNm : srBaseInfo.keySet()) {
//					log.debug("[SRCommServiceImpl]-execReqProc() COL_NM:[{}] VALUE:[{}]", colNm, srBaseInfo.get(colNm));
//			}

			//요청서 단계 또는 매핑단계 또는 상태코드가 변경된 경우는 일괄 처리 불가
			if(!scrnWfProcCd.equals(wfProcCd) || !scrnMapWfProcCd.equals(mapWfProcCd) || !scrnReqStatCd.equals(reqStatCd)) {

				if("N".equals(jobReserveYn)) {
					sc.get().setScSessionMsg("일괄 처리시 요청서번호:[" + reqId + "]에 대한 상태가 변경되어 처리가 불가능 합니다.");
					log.debug("[SRCommServiceImpl] execReqProc() 일괄 처리시 요청서번호:[" + reqId + "]에 대한 상태가 변경되어 처리가 불가능 합니다.");
					throw new Exception("[SRCommServiceImpl]-execReqProc() 일괄 처리시 요청서번호:[" + reqId + "]에 대한 상태가 변경되어 처리가 불가능 합니다.");

				}else {
					return "[예약등록] 요청서번호:[" + reqId + "]에 대한 상태가 변경되어 처리가 불가능 합니다.";
				}
			}

			formInfoMap.put("SAVE_GUBUN",					saveGubun);
			formInfoMap.put("SEQ",									seq);
			formInfoMap.put("TEMP_SAVE_YN",					tempSaveYn);
			formInfoMap.put("WF_FUNC_CD",					wfFuncCd);
			formInfoMap.put("LAST_APPROVAL_YN",			"N");			//default
			formInfoMap.put("NEXT_WF_PROC_CD",			null);
			formInfoMap.put("NEXT_WF_PROC_NM",			null);
			formInfoMap.put("NEXT_WF_FUNC_CD",			null);
			formInfoMap.put("NEXT_MAP_WF_PROC_CD",	null);
			formInfoMap.put("OPINION",							StringUtil.safe(dsData.get("OPINION")));
			formInfoMap.put("UI_YN",								"N");

			String keyInfo = StringUtil.safe(srBaseInfo.get("KEY_INFO"));

            if( !"".equals(keyInfo) )
            {
                String[] keyInfos = keyInfo.split(",");

                for(int i=0; i<keyInfos.length; i++)
                {
                    String[] keyVal = keyInfos[i].split("=");
                    
                    if( !formInfoMap.containsKey(keyVal[0]) ) {
                    	formInfoMap.put(keyVal[0], keyVal[1]);
                    }
                }
            }
            //log.debug("[SRCommServiceImpl] execReqProc() dsSrBaseInfo.saveXml():\n{}", dsSrBaseInfo.saveXml());

		}else {

			if("N".equals(jobReserveYn)) {
				sc.get().setScSessionMsg("일괄 처리시 요청서번호:[" + reqId + "]에 대한 기본정보 조회에 실패하였습니다.");
				log.debug("[SRCommServiceImpl]-execReqProc() [srBaseInfo] IS NULL");
				throw new Exception("[SRCommServiceImpl]-execReqProc() [srBaseInfo] IS NULL");

			}else {
				return "[예약등록] 요청서번호:[" + reqId + "]에 대한 기본정보 조회에 실패하였습니다.";
			}
		}

		for(String colNm : formInfoMap.keySet()) {
        	log.debug("[SRCommServiceImpl]-execReqProc() [formInfoMap] COL_NM:[{}] VALUE:[{}]", colNm, formInfoMap.get(colNm));
        }

		String userId			= StringUtil.safe(sc.get().getScUserId(), reqInfo.get().getReqUserId());
		String orgUserId	= StringUtil.safe(sc.get().getScOrgUserId(), reqInfo.get().getReqUserId());
		
		//결재인 경우
		if("APV".equals(saveGubun)) {
			
			if ("APV".equals(saveGubun) && !"".equals(reqId) && "N".equals(tempSaveYn)) {
				condMap = new HashMap<>();
				condMap.put("REQ_ID",			reqId);
				condMap.put("WF_FUNC_CD", wfFuncCd);
				condMap.put("WF_PROC_CD", wfProcCd);
				String lastApprovalYn = StringUtil.safe(srCommDao.selectLastApprvalYn(condMap), "N");
				formInfoMap.put("LAST_APPROVAL_YN",	lastApprovalYn);
				reqInfo.get().setLastApprovalYn(lastApprovalYn);
				log.debug("[SRCommServiceImpl]-execReqProc() lastApprovalYn:[{}]", lastApprovalYn);
			}
			
			//결재 seq가 없으면 결재진행 불가
			if(seq == -1) {
				
				condMap.put("REQ_ID",			reqId);
				condMap.put("WF_PROC_CD", wfProcCd);
				condMap.put("USER_ID",		userId);
				List<Map<String, Object>> appvList = sr0000Dao.selectAppvSeq(condMap);	//처리해야할 결재 정보를 구해온다.

				if(appvList != null) {

					if(appvList.size() == 1) {

						seq = StringUtil.safeInt(appvList.get(0).get("SEQ"), -1);
						log.debug("결재SEQ=======================>" + seq);
					}
				}
				
				if(seq == -1) {
					
					if("N".equals(jobReserveYn)) {
						sc.get().setScSessionMsg("요청서번호:[" + reqId + "]에 대한 결재 정보가 확인되지 않아 승인 처리가 불가능 합니다.");
						log.debug("[SRCommServiceImpl]-execReqProc() 요청서번호:[" + reqId + "]에 대한 결재 정보가 확인되지 않아 승인 처리가 불가능 합니다.");
						throw new Exception("[SRCommServiceImpl]-execReqProc() 요청서번호:[" + reqId + "]에 대한 결재 정보가 확인되지 않아 승인 처리가 불가능 합니다.");

					}else {
						return "[예약등록] 요청서번호:[" + reqId + "]에 대한 결재 정보가 확인되지 않아 승인 처리가 불가능 합니다.";
					}
				}
			}
		}

		dsFormInfo	= StringUtil.getDataSetObject("dsFormInfo",	formInfoMap);
		log.debug("[SRCommServiceImpl]-execReqProc() dsFormInfo.saveXml():\n{}", dsFormInfo.saveXml());
		pDataSetList.add(dsFormInfo);

		//dsFormInfo를 전역 변수로 설정
		GlobalReqInfo.setReqInfo(reqInfo, dsFormInfo);

		//조회 서비스에 대한 dataset 목록 추출 및 셋팅
		//워크플로우 단계별 서비스 정의 목록 조회
		condMap = new HashMap<>();
		condMap.put("REQ_ID",					reqInfo.get().getReqId());
		condMap.put("PROC_GUBUN",		"SELECT");
		condMap.put("REQ_TMPLAT_ID",		reqTmplatId);
		condMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
		List<Map<String, Object>> wfReqProcSvcInfo = srCommDao.selectReqProcSvcInfo(condMap);

		if(wfReqProcSvcInfo != null) {
			
			for (int i = 0; i < wfReqProcSvcInfo.size(); i++) {

				Map<String, Object> wfReqProcSvcInfoMap =wfReqProcSvcInfo.get(i);
				String rowWfProc	= StringUtil.safe(wfReqProcSvcInfoMap.get("WF_PROC_CD"));
				String inDs 			= StringUtil.safe(wfReqProcSvcInfoMap.get("IN_DATASET"));
				String svcNm			= StringUtil.safe(wfReqProcSvcInfoMap.get("SVC_NM"));

				if(!"".equals(inDs)) {
					
					String[] inDsArr = inDs.split(",");

					Map<String, Object> svcWfProcCondMap = new HashMap<String, Object>();
					
					for (int j = 0; j < inDsArr.length; j++) {
						
						if("dsCond".equals(inDs)) {
							
							svcWfProcCondMap = new HashMap<>();
							svcWfProcCondMap.put("REQ_ID",			reqInfo.get().getReqId());
							svcWfProcCondMap.put("WF_PROC_CD",	rowWfProc);
						}
						
						int isExists = pDataSetList.indexOf(inDsArr[j] + "_" + rowWfProc);	//중복된 데이터셋은 제거하기 위해
						
						log.debug("[SRCommServiceImpl]-execReqProc() i = " + i + " isExists : " + isExists);
						log.debug("[SRCommServiceImpl]-execReqProc() 단계별Svc 생성등록 DataSet:[{}]", inDsArr[j] + "_" + rowWfProc);

						if(isExists == -1) {
							
							DataSet dsWfProcSvcInDs = StringUtil.getDataSetObject(inDsArr[j] + "_" + rowWfProc, svcWfProcCondMap);
							pDataSetList.add(dsWfProcSvcInDs);
							log.debug("[SRCommServiceImpl]-execReqProc() PROC_GUBUN SELECT 단계별Svc 생성등록 DataSet:[{}]\n{}", inDsArr[j] + "_" + rowWfProc, dsWfProcSvcInDs.saveXml());
						}
					}
				}
			}
		}
		
		//조회 서비스를 실행할 정보를 담은 데이터셋 생성 (일괄처리에서는 사용은 하지 않으나 처리로직에서 해당 데이터셋을 사용하므로 빈 데이터셋을 전달하는 용도)
		DataSet dsSelectService	= new DataSet("dsSelectService");
		dsSelectService.addColumn("WF_PROC_CD", 1);
		dsSelectService.addColumn("CALLBACK_ID", 1);
		dsSelectService.addColumn("SVC_NM", 1);
		dsSelectService.addColumn("FORM_INDS", 1);
		dsSelectService.addColumn("FORM_OUTDS", 1);
		pDataSetList.add(dsSelectService);

		log.debug("[SRCommServiceImpl]-execReqProc() pDataSetList.size():[" + pDataSetList.size() + "]");

		for (int i = 0; i < pDataSetList.size(); i++) {
			log.debug("[SRCommServiceImpl]-execReqProc() 조회 실행 전 pDataSetList i=" + i + " DsName:[" + pDataSetList.get(i).getName() + "] rowCount:[" + pDataSetList.get(i).getRowCount() + "]");
		}
		
		log.debug("[SRCommServiceImpl]-execReqProc() [PRE SELECT 시작]========================================");
		NexacroResult preSelectR = prePostSelectProc("PRE", pDataSetList);
		log.debug("[SRCommServiceImpl]-execReqProc() [PRE SELECT 종료] preSelectR.getDataSets().size():[{}]==================", preSelectR.getDataSets().size());
		
		log.debug("[SRCommServiceImpl]-execReqProc() [SELECT 시작]========================================");
		NexacroResult selectR = selectProc(pDataSetList);
		log.debug("[SRCommServiceImpl]-execReqProc() [SELECT 종료] selectR.getDataSets().size():[{}]====================", selectR.getDataSets().size());

		log.debug("[SRCommServiceImpl]-execReqProc() [POST SELECT 시작]========================================");
		NexacroResult postSelectR = prePostSelectProc("POST", pDataSetList);
		log.debug("[SRCommServiceImpl]-execReqProc() [POST SELECT 종료] postSelectR.getDataSets().size():[{}]=================", postSelectR.getDataSets().size());

		String[] selectNmArr			= new String[] {"preSelectR", "selectR", "postSelectR"};
		NexacroResult[] selectArr	= new NexacroResult[] {preSelectR, selectR, postSelectR};
		
		for (int i = 0; i < selectArr.length; i++) {

			if(selectArr[i] != null) {

				log.debug("[SRCommServiceImpl]-execReqProc() selectArr[{}].getDataSets().size():[{}]", i, selectArr[i].getDataSets().size());
				
				if(selectArr[i].getDataSets().size() > 0) {

					for(String dsNm : selectArr[i].getDataSets().keySet()) {
						
						Class resultClass = selectArr[i].getDataSets().get(dsNm).getClass();
						log.debug("[SRCommServiceImpl]-execReqProc() selectArr[{}] selectNmArr:[{}] dsNm:[{}] class:[{}]", i, selectNmArr[i], dsNm, selectArr[i].getDataSets().get(dsNm).getClass());
						
						if(resultClass == java.util.HashMap.class || resultClass == java.util.Map.class) {
							selectDataSetList.add(StringUtil.getDataSetObject(dsNm,  (Map<String, Object>) selectArr[i].getDataSets().get(dsNm)));						

						}else if(resultClass == java.util.List.class || resultClass == java.util.ArrayList.class) {
							selectDataSetList.add(StringUtil.getDataSetObject(dsNm,  (List<Map<String, Object>>) selectArr[i].getDataSets().get(dsNm)));

						}else if(resultClass == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
							MapMetaData metaData = (MapMetaData) selectArr[i].getDataSets().get(dsNm);
							log.debug("[SRCommServiceImpl]-execReqProc() selectArr[{}] metaData.getMetaData():\n{}",selectNmArr[i], metaData.getMetaData());
							Map<String, Object> metaDataMap = (Map<String, Object>) metaData.getMetaData();
							selectDataSetList.add(StringUtil.getDataSetObject(dsNm,  metaDataMap));
						}					
					}
				}
			}
		}

		pDataSetList.clear();
		pDataSetList.add(dsFormInfo);
		pDataSetList.add(dsSrBaseInfo_TOP);
		
		//조회로 얻은 데이터셋을 파람 데이터셋에 Add
		log.debug("[SRCommServiceImpl]-execReqProc() selectDataSetList.size():[" + selectDataSetList.size() + "]");
		for (int i = 0; i < selectDataSetList.size(); i++) {
			log.debug("[SRCommServiceImpl]-execReqProc() selectDataSetList i=" + i + " DsName:[" + selectDataSetList.get(i).getName() + "] rowCount:[" + selectDataSetList.get(i).getRowCount() + "]");
			int isExists = pDataSetList.indexOf(selectDataSetList.get(i).getName());	//중복된 데이터셋은 제거하기 위해
			log.debug("[SRCommServiceImpl]-execReqProc() i = " + i + " isExists : " + isExists);
			if(isExists == -1) pDataSetList.add(selectDataSetList.get(i));
		}

		//저장, 접수, 승인 서비스에 대한 dataset 목록 추출 및 셋팅
		//워크플로우 단계별 서비스 정의 목록 조회
		condMap = new HashMap<>();
		condMap.put("REQ_ID",					reqInfo.get().getReqId());
		condMap.put("REQ_TMPLAT_ID",		reqTmplatId);
		condMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
		condMap.put("PROC_GUBUN",		"SAVE");
		condMap.put("SAVE_GUBUN",			reqInfo.get().getSaveGubun());
		wfReqProcSvcInfo = srCommDao.selectReqProcSvcInfo(condMap);

		if(wfReqProcSvcInfo != null) {
			
			for (int i = 0; i < wfReqProcSvcInfo.size(); i++) {

				Map<String, Object> wfReqProcSvcInfoMap =wfReqProcSvcInfo.get(i);
				String rowWfProc	= StringUtil.safe(wfReqProcSvcInfoMap.get("WF_PROC_CD"));
				String inDs 			= StringUtil.safe(wfReqProcSvcInfoMap.get("IN_DATASET"));
				String svcNm			= StringUtil.safe(wfReqProcSvcInfoMap.get("SVC_NM"));
				
				Map<String, Object> svcWfProcInMap = new HashMap<>();
				
				String[] inDsArr = inDs.split(",");

				for (int j = 0; j < inDsArr.length; j++) {

					log.debug("[SRCommServiceImpl]-execReqProc() PROC_GUBUN SAVE 단계별Svc 생성등록 DataSet:[{}]", inDsArr[j] + "_" + rowWfProc);
//					pDataSetList.remove(inDsArr[j] + "_" + rowWfProc);
					int isExists = pDataSetList.indexOf(inDsArr[j] + "_" + rowWfProc);	//중복된 데이터셋은 제거하기 위해
					log.debug("[SRCommServiceImpl]-execReqProc() i = " + i + " isExists : " + isExists);

					if(isExists == -1) {

						if("sr/SRComm/callPrSrRevProc".equals(svcNm)) {

							if(("dsRevProc_" + reqInfo.get().getWfProcCd()).equals(inDsArr[j] + "_" + rowWfProc) && wfProcCd.equals(rowWfProc)) {
								
								DataSet dsWfProcSvcInDs = StringUtil.getDataSetObject(inDsArr[j] + "_" + rowWfProc, svcWfProcInMap);

								dsWfProcSvcInDs.setChangeStructureWithData(true);

								if(!dsWfProcSvcInDs.containsColumn("ROWFLAG")) {
									dsWfProcSvcInDs.addColumn("ROWFLAG", 1);									
								}

								if(!dsWfProcSvcInDs.containsColumn("REQ_ID")) {
									dsWfProcSvcInDs.addColumn("REQ_ID", 1);									
								}

								if(!dsWfProcSvcInDs.containsColumn("WF_PROC_CD")) {
									dsWfProcSvcInDs.addColumn("WF_PROC_CD", 1);									
								}

								if(!dsWfProcSvcInDs.containsColumn("USER_ID")) {
									dsWfProcSvcInDs.addColumn("USER_ID", 1);
								}

								if(!dsWfProcSvcInDs.containsColumn("PROC_EXAM_OPIN")) {
									dsWfProcSvcInDs.addColumn("PROC_EXAM_OPIN", 1);									
								}

								if(!dsWfProcSvcInDs.containsColumn("ORG_USER_ID")) {
									dsWfProcSvcInDs.addColumn("ORG_USER_ID", 1);									
								}

								if(!dsWfProcSvcInDs.containsColumn("GUBUN_NM")) {
									dsWfProcSvcInDs.addColumn("GUBUN_NM", 1);									
								}

								dsWfProcSvcInDs.setChangeStructureWithData(false);

								if(dsWfProcSvcInDs.getRowCount() == 0) {
									dsWfProcSvcInDs.newRow();
									dsWfProcSvcInDs.set(0, "ROWFLAG", "I");
								}else {
									dsWfProcSvcInDs.set(0, "ROWFLAG", "U");
								}
								dsWfProcSvcInDs.set(0, "REQ_ID",					reqInfo.get().getReqId());
								dsWfProcSvcInDs.set(0, "WF_PROC_CD",			reqInfo.get().getWfProcCd());
								dsWfProcSvcInDs.set(0, "USER_ID",					userId);
								dsWfProcSvcInDs.set(0, "PROC_EXAM_OPIN",	StringUtil.safe(dsData.get("OPINION")));
								dsWfProcSvcInDs.set(0, "ORG_USER_ID",			orgUserId);
								dsWfProcSvcInDs.set(0, "GUBUN_NM",			"처리자");
								pDataSetList.add(dsWfProcSvcInDs);
								log.debug("[SRCommServiceImpl]-execReqProc() [ELSE] 단계별Svc 생성등록 DataSet:[{}]\n{}", inDsArr[j] + "_" + rowWfProc, dsWfProcSvcInDs.saveXml());
//								log.debug("DATASET==========================================\n" + dsWfProcSvcInDs.saveXml());
							}

						}else {

							if(("dsCond_" + rowWfProc).equals(inDsArr[j] + "_" + rowWfProc)) {

								DataSet dsWfProcSvcInDs = StringUtil.getDataSetObject(inDsArr[j] + "_" + rowWfProc, svcWfProcInMap);
								dsWfProcSvcInDs.setChangeStructureWithData(true);

								if(!dsWfProcSvcInDs.containsColumn("REQ_ID")) {
									dsWfProcSvcInDs.addColumn("REQ_ID", 1);									
								}
								
								if(!dsWfProcSvcInDs.containsColumn("REQ_TMPLAT_ID")) {
									dsWfProcSvcInDs.addColumn("REQ_TMPLAT_ID", 1);									
								}
								
								if(!dsWfProcSvcInDs.containsColumn("WF_PROC_CD")) {
									dsWfProcSvcInDs.addColumn("WF_PROC_CD", 1);									
								}
								dsWfProcSvcInDs.setChangeStructureWithData(false);

								dsWfProcSvcInDs.newRow();
								dsWfProcSvcInDs.set(0, "REQ_ID", reqInfo.get().getReqId());
								dsWfProcSvcInDs.set(0, "REQ_TMPLAT_ID", reqInfo.get().getReqTmplatId());
								dsWfProcSvcInDs.set(0, "WF_PROC_CD", rowWfProc);
								pDataSetList.add(dsWfProcSvcInDs);
								log.debug("[SRCommServiceImpl]-execReqProc() [ELSE] 단계별Svc 생성등록 DataSet:[{}]\n{}", inDsArr[j] + "_" + rowWfProc, dsWfProcSvcInDs.saveXml());
							}
						}
					}
				}
			}

			for (int i = 0; i < wfReqProcSvcInfo.size(); i++) {

				Map<String, Object> wfReqProcSvcInfoMap =wfReqProcSvcInfo.get(i);
				String rowWfProc	= StringUtil.safe(wfReqProcSvcInfoMap.get("WF_PROC_CD"));
				String inDs 			= StringUtil.safe(wfReqProcSvcInfoMap.get("IN_DATASET"));
				String svcNm			= StringUtil.safe(wfReqProcSvcInfoMap.get("SVC_NM"));

				String[] inDsArr = inDs.split(",");

				//서비스/일반요청-요청검토 단계(WF_PROC_2040)
				if("WFT250033".equals(reqInfo.get().getReqTmplatId()) && "APPR0G00".equals(reqInfo.get().getMapWfProcCd())) {

					if("sr/SR5000D/save02".equals(svcNm)) {
				
						for (int j = 0; j < inDsArr.length; j++) {

							int isExists = pDataSetList.indexOf("dsWfChm_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsWfChm_" + rowWfProc + " isExists : " + isExists);
							
							if("dsWfChm".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsSrBaseInfo_TOP"));
									paramDsList.add(pDataSetList.get("dsWfSrm_" + rowWfProc));
									DataSet dsWfChm = SrWorkflowDataSet.getSR5000DSave02DS(reqInfo, sc, paramDsList, "dsWfChm", rowWfProc);
									pDataSetList.add(dsWfChm);
								}
							}
						}
					}

				//문제등록-변경이관 단계(WF_PROC_2030)
				}else if("WFT250050".equals(reqInfo.get().getReqTmplatId()) && "PBM000B".equals(reqInfo.get().getMapWfProcCd())) {

					if("sr/SR5000D/save03".equals(svcNm)) {
				
						for (int j = 0; j < inDsArr.length; j++) {

							int isExists = pDataSetList.indexOf("dsWfChm_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsWfChm_" + rowWfProc + " isExists : " + isExists);
							
							if("dsWfChm".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsSrBaseInfo_TOP"));
									paramDsList.add(pDataSetList.get("dsWfPbm_" + rowWfProc));
									DataSet dsWfChm = SrWorkflowDataSet.getSR5000DSave03DS(reqInfo, sc, paramDsList, "dsWfChm", rowWfProc);
									pDataSetList.add(dsWfChm);
								}
							}
						}
					}

				//변경등록(APP)-변경완료(WF_PROC_2030) OR 변경등록(APP)문제-변경완료(WF_PROC_2030)
				}else if( (("WFT240159".equals(reqInfo.get().getReqTmplatId()) || "WFT250027".equals(reqInfo.get().getReqTmplatId())) && "CHM0005".equals(reqInfo.get().getMapWfProcCd())) ) {

					if("chm/CHMInterface/cfInterface13".equals(svcNm)) {
						
						for (int j = 0; j < inDsArr.length; j++) {

							int isExists = pDataSetList.indexOf("dsTransData_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsTransData_" + rowWfProc + " isExists : " + isExists);
							
							if("dsTransData".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsWfChm3_" + rowWfProc));
									DataSet dsTransData = SrWorkflowDataSet.getCHMInterfaceCfInterface13DS(reqInfo, sc, paramDsList, "dsTransData", rowWfProc);
									pDataSetList.add(dsTransData);
								}
							}
						}
					}

				//변경등록(APP)-변경완료(WF_PROC_2070) OR 변경등록(APP)문제-변경완료(WF_PROC_2050)
				}else if( (("WFT240159".equals(reqInfo.get().getReqTmplatId()) || "WFT250027".equals(reqInfo.get().getReqTmplatId())) &&
							"CHM0006".equals(reqInfo.get().getMapWfProcCd())) ) {
					
					if("chm/CHM010P/updatBepoUser".equals(svcNm)) {
						
						for (int j = 0; j < inDsArr.length; j++) {

							int isExists = pDataSetList.indexOf("dsTransData_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsTransData_" + rowWfProc + " isExists : " + isExists);
							
							if("dsTransData".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									
									DataSet dsTransData = SrWorkflowDataSet.getCHM010PUpdatBepoUserDS(reqInfo, sc, "dsTransData", rowWfProc);
									pDataSetList.add(dsTransData);
								}
							}
						}
					}

				//변경 Job-PaSS-등록 OR 변경등록(APP)-등록 OR 변경등록(APP)문제-등록
				}else if( ("WFT240157".equals(reqInfo.get().getReqTmplatId()) || "WFT240159".equals(reqInfo.get().getReqTmplatId()) || "WFT250027".equals(reqInfo.get().getReqTmplatId()) ) &&
							"WF_PROC_1000".equals(reqInfo.get().getWfProcCd()) ) {

					if("chm/CHM010P/insertSrMaPrjSub".equals(svcNm)) {
						
						for (int j = 0; j < inDsArr.length; j++) {

							int isExists = pDataSetList.indexOf("dsRelData" + "_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsRelData_" + rowWfProc + " isExists : " + isExists);
							
							if("dsRelData".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsWfChm_" + rowWfProc));
									DataSet dsTransData = SrWorkflowDataSet.getCHM010PInsertSrMaPrjSubDS(reqInfo, sc, paramDsList, "dsRelData", rowWfProc);
									pDataSetList.add(dsTransData);
								}
							}
						}
					}

				//변경등록(APP)-변경작업 OR 변경등록(APP)문제-변경작업
				}else if( ("WFT240159".equals(reqInfo.get().getReqTmplatId()) || "WFT250027".equals(reqInfo.get().getReqTmplatId()) ) &&
							"CHM0004".equals(reqInfo.get().getMapWfProcCd()) ) {

					if("chm/CHMInterface/cfInterface03".equals(svcNm)) {
						
						for (int j = 0; j < inDsArr.length; j++) {
	
							int isExists = pDataSetList.indexOf("dsParam3_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsParam3_" + rowWfProc + " isExists : " + isExists);
							
							if("dsParam3".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsParam3_" + rowWfProc));
									DataSet dsTransData = SrWorkflowDataSet.getCHM010PCfInterface03DS(reqInfo, sc, paramDsList, "dsParam3", rowWfProc);
									pDataSetList.add(dsTransData);
								}
							}
						}
					}
				
				//변경등록(APP)-사용자테스트 승인
				}else if( "WFT240159".equals(reqInfo.get().getReqTmplatId()) && "CHM00053".equals(reqInfo.get().getMapWfProcCd()) ) {

					if("chm/CHMInterface/cfInterface04".equals(svcNm)) {
						
						for (int j = 0; j < inDsArr.length; j++) {
	
							int isExists = pDataSetList.indexOf("dsParam_" + rowWfProc);
							
							log.debug("[SRCommServiceImpl]-execReqProc() dsParam_" + rowWfProc + " isExists : " + isExists);
							
							if("dsParam".equals(inDsArr[j])) {
								
								if(isExists == -1) {
									DataSetList paramDsList = new DataSetList();
									paramDsList.add(pDataSetList.get("dsWfChm6_" + rowWfProc));
									DataSet dsTransData = SrWorkflowDataSet.getCHM010PCfInterface04DS(reqInfo, sc, paramDsList, "dsParam", rowWfProc);
									pDataSetList.add(dsTransData);
								}
							}
						}
					}
				}
			}
		}

		//결재 최종승인인 경우만
		if("Y".equals(reqInfo.get().getLastApprovalYn())) {
			
			//최종승인 서비스에 대한 dataset 목록 추출 및 셋팅
			//워크플로우 단계별 서비스 정의 목록 조회
			condMap = new HashMap<>();
			condMap.put("REQ_ID",					reqInfo.get().getReqId());
			condMap.put("REQ_TMPLAT_ID",		reqTmplatId);
			condMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
			condMap.put("PROC_GUBUN",		"SAVE-END");
			condMap.put("SAVE_GUBUN",			reqInfo.get().getSaveGubun());
			wfReqProcSvcInfo = srCommDao.selectReqProcSvcInfo(condMap);

			if(wfReqProcSvcInfo != null) {
				
				for (int i = 0; i < wfReqProcSvcInfo.size(); i++) {

					Map<String, Object> wfReqProcSvcInfoMap =wfReqProcSvcInfo.get(i);
					String rowWfProc	= StringUtil.safe(wfReqProcSvcInfoMap.get("WF_PROC_CD"));
					String inDs 			= StringUtil.safe(wfReqProcSvcInfoMap.get("IN_DATASET"));
					String svcNm			= StringUtil.safe(wfReqProcSvcInfoMap.get("SVC_NM"));
					
					Map<String, Object> svcWfProcInMap = new HashMap<>();

					String[] inDsArr = inDs.split(",");
					
					for (int j = 0; j < inDsArr.length; j++) {
						int isExists = pDataSetList.indexOf(inDsArr[j] + "_" + rowWfProc);	//중복된 데이터셋은 제거하기 위해
						log.debug("[SRCommServiceImpl]-execReqProc() i = " + i + " isExists : " + isExists);
						log.debug("[SRCommServiceImpl]-execReqProc() 단계별Svc 생성등록 DataSet:[{}]", inDsArr[j] + "_" + rowWfProc);

						if(isExists == -1) {

							if(("dsCond_" + rowWfProc).equals(inDsArr[j] + "_" + rowWfProc)) {

								DataSet dsWfProcSvcInDs = StringUtil.getDataSetObject(inDsArr[j] + "_" + rowWfProc, svcWfProcInMap);
								dsWfProcSvcInDs.setChangeStructureWithData(true);

								if(!dsWfProcSvcInDs.containsColumn("REQ_ID")) {
									dsWfProcSvcInDs.addColumn("REQ_ID", 1);									
								}
								
								if(!dsWfProcSvcInDs.containsColumn("WF_PROC_CD")) {
									dsWfProcSvcInDs.addColumn("WF_PROC_CD", 1);									
								}
								dsWfProcSvcInDs.setChangeStructureWithData(false);

								dsWfProcSvcInDs.newRow();
								dsWfProcSvcInDs.set(0, "REQ_ID", reqInfo.get().getReqId());
								dsWfProcSvcInDs.set(0, "WF_PROC_CD", rowWfProc);
								pDataSetList.add(dsWfProcSvcInDs);
								log.debug("[SRCommServiceImpl]-execReqProc() PROC_GUBUN SAVE-END [IF] 단계별Svc 생성등록 DataSet:[{}]\n{}", inDsArr[j] + "_" + rowWfProc, dsWfProcSvcInDs.saveXml());

							}else {

								DataSet dsWfProcSvcInDs = StringUtil.getDataSetObject(inDsArr[j] + "_" + rowWfProc, svcWfProcInMap);
								
								dsWfProcSvcInDs.setChangeStructureWithData(true);
								
								if(!dsWfProcSvcInDs.containsColumn("ROWFLAG")) {
									dsWfProcSvcInDs.addColumn("ROWFLAG", 1);									
								}
								dsWfProcSvcInDs.setChangeStructureWithData(false);
								
								pDataSetList.add(dsWfProcSvcInDs);
								log.debug("[SRCommServiceImpl]-execReqProc() PROC_GUBUN SAVE-END [ELSE] 단계별Svc 생성등록 DataSet:[{}]\n{}", inDsArr[j] + "_" + rowWfProc, dsWfProcSvcInDs.saveXml());
							}
						}
					}
				}
			}
		}

		//화면에 지정된 저장 서비스용 기본 데이터셋 선언
		DataSet dsSaveService	= new DataSet("dsSaveService");
		dsSaveService.addColumn("WF_PROC_CD", 1);
		dsSaveService.addColumn("CALLBACK_ID", 1);
		dsSaveService.addColumn("SVC_NM", 1);
		dsSaveService.addColumn("FORM_INDS", 1);
		dsSaveService.addColumn("FORM_OUTDS", 1);
		
		//결재중이 아닌 경우만 결재선 저장을 체크
		if("REG".equals(saveGubun) || "REV".equals(saveGubun)) {

			condMap = new HashMap<>();
			condMap.put("REQ_TMPLAT_ID",		reqInfo.get().getReqTmplatId());
			condMap.put("REQ_TMPLAT_VER",	reqInfo.get().getReqTmplatVer());
			condMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
			String[] apvWfProcCdArr = sr0010DSvcImpl.getApvWfPorCdStr(condMap, false);
			log.debug("[SRCommServiceImpl]-execReqProc() apvWfProcCdArr:[{}]", apvWfProcCdArr);
			
			if(apvWfProcCdArr != null) {
				log.debug("[SRCommServiceImpl]-execReqProc() apvWfProcCdArr.length:[{}]", apvWfProcCdArr.length);
			}

			if(apvWfProcCdArr != null && apvWfProcCdArr.length > 0) {
				
				//결재선 처리용 DataSet 선언
				DataSet dsWfApprovalMt_APPV = new DataSet();
				DataSet dsWfApprovalRefMt_APPV = new DataSet();
				
				//결재선 해당 단계 목록에 해당하는 결재 대상자 목록을 추출한다. 
				//REQ_TMPLAT_ID, REQ_TMPLAT_VER, REQ_ID, WF_FUNC_CD
				condMap = new HashMap<>();
				condMap.put("REQ_ID",					reqInfo.get().getReqId());
				condMap.put("REQ_TMPLAT_ID",		reqInfo.get().getReqTmplatId());
				condMap.put("REQ_TMPLAT_VER",	reqInfo.get().getReqTmplatVer());
				condMap.put("WF_PROC_CD",			reqInfo.get().getWfProcCd());
				condMap.put("WF_FUNC_CD",			reqInfo.get().getWfFuncCd());
				List<Map<String, Object>> wfApprovalMt = sr0010DSvcImpl.getProcAppvUserList(condMap, true);	//단계별 결재선을 취합해서 UI에 전체로 보낼 LIST
				
				if(wfApprovalMt != null) {
					
					if(wfApprovalMt.size() > 0) {
						dsWfApprovalMt_APPV = StringUtil.getDataSetObject("dsWfApprovalMt_APPV",  wfApprovalMt);
	
					}else {
						
						if("N".equals(jobReserveYn)) {

							sc.get().setScSessionMsg("일괄 처리시 요청서번호:[" + reqId + "]에 대한 요청서 결재자 정보가 설정되지 않아 처리 실패하였습니다.");
							log.debug("[SRCommServiceImpl] execReqProc() [wfReqRegTblInfo] IS NULL 일괄 처리시 요청서번호:[" + reqId + "]에 대한 요청서 결재자 정보가 설정되지 않아 처리 실패하였습니다.");
							throw new Exception("[SRCommServiceImpl]-execReqProc() wfApprovalMt IS NULL");

						}else {
							return "[예약등록] 요청서번호:[" + reqId + "]에 대한 요청서 결재자 정보가 설정되지 않아 처리 실패하였습니다.";
						}
					}
				}
				
				List<Map<String, Object>> wfApprovalRefMt = sr0010DSvcImpl.getProcAppvRefUserList(condMap);	//단계별 결재선을 취합해서 UI에 전체로 보낼 LIST
				
				if(wfApprovalRefMt != null) {
					
					if(wfApprovalRefMt.size() > 0) {
						dsWfApprovalRefMt_APPV = StringUtil.getDataSetObject("dsWfApprovalRefMt_APPV",  wfApprovalRefMt);
					}
				}

				int addRow = dsSaveService.newRow();
				dsSaveService.set(addRow, "WF_PROC_CD", "APPV");
				dsSaveService.set(addRow, "CALLBACK_ID", "save01");
				dsSaveService.set(addRow, "SVC_NM",		"sr/SR0010D/save01");
				dsSaveService.set(addRow, "FORM_INDS",	"dsWfApprovalMt_APPV,dsWfApprovalRefMt_APPV");

	//			if(wfApprovalMt.getClass() == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
	//
	//				MapMetaData metaData = (MapMetaData) wfApprovalMt;
	//				log.debug("metaData.getMetaData():\n" + metaData.getMetaData());
	//				Map<String, Object> metaDataMap = (Map<String, Object>) metaData.getMetaData();
	//				dsWfApprovalMt_APPV = StringUtil.getDataSetObject("dsWfApprovalMt_APPV",  metaDataMap);
	//				
	//			}else {
	//				dsWfApprovalMt_APPV = StringUtil.getDataSetObject("dsWfApprovalMt_APPV",  wfApprovalMt);
	//			}
				log.debug("[SRCommServiceImpl]-execReqProc() dsWfApprovalMt_APPV.saveXml():\n{}", dsWfApprovalMt_APPV.saveXml());
				log.debug("[SRCommServiceImpl]-execReqProc() dsWfApprovalRefMt_APPV.saveXml():\n{}", dsWfApprovalRefMt_APPV.saveXml());
			}
		}
		pDataSetList.add(dsSaveService);
		
		if("APV".equals(saveGubun) || "RTRN".equals(saveGubun) || "REV".equals(saveGubun) || "SCRN_RTRN".equals(saveGubun)) {
			
			DataSet dsApprInfo	= new DataSet("dsApprInfo");
			dsApprInfo.addColumn("APPR_DESC", 1);
			int aRow = dsApprInfo.newRow();
			dsApprInfo.set(aRow, "APPR_DESC", StringUtil.safe(dsData.get("OPINION")));
			pDataSetList.add(dsApprInfo);
		}
		log.debug("[SRCommServiceImpl]-execReqProc() 결재의견:[{}]", srBaseInfo.get("OPINION"));
		
		for (int i = 0; i < pDataSetList.size(); i++) {
			log.debug("[SRCommServiceImpl]-execReqProc() pDataSetList DATASET_NM:[{}]", pDataSetList.get(i).getName());
		}
		
		NexacroResult preSaveR = new NexacroResult();
		
		try {
			log.debug("[SRCommServiceImpl]-execReqProc() [PRE SAVE 시작]========================================");
			preSaveR = prePostSaveProc("PRE", pDataSetList);
			log.debug("[SRCommServiceImpl]-execReqProc() [PRE SAVE 종료] preSaveR.getDataSets().size():[{}]==================", preSaveR.getDataSets().size());

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(jobReserveYn)) {
				sc.get().setScSessionMsg(e.getMessage());
			}else {
				return e.getMessage();
			}
		}
		
		NexacroResult saveR = new NexacroResult();
		try {
			log.debug("[SRCommServiceImpl]-execReqProc() [SAVE 시작]========================================");
			saveR = saveProc(pDataSetList);
			log.debug("[SRCommServiceImpl]-execReqProc() [SAVE 종료] saveR.getDataSets().size():[{}]====================", saveR.getDataSets().size());

		}catch(Exception e) {
			e.printStackTrace();
			log.debug("[SRCommServiceImpl]-execReqProc() [saveProc Exception ====================" + e.getMessage());
			if("N".equals(jobReserveYn)) {
				sc.get().setScSessionMsg(e.getMessage());
			}else {
				return e.getMessage();
			}
		}
		
		NexacroResult postSaveR = new NexacroResult();
		try {
			log.debug("[SRCommServiceImpl]-execReqProc() [POST SAVE 시작]========================================");
			postSaveR = prePostSaveProc("POST", pDataSetList);
			log.debug("[SRCommServiceImpl]-execReqProc() [POST SAVE 종료] postSaveR.getDataSets().size():[{}]=================", postSaveR.getDataSets().size());

		}catch(Exception e) {
			e.printStackTrace();
			if("N".equals(jobReserveYn)) {
				sc.get().setScSessionMsg(e.getMessage());
			}else {
				return e.getMessage();
			}
		}

//		if("N".equals(jobReserveYn)) {
//
//			String[] saveNmArr			= new String[] {"preSaveR", "saveR", "postSaveR"};
//			NexacroResult[] saveArr	= new NexacroResult[] {preSaveR, saveR, postSaveR};
//			
//			for (int i = 0; i < saveArr.length; i++) {
//	
//				if(saveArr[i] != null) {
//	
//					log.debug("[SRCommServiceImpl]-execReqProc() saveArr[{}].getDataSets().size():[{}]", i, saveArr[i].getDataSets().size());
//					
//					if(selectArr[i].getDataSets().size() > 0) {
//	
//						for(String dsNm : saveArr[i].getDataSets().keySet()) {
//							
//							Class resultClass = saveArr[i].getDataSets().get(dsNm).getClass();
//							log.debug("[SRCommServiceImpl]-execReqProc() saveArr[{}] saveNmArr:[{}] dsNm:[{}] class:[{}]", saveNmArr[i], dsNm, saveArr[i].getDataSets().get(dsNm).getClass());
//							
//							if(resultClass == java.util.HashMap.class || resultClass == java.util.Map.class) {
//								saveDataSetList.add(StringUtil.getDataSetObject(dsNm,  (Map<String, Object>) saveArr[i].getDataSets().get(dsNm)));						
//	
//							}else if(resultClass == java.util.List.class || resultClass == java.util.ArrayList.class) {
//								saveDataSetList.add(StringUtil.getDataSetObject(dsNm,  (List<Map<String, Object>>) saveArr[i].getDataSets().get(dsNm)));
//	
//							}else if(resultClass == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
//								MapMetaData metaData = (MapMetaData) saveArr[i].getDataSets().get(dsNm);
//								log.debug("[SRCommServiceImpl]-execReqProc() saveArr[{}] metaData.getMetaData():\n{}",saveArr[i], metaData.getMetaData());
//								Map<String, Object> metaDataMap = (Map<String, Object>) metaData.getMetaData();
//								saveDataSetList.add(StringUtil.getDataSetObject(dsNm,  metaDataMap));
//							}					
//						}
//					}
//				}
//			}
//		}
//		
//		log.debug("[SRCommServiceImpl]-execReqProc() selectDataSetList.size():[" + selectDataSetList.size() + "]");
//		for (int i = 0; i < selectDataSetList.size(); i++) {
//			log.debug("[SRCommServiceImpl]-execReqProc() selectDataSetList i=" + i + " DsName:[" + selectDataSetList.get(i).getName() + "] rowCount:[" + selectDataSetList.get(i).getRowCount() + "]");
//		}
		//throw new Exception("강제 Exception");
		return "";
	}

	/**
	 * 요청서 예약등록 실행
	 * @param Map<String, Object>
	 * @return void 
	 */
	public String execReserveProc(Map<String, Object> reserveData) throws Exception {

		//reserveData
		Map<String, Object> dsData = new HashMap<String, Object>();
		dsData.put("JOB_RESERVE_YN", "Y");
		dsData.put("REQ_ID", reserveData.get("PK1"));
		dsData.put("SAVE_GUBUN", "REG");
		dsData.put("SEQ", -1);
		dsData.put("TEMP_SAVE_YN", "N");
		dsData.put("WF_FUNC_CD", "WF_FUNC_00");		
		
		Map<String, Object> srBaseInfo = sr0000Dao.select01(dsData);

		dsData.put("WF_PROC_CD",			srBaseInfo.get("WF_PROC_CD"));
		dsData.put("MAP_WF_PROC_CD",	srBaseInfo.get("MAP_WF_PROC_CD"));
		dsData.put("REQ_STAT_CD",		srBaseInfo.get("REQ_STAT_CD"));

		MockHttpServletRequest mRequest = new MockHttpServletRequest();
		mRequest.setMethod("POST");
		RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(mRequest));
//		log.debug("1111111111111111 request.getClass().getName() : " + request.getClass().getName());
		
		String rtnStr = "";
		
		try {
			
			rtnStr = execReqProc(dsData);
			log.debug("TRY rtnStr : " + rtnStr);

			if("".equals(rtnStr)) {
				sr0000dSvc.updateReservProcYn(StringUtil.safe(reserveData.get("PK1")));
				srCommSvcImpl.sendNotiReq();
			}else {
				log.debug(rtnStr);
				throw new Exception(rtnStr);
			}

		}catch(Exception e) {
			e.printStackTrace();
			log.debug("CATCH rtnStr : " + rtnStr);
		}
		return rtnStr;
	}
	
	/**
	 * FN_SR_REQ_MAP_WF_PROC 함수의 인자를 통해 리턴값을 구한다.
	 * @param dsCond
	 * @return String
	 */
	public String selectFnSrReqMapWfProc(Map<String, Object> dsCond) {
		return srCommDao.selectFnSrReqMapWfProc(dsCond);
	}

	/**
	 * 요청서 통지설정 알림 발송
	 * @param DataSetList
	 * @return List<Map<String, Object>>
	 */
	public void sendNotiReq() throws Exception {
		
		log.debug("[SRCommController]-sendNotiReq() 알림발송 시작====================================");
		log.debug("[알림발송] reqInfo.get().getReqTmplatId():[{}]", reqInfo.get().getReqTmplatId());
		if("WFT250033".equals(reqInfo.get().getReqTmplatId()) || "WFT250048".equals(reqInfo.get().getReqTmplatId()) || "WFT250049".equals(reqInfo.get().getReqTmplatId())) {

			log.debug("[알림발송] reqInfo.get().getNextWfProcCd():[{}]", reqInfo.get().getNextWfProcCd());
			log.debug("[알림발송] reqInfo.get().getNextWfFuncCd():[{}]", reqInfo.get().getNextWfFuncCd());
			
			if("WF_PROC_1000".equals(reqInfo.get().getNextWfProcCd()) && "WF_FUNC_01".equals(reqInfo.get().getNextWfFuncCd())) {
				reqInfo.get().setNextWfProcCd("WF_PROC_2010");
				reqInfo.get().setNextWfFuncCd("WF_FUNC_04");

				Map<String, Object> condMap = new HashMap<>();
				condMap.put("REQ_ID", 			reqInfo.get().getReqId());
				condMap.put("WF_PROC_CD", reqInfo.get().getNextWfProcCd());
				condMap.put("GUBUN",			"CODE");
				reqInfo.get().setNextMapWfProcCd(selectFnSrReqMapWfProc(condMap));
				
				condMap.put("GUBUN",				"NAME");
				condMap.put("APPR_LVL_SEQ",	-1);
				reqInfo.get().setNextWfProcNm(selectFnSrReqMapWfProc(condMap));
			}
		}
		Map<String, Object> reqData = GlobalReqInfo.getMapReqInfo(reqInfo);
		fommScheduleCommonSvcImpl.sendFommNotiMngDtByReqProc(reqData, true);
		log.debug("[SRCommController]-sendNotiReq() 알림발송 끝====================================");
	}

	/**
	 * 현재 결재 단계의 진행중인 결재차수를 구한다.
	 * @param dsCond
	 * @return int
	 */
	public int selectAppvWfApprLvlSeq(Map<String, Object> dsCond) {
		return srCommDao.selectAppvWfApprLvlSeq(dsCond);
	}
	
	/**
	 * 단계 처리에 앞서 지정된 담당자 정보를 한 ROW로 조회한다.  
	 * @param dsCond
	 * @return String
	 */
	public Map<String, Object> selectCgerUserInfo(Map<String, Object> dsCond) {
		return srCommDao.selectCgerUserInfo(dsCond);
	}

	/**
	 * 단계 처리에 앞서 지정된 결재선 정보를 한 ROW로 조회한다.
	 * @param dsCond
	 * @return String
	 */
	public Map<String, Object> selectApvUserInfo(Map<String, Object> dsCond) {
		return srCommDao.selectApvUserInfo(dsCond);
}
}