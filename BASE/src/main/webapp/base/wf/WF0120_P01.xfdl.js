(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_P01");
            this.set_titletext("결재상세정의 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRtrnWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprProcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqAppvDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DIRECT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_PROC_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_PROG_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprProgCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMapWfProcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_00_00_00","20.00","285",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_00_00","20.00","252",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_01","20.00","54",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","1",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUser00","20.00","20","50","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("결재");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","153",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRtrnNode","20.00","153","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("반려 시 단계");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboRtrnWf","stcRtrnNode:5.00","158",null,"24","405",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsRtrnWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcName","20.00","54","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("표기명칭");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprNm","400.00","54","150","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("워크플로우 표기명칭");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtName","stcName:5.00","59",null,"24","stcApprNm:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_00","20.00","186",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprProcDivCd","20.00","186","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("결재처리/진행구분");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","320",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00","20.00","Static00_00:0","145","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_text("추가 결재 단계");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00_00:24",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("21");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdWfReqAppvDt","20.00","Static00_00_00:0",null,"203","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsWfReqAppvDt");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useFilter("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"115\"/><Column size=\"250\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"결재&#13;&#10;단계\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"결재처리&#13;&#10;구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"결재진행&#13;&#10;구분\"/><Cell col=\"5\" text=\"워크플로우 표기명칭\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"서비스명\"/><Cell col=\"7\" text=\"진행단계매핑\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" edittype=\"normal\" editinputtype=\"number\" text=\"bind:APPR_LVL_SEQ\" validation=\"순번;NULL\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:APPR_PROC_DIV_CD\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"결재처리구분;NULL\" combodataset=\"dsApprProcCd\"/><Cell col=\"4\" edittype=\"expr:APPR_PROC_DIV_CD == &quot;01&quot; ? &quot;combo&quot; : &quot;none&quot;\" text=\"bind:APPR_PROG_DIV_CD\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"결재진행구분;NULL\" combodataset=\"dsApprProgCd\" displaytype=\"expr:APPR_PROC_DIV_CD == &quot;01&quot; ? &quot;combotext&quot; : &quot;none&quot;\"/><Cell col=\"5\" text=\"bind:APPR_NM\" validation=\"워크플로우 표기명칭;NULL\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:SVC_NM\" editinputtype=\"digit,alpha,english,symbol\" editimemode=\"alpha\" validation=\"서비스명;NULL\" textAlign=\"left\" edittype=\"expr:APPR_PROC_DIV_CD == &apos;99&apos; ? &apos;normal&apos; : &apos;none&apos;\" displaytype=\"expr:APPR_PROC_DIV_CD == &apos;99&apos; ? &apos;normal&apos; : &apos;none&apos;\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:MAP_WF_PROC_CD\" combodataset=\"dsMapWfProcCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcSvcNm","20.00","252","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("결재선 지정 서비스");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm","stcSvcNm:5.00","257",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("none");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboApprProcDivCd","stcApprProcDivCd:5.00","191","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsApprProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdTopRBtn",null,"Static00_00:0","125","24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.divGrdTopRBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContent.form.divGrdTopRBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divContent.form.divGrdTopRBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContent.form.divGrdTopRBtn.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_00_01","20.00","219",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprDirectYn","20.00","219","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("결재선직접지정가능여부");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboApprProgDivCd","cboApprProcDivCd:2","191","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("24");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsApprProgCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_00_02","20.00","120",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcScreenRtrn00","20.00","120","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("수정가능단계");
            this.divContent.addChild(obj.name, obj);

            obj = new MultiCombo("mcboScreenEdit","stcScreenRtrn00:5.00","125",null,"24","405",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsEditWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("mcbo_WF_normal");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_01_01","20.00","87",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtApprNm","stcApprNm:5.00","59",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("30");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkApprDirectYn","stcApprDirectYn:5.00","224","20","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("31");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcName00","20.00","285","156","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("의견작성 필수단계");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn01","stcName00:5","292","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("33");
            obj.set_text("승인");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn02","chkBtnYn01:10","292","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("34");
            obj.set_text("반려");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcMapWfProcCd","20.00","87","155","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("진행단계매핑");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboMapWfProcCd","stcMapWfProcCd:5.00","92",null,"24","405",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("37");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsMapWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprNm00","400.00","87","150","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprNm00_00","400.00","120","150","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprNm00_01","400.00","153","150","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdTopRBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdTopRBtn.form,function(p){});
            this.divContent.form.divGrdTopRBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,660,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.stcBg01_01_00_02","value","dsRtn","SCREEN_EDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.stcName00","value","dsRtn","SCREEN_RTRN_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ WF0120_P01
        * 화면(명)	︰ 결재승인상세정의 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 워크플로우 결재 승인 상세 처리에 대한 정의 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pIU = 'I';
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.pIU = this.getOwnerFrame().pIU||'I';
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function(){}

        // 조회
        this.fnSearch = function(){}

        // 공통 저장 func.
        this.fnSave = function(){}

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	var filterStr = objDs.filterstr;

        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr(filterStr);
        	objDs.set_enableevent(true);

        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "APPR_LVL_SEQ", (i+2));
        	}
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID) {}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "AlertEssApprProcDivCdI" :
        			this.divContent.form.cboApprProcDivCd.setFocusRed();
        			break;

        		case "AlertEssApprProgDivCdI" :
        			this.divContent.form.cboApprProgDivCd.setFocusRed();
        			break;

        		case "AlertEssSvcNmI" :
        			this.divContent.form.edtSvcNm.setFocusRed();
        			break;

        		case "AlertEssRtrnWfI" :
        			this.divContent.form.cboRtrnWf.setFocusRed();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContent.form.grdWfReqAppvDt.displayRowType();

        	this.fnGetCmmCd();

        	this.dsWfDt.loadXML(this.getOwnerFrame().dsWfDt);	// WorkFlow 단계 dataset

        	// 반려단계 선택용 현재 워크플로우 이전 단계 setting
        	var arrWfProc = this.getOwnerFrame().prevWfProcCd.split(',');

        	var rowPos = this.dsRtrnWfProcCd.setAddRow();
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', '');
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', '없음');

        	for(var i = 0; i < arrWfProc.length; i++)
        	{
        		var arrWfProcCd = arrWfProc[i].split('|');
        		var rowPos = this.dsRtrnWfProcCd.setAddRow();
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', arrWfProcCd[0]);
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrWfProcCd[0]), 'WF_PROC_NM') || '등록' );
        	}

        	rowPos = this.dsRtrnWfProcCd.setAddRow();
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', "WF_PROC_9999");
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', "완료");

        	rowPos = this.dsEditWfProcCd.setAddRow();
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', "TOP");
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', '기본정보');

        	for(var i = 0; i < arrWfProc.length; i++)
        	{
        		var arrWfProcCd = arrWfProc[i].split('|');
        		var rowPos = this.dsEditWfProcCd.setAddRow();
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', arrWfProcCd[0]);
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrWfProcCd[0]), 'WF_PROC_NM') || '등록' );
        	}

        	var WF_PROC_CD	= this.getOwnerFrame().WF_PROC_CD||'';
        	var WF_FUNC_CD 	= this.getOwnerFrame().WF_FUNC_CD||'';
        	var WF_FUNC_NM 	= this.getOwnerFrame().WF_FUNC_NM;
        	var RTRN		= this.getOwnerFrame().RTRN||'';

        	trace("WF_PROC_CD : " + WF_PROC_CD);
        	trace("WF_FUNC_CD : " + WF_FUNC_CD);
        	trace("WF_FUNC_NM : " + WF_FUNC_NM);

        	this.divContent.form.edtName.set_value(WF_FUNC_NM);

        	this.dsMapWfProcCd.loadXML(this.getOwnerFrame().dsMapWfProcCd);
        	this.dsMapWfProcCd.set_filterstr(" Ex.isEmpty(ITM_VAL_1) || ITM_VAL_1 == '"+ WF_PROC_CD +"' ");

        	switch(this.pIU.toUpperCase())
        	{
        		case "I" :
        			this.divContent.form.grdWfReqAppvDt.set_binddataset("");
        			this.dsWfReqAppvDt.assign(this.getOwnerFrame().dsWfReqAppvDt);
        			this.dsWfReqAppvDt.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "'");

        			this.divContent.form.cboRtrnWf.set_value(WF_PROC_CD);
        			this.divContent.form.cboApprProcDivCd.set_value("01");
        			this.divContent.form.cboApprProgDivCd.set_value("02");
        			this.divContent.form.chkApprDirectYn.set_value("N");

        			this.divContent.form.edtApprNm.set_value("결재");
        			this.divContent.form.grdWfReqAppvDt.set_binddataset(this.dsWfReqAppvDt);

        			this.divContent.form.chkBtnYn01.set_value("Y");
        			this.divContent.form.chkBtnYn02.set_value("N");
        			this.divContent.form.cboMapCd.set_value("");
        			break;

        		case "U" :
        			this.divContent.form.grdWfReqAppvDt.set_binddataset("");
        			this.dsWfReqAppvDt.assign(this.getOwnerFrame().dsWfReqAppvDt);
        			this.dsWfReqAppvDt.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "'");

        			this.divContent.form.chkBtnYn01.set_value(this.getOwnerFrame().APV_ESS_YN);
        			this.divContent.form.chkBtnYn02.set_value(this.getOwnerFrame().RTRN_ESS_YN);
        			//this.divContent.form.cboMapCd.set_value(this.getOwnerFrame().MAP_WF_PROC_CD);
        			this.divContent.form.cboMapWfProcCd.set_value(this.dsWfReqAppvDt.getColumn(0,"MAP_WF_PROC_CD")||"");

        			trace("filter rowcount : " + this.dsWfReqAppvDt.rowcount + "\n" +
        				this.dsWfReqAppvDt.saveXML());

        			var fRow = this.dsWfReqAppvDt.findRow("APPR_LVL_SEQ", "1");

        			trace("fRow ::: " + fRow);

        			if(fRow > -1)
        			{
        				var APPR_NM = this.dsWfReqAppvDt.getColumn(fRow, "APPR_NM");
        				this.divContent.form.edtApprNm.set_value(APPR_NM);

        				var APPR_PROC_DIV_CD = this.dsWfReqAppvDt.getColumn(fRow, "APPR_PROC_DIV_CD");
        				this.divContent.form.cboApprProcDivCd.set_value(APPR_PROC_DIV_CD);

        				var evt = nexacro.ItemChangeEventInfo;
        				evt.postvalue = APPR_PROC_DIV_CD;
        				this.cboOnItemChanged(this.divContent.form.cboApprProcDivCd, evt);

        				if(APPR_PROC_DIV_CD == "01")
        				{
        					var APPR_PROG_DIV_CD = this.dsWfReqAppvDt.getColumn(fRow, "APPR_PROG_DIV_CD");
        					this.divContent.form.cboApprProgDivCd.set_value(APPR_PROG_DIV_CD);
        				}
        				else
        				{
        					this.divContent.form.cboApprProgDivCd.set_index(0);
        				}

        				var APPR_DIRECT_YN = this.dsWfReqAppvDt.getColumn(fRow, "APPR_DIRECT_YN");
        				this.divContent.form.chkApprDirectYn.set_value(Ex.isNvl(APPR_DIRECT_YN, "N"));

        				var SVC_NM = this.dsWfReqAppvDt.getColumn(fRow, "SVC_NM");
        				this.divContent.form.edtSvcNm.set_value(SVC_NM);

        				this.dsWfReqAppvDt.set_enableevent(false);
        				this.dsWfReqAppvDt.set_updatecontrol(false);
        				this.dsWfReqAppvDt.deleteRow(fRow);
        				this.dsWfReqAppvDt.set_enableevent(true);
        				this.dsWfReqAppvDt.set_updatecontrol(true);
        			}
        			else
        			{
        				//this.divContent.form.cboApprProcDivCd.set_value("01");
        				//this.divContent.form.cboApprProgDivCd.set_value("02");
        				this.divContent.form.cboApprProcDivCd.set_value(undefined);
        				this.divContent.form.cboApprProgDivCd.set_value(undefined);
        			}

        			var EDIT = this.getOwnerFrame().EDIT||'';
        			if( !Ex.isEmpty(EDIT) )	this.divContent.form.mcboScreenEdit.set_value(EDIT);

        			var RTRN = this.getOwnerFrame().RTRN||'';
        			this.divContent.form.cboRtrnWf.set_value(RTRN);
        			//else					this.divContent.form.cboRtrnWf.set_value(WF_PROC_CD);

        			this.divContent.form.grdWfReqAppvDt.set_binddataset(this.dsWfReqAppvDt);

        			break;
        	}
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['APPR_PROC_CD',		'APPR_PROG_CD'		]	// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD',		'WORKFLOW_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'SEL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y'					]	// 사용여부
        		,filter	: ['',					''					]	// filterStr
        		,objDs	: [this.dsApprProcCd,	this.dsApprProgCd	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	var msgId = "";
        	var labelText = "";

        // 	if( Ex.isEmpty(this.divContent.form.cboRtrnWf.value) )
        // 	{
        // 		msgId = "AlertEssRtrnWfI";
        // 		labelText = this.divContent.form.stcRtrnNode.text;
        // 	}

        	if( Ex.isEmpty(msgId) )
        	{
        		if( Ex.isEmpty(this.divContent.form.cboApprProcDivCd.value) )
        		{
        			msgId = "AlertEssApprProcDivCdI";
        			labelText = this.divContent.form.stcApprProcDivCd.text;
        		}
        	}

        	if( Ex.isEmpty(msgId) )
        	{
        		if(this.divContent.form.cboApprProcDivCd.value == "99")
        		{
        			if( Ex.isEmpty(this.divContent.form.edtSvcNm.value) )
        			{
        				msgId = "AlertEssSvcNmI";
        				labelText = this.divContent.form.stcSvcNm.text;
        			}
        		}
        	}

        	if( Ex.isEmpty(msgId) )
        	{
        		if( this.divContent.form.cboApprProcDivCd.value == "01" && Ex.isEmpty(this.divContent.form.cboApprProgDivCd.value) )
        		{
        			msgId = "AlertEssApprProgDivCdI";
        			labelText = this.divContent.form.stcApprProcDivCd.text;
        		}
        	}

        	if( !Ex.isEmpty(msgId) )
        	{
        		var param = {
        				  id	: msgId							//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "11001"						//메시지 내용
        				, arrparam : [labelText]	//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        	}

        	if( !this.divContent.form.grdWfReqAppvDt.checkValidate(true) ) return false;

        	var msg = "";
        	for(var i=0; i<this.dsWfReqAppvDt.rowcount; i++)
        	{
        		if(this.dsWfReqAppvDt.getColumn(i, "APPR_PROC_DIV_CD") == "99")
        		{
        			if( Ex.isEmpty(this.dsWfReqAppvDt.getColumn(i, "SVC_NM")) )
        			{
        				msg += (Ex.isEmpty(msg) ? "" : "\n") + "[" + (i+1) + "행] [결재처리구분]이 서비스 지정인 경우 서비스명은 필수 입력항목입니다.";
        			}
        		}
        	}

        	if( !Ex.isEmpty(msg) )
        	{
        		Ex.core.popup(
        			this,								// <--- 팝업 실행 스코프
        			"validCheckInfoPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"comm::comTextareaPop.xfdl",		// <--- 팝업창 오픈 Url
        			{
        				title		: "입력 체크",
        				subTitle	: "[추가 결재 단계]입력 체크",
        				pMsg		: msg
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        		return false;
        	}
        	return true;
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			var apprLvlSeq = nexacro.toNumber(this.dsWfReqAppvDt.getMax("APPR_LVL_SEQ"), 1);
        				apprLvlSeq++;

        			var rowPos = this.dsWfReqAppvDt.setAddRow();
        			this.dsWfReqAppvDt.setColumn(rowPos, "WF_PROC_CD", this.getOwnerFrame().WF_PROC_CD);
        			this.dsWfReqAppvDt.setColumn(rowPos, "APPR_LVL_SEQ", apprLvlSeq);
        			this.dsWfReqAppvDt.setColumn(rowPos, "APPR_PROC_DIV_CD", "01");
        			this.dsWfReqAppvDt.setColumn(rowPos, "APPR_PROG_DIV_CD", "02");
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsWfReqAppvDt);
        			break;

        		case "btnSelect" :
        			var rtn = this.fnCheckValidate();
        			trace("rtn ::: " + rtn);
        			if( !rtn ) return;

        			this.dsWfReqAppvDt.setInsertRow(0);
        			this.dsWfReqAppvDt.setColumn(0, "WF_PROC_CD", this.getOwnerFrame().WF_PROC_CD);
        			this.dsWfReqAppvDt.setColumn(0, "APPR_LVL_SEQ", 1);
        			this.dsWfReqAppvDt.setColumn(0, "APPR_NM", (this.divContent.form.edtApprNm.value||''));
        			this.dsWfReqAppvDt.setColumn(0, "APPR_DIRECT_YN", (this.divContent.form.chkApprDirectYn.value||''));
        			this.dsWfReqAppvDt.setColumn(0, "APPR_PROC_DIV_CD", (this.divContent.form.cboApprProcDivCd.value||''));
        			this.dsWfReqAppvDt.setColumn(0, "APPR_PROG_DIV_CD",  (this.divContent.form.cboApprProgDivCd.value||''));
        			this.dsWfReqAppvDt.setColumn(0, "SVC_NM", (this.divContent.form.edtSvcNm.value||''));
        			this.dsWfReqAppvDt.setColumn(0, "MAP_WF_PROC_CD", (this.divContent.form.cboMapWfProcCd.value||''));

        			this.dsWfReqAppvDt.set_filterstr("");

        			for(var i=0; i<this.dsWfReqAppvDt.rowcount; i++)
        			{
        				if(this.dsWfReqAppvDt.getColumn(i, "APPR_PROC_DIV_CD") != "01")
        				{
        					this.dsWfReqAppvDt.setColumn(i, "APPR_PROG_DIV_CD", "");
        				}
        			}

        			Ex.core.pclose(this, (this.divContent.form.edtName.value||'') + ";;" +
        								 (this.divContent.form.mcboScreenEdit.value||'') + ";;" +
        								 (this.divContent.form.cboRtrnWf.value||'') + ";;" +

        								(this.divContent.form.chkBtnYn01.value||'') + ";;" +
        								(this.divContent.form.chkBtnYn02.value||'') + ";;" +

        								 this.dsWfReqAppvDt.saveXML()
        			);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.grdOnCellClick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if(e.postvalue == "01")	//직접지정
        	{
        		this.divContent.form.cboApprProgDivCd.set_enable(true);
        		this.divContent.form.chkApprDirectYn.set_value("Y");
        		this.divContent.form.chkApprDirectYn.set_enable(false);
        	}
        	else
        	{
        		if( Ex.isEmpty(this.divContent.form.chkApprDirectYn.value) )
        		{
        			this.divContent.form.chkApprDirectYn.set_value("N");
        		}
        		this.divContent.form.chkApprDirectYn.set_enable(true);
        		this.divContent.form.cboApprProgDivCd.set_enable(false);
        	}

        	this.divContent.form.edtSvcNm.set_readonly(e.postvalue == "99" ? false : true);
        	if(!this.divContent.form.edtSvcNm.readonly)
        	{
        		this.divContent.form.stcSvcNm.set_cssclass("sta_WF_inputTitle_E");
        		this.divContent.form.edtSvcNm.setFocus();
        	}
        	else
        	{
        		this.divContent.form.stcSvcNm.set_cssclass("sta_WF_inputTitle");
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "APPR_PROC_DIV_CD")
        	{
        		if(e.newvalue != "01")
        		{
        			obj.setColumn(e.row, "APPR_PROG_DIV_CD", undefined);
        		}
        	}
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdWfReqAppvDt.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContent.form.cboApprProcDivCd.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divContent.form.divGrdTopRBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdTopRBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.chkBtnYn01.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.divContent.form.chkBtnYn02.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.dsWfReqAppvDt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("WF0120_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
