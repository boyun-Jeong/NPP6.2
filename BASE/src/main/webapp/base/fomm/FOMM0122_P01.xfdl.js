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
            this.set_titletext("사용자권한등록");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(875,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXTD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
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


            obj = new Dataset("dsFommAuthUserDt", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthHisList", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_HT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ACT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDupl", this);
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
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","69",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"10","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdData","21.00","115",null,null,"20","19",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFommAuthUserDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"48\"/><Column size=\"99\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"행상태\"/><Cell col=\"4\" text=\"사번\"/><Cell col=\"5\" text=\"이름\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:ROWFLAG\"/><Cell col=\"4\" text=\"bind:USER_ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:USER_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:POS_NM\"/><Cell col=\"7\" text=\"bind:DEPT_NM\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_CD\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00","21.00","86","100","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt00","stcGrdTitle00:17.00","88","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthUserDt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","19.00","38",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00","2.06%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청서번호");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00","34.06%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("그룹유형");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00_00","64.46%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("역할");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboAuthId","stcRqstr00_00_00:3.00","44",null,"24","27",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCommCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group1");
            obj.set_validation("역할;NULL");
            obj.set_type("caseifilterlike");
            obj.set_index("-1");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Radio("rdoAuth","stcRqstr00_00:4.00","44",null,"24","stcRqstr00_00_00:6",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_enableevent("true");
            obj.set_validationCheckReadonly("false");
            var divContent_form_rdoAuth_innerdataset = new nexacro.NormalDataset("divContent_form_rdoAuth_innerdataset", obj);
            divContent_form_rdoAuth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">권한그룹</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">확장그룹</Col></Row></Rows>");
            obj.set_innerdataset(divContent_form_rdoAuth_innerdataset);
            obj.set_value("Y");
            obj.set_index("0");
            obj.set_text("권한그룹");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcRqstr00:3.00","44",null,"24","608",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("group1");
            obj.set_readonly("true");
            obj.set_validation("요청서번호;NULL");
            obj.set_validationCheckReadonly("false");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSearchSr","edtReqId:0","44","26","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00_00","21.00","11","100","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_text("권한 등록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divUserTopBtn",null,"88","200","25","21",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDeleteUser",null,"0","95",null,"0","0",null,null,null,null,this.divContent.form.divUserTopBtn.form);
            obj.set_taborder("4");
            obj.set_text("사용자 삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divContent.form.divUserTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"0","95",null,"btnDeleteUser:5","0",null,null,null,null,this.divContent.form.divUserTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("사용자 추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divContent.form.divUserTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divUserTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divUserTopBtn.form,function(p){});
            this.divContent.form.divUserTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",875,500,this,function(p){});
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

            obj = new BindItem("item9","divContent.form.rdoAuth","value","dsCond","AUTH_GRP_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.cboAuthId","value","dsCond","AUTH_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0122_P01.xfdl", function() {
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

        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        // 	this.dsCond.setColumn(this.dsCond.rowposition, 'ARR_CI_TYPE_CD', "10SV0000");
         	this.dsCond.setColumn(0, "AUTH_GRP_GB", "G");
        // 	this.dsCond.setColumn(0, "MAIN_IP", "");
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAuthCd=dsAuthCd dsExtdCd=dsExtdCd";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회(권한 중복체크)
        this.fnSearchAuthDupl = function()
        {
        	var sService = '';
        	var sOutDs = "";

        	// transaction
        	trace(">>>>>" + this.dsCond.getColumn(0,'AUTH_GRP_GB'));
        	if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'G') //권한그룹
        	{
        		this.dsCond.setColumn(0,'SEL_AUTH_ID',this.dsCond.getColumn(0,'AUTH_ID'));
        		sService = "FOMM0120W/select02";
        		sOutDs = "dsAuthDupl=dsFommAuthUserDt";
        	}
        	else // 확장권한
        	{
        		this.dsCond.setColumn(0,'EXTD_ID',this.dsCond.getColumn(0,'AUTH_ID'));
        		sService = "FOMM0121W/select02";
        		sOutDs = "dsAuthDupl=dsExtdAuthUserDt";
        	}


        	var sTranId = "SearchAuthDupl";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            //var sService = "FOMM0120W/select02";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            //var sOutDs = "dsAuthDupl=dsFommAuthUserDt";		// 서버에서 수신할 데이타셋
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
        				//Ex.core.toast(this, "10002");
        			this.dsCommCd.clear();
        			this.dsCommCd.copyData(this.dsAuthCd,true);
        			this.dsCommCd.insertRow(0);
        			this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 선택 -");
        			this.divContent.form.cboAuthId.set_index(0);
        			break;
        		case "save01" :
        			Ex.core.pclose(this, true);
        			break;

        		case "SearchAuthDupl" :
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
        					  , msg : "권한 등록하시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
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
        			break
        		case "selectUserPop" :
        			this.dsUserList.loadXML(varValue);
        			// 중복 validation
        			for(var i = 0 ; i < this.dsUserList.rowcount ; i++)
        			{
        				var selUserId = this.dsUserList.getColumn(i, 'USER_ID');
        				var duplRow = this.dsFommAuthUserDt.findRow('USER_ID', selUserId);
        				if( duplRow >= 0) {
        					var param = {
        							id : "alert_selUserDupl"
        						  , msg : "10005"
        						  , arrparam : [Ex.core.word('사용자')]
        						  , msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}
        				var rowCount = nexacro.toNumber((this.dsFommAuthUserDt.rowposition)+1)
        				var rowPos = this.dsFommAuthUserDt.setInsertRow(rowCount);
        				this.dsFommAuthUserDt.setCopyRow(rowPos, this.dsUserList, i);
        				this.dsFommAuthUserDt.setColumn(rowPos,'CHK',0);
        			}
        			break

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
        		case "saveConfirm" :
        			if(varValue)
        			{	this.dsAuthHisList.clearData();
        				for(var i = 0 ; i < this.dsFommAuthUserDt.rowcount ; i++)
        				{
        					//if(this.dsFommAuthUserDt.getColumn(i,'CHK') == 1)
        					//{
        						this.dsAuthHisList.addRow();
        						this.dsAuthHisList.setColumn(i,'USER_ID',this.dsFommAuthUserDt.getColumn(i,'USER_ID'));
        						this.dsAuthHisList.setColumn(i,'USER_NM',this.dsFommAuthUserDt.getColumn(i,'USER_NM'));
        						this.dsAuthHisList.setColumn(i,'AUTH_ID',this.dsCond.getColumn(0,'AUTH_ID'));
        						this.dsAuthHisList.setColumn(i,'AUTH_NM',this.dsCommCd.getColumn(this.dsCommCd.findRow('CMM_CD',this.dsCond.getColumn(0,'AUTH_ID')),'CMM_CD_NM'));
        						this.dsAuthHisList.setColumn(i,'AUTH_GRP_GB',this.dsCond.getColumn(0,'AUTH_GRP_GB'));
        						this.dsAuthHisList.setColumn(i,'AUTH_ACT_GB','A');
        						this.dsAuthHisList.setColumn(i,'REQ_ID',this.dsCond.getColumn(0,'REQ_ID'));
        						this.dsAuthHisList.setColumn(i,'DEPT_ID',this.dsFommAuthUserDt.getColumn(i,'DEPT_CD'));
        						this.dsAuthHisList.setColumn(i,'DEPT_NM',this.dsFommAuthUserDt.getColumn(i,'DEPT_NM'));
        						this.dsAuthHisList.setColumn(i,'ROWFLAG',this.dsFommAuthUserDt.getColumn(i,'ROWFLAG'));
        					//}
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
        	this.fnGetCmmCd();

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContent.form.grdData.displayRowType();

        	this.fnSearchReset();	// 검색조건 초기화
        	this.dsFommAuthUserDt.clearData();

        	this.fnSearch();	// 검색

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divContent.form.divUserTopBtn.form.btnAddUser];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divContent.form.divUserTopBtn.form.btnDeleteUser];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divBottom.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divContent.form.divUserTopBtn, 'right', true);

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


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CI_TYPE_CD',	'CI_TYPE_CD'		]	// 조회할 상위코드
        		,codeDiv: ['SVC_MNG_CD',	'SVC_MNG_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y'					]	// 사용여부
        		,filter	: ['',				''					]	// filterStr
        		,objDs	: [this.dsCiTypeCd, this.dsCiTypeCdGrid	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        this.fnCheckValidate = function()
        {
        	var chkCount = 0;
        	// 저장할 dataset에 변경된 data 있는 지 확인
        // 	if( !Ex.util.isUpdated(this.dsAuthHisList) &&
        // 		!Ex.util.isUpdated(this.dsFommAuthUserDt) &&
        // 		!Ex.util.isUpdated(this.dsCond) )
        // 		return false;
        	// 필수값 체크
        	if( !Ex.util.checkValidate(this.divContent, "group1") ) return false;
        	// Grid Validation
        	if( this.dsFommAuthUserDt.rowcount < 1 )
        	{
        		var param = {
        				id : "alert_selUserAdd"
        			  , msg : "사용자를 추가해주세요."
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	// 권한 중복체크
        	for(var i = 0 ; i < this.dsFommAuthUserDt.rowcount ; i++)
        	{	//if(this.dsFommAuthUserDt.getColumn(i,'CHK') == 1)
        		//{
        		//	chkCount++;
        			for(var j = 0 ; j < this.dsAuthDupl.rowcount ; j++)
        			{
        				if(this.dsFommAuthUserDt.getColumn(i,'USER_ID') == this.dsAuthDupl.getColumn(j,'USER_ID'))
        				{
        						var param = {
        								id : "alert_selUserDupl"
        							  , msg : "해당 그룹유형에 중복된 사용자가 있습니다.( 사용자 명 : " + this.dsFommAuthUserDt.getColumn(i,'USER_NM') + ")"
        							  , msgtype : "I"};
        						Ex.core.alert(this, param);
        						var nRow = this.dsFommAuthUserDt.findRow('USER_ID', this.dsAuthDupl.getColumn(j,'USER_ID'))
        						this.divContent.form.grdData.setCellPos(0,nRow);
        						return false;
        				}
        			}
        		//}
        	}
        // 	if(chkCount == 0)
        // 	{
        // 		var param = {
        // 				id : "alert_selUserDupl"
        // 			  , msg : "체크된 항목이 없습니다."
        // 			  , msgtype : "I"};
        // 		Ex.core.alert(this, param);
        // 		return false;
        // 	}
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
        			this.fnSearch();
        			break;

        		case "btnDelete" :
        			this.dsData.set_filterstr("CHK==1");

        			for(var i=this.dsData.rowcount-1; i>=0; i--)
        			{
        				if(this.dsData.getColumn(i, "CHK") == 1)
        				{
        					var aRow = this.dsData.deleteRow(i);
        				}
        			}
        			this.dsData.set_filterstr("");
        			this.divContent.form.grdData.setCellProperty("Head", this.divContent.form.grdData.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "btnSave" :			// 저장 (권한 부여)
        			this.fnSearchAuthDupl();
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
        		case 'btnAddUser' :	// 사용자 그리드 추가
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{
        								title:Ex.core.word('사용자 선택') ,
        								pSelType:pSelType
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;

        		case 'btnDeleteUser' :	// 사용자 그리드 삭제
        			this.fnDelete(this.dsFommAuthUserDt);
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

        this.divContent_rdoAuth_onitemchanged = function(obj,e)
        {
        	this.dsCommCd.clear();
        	if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'G')
        	{
        		this.dsCommCd.copyData(this.dsAuthCd,true);
        	}else
        	{
        		this.dsCommCd.copyData(this.dsExtdCd,true);
        	}
        	this.dsCommCd.insertRow(0);
        	this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 선택 -");
        	this.divContent.form.cboAuthId.set_index(0);
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
            this.divContent.form.cboAuthId.addEventHandler("onitemchanged",this.onitemchanged,this);
            this.divContent.form.rdoAuth.addEventHandler("onitemchanged",this.divContent_rdoAuth_onitemchanged,this);
            this.divContent.form.edtReqId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.btnSearchSr.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divUserTopBtn.form.btnDeleteUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divUserTopBtn.form.btnAddUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsUserList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsAuthCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsExtdCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsCommCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsReq.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsReq.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsReq.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsFommAuthUserDt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsAuthHisList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsAuthDupl.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0122_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
