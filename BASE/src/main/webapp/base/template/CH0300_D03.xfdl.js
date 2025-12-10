(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CH0300_D03");
            this.set_titletext("사업계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_TMPLAT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrReqIvBdgt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BDGT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BDGT_ACSJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACSJ_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"BDGT_PAY1\" type=\"INT\" size=\"256\"/><Column id=\"BDGT_PAY2\" type=\"INT\" size=\"256\"/><Column id=\"BDGT_PAY3\" type=\"INT\" size=\"256\"/><Column id=\"BDGT_PAY4\" type=\"INT\" size=\"256\"/><Column id=\"PAY_CYCLE_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFM_BDGT_PAY1\" type=\"INT\" size=\"256\"/><Column id=\"CNFM_BDGT_PAY2\" type=\"INT\" size=\"256\"/><Column id=\"CNFM_BDGT_PAY3\" type=\"INT\" size=\"256\"/><Column id=\"CNFM_BDGT_PAY4\" type=\"INT\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrReqIvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_PLAN_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BDGT_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ENTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_BUSI_PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntrTcdCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayCycleCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbdgtAcsjCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBusinessCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divUp","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divDown","0","250",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg03","0","267",null,"68","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBusi1","22.50%","34","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("2");
            obj.set_text("사업분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBusi2","0%","34","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("3");
            obj.set_text("신규사업여부");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBusi6","0","267","114","68",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("4");
            obj.set_text("비용산정근거");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("5");
            obj.set_text("접수정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnY","125.00","0","25","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("7");
            obj.set_text("Y");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnN","155.00","0","25","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("8");
            obj.set_text("N");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle2","0","355","120","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("9");
            obj.set_text("예산계획");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcEmpty01_00","0","379",null,"10","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("10");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Grid("grdDataList","0","389",null,null,"0","0",null,null,null,null,this.divDown.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsSrReqIvBdgt");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"170\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"예산계정\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"계정과목\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"1분기 계획\"/><Cell col=\"5\" text=\"2분기 계획\"/><Cell col=\"6\" text=\"3분기 계획\"/><Cell col=\"7\" text=\"4분기 계획\"/><Cell col=\"8\" text=\"계획 소계\"/><Cell col=\"9\" text=\"지급주기\"/><Cell col=\"10\" text=\"1분기 확정\"/><Cell col=\"11\" text=\"2분기 확정\"/><Cell col=\"12\" text=\"3분기 확정\"/><Cell col=\"13\" text=\"4분기 확정\"/><Cell col=\"14\" text=\"확정 소계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" editlimit=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" displaytype=\"combocontrol\" text=\"bind:BDGT_ACSJ_CD\" combodataset=\"dsBbdgtAcsjCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" edittype=\"combo\" validation=\"예산계정;NULL\" validationStatus=\"false\"/><Cell col=\"3\" displaytype=\"combocontrol\" text=\"bind:ACSJ_TCD\" combodataset=\"dsCntrTcdCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" edittype=\"combo\" validation=\"계정과목;NULL\" validationStatus=\"false\"/><Cell col=\"4\" text=\"bind:BDGT_PAY1\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BDGT_PAY2\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:BDGT_PAY3\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:BDGT_PAY4\" displaytype=\"number\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" expr=\"(BDGT_PAY1+BDGT_PAY2+BDGT_PAY3+BDGT_PAY4)\"/><Cell col=\"9\" displaytype=\"combocontrol\" text=\"bind:PAY_CYCLE_TCD\" combodataset=\"dsPayCycleCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" edittype=\"combo\" validation=\"지급주기;NULL\"/><Cell col=\"10\" text=\"bind:CNFM_BDGT_PAY1\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:CNFM_BDGT_PAY2\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:CNFM_BDGT_PAY3\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"13\" text=\"bind:CNFM_BDGT_PAY4\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"14\" displaytype=\"number\" expr=\"(CNFM_BDGT_PAY1+CNFM_BDGT_PAY2+CNFM_BDGT_PAY3+CNFM_BDGT_PAY4)\" edittype=\"none\"/></Band></Format></Formats>");
            this.divDown.addChild(obj.name, obj);

            obj = new Combo("cboBusiPlan","stcBusi1:5","39","115","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsBusinessCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("사업분류;NULL");
            obj.set_validationCheckEnable("true");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Combo("cboBusiNew","stcBusi2:5","39","115","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Div("divGrdBtn",null,null,"250","24","0","stcEmpty01_00:00",null,null,null,null,this.divDown.form);
            obj.set_taborder("16");
            obj.set_isButtonGroup("true");
            obj.set_isChgLang("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60","24","0",null,null,null,null,null,this.divDown.form.divGrdBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divDown.form.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divDown.form.divGrdBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divDown.form.divGrdBtn.addChild(obj.name, obj);

            obj = new TextArea("txaContents","119.00","272",null,"58","5",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("17");
            obj.set_cssclass("txa_WF_normal");
            obj.set_acceptstab("true");
            obj.set_wordWrap("char");
            obj.set_validationGroup("group01");
            obj.set_validation("비용산정근거;NULL");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBusi5","80.00%","34","110","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("20");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtBusiEntp","stcBusi5:5.00","39","115","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnSearchCompany","edtBusiEntp:0.00","39","24","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBusi4","42.50%","34","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("22");
            obj.set_text("추진기간");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Calendar("calBusiSt","stcBusi4:5.00","39","115","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("13");
            obj.set_validation("추진기간;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_text("    -  -      ");
            this.divDown.addChild(obj.name, obj);

            obj = new Calendar("calBusied","calBusiSt:25.00","39","115","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("14");
            obj.set_validation("추진기간;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_text("    -  -      ");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("Static01","calBusiSt:6.00","39","15","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("21");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnSearchPop_RefNo","803","72","24","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnSearchPop_Dept","1059","72","24","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_visible("true");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcBg03_00","0","67",null,"34","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_inputBg");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtPreConfUser","1204.00","72",null,"24","5",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("25");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcLabel06_00_01_01","85.00%","67","111","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("26");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtPreConfDep","951.00","72",null,"24","221",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("27");
            obj.set_validationGroup("group01");
            obj.set_validation("추진부서;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_validationCheckReadonly("false");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcLabel06_00_01_00","65.00%","67","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("28");
            obj.set_text("추진부서");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtPreBusiNo","663.00","72",null,"24","477",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("29");
            obj.set_validationGroup("group01");
            obj.set_validation("담당자;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_text("");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcLabel06_00_01","42.50%","67","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("30");
            obj.set_text("이전사업번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm01","407.00","72",null,"23","741",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_value("B231128-001 [계획사업]");
            obj.set_text("B231128-001 [계획사업]");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcLabel06_01","22.50%","67","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("32");
            obj.set_text("사업계획번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm00","119.00","72",null,"24","997",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_value("투자2024-IT지원팀-001 [진행중]");
            obj.set_text("투자2024-IT지원팀-001 [진행중]");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcLabel05_00","0","67","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("34");
            obj.set_text("사업번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divDown.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUp.form
            obj = new Layout("default","",0,0,this.divUp.form,function(p){});
            this.divUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form.divGrdBtn.form
            obj = new Layout("default","",0,0,this.divDown.form.divGrdBtn.form,function(p){});
            this.divDown.form.divGrdBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form
            obj = new Layout("default","",0,0,this.divDown.form,function(p){});
            this.divDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divUp.form.stcBg03_00","value","dsSrReqIvInfo","REQ_BUSI_PLAN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDown.form.stcBg03","value","dsSrReqIvInfo","BDGT_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDown.form.edtBusiEntp","value","dsSrReqIvInfo","PLAN_ENTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDown.form.cboBusiPlan","value","dsSrReqIvInfo","BUSI_PLAN_TCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDown.form.cboBusiNew","value","dsSrReqIvInfo","IS_NEW_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDown.form.calBusiSt","value","dsSrReqIvInfo","PLAN_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDown.form.calBusied","value","dsSrReqIvInfo","PLAN_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDown.form.txaContents","value","dsSrReqIvInfo","BDGT_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDown.form.edtBusiEntp","accessibilityaction","dsSrReqIvInfo","PLAN_ENTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divUp.form.edtSvcNm00","value","dsSrReqIvInfo","BUSI_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divUp.form.edtReqTmplatNm01","value","dsSrReqIvInfo","BUSI_PLAN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divUp.form.edtPreBusiNo","value","dsSrReqIvInfo","REQ_BUSI_PLAN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDown.form.edtReqTitle","value","dsSrBaseInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDown.form.btnSearchCompany","value","dsSrReqIvInfo","PLAN_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDown.form.btnSearchCompany","accessibilityaction","dsSrReqIvInfo","PLAN_ENTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUp.form.edtPreConfUser","value","dsSrBaseInfo","PRE_CONF_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtPreConfUser00","value","dsSrBaseInfo","PRE_CONF_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUp.form.edtPreConfDep","value","dsSrBaseInfo","PRE_CONF_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDown.form.btnSearchPop_RefNo","value","dsSrReqIvInfo","BUSI_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDown.form.stcBg03_00","value","dsSrReqIvInfo","REQ_BUSI_PLAN_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CH0300_D03.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("CH0300_D03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ CH0300_D03
        * 화면(명)		︰ 사업계획 요청서
        * 메뉴(경로)		︰ 사업계획/계약 > 사업계획관리 > 사업계획조회(IV9110_W)
        * 화면 설명		︰ 사업계획 요청서
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.06.10
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.06.10 	 WEMB			최초작성
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
         this.isNewBusi;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);

        	this.dsBbdgtAcsjCd.set_filterstr("ITM_VAL_1=='"+ this.dsSrReqIvInfo.getColumn(0,'BUSI_PLAN_TCD') +"' || Ex.isEmpty(CODE_DIV)");
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);

        	if( Ex.isEmpty(this.wfDsReqWfProc) )
        	{
        		this.wfdsReqWfProc = new Dataset();
        	}
        	this.wfdsReqWfProc.loadXML(this.dsWfProc.saveXML());
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fn_initDataset();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['BUSINESS_CD',	 	'BDGT_ACSJ_CD',	 	'CNTC_TCD_CD', 		'PAY_CYCLE_CD', 		'YN_CD'		]	// 조회할 상위코드
        		,codeDiv: ['CNTR_CD',			'CNTR_CD',			'CNTR_CD',			'CNTR_CD',				'CMM_CD'	]			// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'SEL',				'SEL',				'SEL',					'SEL'		]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y',				'Y',				'Y',					'Y'			]					// 사용여부
        		,filter	: ['',					'',					'', 				'', 					''			]						// filterStr
        		,objDs	: [this.dsBusinessCd,	this.dsBbdgtAcsjCd,	this.dsCntrTcdCd,	this.dsPayCycleCd,		this.dsYnCd	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fn_initDataset = function()
        {
        	if( Ex.isEmpty(this.dsCond.getColumn(0, "REQ_ID")) )
        	{
        		this.dsSrReqIvInfo.setInsertRow();

        		// TODO 변경예정
        		this.dsSrReqIvInfo.setColumn(0,'BUSI_YEAR','2024');
        	}
        }
        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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

        	switch (sSvcId)
        	{
        		case "select01" :

        			break;

        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(Ex.isEmpty(varValue))
        		return;

        	var tempDs = new Dataset();
        	var tempDs2;

        	if(pID == "selRefNo")
        	{
        		tempDs2 = new Dataset();
        		var RtnVal = varValue.split("¶");
        		tempDs.loadXML(RtnVal[0]);
        		tempDs2.loadXML(RtnVal[1]);

        		trace(tempDs2.saveXML());
        	}
        	else
        	{
        		tempDs.loadXML(varValue);
        	}

        	switch(pID)
        	{
        		case "selCompanyPop" :	// 계약업체 선택
        			var COMPANY_ID	= tempDs.getColumn(0, 'COMPANY_ID');
        			var COMPANY_NM	= tempDs.getColumn(0, 'COMPANY_NM');
        			this.dsSrReqIvInfo.setColumn(this.dsSrReqIvInfo.rowposition, 'PLAN_ENTP_CD', COMPANY_ID);
        			this.dsSrReqIvInfo.setColumn(this.dsSrReqIvInfo.rowposition, 'PLAN_ENTP_NM', COMPANY_NM);
        			break;

        		case "selDept" :
        			var DEPT_CD	= tempDs.getColumn(0, 'DEPT_CD');
        			var DEPT_NM	= tempDs.getColumn(0, 'DEPT_NM');
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_DEPT_CD",DEPT_CD);
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_DEPT_NM",DEPT_NM);

        			break;

        		case "selRefNo" :

        			this.dsSrReqIvInfo.setColumn(0,'REQ_BUSI_PLAN_NO', tempDs.getColumn(0, 'BUSI_NO'));
        			this.dsSrReqIvInfo.setColumn(0,'IS_NEW_YN', 'N');
        			this.dsSrBaseInfo.setColumn(0,"TITLE", tempDs.getColumn(0, 'TITLE'));
        			this.dsSrBaseInfo.setColumn(0,"CONTENTS", tempDs.getColumn(0, 'CONTENTS'));
        			this.dsSrReqIvInfo.setColumn(0, 'BUSI_PLAN_TCD', tempDs.getColumn(0, 'BUSI_PLAN_TCD'));

        			//--5. this.isNewBusi 이 null 일 때 참조.
        			if(Ex.isEmpty(this.isNewBusi))
        			{
        				this.dsSrReqIvInfo.setColumn(0,'REQ_BUSI_PLAN_NO', tempDs.getColumn(0, ''));
        				this.dsSrReqIvInfo.setColumn(0, 'IS_NEW_YN', 'Y');
        			}
        			this.dsSrReqIvInfo.setColumn(0, 'BDGT_DESC', tempDs.getColumn(0, 'BDGT_DESC'));

        			//--6. 끝. this.isNewBusi 초기화
        			this.isNewBusi = null;

        			// 예산계획 리셋
        			this.dsSrReqIvBdgt.clearData();
        			for (var i =0; i<this.dsSrReqIvBdgt.rowcount; i++){
        				this.dsSrReqIvBdgt.setColumn(i,'CHK',1);
        			}
        			this.fnDelete(this.dsSrReqIvBdgt);

        			// 예산계획 DataSet 세팅
        			this.dsSrReqIvBdgt.assign(tempDs2);
        			this.dsSrReqIvBdgt.set_updatecontrol(false);
        			for(var i=0; i<this.dsSrReqIvBdgt.rowcount; i++)
        			{
        				this.dsSrReqIvBdgt.setColumn(i, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsSrReqIvBdgt.setColumn(i, "ROWFLAG", "I");
        				this.dsSrReqIvBdgt.setRowType(i, Dataset.ROWTYPE_INSERT);
        			}
        			this.dsSrReqIvBdgt.set_updatecontrol(true);

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
        	//
        	// if(!varValue) return; // false일 때 수행

        	switch(mID)
        	{

        		case "saveConfirm" :
        			if(!varValue) return;
        			//this.nLastRow = this.dsCmmWordMt.rowposition;	// 마지막 rowposition 저장
        			//this.fnSetDatasetDt();		// 저장용 datset 전처리
        			this.fnSaveCheck();
        			break;

        		case "SelectYnIsNew" :
        			//--2-1. 신규사업이 아닐 때 이전사업번호 선택 팝업호출, this.isNewBusi 에 현재 년도 셋팅
        			if(!varValue) {
        				this.dsSrReqIvInfo.setColumn(0,'IS_NEW_YN','N');
        				this.isNewBusi = Ex.util.today().substring(0, 4);
        				this.divUp.form.btnSearchPop_RefNo.click();
        			}

        			else {
        				this.dsSrReqIvInfo.setColumn(0,'IS_NEW_YN','Y');
        			}

        			break;

        		case "SelectYnRef" :
        			//--3-2. 이전사업번호를 선택하기로 함, this.isNewBusi = 현재 년도
        			if(!varValue) {
        				this.isNewBusi = Ex.util.today().substring(0, 4);
        			}	//선택
        			//참조

        			this.fnSetPreBusiPop();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.divDown.form.grdDataList.displayRowType();
        	// 공통코드 조회
        	this.fnGetCmmCd();
        	// --1. 신규사업여부 확인
        	if(!this.reqInfo.REQ_ID)
        	{
        		var param = {
        			  id	: "SelectYnIsNew"				//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "신규사업여부 \n\n"+"확인: 예 / 취소: 아니오"						//메시지 내용
        			, arrparam : ''							//메시지의 변수에 들어갈 실제값
        			, msgtype : "S"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.confirm(this, param);
        	}

        	if(this.reqInfo.REQ_TMPLAT_ID == 'WFT240007'){ //현업 신청일 때
        		if(this.reqInfo.WF_PROC_CD == 'WF_PROC_1000')
        		{
        			this.divDown.form.stcBusi6.cssclass = 'sta_WF_inputTitle';
        			this.divDown.form.txaContents.validationGroup = '';
        			this.divDown.form.txaContents.validation = '';
        		}

        		else if(this.reqInfo.WF_PROC_CD == 'WF_PROC_2010')
        		{	//
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_USER_ID",Ex.util.getSession('gvUserId'));
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_USER_NM",Ex.util.getSession('gvUserNm'));
        		}
        	}
        	else if(this.reqInfo.REQ_TMPLAT_ID == 'WFT240008') //IT신청일 때
        	{
        		if(this.reqInfo.REQ_STAT_CD =='RQST00')
        		{
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_USER_ID",Ex.util.getSession('gvUserId'));
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_USER_NM",Ex.util.getSession('gvUserNm'));
        		}
        	}

        }

        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsSrBaseInfo) && !Ex.util.isUpdated(this.dsSrReqIvBdgt) && !Ex.util.isUpdated(this.dsSrReqIvInfo) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        /***********************
        # 예산계획의 분기 확정은 IT사업관리 결재시에 저장되고 자금관리부서로 데이터 전송되고 전산예산 실적관리에서 조회됨

        # 승인 완료된 사업계획에 대해서 “진행상태 변경” 버튼 활성화 필요
           대상 권한 “사업계획 작성자”이고, 진행상태 변경하고 변경 한 시점 작성자의 팀장이 승인

        ***************************/

        	if(isReg)
        	{
        		if(!Ex.util.checkValidate(this.divUp, "group01")) return false;
        		else if(!Ex.util.checkValidate(this.divDown, "group01")) return false;
        		else if( this.dsSrReqIvInfo.getColumn(0,"PLAN_START_DT") > this.dsSrReqIvInfo.getColumn(0,"PLAN_END_DT") )
        		{
        			var param = {id : "pAlertDate", msg : "추진기간을 확인해주세요"};
        			Ex.core.alert(this, param);
        			return false;
        		}
        		else if(this.dsSrReqIvBdgt.rowcount == 0)
        		{
        			var param = {id : "pAlertGridI", msg : "예산계획이 등록되지 않았습니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        		else if(isReg && !this.divDown.form.grdDataList.checkValidate(true) ) return false;
        	}

        	return true;
        }

        this.isModify = function()
        {
        	if( Ex.util.isUpdated(this.dsSrReqIvBdgt) || Ex.util.isUpdated(this.dsSrReqIvInfo) ) return true;
        	else return false;
        }

        this.fnSetPreBusiPop = function()
        {
        	//--4. 이전사업번호 선택 팝업창
        	// this.isNewBusi이 null일 때는 참조 & 금년도일 때는 선택
        	Ex.core.popup(
        		this,
        		'selRefNo',
        		'iv::IV9110_W.xfdl',           		// <--- 팝업창 오픈 Url
        		{
        			title		: Ex.core.word('이전사업번호') + ' ' + Ex.core.word('선택')
        		  , pSelType	: 'S'
        		  , pPopType	: 'P'
        		  , pBusiYear	: this.isNewBusi
        		},
        		"autosize"
        	);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        	if(e.columnid == 'BUSI_PLAN_TCD' ){
        		this.dsBbdgtAcsjCd.set_filterstr("ITM_VAL_1=='" + e.newvalue + "' || Ex.isEmpty(CODE_DIV)");
        		if (e.oldvalue != e.newvalue)
        		{
        			for(var i=0; i<this.dsSrReqIvBdgt.rowcount; i++)
        			{
        				this.dsSrReqIvBdgt.setColumn(i,'BDGT_ACSJ_CD',undefined);
        				this.dsSrReqIvBdgt.setColumn(i,'ACSJ_TCD',undefined);
        				//TODO 현재 [사업계획]은 변경, [계약]은 삭제..
        			}
        		}
        	}

        };

        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnAdd" :

        			var rowPos = this.dsSrReqIvBdgt.setInsertRow(this.dsSrReqIvBdgt.rowcount + 1);
        			this.dsSrReqIvBdgt.setColumn(rowPos, "REQ_ID", this.dsCond.getColumn(0,"REQ_ID"));

        			this.dsSrReqIvBdgt.setColumn(rowPos, "BDGT_PAY1", 0);
        			this.dsSrReqIvBdgt.setColumn(rowPos, "BDGT_PAY2", 0);
        			this.dsSrReqIvBdgt.setColumn(rowPos, "BDGT_PAY3", 0);
        			this.dsSrReqIvBdgt.setColumn(rowPos, "BDGT_PAY4", 0);

        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsSrReqIvBdgt);
        			break;
        	}
        }

        this.fnCommbtnPopOnclick = function(obj,e)
        {
        	var popId	= '';
        	var url		= '';
        	var oParam	= {};
        	var pPopType= '';
        	switch(obj.name)
        	{
        		case "btnSearchCompany" :		// 업체 선택
        			popId	= 'selCompanyPop';
        			url		= 'ms::MS0500_P02.xfdl';
        			oParam	= {
        				title		: Ex.core.word('계약업체') + ' ' + Ex.core.word('선택')
        			  , pSelType	: 'S'
        			};
        			break;

        		case "btnSearchPop_Dept" :		// 부서 선택
        			popId	= 'selDept';
        			url		= 'fomm::FOMM0000_P04.xfdl';
        			oParam	= {
        				title		: Ex.core.word('추진부서') + ' ' + Ex.core.word('선택')
        			  , pSelType	: 'S'
        			};
        			break;

        		case "btnSearchPop_RefNo" :		// 이전사업번호 선택 팝업
        			//--2-2. 이전번호 사업 선택 팝업을 직접 호출 시 내용참조만 할 건지, 이전번호 삽입할 건지 선택
        			if(Ex.isEmpty(this.isNewBusi))
        			{
        				var param = {
        					  id	: "SelectYnRef"					//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "참조여부\n\n확인: 참조 / 취소: 이전사업번호 선택"		//메시지 내용
        					, arrparam : ''							//메시지의 변수에 들어갈 실제값
        					, msgtype : "S"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.confirm(this, param);
        			}
        			else
        			//3-1. 내용참조만 하기로 함, this.isNewBusi is null
        				this.fnSetPreBusiPop();
        			break;
        	}

        	Ex.core.popup(
        		this,
        		popId,
        		url,           		// <--- 팝업창 오픈 Url
        		oParam,
        		"autosize"
        	);
        };

        this.divDown_grdDataList_oncloseup = function(obj,e)
        {
        	var oldV = this.dsSrReqIvBdgt.getColumn(this.dsSrReqIvBdgt.rowposition,'BDGT_ACSJ_CD')

        	if(e.col ==2) {
        		this.dsCntrTcdCd.set_filterstr("ITM_VAL_2=='" + e.value + "' ");
        		if(e.value != oldV)
        		{
        			this.dsSrReqIvBdgt.setColumn(e.row,'ACSJ_TCD',undefined);
        			obj.updateToDataset();
        		}
        	}
        };
        this.divDown_cboBusiNew_onitemchanged = function(obj,e)
        {
        	if(this.dsSrReqIvInfo.getColumn(0,'IS_NEW_YN') =='Y')
        	{
        		this.dsSrReqIvInfo.setColumn(0,'REQ_BUSI_PLAN_NO', '');
        		//this.dsSrBaseInfo.setColumn(0,"TITLE",'');
        		//this.dsSrBaseInfo.setColumn(0,"CONTENTS", '');
        		//this.dsSrReqIvInfo.setColumn(0, 'BDGT_DESC', '');

        		// 예산계획 리셋
        		this.dsSrReqIvBdgt.clearData();
        		for (var i =0; i<this.dsSrReqIvBdgt.rowcount; i++){
        			this.dsSrReqIvBdgt.setColumn(i,'CHK',1);
        		}
        		this.fnDelete(this.dsSrReqIvBdgt);

        	}
        	else if(this.dsSrReqIvInfo.getColumn(0,'IS_NEW_YN') =='N'){
        		//this.divUp.form.btnSearchPop_RefNo.click();
        	}
        };

        this.divDown_grdDataList_oncellclick = function(obj,e)
        {
        	if(e.col ==2) {
        		this.dsBbdgtAcsjCd.set_filterstr("ITM_VAL_1=='"+ this.dsSrReqIvInfo.getColumn(0,'BUSI_PLAN_TCD') +"'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDown.form.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.divDown.form.btnY.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.btnN.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.stcInfoTitle2.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.divDown.form.grdDataList.addEventHandler("oncloseup",this.divDown_grdDataList_oncloseup,this);
            this.divDown.form.grdDataList.addEventHandler("oncellclick",this.divDown_grdDataList_oncellclick,this);
            this.divDown.form.cboBusiPlan.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divDown.form.cboBusiNew.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divDown.form.cboBusiNew.addEventHandler("onitemchanged",this.divDown_cboBusiNew_onitemchanged,this);
            this.divDown.form.divGrdBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.divGrdBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.btnSearchCompany.addEventHandler("onclick",this.fnCommbtnPopOnclick,this);
            this.divDown.form.calBusiSt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.divDown.form.calBusied.addEventHandler("onchanged",this.doChgWishDt,this);
            this.divDown.form.btnSearchPop_RefNo.addEventHandler("onclick",this.fnCommbtnPopOnclick,this);
            this.divDown.form.btnSearchPop_Dept.addEventHandler("onclick",this.fnCommbtnPopOnclick,this);
            this.dsSrReqIvBdgt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSrReqIvInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("CH0300_D03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
