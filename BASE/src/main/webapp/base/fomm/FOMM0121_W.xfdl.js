(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0120_W");
            this.set_titletext("권한그룹관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EXTD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXTD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXTD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtdAuthMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtdAuthUserDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtdAuthDeptDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCdSel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthTypeCdSel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("staAuthId","20","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("확장권한명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtAuthId","99","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","239","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserNm00","269.00","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","337.00","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_readonly("false");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdExtdAuthMt","0","104",null,null,"40%","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsExtdAuthMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"450\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" text=\"확장권한코드\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"확장권한명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:EXTD_ID\" edittype=\"expr:ROWFLAG==&apos;I&apos;? &apos;normal&apos; : &apos;none&apos;\" validation=\"그룹코드;NULL||MAX_LEN_UTF8:50\"/><Cell col=\"4\" text=\"bind:EXTD_NM\" edittype=\"text\" validation=\"확장권한명;NULL||MAX_LEN_UTF8:50\"/><Cell col=\"5\" text=\"bind:USE_YN\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCdSel\" displaytype=\"combotext\" edittype=\"combo\" validation=\"사용여부;NULL\"/></Band></Format></Formats>");
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

            obj = new Div("divDeptTopBtn",null,"374","200","25","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteDept",null,"0","60",null,"0","0",null,null,null,null,this.divDeptTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divDeptTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddDept",null,"0","60",null,"65","0",null,null,null,null,this.divDeptTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divDeptTopBtn.addChild(obj.name, obj);

            obj = new Div("divUserTopBtn",null,"70","200","25","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteUser",null,"0","60",null,"0","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"0","60",null,"65","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdExtdUserDt","grdExtdAuthMt:20","104",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsExtdAuthUserDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"171\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"내선\"/><Cell col=\"6\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NM\"/><Cell col=\"4\" text=\"bind:ROLE_NM\"/><Cell col=\"5\" text=\"bind:TELNUM\"/><Cell col=\"6\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdExtdAuthMt:0","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserTitle","grdExtdAuthMt:20.00","70","350","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[권한그룹] 사용자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divAuthTopBtn",null,"70","200","25","40%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteExtdAuth",null,"0","60",null,"0","0",null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddExtdAuth",null,"0","60",null,"65","0",null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDownAuth",null,"0","60","24","130",null,null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Static("stcAuthTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("확장권한 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","126.00","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsExtdAuthMt");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntUserDt","1311.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsExtdAuthUserDt");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExtdDeptDt","grdExtdAuthMt:20","grdExtdUserDt:55",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsExtdAuthDeptDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"170\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"부서장\"/><Cell col=\"5\" text=\"상위부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:DEPT_MANAGER_NM\"/><Cell col=\"5\" text=\"bind:UP_DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","1124.00","354",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcDeptTItle","grdExtdAuthMt:20.00","grdExtdUserDt:20","331","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("[권한그룹] 부서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntDeptDt","1294.00","374","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsExtdAuthDeptDt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1124.00","399",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDeptTopBtn.form
            obj = new Layout("default","",0,0,this.divDeptTopBtn.form,function(p){});
            this.divDeptTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUserTopBtn.form
            obj = new Layout("default","",0,0,this.divUserTopBtn.form,function(p){});
            this.divUserTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAuthTopBtn.form
            obj = new Layout("default","",0,0,this.divAuthTopBtn.form,function(p){});
            this.divAuthTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtAuthId","value","dsCond","EXTD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboAdminYn","value","dsCond","ADMIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboAuthTypeCd","value","dsCond","AUTH_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0121_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0120_W
        * 화면(명)		︰ 확장권한 관리
        * 메뉴(경로)	︰ 관리자 > 권한관리 > 확장권한 관리
        * 화면 설명	︰ SPP 확장 권한 관리 화면
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.30
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.30	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
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
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsExtdAuthMt) ||
        		Ex.util.isUpdated(this.dsExtdAuthUserDt) ||
        		Ex.util.isUpdated(this.dsExtdAuthDeptDt) )
        	{
        		var param = {
        						id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_ID', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_GB', '00');

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0121W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsExtdAuthMt=dsExtdAuthMt";       // 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 확장권한별 사용자 목록 조회
        this.fnSearchAuthUser = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_GB', '10');

        	var sTranId = "select02";
            var sService = "FOMM0121W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsExtdAuthUserDt=dsExtdAuthUserDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 확장권한별 부서 목록 조회
        this.fnSearchAuthDept = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_GB', '20');

        	var sTranId = "select03";
            var sService = "FOMM0121W/select03";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsExtdAuthDeptDt=dsExtdAuthDeptDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0121W/save01";
            var sInDs = "dsExtdAuthMt=dsExtdAuthMt:U dsExtdAuthUserDt=dsExtdAuthUserDt:U dsExtdAuthDeptDt=dsExtdAuthDeptDt:U dsCond=dsCond";
            var sOutDs = "dsExtdAuthMt=dsExtdAuthMt";
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			this.grdExtdAuthMt.setCellProperty("Head", this.grdExtdAuthMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select02" :
        			this.grdExtdUserDt.setCellProperty("Head", this.grdExtdUserDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select03" :
        			this.grdExtdDeptDt.setCellProperty("Head", this.grdExtdDeptDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.dsExtdAuthMt.set_rowposition(this.nLastRow);
        			this.grdExtdAuthMt.setCellProperty("Head", this.grdExtdAuthMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			this.grdExtdUserDt.setCellProperty("Head", this.grdExtdUserDt.getBindCellIndex('Body', 'CHK'), "text", "0");
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
        		case "selectUserPop" :
        			if( Ex.isEmpty(varValue) )
        				return;

        			this.dsSelUser.loadXML(varValue);

        			// 중복 validation
        			var selUserId = this.dsSelUser.getColumn(0, 'USER_ID');
        			var duplRow = this.dsExtdAuthUserDt.findRow('USER_ID', selUserId);
        			if( duplRow >= 0) {
        				var param = {
        						id : "alert_selUserDupl"
        					  , msg : "10005"
        					  , arrparam : [Ex.core.word('사용자')]
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}
        			for(var i = 0 ; i < this.dsSelUser.rowcount ; i++ ) {
        				var rowPos = this.dsExtdAuthUserDt.setInsertRow(this.dsExtdAuthUserDt.rowposition+1);
        				this.dsExtdAuthUserDt.setCopyRow(rowPos, this.dsSelUser, i);
        			}
        			break;

        		case "selectDeptPop" :
        			if( Ex.isEmpty(varValue) )
        				return;

        			this.dsSelDept.loadXML(varValue);

        			// 중복 validation
        			var selDeptCd = this.dsSelDept.getColumn(0, 'DEPT_CD');
        			var duplRow = this.dsExtdAuthDeptDt.findRow('DEPT_CD', selDeptCd);
        			if( duplRow >= 0) {
        				var param = {
        						id : "alert_selDeptDupl"
        					  , msg : "10005"
        					  , arrparam : [Ex.core.word('부서')]
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}

        			for(var i = 0 ; i < this.dsSelDept.rowcount ; i++ ) {
        				var rowPos = this.dsExtdAuthDeptDt.setInsertRow(this.dsExtdAuthDeptDt.rowposition+1);
        				this.dsExtdAuthDeptDt.setCopyRow(rowPos, this.dsSelDept, i);
        			}

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
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.nLastRow = this.dsExtdAuthMt.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSetDatasetDt();	// 권한 추가 전 dataset data setting
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsExtdAuthMt.set_rowposition(this.nSelRow);
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
        	this.grdExtdAuthMt.displayRowType();
        	this.grdExtdUserDt.displayRowType();
        	this.grdExtdDeptDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	// 사용자 목록
        	var arrBtn = [this.divAuthTopBtn.form.btnAddExtdAuth, this.divUserTopBtn.form.btnAddUser];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divAuthTopBtn.form.btnDeleteExtdAuth, this.divUserTopBtn.form.btnDeleteUser];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        	// 부서 목록
        	var arrBtn = [this.divAuthTopBtn.form.btnAddExtdAuth, this.divDeptTopBtn.form.btnAddDept];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divAuthTopBtn.form.btnDeleteExtdAuth, this.divDeptTopBtn.form.btnDeleteDept];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        		arrBtn = [this.divAuthTopBtn.form.btnExcelDownAuth];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divAuthTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divUserTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divDeptTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'YN_CD']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'SEL']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']		// 사용여부
        		,filter	: ['',			'']			// filterStr
        		,objDs	: [this.dsYnCd,	this.dsYnCdSel]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {	//확장권한코드 중복체크
        	for(var i = 0 ; i < this.dsExtdAuthMt.rowcount ; i++ ){
        	var ExtdIdCheck = 0;
        		if(this.dsExtdAuthMt.getColumn(i,"ROWFLAG") == 'I'){
        			for(var j = 0 ; j < this.dsExtdAuthMt.rowcount ; j++ ){
        				if(this.dsExtdAuthMt.getColumn(i,"EXTD_ID") == this.dsExtdAuthMt.getColumn(j,"EXTD_ID")){
        					ExtdIdCheck++;
        				}
        			}
        			if(ExtdIdCheck > 1){
        				var param = {id : "alert_ExtdId"  , msg : "10005"  , arrparam : [Ex.core.word('확장권한코드')]  , msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}
        		}
        	}
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsExtdAuthMt) &&
        		!Ex.util.isUpdated(this.dsExtdAuthUserDt) &&
        		!Ex.util.isUpdated(this.dsExtdAuthDeptDt) )
        		return false;

        	// Grid Validation
        	if( !this.grdExtdAuthMt.checkValidate() )
        		return false;

        	return true;
        }

        this.fnSetDatasetDt = function()
        {
        	var extdId = this.dsExtdAuthMt.getColumn(this.dsExtdAuthMt.rowposition, 'EXTD_ID');
        	var extdNm = this.dsExtdAuthMt.getColumn(this.dsExtdAuthMt.rowposition, 'EXTD_NM');

        	this.dsExtdAuthUserDt.set_enableevent(false);
        	this.dsExtdAuthUserDt.set_filterstr("ROWFLAG=='U' || ROWFLAG == 'I'");
        	for(var i = 0; i < this.dsExtdAuthUserDt.rowcount; i++) {
        		this.dsExtdAuthUserDt.setColumn(i, 'EXTD_ID', extdId);
        		this.dsExtdAuthUserDt.setColumn(i, 'EXTD_NM', extdNm);
        		this.dsExtdAuthUserDt.setColumn(i, 'EXTD_GB', "10");
        		this.dsExtdAuthUserDt.setColumn(i, 'USE_YN',  "Y");
        	}
        	this.dsExtdAuthUserDt.set_filterstr('');
        	this.dsExtdAuthUserDt.set_enableevent(true);

            this.dsExtdAuthDeptDt.set_enableevent(false);
        	this.dsExtdAuthDeptDt.set_filterstr("ROWFLAG=='U' || ROWFLAG == 'I'");
        	for(var i = 0; i < this.dsExtdAuthDeptDt.rowcount; i++) {
        		this.dsExtdAuthDeptDt.setColumn(i, 'EXTD_ID', extdId);
        		this.dsExtdAuthDeptDt.setColumn(i, 'EXTD_NM', extdNm);
        		this.dsExtdAuthDeptDt.setColumn(i, 'EXTD_GB', "20");
        		this.dsExtdAuthDeptDt.setColumn(i, 'USE_YN',  "Y");
        	}
        	this.dsExtdAuthDeptDt.set_filterstr('');
        	this.dsExtdAuthDeptDt.set_enableevent(true);
        }


        this.fnAddAuth = function()
        {
        	var rowPos = this.dsExtdAuthMt.setInsertRow(this.dsExtdAuthMt.rowposition+1);
        	this.dsExtdAuthMt.setColumn(rowPos, 'EXTD_ID', '');
        	this.dsExtdAuthMt.setColumn(rowPos, 'EXTD_GB', '00');
        	this.dsExtdAuthMt.setColumn(rowPos, 'USE_YN', 'Y');
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

        		case 'btnAddExtdAuth' : 	// 권한 그리드 추가
        			this.fnAddAuth();
        			break;
        		case 'btnDeleteExtdAuth' :	// 권한 그리드 삭제
        			this.fnDelete(this.dsExtdAuthMt);
        			break;
        		case 'btnExcelDownAuth' :	// 권한 목록 엑셀 다운
        			var oInfo = {
           				Grid	: this.grdExtdAuthMt,
           				Sheet	: '권한그룹',
           				FileNm	: "SPP_권한그룹",
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case 'btnAddUser' :	// 사용자 그리드 추가
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;
        		case 'btnDeleteUser' :	// 사용자 그리드 삭제
        			this.fnDelete(this.dsExtdAuthUserDt);
        			break;

        		case 'btnAddDept' :	// 부서 그리드 추가
        			var pSelType = 'S';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectDeptPop',
        							"fomm::FOMM0000_P06.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('부서 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							//"width=440,height=580"                  // <--- width/height/modeless(프레임 처리 옵션)
        							"autosize"
        				  );
        			break;
        		case 'btnDeleteDept' :	// 부서 그리드 삭제
        			this.fnDelete(this.dsExtdAuthDeptDt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
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

        this.dsExtdAuthMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsExtdAuthUserDt) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {
        						id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}

        	return true;
        };


        this.dsExtdAuthMt_onrowposchanged = function(obj,e)
        {
        	this.dsExtdAuthUserDt.clearData();

        	var extdId 	= obj.getColumn(e.newrow, 'EXTD_ID');
        	var extdNm 	= obj.getColumn(e.newrow, 'EXTD_NM')||Ex.core.word('새 권한그룹');

        	// Grid title 처리
        	this.stcUserTitle.set_text('[' + extdNm + '] ' + Ex.core.word('사용자 목록') );
        	this.stcDeptTItle.set_text('[' + extdNm + '] ' + Ex.core.word('부서 목록') );
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcUserTitle.text, this.stcUserTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntUserDt.set_left(this.stcUserTitle.getOffsetLeft() + nWidth);
        	objSize = nexacro.getTextSize(this.stcDeptTItle.text, this.stcDeptTItle._getCurrentStyleInheritValue("font"));
        	nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntDeptDt.set_left(this.stcDeptTItle.getOffsetLeft() + nWidth);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_ID', extdId);
        	this.fnSearchAuthUser();
        	this.fnSearchAuthDept();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.edtAuthId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboUseYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDeptTopBtn.form.btnDeleteDept.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDeptTopBtn.form.btnAddDept.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnDeleteUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnAddUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnDeleteExtdAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnAddExtdAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnExcelDownAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsExtdAuthMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsExtdAuthMt.addEventHandler("canrowposchange",this.dsExtdAuthMt_canrowposchange,this);
            this.dsExtdAuthMt.addEventHandler("onrowposchanged",this.dsExtdAuthMt_onrowposchanged,this);
            this.dsExtdAuthUserDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsExtdAuthDeptDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0121_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
