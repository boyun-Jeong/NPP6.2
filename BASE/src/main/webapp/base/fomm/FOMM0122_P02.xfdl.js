(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SV0110_P02");
            this.set_titletext("사용자권한해지");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtdCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthHisList", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_HT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ACT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","119",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"10","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdData","21.00","160",null,null,"20","19",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"116\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"권한 그룹\"/><Cell col=\"7\" text=\"역할ID\"/><Cell col=\"8\" text=\"역할\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:USER_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" text=\"bind:AUTH_GB_NM\"/><Cell col=\"7\" text=\"bind:AUTH_ID\"/><Cell col=\"8\" text=\"bind:AUTH_NM\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00","21.00","131","100","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("권한 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt00","stcGrdTitle00:17.00","133","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","19.00","88",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00","2.06%","88","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("신청서번호");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser","stcRqstr00:5","94",null,"24","618",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("group1");
            obj.set_readonly("true");
            obj.set_validation("신청서번호;NULL");
            obj.set_validationCheckReadonly("false");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSearchSr","edtReqUser:-3.00","94",null,"24","595",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00_00","21.00","61","100","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("권한 해지");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20.00","10",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20",null,null,"0",null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","305.00","13","10","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","75","24","10",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcRecUsr","20.00","14","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divOutUserReg","stcRecUsr:5","14","221","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcRecUsr00","Static00_00_00_00:0","14","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("그룹유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Radio("rdoSndYn","stcRecUsr00:0","14","160","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_enableevent("true");
            obj.set_validationCheckReadonly("false");
            var divSearchArea_form_rdoSndYn_innerdataset = new nexacro.NormalDataset("divSearchArea_form_rdoSndYn_innerdataset", obj);
            divSearchArea_form_rdoSndYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">권한그룹</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">확장그룹</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea_form_rdoSndYn_innerdataset);
            obj.set_value("Y");
            obj.set_index("-1");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcRecUsr00_00","rdoSndYn:0","14","50","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("역할");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAuthId","stcRecUsr00_00:5.00","14","154","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCommCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_type("caseifilterlike");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"14","90","24","btnSearch:5",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divOutUserReg
            obj = new Layout("default","",0,0,this.divSearchArea.form.divOutUserReg.form,function(p){});
            this.divSearchArea.form.divOutUserReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSearchArea.form.divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.stcBg01_00","value","dsCond","REV_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divContent.form.divInfo.form.edtReqUser02","value","dsChklstInfo","GRD_CHKLST_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divContent.form.divInfo.form.edtReqUser02_00","value","dsChklstInfo","GRD_TEAM_CHKLST_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearchArea.form.divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearchArea.form.divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearchArea.form.divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearchArea.form.divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearchArea.form.rdoSndYn","value","dsCond","AUTH_GRP_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearchArea.form.cboAuthId","value","dsCond","AUTH_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContent.form.edtReqUser","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0122_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SV0110_P02
        * 화면(명)		︰ 서버선택팝업(공통)
        * 메뉴(경로)		︰ 공통
        * 화면 설명		︰ 서버선택팝업
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.05.30
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2024.05.30	JBY			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	pGridFormats	: 선택 목록에 사용될 그리드 포맷
        	pGridInnerDsArr	: 선택 목록 그리드에 콤보 InnerDataset Object Array
        	pDsData			: 선택 목록 그리드 Bind Dataset Object
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
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.divContent.form.grdData.displayRowType();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	this.divSearchArea.form.divOutUserReg.form.resetInput();
         	this.dsCond.setColumn(0, 'AUTH_GRP_GB', "G");
         	this.dsCond.setColumn(0, "AUTH_ID", "");
         	this.dsCond.setColumn(0, "REQ_ID", "");

        }
        // 조회 권한리스트
        this.fnSearchList = function()
        {
        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select04";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회 권한 코드
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select02";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAuthCd=dsAuthCd dsExtdCd=dsExtdCd";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }
        // 저장
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/save01";	// 서비스명
            var sInDs = "dsAuthHisList=dsAuthHisList";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";		// 서버에서 수신할 데이타셋
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
        		case "select02" :
        			//Ex.core.toast(this, "10002");
        			this.dsCommCd.clear();
        			this.dsCommCd.copyData(this.dsAuthCd,true);
        			this.dsCommCd.insertRow(0);
        			this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 전체 -");
        			this.divSearchArea.form.cboAuthId.set_index(0);
        			break;
        		case "save01" :
        			Ex.core.pclose(this, true);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO selReqPop
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue)
        		return;

        	switch(pID)
        	{
        		case "selReqPop" :
        			this.dsReq.loadXML(varValue);
        			this.dsCond.setColumn(0,'REQ_ID',this.dsReq.getColumn(0,'REQ_ID'));
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO selReqPop
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			trace(" varValue >>>> " + varValue);
        			var nRow = 0;
        			if(varValue)
        			{	this.dsAuthHisList.clearData();
        				for(var i = 0 ; i < this.dsData.rowcount ; i++)
        				{
        					if(this.dsData.getColumn(i,'CHK') == 1)
        					{
        						this.dsAuthHisList.addRow();
        						this.dsAuthHisList.setColumn(nRow,'USER_ID',this.dsData.getColumn(i,'USER_ID'));
        						this.dsAuthHisList.setColumn(nRow,'USER_NM',this.dsData.getColumn(i,'USER_NM'));
        						this.dsAuthHisList.setColumn(nRow,'AUTH_ID',this.dsData.getColumn(i,'AUTH_ID'));
        						this.dsAuthHisList.setColumn(nRow,'AUTH_NM',this.dsData.getColumn(i,'AUTH_NM'));
        						this.dsAuthHisList.setColumn(nRow,'AUTH_GRP_GB',this.dsData.getColumn(i,'AUTH_GRP_GB'));
        						this.dsAuthHisList.setColumn(nRow,'AUTH_ACT_GB','D');
        						this.dsAuthHisList.setColumn(nRow,'REQ_ID',this.dsCond.getColumn(0,'REQ_ID'));
        						this.dsAuthHisList.setColumn(nRow,'DEPT_ID',this.dsData.getColumn(i,'DEPT_ID'));
        						this.dsAuthHisList.setColumn(nRow,'DEPT_NM',this.dsData.getColumn(i,'DEPT_NM'));
        						this.dsAuthHisList.setColumn(nRow,'ROWFLAG','D');
        						nRow++;
        					}
        				}

        				this.fnSave();
        				//Ex.core.pclose(this, this.dsData.saveXML());
        			}
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        //	this.fnGetCmmCd();

        	this.fnSearchReset();	// 검색조건 초기화

        	//this.fnSearchList();	// 검색
        	this.fnSearch();	// 검색


        	// 버튼&권한 mapping && visible 처리
        	var	arrBtn = [this.divBottom.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        	// 버튼 영역 div align 처리
        //	Ex.util.setBtnAlign(this.divBottom, 'right', true);
        }



        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        // 	var oParam = {
        // 		upCmmCd : ['CI_TYPE_CD',	'CI_TYPE_CD'		]	// 조회할 상위코드
        // 		,codeDiv: ['SVC_MNG_CD',	'SVC_MNG_CD'		]	// 조회할 코드의 업무구분
        // 		,optStr	: ['ALL',			''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        // 		,useYn	: ['Y',				'Y'					]	// 사용여부
        // 		,filter	: ['',				''					]	// filterStr
        // 		,objDs	: [this.dsCiTypeCd, this.dsCiTypeCdGrid	]	// copy dataset
        // 	}
        // 	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {

        	this.deptChangedCallBack(compId, dsRtnObj);

        }

        this.deptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divOutUserReg")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "USER_ID",	"");
        			this.dsCond.setColumn(0, "USER_NM",	"");
        		}
        	}


        }

        this.fnCheckValidate = function()
        {
        	var chkCount = 0;
        	// 필수값 체크
        	if( !Ex.util.checkValidate(this.divContent, "group1") ) return false;
        	// Grid Validation
        	if( this.dsData.rowcount < 1 )
        	{
        		var param = {
        				id : "alert_selUserAdd"
        			  , msg : "권한목록을 추가해주세요."
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	// 권한 중복체크
        	for(var i = 0 ; i < this.dsData.rowcount ; i++)
        	{	if(this.dsData.getColumn(i,'CHK') == 1)
        		{
        			chkCount++;
        		}
        	}
        	if(chkCount == 0)
        	{
        		var param = {
        				id : "alert_selUserDupl"
        			  , msg : "체크된 항목이 없습니다."
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
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
        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :		// 검색

        // 			if(Ex.isEmpty(this.dsCond.getColumn(0,'USER_ID'))) {
        // 				var param = {
        // 						id : "alert_select"
        // 					  , msg : "사용자 또는 그룹유형,역할 선택 후 조회할 수 있습니다."
        // 					  , arrparam : [Ex.core.word('사용자')]
        // 					  , msgtype : "I"};
        // 				Ex.core.alert(this, param);
        // 				return;
        // 			}
        			this.fnSearchList();	// 검색
        			break;


        		case "btnSave" :			// 선택
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
        					  , msg : "권한 해지하시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}

        			break;
        		case "btnSearchSr" : //요청서 가져오기
        			Ex.core.popup(
        					this,
        					'selReqPop',
        					"sr::SR0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        						{
        							title		: Ex.core.word('신청서ID') + ' ' + Ex.core.word('선택'),
        							pSvCTmplatId : 'WFT240071'
        						},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=1320,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        				);
        				return;
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

        this.grdOnCellClick = function(obj,e)
        {
        	if(obj.id == "grdData")
        	{
        		obj.dropdownCombo();
        	}
        };


        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        this.divSearchArea_rdoSndYn_onitemchanged = function(obj,e)
        {
        	this.dsCommCd.clear();
        	if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'G')
        	{
        		this.dsCommCd.copyData(this.dsAuthCd,true);
        	}else if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'X')
        	{
        		this.dsCommCd.copyData(this.dsExtdCd,true);
        	}else
        	{

        	}
        	this.dsCommCd.insertRow(0);
        	this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 전체 -");
        	this.divSearchArea.form.cboAuthId.set_index(0);
        	this.dsCond.setColumn(0,"AUTH_ID",'');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdData.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContent.form.btnSearchSr.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.stcRecUsr.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.stcRecUsr00.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.rdoSndYn.addEventHandler("onitemchanged",this.divSearchArea_rdoSndYn_onitemchanged,this);
            this.divSearchArea.form.stcRecUsr00_00.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.cboAuthId.addEventHandler("onitemchanged",this.onitemchanged,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsAuthCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsExtdCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsCommCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsReq.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsReq.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsReq.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsAuthHisList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0122_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
