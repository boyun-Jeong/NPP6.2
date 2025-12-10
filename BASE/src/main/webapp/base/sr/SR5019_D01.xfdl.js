(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5019_D01");
            this.set_titletext("출입요청서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,746);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsLocCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrCardUseReq", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMP_LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CPY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_INOUT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IMP_LOC_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrCardChk", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMP_LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CPY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_INOUT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMP_LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CGR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CPY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_INOUT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_START_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaff", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
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
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReq3","cboReq2:2","39","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("SR_CAT_ID");
            obj.set_datacolumn("SR_CAT_NAME");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV3;NULL");
            obj.set_innerdataset("dsSrCategoryNh");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPreConfUserNm","49.73%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사전협의자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","371",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_preConfUserNm","stcPreConfUserNm:4.91599999999994","40","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("사전협의자;NULL");
            obj.set_innerdataset("dsSvcStaffMng");
            obj.set_codecolumn("STAFF_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","67",null,"304","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","67","130","304",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","129.00","67",null,null,"0","376",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3_00_01_00_00","0","511","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("출입자정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_01_00_00","0","536","1820","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","546",null,"200","0.00%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsSrCardUseReq");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdSubList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"직원명(신청자)\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"사용자 회사명\"/><Cell col=\"6\" text=\"핸드폰번호\"/><Cell col=\"7\" text=\"신청사유\"/><Cell col=\"8\" text=\"출입장소\"/><Cell col=\"9\" text=\"출입카드번호\"/><Cell col=\"10\" text=\"사용시작일시\"/><Cell col=\"11\" text=\"사용종료(반납)일시\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:CGR_USER_NM\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_NM\" expandshow=\"hide\" expandsize=\"24\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:USER_CPY_NM\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"###-####-####\" maskedittype=\"string\" text=\"bind:USER_PHONE_NO\" readonly=\"true\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:CARD_INOUT_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"8\" text=\"bind:IMP_LOC_CD_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:CARD_NO\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:USE_START_DT\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" maskeditmaskchar=\"0\" edittype=\"mask\"/><Cell col=\"11\" text=\"bind:USE_END_DT\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" displaytype=\"mask\" edittype=\"mask\" maskeditmaskchar=\"0\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/><Cell col=\"7\" text=\"운영환경\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_NM\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/><Cell col=\"7\" text=\"bind:OPENV_CATE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"511","60","24","75",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"511","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01","0","424",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00","0","424","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("출입장소");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLocCd","stcUpmu00_00:5","429","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("출입장소;NULL");
            obj.set_enable("true");
            obj.set_innerdataset("dsLocCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3","0","390","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("출입증 신청정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","0","414",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","491",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_00","330.00","424","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("사용 시작 일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01_00","0","457",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_00_00","330.00","457","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("사용 종료 일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_01","0","457","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDeptCd","stcUpmu00_00_01:5","462","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("관리부서;NULL");
            obj.set_enable("false");
            obj.set_innerdataset("dsLocCd");
            obj.set_codecolumn("ITM_VAL_1");
            obj.set_datacolumn("ITM_VAL_2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStime","stcUpmu00_00_00:5","429","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validation("사용 시작 일;NULL");
            obj.set_validationGroup("input02");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSTime","calStime:5","429","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validationGroup("input02");
            obj.set_validation("사용 시작 시간;NULL");
            obj.set_value("0000");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEtime","stcUpmu00_00_00_00:5","462","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validation("사용 종료 일;NULL");
            obj.set_validationGroup("input02");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskEime","calEtime:5","462","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validationGroup("input02");
            obj.set_validation("사용 종료 시간;NULL");
            obj.set_value("0000");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alike","1618.00","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("유사요청건 조회");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1820,746,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaReqCont","value","dsWfPbm","REQ_CONT");
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

            obj = new BindItem("item4","Static09_01","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Static09_01.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Static09_01.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Static09_01.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stcUpmu00_00_00","value","dsWfSrm","SR_ODV_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Static09_01_00","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Static09_01_00.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Static09_01_00.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Static09_01_00.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","stcUpmu00_00_00_00","value","dsWfSrm","SR_ODV_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","calStime","value","dsMainSelect","USE_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","calEtime","value","dsMainSelect","USE_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboLocCd","value","dsMainSelect","IMP_LOC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","mskSTime","value","dsMainSelect","USE_START_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboDeptCd","value","dsMainSelect","MNG_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","mskEime","value","dsMainSelect","USE_END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR5019_D01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5019_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5019_D01
        * 화면(명)	︰ 출입요청서
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.01.23	WEMB		최초작성
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

        	if(this.getOwnerFrame().pDs)
        	{
        		//this.dsWfSrm.copyRow(0,this.getOwnerFrame().pDs);
        		let dataCopy = this.getOwnerFrame().pDs;

        		// 업무분류LV2
        		var oParam = {
        			 upCmmCd	: [this.dsWfSrm.getColumn(0, "UPMU_ID1")	]	// 조회할 상위코드
        			,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        			,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        			,useYn		: ['Y'				]	// 사용여부
        			,filter		: [''				]	// filterStr
        			,objDs		: [this.dsUpmu2		]	// copy dataset
        		}
        		Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        		this.dsWfSrm.setColumn(0,"UPMU_ID1", dataCopy.getColumn(0,"UPMU_ID1"));
        		this.dsWfSrm.setColumn(0,"UPMU_ID2", dataCopy.getColumn(0,"UPMU_ID2"));

        		// 사전협의자
        		/*var aRow = this.dsSvcStaffMng.addRow();
        		this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM",  dataCopy.getColumn(0, "PRE_CONF_USER_NM"));
        		this.dsSvcStaffMng.setColumn(aRow, "STAFF_ID",  dataCopy.getColumn(0, "PRE_CONF_USER_ID"));
        		this.dsWfSrm.setColumn(0,"STAFF_NM", dataCopy.getColumn(0,"PRE_CONF_USER_NM"));
        		this.dsWfSrm.setColumn(0,"STAFF_ID", dataCopy.getColumn(0,"PRE_CONF_USER_ID"));
        		*/

        		this.dsSrBaseInfo.setColumn(0, "TITLE", dataCopy.getColumn(0,"SR_BRIEF"));
        		var webConts = dataCopy.getColumn(0,"REQ_CONT")||'';
        		this.divWebEditor.form.setContent(webConts, false);
        		this.getOwnerFrame().pDs = null;
        	}
        }

        this.fn_initDataset = function()
        {
        	if( this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && this.parent.editYn == "Y" )
        	{
        		this.dsMainSelect.setInsertRow();

        		this.dsMainSelect.setColumn(0, "USE_START_DT", Ex.util.today());
        		this.dsMainSelect.setColumn(0, "USE_START_TIME", "0900");
        		this.dsMainSelect.setColumn(0, "USE_END_DT", Ex.util.today());
        		this.dsMainSelect.setColumn(0, "USE_END_TIME", "1800");
        	}

        // 	if( this.reqInfo.REQ_STAT_CD == "RQST11" )
        // 	{
        // 		for(var i=0; i<this.dsSrCardUseReq.rowcount; i++)
        // 		{
        // 			this.dsSrCardUseReq.setColumn(i, "PRC_USER_ID", Ex.util.getSession("gvUserId")); 		 // 결재자ID
        // 			this.dsSrCardUseReq.setColumn(i, "PRC_USER_ID", Ex.util.getSession("gvUserNm")); 		 // 결재자명
        // 		}
        // 	}

        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
        	{
        		var aRow = this.dsWfSrm.setInsertRow();

        		var evt = nexacro.DSColChangeEventInfo;
        		// 요청분류
        		evt.columnid	= "REQ_ID1";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		evt.columnid	= "REQ_ID2";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		// 요청서명
        		this.cboReq1.set_index(1);
        		this.cboReq2.set_index(7);

        		this.cboLocCd.set_index(1);
        		this.cboDeptCd.set_index(1);
        	}
        	else
        	{
        		if(this.dsWfSrm.getRowCount() == 0)
        		{
        			this.dsWfSrm.setInsertRow();
        		}
        		// 요청서명
        		this.cboReq1.set_index(1);
        		this.cboReq2.set_index(7);

        		this.cboLocCd.set_index(1);
        		this.cboDeptCd.set_index(1);

        // 		this.dsMainSelect.setColumn(0, "USE_END_DT", this.dsSrCardUseReq.getColumn(0, "USE_END_DT"));
        // 		this.dsMainSelect.setColumn(0, "USE_START_DT", this.dsSrCardUseReq.getColumn(0, "USE_START_DT"));
        	}
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnAdd = function(objDs)
        {
        	var strReqSeq = this.dsSrCardUseReq.getMax("SEQ");
        	var nNo = 0;

        	if(strReqSeq == null || strReqSeq == "0") {
        		nNo = 1;
        	} else {
        		nNo = new Number(strReqSeq.valueOf()) + 1;
        	}

        	var rowPos = this.dsSrCardUseReq.setInsertRow(this.dsSrCardUseReq.rowcount+1);
        	var grdObj = this.grdList;

        	this.dsSrCardUseReq.setColumn(rowPos, "SEQ", nNo);		// 시퀀스
        	this.dsSrCardUseReq.setColumn(rowPos, "REQ_ID", this.dsCond.getColumn(0, "REQ_ID"));	// 시퀀스

        	this.dsMainSelect.addColumn("IMP_LOC_CD", "STRING");
        	this.dsSrCardUseReq.setColumn(rowPos, "IMP_LOC_CD", this.dsMainSelect.getColumn(0, "IMP_LOC_CD")); // 출입장소코드
        	this.dsSrCardUseReq.setColumn(rowPos, "IMP_LOC_CD_NM", this.cboLocCd.text); // 출입장소명
        	this.dsSrCardUseReq.setColumn(rowPos, "MNG_DEPT_CD", this.dsMainSelect.getColumn(0, "MNG_DEPT_CD")); // 관리부서코드
        	this.dsSrCardUseReq.setColumn(rowPos, "MNG_DEPT_NM", this.cboLocCd.text); // 관리부서명
        	this.dsSrCardUseReq.setColumn(rowPos, "USE_START_DT", this.dsMainSelect.getColumn(0, "USE_START_DT") + this.dsMainSelect.getColumn(0, "USE_START_TIME")); // 사용시작일시
        	this.dsSrCardUseReq.setColumn(rowPos, "USE_END_DT", this.dsMainSelect.getColumn(0, "USE_END_DT") + this.dsMainSelect.getColumn(0, "USE_END_TIME")); // 사용종료일시

        	//this.dsSrCardUseReq.setColumn(rowPos, "CARD_INOUT_CD", "- 선택1 -");		// 시퀀스

        	/*this.dsType.addRow();
        	this.dsType.setColumn(0, "CMM_CD", "- 선택 -");
        	this.dsType.setColumn(0, "CMM_CD_NM", "- 선택 -");
        	objDs.setColumn(rowPos, "CARD_INOUT_CD", "- 선택 -");	// 직원명(신청자)
        	*/

        	objDs.setColumn(rowPos, "CGR_USER_ID", Ex.util.getSession("gvUserId"));	// 직원ID(신청자)
        	objDs.setColumn(rowPos, "CGR_USER_NM", Ex.util.getSession("gvUserNm"));	// 직원명(신청자)

        	objDs.set_rowposition(rowPos);
        	grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(3, objDs.rowposition);	// 그리드 셀 포커스 이동
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }
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
        	switch (sSvcId)
        	{
        		case "select" :
        			var reqId1 = this.dsWfSrm.getColumn(0, "REQ_ID1");
        			var reqId2 = this.dsWfSrm.getColumn(0, "REQ_ID2");

        			var evt = nexacro.DSColChangeEventInfo;

        			evt.columnid	= "REQ_ID1";
        			evt.newvalue	= reqId1;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			evt.columnid	= "REQ_ID2";
        			evt.newvalue	= reqId2;
        			this.dsOnColumnChanged(this.dsWfSrm, evt);

        			var webConts = this.dsWfSrm.getColumn(this.dsWfSrm.rowposition, 'REQ_CONT')||'';
        			this.divWebEditor.form.setContent(webConts, false);

        			break;

        		case "select02" :
        				this.cboReq3.set_index(3);
        			break;

        		// 카드 중복체크
        		case "select08" :
        // 			if(this.dsSrCardChk.getColumn(0,"CARD_INOUT_CD") == "사용중")
        // 			{
        // 				this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", this.dsSrCardChk.getColumn(this.dsSrCardChk.rowposition,"CARD_NO")); // 카드번호
        // 				this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "USE_START_DT", this.dsSrCardChk.getColumn(this.dsSrCardChk.rowposition,"USE_START_DT")); // 사용시작일
        //
        // 				//this.grdList.setCellProperty("body", 7, "edittype", "combo"); // 신청유형
        // 				//this.grdList.setCellProperty("body", 10, "edittype", "mask"); // 사용시작일시
        // 				//this.grdList.setCellProperty("body", 11, "edittype", "mask"); // 사용종료일시
        //
        // 			} else if (this.dsSrCardChk.getColumn(0, "CARD_STATUS_CD") == "사용가능"){
        //
        // 				if(this.dsSrCardUseReq.rowcount > 1){
        // 					for(i=0; i<this.dsSrCardChk.rowcount; i++){
        // 						for(j=0; j<this.dsSrCardUseReq.rowcount; j++){
        // 							if(this.dsSrCardChk.getColumn(i, "CARD_NO") != this.dsSrCardUseReq.getColumn(j, "CARD_NO")){
        // 								this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", this.dsSrCardChk.getColumn(i,"CARD_NO")); // 카드번호
        // 								return;
        // 							}
        // 						}
        // 					}
        // 				} else {
        // 					this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", this.dsSrCardChk.getColumn(this.dsSrCardChk.rowposition,"CARD_NO")); // 카드번호
        // 				}
        // 				//this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", this.dsSrCardChk.getColumn(this.dsSrCardChk.rowposition,"CARD_NO")); // 카드번호
        // 				//this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", "등록 시 자동 배정됩니다"); // 카드번호
        //
        // 				//this.dsType.deleteColumn(2);
        // 				//this.dsType.deleteColumn(3);
        // 			}
        //
        // 			if(this.reqInfo.REQ_STAT_CD == "RQST01")
        // 			{
        // 				this.grdList.set_readonly(false);
        // 				this.grdList.setCellProperty("body", 4, "edittype", "none");
        // 				this.grdList.setCellProperty("body", 5, "edittype", "none");
        // 				this.grdList.setCellProperty("body", 6, "edittype", "none");
        // 				this.grdList.setCellProperty("body", 10, "edittype", "none");
        // 			}

        			break;

        		case "postSelect" :
        			if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) )
        			{
        				// 유사요청건 조회는 등록단계에서만 노출 이외에는 복사
        				this.btn_alike.set_text("요청서 복사등록");
        				this.btn_alike.set_enable(false);
        				this.btn_alike.set_enable(true);
        			}
        			break;

        		case "save01" :
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	//trace("pID=" + pID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;

        	var tempDs = new Dataset();
        	tempDs.loadXML(varValue);

        	switch (pID)
        	{
        		case "commSearchUserPopup" :
        			this.dsPopRtn.loadXML(varValue);
        			// TODO 담당자 부서 컬럼크기가 운영에서 VARCHAR2(14)로 잡혀있으면 ID만 받게끔 수정해야함
        			//this.dsSrBusiProgDisuse.setColumn(this.dsSrBusiProgDisuse.rowposition, "DAMDANG_ID", this.dsPopRtn.getColumn(0, 'USER_ID'));
        			// 담당자 이름(사번)
        			this.dsSrCardUseReq.setColumn(this.dsSrBusiProgDisuse.rowposition, "USER_NM", this.dsPopRtn.getColumn(0, 'USER_NM') + "(" + this.dsPopRtn.getColumn(0, 'USER_ID') + ")");
        			// 사용자회사명
        			this.dsSrCardUseReq.setColumn(this.dsSrBusiProgDisuse.rowposition, "USER_CPY_NM", this.dsPopRtn.getColumn(0, 'DEPT_NM'));
        			break;

        		case "alikePop"	:
        			// 요청분류가 같을때
        			if(this.dsWfSrm.getColumn(0,"REQ_ID1") == tempDs.getColumn(0,"SR_TYPE1")){
        				this.dsSrBaseInfo.setColumn(0, "TITLE", tempDs.getColumn(0,"TITLE"))
        				this.dsWfSrm.setColumn(0,"REQ_ID2", tempDs.getColumn(0,"SR_TYPE2"));
        				this.dsWfSrm.setColumn(0,"UPMU_ID1", tempDs.getColumn(0,"UPMU_ID1"));
        				this.dsWfSrm.setColumn(0,"UPMU_ID2", tempDs.getColumn(0,"UPMU_ID2"));
        			}

        			var webConts = tempDs.getColumn(0,"REQ_CONT")||'';
        			this.divWebEditor.form.setContent(webConts, false);

        			break;

        		case "srCopynPop"	:
        			Ex.core.pclose(this);
        			break;

        		case "srCardPop"	:
        			var cardNo = tempDs.getColumn(0, "CARD_NO");
        			if( this.dsSrCardUseReq.findRow("CARD_NO", cardNo) > -1 )
        			{
        				var param = {
        				msg	: "이미 배정된 출입카드입니다."	//메시지 내용
        				, arrparam : []					//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return;
        			}
        			this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "CARD_NO", cardNo);
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSaveCheck();
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
                			title : Ex.core.word("요청서"),
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
        	// 그리드 에니메이션처리
        	this.grdList.displayRowType();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['REQC0000'	,'IMP_LOC_CD'				,'CARD_INOUT_CD']	// 조회할 상위코드
        		,codeDiv	: [''			,'NHFIRE'					,''				]	// 조회할 코드의 업무구분
        		,optStr		: ['ALL'		,'SEL'						,'SEL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'			,'Y'						,'Y'			]	// 사용여부
        		,filter		: [''			,''	,''				]	// filterStr
        		,objDs		: [this.dsReq1	,this.dsLocCd				,this.dsType	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfSrm.setColumn(this.dsWfSrm.rowposition, 'REQ_CONT', webConts);

        	if( !Ex.util.isUpdated(this.dsWfSrm) && !Ex.util.isUpdated(this.dsSrCardUseReq) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;
        	//일반문의와 일일점검일지는 사전협의자가 없음

        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfSrm.setColumn(this.dsWfSrm.rowposition, 'REQ_CONT', webConts);

        	if(this.dsWfSrm.getColumn(0, "REQ_CONT").trim() == "<p>&nbsp;</p>"){
        		var param = {
                	msg	: "요청내용은 필수 입력 항목입니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                	Ex.core.alert(this, param);
                	return;
        	}

        	var nRowCnt = this.dsSrCardUseReq.rowcount;
        	if(nRowCnt == 0){
        		var param = {
                	msg	: "출입자정보를 등록하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		return false;
        	}

        	for(i = 0; i < nRowCnt; i++){
        		// CI_ID
        		strValue = this.dsSrCardUseReq.getColumn(i, "USER_NM");
        		if(strValue == null){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 사용자명을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	for(i = 0; i < nRowCnt; i++){
        		// 핸드폰번호
        		strValue = this.dsSrCardUseReq.getColumn(i, "USER_PHONE_NO");
        		if(strValue == null || this.dsSrCardUseReq.getColumn(i, "USER_PHONE_NO").trim().length < 11){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 핸드폰번호를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 신청사유
        		strValue = this.dsSrCardUseReq.getColumn(i, "CARD_INOUT_CD");
        		if(strValue == null){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 신청사유를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 출입장소
        		strValue = this.dsSrCardUseReq.getColumn(i, "IMP_LOC_CD");
        		if(strValue == null){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 출입장소룰 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 시작일시
        		strValue = this.dsSrCardUseReq.getColumn(i, "USE_START_DT");
        		if(strValue == null){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 사용시작일시를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 종료일시
        		strValue = this.dsSrCardUseReq.getColumn(i, "USE_END_DT");
        		if(strValue == null){
        			var param = {
        				msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 사용종료일시를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if(	this.reqInfo.WF_PROC_CD == "WF_PROC_2010" && this.reqInfo.REV_BTN_YN == "Y" ) {
        			strValue = this.dsSrCardUseReq.getColumn(i, "CARD_NO");
        			if( Ex.isEmpty(strValue) )
        			{
        				var param = {
        					msg	: "출입자정보 " + (i.valueOf() + 1) + "행의 출입카드번호를 확인하시기 바랍니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
        	}

        	this.dsWfSrm.setColumn(0, "REQ_USER_ID", Ex.util.getSession("gvUserId")); 		 // 요청자ID
        	this.dsWfSrm.setColumn(0, "REQ_USER_NM", Ex.util.getSession("gvUserNm"));   	 // 요청자명
        	this.dsWfSrm.setColumn(0, "REQ_DEPT_ID", Ex.util.getSession("gvDeptCd")); 		 // 요청자부서ID
        	this.dsWfSrm.setColumn(0, "REQ_USER_JBC_POSI",  Ex.util.getSession("gvPosNm") ); // 요청자직챙
        	this.dsWfSrm.setColumn(0, "SR_BRIEF"	,  this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo.getColumn(0, "TITLE")); 		// 제목
        	this.dsWfSrm.setColumn(0, "REQ_WISH_SDT",  this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")); // 희망완료일시

        	return true;
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
        // 사용가능 출입카드 확인
        this.fnCardUseChk = function()
        {
        // 	var sTranId = "select08";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        //     var sService = "SR5000D/select08";						// 서비스명
        //     var sInDs = "dsCond=dsSrCardChk";						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        //     var sOutDs = "dsSrCardChk=dsSrCardChk";					// 서버에서 수신할 데이타셋
        //     var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        //     Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.setChangeEditAfter = function()
        {
        	trace("this.setChangeEditAfter() this.parent.editYn : " + this.parent.editYn);

        	// 에디터영역 생성 제어
        	this.divWebEditor.form.initCreate(this.parent.editYn == "Y" ? (this.reqInfo.WF_PROC_CD == "WF_PROC_1000" ? false : true) : true);

        	// 카드반출 시 출입카드번호 수정
        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_2010" && this.reqInfo.REV_BTN_YN == "Y" )
        	{
        		Ex.util.setCompPropAll(this, this.parent, false);

        		this.grdList.set_enable(true);
        		this.grdList.set_readonly(false);

        		for(var i=0; i<this.grdList.getCellCount("body"); i++)
        		{
        			this.grdList.setCellProperty("body", i, "edittype", "none");
        		}
        	}

        	// 카드반납 시 사용종료(반납)일시 수정
        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_2020" && this.reqInfo.REV_BTN_YN == "Y" )
        	{
        		Ex.util.setCompPropAll(this, this.parent, false);

        		this.grdList.set_enable(true);
        		this.grdList.set_readonly(false);

        		for(var i=0; i<this.grdList.getCellCount("body"); i++)
        		{
        			this.grdList.setCellProperty("body", i, "edittype", "none");
        		}
        		this.grdList.setCellProperty("body", 11, "edittype", "mask");
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			this.fnAdd(this.dsSrCardUseReq);
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsSrCardUseReq);
        			break;
        	}
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
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
        	} else {
        		Ex.core.popup(
        		this,					// <--- 팝업 실행 스코프
        		"alikePop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"sr::SR5000_P08.xfdl",	// <--- 팝업창 오픈 Url
        		{
        			title		: "유사요청건 조회",
        			pDs			: this.dsWfSrm,
        			PDs02			: this.dsSrDataBaseWork
        		},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        		//"width=1200,height=750"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	if(this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_NM") != null && this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_PHONE_NO") != null
        		&& this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "CARD_NO"))
        	{
        		this.cardNoAssign();
        	}
        };

        this.grdList_oncellposchanged = function(obj,e)
        {
        	if(this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_NM") != null && this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_PHONE_NO") != null
        		&& this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "CARD_NO"))
        	{
        		this.cardNoAssign();
        	}
        };

        this.cardNoAssign = function(obj,e)
        {
        	// 값비교를 위한 이전데이터
        	B_USER_PHONE_NO = this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_PHONE_NO");

        	// 출입카드 사용여부 체크
        	USER_NM = this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_NM");
        	USER_PHONE_NO = this.dsSrCardUseReq.getColumn(this.dsSrCardUseReq.rowposition, "USER_PHONE_NO");

        	this.dsSrCardChk.clearData();
        	this.dsSrCardChk.addRow();
        	this.dsSrCardChk.addColumn("USER_PHONE_NO", "String");
        	this.dsSrCardChk.setColumn(0,"USER_PHONE_NO", USER_PHONE_NO);

        	if((B_USER_PHONE_NO != USER_PHONE_NO) || USER_NM != null && USER_PHONE_NO !=null && USER_PHONE_NO.trim().length < 11){
        		var param = {
        			msg	: "핸드폰번호를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        		Ex.core.alert(this, param);
        		return false;

        	} else if (USER_NM != null && USER_PHONE_NO !=null) {
        		MAX_SEQ = "001";
        		for(var i = 0; i < this.dsSrCardUseReq.rowcount; i++){
        			if(MAX_SEQ < this.dsSrCardUseReq.getColumn(i, "CARD_NO")){
        				MAX_SEQ = this.dsSrCardUseReq.getColumn(i, "CARD_NO");
        			}
        			if(this.dsSrCardUseReq.rowposition != i && USER_PHONE_NO == this.dsSrCardUseReq.getColumn(i, "USER_PHONE_NO")){
        				var param = {
        						msg	: "중복된 핸드폰번호가 있습니다."	//메시지 내용
        							, arrparam : []				//메시지의 변수에 들어갈 실제값
        							, msgtype : "E"				//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        							};
        					Ex.core.alert(this, param);
        					this.dsSrCardUseReq.setColumn(this.dsSrCardUseReq.rowposition, "USER_PHONE_NO", "");
        					return false;
        				};
        				this.dsSrCardChk.setColumn(0,"CARD_NO", MAX_SEQ);
        			}
        //		this.fnCardUseChk();
        	};
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "REQ_ID1" || e.columnid == "REQ_ID2")
        	{
        		//this.cboReq3.enable = false;

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
        		if( !Ex.isEmpty(e.newvalue) )
        		{
        			if(e.columnid == "REQ_ID2"){
        				this.fnCategoryNh();	// 카테고리 조회
        			} else {
        				var oParam = {
        					upCmmCd	: [e.newvalue		]	// 조회할 상위코드
        					,codeDiv	: [''				]	// 조회할 코드의 업무구분
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
        			if(e.columnid == "REQ_ID1")
        			{
        				this.dsSrCategoryNh.clearData();

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "REQ_ID2")))
        				{
        				/*	var oParam = {
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
        					this.dsSrCategoryNh.setColumn(aRow, "SR_CAT_NAME", Ex.core.word("- 전체 - "));
        				}

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "REQ_ID3")) )
        				{
        					fRow = this.dsReq1.findRow("CMM_CD", this.dsWfSrm.getColumn(0, "REQ_ID3"));

        					if(fRow == -1 || fRow == 0)
        					{
        						this.cboReq3.set_index(0);
        						this.cboReq3.set_text(Ex.core.word("- 전체 - "));
        					}
        				}
        			} else if(e.columnid == "UPMU_ID1")
        			{
        				this.dsUpmu3.clearData();

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID2")) )
        				{
        					//cboObj.set_index(0);
        					var oParam = {
        						 upCmmCd	: [this.dsWfSrm.getColumn(0, "UPMU_ID2")	]	// 조회할 상위코드
        						,codeDiv	: [''				]	// 조회할 코드의 업무구분
        						,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        						,useYn		: ['Y'				]	// 사용여부
        						,filter		: [''				]	// filterStr
        						,objDs		: [this.dsUpmu3		]	// copy dataset
        					}
        					Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        				}
        				else
        				{
        					var aRow = this.dsUpmu3.addRow();
        					this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 - "));
        				}

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID3")) )
        				{
        					fRow = this.dsUpmu3.findRow("CMM_CD", this.dsWfSrm.getColumn(0, "UPMU_ID3"));

        					if(fRow == -1 || fRow == 0)
        					{
        						this.cboUpmu3.set_index(0);
        						this.cboUpmu3.set_text(Ex.core.word("- 전체 - "));
        					}
        				}
        			}

        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			if(e.columnid == "REQ_ID2"){
        				dsObj.setColumn(aRow, "SR_CAT_NAME", Ex.core.word("- 전체 - "));

        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "SR_CAT_NAME"));
        			} else {
        				dsObj.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 - "));

        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			}

        			if(e.columnid == "REQ_ID1")
        			{
        				this.dsSrCategoryNh.clearData();
        				var aRow = this.dsSrCategoryNh.addRow();
        				this.dsSrCategoryNh.setColumn(aRow, "SR_CAT_NAME", Ex.core.word("- 전체 - "));

        				this.cboReq3.set_index(0);
        				this.cboReq3.set_text(Ex.core.word("- 전체 - "));
        			} else if(e.columnid == "UPMU_ID1")
        			{
        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 - "));

        				this.cboUpmu3.set_index(0);
        				this.cboUpmu3.set_text(Ex.core.word("- 전체 - "));
        			}
        		}
        	}
        	obj.setUpdateRow(e);
        };

        this.cboLocCd_onitemchanged = function(obj,e)
        {
        // 	var oParam = {
        // 		 upCmmCd	: [e.postvalue	]	// 조회할 상위코드
        // 		,codeDiv	: ['NHFIRE'		]	// 조회할 코드의 업무구분
        // 		,optStr		: ['SEL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        // 		,useYn		: ['Y'			]	// 사용여부
        // 		,filter		: [''			]	// filterStr
        // 		,objDs		: [this.dsDeptCd]	// copy dataset
        // 	}
        // 	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        //
        // 	if( this.dsDeptCd.rowcount > 1 ) this.cboDeptCd.set_index(1);
        //	else this.cboDeptCd.set_index(0);
        	var idx = this.cboLocCd.index;
        	this.cboDeptCd.set_index(idx);
        };

        this.grdList_onexpanddown = function(obj,e)
        {
        	if( e.cell == this.grdList.getBindCellIndex("body", "CARD_NO") )
        	{
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"srCardPop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR5019_P02.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title : "출입카드 선택",
        				pSelType : 'S'
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			"autosize"
        		)
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboReq3.addEventHandler("onitemchanged",this.cboReq3_onitemchanged,this);
            this.cbo_preConfUserNm.addEventHandler("onitemchanged",this.cbo_preConfUserNm_onitemchanged,this);
            this.grdList.addEventHandler("oncellposchanged",this.grdList_oncellposchanged,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onexpanddown",this.grdList_onexpanddown,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcUpmu00_00.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.cboLocCd.addEventHandler("onitemchanged",this.cboLocCd_onitemchanged,this);
            this.stcUpmu00_00_00.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_00_00.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_01.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.calStime.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.mskSTime.addEventHandler("onchanged",this.mskSTime_onchanged,this);
            this.calEtime.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.btn_alike.addEventHandler("onclick",this.btn_alike_onclick,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsSrCardUseReq.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSrCardChk.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsMainSelect.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5019_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
