(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_D02");
            this.set_titletext("PL 접수의견");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSiteUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divContent","0","34",null,"146","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","66",null,"80","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","33",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","66","130","80",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("접수의견 및 수정방법");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0%","33","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("담당개발자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01","33.25%","33","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_text("현장대리인");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","0",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00","0","0","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01_00","33.25%","0","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskProcDate","stcProcUserNm01_00:5.00","5","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.getSetter("mask").set("@@@@-@@-@@ @@:@@:@@");
            obj.set_maskchar("_");
            obj.set_readonly("true");
            obj.set_format("####-##-## @@:@@:@@");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcProcUserNm00:5.00","5","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm02",null,"0","130","34","27%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_text("합의완료일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calPlanDt","stcProcUserNm02:5.00","6","112","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("합의완료일;NULL");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanStime","calPlanDt:3.00","6","45","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작시간;NULL");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaOpinion","135.00","71",null,null,"5","5",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("input01");
            obj.set_validation("접수의견 및 수정방법;NULL");
            obj.set_imemode("hangul");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboWorkUserNm","stcProcUserNm:5.00","39","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("담당자;NULL");
            obj.set_innerdataset("dsWorkUser");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_type("filterlike");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboSiteUserNm","stcProcUserNm01:5.00","39","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("현장대리인;NULL");
            obj.set_innerdataset("dsSiteUser");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_enable("false");
            obj.set_type("filterlike");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","2.00","0","129","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("PL 접수의견");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,180,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.stcProcUserNm","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.edtOpinion","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.mskProcDate","value","dsWfSrm","BA2_RECP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtUserNm","value","dsWfSrm","BA2_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.calPlanDt","value","dsWfSrm","AGREE_COMP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.mskPlanStime","value","dsWfSrm","AGREE_COMP_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.cboSiteUserNm","value","dsWfSrm","SITE_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.cboWorkUserNm","value","dsWfSrm","WORK_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.txaOpinion","value","dsWfSrm","BA2_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_D03.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_D03.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5000_D03
        * 화면(명)	︰ PL 접수의견
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.02.25	WEMB		최초작성
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

        	this.dsWfSrm.setColumn(0, "AGREE_COMP_DT", this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT")); // 합의완료일시
        	this.dsWfSrm.setColumn(0, "AGREE_COMP_TIME", "1800");


        	this.dsSiteUser.clearData();
        	this.dsWorkUser.clearData();

        	this.fnSiteUser();	// 현장대리인 조회
        	this.fnWorkUser();	// 담당자 조회
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
        			this.divContent.form.edtUserNm.set_value(this.dsWfSrm.getColumn(0, "PRE_CONF_USER_NM"));
        		break;

        		case "select15" :
        			// 담당자 조회
        			if(!this.dsWfSrm.getColumn(0, "WORK_USER_ID")){
        				//this.dsWorkUser.clearData();
        				var aRow = this.dsWorkUser.insertRow();
        				this.dsWorkUser.setColumn(aRow, "STAFF_NM", Ex.core.word("- 선택 - "));

        				this.divContent.form.cboWorkUserNm.set_index(0);
        				this.divContent.form.cboWorkUserNm.set_text(Ex.core.word("- 선택 - "));
        			};

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
        				this.dsWfSrm.setColumn(0, "BA2_USER_ID", Ex.util.getSession('gvUserId'));
        				this.dsWfSrm.setColumn(0, "BA2_USER_NM", Ex.util.getSession('gvUserNm'));
        			}

        		break;

        		case "select16" :
        			// 현장대리인 조회
        			if(!this.dsWfSrm.getColumn(0, "SITE_USER_ID")){
        				//this.dsSiteUser.clearData();
        				var aRow = this.dsSiteUser.insertRow();
        				this.dsSiteUser.setColumn(aRow, "STAFF_NM", Ex.core.word("- 선택 - "));

        				this.divContent.form.cboSiteUserNm.set_index(0);
        				this.divContent.form.cboSiteUserNm.set_text(Ex.core.word("- 선택 - "));
        			}

        		break;
        	}
        		// 담당자 조회
        		if(this.dsWfSrm.getColumn(0, "WORK_USER_ID")){
        				var aRow = this.dsWorkUser.addRow();
        				this.dsWorkUser.setColumn(aRow, "STAFF_NM",  this.dsWfSrm.getColumn(0, "WORK_USER_NM"));
        				this.dsWorkUser.setColumn(aRow, "USER_ID",  this.dsWfSrm.getColumn(0, "WORK_USER_ID"));

        				//this.divContent.cboWorkUserNm.set_index(0);
        		}
        		// 현장대리인 조회
        		if(this.dsWfSrm.getColumn(0, "SITE_USER_ID")){
        			var aRow = this.dsSiteUser.addRow();
        			this.dsSiteUser.setColumn(aRow, "STAFF_NM",  this.dsWfSrm.getColumn(0, "SITE_USER_NM"));
        			this.dsSiteUser.setColumn(aRow, "USER_ID",  this.dsWfSrm.getColumn(0, "SITE_USER_ID"));

        			//this.divContent.cboSiteUserNm.set_index(0);
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

        	switch(mID)
        	{
        		case "cboSiteUserNm" :
        			this.divContent.form.cboSiteUserNm.setFocusRed();
        			break;

        		case "txaOpinion" :
        			this.divContent.form.txaOpinion.setFocusRed();
        			break;
        	}
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
        		this.dsWfSrm.setColumn(0, "BA2_RECP_DATE", undefined);
        	}
        	return Ex.util.isUpdated(this.dsRevProc);
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	var selecToday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"AGREE_COMP_DT"));

          	if(selecToday <  nexacro.toNumber(Ex.util.today()) && this.reqInfo.WF_PROC_CD == "WF_PROC_2020")
          	{
        		var param = {
                	msg	: "합의완료일시는 오늘날짜보다 크거나 같아야합니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		this.divContent.form.calPlanDt.setFocusRed();
        		return false;
          	}

        	strValue = this.dsWfSrm.getColumn(0, "AGREE_COMP_TIME");
        	if(strValue < '0000' || strValue > '2459')
        	{
        		var param = {
        			msg	: "합의완료시간을 확인하시기 바랍니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        		Ex.core.alert(this, param);
        		this.divContent.form.mskPlanStime.setFocusRed();
        		return false;
        	}

        	if( Ex.isEmpty(this.dsWfSrm.getColumn(0,"WORK_USER_ID")) )
        	{
        		var param = {
        			msg	: "담당자를 확인하시기 바랍니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
        		Ex.core.alert(this, param);
        		this.divContent.form.cboWorkUserNm.setFocusRed();
        		return false;
        	};

        	// 외부직원은 현장대리인승인 필수
        	if(this.divContent.form.cboSiteUserNm.enable && Ex.isEmpty(this.dsWfSrm.getColumn(0, "SITE_USER_ID")) )
        	{
        		var param = {
        			  id	: "cboSiteUserNm"
        			, msg	: "현장대리인을 확인하시기 바랍니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
                Ex.core.alert(this, param);
        		return false;
        	}

        	if( Ex.isEmpty(this.dsWfSrm.getColumn(0,"BA2_EXAM_OPIN")) )
        	{
        		var param = {
        			  id	: "txaOpinion"
                	, msg	: "접수의견 및 수정방법을 작성하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
                Ex.core.alert(this, param);
        		return false;
        	}

        	// 현장대리인 선택후 데이터꼬일경우 대비
        	if(!this.divContent.form.cboSiteUserNm.enable)
        	{
        		this.dsWfSrm.setColumn(0, "SITE_DEPT_NM", "");
        		this.dsWfSrm.setColumn(0, "SITE_USER_ID", "");
        		this.dsWfSrm.setColumn(0, "SITE_DEPT_ID", "");
        		this.dsWfSrm.setColumn(0, "SITE_USER_JBC_POSI", "");
        	}

        	this.dsWfSrm.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "PROC_USER_NM", this.dsWfSrm.getColumn(0,"WORK_USER_NM")); // 담당자

        	if(this.dsRevProc.rowcount == 0)
        	{
        		this.dsRevProc.setAddRow();
        		this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        		this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	}

        	return true;
        }

        // 담당자 조회
        this.fnWorkUser = function()
        {
        	var sTranId = "select15";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select15";								// 서비스명
            var sInDs = "dsCond=dsWfSrm";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkUser=dsWorkUser";					// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 현장대리인 조회
        this.fnSiteUser = function()
        {
        	var sTranId = "select16";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select16";								// 서비스명
            var sInDs = "dsCond=dsWfSrm";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSiteUser=dsSiteUser";					// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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

        this.divContent_cboSiteUserNm_onitemchanged = function(obj,e)
        {
        	var nRow = this.dsSiteUser.findRow("USER_ID", e.postvalue);

        	if(nRow > -1)
        	{
        		this.dsWfSrm.setColumn(0, "SITE_USER_NM", this.dsSiteUser.getColumn(nRow, "STAFF_NM"));		  // 현장대리인명
        		this.dsWfSrm.setColumn(0, "SITE_USER_ID", this.dsSiteUser.getColumn(nRow, "USER_ID"));		  // 현장대리인ID
        		this.dsWfSrm.setColumn(0, "SITE_DEPT_ID", this.dsSiteUser.getColumn(nRow, "DEPT_ID"));		  // 부서ID
        		this.dsWfSrm.setColumn(0, "SITE_USER_JBC_POSI", this.dsSiteUser.getColumn(nRow, "JBC_POSI")); // 직급
        	}
        	else
        	{
        		this.dsWfSrm.setColumn(0, "SITE_DEPT_NM", "");
        		this.dsWfSrm.setColumn(0, "SITE_USER_ID", "");
        		this.dsWfSrm.setColumn(0, "SITE_DEPT_ID", "");
        		this.dsWfSrm.setColumn(0, "SITE_USER_JBC_POSI", "");
        	}
        };

        this.divContent_cboWorkUserNm_onitemchanged = function(obj,e)
        {
        	var nRow = this.dsWorkUser.findRow("USER_ID", e.postvalue);

        	if(nRow > -1)
        	{
        		this.dsWfSrm.setColumn(0, "WORK_USER_NM", this.dsWorkUser.getColumn(nRow, "STAFF_NM"));			// 담당자명
        		this.dsWfSrm.setColumn(0, "WORK_USER_ID", this.dsWorkUser.getColumn(nRow, "USER_ID"));			// 담당자ID
        		this.dsWfSrm.setColumn(0, "WORK_DEPT_ID", this.dsWorkUser.getColumn(nRow, "DEPT_ID"));			// 부서ID
        		this.dsWfSrm.setColumn(0, "WORK_USER_JBC_POSI", this.dsWorkUser.getColumn(nRow, "JBC_POSI"));	// 직급
        	}
        	else
        	{
        		this.dsWfSrm.setColumn(0, "WORK_USER_NM", "");
        		this.dsWfSrm.setColumn(0, "WORK_USER_ID", "");
        		this.dsWfSrm.setColumn(0, "WORK_DEPT_ID", "");
        		this.dsWfSrm.setColumn(0, "WORK_USER_JBC_POSI", "");
        	}

        	// 외부직원은 현장대리인승인 필수
        	var userId = this.dsWorkUser.getColumn(nRow, "USER_ID");

        	if(userId.startsWith("P") || userId.startsWith("e"))
        	{
        		 this.divContent.form.cboSiteUserNm.set_enable(true);
        	}
        	else
        	{
        		this.divContent.form.cboSiteUserNm.set_enable(false);
        		this.divContent.form.cboSiteUserNm.set_index(0);
        	}
        };

        this.divContent_cboWorkUserNm_onlbuttondown = function(obj,e)
        {
        	if( Ex.isEmpty(this.divContent.form.cboWorkUserNm.value) )	this.divContent.form.cboWorkUserNm.set_text("");
        };

        this.divContent_cboWorkUserNm_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(this.divContent.form.cboWorkUserNm.value) )	this.divContent.form.cboWorkUserNm.set_text("- 선택 -");
        };

        this.divContent_cboSiteUserNm_onlbuttondown = function(obj,e)
        {
        	if( Ex.isEmpty(this.divContent.form.cboSiteUserNm.value) )	this.divContent.form.cboSiteUserNm.set_text("");
        };

        this.divContent_cboSiteUserNm_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(this.divContent.form.cboSiteUserNm.value) )	this.divContent.form.cboSiteUserNm.set_text("- 선택 -");
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.addEventHandler("onclick",this.divContent_onclick,this);
            this.divContent.form.calPlanDt.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.divContent.form.cboWorkUserNm.addEventHandler("onitemchanged",this.divContent_cboWorkUserNm_onitemchanged,this);
            this.divContent.form.cboWorkUserNm.addEventHandler("onkillfocus",this.divContent_cboWorkUserNm_onkillfocus,this);
            this.divContent.form.cboWorkUserNm.addEventHandler("onlbuttondown",this.divContent_cboWorkUserNm_onlbuttondown,this);
            this.divContent.form.cboSiteUserNm.addEventHandler("onitemchanged",this.divContent_cboSiteUserNm_onitemchanged,this);
            this.divContent.form.cboSiteUserNm.addEventHandler("onkillfocus",this.divContent_cboSiteUserNm_onkillfocus,this);
            this.divContent.form.cboSiteUserNm.addEventHandler("onlbuttondown",this.divContent_cboSiteUserNm_onlbuttondown,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWorkUser.addEventHandler("canrowposchange",this.dsWp_canrowposchange,this);
            this.dsWorkUser.addEventHandler("onrowposchanged",this.dsWp_onrowposchanged,this);
            this.dsSiteUser.addEventHandler("canrowposchange",this.dsWp_canrowposchange,this);
            this.dsSiteUser.addEventHandler("onrowposchanged",this.dsWp_onrowposchanged,this);
        };
        this.loadIncludeScript("SR5000_D03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
