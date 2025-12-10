(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5017_D01");
            this.set_titletext("서비스/일반요청-변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INFOMEET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_COL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_EDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu3", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq3", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrCategoryNh", this);
            obj._setContents("<ColumnInfo><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcStaffMng", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LVL1_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL2_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL3_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL4_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL5_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL6_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL7_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL8_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL9_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEaiYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">예</Col><Col id=\"CMM_CD\">Y</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdo01", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">여</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdo02", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">여</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdo03", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">여</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdo04", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">여</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContChk", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmuChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_REM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqTestList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrmHw", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INFOMEET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_COL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_EDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaff", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkListTestCase", this);
            obj._setContents("<ColumnInfo><Column id=\"CHKLIST_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TESTCASE_REG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHKLIST_REG_YN\">N</Col><Col id=\"TESTCASE_REG_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","750",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("요청상세");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReq1","stcUpmu:5","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV1;NULL");
            obj.set_innerdataset("dsReq1");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReq2","cboReq1:2","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV2;NULL");
            obj.set_innerdataset("dsReq2");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReq3","cboReq2:-170.00","9","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("SR_CAT_ID");
            obj.set_datacolumn("SR_CAT_NAME");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV3;NULL");
            obj.set_innerdataset("dsSrCategoryNh");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPreConfUserNm","0.00%","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("사전협의자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00","cboReq2:75","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmu00:5.00","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_type("filterlike");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2.00","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:2.00","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("업무분류LV3;NULL");
            obj.set_innerdataset("dsUpmu3");
            obj.set_visible("false");
            obj.set_enable("true");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_preConfUserNm","stcPreConfUserNm:5","73","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("사전협의자;NULL");
            obj.set_innerdataset("dsSvcStaffMng");
            obj.set_codecolumn("STAFF_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_validationGroup("input01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","100",null,"440","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","100","130","440",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","129.00","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_agreeCompDtChg","cbo_preConfUserNm:2.00","73","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("합의완료일변경");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            obj.getSetter("skipComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alike",null,"0","120","24","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("유사요청건 조회");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);

            obj = new Static("stcS05","552.00","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("정기 신청건 여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcS01","1242.00","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("배치 수행 건 여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcS11","1242.00","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("개인정보 포함 여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcS07","858.00","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("추출기간");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcS13","stcS11:117.00","67","145","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("정보계 개발 전환\r\n협의 여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("stcS06","stcS05:10.00","72","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsRdo01");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("정기 신청건 여부;NULL");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_validationGroup("stcSchk");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("stcS02","stcS01:15.00","39","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsRdo02");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("배치 수행 건 여부;NULL");
            obj.set_validationGroup("stcSchk");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("stcS12","stcS11:15.00","72","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsRdo03");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("개인정보 포함여부;NULL");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_validationGroup("stcSchk");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("stcS14","stcS13:15.00","72","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsRdo04");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("정보계 개발전환 협의 여부;NULL");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_validationGroup("stcSchk");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_contUpdateHis",null,"0","120","24","125",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_contUpdate",null,"0","120","24","250",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("내용 수정 저장");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);

            obj = new Static("stcS03","1489.00","34","145","34",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("데이터 컬럼 제공여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("stcS04","stcS03:15.00","39","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsRdo02");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("데이터 컬럼 제공여부;NULL");
            obj.set_validationGroup("stcSchk");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("stcS08","995.00","72","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_validation("추출시작일;NULL");
            obj.set_validationGroup("stcSchk");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new Calendar("stcS10","1128.00","72","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_validation("추출종료일;NULL");
            obj.set_validationGroup("stcSchk");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new Static("stcS09","1105.00","72","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1820,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaReqCont","value","dsWfPbm","REQ_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","stcUpmu00","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboUpmu1","value","dsWfSrm","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboUpmu2","value","dsWfSrm","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboUpmu3","value","dsWfSrm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboReq1","value","dsWfSrm","REQ_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboReq2","value","dsWfSrm","REQ_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboReq3","value","dsWfSrm","SR_CAT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cbo_preConfUserNm","value","dsWfSrm","PRE_CONF_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","edtPrjNm00","value","dsSrDataBaseWork","REL_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stcS05","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcS01","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stcS11","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stcS07","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stcS13","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","stcS06","value","dsWfSrm","PERIOD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","stcS02","value","dsWfSrm","BATCH_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","stcS12","value","dsWfSrm","PRIVACY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","stcS14","value","dsWfSrm","INFOMEET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","stcS03","value","dsWfSrm","BATCH_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","stcS08","value","dsWfSrm","EXT_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","stcS10","value","dsWfSrm","EXT_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","stcS04","value","dsWfSrm","DATA_COL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR5017_D01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5017_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5017_D01
        * 화면(명)	︰ 서비스/일반요청-변경
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
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
        this.chkList  = "N"; // 체크리스트
        this.userTest = "N"; // 테스트케이스
        this.isEnterKey = "N"; // 업무분류 엔터입력확인
        this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
        this.dsFormInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.dsFormInfo : null);
        var btnSave;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fn_initDataset();

        	btnSave = this.reqInfo.PARENT_FORM.components["divBottomButton"].form.btnSave;

        	if(this.getOwnerFrame().pDs)
        	{
        		let dataCopy = this.getOwnerFrame().pDs;

        		// 제목
        		this.dsSrBaseInfo.setColumn(0, "TITLE", dataCopy.getColumn(0,"SR_BRIEF"));
        		// 요청분류
        		this.dsWfSrm.setColumn(0,"REQ_ID1", dataCopy.getColumn(0,"REQ_ID1"));
        		this.dsWfSrm.setColumn(0,"REQ_ID2", dataCopy.getColumn(0,"REQ_ID2"));
        		// 업무분류
        		this.dsWfSrm.setColumn(0,"UPMU_ID1", dataCopy.getColumn(0,"UPMU_ID1"));
        		this.dsWfSrm.setColumn(0,"UPMU_ID2", dataCopy.getColumn(0,"UPMU_ID2"));
        		// 사전협의자
        		var aRow = this.dsSvcStaffMng.addRow();
        		this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM",  dataCopy.getColumn(0, "PRE_CONF_USER_NM"));
        		this.dsSvcStaffMng.setColumn(aRow, "STAFF_ID",  dataCopy.getColumn(0, "PRE_CONF_USER_ID"));
        		// 본문내용
         		var webConts = dataCopy.getColumn(0,"REQ_CONT")||'';
         		this.divWebEditor.form.setContent(webConts, false);

        		// 자료(데이터)요청일경우
        		if(dataCopy.getColumn(0,"REQ_ID2") == "REQC0AE0")
        		{
        			var comps= this.components;
        			for(var i=0; i<comps.length; i++)
        			{
        				if(comps[i].name.indexOf("stcS") === 0)
        				{
        					comps[i].set_visible(true);
        				}
        			}

        			// 배치수행건여부
        			this.dsWfSrm.setColumn(0,"BATCH_YN", dataCopy.getColumn(0,"BATCH_YN"));
        			// 데이터 컬럼 제공여부
        			this.dsWfSrm.setColumn(0,"DATA_COL_YN", dataCopy.getColumn(0,"DATA_COL_YN"));
        			// 정기신청건 여부
        			this.dsWfSrm.setColumn(0,"PERIOD_YN", dataCopy.getColumn(0,"PERIOD_YN"));
        			// 추출기간
        			this.dsWfSrm.setColumn(0,"EXT_SDT", dataCopy.getColumn(0,"EXT_SDT"));
        			this.dsWfSrm.setColumn(0,"EXT_EDT", dataCopy.getColumn(0,"EXT_EDT"));
        			// 개인정보 포함여부
        			this.dsWfSrm.setColumn(0,"PRIVACY_YN", dataCopy.getColumn(0,"PRIVACY_YN"));
        			// 정보계 개발 전환 협의 여부
        			this.dsWfSrm.setColumn(0,"INFOMEET_YN", dataCopy.getColumn(0,"INFOMEET_YN"));
        		}
        		else
        		{
        			var comps= this.components;
        			for(var i=0; i<comps.length; i++)
        			{
        				if(comps[i].name.indexOf("stcS") === 0)	comps[i].set_visible(false);
        			}
        		}
        		this.getOwnerFrame().pDs = null;
        	}
        }

        this.fn_initDataset = function()
        {
        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
        	{
        		var aRow = this.dsWfSrm.setInsertRow();
        		//this.dsWfSrm.setInsertRow();

        		var evt = nexacro.DSColChangeEventInfo;
        		// 요청분류
        		evt.columnid	= "REQ_ID1";
        		this.dsWfSrm.setColumn(0, "REQ_ID1", "REQC0A00");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "REQ_ID1");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		evt.columnid	= "REQ_ID2";
        		this.dsWfSrm.setColumn(0, "REQ_ID2", "REQC0AA0");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "REQ_ID2");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		// 서비스/일반요청
        // 		this.cboReq1.set_index(4);
        // 		this.cboReq2.set_index(1);
        		//this.fnCategoryNh();	// 카테고리 조회

        		// 업무분류
        		evt.columnid	= "UPMU_ID1";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		evt.columnid	= "UPMU_ID2";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		this.dsWfSrm.setColumn(0, "SVC_DOWN_YN", 0);

        		this.dsSvcStaffMng.clearData();
        		var aRow = this.dsSvcStaffMng.insertRow();
        		this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", "- 선택 -");
        		this.cbo_preConfUserNm.set_index(0);
        		this.cbo_preConfUserNm.set_text("- 선택 -");

        		this.divWebEditor.form.setContent("<개발목적><br>&nbsp;-&nbsp;<br><br><요청상세><br>&nbsp;-&nbsp;<br><br><사전협의내용>&nbsp;<font color=\"#cbc9fc\">※ 사전협의자 기재시 <손해보험 또는 농협정보> 직원도 기재하세요</font><br>&nbsp;-&nbsp;<br><br><관련업무 및 자료><br>&nbsp;-&nbsp;<br><br><사용자 요건 및 기대효과><br>&nbsp;-&nbsp;<br><br><인프라증설여부><br>&nbsp;-&nbsp;");

        		this.dsWfSrm.setColumn(0,"BATCH_YN", "N");
        	}
        	else
        	{
        		if(this.dsWfSrm.rowcount == 0)	this.dsWfSrm.setInsertRow();

        		// 서비스/일반요청
        		var evt = nexacro.DSColChangeEventInfo;
        		evt.columnid	= "REQ_ID1";
        		this.dsWfSrm.setColumn(0, "REQ_ID1", "REQC0A00");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "REQ_ID1");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		// 요청접수 시점에 업무분류 3LV 활성화 렌더링 전
        		if(
        			(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250033" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2020") ||
        			(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250049" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2030") ||
        			(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250048" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2020") )
        		{
        			this.cboUpmu3.set_visible(true);
        		}
        	}
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
        	//trace("[SR5017_D01] this.fnCallback() sSvcId : [" + sSvcId + "]");
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select" :
        			this.fnChkListTestCase();

        			var reqId1 = this.dsWfSrm.getColumn(0, "REQ_ID1");
        			var reqId2 = this.dsWfSrm.getColumn(0, "REQ_ID2");
        			var upmuId1 = this.dsWfSrm.getColumn(0, "UPMU_ID1");
        			var upmuId2 = this.dsWfSrm.getColumn(0, "UPMU_ID2");

        			var evt = nexacro.DSColChangeEventInfo;

        			evt.columnid	= "REQ_ID1";
        			evt.newvalue	= reqId1;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			evt.columnid	= "REQ_ID2";
        			evt.newvalue	= reqId2;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			evt.columnid	= "UPMU_ID1";
        			evt.newvalue	= upmuId1;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			evt.columnid	= "UPMU_ID2";
        			evt.newvalue	= upmuId2;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			var webConts = this.dsWfSrm.getColumn(this.dsWfSrm.rowposition, 'REQ_CONT')||'';
        			this.divWebEditor.form.setContent(webConts, false);

        			// 3LV 영역
        			if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID2")) )
        			{
        				var oParam = {
        					 upCmmCd	: [this.dsWfSrm.getColumn(0, "UPMU_ID2")	]	// 조회할 상위코드
        					,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        					,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        					,useYn		: ['Y'				]	// 사용여부
        					,filter		: [''				]	// filterStr
        					,objDs		: [this.dsUpmu3		]	// copy dataset
        				}
        				Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        			}

        			// 요청접수 시점에 업무분류 3LV 활성화 렌더링 후
        // 			if(
        // 				(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250033" && this.reqInfo.WF_PROC_CD == "WF_PROC_2020") ||
        // 				(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250049" && this.reqInfo.WF_PROC_CD == "WF_PROC_2030") ||
        // 				(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250048" && this.reqInfo.WF_PROC_CD == "WF_PROC_2020") )
        // 			{
        // 				if(	this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" && (this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        // 				{
        // 					this.cboUpmu3.set_readonly(false);
        // 					this.cboUpmu3.set_enable(false);
        // 					this.cboUpmu3.set_enable(true);
        // 				}
        // 			}
        // 			else if(this.dsSrBaseInfo.getColumn(0,"WF_PROC_CD") == "WF_PROC_2050" && this.dsWfSrm.getColumn(0, "EM_YN") == "1")
        // 			{
        // 				this.sta_title.setFocus(true);
        // 				this.cboUpmu3.setFocus(true);
        // 			}
        // 			else
        // 			{
        // 				this.cboUpmu3.set_readonly(false);
        // 				this.cboUpmu3.set_enable(false);
        // 				this.cboUpmu3.set_enable(true);
        // 			}

        			// 합의완료일 변경, 요청자 PL만 변경가능 0429 이상국차장님 요청. 담당개발자가 검토단계시 합의완료일 변경 가능하게끔 수정
        			if(
        				(
        				  (
        					(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250033" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2010") ||
        					(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250049" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2030") ||
        					(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250048" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2020")
        				  ) && this.dsSrBaseInfo.getColumn(0,"WF_PROC_CD") < "WF_PROC_9020" &&
        				  this.dsWfSrm.getColumn(0,"PRE_CONF_USER_ID")  == Ex.util.getSession("gvUserId")
        				) ||
        				this.dsSrBaseInfo.getColumn(0,"WF_PROC_NM") == "요청검토" && this.dsWfSrm.getColumn(0,"PRE_CONF_USER_ID")  == Ex.util.getSession("gvUserId") )
        			{	//사전협의자 PL만 수정가능
        				this.btn_agreeCompDtChg.set_visible(true);
        			}
        			else
        			{
        				this.btn_agreeCompDtChg.set_visible(false);
        			}
        			// 0429 이상국차장님 요청. 담당개발자가 검토단계시 합의완료일 변경 가능하게끔 수정
        			/*if(this.dsSrBaseInfo.getColumn(0,"WF_PROC_NM") == "요청검토" && this.dsWfSrm.getColumn(0,"WORK_USER_ID")  == Ex.util.getSession("gvUserId") ){
        				this.btn_agreeCompDtChg.set_visible(true);
        			} else {
        				this.btn_agreeCompDtChg.set_visible(false);
        			}*/

        			this.dsContChk.setColumn(0, "BEFORE_CONT", this.dsWfSrm.getColumn(0, "REQ_CONT")); // 본문 수정체크용 컴포넌트

        			if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")) )
        			{
        				var aRow = this.dsSvcStaffMng.addRow();
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM",  this.dsWfSrm.getColumn(0, "PRE_CONF_USER_NM"));
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_ID",  this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID"));
        			}

        			this.fnSetCheckListBtn(this.dsWfSrm.getColumn(0, "UPMU_ID2"), this.dsWfSrm.getColumn(0, "REQ_ID2"));
        			this.dsFormInfo.setColumn(0, "UPMU_ID2", this.dsWfSrm.getColumn(0,"UPMU_ID2"));
        			break;

        		case "select02" :
        			if( this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        			{
        				// 서비스별 담당자 조회
        				this.fnSvcStaffMng();
        			}
        			else
        			{
        				// 조회해온 사전협의자 콤보박스 세팅
        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")) )
        				{
        					var fRow = this.dsSvcStaffMng.findRow("STAFF_ID", this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID"));
        					if(fRow == -1)
        					{
        						var aRow = this.dsSvcStaffMng.addRow();
        						this.dsSvcStaffMng.setColumn(aRow, "STAFF_ID",  this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID"));
        						this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM",  this.dsWfSrm.getColumn(0, "PRE_CONF_USER_NM"));
        						this.cbo_preConfUserNm.set_index(aRow);
        					}
        				}
        			}
        			break;

        		case "select03" :
        			if( this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        			{
        				var fRow = this.dsSvcStaffMng.findRowExpr("Ex.isEmpty(STAFF_ID)");
        				if(fRow == -1)
        				{
        					var aRow = this.dsSvcStaffMng.insertRow();
        					this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", "- 선택 -");
        				}

        				fRow = this.dsSvcStaffMng.findRow("STAFF_ID", this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID"));
        				if(fRow == -1) this.dsWfSrm.setColumn(0, "PRE_CONF_USER_ID", undefined);

        				if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")) )
        				{
        					if(this.dsSvcStaffMng.rowcount == 2)	this.cbo_preConfUserNm.set_index(1);
        					else									this.cbo_preConfUserNm.set_index(0);
        				}
        			}
        			break;

        		case "postSelect" :
        			//trace("postSelect this.reqInfo.WF_PROC_CD : " + this.reqInfo.WF_PROC_CD + " this.reqInfo.REQ_STAT_CD : " + this.reqInfo.REQ_STAT_CD);
        			trace("this.btn_alike.set_enable >>>>>>>>>>>>>" + this.btn_alike.enable);
        			if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) )
        			{
        				// 유사요청건 조회는 등록단계에서만 노출 이외에는 복사
        				this.btn_alike.set_text("요청서 복사등록");
        				this.btn_alike.set_enable(false);
        				this.btn_alike.set_enable(true);
        				this.setTopBtnControl();
        			}

        			if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ))
        			{
        				if(this.reqInfo.WF_PROC_CD < "WF_PROC_9020")
        				{
        					// 등록 - 요청처리 사이 요청내용 수정관련 컴포넌트 활성화
        					// 등록자 본인만 본문내용 수정가능
        					if(this.dsWfSrm.getColumn(0,"REQ_USER_ID") == Ex.util.getSession("gvUserId"))
        					{
        						this.divWebEditor.form.initCreate(false);

        						var webConts = this.dsWfSrm.getColumn(this.dsWfSrm.rowposition, 'REQ_CONT')||'';
        						this.divWebEditor.form.setContent(webConts);

        						this.btn_contUpdate.set_visible(true);
        						this.btn_contUpdate.set_enable(false);
        						this.btn_contUpdate.set_enable(true);
        					}
        				}
        				this.btn_contUpdateHis.set_visible(true);
        				this.btn_contUpdateHis.set_enable(false);
        				this.btn_contUpdateHis.set_enable(true);

        				this.setTopBtnControl();

        				// 요청서 복사로 등록시 데이터셋이 없음
        				if(this.dsWfSrm.rowcount == 0)	this.dsWfSrm.setInsertRow();

        				this.fnContCnt(); // 요청내용 수정건수
        			}
        			break;

        		case "contUpdate" :
        			//Ex.core.toast(this, "10004");
        			if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) &&
        				this.dsSrBaseInfo.getColumn(0,"WF_PROC_CD") <= "WF_PROC_2050")
        			{
        				this.fnContCnt();
        			}
        			break;

        		case "contUpdateCnt" :
        			this.btn_contUpdateHis.set_text("수정 이력(" + this.dsContChkCnt.rowcount + "건)");
        			this.dsContChk.setColumn(0, "BEFORE_CONT", this.divWebEditor.form.getContent()); // 본문 수정체크용 컴포넌트
        			this.setTopBtnControl();
        			break;
        	}
        }

        this.setTopBtnControl = function()
        {
        	var right = 0;
        	if(this.btn_alike.visible)
        	{
        		right = nexacro.toNumber(this.btn_alike.width) + 5;
        	}

        	if(this.btn_contUpdateHis.visible)
        	{
        		this.btn_contUpdateHis.set_right(right);
        		right += nexacro.toNumber(this.btn_contUpdateHis.width) + 5;
        	}

        	if(this.btn_contUpdate.visible)
        	{
        		this.btn_contUpdate.set_right(right);
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	var tempDs = new Dataset();
        	tempDs.loadXML(varValue);

        	switch (pID)
        	{
        		// 원시 대상정보
        		case "SV0110_P01" :	//구성항목(CI)
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrBackupDataRestore.setColumn(0, "SRC_BAKUP_CI_ID", this.dsPopRtn.getColumn(0, "CI_ID"));
        				this.dsSrBackupDataRestore.setColumn(0, "SRC_BAKUP_HOST_NM", this.dsPopRtn.getColumn(0, "HOST_NM"));
        			}
        			break;

        		// 목적 대상정보
        		case "SV0110_P02" :	//구성항목(CI)
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrBackupDataRestore.setColumn(0, "TGT_REST_CI_ID", this.dsPopRtn.getColumn(0, "CI_ID"));
        				this.dsSrBackupDataRestore.setColumn(0, "TGT_REST_HOST_NM", this.dsPopRtn.getColumn(0, "HOST_NM"));
        			}
        			break;

        		// 합의완료일 변경
        		case "CompDtChgPop"	:
        		 	if( (tempDs.getColumn(0, 'AFTER_COMP_EDT') != this.dsWfSrm.getColumn(0, 'AGREE_COMP_DT')) ||
        				(tempDs.getColumn(0, 'AFTER_COMP_ETIME') != this.dsWfSrm.getColumn(0, 'AGREE_COMP_TIME')))
        			{
        				this.parent.parent.parent.parent.reload();
        				//this.reqInfo.PARENT_FORM.reload();
        			}
        			break;

        		// 유사요청건조회
        		case "alikePop"	:
        			// 요청분류가 같을때
        			if(this.dsWfSrm.getColumn(0,"REQ_ID1") == tempDs.getColumn(0,"SR_TYPE1"))
        			{
        				this.dsSrBaseInfo.setColumn(0, "TITLE", tempDs.getColumn(0,"TITLE"))
        				this.dsWfSrm.setColumn(0,"REQ_ID2", tempDs.getColumn(0,"SR_TYPE2"));
        				this.dsWfSrm.setColumn(0,"UPMU_ID1", tempDs.getColumn(0,"UPMU_ID1"));
        				this.dsWfSrm.setColumn(0,"UPMU_ID2", tempDs.getColumn(0,"UPMU_ID2"));
        			}

        			var webConts = tempDs.getColumn(0,"REQ_CONT")||'';
        			this.divWebEditor.form.setContent(webConts, false);
        			break;

        		// 요청건 복사등록
        		case "srCopynPop"	:
        			Ex.core.pclose(this);
        			break;

        		// 요청내용 변경사유
        		case "contUpdate"	:
        			this.dsContChk.setColumn(0, "REQ_ID", this.dsWfSrm.getColumn(0,"REQ_ID")); 	  	// 요청서ID
        			this.dsContChk.setColumn(0, "ING_PHASE", this.reqInfo.MAP_WF_PROC_CD); 		  	// 진행단계
        			this.dsContChk.setColumn(0, "CHG_SAYU", tempDs.getColumn(0,"CHG_SAYU")); 	  	// 변경사유
        			this.dsContChk.setColumn(0, "REQ_CONT", this.divWebEditor.form.getContent()); 	// 변경전 요청내용
        			this.dsContChk.setColumn(0, "REG_USER_ID", Ex.util.getSession("gvUserId"));   	// 등록자ID
        			this.dsContChk.setColumn(0, "REG_USER_NM", Ex.util.getSession("gvUserNm"));   	// 등록자명
        			this.dsContChk.setColumn(0, "TITLE", this.dsSrBaseInfo.getColumn(0, "TITLE"));  // 요청서 제목

        			// 본문내용 수정
        			this.fnContUpdate();
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSaveCheck();
        			break;

        		case "chkListConfirm" :
        			if(varValue == true)	this.chkList = "Y";
        			//this.fnSaveCheck(true);
        			this.reqInfo.PARENT_FORM.components["divBottomButton"].form.btnSave.click(true);
        			break;

        		case "copySrm" :
        			var dsTemp = new Dataset;
               		var oParam = {
        				wfProcCd : ''
        				,optStr: 'NO'
        				,filter	: ''
        				,objDs	: dsTemp
                	}
                	this.wffnGetCger(oParam);

                	Ex.core.popup(
                		this,											// <--- 팝업 실행 스코프
                		"srCopynPop",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
                		"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
                		{
                			title : "요청서",
                			pWF_FUNC_CD	: "WF_FUNC_00",	//등록
                			//pREQ_ID : this.getOwnerFrame().pREQ_ID,
                			pREQ_TMPLAT_ID : this.getOwnerFrame().pREQ_TMPLAT_ID,
                			pSR_INFO_URL : this.reqInfo.PARENT_FORM.dsWfReqTmplatMt.getColumn(0,"REQ_URL"),
                			pATTACH_USE_YN : "Y",
        					pDs			   : this.dsWfSrm
                		},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
                		//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
                		"autosize,useCloseButton=false"
        			)
        			break;

        		case "contUpdate"	:
        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"contUpdate",							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR5000_P09.xfdl",						// <--- 팝업창 오픈 Url
        				{
        					title : "요청내용 변경사유"
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=550,height=180"							// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "divWebEditor" :
        			this.divWebEditor.form.setFocus();
        			break;

        		case "cboUpmu3" :
        			this.cboUpmu3.setFocusRed();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        	// 첨부파일
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());

        	if(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250033" && this.reqInfo.WF_PROC_CD == "WF_PROC_2050" && this.reqInfo.WF_PROC_NM == "변경처리중")
        	{
        		this.reqInfo.PARENT_FORM.components["divBottomButton"].form.btnRev.set_visible(false); // 변경처리중일때는 처리버튼 비활성화
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['BIZC0000'	,	'REQC0000'	,		'SWKP0000'	,	'SWKC0000'	]	// 조회할 상위코드
        		,codeDiv	: ['NHFIRE'		,	'NHFIRE'	,		''			,	''			]	// 조회할 코드의 업무구분
        		,optStr		: ['ALL'		,	'ALL'		,		'SEL'		,	'SEL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'			,	'Y'			,		'Y'			,	'Y'			]	// 사용여부
        		,filter		: [''			,	''			,		''			,	''			]	// filterStr
        		,objDs		: [this.dsUpmu1,	this.dsReq1,	this.dsWp,			this.dsType	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	this.dsWfSrm.setColumn(0, "REQ_USER_ID", Ex.util.getSession("gvUserId")); 		 // 요청자ID
        	this.dsWfSrm.setColumn(0, "REQ_USER_NM", Ex.util.getSession("gvUserNm"));   	 // 요청자명
        	this.dsWfSrm.setColumn(0, "REQ_DEPT_ID", Ex.util.getSession("gvDeptCd")); 		 // 요청자부서ID
        	this.dsWfSrm.setColumn(0, "REQ_USER_JBC_POSI",  Ex.util.getSession("gvPosNm") ); // 요청자직챙
        	this.dsWfSrm.setColumn(0, "SR_BRIEF",  this.dsSrBaseInfo.getColumn(0, "TITLE")); // 희망완료일시
        	this.dsWfSrm.setColumn(0, "REQ_WISH_SDT",  this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")); // 희망완료일시

        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfSrm.setColumn(this.dsWfSrm.rowposition, 'REQ_CONT', webConts);

        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        	{
        		if("REQC0AA0,REQC0AB0,REQC0AC0,REQC0AD0".indexOf(this.dsWfSrm.getColumn(0, "REQ_ID2")) < 0)
        		{
        			// 자료(데이터)요청(REQC0AE0) , 내부보고(REQC0ED0)
        			if(this.dsWfSrm.getColumn(0, "REQ_ID2") == "REQC0AE0" || this.dsWfSrm.getColumn(0, "REQ_ID2") == "REQC0ED0")
        			{
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250049");
        				this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250049");
        				this.dsWfSrm.setColumn(0, "REQ_TMPLAT_ID", "WFT250049");
        				this.getOwnerFrame().pREQ_TMPLAT_ID = "WFT250049";

        			}
        			// 계정신청(REQC0EC0)
        			else if (this.dsWfSrm.getColumn(0, "REQ_ID2") == "REQC0EC0")
        			{
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250048");
        				this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250048");
        				this.dsWfSrm.setColumn(0, "REQ_TMPLAT_ID", "WFT250048");
        				this.getOwnerFrame().pREQ_TMPLAT_ID = "WFT250048";
        			}
        			this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_VER", this.reqInfo.REQ_TMPLAT_VER);
        			this.dsSrBaseInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession("gvUserId"));
        			this.dsSrBaseInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession("gvUserNm"));
        			this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession("gvDeptCd"));
        			this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession("gvDeptNm"));
        			this.dsSrBaseInfo.setColumn(0, "FR_NM", Ex.util.getSession("gvUserNm"));
        			this.dsSrBaseInfo.setColumn(0, "REQ_WISH_DT", Ex.util.addDate(Ex.util.today(), +7));
        			this.dsSrBaseInfo.setColumn(0, "REQ_WISH_TIME", "");
        		}
        		else
        		{
        			this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250033");
        			this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250033");
        			this.getOwnerFrame().pREQ_TMPLAT_ID = "WFT250033";
        		}
        	}
        	if( !Ex.util.isUpdated(this.dsWfSrm) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        // 	alert(
        // 		"dsSrBaseInfo REQ_TMPLAT_ID : " + this.dsSrBaseInfo.getColumn(0, "REQ_TMPLAT_ID") +
        // 		"\ndsFormInfo REQ_TMPLAT_ID : " + this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") +
        // 		"\ndsWfSrm REQ_TMPLAT_ID : " + this.dsWfSrm.getColumn(0, "REQ_TMPLAT_ID") +
        // 		"\nthis.getOwnerFrame().pREQ_TMPLAT_ID : " + this.getOwnerFrame().pREQ_TMPLAT_ID
        // 	);

        	if( !Ex.util.checkValidate(this, "input01") ) return false;
        	//일반문의와 일일점검일지는 사전협의자가 없음

        	// 에디터에 입력데이터를 데이터셋에 치환
        	var chkCont = nexacro.replaceAll(nexacro.replaceAll(this.dsWfSrm.getColumn(0, 'REQ_CONT'), "<p>&nbsp;</p>", "", " ", ""));

        	if( Ex.isEmpty(chkCont) )
        	{
        		var param = {
        			  id	: "divWebEditor"
        			, msg	: "요청내용은 필수 입력 항목입니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( (
        		 (this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250033" && this.reqInfo.WF_PROC_CD == "WF_PROC_2020") ||
        		 (this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250049" && this.reqInfo.WF_PROC_CD == "WF_PROC_2030") ||
        		 (this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID") == "WFT250048" && this.reqInfo.WF_PROC_CD == "WF_PROC_2020")
        		) && Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID3")) )
        	{
        		var param = {
                	  id	: "cboUpmu3"
        			, msg	: "업무분류LV3 필수 입력 항목입니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
                Ex.core.alert(this, param);
                return false;
        	}

        	// 자료(데이터)요청일 경우 추가 체크
        	if(this.dsWfSrm.getColumn(0,"REQ_ID2") == "REQC0AE0")
        	{
        		 if( !Ex.util.checkValidate(this, "stcSchk") ) return false;
        	}

        	var aRow = this.dsRevProc.setInsertRow();
        	this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);

        	if(isReg)
        	{
        		// 내부보고시에는 체크리스트, 테스트케이스 작성안함
        		if(this.dsWfSrm.getColumn(0, "REQ_ID2") != "REQC0ED0")
        		{
        			// 체크리스트, 테스트케이스 필수여서 임시저장후에 작성하고 등록진행
        			if(this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1)
        			{
        				var param = {
        					msg : "체크리스트, 테스트케이스 작성을 위해 \n\n임시저장 후 진행 바랍니다."
        				  , arrparam : ['']
        				  , msgtype : "I"
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}

        		if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        		{
        			// 내부보고시에는 체크리스트, 테스트케이스 작성안함
        			if(this.dsWfSrm.getColumn(0, "REQ_ID2") != "REQC0ED0")
        			{
        				// 체크리스트 작성여부
        				if(this.dsChkListTestCase.getColumn(0, "CHKLIST_REG_YN") != "Y")
        				{
        					var param = {
        						msg : "체크리스트를 작성해주세요."
        					  , arrparam : ['']
        					  , msgtype : "I"
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}

        				// 테스트케이스 작성여부
        				if(this.dsChkListTestCase.getColumn(0, "TESTCASE_REG_YN") != "Y")
        				{
        					var param = {
        						msg : "테스트 케이스를 작성해주세요."
        					  , arrparam : ['']
        					  , msgtype : "I"
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			}
        		}
        		return true;
        	}
        	else
        	{
        		return true;
        	}
        }

        // 요청서 카테고리 항목 조회
        this.fnCategoryNh = function()
        {
        	var sTranId = "select02";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select02";								// 서비스명
            var sInDs = "dsCond=dsWfSrm";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrCategoryNh=dsSrCategoryNh";					// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 서비스별 담당자 조회
        this.fnSvcStaffMng = function()
        {
        	this.dsStaff.setColumn(0, "SVC_CLSS_CD", "SR"); // 서비스
        	this.dsStaff.setColumn(0, "BSE_LVL2_CD", this.dsWfSrm.getColumn(0,"UPMU_ID2"));

        	var sTranId = "select03";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select03";								// 서비스명
            var sInDs = "dsCond=dsStaff";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvcStaffMng=dsSvcStaffMng";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 본문내용 수정
        this.fnContUpdate = function()
        {
        	var sTranId = "contUpdate";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/contUpdate";						// 서비스명
            var sInDs = "dsContChk=dsContChk";							// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";											// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 수정이력 건수
        this.fnContCnt = function()
        {
        	var sTranId = "contUpdateCnt";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/contUpdateCnt";						// 서비스명
            var sInDs = "dsWfSrm=dsWfSrm";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsContChkCnt=dsContChk";								// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnContCnt = function()
        {
        	var sTranId = "contUpdateCnt";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/contUpdateCnt";						// 서비스명
            var sInDs = "dsWfSrm=dsWfSrm";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsContChkCnt=dsContChk";								// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnChkListTestCase = function()
        {
        	var sTranId = "selectChkListTestCase";						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/selectChkListTestCase";				// 서비스명
            var sInDs = "dsCond=dsWfSrm";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsChkListTestCase=dsChkListTestCase";			// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 체크리스트 삭제
        this.fnDeleteChkListTestCase = function()
        {
        	this.dsCond.setColumn(0, "UPMU_ID2", this.dsWfSrm.getColumn(0, "UPMU_ID2"));
        	var sTranId = "deleteChkListTestCase";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/deleteChkListTestCase";					// 서비스명
            var sInDs = "dsCond=dsCond";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsChkListTestCase=dsChkListTestCase";				// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSetCheckListBtn = function(upmuId2, reqId2)
        {
        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
        	{
        		this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnChkList.set_visible(false); // 체크리스트
        		this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnUsrTest.set_visible(false); // 테스트케이스
        		return;
        	}

        	this.dsFormInfo.setColumn(0, "UPMU_ID2", upmuId2);

        	if(reqId2 != "REQC0ED0")	// 내부보고시에는 체크리스트, 테스트케이스 작성안함
        	{
        		if(this.reqInfo.WF_PROC_CD != "WF_PROC_9999")
        		{
        			this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnChkList.set_visible(true); // 체크리스트
        			this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnUsrTest.set_visible(true); // 테스트케이스
        		}
        		else
        		{
        			this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnChkList.set_visible(false); // 체크리스트
        			this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnUsrTest.set_visible(false); // 테스트케이스
        		}
        	}
        	else
        	{
        		this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnChkList.set_visible(false); // 체크리스트
        		this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnUsrTest.set_visible(false); // 테스트케이스
        	}
        	Ex.util.setBtnAlign(this.reqInfo.PARENT_FORM.components["divBottomSub"], 'left', true);
        	//trace("END this.fnSetCheckListBtn() upmuId2 : " + upmuId2 + " reqId2 : " + reqId2);
        }

        this.setChangeEditAfter = function()
        {
        	trace("[SR5017_D01] this.setChangeEditAfter() this.parent.editYn : " + this.parent.editYn);
        	trace("[SR5017_D01] this.setChangeEditAfter() this.divWebEditor.form._bReadonly : " + this.divWebEditor.form._bReadonly);
        	trace("[SR5017_D01] this.setChangeEditAfter() this.divWebEditor.form._isInit : " + this.divWebEditor.form._isInit);
        	// 에디터영역 생성 제어
        	if(!this.divWebEditor.form._isInit)
        	{
        		this.divWebEditor.form.initCreate(this.parent.editYn == "Y" ? false : true);
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		// 원시 대상정보
        		case "btnSrcNmPop" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SV0110_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sv::SV0110_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title			: "구성정보(CI) 선택",
        					pSelType		: "S"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		// 목적 대상정보
        		case "btnTgtNmPop" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SV0110_P02",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sv::SV0110_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title			: "구성정보(CI) 선택",
        					pSelType		: "S"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnClear" :
        			this.dsWfSrm.setColumn(0, "CI_ID", "");
        			this.dsWfSrm.setColumn(0, "CI_NM", "");
        			break;
        	}
        }

        this.btn_agreeCompDtChg_onclick = function(obj,e)
        {
        	var extYn = '';
        	popId	= 'CompDtChgPop';
        	url		= 'chm::CHM0001_P03.xfdl';

        	if( !this.dsWfSrm.getColumnInfo("AGREE_COMP_EDT") )
        	{
        		this.dsWfSrm.addColumn("AGREE_COMP_EDT","STRING");
        		this.dsWfSrm.addColumn("AGREE_COMP_ETIME","STRING");
        		this.dsWfSrm.addColumn("REL_PROC_ID","STRING");
        		this.dsWfSrm.addColumn("AFTER_COMP_EDT", "STRING");
        		this.dsWfSrm.addColumn("AFTER_COMP_ETIME", "STRING");
        		this.dsWfSrm.addColumn("CHG_SAYU", "STRING");
        	}
        	this.dsWfSrm.setColumn(0,"AGREE_COMP_EDT", this.dsWfSrm.getColumn(0,"AGREE_COMP_DT")); // 합의완료일
        	this.dsWfSrm.setColumn(0,"AGREE_COMP_ETIME", this.dsWfSrm.getColumn(0,"AGREE_COMP_TIME")); // 시간
        	this.dsWfSrm.setColumn(0,"REL_PROC_ID", this.dsWfSrm.getColumn(0,"REQ_ID"));

        	oParam	= {
        		title	: '합의완료일시 변경'
        	  , data	: extYn
        	  , pREQ_ID	: this.dsCond.getColumn(0, "REQ_ID")
        	  , dsData 	: this.dsWfSrm
        	};

        	Ex.core.popup(
        		this,
        		popId,
        		url,           		// <--- 팝업창 오픈 Url
        		oParam,
        		"autosize"
        	);
        };

        this.btn_alike_onclick = function(obj,e)
        {
        	if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) )
        	{
        		var param = {
        			  id : "copySrm"
        			, msg : "해당 요청서내용을 복사하시겠습니까?"
        			, arrparam : ['']
        			, msgtype : "I"
        		};
        		Ex.core.confirm(this, param);
        	}
        	else
        	{
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"alikePop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR5000_P08.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title		: "유사요청건 조회",
        				pDs			: this.dsWfSrm
        			},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        			//"width=1200,height=750"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        this.btn_contUpdate_onclick = function(obj,e)
        {
        	if(this.dsContChk.getColumn(0,"BEFORE_CONT") == this.divWebEditor.form.getContent())
        	{
        		var param = {
        			msg : "수정된 내용이 없습니다."
        		  , arrparam : ['']
        		  , msgtype : "I"
        		  };
        		Ex.core.alert(this, param);
        	}
        	else
        	{
        		var param = {
        			id : "contUpdate"
        		  , msg : "요청내용을 수정하시겠습니까?"
        		  , arrparam : ['']
        		  , msgtype : "I"
        		};
        		Ex.core.confirm(this, param);
        	}
        };

        this.btn_contUpdateHis_onclick = function(obj,e)
        {
        	if(this.dsContChkCnt.rowcount == 0)
        	{
        		var param = {
        			msg : "수정 이력이 없습니다."
        		  , arrparam : ['']
        		  , msgtype : "I"
        		  };
        		Ex.core.alert(this, param);
        	}
        	else
        	{
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"contUpdateHis",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR5000_P10.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title	: "요청내용 변경이력",
        				pDs		: this.dsWfSrm
        			},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        			//"width=1000,height=750"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        this.cbo_preConfUserNm_onitemchanged = function(obj,e)
        {
        	var nRow = this.dsSvcStaffMng.findRow("STAFF_ID", e.postvalue);

        	if(nRow > -1)
        	{
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_NM", this.dsSvcStaffMng.getColumn(nRow, "STAFF_NM"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_ID", this.dsSvcStaffMng.getColumn(nRow, "STAFF_ID"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_DEPT_ID", this.dsSvcStaffMng.getColumn(nRow, "DEPT_ID"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_JBC_POSI", this.dsSvcStaffMng.getColumn(nRow, "JBC_POSI"));
        	}
        	else
        	{
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_NM", "");
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_ID", this.dsSvcStaffMng.getColumn(nRow, "STAFF_ID"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_DEPT_ID", "");
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_JBC_POSI", "");
        	}
        };

        this.cboUpmu1_onlbuttondown = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu1.value) )	this.cboUpmu1.set_text("");
        };

        this.cboUpmu1_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu1.value) )	this.cboUpmu1.set_text("- 전체 -");
        };

        this.cboUpmu2_onlbuttondown = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu2.value) )	this.cboUpmu2.set_text("");
        };

        this.cboUpmu2_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu2.value) )	this.cboUpmu2.set_text("- 전체 -");
        };

        this.cboUpmu3_onlbuttondown = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu3.value) )	this.cboUpmu3.set_text("");
        };

        this.cboUpmu3_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(this.cboUpmu3.value) )	this.cboUpmu3.set_text("- 전체 -");
        };

        this.cboUpmu2_onitemchanged = function(obj,e)
        {
        	trace("this.cboUpmu2_onitemchanged()~~~~~~~~~~~~~~~~~~~~~~~");
        	// 업무분류 재선택시 체크리스트, 사용자테스트 초기화
        	this.dsFormInfo.setColumn(0, "UPMU_ID2", e.postvalue);

        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") == -1 )
        	{
        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			this.fnDeleteChkListTestCase();
        		}
        	}
        };

        this.cboUpmu1_onkeydown = function(obj,e)
        {
        	// 업무분류1에서 엔터확인시 업무분류2로 세팅
        	if( e.keycode == 13)	this.isEnterKey = "Y";
        };

        this.cboReq2_onitemchanged = function(obj,e)
        {
        	if( Ex.isEmpty(e.postvalue) )
        	{
        		this.divWebEditor.form.setContent("");
        	}
        	this.fnSetCheckListBtn(this.dsWfSrm.getColumn(0, "UPMU_ID2"), e.postvalue);
        };

        this.stcS04_onitemchanged = function(obj,e)
        {
        	if(this.dsWfSrm.getColumn(0,"PERIOD_YN") == "Y")
        	{
        		var param = {
        			msg : "정기신청건의 경우, 향후 신정보계 또는 EDW 등 \n\n현업이 직접 데이터 추출할 수 있도록 개발요청 하십시오"
        		  , arrparam : ['']
        		  , msgtype : "I"
        		  };
        		Ex.core.alert(this, param);
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "REQ_ID1" || e.columnid == "REQ_ID2" ||e.columnid == "UPMU_ID1" || e.columnid == "UPMU_ID2")
        	{
        		var cboObj;
        		var colNm;

        		if(e.columnid == "REQ_ID1")
        		{
        			dsObj	= this.dsReq2;
        			cboObj	= this.cboReq2;
        			colNm	= "REQ_ID2";
        		}
        		else if(e.columnid == "REQ_ID2")
        		{
        			dsObj	= this.dsSrCategoryNh;
        			cboObj	= this.cboReq3;
        			colNm	= "REQ_ID3";
        		}
        		else if(e.columnid == "UPMU_ID1")
        		{
        			dsObj	= this.dsUpmu2;
        			cboObj	= this.cboUpmu2;
        			colNm	= "UPMU_ID2";
        		}
        		else if(e.columnid == "UPMU_ID2")
        		{
        			dsObj	= this.dsSvcStaffMng;
        			cboObj	= this.cbo_preConfUserNm;
        			colNm	= "PRE_CONF_USER_ID";
        		}

        		if( !Ex.isEmpty(e.newvalue) )
        		{
        			if(e.columnid == "UPMU_ID2")
        			{
        				if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        				{
        					// 서비스별 담당자 조회
        					this.fnSvcStaffMng();

        					if(e.newvalue == "BIZC0UA0")	//콜센터시스템-콜인프라
        					{
        						if(this.dsWfSrm.getColumn(0, "REQ_ID2") == "REQC0AE0")	//자료(데이터)요청일경우 추가영역 생성
        						{
        							if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PERIOD_YN")) )	this.dsWfSrm.setColumn(0, "PERIOD_YN", "N");
        							if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "BATCH_YN")) )		this.dsWfSrm.setColumn(0, "BATCH_YN", "N");
        							if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRIVACY_YN")) )	this.dsWfSrm.setColumn(0, "PRIVACY_YN", "N");
        							if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "DATA_COL_YN")) )	this.dsWfSrm.setColumn(0, "DATA_COL_YN", "N");
        							if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "INFOMEET_YN")) )	this.dsWfSrm.setColumn(0, "INFOMEET_YN", "N");
        						}
        					}
        				}
        			}
        			else if(e.columnid == "REQ_ID2")
        			{
        				// 자료(데이터)요청일경우 추가영역 생성
        				if(e.newvalue == "REQC0AE0")
        				{
        					var comps= this.components;
        					for(var i=0; i<comps.length; i++)
        					{
        						if(comps[i].name.indexOf("stcS") === 0)
        						{
        							comps[i].set_visible(true);
        						}
        					}

        					if(this.dsWfSrm.getColumn(0, "UPMU_ID2") == "BIZC0UA0")	//콜센터시스템-콜인프라
        					{
        						if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PERIOD_YN")) )	this.dsWfSrm.setColumn(0, "PERIOD_YN", "N");
        						if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "BATCH_YN")) )		this.dsWfSrm.setColumn(0, "BATCH_YN", "N");
        						if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRIVACY_YN")) )	this.dsWfSrm.setColumn(0, "PRIVACY_YN", "N");
        						if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "DATA_COL_YN")) )	this.dsWfSrm.setColumn(0, "DATA_COL_YN", "N");
        						if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "INFOMEET_YN")) )	this.dsWfSrm.setColumn(0, "INFOMEET_YN", "N");
        					}
        				}
        				else
        				{
        					var comps= this.components;
        					for(var i=0; i<comps.length; i++)
        					{
        						if(comps[i].name.indexOf("stcS") === 0)
        						{
        							comps[i].set_visible(false);
        						}
        					}
        				}
        			}
        			else
        			{
        				if(this.isEnterKey == "Y")	// 엔터키로 접근시 체인지함수 스킵
        				{
        					var oParam = {
        						upCmmCd		: [e.newvalue		]	// 조회할 상위코드
        						,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        						,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        						,useYn		: ['Y'				]	// 사용여부
        						,filter		: [''				]	// filterStr
        						,objDs		: [dsObj			]	// copy dataset
        					}
        					Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        					this.cboUpmu2.set_text("");
        					this.cboUpmu2.setFocus();
        					this.isEnterKey = "N";
        				}
        				else
        				{
        					var oParam = {
        						upCmmCd		: [e.newvalue		]	// 조회할 상위코드
        						,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        						,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        						,useYn		: ['Y'				]	// 사용여부
        						,filter		: [''				]	// filterStr
        						,objDs		: [dsObj			]	// copy dataset
        					}
        					Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        					var fRow = dsObj.findRow("CMM_CD", this.dsWfSrm.getColumn(0, colNm));

        					if(fRow == -1 || fRow == 0)
        					{
        						cboObj.set_index(0);
        						cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        					}
        				}
        			}

        			if(e.columnid == "REQ_ID1")
        			{
        				this.dsSrCategoryNh.clearData();

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "REQ_ID2")))
        				{
        					/*
        					var oParam = {
        						 upCmmCd	: [this.dsWfSrm.getColumn(0, "REQ_ID2")	]	// 조회할 상위코드
        						,codeDiv	: [''				]	// 조회할 코드의 업무구분
        						,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        						,useYn		: ['Y'				]	// 사용여부
        						,filter		: [''				]	// filterStr
        						,objDs		: [this.dsUpmu3		]	// copy dataset
        					}
        					Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        					*/
        				}
        				else
        				{
        					var aRow = this.dsSrCategoryNh.addRow();
        					this.dsSrCategoryNh.setColumn(aRow, "SR_CAT_NAME", "- 전체 -");
        				}

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "REQ_ID3")) )
        				{
        					fRow = this.dsReq1.findRow("CMM_CD", this.dsWfSrm.getColumn(0, "REQ_ID3"));

        					if(fRow == -1 || fRow == 0)
        					{
        						this.cboReq3.set_index(0);
        						this.cboReq3.set_text("- 전체 -");
        					}
        				}
        			}
        			else if( e.columnid == "UPMU_ID1" && Ex.isEmpty(this.dsWfSrm.getColumn(0,"UPMU_ID2")) )
        			{
        				this.dsSvcStaffMng.clearData();

        				var aRow = this.dsSvcStaffMng.addRow();
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", "- 선택 -");
        				this.cbo_preConfUserNm.set_index(0);
        				this.cbo_preConfUserNm.set_text("- 선택 -");
        			}
        			else if (e.columnid == "UPMU_ID1")
        			{
        				this.dsSvcStaffMng.clearData();

        				var aRow = this.dsSvcStaffMng.addRow();
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", "- 선택 -");
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			if(e.columnid == "REQ_ID2")
        			{
        				dsObj.setColumn(aRow, "SR_CAT_NAME", "- 전체 -");

        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "SR_CAT_NAME"));

        				this.divWebEditor.form.setContent("<p>&nbsp;</p>");
        			}
        			else
        			{
        				dsObj.setColumn(aRow, "CMM_CD_NM", "- 전체 -");

        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			}

        			if(e.columnid == "REQ_ID1")
        			{
        				this.dsSrCategoryNh.clearData();
        				var aRow = this.dsSrCategoryNh.addRow();
        				this.dsSrCategoryNh.setColumn(aRow, "SR_CAT_NAME", "- 전체 -");

        				this.cboReq3.set_index(0);
        				this.cboReq3.set_text("- 전체 -");
        			}
        			else if(e.columnid == "UPMU_ID1" || e.columnid == "UPMU_ID2")
        			{
        				if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")) )
        				{
        					this.dsSvcStaffMng.clearData();
        					var aRow = this.dsSvcStaffMng.insertRow();
        					this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", "- 선택 -");

        					this.cbo_preConfUserNm.set_index(0);
        					this.cbo_preConfUserNm.set_text("- 선택 -");
        				}
        			}
        		}
        	}
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboReq2.addEventHandler("onitemchanged",this.cboReq2_onitemchanged,this);
            this.cboReq3.addEventHandler("onitemchanged",this.cboReq3_onitemchanged,this);
            this.cboUpmu1.addEventHandler("onlbuttondown",this.cboUpmu1_onlbuttondown,this);
            this.cboUpmu1.addEventHandler("onkillfocus",this.cboUpmu1_onkillfocus,this);
            this.cboUpmu1.addEventHandler("onkeydown",this.cboUpmu1_onkeydown,this);
            this.cboUpmu2.addEventHandler("onlbuttondown",this.cboUpmu2_onlbuttondown,this);
            this.cboUpmu2.addEventHandler("onkillfocus",this.cboUpmu2_onkillfocus,this);
            this.cboUpmu2.addEventHandler("onitemchanged",this.cboUpmu2_onitemchanged,this);
            this.cboUpmu3.addEventHandler("onlbuttondown",this.cboUpmu3_onlbuttondown,this);
            this.cboUpmu3.addEventHandler("onkillfocus",this.cboUpmu3_onkillfocus,this);
            this.cbo_preConfUserNm.addEventHandler("onitemchanged",this.cbo_preConfUserNm_onitemchanged,this);
            this.Static21.addEventHandler("onclick",this.Static21_onclick,this);
            this.btn_agreeCompDtChg.addEventHandler("onclick",this.btn_agreeCompDtChg_onclick,this);
            this.btn_alike.addEventHandler("onclick",this.btn_alike_onclick,this);
            this.stcS06.addEventHandler("onitemchanged",this.stcS04_onitemchanged,this);
            this.btn_contUpdateHis.addEventHandler("onclick",this.btn_contUpdateHis_onclick,this);
            this.btn_contUpdate.addEventHandler("onclick",this.btn_contUpdate_onclick,this);
            this.stcS08.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.stcS10.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUpmuChkList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsReqTestList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrmHw.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrmHw.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR5017_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
