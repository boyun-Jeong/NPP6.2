package com.base.sr.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.inject.Inject;
import jakarta.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.base.com.vo.GlobalReqInfo;
import com.base.com.vo.SessionContext;

public class SrWorkflowDataSet {

	private static Logger log = LoggerFactory.getLogger(SRCommServiceImpl.class);

	//SR5017_D06.xfdl
	public static DataSet getSR5000DSave02DS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {
		
		//dsWfChm
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("SRM_REQ_ID"))						rtnDataSet.addColumn("SRM_REQ_ID", 1);								
		if(!rtnDataSet.containsColumn("REL_PROC_TYPE"))					rtnDataSet.addColumn("REL_PROC_TYPE", 1);
		if(!rtnDataSet.containsColumn("EM_YN"))								rtnDataSet.addColumn("EM_YN", 1);
		if(!rtnDataSet.containsColumn("REQ_TMPLAT_ID"))				rtnDataSet.addColumn("REQ_TMPLAT_ID", 1);
		if(!rtnDataSet.containsColumn("WF_PROC_CD"))					rtnDataSet.addColumn("WF_PROC_CD", 1);
		if(!rtnDataSet.containsColumn("ING_PHASE"))						rtnDataSet.addColumn("ING_PHASE", 1);
		if(!rtnDataSet.containsColumn("TITLE"))								rtnDataSet.addColumn("TITLE", 1);
		if(!rtnDataSet.containsColumn("REQ_WISH_DT"))					rtnDataSet.addColumn("REQ_WISH_DT", 1);
		if(!rtnDataSet.containsColumn("REQ_WISH_SDT"))					rtnDataSet.addColumn("REQ_WISH_SDT", 1);
		if(!rtnDataSet.containsColumn("CHM_CATEGORY"))				rtnDataSet.addColumn("CHM_CATEGORY", 1);
		if(!rtnDataSet.containsColumn("REQ_CONT"))						rtnDataSet.addColumn("REQ_CONT", 1);
		if(!rtnDataSet.containsColumn("PRE_CONF_USER_ID"))			rtnDataSet.addColumn("PRE_CONF_USER_ID", 1);
		if(!rtnDataSet.containsColumn("PRE_CONF_DEPT_ID"))			rtnDataSet.addColumn("PRE_CONF_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_DT"))							rtnDataSet.addColumn("REQ_DT", 1);
		if(!rtnDataSet.containsColumn("USER_ID"))							rtnDataSet.addColumn("USER_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_ID"))					rtnDataSet.addColumn("REQ_USER_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_DEPT_ID"))					rtnDataSet.addColumn("REQ_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_JBC_POSI"))			rtnDataSet.addColumn("REQ_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_NM"))					rtnDataSet.addColumn("REQ_USER_NM", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_ID"))				rtnDataSet.addColumn("SR_REQ_USER_ID", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_DEPT_ID"))				rtnDataSet.addColumn("SR_REQ_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_JBC_POSI"))		rtnDataSet.addColumn("SR_REQ_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_NM"))				rtnDataSet.addColumn("SR_REQ_USER_NM", 1);
		
		if(!rtnDataSet.containsColumn("WORK_USER_ID"))					rtnDataSet.addColumn("WORK_USER_ID", 1);
		if(!rtnDataSet.containsColumn("WORK_DEPT_ID"))					rtnDataSet.addColumn("WORK_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("WORK_USER_JBC_POSI"))		rtnDataSet.addColumn("WORK_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("WORK_USER_NM"))				rtnDataSet.addColumn("WORK_USER_NM", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_ID"))					rtnDataSet.addColumn("SITE_USER_ID", 1);
		if(!rtnDataSet.containsColumn("SITE_DEPT_ID"))					rtnDataSet.addColumn("SITE_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_JBC_POSI"))			rtnDataSet.addColumn("SITE_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_NM"))					rtnDataSet.addColumn("SITE_USER_NM", 1);
		
		if(!rtnDataSet.containsColumn("SR_BRIEF"))							rtnDataSet.addColumn("SR_BRIEF", 1);
		if(!rtnDataSet.containsColumn("REQ_ID1"))							rtnDataSet.addColumn("REQ_ID1", 1);
		if(!rtnDataSet.containsColumn("REQ_ID2"))							rtnDataSet.addColumn("REQ_ID2", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID1"))						rtnDataSet.addColumn("UPMU_ID1", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID2"))						rtnDataSet.addColumn("UPMU_ID2", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID3"))						rtnDataSet.addColumn("UPMU_ID3", 1);
		
		if(!rtnDataSet.containsColumn("REQ_WISH_STIME"))				rtnDataSet.addColumn("REQ_WISH_STIME", 1);
		if(!rtnDataSet.containsColumn("AGREE_COMP_EDT"))			rtnDataSet.addColumn("AGREE_COMP_EDT", 1);
		if(!rtnDataSet.containsColumn("AGREE_COMP_ETIME"))			rtnDataSet.addColumn("AGREE_COMP_ETIME", 1);
		if(!rtnDataSet.containsColumn("RECP_PATH"))						rtnDataSet.addColumn("RECP_PATH", 1);
		if(!rtnDataSet.containsColumn("PL_LEVEL"))							rtnDataSet.addColumn("PL_LEVEL", 1);
		
		rtnDataSet.setChangeStructureWithData(false);

		DataSet dsSrBaseInfo	= new DataSet();
		DataSet dsWfSrm		= new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsSrBaseInfoTop") > -1) {
				dsSrBaseInfo = refDsList.get(i);

			}else if(refDsList.get(i).getName().indexOf("dsWfSrm_" + wfProcCd) > -1) {
				dsWfSrm = refDsList.get(i);
			}
		}

		// 서비스 요청시 변경이관
		if("1".equals(dsWfSrm.getString(0, "EM_YN"))) {

			int row = rtnDataSet.newRow();
			rtnDataSet.set(row, "SRM_REQ_ID", 					dsWfSrm.getString(row, "REQ_ID"));
			rtnDataSet.set(row, "REL_PROC_TYPE",				"SRM");
			rtnDataSet.set(row, "EM_YN",							dsWfSrm.getString(row, "EM_YN"));
			rtnDataSet.set(row, "REQ_TMPLAT_ID",				"WFT240159");
			rtnDataSet.set(row, "WF_PROC_CD",					"WF_PROC_2010");
			rtnDataSet.set(row, "ING_PHASE",					"CHM0003");
			rtnDataSet.set(row, "TITLE",								dsSrBaseInfo.getString(0, "TITLE"));
			rtnDataSet.set(row, "REQ_WISH_DT",				dsSrBaseInfo.getString(0, "REQ_WISH_DT"));		//희망완료일 - BASEINFO
			rtnDataSet.set(row, "REQ_WISH_SDT",				dsSrBaseInfo.getString(0, "REQ_WISH_DT"));		// 희망완료일 - WFCHM
			rtnDataSet.set(row, "CHM_CATEGORY",			"CCCT0B00");
			
			rtnDataSet.set(row, "REQ_CONT",					dsWfSrm.getString(row, "REQ_CONT"));
			rtnDataSet.set(row, "PRE_CONF_USER_ID",		dsWfSrm.getString(row, "PRE_CONF_USER_ID"));
			rtnDataSet.set(row, "PRE_CONF_DEPT_ID",		dsWfSrm.getString(row, "PRE_CONF_DEPT_ID"));
			
			Date date = new Date();
			SimpleDateFormat df	= new SimpleDateFormat("yyyyMMdd");

			rtnDataSet.set(row, "REQ_DT",							df.format(date));
			rtnDataSet.set(row, "USER_ID",						dsWfSrm.getString(row, "REQ_USER_ID"));
			rtnDataSet.set(row, "REQ_USER_ID",					dsWfSrm.getString(row, "WORK_USER_ID"));
			rtnDataSet.set(row, "REQ_DEPT_ID",					dsWfSrm.getString(row, "WORK_DEPT_ID"));
			rtnDataSet.set(row, "REQ_USER_JBC_POSI",		dsWfSrm.getString(row, "WORK_USER_JBC_POSI"));
			rtnDataSet.set(row, "REQ_USER_NM",				dsWfSrm.getString(row, "WORK_USER_NM"));
			
			rtnDataSet.set(row, "SR_REQ_USER_ID",			dsWfSrm.getString(row, "REQ_USER_ID"));
			rtnDataSet.set(row, "SR_REQ_DEPT_ID",			dsWfSrm.getString(row, "REQ_DEPT_ID"));
			rtnDataSet.set(row, "SR_REQ_USER_JBC_POSI",	dsWfSrm.getString(row, "REQ_USER_JBC_POSI"));
			rtnDataSet.set(row, "SR_REQ_USER_NM",			dsWfSrm.getString(row, "REQ_USER_NM"));

			rtnDataSet.set(row, "WORK_USER_ID",				dsWfSrm.getString(row, "WORK_USER_ID"));
			rtnDataSet.set(row, "WORK_DEPT_ID",				dsWfSrm.getString(row, "WORK_DEPT_ID"));
			rtnDataSet.set(row, "WORK_USER_JBC_POSI",	dsWfSrm.getString(row, "WORK_USER_JBC_POSI"));
			rtnDataSet.set(row, "WORK_USER_NM",			dsWfSrm.getString(row, "WORK_USER_NM"));
			rtnDataSet.set(row, "SITE_USER_ID",					dsWfSrm.getString(row, "SITE_USER_ID"));
			rtnDataSet.set(row, "SITE_DEPT_ID",					dsWfSrm.getString(row, "SITE_DEPT_ID"));
			rtnDataSet.set(row, "SITE_USER_JBC_POSI",		dsWfSrm.getString(row, "SITE_USER_JBC_POSI"));
			rtnDataSet.set(row, "SITE_USER_NM",				dsWfSrm.getString(row, "SITE_USER_NM"));
			
			rtnDataSet.set(row, "SR_BRIEF",						dsSrBaseInfo.getString(row, "TITLE"));
			rtnDataSet.set(row, "REQ_ID1",						dsWfSrm.getString(row, "REQ_ID1"));
			rtnDataSet.set(row, "REQ_ID2",						dsWfSrm.getString(row, "REQ_ID2"));
			rtnDataSet.set(row, "UPMU_ID1",						dsWfSrm.getString(row, "UPMU_ID1"));
			rtnDataSet.set(row, "UPMU_ID2",						dsWfSrm.getString(row, "UPMU_ID2"));
			rtnDataSet.set(row, "UPMU_ID3",						dsWfSrm.getString(row, "UPMU_ID3"));
			
			rtnDataSet.set(row, "REQ_WISH_STIME",			dsWfSrm.getString(row, "REQ_WISH_STIME"));
			rtnDataSet.set(row, "AGREE_COMP_EDT",			dsWfSrm.getString(row, "AGREE_COMP_EDT"));
			rtnDataSet.set(row, "AGREE_COMP_TIME",		dsWfSrm.getString(row, "AGREE_COMP_TIME"));
			rtnDataSet.set(row, "RECP_PATH",					"CSRIN001");	//접수경로
			rtnDataSet.set(row, "PL_LEVEL",						dsWfSrm.getString(row, "OUTP_MH"));
			log.debug("getSR5000DSave02DS\n" + rtnDataSet.saveXml());
		}
		return rtnDataSet;
	}
	
	//SR4200_D02.xfdl
	public static DataSet getSR5000DSave03DS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {
		
		//dsWfChm
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("SRM_REQ_ID"))						rtnDataSet.addColumn("SRM_REQ_ID", 1);								
		if(!rtnDataSet.containsColumn("REL_PROC_TYPE"))					rtnDataSet.addColumn("REL_PROC_TYPE", 1);

		if(!rtnDataSet.containsColumn("REQ_TMPLAT_ID"))				rtnDataSet.addColumn("REQ_TMPLAT_ID", 1);
		if(!rtnDataSet.containsColumn("WF_PROC_CD"))					rtnDataSet.addColumn("WF_PROC_CD", 1);
		if(!rtnDataSet.containsColumn("ING_PHASE"))						rtnDataSet.addColumn("ING_PHASE", 1);
		if(!rtnDataSet.containsColumn("TITLE"))								rtnDataSet.addColumn("TITLE", 1);
		if(!rtnDataSet.containsColumn("REQ_WISH_DT"))					rtnDataSet.addColumn("REQ_WISH_DT", 1);
		if(!rtnDataSet.containsColumn("REQ_WISH_SDT"))					rtnDataSet.addColumn("REQ_WISH_SDT", 1);
		if(!rtnDataSet.containsColumn("CHM_CATEGORY"))				rtnDataSet.addColumn("CHM_CATEGORY", 1);
		if(!rtnDataSet.containsColumn("REQ_CONT"))						rtnDataSet.addColumn("REQ_CONT", 1);
		if(!rtnDataSet.containsColumn("PRE_CONF_USER_ID"))			rtnDataSet.addColumn("PRE_CONF_USER_ID", 1);
		if(!rtnDataSet.containsColumn("PRE_CONF_DEPT_ID"))			rtnDataSet.addColumn("PRE_CONF_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_DT"))							rtnDataSet.addColumn("REQ_DT", 1);
		if(!rtnDataSet.containsColumn("USER_ID"))							rtnDataSet.addColumn("USER_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_ID"))					rtnDataSet.addColumn("REQ_USER_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_DEPT_ID"))					rtnDataSet.addColumn("REQ_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_JBC_POSI"))			rtnDataSet.addColumn("REQ_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("REQ_USER_NM"))					rtnDataSet.addColumn("REQ_USER_NM", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_ID"))				rtnDataSet.addColumn("SR_REQ_USER_ID", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_DEPT_ID"))				rtnDataSet.addColumn("SR_REQ_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_JBC_POSI"))		rtnDataSet.addColumn("SR_REQ_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("SR_REQ_USER_NM"))				rtnDataSet.addColumn("SR_REQ_USER_NM", 1);
		
		if(!rtnDataSet.containsColumn("WORK_USER_ID"))					rtnDataSet.addColumn("WORK_USER_ID", 1);
		if(!rtnDataSet.containsColumn("WORK_DEPT_ID"))					rtnDataSet.addColumn("WORK_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("WORK_USER_JBC_POSI"))		rtnDataSet.addColumn("WORK_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("WORK_USER_NM"))				rtnDataSet.addColumn("WORK_USER_NM", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_ID"))					rtnDataSet.addColumn("SITE_USER_ID", 1);
		if(!rtnDataSet.containsColumn("SITE_DEPT_ID"))					rtnDataSet.addColumn("SITE_DEPT_ID", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_JBC_POSI"))			rtnDataSet.addColumn("SITE_USER_JBC_POSI", 1);
		if(!rtnDataSet.containsColumn("SITE_USER_NM"))					rtnDataSet.addColumn("SITE_USER_NM", 1);
		
		if(!rtnDataSet.containsColumn("SR_BRIEF"))							rtnDataSet.addColumn("SR_BRIEF", 1);
		if(!rtnDataSet.containsColumn("REQ_ID1"))							rtnDataSet.addColumn("REQ_ID1", 1);
		if(!rtnDataSet.containsColumn("REQ_ID2"))							rtnDataSet.addColumn("REQ_ID2", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID1"))						rtnDataSet.addColumn("UPMU_ID1", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID2"))						rtnDataSet.addColumn("UPMU_ID2", 1);
		if(!rtnDataSet.containsColumn("UPMU_ID3"))						rtnDataSet.addColumn("UPMU_ID3", 1);
		
		if(!rtnDataSet.containsColumn("REQ_WISH_STIME"))				rtnDataSet.addColumn("REQ_WISH_STIME", 1);
		if(!rtnDataSet.containsColumn("AGREE_COMP_EDT"))			rtnDataSet.addColumn("AGREE_COMP_EDT", 1);
		if(!rtnDataSet.containsColumn("AGREE_COMP_ETIME"))			rtnDataSet.addColumn("AGREE_COMP_ETIME", 1);
		if(!rtnDataSet.containsColumn("RECP_PATH"))						rtnDataSet.addColumn("RECP_PATH", 1);
		if(!rtnDataSet.containsColumn("PL_LEVEL"))							rtnDataSet.addColumn("PL_LEVEL", 1);
		
		rtnDataSet.setChangeStructureWithData(false);

		DataSet dsSrBaseInfo	= new DataSet();
		DataSet dsWfPbm		= new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsSrBaseInfoTop") > -1) {
				dsSrBaseInfo = refDsList.get(i);

			}else if(refDsList.get(i).getName().indexOf("dsWfPbm_" + wfProcCd) > -1) {
				dsWfPbm = refDsList.get(i);
			}
		}

		int row = rtnDataSet.newRow();
		rtnDataSet.set(row, "SRM_REQ_ID", 					dsWfPbm.getString(row, "REQ_ID"));
		rtnDataSet.set(row, "REL_PROC_TYPE",				"PBM");															//문제

		rtnDataSet.set(row, "REQ_TMPLAT_ID",				"WFT250027");												// 변경관리
		rtnDataSet.set(row, "WF_PROC_CD",					"WF_PROC_2010");											// 접수단계
		rtnDataSet.set(row, "ING_PHASE",					"CHM0003");													// 접수단계
		rtnDataSet.set(row, "TITLE",								dsSrBaseInfo.getString(0, "TITLE"));
		rtnDataSet.set(row, "REQ_WISH_DT",				dsSrBaseInfo.getString(0, "REQ_WISH_DT"));		//희망완료일 - BASEINFO
		rtnDataSet.set(row, "REQ_WISH_SDT",				dsSrBaseInfo.getString(0, "REQ_WISH_DT"));		// 희망완료일 - WFCHM
		rtnDataSet.set(row, "CHM_CATEGORY",			"CCCT0B00");

		rtnDataSet.set(row, "REQ_CONT",					dsWfPbm.getString(row, "REQ_CONT"));
		rtnDataSet.set(row, "PRE_CONF_USER_ID",		dsWfPbm.getString(row, "PRE_CONF_USER_ID"));
		rtnDataSet.set(row, "PRE_CONF_DEPT_ID",		dsWfPbm.getString(row, "PRE_CONF_DEPT_ID"));
		
		Date date = new Date();
		SimpleDateFormat df	= new SimpleDateFormat("yyyyMMdd");

		rtnDataSet.set(row, "REQ_DT",							df.format(date));
		rtnDataSet.set(row, "USER_ID",						dsWfPbm.getString(row, "REQ_USER_ID"));
		rtnDataSet.set(row, "REQ_USER_ID",					dsWfPbm.getString(row, "REQ_USER_ID"));
		rtnDataSet.set(row, "REQ_DEPT_ID",					dsWfPbm.getString(row, "REQ_DEPT_ID"));
		rtnDataSet.set(row, "REQ_USER_JBC_POSI",		dsWfPbm.getString(row, "REQ_USER_JBC_POSI"));
		rtnDataSet.set(row, "REQ_USER_NM",				dsWfPbm.getString(row, "REQ_USER_NM"));
		
		rtnDataSet.set(row, "SR_REQ_USER_ID",			dsWfPbm.getString(row, "REQ_USER_ID"));
		rtnDataSet.set(row, "SR_REQ_DEPT_ID",			dsWfPbm.getString(row, "REQ_DEPT_ID"));
		rtnDataSet.set(row, "SR_REQ_USER_JBC_POSI",	dsWfPbm.getString(row, "REQ_USER_JBC_POSI"));
		rtnDataSet.set(row, "SR_REQ_USER_NM",			dsWfPbm.getString(row, "REQ_USER_NM"));

		/*
		rtnDataSet.set(row, "WORK_USER_ID",				dsWfPbm.getString(row, "WORK_USER_ID"));
		rtnDataSet.set(row, "WORK_DEPT_ID",				dsWfPbm.getString(row, "WORK_DEPT_ID"));
		rtnDataSet.set(row, "WORK_USER_JBC_POSI",	dsWfPbm.getString(row, "WORK_USER_JBC_POSI"));
		rtnDataSet.set(row, "WORK_USER_NM",			dsWfPbm.getString(row, "WORK_USER_NM"));
		*/
		rtnDataSet.set(row, "WORK_USER_ID",				dsWfPbm.getString(row, "REQ_USER_ID"));
		rtnDataSet.set(row, "WORK_DEPT_ID",				dsWfPbm.getString(row, "REQ_DEPT_ID"));
		rtnDataSet.set(row, "WORK_USER_JBC_POSI",	dsWfPbm.getString(row, "REQ_USER_JBC_POSI"));
		rtnDataSet.set(row, "WORK_USER_NM",			dsWfPbm.getString(row, "REQ_USER_NM"));

		rtnDataSet.set(row, "SITE_USER_ID",					dsWfPbm.getString(row, "SITE_USER_ID"));
		rtnDataSet.set(row, "SITE_DEPT_ID",					dsWfPbm.getString(row, "SITE_DEPT_ID"));
		rtnDataSet.set(row, "SITE_USER_JBC_POSI",		dsWfPbm.getString(row, "SITE_USER_JBC_POSI"));
		rtnDataSet.set(row, "SITE_USER_NM",				dsWfPbm.getString(row, "SITE_USER_NM"));
		
		rtnDataSet.set(row, "SR_BRIEF",						dsSrBaseInfo.getString(row, "TITLE"));
		rtnDataSet.set(row, "REQ_ID1",						dsWfPbm.getString(row, "REQ_ID1"));
		rtnDataSet.set(row, "REQ_ID2",						dsWfPbm.getString(row, "REQ_ID2"));
		rtnDataSet.set(row, "UPMU_ID1",						dsWfPbm.getString(row, "UPMU_ID1"));
		rtnDataSet.set(row, "UPMU_ID2",						dsWfPbm.getString(row, "UPMU_ID2"));
		rtnDataSet.set(row, "UPMU_ID3",						dsWfPbm.getString(row, "UPMU_ID3"));
		
		rtnDataSet.set(row, "REQ_WISH_STIME",			dsWfPbm.getString(row, "REQ_WISH_STIME"));
		rtnDataSet.set(row, "AGREE_COMP_EDT",			dsWfPbm.getString(row, "AGREE_COMP_DT"));
		rtnDataSet.set(row, "AGREE_COMP_TIME",		dsWfPbm.getString(row, "AGREE_COMP_TIME"));
		rtnDataSet.set(row, "RECP_PATH",					"CSRIN003");														//접수경로
		rtnDataSet.set(row, "PL_LEVEL",						dsWfPbm.getString(row, "OUTP_MH"));
		rtnDataSet.set(row, "CI_ID",								dsWfPbm.getString(row, "CI_ID"));

		log.debug("getSR5000DSave03DS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}

	//CHM0001_D03.xfdl
	public static DataSet getCHMInterfaceCfInterface13DS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {

		//dsTransData
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		DataSet dsWfChm3	= new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsWfChm3_" + wfProcCd) > -1) {
				dsWfChm3 = refDsList.get(i);
			}
		}
		
		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("IN_USER_ID"))						rtnDataSet.addColumn("IN_USER_ID", 1);								
		if(!rtnDataSet.containsColumn("IN_PROC_NUMBER"))			rtnDataSet.addColumn("IN_PROC_NUMBER", 1);
		rtnDataSet.setChangeStructureWithData(false);

		int row = rtnDataSet.newRow();
		rtnDataSet.set(row, "IN_USER_ID",		dsWfChm3.getString(0, "WORK_USER_ID"));	//이행후검토단계 배포자
		rtnDataSet.set(row, "REL_PROC_TYPE",	reqInfo.get().getReqId());

		log.debug("getCHMInterfaceCfInterface13DS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}
		
	//CHM0001_D03.xfdl
	public static DataSet getCHM010PUpdatBepoUserDS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, String creDsNm, String wfProcCd) {

		//dsTransData
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);
		
		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("IN_USER_ID"))						rtnDataSet.addColumn("IN_USER_ID", 1);								
		if(!rtnDataSet.containsColumn("IN_PROC_NUMBER"))			rtnDataSet.addColumn("IN_PROC_NUMBER", 1);
		rtnDataSet.setChangeStructureWithData(false);

		int row = rtnDataSet.newRow();
		rtnDataSet.set(row, "IN_USER_ID",		sc.get().getScUserId());
		rtnDataSet.set(row, "REL_PROC_TYPE",	reqInfo.get().getReqId());

		log.debug("getCHM010PUpdatBepoUserDS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}

	//CHM0001_D01.xfdl
	public static DataSet getCHM010PInsertSrMaPrjSubDS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {

		//dsRelData
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		DataSet dsWfChm	= new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsWfChm_" + wfProcCd) > -1) {
				dsWfChm = refDsList.get(i);
			}
		}
		
		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("REQ_ID"))					rtnDataSet.addColumn("REQ_ID", 1);								
		if(!rtnDataSet.containsColumn("REL_REQ_ID"))			rtnDataSet.addColumn("REL_REQ_ID", 1);
		if(!rtnDataSet.containsColumn("REL_PROC_TYPE"))		rtnDataSet.addColumn("REL_PROC_TYPE", 1);
		rtnDataSet.setChangeStructureWithData(false);

		int row = rtnDataSet.newRow();
		
		String strValue = dsWfChm.getString(0, "REL_PROC_ID");	//연관ID
		String strProcType = "";
		
	    if(strValue.startsWith("PBM")) { 
	    	strProcType = "PBM";
	    }else if(strValue.startsWith("ICM")) {
			strProcType = "ICM";
	    }else if(strValue.startsWith("SRM")) {
			strProcType = "SRM";
		}else{
			strProcType = "ERR"; // ID 유형이 잘못 들어감.
		}
		rtnDataSet.set(row, "REQ_ID",				reqInfo.get().getReqId());
		rtnDataSet.set(row, "REL_REQ_ID",		dsWfChm.getString(0, "REL_PROC_ID"));
		rtnDataSet.set(row, "REL_PROC_TYPE",	strProcType);

		log.debug("getCHM010PInsertSrMaPrjSubDS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}

	//CHM0001_D03.xfdl
	public static DataSet getCHM010PCfInterface03DS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {

		//dsParam3
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		DataSet dsWfChm3	= new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsWfChm3_" + wfProcCd) > -1) {
				dsWfChm3 = refDsList.get(i);
			}
		}
		
		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("INST_ID"))			rtnDataSet.addColumn("INST_ID", 1);								
		if(!rtnDataSet.containsColumn("PROJECT_NO"))	rtnDataSet.addColumn("PROJECT_NO", 1);
		rtnDataSet.setChangeStructureWithData(false);

		int row = rtnDataSet.newRow();
		rtnDataSet.set(row, "INST_ID",				dsWfChm3.getString(0, "CONF_MANAGE_ID"));
		rtnDataSet.set(row, "REL_REQ_ID",		reqInfo.get().getReqId());

		log.debug("getCHM010PCfInterface03DS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}

	//CHM0001_D06.xfdl
	public static DataSet getCHM010PCfInterface04DS(Provider<GlobalReqInfo> reqInfo, Provider<SessionContext> sc, DataSetList refDsList, String creDsNm, String wfProcCd) {

		//dsParam
		DataSet rtnDataSet = new DataSet(creDsNm + "_" + wfProcCd);

		DataSet dsWfChm6 = new DataSet();
		
		for (int i = 0; i < refDsList.size(); i++) {
			
			if(refDsList.get(i).getName().indexOf("dsWfChm6_" + wfProcCd) > -1) {
				dsWfChm6 = refDsList.get(i);
			}
		}
		
		rtnDataSet.setChangeStructureWithData(true);
		if(!rtnDataSet.containsColumn("INST_ID"))					rtnDataSet.addColumn("INST_ID", 1);								
		if(!rtnDataSet.containsColumn("IN_PROC_NUMBER"))	rtnDataSet.addColumn("IN_PROC_NUMBER", 1);
		if(!rtnDataSet.containsColumn("IN_USER_ID"))				rtnDataSet.addColumn("IN_USER_ID", 1);
		rtnDataSet.setChangeStructureWithData(false);

		int row = rtnDataSet.newRow();
		rtnDataSet.set(row, "INST_ID",					dsWfChm6.getString(0, "CONF_MANAGE_ID"));
		rtnDataSet.set(row, "IN_PROC_NUMBER",	reqInfo.get().getReqId());
		rtnDataSet.set(row, "IN_USER_ID",			sc.get().getScUserId());
		
		log.debug("getCHM010PCfInterface04DS\n" + rtnDataSet.saveXml());
		return rtnDataSet;
	}
}