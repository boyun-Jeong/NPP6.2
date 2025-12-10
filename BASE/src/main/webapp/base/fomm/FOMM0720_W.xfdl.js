(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0720_W");
            this.set_titletext("사용자테스트항목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeType", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"value\">N</Col><Col id=\"name\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassTree", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"string\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"string\" size=\"256\"/><Column id=\"LVL\" type=\"string\" size=\"256\"/><Column id=\"FULLPATH\" type=\"string\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CASE\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">사용</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_CON\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"nRow\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassTree2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"string\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"string\" size=\"256\"/><Column id=\"LVL\" type=\"string\" size=\"256\"/><Column id=\"FULLPATH\" type=\"string\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdTree","0","104","370",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsClassTree");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useFilter("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\" style=\"cellpadding:0 14 0 8;\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"line: ;\" text=\"bind:CMM_CD_NM\" treestartlevel=\"0\" treelevel=\"bind:LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","grdTree:0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","1.98%",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Grid("grdMainList","grdTree:20","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsClass");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"90\"/><Column size=\"394\"/><Column size=\"334\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"검증항목\"/><Cell col=\"5\" text=\"확인방법\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" edittype=\"combo\" style=\"align:center;\" text=\"bind:USE_YN\" editlimit=\"6\" editdisplay=\"display\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:TEST_CASE\" editlimit=\"5\" editdisplay=\"edit\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:TEST_CONT\" editdisplay=\"display\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGridTitle","390.00","70","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","0","70","243","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","215","24","0",null,null,null,null,null,this);
            obj.set_taborder("8");
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

            obj = new Static("Static09","0","94",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGridTitle:-60","70","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_countDataset("dsClass");
            obj.set_text("(0건)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoAllCol","140","71","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_cssclass("rdo_WF_normal");
            var rdoAllCol_innerdataset = new nexacro.NormalDataset("rdoAllCol_innerdataset", obj);
            rdoAllCol_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SVC</Col><Col id=\"datacolumn\">업무</Col></Row><Row><Col id=\"codecolumn\">GNL</Col><Col id=\"datacolumn\">요청</Col></Row></Rows>");
            obj.set_innerdataset(rdoAllCol_innerdataset);
            obj.set_value("SVC");
            obj.set_index("0");
            obj.set_text("업무");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand","rdoAllCol:46","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeCollapse","btnTreeExpand:5","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","13","65","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSrchCon","68","13","125","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("false");
            var divSearch_form_cboSrchCon_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSrchCon_innerdataset", obj);
            divSearch_form_cboSrchCon_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분류명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">분류코드</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSrchCon_innerdataset);
            obj.set_value("1");
            obj.set_text("분류명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","378.00","13","30","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","Static00_00_00:0.00","13","55","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSrchWord","cboSrchCon:5.00","13","180","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divClass","Static05:0.00","13","600","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("ms::MS0000_D01.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","115",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divClass
            obj = new Layout("default","",0,0,this.divSearch.form.divClass.form,function(p){});
            this.divSearch.form.divClass.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","stcGridTitle","value","ds_prj","PJT_STD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSrchCon","value","dsCond","SRCH_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtSrchWord","value","dsCond","SRCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","ms::MS0000_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0720_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0720_W
        * 화면(명)	︰ 사용자테스트항목관리
        * 메뉴(경로)	︰ 표준정보관리 > 표준체크리스트관리 > 사용자테스트항목관리
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.04
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.03.05	김호일	최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.essChkRow;			//저장시 입력 항목 validation Check에 걸린 경우 해당 row cell에 포커스를 주기 위해 row 정보를 저장
        this.CLASS_ID = "";		//트리분류 ID
        this.lastClassId;		//저장 시점 트리 class_id
        this.nSelRow;
        this.rowChangeFlag = false;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);

        	//this.dsCond.setColumn(0, "SRCH_CON", "1");
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	/*
        	if( Ex.util.isUpdated(this.dsClass) )
        	{
        		var param = {
        						id : "pSearchConfirm"
        					  , msg : "10001"	//수정된 데이터가 있습니다. 조회 하시겠습니까?
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}
        	*/
        	this.fnSearch01();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0720W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsClassTree=dsClassTree dsClassTree2=dsClassTree2";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch02 = function()
        {
        	// transaction
        	var sTranId = "select02";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0720W/select02";			// 서비스명
        	var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsClass=dsClass";				// 서버에서 수신할 데이타셋
        	var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }

        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0720W/save01";
            var sInDs = "dsClass=dsClass:U dsCond=dsCond";
            var sOutDs = "dsClassTree=dsClassTree dsClassTree2=dsClassTree2 dsClass=dsClass";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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
        	if(sSvcId == "select01_save")
        	{
        		this.dsClassTree.set_enableevent(true);
        	}

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
        			this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select01_save" :
        			var fRow = this.dsClassTree.findRow("CLASS_ID", this.lastClassId);
        			//trace("this.CLASS_ID ::: " + this.lastClassId + " fRow : " + fRow);
        			this.dsClassTree.set_rowposition(fRow);
        			this.lastClassId = "";
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});

        			this.dsClassTree.set_enableevent(false);
        			this.lastClassId = this.CLASS_ID;

        			this.grdTree.setFocus();
        			//var fRow = 1;
        			var fRow = this.dsClassTree.findRow("CMM_CD",this.dsCond.getColumn(0,"CMM_CD"));
        			this.dsClassTree.set_rowposition(fRow);
        			//this.dsClassTree.rowposition = this.dsClassTree.findRow("CMM_CD",this.dsCond.getColumn(0,CMM_CD));
        			this.dsClassTree.set_enableevent(true);
        //
        // 			if(this.dsS_RowCol.getColumn(0,1) == "CHK_TIME"){
        // 				this.grdMainList.setCellPos(11);
        // 			}
        // 			var sTranId = "select01_save";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        // 			var sService = "MS0100W/select01";			// 서비스명
        // 			var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        // 			var sOutDs = "dsClassTree=dsClassTree";		// 서버에서 수신할 데이타셋
        // 			var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        // 			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        // 			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "commSearchUserPopup" :
        			this.dsPopRtn.loadXML(varValue);
        			this.dsClass.setColumn(this.dsClass.rowposition, "CLASS_USER_ID", this.dsPopRtn.getColumn(0, 'USER_ID'));
        			this.dsClass.setColumn(this.dsClass.rowposition, "CLASS_USER_NM", this.dsPopRtn.getColumn(0, 'USER_NM'));
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
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.dsClass.clearData();
        			this.fnSearch01();
        			break;

        		case "pSearchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			//this.CLASS_ID = this.dsClassTree.getColumn(e.newrow, "CMM_CD");
        			//this.CLASS_ID = this.dsClassTree.getColumn(this.dsClassTree.rowposition, "CMM_CD")
        			//this.dsCond.setColumn(0, "CMM_CD", this.CLASS_ID);

        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag = true;		// 행변경 flag
        			this.dsClassTree.set_rowposition(this.nSelRow);
        			break;

        		case "alertSAPEssI" :
        			this.grdMainList.getBindDataset().set_rowposition(this.essChkRow);			// 데이터셋 ROW 포커스 이동
        			this.grdMainList.showEditor(true);											// 그리드 편집모드로 변경
        			var cellIdx = this.grdMainList.getBindCellIndex("Body", "SAP_ITEMCD_NO");
        			this.grdMainList.setCellPos(cellIdx, this.essChkRow);						// 그리드 셀 포커스 이동
        			break;

        		case "alertAssetUserEssI" :
        			this.grdMainList.getBindDataset().set_rowposition(this.essChkRow);			// 데이터셋 ROW 포커스 이동
        			this.grdMainList.showEditor(true);											// 그리드 편집모드로 변경
        			var cellIdx = this.grdMainList.getBindCellIndex("Body", "CLASS_USER_NM");
        			this.grdMainList.setCellPos(cellIdx, this.essChkRow);						// 그리드 셀 포커스 이동
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
        	this.grdTree.displayRowType();
        	this.grdMainList.displayRowType();

        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	/*
        	var oParam = {
        		upCmmCd : ['YN_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['ALL']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']			// 사용여부
        		,filter	: ['']			// filterStr
        		,objDs	: [this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        	*/
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsClass) )
        		return false;

        	// Grid Validation
        	if( !this.grdMainList.checkValidate() ) return false;
        	/*
        	for(var i=0; i<this.dsClass.rowcount; i++)
        	{
        		if(this.dsClassTree.getColumn(this.dsClassTree.rowposition, "LVL") == 3)
        		{
        			if( Ex.isEmpty(this.dsClass.getColumn(i,"CLASS_USER_ID")) || Ex.isEmpty(this.dsClass.getColumn(i,"CLASS_USER_NM")) )
        			{
        				this.essChkRow = i;
        				var oParam = {id : "alertAssetUserEssI", msg : "자산담당을 입력 하세요.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}
        	}
        	*/
        	return true;
        }

        this.fnSetDatasetDt = function()
        {
        	this.dsFommAuthUserDt.set_enableevent(false);
        	this.dsFommAuthUserDt.set_filterstr("ROWFLAG=='U'");

        	var userId = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'USER_ID');
        	for(var i = 0; i < this.dsFommAuthUserDt.rowcount; i++) {
        		this.dsFommAuthUserDt.setColumn(i, 'USER_ID', userId);
        	}

        	this.dsFommAuthUserDt.set_filterstr('');
        	this.dsFommAuthUserDt.set_enableevent(true);
        	return;
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
        			if(Ex.util.isUpdated(this.dsClass))
        			{
        				var param = {
        						id : "searchConfirm"
        					  , msg : "10001"		//수정된 데이터가 있습니다.\n조회 하시겠습니까?
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			else
        			{
        				this.dsClass.clearData();
        				this.fnSearch01();
        			}
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.dsClass.clearData();
        			this.stcGridTitle.set_text("목록");
        			this.fnSearch();//this.fnSearchReset();
        			break;

        		case "btnAdd" : 	// 추가
        			/*
        			var nCurRow = this.dsClassTree.rowposition;
        			if(this.dsClassTree.getColumn(nCurRow, "LVL") == "4")
        			{
        				var oParam = {id : "alertNotAddI", msg : "더이상 하위에 추가할 수 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return;
        			}

        			var nRow = this.dsClass.setInsertRow();

        			if(this.dsClassTree.rowcount == 0)
        			{
        				this.dsClass.setColumn(nRow, "CLASS_ID", "ROOT");
        			}
        			*/
        			if (this.rdoAllCol.value == "GNL"){
        				var nCurRow = this.dsClassTree2.rowposition;
        				var upCode = this.dsClassTree2.getColumn(nCurRow,"UP_CMM_CD");
        			} else {
        				var nCurRow = this.dsClassTree.rowposition;
        				var upCode = this.dsClassTree.getColumn(nCurRow,"UP_CMM_CD");
        			}
        			if(this.dsClassTree.getColumn(nCurRow, "LVL") == "2" || this.dsClassTree2.getColumn(nCurRow, "LVL") == "2")
        			{
        				var nRow = this.dsClass.setInsertRow();
        				this.dsClass.setColumn(nRow,"UPMU_ID1", upCode);
        				this.dsClass.setColumn(nRow,"UPMU_ID2", this.CLASS_ID);
        				this.dsClass.setColumn(nRow,"USE_YN","Y");
        				this.dsClass.setColumn(nRow,"GUBUN", this.rdoAllCol.value);

        				this.grdMainList.getBindDataset().set_rowposition(nRow);					// 데이터셋 ROW 포커스 이동
        				this.grdMainList.showEditor(true);											// 그리드 편집모드로 변경

        				var cellIdx = this.grdMainList.getBindCellIndex("Body", "CLASS_ID");
        				this.grdMainList.setCellPos(cellIdx, nRow);									// 그리드 셀 포커스 이동
        			}
        			/*

        			if(this.dsClassTree.getColumn(nCurRow, "LVL") == "2")
        			{
        				var nRow = this.dsClass.setInsertRow();
        				this.dsClass.setColumn(nRow,"CMM_CD", this.CLASS_ID);
        				this.dsClass.setColumn(nRow,"USE_YN","Y");

        				this.grdMainList.getBindDataset().set_rowposition(nRow);					// 데이터셋 ROW 포커스 이동
        				this.grdMainList.showEditor(true);											// 그리드 편집모드로 변경

        				var cellIdx = this.grdMainList.getBindCellIndex("Body", "CLASS_ID");
        				this.grdMainList.setCellPos(cellIdx, nRow);									// 그리드 셀 포커스 이동
        			}
        			*/
        			break;

        		case "btnDelete" :	// 삭제
        			if(this.dsClassTree.getColumn(this.dsClassTree.rowposition, "LVL") == "2" || this.dsClassTree2.getColumn(this.dsClassTree2.rowposition, "LVL") == "2")
        			{
        				this.fnDelete(this.dsClass);
        			}
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdMainList],
           				Sheet	: ['분류정보목록'],
           				FileNm	: ["분류정보목록"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnSave" : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnTreeExpand" :
        			this.grdTree.set_treeinitstatus("expand,all");
        			break;

        		case "btnTreeCollapse" :
        			this.grdTree.set_treeinitstatus("collapse,all");
        			break;

        		case "stcGridTitle" :
        			//dsClass의 UP_CLASS_ID가 타이틀 분류의 CLASS_ID이므로 이를 활용하여 식별함
        			//var ind = obj.getDisplayText().substring(1, obj.getDisplayText().length-4);
        			var ind = this.dsCond.getColumn(0, "CLASS_ID");

        			this.dsClassTree.set_rowposition(-1);
        			this.dsClassTree.set_rowposition(this.dsClassTree.findRow("CLASS_ID", ind));
        			this.grdTree.setCellPos(this.dsClassTree.findRow("CLASS_ID", ind));
        			this.grdTree.setFocus();

        			break;
        	}
        }

        this.canrowPosChange = function(obj,e)
        {
        	// 오른쪽 grid에 수정사항이 있을경우 confirm 메세지
        	if( Ex.util.isUpdated(obj) )
        	{
        		if( !this.rowChangeFlag && obj.getColumn(e.newrow, "LVL") == 2)
        		{
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {
        				  id : "rowposChangeConfirm"
        				, msg : "10001"		//수정된 데이터가 있습니다.\n조회 하시겠습니까?
        				, arrparam : []
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}
        	return true;
        };

        this.onRowPosChanged = function(obj,e)
        {
        	//if(obj.id == "dsClassTree")
        	//{
        		/*
        		if(this.dsClassTree.getColumn(e.newrow, "LVL") == 2)
        		{
        			//this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex("Body", "SAP_ITEMCD_NO"), "cssclass", "grdHCell_WF_essential");
        			//this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex("Body", "CLASS_USER_NM"), "cssclass", "grdHCell_WF_essential");
        			this.grdMainList.setFormatColProperty(this.grdMainList.getBindCellIndex("body", "SAP_ITEMCD_NO"), "size", 100);
        			this.grdMainList.setFormatColProperty(this.grdMainList.getBindCellIndex("body", "CLASS_USER_NM"), "size", 110);
        		}
        		else
        		{
        			//this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex("Body", "SAP_ITEMCD_NO"), "cssclass", "");
        			//this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex("Body", "CLASS_USER_NM"), "cssclass", "");
        			this.grdMainList.setFormatColProperty(this.grdMainList.getBindCellIndex("body", "SAP_ITEMCD_NO"), "size", 0);
        			this.grdMainList.setFormatColProperty(this.grdMainList.getBindCellIndex("body", "CLASS_USER_NM"), "size", 0);
        		}
        		*/
        		//select_tree_nRow = e.newrow; //트리에서 선택한 row 번호
        		if(obj.getColumn(e.newrow, "LVL") == 2){
        			//this.dsCond.clearData();
        			this.stcGridTitle.set_text("[" + obj.getColumn(e.newrow, "CMM_CD_NM") + "]"+" 목록");
        			this.CLASS_ID = obj.getColumn(e.newrow, "CMM_CD");
        			this.dsCond.setColumn(0, "CMM_CD", this.CLASS_ID);
        			this.dsCond.setColumn(0, "GUBUN", this.rdoAllCol.value);
        			this.dsCond.setColumn(0, "nRow", obj.rowposition);

        			this.fnSearch02();
        		}
        		//font size 조절?
        		var objSize = nexacro.getTextSize(this.stcGridTitle.text, this.stcGridTitle._getCurrentStyleInheritValue("font"));
        		var nWidth = parseInt(objSize.nx) + 25;
        		this.stcCnt.set_width(nWidth);
        		this.stcCnt.set_left(this.stcGridTitle.getOffsetLeft() + nWidth);

        		this.rowChangeFlag = false;
        	//}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        /*
        this.onKeyUp = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(e.keycode == 13) this.fnSearch();
        };
        */

        this.rdoAllCol_onitemchanged = function(obj,e)
        {
        	//this.Grid00.binddataset = "Dataset00";
        	this.stcTreeTitle.set_text(this.rdoAllCol.text +" 분류");

        	this.grdTree.set_enableevent(false);
        	if(e.postvalue == 'SVC'){
        		this.grdTree.binddataset = "dsClassTree";
        	} else {
        		this.grdTree.binddataset = "dsClassTree2";
        	}
        	this.grdTree.set_enableevent(true);

        	//this.grdCodeMt.set_formatid(e.postvalue);
        	//trace(this.grdCodeMt.autofittype);
        };

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.clickitem != "treeitembutton")
        	{
        		var nTreeRow = obj.getTreeRow(e.row);
        		var nTreeStatus = obj.getTreeStatus(nTreeRow);

        		if(nTreeStatus == 0) obj.setTreeStatus(nTreeRow, 1);
        		else if(nTreeStatus == 1) obj.setTreeStatus(nTreeRow, 0);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdTree.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcGridTitle.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.rdoAllCol.addEventHandler("onitemchanged",this.rdoAllCol_onitemchanged,this);
            this.btnTreeExpand.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeCollapse.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.Static07.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.cboSrchCon.addEventHandler("onitemchanged",this.divSearch_cboSrchCon_onitemchanged,this);
            this.divSearch.form.Static05.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtSrchWord.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onkeyup",this.onKeyUp,this);
            this.dsClassTree.addEventHandler("onrowposchanged",this.onRowPosChanged,this);
            this.dsClassTree.addEventHandler("canrowposchange",this.canrowPosChange,this);
            this.dsClass.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsClassTree2.addEventHandler("onrowposchanged",this.onRowPosChanged,this);
            this.dsClassTree2.addEventHandler("canrowposchange",this.canrowPosChange,this);
        };
        this.loadIncludeScript("FOMM0720_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
