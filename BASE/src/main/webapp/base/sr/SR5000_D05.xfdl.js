(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_D05");
            this.set_titletext("담당자 접수의견");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChm", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">예</Col></Row><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,"260","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","100",null,"80","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","67",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","100","130","80",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("접수의견");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaProcExam","stcProcExamOpin:5.00","105",null,"71","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("접수의견;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcSdt","0","67","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_text("계획시작");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","230",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_text("담당자 접수의견");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calPlanSdt","stcProcSdt:5.00","73","113","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작일;NULL");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanStime","calPlanSdt:2.00","73","56","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작시간;NULL");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01","33.25%","67","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_text("계획완료");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calPlanEdt","stcProcUserNm01:5.00","73","113","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("계획완료일;NULL");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanEtime","calPlanEdt:2.00","73","56","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("계획완료시간;NULL");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static04",null,"67","130","34","26.00%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("");
            obj.set_text("예상공수(Hour)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtPlanMh","Static04:5.00","73","50","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number");
            obj.set_validationGroup("input01");
            obj.set_validation("예상공수;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","0","179",null,"80","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin00","0","179","130","80",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_text("처리계획");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaProcPlan","135.00","184",null,"71","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","34",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","34","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01_00","33.25%","34","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static04_00","800","34","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("변경여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Radio("rdChnYn","Static04_00:5","39","120","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsChm");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("변경여부;NULL");
            obj.set_enableevent("true");
            obj.set_visible("false");
            obj.set_index("-1");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcProcUserNm:5","39","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskProcDate","stcProcUserNm01_00:5","39","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.getSetter("mask").set("@@@@-@@-@@ @@:@@:@@");
            obj.set_maskchar("_");
            obj.set_readonly("true");
            obj.set_format("####-##-## @@:@@:@@");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("true");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,260,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.mskProcDate","value","dsWfSrm","WORK_RECP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.calPlanSdt","value","dsWfSrm","PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.calPlanEdt","value","dsWfSrm","PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.mskPlanStime","value","dsWfSrm","PLAN_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.mskPlanEtime","value","dsWfSrm","PLAN_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.edtPlanMh","value","dsWfSrm","PLAN_MH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.txaProcPlan","value","dsWfSrm","PROC_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.txaProcExam","value","dsWfSrm","WORK_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.stcProcSdt","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.edtOpinion","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.edtUserNm","value","dsWfSrm","WORK_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_D05.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_D05.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5000_D08
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
        	/*this.dsWfSrm.setColumn(0, "PLAN_SDT", Ex.util.today()); // 계획시작일
        	this.dsWfSrm.setColumn(0, "PLAN_STIME", "0000");
        	this.dsWfSrm.setColumn(0, "PLAN_EDT", Ex.util.today()); // 계획종료일
        	this.dsWfSrm.setColumn(0, "PLAN_ETIME", "0000");
        	*/
        	//this.dsWfSrm.setInsertRow();
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
        			if( this.dsRevProc.rowcount == 0)
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        			}

        			if(	this.reqInfo.WF_PROC_CD == this.reqInfo.SCRN_WF_PROC_CD && this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" &&
        				(this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        			{
        				this.dsRevProc.setColumn(0, "USER_ID", Ex.util.getSession('gvUserId'));
        				this.dsRevProc.setColumn(0, "USER_NM", Ex.util.getSession('gvUserNm'));
        				this.dsWfSrm.setColumn(0, "WORK_USER_NM", Ex.util.getSession('gvUserNm'));
        			}

        			if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PLAN_SDT")) )
        			{
        				this.dsWfSrm.setColumn(0, "PLAN_SDT", Ex.util.today());
        				this.dsWfSrm.setColumn(0, "PLAN_STIME", "0900");
        			}

        			if( Ex.isEmpty(this.dsWfSrm.getColumn(0, "PLAN_EDT")) )
        			{
        				this.dsWfSrm.setColumn(0, "PLAN_EDT", Ex.util.addDate(Ex.util.today(), +7));
        				this.dsWfSrm.setColumn(0, "PLAN_ETIME", "2359");
        			}

        			if(this.reqInfo.WF_PROC_NM == "요청검토")
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
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)	{}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
         this.fnCompInit = function()
        {
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        this.isUpdateForm = function()
        {
        	if(	this.reqInfo.WF_PROC_CD == this.reqInfo.SCRN_WF_PROC_CD && this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" &&
        		(this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        	{
        		this.dsWfSrm.setColumn(0, "WORK_RECP_DATE", undefined);
        	}
        	return Ex.util.isUpdated(this.dsRevProc);
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	var selecToday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_SDT"));
        	var selecEndday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_EDT"));
          	let strValue = "";
        	if(this.reqInfo.WF_PROC_NM == "요청검토"){ // 요청서마다 WF_PROC_CD 다를수있어서 이름으로 체크
        		if(selecToday <  nexacro.toNumber(Ex.util.today()))
        		{
        			var param = {
        				msg	: "계획시작일은 오늘날짜보다 크거나 같아야합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.calPlanSdt.setFocusRed();
        			return false;
        		} else if (this.dsWfSrm.getColumn(0,"PLAN_SDT") == null){
        			var param = {
        				msg	: "계획시작일을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.calPlanSdt.setFocusRed();
        			return false;
        		}

        		strValue = this.dsWfSrm.getColumn(0, "PLAN_STIME");
        		if(strValue < '0000' || strValue > '2459' || strValue == null){
        			var param = {
        				msg	: "계획시작시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.mskPlanStime.setFocusRed();
        			return false;
        		}

        		if(selecEndday <  selecToday && this.reqInfo.WF_PROC_CD == "WF_PROC_2040")
        		{
        			var param = {
        				msg	: "계획완료일은 계획시작일보다 크거나 같아야합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.calPlanEdt.setFocusRed();
        			return false;
        		}
        		if (this.dsWfSrm.getColumn(0,"PLAN_EDT") == null){
        			var param = {
        				msg	: "계획완료일을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.calPlanEdt.setFocusRed();
        			return false;
        		}

        		strValue = this.dsWfSrm.getColumn(0, "PLAN_ETIME");
        		if(strValue < '0000' || strValue > '2459' || strValue == null){
        			var param = {
        				msg	: "계획완료시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.mskPlanEtime.setFocusRed();
        			return false;
        		}
        		strValue = this.dsWfSrm.getColumn(0, "PLAN_MH");
        		if(strValue == "" || strValue == null){
        			var param = {
        				msg	: "예상공수를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.edtPlanMh.setFocusRed();
        			return false;
        		}

        		strValue = this.dsWfSrm.getColumn(0, "WORK_EXAM_OPIN");
        		if(strValue == "" || strValue == null){
        			var param = {
        				msg	: "접수의견을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.divContent.form.txaProcExam.setFocusRed();
        			return false;
        		}
        	}
        	this.dsWfSrm.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsWfSrm.setColumn(0, "ROWFLAG", "U");
        	this.dsWfSrm.setColumn(0, "EM_YN", "0"); // 변경여부 1예 0아니오
        	/*
        	if(this.dsRevProc.rowcount == 0)
        	{
        		this.dsRevProc.setAddRow();
        		this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        		this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	}
        	*/
        	return true;
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
        		case "" :
        			break;
        	}
        }
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        this.divContent_txaProcExam_onchanged = function(obj,e)
        {

        };

        this.SDT_onchanged = function(obj,e)
        {
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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.calPlanSdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.mskPlanStime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.calPlanEdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.mskPlanEtime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR5000_D05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
