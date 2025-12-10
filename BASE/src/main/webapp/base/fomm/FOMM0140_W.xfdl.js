(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0140_W");
            this.set_titletext("메뉴관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"TOP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommMenuMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuTree", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcTypeCdAll", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcTypeCdSel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuParamCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuGbn","20","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("메뉴구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboMenuDIv","88","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("dsMenuCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","228.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staMenuNm","258.00","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","315.00","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","455.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcTypeCd","485.00","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcTypeCd","553.00","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSvcTypeCdAll");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","divSearchArea:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuTreeMt","0","104","400",null,null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMenuTree");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" cssclass=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴체계");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuMt","grdMenuTreeMt:20","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsFommMenuMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"메뉴ID\"/><Cell col=\"3\" text=\"메뉴명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"상위메뉴ID\"/><Cell col=\"5\" text=\"화면ID\"/><Cell col=\"6\" text=\"화면경로\"/><Cell col=\"7\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"최종수정자\"/><Cell col=\"10\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:MENU_ID\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:MENU_NM\" edittype=\"text\" validation=\"메뉴명;NULL\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:UP_MENU_ID\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:SCREEN_ID\" edittype=\"text\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:MENU_URL\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:SORT_ORDR\" edittype=\"text\" validation=\"정렬순서;NULL\" editmaxlength=\"5\" editinputtype=\"digit\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:USE_YN\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\" validation=\"사용여부;NULL\"/><Cell col=\"9\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"includeMenuSvc\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"메뉴ID\"/><Cell col=\"3\" text=\"메뉴명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"업무구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"상위메뉴ID\"/><Cell col=\"6\" text=\"화면ID\"/><Cell col=\"7\" text=\"화면경로\"/><Cell col=\"8\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"10\" text=\"최종수정자\"/><Cell col=\"11\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:MENU_ID\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:MENU_NM\" edittype=\"text\" validation=\"메뉴명;NULL\"/><Cell col=\"4\" text=\"bind:SVC_TYPE_CD\" edittype=\"combo\" displaytype=\"combotext\" validation=\"업무구분;NULL\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsSvcTypeCdSel\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:UP_MENU_ID\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:SCREEN_ID\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:MENU_URL\" edittype=\"text\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:SORT_ORDR\" edittype=\"text\" validation=\"정렬순서;NULL\" editmaxlength=\"5\" editinputtype=\"digit\"/><Cell col=\"9\" displaytype=\"combotext\" text=\"bind:USE_YN\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\" validation=\"사용여부;NULL\"/><Cell col=\"10\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"11\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"includeMenuParam\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"메뉴ID\"/><Cell col=\"3\" text=\"메뉴명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"파라미터\"/><Cell col=\"5\" text=\"상위메뉴ID\"/><Cell col=\"6\" text=\"화면ID\"/><Cell col=\"7\" text=\"화면경로\"/><Cell col=\"8\" text=\"도움말\"/><Cell col=\"9\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"10\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"11\" text=\"최종수정자\"/><Cell col=\"12\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:MENU_ID\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:MENU_NM\" edittype=\"text\" validation=\"메뉴명;NULL\"/><Cell col=\"4\" text=\"bind:MENU_PARAM_CD\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsMenuParamCd\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:UP_MENU_ID\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:SCREEN_ID\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:MENU_URL\" edittype=\"text\"/><Cell col=\"8\" expandshow=\"show\" expandsize=\"48\" cursor=\"pointer\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:SORT_ORDR\" edittype=\"text\" validation=\"정렬순서;NULL\" editmaxlength=\"5\" editinputtype=\"digit\"/><Cell col=\"10\" displaytype=\"combotext\" text=\"bind:USE_YN\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\" validation=\"사용여부;NULL\"/><Cell col=\"11\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"12\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdMenuTreeMt:0","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuTitle","grdMenuTreeMt:20","70","320","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[메뉴] 하위메뉴 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","567","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommMenuMt");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","stcTreeTitle:2","70","225","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_grdCnt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",1840,720,this.divSearchArea.form,function(p){});
            obj.set_mobileorientation("landscape");
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearchArea.form.cboMenuDIv","value","dsCond","TOP_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.edtMenuNm","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0140_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0140_W
        * 화면(명)		︰ 메뉴관리
        * 메뉴(경로)	︰ 관리자 > 메뉴관리 > 메뉴관리
        * 화면 설명	︰ SPP 기본 메뉴관리 화면
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
        this.objApp = nexacro.getApplication();
        this.nLastRow = 0;	// 사용자정보 dataset 마지막 rowposition
        this.nSelRow = -1;	// 이동하려는 행
        this.rowChangeFlag = false;		// true: 행변경 가능

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
        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearchMenuCd();	// 검색조건 메뉴구분 조회
        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'TOP_MENU_ID', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'SVC_TYPE_CD', '');

        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsFommMenuMt) )
        	{
        		var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01();
        }

        this.fnSearchMenuCd = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_MENU_ID', '0');
        	// transaction
        	var sTranId = "selectMenuCd";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0140W/select02";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMenuCd=dsFommMenuMt";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch01 = function()
        {
        	this.dsFommMenuMt.clearData();

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0140W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMenuTree=dsMenuTree";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 메뉴 목록 조회
        this.fnSearch02 = function()
        {
        	// grid foramt setting
        	var menuLvl = this.dsMenuTree.getColumn(this.dsMenuTree.rowposition, 'MENU_LVL');
        	if( menuLvl == 0 )		// 최상단: 업무구분 표기
        		this.grdMenuMt.set_formatid('includeMenuSvc');
        	else if (menuLvl == 2 )		// 레벨2: 메뉴 파라미터 표기
        		this.grdMenuMt.set_formatid('includeMenuParam');
        	else
        		this.grdMenuMt.set_formatid('default');

        	var sTranId = "select02";
            var sService = "FOMM0140W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommMenuMt=dsFommMenuMt";
            var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0140W/save01";
            var sInDs = "dsFommMenuMt=dsFommMenuMt:U dsCond=dsCond";
            var sOutDs = "dsMenuTree=dsMenuTree";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

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
        		case "selectMenuCd" :
        			// 조회용 inner dataset option 처리
        			var rowPos = this.dsMenuCd.setInsertRow(0);
        			this.dsMenuCd.setColumn(rowPos, 'MENU_LVL', '1');
        			this.dsMenuCd.setColumn(rowPos, 'MENU_ID', '');
        			this.dsMenuCd.setColumn(rowPos, 'MENU_NM', Ex.core.word('- 전체 -') );
        			break;

        		case "select01" :

        // 		var nRow = this.dsSvcTypeCdAll.findRow('CMM_CD',this.dsCond.getColumn(0,'SVC_TYPE_CD'));
        // 		var nRow2 = this.dsMenuCd.findRow('MENU_ID',this.dsCond.getColumn(0,'TOP_MENU_ID'));
        //
        // 			if(Ex.isEmpty(this.dsCond.getColumn(0,'SVC_TYPE_CD'))){
        // 				this.stcTreeTitle00.set_text(' (메뉴구분 : ' + this.dsMenuCd.getColumn(nRow2,'MENU_NM').replaceAll('-','') + ')');
        // 			}
        // 			else if(Ex.isEmpty(this.dsCond.getColumn(0,'TOP_MENU_ID'))){
        // 				this.stcTreeTitle00.set_text(' (업무구분 : ' + this.dsSvcTypeCdAll.getColumn(nRow,'CMM_CD_NM').replaceAll('-','') + ')');
        // 			}
        			Ex.core.toast(this, "10002");
        			break;

        		case "select02" :
        			this.grdMenuMt.setCellProperty("Head", this.grdMenuMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			this.dsMenuTree.set_rowposition(this.nLastRow);
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{

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
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.nLastRow = this.dsMenuTree.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsMenuTree.set_rowposition(this.nSelRow);
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdMenuMt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];		// 추가
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'SVC_TYPE_CD',			'SVC_TYPE_CD',			'MENU_PARAM_CD']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD',				'CMM_CD',				'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL',		'ALL',					'SEL',					'SEL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',					'Y',					'Y']			// 사용여부
        		,filter	: ['',			'',						'',						'']				// filterStr
        		,objDs	: [this.dsYnCd,	this.dsSvcTypeCdAll,	this.dsSvcTypeCdSel,	this.dsMenuParamCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsFommMenuMt) )
        		return false;

        	// Grid Validation
        	if( !this.grdMenuMt.checkValidate() )
        		return false;

        	return true;
        }

        this.fnAddMenu = function()
        {
        	var upMenuId = this.dsMenuTree.getColumn(this.dsMenuTree.rowposition, 'MENU_ID');
        	var menuLvl  = this.dsMenuTree.getColumn(this.dsMenuTree.rowposition, 'MENU_LVL')||'0';

        	if( menuLvl == 3) {
        		var oParam = {
        			id : "aMenuLvlAlert"
        		  , msg : "10015"
        		  , arrparam : [Ex.core.word('하위메뉴')]
        		  , msgtype : "I"
        		};
        		Ex.core.alert(this, oParam);
        		return;
        	}

        	var rowPos = this.dsFommMenuMt.setInsertRow(this.dsFommMenuMt.rowposition+1);
        	this.dsFommMenuMt.setColumn(rowPos, 'UP_MENU_ID', upMenuId);
        	this.dsFommMenuMt.setColumn(rowPos, 'USE_YN', 'Y');
        	this.dsFommMenuMt.setColumn(rowPos, 'MENU_LVL', (parseInt(menuLvl)+1));
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAdd' :
        			this.fnAddMenu();
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsFommMenuMt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var param = {	id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };


        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };



        this.dsMenuTree_canrowposchange = function(obj,e)
        {
        if( Ex.util.isUpdated(this.dsFommMenuMt) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {	id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}

        	return true;
        };


        this.dsMenuTree_onrowposchanged = function(obj,e)
        {
        	this.dsFommMenuMt.clearData();

        	var menuId 	= obj.getColumn(e.newrow, 'MENU_ID');
        	var menuNM 	= obj.getColumn(e.newrow, 'MENU_NM');

        	// Grid title 처리
        	this.stcMenuTitle.set_text('[' + menuNM + '] ' + Ex.core.word('하위메뉴') + ' ' + Ex.core.word('목록') );
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcMenuTitle.text, this.stcMenuTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 25;
        	this.stcCnt.set_left(this.stcMenuTitle.getOffsetLeft() + nWidth);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_MENU_ID', menuId);
        	this.fnSearch02();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };



        this.grdMenuMt_onexpandup = function(obj,e)
        {
        	if(e.row < 0)	return;
        	if( this.dsFommMenuMt.getColumn(e.row, 'ROWFLAG') == 'I' ) {
        		var oParam = {
        			id : "rowFlagIAlert"
        		  , msg : "저장 후 사용 가능합니다."
        		  , arrparam : []
        		  , msgtype : "I"
        		};
        		Ex.core.alert(this, oParam);
        		return;
        	}

        	Ex.core.popup(
        		this,						// <--- 팝업 실행 스코프
        		"modalpop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"fomm::FOMM0000_P03.xfdl",	// <--- 팝업창 오픈 Url
        		{
        			title : "도움말",
        			pMenuId	: this.dsFommMenuMt.getColumn(e.row, 'MENU_ID'),
        			pMenuNm	: this.dsFommMenuMt.getColumn(e.row, 'MENU_NM'),
        		},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        	);
        };

        // this.fmCommOnitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        // {
        // 	trace(obj.id);
        // 	if(obj.id == 'cboMenuDIv') {
        // 		this.dsCond.setColumn(0,'SVC_TYPE_CD','');
        // 		this.divSearchArea.form.cboSvcTypeCd.set_index(0);
        // 	}
        // 	if(obj.id == 'cboSvcTypeCd'){
        // 		this.dsCond.setColumn(0,'TOP_MENU_ID','');
        // 		this.divSearchArea.form.cboMenuDIv.set_index(1);
        // 	}
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboMenuDIv.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboMenuDIv.addEventHandler("onitemchanged",this.fmCommOnitemchanged,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtMenuNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcTypeCd.addEventHandler("onitemchanged",this.fmCommOnitemchanged,this);
            this.grdMenuMt.addEventHandler("onexpandup",this.grdMenuMt_onexpandup,this);
            this.grdMenuMt.addEventHandler("oncellclick",this.grdMenuMt_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommMenuMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsMenuTree.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsMenuTree.addEventHandler("onrowposchanged",this.dsMenuTree_onrowposchanged,this);
            this.dsMenuTree.addEventHandler("canrowposchange",this.dsMenuTree_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM0140_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
