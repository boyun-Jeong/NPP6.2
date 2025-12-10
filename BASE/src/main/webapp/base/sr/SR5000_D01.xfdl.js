(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_D01");
            this.set_titletext("DB작업신청서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAI_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsWp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdo", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">해당사항 없음</Col></Row><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">작업중 서비스 불가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDb", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrDataBaseWork", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REL_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DBMS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENGN_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"DDL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaff", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("요청상세");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReq1","stcUpmu:5.00","39","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
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

            obj = new Combo("cboReq3","cboReq2:2","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj.set_text("사전협의자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00","0","67","130","34",null,null,null,null,null,null,this);
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","135.00","72","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2","72","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:2","72","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("업무분류LV3;NULL");
            obj.set_innerdataset("dsUpmu3");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3","0","420","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("작업일반현황");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","404",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01","0","454",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","0","444",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01_00","0","487",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01_01","0","520",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3_00","0","570","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("DB정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00","0","594",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01_02","0","605",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","554",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3_00_00","0","660","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("요청작업내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00","0","684",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","639",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00","0","454","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("작업명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_00","0","487","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("작업장소");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_01","0","520","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("관련근거");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcProblemCode00","49.73%","487","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("서비스중단여부");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_preConfUserNm","stcPreConfUserNm:5","40","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("사전협의자;NULL");
            obj.set_innerdataset("dsSvcStaffMng");
            obj.set_codecolumn("STAFF_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_02","0","605","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("DB구분");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_02_00","1080.00","605","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("엔진명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_02_01","1440.00","605","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("업무명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_02_02","720.00","605","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("호스트명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu00_00_02_03","360.00","605","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("구성명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaProcExamOpin00","0","694",null,"96","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal_E");
            obj.set_maxlength("4000");
            obj.set_validation("요청작업내용;NULL");
            obj.set_validationGroup("input03");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPrjNm","stcUpmu00_00:5.00","459",null,"24","1171",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("작업명;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPrjNm00","stcUpmu00_00_01:5.00","526",null,"24","1171",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("관련근거;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHostNm","stcUpmu00_00_02_02:5.00","610",null,"24","stcUpmu00_00_02_00:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("호스트명;NULL");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPrjNm01_00","stcUpmu00_00_02_00:5.00","610",null,"24","stcUpmu00_00_02_01:5",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input03");
            obj.set_validation("엔진명;NULL");
            obj.set_maxlength("10");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPrjNm01_01","stcUpmu00_00_02_01:5.00","610",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input03");
            obj.set_validation("업무명;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJobWkp","stcUpmu00_00_00:5.00","493","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("작업장소;NULL");
            obj.set_innerdataset("dsWp");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdSvcDownYn","stcProblemCode00:11.999000000000024","492","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsRdo");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("서비스중단여부;NULL");
            obj.set_validationGroup("input02");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDb","stcUpmu00_00_02:5.00","610","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("DB구분;NULL");
            obj.set_innerdataset("dsDb");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDbNm","stcUpmu00_00_02_03:5.00","610","195","24",null,null,null,null,null,null,this);
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("false");
            obj.set_validationGroup("input02");
            obj.set_validation("구성명;NULL");
            obj.set_readonly("true");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_validationCheckEnable("false");
            obj.set_validationCheckReadonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDbNmPop","edtDbNm:3","610","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","100",null,"304","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","100","130","304",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","129","100",null,null,"0","386",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alike","1618.00","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
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
            obj = new Layout("default","",1820,790,this,function(p){});
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

            obj = new BindItem("item8","stcInfoTitle3","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcInfoTitle3.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stcInfoTitle3.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stcInfoTitle3.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stcInfoTitle3_00","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","stcInfoTitle3_00.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","stcInfoTitle3_00.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","stcInfoTitle3_00.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","stcInfoTitle3_00_00","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","stcInfoTitle3_00_00.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","stcInfoTitle3_00_00.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","stcInfoTitle3_00_00.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","stcUpmu00_00","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","stcUpmu00_00_00","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","stcUpmu00_00_01","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","stcUpmu00_00_02","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","stcUpmu00_00_02_00","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","stcUpmu00_00_02_01","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","stcUpmu00_00_02_02","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","stcUpmu00_00_02_03","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cboJobWkp","value","dsWfSrm","JOB_WKP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","rdSvcDownYn","value","dsWfSrm","SVC_DOWN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","txaProcExamOpin00","value","dsWfSrm","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtHostNm","value","dsSrDataBaseWork","HOST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtPrjNm","value","dsWfSrm","JOB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cbo_preConfUserNm","value","dsWfSrm","PRE_CONF_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtDbNm","value","dsSrDataBaseWork","DB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtPrjNm01_00","value","dsSrDataBaseWork","ENGN_ACC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cboDb","value","dsSrDataBaseWork","DB_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtPrjNm01_01","value","dsSrDataBaseWork","JOB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","edtPrjNm00","value","dsSrDataBaseWork","REL_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR5000_D01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5000_D01
        * 화면(명)	︰ DB작업신청서
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2024.12.23	WEMB		최초작성
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
        this.isEnterKey = "N"; // 업무분류 엔터입력확인
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
        	trace("[SR5000_D01] this.fnInit()");

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
        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
        	{
        		var aRow = this.dsWfSrm.setInsertRow();
        		this.dsSrDataBaseWork.setInsertRow();

        		var evt = nexacro.DSColChangeEventInfo;
        		// 요청분류
        		evt.columnid	= "REQ_ID1";
        		this.dsWfSrm.setColumn(0, "REQ_ID1", "REQC0C00");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "REQ_ID1");

        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		evt.columnid	= "REQ_ID2";
        		this.dsWfSrm.setColumn(0, "REQ_ID2", "REQC0CE0");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "REQ_ID2");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		//DB작업신청서
        		//this.cboReq1.set_index(1);
        		//'REQC0C00'
        		//'BIZC0RH0'
        		//this.cboReq2.set_index(5);
        		this.fnCategoryNh();	// 카테고리 조회

        		// 업무분류
        		evt.columnid	= "UPMU_ID1";
        		this.dsWfSrm.setColumn(0, "UPMU_ID1", "BIZC0R00");
        		evt.newvalue	= this.dsWfSrm.getColumn(0, "UPMU_ID1");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);
        		// 업무분류2
        		evt.columnid	= "UPMU_ID2";
        		this.dsWfSrm.setColumn(0, "UPMU_ID2", "BIZC0RH0");
        		evt.newvalue	=  this.dsWfSrm.getColumn(0, "UPMU_ID2");
        		this.dsOnColumnChanged(this.dsWfSrm, evt);

        		this.dsWfSrm.setColumn(0, "SVC_DOWN_YN", 0);
        	}
        	else
        	{
        		if(this.dsWfSrm.getRowCount() == 0)	this.dsWfSrm.setInsertRow();

        		//DB작업신청서
        		//this.cboReq1.set_index(1);
        		this.cboReq1.set_value("REQC0C00");
        		//this.cboReq2.set_index(5);
        		this.cboReq2.set_value("REQC0CE0");
        		this.fnCategoryNh();	// 카테고리 조회

        //		if(this.reqInfo.REQ_STAT_CD != "RQST00")	this.divWebEditor.height = "343px";
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
        			var upmuId1 = this.dsWfSrm.getColumn(0, "UPMU_ID1");
        			var upmuId2 = this.dsWfSrm.getColumn(0, "UPMU_ID2");
        			var upmuId3 = this.dsWfSrm.getColumn(0, "UPMU_ID3");

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
        			break;

        		case "select02" :
        			//this.cboReq3.set_index(2);
        			this.cboReq3.set_value("SPA05209");
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

        					if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")) )
        					{
        						if(this.dsSvcStaffMng.rowcount == 2)	this.cbo_preConfUserNm.set_index(1);
        						else									this.cbo_preConfUserNm.set_index(0);
        					}
        				}
        			}
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
        	if( Ex.isEmpty(varValue) ) return;

        	var tempDs = new Dataset();
        	tempDs.loadXML(varValue);

        	switch (pID)
        	{
        		case "SV0110_P01" :	//구성항목(CI)
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrDataBaseWork.setColumn(0, "CI_ID", this.dsPopRtn.getColumn(0, "CI_ID"));
        				this.dsSrDataBaseWork.setColumn(0, "DB_NM", this.dsPopRtn.getColumn(0, "CI_NM"));
        				this.dsSrDataBaseWork.setColumn(0, "HOST_NM", this.dsPopRtn.getColumn(0, "HOST_NM"));
        			}
        			break;

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

        			case "srCopynPop"	:
        			Ex.core.pclose(this);
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
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['BIZC0000'	,	'REQC0000'	,		'SWKP0000'	,	'CICT0BB0'	]	// 조회할 상위코드
        		,codeDiv	: ['NHFIRE'		,	''			,		''			,	''			]	// 조회할 코드의 업무구분
        		,optStr		: ['ALL'		,	'ALL'		,		'SEL'		,	'SEL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'			,	'Y'			,		'Y'			,	'Y'			]	// 사용여부
        		,filter		: [''			,	''			,		''			,	''			]	// filterStr
        		,objDs		: [this.dsUpmu1,	this.dsReq1,	this.dsWp,			this.dsDb	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfSrm.setColumn(this.dsWfSrm.rowposition, 'REQ_CONT', webConts);

        	if( !Ex.util.isUpdated(this.dsWfSrm) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;
        	//일반문의와 일일점검일지는 사전협의자가 없음

        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfSrm.setColumn(this.dsWfSrm.rowposition, 'REQ_CONT', webConts);

        	var chkCont = nexacro.replaceAll(nexacro.replaceAll(webConts, "<p>&nbsp;</p>", "", " ", ""));

        	if( Ex.isEmpty(chkCont) )
        	{
        		var param = {
        			  msg	: "요청내용은 필수 입력 항목입니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return;
        	}

        	if( !Ex.util.checkValidate(this, "input02") ) return false;

        	if( Ex.isEmpty(this.dsSrDataBaseWork.getColumn(0, "DB_NM")) )
        	{
        		var param = {
                	  msg	: "구성명은 필수 입력 항목입니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
        		Ex.core.alert(this, param);
        		return;
        	}

        	if( !Ex.util.checkValidate(this, "input03") ) return false;

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

        // 서비스별 담당자 조회
        this.fnSvcStaffMng = function()
        {
        	this.dsStaff.setColumn(0, "SVC_CLSS_CD", "CAT"); 		// 인프라
        	this.dsStaff.setColumn(0, "BSE_LVL2_CD", "SPA05209"); 	// DB작업신청서

        	var sTranId = "select03";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select03";								// 서비스명
            var sInDs = "dsCond=dsStaff";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvcStaffMng=dsSvcStaffMng";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        //화면 컴포넌트 제어를 위해 사용
        this.setChangeEditAfter = function()
        {
        	trace("[SR5000_D01] this.setChangeEditAfter() this.parent.editYn : " + this.parent.editYn);
        	// 에디터영역 생성 제어
        	this.divWebEditor.form.initCreate(this.parent.editYn == "Y" ? false : true);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnDbNmPop" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SV0110_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sv::SV0110_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "구성정보(CI) 선택",
        					pSelType	: "S"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnClear" :
        			this.dsWfSrm.setColumn(0, "CI_ID", "");
        			this.dsWfSrm.setColumn(0, "CI_NM", "");
        			break;
        	}
        }

        this.cbo_preConfUserNm_onitemchanged = function(obj,e)
        {
        	var nRow = this.dsSvcStaffMng.findRow("STAFF_ID", e.postvalue);

        	if(nRow > -1)
        	{
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_NM", this.dsSvcStaffMng.getColumn(nRow, "STAFF_NM"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_DEPT_ID", this.dsSvcStaffMng.getColumn(nRow, "DEPT_ID"));
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_JBC_POSI", this.dsSvcStaffMng.getColumn(nRow, "JBC_POSI"));
        	}
        	else
        	{
        		this.dsWfSrm.setColumn(0, "PRE_CONF_USER_NM", "");
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
        	if( Ex.isEmpty(this.cboUpmu2.value) )	this.cboUpmu2.set_text("- 전체 - ");
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

        this.cboUpmu1_onkeydown = function(obj,e)
        {
        	// 업무분류1에서 엔터확인시 업무분류2로 세팅
        	if( e.keycode == 13)	this.isEnterKey = "Y";
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "REQ_ID1" || e.columnid == "REQ_ID2" ||e.columnid == "UPMU_ID1" || e.columnid == "UPMU_ID2")
        	{
        		this.cboReq3.enable = false;

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
        			dsObj	= this.dsUpmu3;
        			cboObj	= this.cboUpmu3;
        			colNm	= "UPMU_ID3";
        		}

        		if( !Ex.isEmpty(e.newvalue) )
        		{
        			if(e.columnid == "UPMU_ID2")
        			{
        				if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        				{
        					// 서비스별 담당자 조회
        					this.fnSvcStaffMng();
        				}
        				else
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
        			else if(e.columnid == "REQ_ID2")
        			{
        				this.fnCategoryNh();	// 카테고리 조회
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
        			else if(e.columnid == "UPMU_ID1")
        			{
        				this.dsUpmu3.clearData();

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID2")) )
        				{
        					//cboObj.set_index(0);
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
        				else
        				{
        					var aRow = this.dsUpmu3.addRow();
        					this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", "- 전체 -");
        				}

        				if( !Ex.isEmpty(this.dsWfSrm.getColumn(0, "UPMU_ID3")) )
        				{
        					fRow = this.dsUpmu3.findRow("CMM_CD", this.dsWfSrm.getColumn(0, "UPMU_ID3"));

        					if(fRow == -1 || fRow == 0)
        					{
        						this.cboUpmu3.set_index(0);
        						this.cboUpmu3.set_text("- 전체 -");
        					}
        				}
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			if(e.columnid == "REQ_ID2"){
        				dsObj.setColumn(aRow, "SR_CAT_NAME", "- 전체 -");

        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "SR_CAT_NAME"));
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
        			else if(e.columnid == "UPMU_ID1")
        			{
        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", "- 전체 -");

        				this.cboUpmu3.set_index(0);
        				this.cboUpmu3.set_text("- 전체 -");
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
            this.cboReq3.addEventHandler("onitemchanged",this.cboReq3_onitemchanged,this);
            this.cboUpmu1.addEventHandler("onlbuttondown",this.cboUpmu1_onlbuttondown,this);
            this.cboUpmu1.addEventHandler("onkillfocus",this.cboUpmu1_onkillfocus,this);
            this.cboUpmu1.addEventHandler("onkeydown",this.cboUpmu1_onkeydown,this);
            this.cboUpmu2.addEventHandler("onlbuttondown",this.cboUpmu2_onlbuttondown,this);
            this.cboUpmu2.addEventHandler("onkillfocus",this.cboUpmu2_onkillfocus,this);
            this.cboUpmu3.addEventHandler("onitemchanged",this.cboUpmu3_onitemchanged,this);
            this.stcInfoTitle3_00.addEventHandler("onclick",this.stcInfoTitle3_00_onclick,this);
            this.stcUpmu00_00.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcProblemCode00.addEventHandler("onclick",this.stcProblemCode00_onclick,this);
            this.cbo_preConfUserNm.addEventHandler("onitemchanged",this.cbo_preConfUserNm_onitemchanged,this);
            this.stcUpmu00_00_02.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_02_00.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_02_01.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_02_02.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.stcUpmu00_00_02_03.addEventHandler("onclick",this.stcUpmu00_00_onclick,this);
            this.btnDbNmPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btn_alike.addEventHandler("onclick",this.btn_alike_onclick,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsSrDataBaseWork.addEventHandler("oncolumnchanged",this.dsSrDataBaseWork_oncolumnchanged,this);
        };
        this.loadIncludeScript("SR5000_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
