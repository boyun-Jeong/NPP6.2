(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5017_D06");
            this.set_titletext("담당자 접수의견");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,276);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCegr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNextWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChm", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">예(CHM생성)</Col></Row><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">아니오(CHM없는개발)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfChm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_ADT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_JOB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_IMPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_IMPT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ADVC_PREP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_JOB_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_POST_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00_00","0","97",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","64",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","97","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접수의견");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaProcExam","stcProcExamOpin:5.00","102",null,"81","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("접수의견;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","64","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("계획시작");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"64","130","34","27%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("예상공수(Hour)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당자 접수의견");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlanMh","Static04:5","70","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number");
            obj.set_validationGroup("input01");
            obj.set_validation("예상공수;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPlanSdt","stcProcUserNm:5.00","70","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작일;NULL");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanStime","calPlanSdt:2.00","70","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작시간;NULL");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01","33%","64","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("계획완료");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPlanEdt","stcProcUserNm01:5","70","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("계획완료일;NULL");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanEtime","calPlanEdt:2.00","70","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("계획완료시간;NULL");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","0","186",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin00","0","186","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("처리계획");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaProcPlan","135.00","191",null,"81","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01_00","33%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"34","130","34","27%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("변경여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdChnYn","Static04_00:5.00","39","290","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsChm");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("변경여부;NULL");
            obj.set_enableevent("true");
            obj.set_visible("true");
            obj.set_validationGroup("input01");
            obj.set_enable("true");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcProcUserNm00:5","39","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskProcDate","stcProcUserNm01_00:5","39","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.getSetter("mask").set("@@@@-@@-@@ @@:@@:@@");
            obj.set_maskchar("_");
            obj.set_readonly("true");
            obj.set_format("####-##-## @@:@@:@@");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","Static04_00:24.00","38","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("예(CHM생성)");
            obj.set_color("red");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1820,276,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","txaProcExam","value","dsWfSrm","WORK_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calPlanSdt","value","dsWfSrm","PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calPlanEdt","value","dsWfSrm","PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mskPlanStime","value","dsWfSrm","PLAN_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","mskPlanEtime","value","dsWfSrm","PLAN_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","txaProcPlan","value","dsWfSrm","PROC_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdChnYn","value","dsWfSrm","EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtPlanMh","value","dsWfSrm","PLAN_MH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtUserNm","value","dsWfSrm","WORK_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","mskProcDate","value","dsWfSrm","WORK_RECP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5017_D06.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5017_D06.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5017_D06
        * 화면(명)	︰ 담당자 접수의견
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.02.17	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
        this.dsFormInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.dsFormInfo : null);
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fn_initDataset();
        }

        this.fn_initDataset = function()
        {
        	//this.dsWfSrmSub.setInsertRow();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	//trace("SR0200_D02 this.fnCallback() sSvcId:::[" + sSvcId + "]");

        	switch(sSvcId)
        	{
        		case "select" :
        			if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PLAN_SDT")) )
        			{
        				this.dsWfSrm.setColumn(0, "PLAN_SDT", Ex.util.today());
        				this.dsWfSrm.setColumn(0, "PLAN_STIME", "0900");
        			}

        			if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PLAN_EDT")) )
        			{
        				this.dsWfSrm.setColumn(0, "PLAN_EDT", this.dsWfSrm.getColumn(0, "AGREE_COMP_DT"));
        				this.dsWfSrm.setColumn(0, "PLAN_ETIME", "2359");
        			}

        			if(this.reqInfo.WF_PROC_CD == "WF_PROC_2040")
        			{
        				this.SDT_onchanged();
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0200_D02 this.fnPopupAfter() pID : " + pID + " varValue : " + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :	//
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "rdChnYn" :
        			this.rdChnYn.setFocusRed();
        			break;

        		case "calPlanSdt" :
        			this.calPlanSdt.setFocus();
        			break;

        		case "calPlanEdt" :
        			this.calPlanEdt.setFocus();
        			break;

        		case "mskPlanStime" :
        			this.mskPlanStime.setFocus();
        			break;

        		case "mskPlanEtime" :
        			this.mskPlanEtime.setFocus();
        			break;

        		case "alertCheckPlanEdtI" :
        			this.calPlanEdt.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
         this.fnCompInit = function()
        {
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());

        	if(this.dsWfSrm.getColumn(0,"SR_YN") == "N" || this.getOwnerFrame().pREQ_TMPLAT_ID == "WFT250049" || this.getOwnerFrame().pREQ_TMPLAT_ID == "WFT250048")
        	{
        		//this.rdChnYn.set_readonly(false); // 사전검토때 요청구분이 일반요청일경우 변경여부 설정못하도록  0429 이상국차장님요청으로 비활성화 안하고 서비스요청 - 예, 일반오청 - 아니오 디폴트
        		//this.rdChnYn.set_enable(false);
        		this.rdChnYn.set_value("0");
        	}
        	else
        	{
        		this.rdChnYn.set_value("1");
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	//if(this.reqInfo.WF_PROC_CD == "WF_PROC_2040"){
        	if(this.reqInfo.WF_PROC_NM == "요청검토")	// 요청서마다 WF_PROC_CD 다를수있어서 이름으로 체크
        	{
        		if( Ex.isEmpty(this.dsWfSrm.getColumn(0,"EM_YN")) )
        		{
        			var param = {
        				  id : "rdChnYn"
        				, msg	: "변경여부를 선택하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		var selecToday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_SDT"));
        		var selecEndday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_EDT"));

        		if(selecToday <  nexacro.toNumber(Ex.util.today()))
        		{
        			var param = {
        				  id : "calPlanSdt"
        				, msg	: "계획시작일은 오늘날짜보다 크거나 같아야합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			//this.dsWfSrmSub.setColumn(0,"PLAN_SDT",'');
        			return false;
        		}

        		if(selecEndday < selecToday && this.reqInfo.WF_PROC_CD == "WF_PROC_2040")
        		{
        			var param = {
        				  id : "calPlanEdt"
        				, msg	: "계획완료일은 계획시작일보다 크거나 같아야합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			//this.dsWfSrm.setColumn(0,"PLAN_EDT",'');
        			return false;
        		}

        		let strValue = "";

        		strValue = this.dsWfSrm.getColumn(0, "PLAN_STIME");
        		if(strValue < '0000' || strValue > '2459')
        		{
        			var param = {
        				  id : "mskPlanStime"
        				, msg	: "계획시작시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfSrm.getColumn(0, "PLAN_ETIME");
        		if(strValue < '0000' || strValue > '2459')
        		{
        			var param = {
        				  id : "mskPlanEtime"
        				, msg	: "계획완료시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	this.dsWfSrm.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);

        	if(this.dsRevProc.rowcount == 0)
        	{
        		this.dsRevProc.setAddRow();
        		this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        		this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	}

        	// 서비스 요청시 변경이관
        	if(this.dsWfSrm.getColumn(0, "EM_YN") == "1")
        	{
        		this.dsWfChm.clearData();
        		this.dsWfChm.addRow();

        		// 요청 - 변경 WF_PROC_RELATION 테이블 데이터
        		this.dsWfChm.setColumn(0, "SRM_REQ_ID", 		this.dsWfSrm.getColumn(0, "REQ_ID"));
        		this.dsWfChm.setColumn(0, "REL_PROC_TYPE", 		"SRM");

        		this.dsWfChm.setColumn(0, "EM_YN", 				this.dsWfSrm.getColumn(0, "EM_YN"));  // 변경여부
        		this.dsWfChm.setColumn(0, "REQ_TMPLAT_ID", 		"WFT240159"); 	 // 변경관리
        		this.dsWfChm.setColumn(0, "WF_PROC_CD",        	"WF_PROC_2010"); // 접수단계
        		this.dsWfChm.setColumn(0, "ING_PHASE",         	"CHM0003");  	 // 접수단계
        		this.dsWfChm.setColumn(0, "TITLE", 				this.dsSrBaseInfo.getColumn(0, "TITLE")); 		// 타이틀
        		this.dsWfChm.setColumn(0, "REQ_WISH_DT", 		this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT")); // 희망완료일 - BASEINFO
        		this.dsWfChm.setColumn(0, "REQ_WISH_SDT", 		this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT")); // 희망완료일 - WFCHM
        		this.dsWfChm.setColumn(0, "CHM_CATEGORY", 		"CCCT0B00"); // 변경범주 TODO 요청서에서 임시로 보내는 어플리케이션변경.

        		this.dsWfChm.setColumn(0, 'REQ_CONT', 			this.dsWfSrm.getColumn(0, "REQ_CONT"));
        		this.dsWfChm.setColumn(0, 'PRE_CONF_USER_ID', 	this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")); // 사전협의자명
        		this.dsWfChm.setColumn(0, 'PRE_CONF_DEPT_ID', 	this.dsWfSrm.getColumn(0, "PRE_CONF_DEPT_ID")); // 사전협의자부서

        		// 요청자 항목
        		this.dsWfChm.setColumn(0, "REQ_DT",            	Ex.util.today());
        		this.dsWfChm.setColumn(0, "USER_ID", 			this.dsWfSrm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_ID",       	this.dsWfSrm.getColumn(0, "WORK_USER_ID"));
        		this.dsWfChm.setColumn(0, "REQ_DEPT_ID",       	this.dsWfSrm.getColumn(0, "WORK_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_JBC_POSI", 	this.dsWfSrm.getColumn(0, "WORK_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "REQ_USER_NM",       	this.dsWfSrm.getColumn(0, "WORK_USER_NM"));

        		this.dsWfChm.setColumn(0, "SR_REQ_USER_ID",      this.dsWfSrm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_DEPT_ID",      this.dsWfSrm.getColumn(0, "REQ_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_JBC_POSI",this.dsWfSrm.getColumn(0, "REQ_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_NM",      this.dsWfSrm.getColumn(0, "REQ_USER_NM"));

        		this.dsWfChm.setColumn(0, "WORK_USER_ID",      	this.dsWfSrm.getColumn(0, "WORK_USER_ID")); // 담당자
        		this.dsWfChm.setColumn(0, "WORK_DEPT_ID",      	this.dsWfSrm.getColumn(0, "WORK_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "WORK_USER_JBC_POSI",	this.dsWfSrm.getColumn(0, "WORK_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "WORK_USER_NM",      	this.dsWfSrm.getColumn(0, "WORK_USER_NM"));
        		this.dsWfChm.setColumn(0, "SITE_USER_ID",      	this.dsWfSrm.getColumn(0, "SITE_USER_ID"));
        		this.dsWfChm.setColumn(0, "SITE_DEPT_ID",      	this.dsWfSrm.getColumn(0, "SITE_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SITE_USER_JBC_POSI",	this.dsWfSrm.getColumn(0, "SITE_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SITE_USER_NM",      	this.dsWfSrm.getColumn(0, "SITE_USER_NM"));

        		this.dsWfChm.setColumn(0, "SR_BRIEF",          	this.dsSrBaseInfo.getColumn(0, "TITLE"));
        		this.dsWfChm.setColumn(0, 'REQ_ID1', 			this.dsWfSrm.getColumn(0, "REQ_ID1"));
        		this.dsWfChm.setColumn(0, 'REQ_ID2', 			this.dsWfSrm.getColumn(0, "REQ_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID1",          	this.dsWfSrm.getColumn(0, "UPMU_ID1"));
        		this.dsWfChm.setColumn(0, "UPMU_ID2",          	this.dsWfSrm.getColumn(0, "UPMU_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID3",          	this.dsWfSrm.getColumn(0, "UPMU_ID3"));

        		this.dsWfChm.setColumn(0, "REQ_WISH_STIME",    	this.dsWfSrm.getColumn(0, "REQ_WISH_STIME"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_EDT",    	this.dsWfSrm.getColumn(0, "AGREE_COMP_DT"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_ETIME",  	this.dsWfSrm.getColumn(0, "AGREE_COMP_TIME"));
        		this.dsWfChm.setColumn(0, "RECP_PATH",         	"CSRIN001"); // 접수경로
        		this.dsWfChm.setColumn(0, "PL_LEVEL",          this.dsWfSrm.getColumn(0, "OUTP_MH"));
        	}
        	return true;
        }

        this.isUpdateForm = function()
        {
        	if(this.reqInfo.WF_PROC_CD == this.reqInfo.SCRN_WF_PROC_CD)
        	{
        		this.dsWfSrm.setColumn(0, "WORK_RECP_DATE", undefined);
        	}
        	return Ex.util.isUpdated(this.dsRevProc);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "" :
        			break;
        	}
        }

        this.SDT_onchanged = function(obj,e)
        {
        	/*
        	var hour = "";
        	var sDate = this.dsWfSrm.getColumn(0, "PLAN_SDT"); // 시작일
        	var sTime = this.dsWfSrm.getColumn(0, "PLAN_STIME"); // 시작시간
        	var eDate = this.dsWfSrm.getColumn(0, "PLAN_EDT"); // 종료일
        	var eTime = this.dsWfSrm.getColumn(0, "PLAN_ETIME"); // 종료시간

        	if(!sDate ||!sDate||!eDate||!eTime) return;

        	var start = new Date(sDate.substr(0,4), sDate.substr(4,2)-1, sDate.substr(6,2),sTime.substr(0,2),sTime.substr(2,2))
        	var end = new Date(eDate.substr(0,4), eDate.substr(4,2)-1, eDate.substr(6,2),eTime.substr(0,2),eTime.substr(2,2))

        	// 시간 차이(밀리초단위 => 시간)
        	var diffMs = end.getTime() - start.getTime();
        	var diffMin = diffMs / (1000*60); 	 // 분
        	var diffHr = Math.floor(diffMin/60); // 시간(정수)

        	this.dsWfSrm.setColumn(0,"PLAN_MH" ,diffHr);
        	*/
        };

        this.stc00_onclick = function(obj,e)
        {
        	this.dsWfSrm.setColumn(0, "EM_YN","1");
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "PLAN_EDT")
        	{
        		var agreeCompDt = nexacro.toNumber(obj.getColumn(e.row, "AGREE_COMP_DT"));
        		var planEdt		= nexacro.toNumber(e.newvalue);
        		if(agreeCompDt < planEdt)
        		{
        			var param = {
        				  id	: "alertCheckPlanEdtI"																//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "[계획완료일 > 합의완료일]인 경우 입니다.\n계획완료일을 재설정하세요\n\n※ 합의완료일 변경은 PL문의"		//메시지 내용
        				, arrparam : [""]																			//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"																				//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        		}
        	}
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calPlanSdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.mskPlanStime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.calPlanEdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.mskPlanEtime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.stc00.addEventHandler("onclick",this.stc00_onclick,this);
            this.dsChm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfChm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5017_D06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
