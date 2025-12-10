(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR4100_D01");
            this.set_titletext("문제등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,404);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfPbm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"14\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"60\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_BJC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_EXM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsProblemCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrInfrJob", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SYS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TGT_RSC\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TGT_CI\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CNTL_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TGT_EQMT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SVC_IMPT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_ADVC_PREP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SET_MTH\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_CONT1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_CONT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_CONT3\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrInfrAccnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","100",null,"304","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","100","130","304",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("문제내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmu","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","129","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문제 등록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmu:5","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:2","39","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV3;NULL");
            obj.set_innerdataset("dsUpmu3");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("stcProblemCode","50%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("문제범주");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboProblemCode","stcProblemCode:5","39","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("문제범주;NULL");
            obj.set_innerdataset("dsProblemCode");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("업무시스템");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProcUserNm","135","72","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchCiPop","edtProcUserNm:3","72","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear","btnSearchCiPop:3","72","23","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ClearIcon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alike",null,"0","120","24","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("요청서 복사등록");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);

            obj = new Static("stcToChm","cboProblemCode:10","39","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("※ 서비스요청(배포요청)");
            obj.set_color("red");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotToChm","cboProblemCode:10","39","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("※ 일반요청(미배포)");
            obj.set_color("black");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_agreeCompDtChg","364.00","73","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("합의완료일변경");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","135.00","0","312","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("※ EAI 개발요청은 SRM(일반요청)으로 신청하세요.");
            obj.set_visible("true");
            obj.set_font("bold 12px/normal 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("btnWriteSRM","452.00","0","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("SRM 작성하기");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","50.00%","67","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("연관 ID");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_procNumber_rel","stcReqUserNm:5","72","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_validationGroup(" ");
            obj.set_validation(" ");
            obj.set_cssclass("edt_WF_normal");
            obj.set_cursor("pointer");
            obj.set_textDecoration("underline");
            obj.set_textAlign("left");
            obj.set_font("12px/normal \"돋움\"");
            obj.set_color("blue");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1820,404,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaReqCont","value","dsWfPbm","REQ_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboUpmu1","value","dsWfPbm","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUpmu2","value","dsWfPbm","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboUpmu3","value","dsWfPbm","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboProblemCode","value","dsWfPbm","PBM_CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtProcUserNm","value","dsWfPbm","CI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","stcReqUserNm","value","dsWfChm","REL_PROC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_procNumber_rel","value","dsWfPbm","REL_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_procNumber_rel","visible","dsWfPbm","REL_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcReqUserNm","visible","dsWfPbm","REL_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("SR4100_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR4100_D01
        * 화면(명)	︰ 문제등록
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2024.11.18	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        //include "lib::lib_WorkFlow.xjs";
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
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fn_initDataset();

        	if(this.getOwnerFrame().pDs)
        	{
        		let dataCopy = this.getOwnerFrame().pDs;

        		// 제목
        		this.dsSrBaseInfo.setColumn(0, "TITLE", dataCopy.getColumn(0,"SR_BRIEF"));

        		// 업무분류
        		this.dsWfPbm.setColumn(0,"UPMU_ID1", dataCopy.getColumn(0,"UPMU_ID1"));
        		this.dsWfPbm.setColumn(0,"UPMU_ID2", dataCopy.getColumn(0,"UPMU_ID2"));
        		this.dsWfPbm.setColumn(0,"UPMU_ID3", dataCopy.getColumn(0,"UPMU_ID3"));

        		this.dsWfPbm.setColumn(0, "CI_ID",	dataCopy.getColumn(0, "CI_ID"));
        		this.dsWfPbm.setColumn(0, "CI_NAME",dataCopy.getColumn(0, "CI_NAME"));

        		// 본문내용
         		var webConts = dataCopy.getColumn(0,"REQ_CONT")||'';
         		this.divWebEditor.form.setContent(webConts, false);

        		this.dsWfPbm.setColumn(0,"PBM_CATEGORY", dataCopy.getColumn(0,"PBM_CATEGORY"));
        		this.getPbmCategoryInfoText(this.dsWfPbm.getColumn(0, "PBM_CATEGORY"));

        		this.getOwnerFrame().pDs = null;
        	}
        }

        this.fn_initDataset = function()
        {
        	if( this.dsCond.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
        	{
        		var aRow = this.dsWfPbm.setInsertRow();

        		var evt = nexacro.DSColChangeEventInfo;
        		evt.columnid	= "UPMU_ID1";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfPbm, evt);

        		evt.columnid	= "UPMU_ID2";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfPbm, evt);

        		evt.columnid	= "UPMU_ID3";
        		evt.newvalue	= undefined;
        		this.dsOnColumnChanged(this.dsWfPbm, evt);
        	}
        	else
        	{
        		if(this.dsWfPbm.getRowCount() == 0)
        		{
        			this.dsWfPbm.setInsertRow();
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
        			var upmuId1 = this.dsWfPbm.getColumn(0, "UPMU_ID1");
        			var upmuId2 = this.dsWfPbm.getColumn(0, "UPMU_ID2");
        			var upmuId3 = this.dsWfPbm.getColumn(0, "UPMU_ID3");

        			var evt = nexacro.DSColChangeEventInfo;
        			evt.columnid	= "UPMU_ID1";
        			evt.newvalue	= upmuId1;
        			this.dsOnColumnChanged(this.dsWfPbm, evt);

        			evt.columnid	= "UPMU_ID2";
        			evt.newvalue	= upmuId2;
        			this.dsOnColumnChanged(this.dsWfPbm, evt);

        			var webConts = this.dsWfPbm.getColumn(this.dsWfPbm.rowposition, 'REQ_CONT')||'';
        			this.divWebEditor.form.setContent(webConts, false);

        			this.getPbmCategoryInfoText(this.dsWfPbm.getColumn(0, "PBM_CATEGORY"));

        			// 합의완료일 변경, WF_PROC_2030 == 변경이관, WF_PROC_2020 문제처리계획
        			if((this.dsSrBaseInfo.getColumn(0,"WF_PROC_CD") >= "WF_PROC_2030" && this.dsSrBaseInfo.getColumn(0,"WF_PROC_CD") < "WF_PROC_9999")
        				&& this.dsWfPbm.getColumn(0,"PRE_CONF_USER_ID")  == Ex.util.getSession("gvUserId"))
        			{
        				this.btn_agreeCompDtChg.set_visible(true);
        				this.btn_agreeCompDtChg.set_enable(false);
        				this.btn_agreeCompDtChg.set_enable(true);
        			}
        			else
        			{
        				this.btn_agreeCompDtChg.set_visible(false);
        			}
        			break;

        		case "postSelect" :
        			if(	!(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) )
        			{
        				this.btn_alike.set_visible(true);
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

        	switch (pID)
        	{
        		case "SV0110_P01" :	//구성항목(CI)
        			//trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				for(var i=0; i<this.dsPopRtn.rowcount; i++)
        				{
        					this.dsWfPbm.setColumn(0, "CI_ID", this.dsPopRtn.getColumn(i, "CI_ID"));
        					this.dsWfPbm.setColumn(0, "CI_NAME", this.dsPopRtn.getColumn(i, "CI_NM"));
        				}
        			}
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

        		case "copyPbm" :
        			this.getOwnerFrame().pWF_FUNC_CD = "WF_FUNC_00";	//등록
        			this.getOwnerFrame().pREQ_ID	= "";
        			var pDs = new Dataset;
        			pDs.assign(this.dsWfPbm);
        			this.getOwnerFrame().pDs = pDs;
        			this.reqInfo.PARENT_FORM.reload();
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

        	if(this.reqInfo.REQ_TMPLAT_ID == "WFT250050" && this.reqInfo.WF_PROC_CD >= "WF_PROC_2040")
        	{
        		this.reqInfo.PARENT_FORM.components["divBottomSub"].form.btnRelationId.set_visible(true); // 연관ID조회
        		Ex.util.setBtnAlign(this.reqInfo.PARENT_FORM.components["divBottomSub"], 'left', true);
        	}

        	if( this.reqInfo.REQ_ID.indexOf("REQ") > -1)
        	{
        		this.btnWriteSRM.set_visible(true);
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['BIZC0000'	,	'PBM_CATE_CD'		]	// 조회할 상위코드 PBM_CATE_CD PPCT0000
        		,codeDiv	: ['NHFIRE'		,	''					]	// 조회할 코드의 업무구분
        		,optStr		: ['ALL'		,	'ALL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'			,	'Y'					]	// 사용여부
        		,filter		: [''			,	''					]	// filterStr
        		,objDs		: [this.dsUpmu1,	this.dsProblemCode	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	this.dsWfPbm.setColumn(0, "REQ_USER_ID", Ex.util.getSession("gvUserId")); 		 				// 요청자ID
        	this.dsWfPbm.setColumn(0, "REQ_USER_NM", Ex.util.getSession("gvUserNm"));   	 				// 요청자명
        	this.dsWfPbm.setColumn(0, "REQ_DEPT_ID", Ex.util.getSession("gvDeptCd")); 		 				// 요청자부서ID
        	this.dsWfPbm.setColumn(0, "REQ_USER_JBC_POSI",  Ex.util.getSession("gvPosNm") );				// 요청자직잭
        	this.dsWfPbm.setColumn(0, "SR_BRIEF",  this.dsSrBaseInfo.getColumn(0, "TITLE")); 				// 제목
        	this.dsWfPbm.setColumn(0, "REQ_WISH_SDT",  this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT")); 		// 희망완료일시
        	this.dsWfPbm.setColumn(0, "REQ_WISH_STIME",  this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")); 	// 희망완료일시
        	this.dsWfPbm.setColumn(0, "AGREE_COMP_EDT",  this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT")); 	// 희망완료일시
        	this.dsWfPbm.setColumn(0, "AGREE_COMP_ETIME",  this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")); // 희망완료일시

        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divWebEditor.form.getContent();
        	this.dsWfPbm.setColumn(this.dsWfPbm.rowposition, 'REQ_CONT', webConts);

        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        	{
        		var division = this.dsWfPbm.getColumn(0,"PBM_CATEGORY");

        		// 근본원인을 모르는 종료장애, 기타
        		if(division == "CATE_CD01" || division == "CATE_CD07")
        		{
        			this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT240155");
        			this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT240155");
        			this.getOwnerFrame().pREQ_TMPLAT_ID = "WFT240155";
        		}
        		else
        		{
        			this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250050");
        			this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", "WFT250050");
        			this.getOwnerFrame().pREQ_TMPLAT_ID = "WFT250050";
        		}
        	}

        	if( !Ex.util.isUpdated(this.dsWfPbm) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	var chkCont = nexacro.replaceAll(nexacro.replaceAll(this.divWebEditor.form.getContent(), "<p>&nbsp;</p>", "", " ", ""));

        	if( Ex.isEmpty(chkCont) )
        	{
        		var param = {
                	msg	: "문제내용은 필수 입력 항목입니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
                Ex.core.alert(this, param);
                return;
        	}
        	return true;
        }

        this.openFommSearchUserPopup = function(data)
        {
        	Ex.core.popup(
        		this,						// <--- 팝업 실행 스코프
        		"SearchUserPopup",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"fomm::FOMM0000_P01.xfdl",	// <--- 팝업창 오픈 Url
        		{
        			title : "사용자 검색",
        			pSelType : "S",
        			data : data
        		},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=900,height=500"		// <--- width/height/modeless(프레임 처리 옵션)
        	);
        }

        this.setChangeEditAfter = function()
        {
        	trace("this.setChangeEditAfter() this.parent.editYn : " + this.parent.editYn);
        	// 에디터영역 생성 제어
        	this.divWebEditor.form.initCreate(this.parent.editYn == "Y" ? false : true);
        }

        this.getPbmCategoryInfoText = function(val)
        {
        	if( Ex.isEmpty(val) )
        	{
        		this.stcToChm.set_visible(false);
        		this.stcNotToChm.set_visible(false);
        	}
        	else if( val == 'CATE_CD01' || val == 'CATE_CD07' )
        	{
        		this.stcToChm.set_visible(false);
        		this.stcNotToChm.set_visible(true);
        	} else
        	{
        		this.stcToChm.set_visible(true);
        		this.stcNotToChm.set_visible(false);
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
        		case "btnWriteSRM" :
        			this.reqInfo.PARENT_FORM.getOwnerFrame().pWF_FUNC_CD = "WF_FUNC_00";	//등록
        			this.reqInfo.PARENT_FORM.getOwnerFrame().pREQ_ID = "";
        			this.reqInfo.PARENT_FORM.getOwnerFrame().pREQ_TMPLAT_ID = "WFT250033";	//일반요청
        			this.reqInfo.PARENT_FORM.reload();
        			break;

        		case "btnSearchCiPop" :
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

        		case "btnClear" :
        			this.dsWfPbm.setColumn(0, "CI_ID", "");
        			this.dsWfPbm.setColumn(0, "CI_NAME", "");
        			break;
        	}
        }

        this.btn_agreeCompDtChg_onclick = function(obj,e)
        {
        	var extYn = '';
        	popId	= 'CompDtChgPop';
        	url		= 'chm::CHM0001_P03.xfdl';

        	//if(!this.dsWfPbm.getColumnInfo("AGREE_COMP_EDT"))	this.dsWfPbm.addColumn("AGREE_COMP_EDT", "STRING");
        	//if(!this.dsWfPbm.getColumnInfo("AGREE_COMP_ETIME"))	this.dsWfPbm.addColumn("AGREE_COMP_ETIME", "STRING");
        	if(!this.dsWfPbm.getColumnInfo("REL_PROC_ID"))		this.dsWfPbm.addColumn("REL_PROC_ID", "STRING");
        	if(!this.dsWfPbm.getColumnInfo("AFTER_COMP_EDT"))	this.dsWfPbm.addColumn("AFTER_COMP_EDT", "STRING");
        	if(!this.dsWfPbm.getColumnInfo("AFTER_COMP_ETIME"))	this.dsWfPbm.addColumn("AFTER_COMP_ETIME", "STRING");
        	if(!this.dsWfPbm.getColumnInfo("CHG_SAYU"))			this.dsWfPbm.addColumn("CHG_SAYU", "STRING");

        	this.dsWfPbm.setColumn(0,"REL_PROC_ID", this.dsWfPbm.getColumn(0,"REQ_ID"));

        	oParam	= {
        		  title	: Ex.core.word('합의완료일시 변경')
        		, data	: extYn
        		, pREQ_ID	: this.dsCond.getColumn(0, "REQ_ID")
        		, dsData 	: this.dsWfPbm
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
        			  id : "copyPbm"
        			, msg : "해당 요청서내용을 복사하시겠습니까?"
        			, arrparam : ['']
        			, msgtype : "I"
        		};
        		Ex.core.confirm(this, param);
        	}
        };

        this.onEditClick = function(obj,e)
        {
        	var relReqId = this.dsWfPbm.getColumn(0, "REL_REQ_ID");

        	if(!Ex.isEmpty(relReqId))
        	{
        		Ex.core.popup(
        			this,									// <--- 팝업 실행 스코프
        			"relsrReqWritePop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
        			{
        				title			: "요청서",
        				pREQ_ID			: relReqId
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=1800,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			//"autosize,useCloseButton=false"
        		);
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

        this.cboUpmu1_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)	this.isEnterKey = "Y1";
        };

        this.cboUpmu2_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)	this.isEnterKey = "Y2";
        };

        this.cboProblemCode_onitemchanged = function(obj,e)
        {
        	this.getPbmCategoryInfoText(e.postvalue);
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "UPMU_ID1" || e.columnid == "UPMU_ID2")
        	{
        		var cboObj;
        		var colNm;
        		if(e.columnid == "UPMU_ID1")
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
        			var oParam = {
        				 upCmmCd	: [e.newvalue		]	// 조회할 상위코드
        				,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        				,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'				]	// 사용여부
        				,filter		: [''				]	// filterStr
        				,objDs		: [dsObj			]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        			var fRow = dsObj.findRow("CMM_CD", this.dsWfPbm.getColumn(0, colNm));

        			if(fRow == -1 || fRow == 0)
        			{
        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			}

        			if(e.columnid == "UPMU_ID1")
        			{
        				//this.dsUpmu3.clearData();

        				if( !Ex.isEmpty(this.dsWfPbm.getColumn(0, "UPMU_ID2")) )
        				{
        					//cboObj.set_index(0);
        					var oParam = {
        						 upCmmCd	: [this.dsWfPbm.getColumn(0, "UPMU_ID2")	]	// 조회할 상위코드
        						,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        						,optStr		: ['SEL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
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

        				if( !Ex.isEmpty(this.dsWfPbm.getColumn(0, "UPMU_ID3")) )
        				{
        					fRow = this.dsUpmu3.findRow("CMM_CD", this.dsWfPbm.getColumn(0, "UPMU_ID3"));

        					if(fRow == -1 || fRow == 0)
        					{
        						//this.cboUpmu3.set_index(0);
        						this.cboUpmu3.set_text("- 전체 -");
        					}
        				}
        			}
        			//}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", "- 전체 -");

        			cboObj.set_index(0);
        			cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));

        			if(e.columnid == "UPMU_ID1")
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
            this.cboUpmu1.addEventHandler("onlbuttondown",this.cboUpmu1_onlbuttondown,this);
            this.cboUpmu1.addEventHandler("onkillfocus",this.cboUpmu1_onkillfocus,this);
            this.cboUpmu1.addEventHandler("onkeydown",this.cboUpmu1_onkeydown,this);
            this.cboUpmu2.addEventHandler("onlbuttondown",this.cboUpmu2_onlbuttondown,this);
            this.cboUpmu2.addEventHandler("onkillfocus",this.cboUpmu2_onkillfocus,this);
            this.cboUpmu2.addEventHandler("onkeydown",this.cboUpmu2_onkeydown,this);
            this.cboUpmu3.addEventHandler("onlbuttondown",this.cboUpmu3_onlbuttondown,this);
            this.cboUpmu3.addEventHandler("onkillfocus",this.cboUpmu3_onkillfocus,this);
            this.cboProblemCode.addEventHandler("onitemchanged",this.cboProblemCode_onitemchanged,this);
            this.btnSearchCiPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btn_alike.addEventHandler("onclick",this.btn_alike_onclick,this);
            this.btn_agreeCompDtChg.addEventHandler("onclick",this.btn_agreeCompDtChg_onclick,this);
            this.btnWriteSRM.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edt_procNumber_rel.addEventHandler("oneditclick",this.onEditClick,this);
            this.dsWfPbm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfPbm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsSrInfrJob.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSrInfrAccnt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR4100_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
