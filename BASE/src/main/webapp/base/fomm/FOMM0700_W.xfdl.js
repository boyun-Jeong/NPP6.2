(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0700_W");
            this.set_titletext("표준 체크리스트");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommChklst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"10\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_STEP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_MAX_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_CAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommChkSublst", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CHKLST_STEP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_QUE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstStepCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstCalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQueTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
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

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle","Static00:0","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("개발단계");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","210","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcUseYn","Static00_00:0","13","85","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("타스크유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboChklstTypeCd","stcUseYn:0","13","110","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsChklstTypeCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboChklstStepCd","stcTitle:0","13","110","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsChklstStepCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","435","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcEqpStatCd","Static00_00_00_00:0","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtHostNm","stcEqpStatCd:0","13","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","40%",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUp","0","70",null,null,"0","Static00_00:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","34",null,null,"0","0",null,null,null,null,this.divUp.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFommChklst");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"250\" band=\"left\"/><Column size=\"550\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"개발단계\"/><Cell col=\"2\" cssclass=\"grdHCell_WF\" text=\"테스크 유형\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" cssclass=\"grdHCell_WF\" text=\"이름\"/><Cell col=\"5\" text=\"내용\" cssclass=\"grdHCell_WF\"/><Cell col=\"6\" text=\"상세\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"점수\"/><Cell col=\"9\" text=\"통계방법\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CHKLST_STEP_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsChklstStepCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:CHKLST_TYPE_CD\" calendardateformat=\"yyyy-MM-dd\" combodataset=\"dsChklstTypeCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CHKLST_ID\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CHKLST_NM\" combodisplayrowcount=\"0\" cursor=\"pointer\" textAlign=\"left\" color=\"blue\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:CHKLST_DESC\" textAlign=\"left\"/><Cell col=\"6\" expandshow=\"show\" expandsize=\"28\" textAlign=\"center\" cursor=\"pointer\" text=\"bind:DETAIL_SEE\"/><Cell col=\"7\" text=\"bind:USE_YN\" combodataset=\"dsUseYn\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:CHKLST_MAX_VAL\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsChklstCalCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:CHKLST_CAL_CD\"/></Band></Format></Formats>");
            this.divUp.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","0","130","24",null,null,null,null,null,null,this.divUp.form);
            obj.set_taborder("1");
            obj.set_text("표준 체크리스트");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divUp.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","24",null,"10","0",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn",null,"0","250","24","0",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divUp.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","80","24","0",null,null,null,null,null,this.divUp.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_add");
            this.divUp.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:5","0","60","24",null,null,null,null,null,null,this.divUp.form);
            obj.set_taborder("4");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommChklst");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divDown","0","Static00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","34",null,"354","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFommChkSublst");
            obj.set_cssclass("grd_WF_tree");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"750\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"질문\"/><Cell col=\"1\" text=\"예문\"/><Cell col=\"2\" cssclass=\"grdHCell_WF\" text=\"점수\"/></Band><Band id=\"body\"><Cell treestartlevel=\"0\" text=\"expr:LVL == 1 ? QUESTION_DESC : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"1\" text=\"expr:LVL == 2 ? QUESTION_DESC : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:QUESTION_SCORE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","0","95","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","24",null,"10","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn",null,"0","250","24","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","95","0","70","24",null,null,null,null,null,null,this.divDown.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divDown.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnQueAdd","btnExcelDown:5","0","80","24",null,null,null,null,null,null,this.divDown.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("질의 추가");
            obj.set_cssclass("btn_WF_add");
            this.divDown.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdMainList00","0.00","724",null,"354","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsFommChkSublst");
            obj.set_cssclass("grd_WF_tree");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"250\"/><Column size=\"985\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"질문\"/><Cell col=\"1\" text=\"예문\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" cssclass=\"grdHCell_WF\" text=\"점수\"/></Band><Band id=\"body\"><Cell colspan=\"3\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treestartlevel=\"0\" text=\"bind:QUESTION_DESC\" treelevel=\"bind:LVL\"/><Cell col=\"3\" text=\"bind:QUESTION_SCORE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divUp.form.divGrdMtTopBtn.form,function(p){});
            this.divUp.form.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form
            obj = new Layout("default","",0,0,this.divUp.form,function(p){});
            this.divUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divDown.form.divGrdMtTopBtn.form,function(p){});
            this.divDown.form.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form
            obj = new Layout("default","",0,0,this.divDown.form,function(p){});
            this.divDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboChklstTypeCd","value","dsCond","CHKLST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtHostNm","value","dsCond","CHKLST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboChklstStepCd","value","dsCond","CHKLST_STEP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0700_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0700_W
        * 화면(명)		︰ 표준 체크리스트
        * 메뉴(경로)		︰ 표준정보관리 > 표준체크리스트관리 > 표준 체크리스트
        * 화면 설명		︰ 표준 체크리스트
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.08.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.08.06	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.gridFormat = this.divDown.form.grdMainList.formats;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        };

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        };

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsSubCond.clearData();
        	this.dsSubCond.addRow();
        };

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0700W/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommChklst=dsFommChklst";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 조회
        this.fnSearch02 = function()
        {
        	this.divDown.form.grdMainList.set_formats(this.gridFormat);
        	//this.divDown.form.grdMainList.set_visible(false);

        	// transaction
        	var sTranId = "select02";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0700W/select02";		// 서비스명
            var sInDs = "dsCond=dsSubCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommChkSublst=dsFommChkSublst";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

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
        			var stcTitle = this.divDown.form.stcTreeTitle;

        			if(Ex.isUndefined(this.dsSubCond.getColumn(0,"CHKLST_ID")))
        			{
        				this.dsSubCond.setColumn(0,"CHKLST_ID",this.dsFommChklst.getColumn(0,"CHKLST_ID"));
        				this.dsSubCond.setColumn(0,"CHKLST_QUE_ID",this.dsFommChklst.getColumn(0,"CHKLST_ID"));
        				stcTitle.set_text(this.dsFommChklst.getColumn(0,"CHKLST_NM"));
        			}
        			else
        			{
        				this.dsSubCond.setColumn(0,"CHKLST_ID",this.dsFommChklst.getColumn(0,"CHKLST_ID"));
        				stcTitle.set_text(this.dsCond.getColumn(0,"TITLE"));
        			}

        			var objSize = nexacro.getTextSize(stcTitle.text, stcTitle._getCurrentStyleInheritValue("font"));
        			stcTitle.set_width(parseInt(objSize.nx) + 35);

        			if(Ex.isUndefined(this.dsSubCond.getColumn(0,"CHKLST_ID")))
        			{
        					this.dsFommChkSublst.clearData();
        			}else{
        				this.fnSearch02();		// 서브조회
        			}

        			break;

        		case "select02" :
        			for(var i=0; i<this.dsFommChkSublst.rowcount; i++)
        			{
        				if(this.dsFommChkSublst.getColumn(i, "LVL") == 1)
        				{
        					//var nCell = this.divDown.form.grdMainList.mergeContentsCell("body", i, 0, i, 1, 0, false);
        					var nCell = this.divDown.form.grdMainList.mergeCell(0, 1, i, i);
        				}
        			}
        			//this.divDown.form.grdMainList.set_visible(true);
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "select02" :
        			Ex.core.toast(this, "10002");
        			break;
        	}
        };

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "FOMM0700_P01" :
        			if(varValue == "Y")	this.fnSearch01();
        			break;

        		case "FOMM0700_P02" :
        			if(varValue == "Y")	this.fnSearch01();
        			break;

        		case "FOMM0700_P03" :
        			if(varValue == "Y")	this.fnSearch01();
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
        	this.divUp.form.grdMainList.displayRowType();
        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divUp.form.divGrdMtTopBtn.form.btnAdd];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	arrBtn = [this.divDown.form.divGrdMtTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	arrBtn = [this.divDown.form.divGrdMtTopBtn.form.btnQueAdd];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divUp.form.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divDown.form.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        	this.fnSearch01();		// 조회
        };

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CHKLST_STEP_CD',	'CHKLST_TYPE_CD',	'CHKLST_CAL_CD',	'QUE_TYPE_CD',	  'USE_CD'		]	// 조회할 상위코드
        		,codeDiv: ['POR_INFO_CD',		'POR_INFO_CD',		'POR_INFO_CD',		'POR_INFO_CD',	  'CMM_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',				'ALL',				'ALL',				'ALL',			  'ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y',				'Y',				'Y',			  'Y'			]	// 사용여부
        		,filter	: ['',					'',					'',					'',				  ''			]	// filterStr
        		,objDs	: [this.dsChklstStepCd,	this.dsChklstTypeCd,this.dsChklstCalCd,	this.dsQueTypeCd, this.dsUseYn	]// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util
        };

        this.fnCheckValidate = function()
        {

        	return true;
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch01();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAdd' :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"FOMM0700_P02",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0700_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "표준체크리스트",
        					pChklstId	:''
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1012,height=498"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize"
        			);
        			break;

        		case 'btnQueAdd' :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"FOMM0700_P03",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0700_P03.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "표준체크리스트 질문등록",
        					pChklstId	: this.dsSubCond.getColumn(0, "CHKLST_QUE_ID")
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1012,height=498"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize"
        			);
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.divDown.form.grdMainList],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				//FileNm	: ["WBS_" + this.divSearch.form.edtPjtNm.text + (!Ex.isEmpty(this.divSearch.form.cboSubPjt.text) ? "_" + this.divSearch.form.cboSubPjt.text : "")],
        				FileNm : [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        	}
        };

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')	this.fnSearch();
        };

        this.grdOnCellClick = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "CHKLST_NM") == e.cell)
        	{
        		this.dsSubCond.setColumn(0,"CHKLST_ID",this.dsFommChklst.getColumn(obj.getDatasetRow(e.row), "CHKLST_ID"));
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"FOMM0700_P02",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"fomm::FOMM0700_P02.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				  title			: "표준체크리스트 수정"
        				, pChklstId	: this.dsFommChklst.getColumn(obj.getDatasetRow(e.row), "CHKLST_ID")
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=1012,height=498"	// <--- width/height/modeless(프레임 처리 옵션)
        			"autosize"
        		);
        	}
        	else if(obj.getBindCellIndex("body", "DETAIL_SEE") == e.cell){
        		if (e.cell > 0)
        		{
        			this.dsSubCond.setColumn(0,"CHKLST_QUE_ID",this.dsFommChklst.getColumn(obj.getDatasetRow(e.row), "CHKLST_ID"));
        			var chklstNm	= this.dsFommChklst.getColumn(obj.getDatasetRow(e.row),"CHKLST_NM");
        			this.dsCond.setColumn(0,"TITLE",chklstNm);
        			var stcTitle = this.divDown.form.stcTreeTitle;
        			stcTitle.set_text(chklstNm);

        			var objSize = nexacro.getTextSize(stcTitle.text, stcTitle._getCurrentStyleInheritValue("font"));
        			stcTitle.set_width(parseInt(objSize.nx) + 35);
        			this.fnSearch02();
        		}
        	}
        };

        this.onKeyUp = function(obj,e)
        {
        	if(e.keycode == '13')	this.fnSearch01();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboChklstTypeCd.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearchArea.form.cboChklstStepCd.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearchArea.form.edtHostNm.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divUp.form.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divUp.form.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divDown.form.divGrdMtTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.divGrdMtTopBtn.form.btnQueAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdMainList00.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.dsFommChklst.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsFommChklst.addEventHandler("canrowposchange",this.dsCanRowposChange,this);
            this.dsFommChklst.addEventHandler("onrowposchanged",this.dsOnRowposChanged,this);
            this.dsFommChkSublst.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0700_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
