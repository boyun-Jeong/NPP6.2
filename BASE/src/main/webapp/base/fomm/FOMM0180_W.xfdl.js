(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0180_W");
            this.set_titletext("세션관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain1", this);
            obj._setContents("<ColumnInfo><Column id=\"SLOG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"SDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntrStCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntrTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain2", this);
            obj._setContents("<ColumnInfo><Column id=\"RANK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain3", this);
            obj._setContents("<ColumnInfo><Column id=\"RANK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","0","79",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userInfo","0","Static00_01:0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접속이력 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainListCnt","sta_userInfo:6.00","Static00_01:0","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMain1");
            obj.set_text("(0 건)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00_01:24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main1","0","Static00_00:0","1200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMain1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"접속일자\"/><Cell col=\"1\" text=\"접속시간\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"접속서버IP\"/><Cell col=\"5\" text=\"접속IP\"/><Cell col=\"6\" text=\"대메뉴\"/><Cell col=\"7\" text=\"중메뉴\"/><Cell col=\"8\" text=\"메뉴명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:REG_STIME\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"1\" displaytype=\"date\" calendardateformat=\"HH:mm:ss\" calendareditformat=\"HH:mm:ss\" text=\"bind:REG_HHMMSS\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" text=\"bind:SVR_IP\"/><Cell col=\"5\" text=\"bind:CLIENT_IP\"/><Cell col=\"6\" text=\"bind:LV1_MENU_NM\"/><Cell col=\"7\" text=\"bind:LV2_MENU_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:LV3_MENU_NM\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"접속일자\"/><Cell col=\"1\" text=\"접속시간\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"접속서버IP\"/><Cell col=\"5\" text=\"접속IP\"/><Cell col=\"6\" text=\"대메뉴\"/><Cell col=\"7\" text=\"중메뉴\"/><Cell col=\"8\" text=\"메뉴명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:REG_STIME\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:REG_STIME\" displaytype=\"date\" calendardateformat=\"HH:mm:ss\" calendareditformat=\"HH:mm:ss\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" text=\"bind:SVR_IP\"/><Cell col=\"5\" text=\"bind:CLIENT_IP\"/><Cell col=\"6\" text=\"bind:LV1_MENU_NM\"/><Cell col=\"7\" text=\"bind:LV2_MENU_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:LV3_MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main2","grd_main1:20","Static00_00:0",null,"230","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMain2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"순위\"/><Cell col=\"2\" text=\"대메뉴\"/><Cell col=\"3\" text=\"중메뉴\"/><Cell col=\"4\" text=\"메뉴명\"/><Cell col=\"5\" text=\"접속건수\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RANK_NO\"/><Cell col=\"2\" text=\"bind:LV1_MENU_NM\"/><Cell col=\"3\" text=\"bind:LV2_MENU_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:LV3_MENU_NM\"/><Cell col=\"5\" text=\"bind:CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn2",null,"Static00_01:0","135","24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown2",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn2.form);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn2.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"79","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","12","60","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("접속일시");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","575.00","13","30",null,null,"10",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","Static00_00_00_00_00_00:0","12","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","Static07:-26.00","12","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","231","12","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","calEndDate:0","13","30",null,null,"10",null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","Static00_00_00_00_00:0","12","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calSttDate","102","12","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","217","12","10","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","20","42","60","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","103.00","42",null,"24","1029",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"27","75","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"27","90","24","btnSearch:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtUserId","Static02:-26.00","12","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1200","407",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main3","grd_main1:20","Static00_00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_binddataset("dsMain3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"55\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"순위\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"접속건수\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RANK_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdLeftBtn",null,"320","200","24","37.50%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","1200.00","99","20",null,null,"567",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn1",null,"99","135","24","Static00_00_00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown1",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn1.form);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn1.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn3",null,"grd_main2:20","135","24","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown3",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn3.form);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn3.addChild(obj.name, obj);

            obj = new Static("stcMenurank","grd_main1:20","99","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메뉴 순위");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuRankCnt","stcMenurank:-36.00","99","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMain2");
            obj.set_text("(0 건)");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenurank00","grd_main1:20.00","grd_main2:20","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("접속자 순위");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuRankCnt00","stcMenurank00:-20.00","grd_main2:20","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMain3");
            obj.set_text("(0 건)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn2.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn2.form,function(p){});
            this.divGrdTopBtn2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdLeftBtn.form
            obj = new Layout("default","",0,0,this.divGrdLeftBtn.form,function(p){});
            this.divGrdLeftBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn1.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn1.form,function(p){});
            this.divGrdTopBtn1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn3.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn3.form,function(p){});
            this.divGrdTopBtn3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.calSttDate","value","dsCond","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.calEndDate","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edtMenuNm","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edtUserNm","value","dsCond","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0180_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0180_W
        * 화면(명)		︰ 세션관리
        * 메뉴(경로)	︰ 관리자 > 세션관리 > 세션관리
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.02.15
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.02.15	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/


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
        	this.fnSearchReset();
        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	var rowPos = this.dsCond.addRow();
        	var today = Ex.util.today();

        	this.dsCond.setColumn(rowPos, 'START_DATE', Ex.util.addDate(today, -7));
        	this.dsCond.setColumn(rowPos, 'END_DATE', today);

        	this.div_search.form.edtMenuNm.setFocus();
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	this.fnSearch01();
        	this.fnSearch02();
        	this.fnSearch03();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0180W/select01";    // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain1=dsData1";         // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch02 = function()
        {
        	// transaction
        	var sTranId = "select02";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0180W/select02";      // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain2=dsData2";       // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch03 = function()
        {
        	// transaction
        	var sTranId = "select03";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0180W/select03";      // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain3=dsData3";       // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
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

        		case "select02" :
        			//Ex.core.toast(this, "10002");
        			break;

        		case "select03" :

        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "pSearchConfirm" :
        			this.fnSearch();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;
        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 버튼&권한 mapping && visible 처리
        	var	arrBtn = [this.divGrdTopBtn1.form.btnExcelDown1, this.divGrdTopBtn2.form.btnExcelDown2, this.divGrdTopBtn3.form.btnExcelDown3];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn1, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdTopBtn2, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdTopBtn3, 'right', true);

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

        		case "btnExcelDown1" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grd_main1],
           				Sheet	: [''],
           				FileNm	: ["접속이력"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnExcelDown2" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grd_main2],
           				Sheet	: [''],
           				FileNm	: ["메뉴순위"],
           				ExportType : "XLSX",
           				ExportId : "excel02"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnExcelDown3" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grd_main3],
           				Sheet	: [''],
           				FileNm	: ["접속자순위"],
           				ExportType : "XLSX",
           				ExportId : "excel03"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}
        }

        // 공통 oncloumnchanged event : dataset
        // Grid rowFlag 처리르 위해 호출 필요
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };


        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		//this.div_search.form.edtMenuNm.setFocus();
        		this.fnSearch();
        		//obj.setFocus();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_main1.addEventHandler("onlbuttondown",this.grd_main1_onlbuttondown,this);
            this.grd_main2.addEventHandler("oncellclick",this.grd_main_oncellclick,this);
            this.divGrdTopBtn2.form.btnExcelDown2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.Static07.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.edtUserNm.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.div_search.form.calEndDate.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.div_search.form.calSttDate.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.div_search.form.Static05.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.edtMenuNm.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.edtUserId.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.divGrdTopBtn1.form.btnExcelDown1.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn3.form.btnExcelDown3.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0180_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
