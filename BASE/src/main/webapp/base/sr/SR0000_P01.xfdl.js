(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSR0000_P01");
            this.set_titletext("요청서 선택팝업(공통)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FR_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MY_REQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CHK_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SR_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MY_REQ_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCdGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
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

            obj = new Static("Static00_01","1500","104","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","13","70","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("요청 제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:0.00","13","135","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtTitle:0","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("19");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqId","Static00_00:0.00","13","79","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("요청 번호");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:0.00","13","115","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edtReqId:0","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqDt","Static00_00_00:0.00","13","64","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calFrReqDt","stcReqDt:0.00","12","110","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_validationGroup("search01");
            obj.set_validation("요청일[FROM];NULL");
            obj.set_text("    -  -  ");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01","calFrReqDt:0.00","12","10","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calToReqDt","Static01:0.00","12","110","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_validation("요청일[TO];NULL");
            obj.set_validationGroup("search01");
            obj.set_text("    -  -  ");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","calToReqDt:0","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqStatCd","Static00_00_00_00:0.00","12","45","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboReqStatCd","stcReqStatCd:0","12","100","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsReqStatCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_enable("true");
            obj.set_index("-1");
            obj.set_text("");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","cboReqStatCd:0","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcMyReq","Static00_00_00_00_00:0","12","45","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_text("내작업");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkMyReq","stcMyReq:10","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_textwidth("0");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","20.00","90","105","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("요청서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","stcGrdTitle:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdReq","20","stcGrdTitle:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsReq");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("false");
            obj.set_cellsizingtype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"요청 제목\"/><Cell col=\"3\" text=\"요청서종류\"/><Cell col=\"4\" text=\"요청구분\"/><Cell col=\"5\" text=\"위험등급\"/><Cell col=\"6\" text=\"요청일\"/><Cell col=\"7\" text=\"요청부서\"/><Cell col=\"8\" text=\"요청자\"/><Cell col=\"9\" text=\"IT부서\"/><Cell col=\"10\" text=\"IT담당자\"/><Cell col=\"11\" text=\"상태\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:REQ_ID\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:REQ_TMPLAT_NM\"/><Cell col=\"4\" text=\"bind:SVC_NM_INFO\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:DANGER_GRADE_CD\"/><Cell col=\"6\" text=\"bind:REQ_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:REQ_DEPT_NM\"/><Cell col=\"8\" text=\"bind:REQ_USER_NM\"/><Cell col=\"9\" text=\"bind:IT_DEPT_CD\"/><Cell col=\"10\" text=\"bind:PM_USER_NM\"/><Cell col=\"11\" text=\"bind:REQ_STAT_CD\" combodataset=\"dsReqStatCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"요청번호\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"요청일\"/><Cell col=\"5\" text=\"요청부서\"/><Cell col=\"6\" text=\"요청자\"/><Cell col=\"7\" text=\"IT부서\"/><Cell col=\"8\" text=\"IT담당자\"/><Cell col=\"9\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:REQ_ID\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:TITLE\"/><Cell col=\"4\" text=\"bind:REQ_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:REQ_DEPT_NM\"/><Cell col=\"6\" text=\"bind:REQ_USER_NM\"/><Cell col=\"7\" text=\"bind:IT_DEPT_NM\"/><Cell col=\"8\" text=\"bind:PM_USER_NM\"/><Cell col=\"9\" text=\"bind:REQ_STAT_CD\" combodataset=\"dsReqStatCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:0","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsReq");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1320,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.stcReqId","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.stcReqDt","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.calFrReqDt","value","dsCond","FR_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.cboReqStatCd","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSearchArea.form.calToReqDt","value","dsCond","TO_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.chkMyReq","value","dsCond","MY_REQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0000_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SV0000_P01
        * 화면(명)		︰ HOST 선택팝업(공통)
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP HOST 선택 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pSelType			선택 타입					S:단일선택 M:다중선택
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pSelType = '';			// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
        //2024-11-03 추가
        this.pSvcCd = '';			// 서비스구분; 'SRM' : 요청관리, 'CHM' : IT작업신청 ...
        this.pSvcFilterType = '';	// 서비스필터구분; '' : 전체,  'STOP' : 검토중지대상
        //2024-11-13 추가
        this.pSvCTmplatId = '';		// 템플릿ID로 조회
        //2024-11-28 추가
        this.pSvcStatus = '';		// 모든 단계 출력

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
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	var today = Ex.util.today();
        	var monthFirstDay = Ex.util.getFirstDate(today);
        	this.dsCond.setColumn(0, "FR_REQ_DT", monthFirstDay);
        	this.dsCond.setColumn(0, "TO_REQ_DT", today);
        	this.dsCond.setColumn(0, "TITLE", "");
        	this.dsCond.setColumn(0, "REQ_ID", "");
        	this.dsCond.setColumn(0, "REQ_STAT_CD", undefined);

        	if(!Ex.isEmpty(this.pSvcStatus))
        	{
        		this.dsCond.setColumn(0, "MY_REQ_YN", "N");
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "MY_REQ_YN", "Y");
        	}

        	var pSvcCd = (this.getOwnerFrame().pSvcCd||'').toUpperCase();
        	if( !Ex.isEmpty(pSvcCd) )
        		this.dsCond.setColumn(0, "SVC_CD", pSvcCd);

        	//2024-11-03 변수추가
        	var pSvcFilterType = (this.getOwnerFrame().pSvcFilterType||'').toUpperCase();
        	if( !Ex.isEmpty(pSvcFilterType) ) {
        		if(pSvcFilterType == "STOP" ) {
        			this.dsCond.setColumn(0, "SR_CHK_STOP_YN", "Y");
        			trace("SR_CHK_STOP_YN===Y");
        		}
        	} else {
        		this.dsCond.setColumn(0, "SR_CHK_STOP_YN", "N");
        	}

        	if(!Ex.isEmpty(this.pSvcStatus))
        	{
        		this.dsCond.setColumn(0, "MY_REQ_YN", "N");
        		this.dsCond.setColumn(0, "SR_CHK_STOP_YN", "");
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "MY_REQ_YN", "Y");
        	}


        }

        // 조회
        this.fnSearch = function()
        {
        	if( !Ex.util.checkValidate(this, "search01") ) return false;

        	//기간체크
        	if(this.dsCond.getColumn(0, "FR_REQ_DT") > this.dsCond.getColumn(0, "TO_REQ_DT"))
        	{
        		var oParam = {id : "alertChcekDateI", msg : "요청일 [FROM] ~ [TO] 기간이 올바르게 입력되지 않았습니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}

        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0000P/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReq=dsReq";			// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "alertChcekDateI" :
        			this.divContent.form.divSearchArea.form.calFrReqDt.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();

        	this.pSelType = (this.getOwnerFrame().pSelType||'').toUpperCase();
        	this.pSvCTmplatId = (this.getOwnerFrame().pSvCTmplatId||'').toUpperCase();
        	this.pSvcStatus =(this.getOwnerFrame().pSvcStatus||'').toUpperCase();

        	if(!Ex.isEmpty(this.pSvCTmplatId))
        	{
        		this.dsCond.setColumn(0,'REQ_TMPLAT_ID',this.pSvCTmplatId)
        	}
        	if(!Ex.isEmpty(this.pSvcStatus))
        	{
        		this.dsCond.setColumn(0,'REQ_SR_STATUS',this.pSvcStatus)
        	}

        	switch(this.pSelType)
        	{
        		case "M" :				this.divContent.form.grdReq.set_formatid('multiSel');	break;
        		case "S" :	default :	this.divContent.form.grdReq.set_formatid('singleSel');	break;
        	}
        	this.divContent.form.grdReq.set_visible(true);

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 검색
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['REQ_STAT_CD',		'REQ_STAT_CD'		]	// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD',		'WORKFLOW_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',				''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y'					]	// 사용여부
        		,filter	: ['',					''					]	// filterStr
        		,objDs	: [this.dsReqStatCd,	this.dsReqStatCdGrid]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pCheckDs) && !Ex.isEmpty(this.getOwnerFrame().pCheckCol) )
        	{
        		if(selType == "S")
        		{
        			var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsReq.getColumn(this.dsReq.rowposition, "REQ_ID"));
        			if(fRow > -1)
        			{
        				var reqInfo = this.dsReq.getColumn(this.dsReq.rowposition, "TITLE") + "[" + this.dsReq.getColumn(this.dsReq.rowposition, "REQ_ID") + "]";
        				var oParam = {id : "alertAddMeetI", msg : "{0} 이미 추가한 요청서 내역 입니다.", arrparam : [reqInfo], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}
        		else if(selType == "M")
        		{
        			this.dsReq.set_enableevent(false);
        			this.dsReq.set_filterstr("CHK == '1'");

        			for(var i=0; i<this.dsReq.rowcount; i++)
        			{
        				var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsReq.getColumn(i, "REQ_ID"));
        				if(fRow > -1)
        				{
        					var reqInfo = this.dsReq.getColumn(i, "TITLE") + "[" + this.dsReq.getColumn(i, "REQ_ID") + "]";
        					var oParam = {id : "alertAddMeetI", msg : "{0} 이미 추가한 요청서 내역 입니다.", arrparam : [reqInfo], msgtype : "I"};
        					Ex.core.alert(this, oParam);
        					this.dsReq.set_filterstr("");
        					this.dsReq.set_enableevent(true);
        					return false;
        				}
        			}
        			this.dsReq.set_filterstr("");
        			this.dsReq.set_enableevent(true);
        		}
        	}

        	this.dsRet.clear();
        	switch(selType)
        	{
        		case "M" :	// 멀티 선택 시 체크된 모든 행 복사 & return
        			this.dsReq.set_enableevent(false);
        			this.dsReq.set_filterstr("CHK == '1'");
        			this.dsRet.copyData(this.dsReq, true);
        			this.dsReq.set_filterstr("");
        			this.dsReq.set_enableevent(false);
        			break;

        		case "S" :	// 단일 선택 시 현재 rowposion 기준 복사 & return
        		default :
        			this.dsRet.assign(this.dsReq);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsReq, this.dsReq.rowposition);
        			break;
        	}

        	Ex.core.pclose(this, this.dsRet.saveXML());
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnSelect" :		// 선택
        			this.fnSelect(this.pSelType);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.grdOnCellDblClick = function(obj,e)
        {
        	this.fnSelect('S');
        };

        this.chkOnchanged = function(obj,e)
        {
        	this.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtTitle.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.stcReqId.addEventHandler("onclick",this.divContent_divSearchArea_stcReqId_onclick,this);
            this.divContent.form.divSearchArea.form.edtReqId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.calFrReqDt.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.calToReqDt.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.calToReqDt.addEventHandler("oncloseup",this.fnDateOncloseup,this);
            this.divContent.form.divSearchArea.form.cboReqStatCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.cboReqStatCd.addEventHandler("oncloseup",this.fnTimeOncloseup,this);
            this.divContent.form.divSearchArea.form.chkMyReq.addEventHandler("onchanged",this.chkOnchanged,this);
            this.divContent.form.grdReq.addEventHandler("oncelldblclick",this.grdOnCellDblClick,this);
            this.dsReq.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsReq.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsReq.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("SR0000_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
