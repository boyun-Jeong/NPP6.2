(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0150_W");
            this.set_titletext("코드관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEL_UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommCmmCdMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeTree", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommCmmCdLangDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInput", this);
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

            obj = new Static("stcCodeGbn","20","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
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

            obj = new Combo("cboMenuDIv","99","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CD_NO");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsCodeCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","cboMenuDIv:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staMenuNm","Static00_00_00:0","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCmmCd","staMenuNm:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","edtCmmCd:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staMenuNm00","Static00_00_00_00:0","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCmmCdNm","staMenuNm00:0.00","13","205","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","20%","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeTree","0","104",null,null,"Static00_01:0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCodeTree");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:CMM_CD_NM\" treelevel=\"bind:CD_LVL\" cssclass=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("코드체계");
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

            obj = new Grid("grdCodeMt","Static00_01:0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsFommCmmCdMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeuseimage("false");
            obj.set_useSort("true");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("<Formats><Format id=\"simple\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"90\" band=\"right\"/><Column size=\"65\" band=\"right\"/><Column size=\"65\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"상위코드\"/><Cell col=\"3\" text=\"레벨\" suppressalign=\"first\"/><Cell col=\"4\" text=\"코드\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"코드명\"/><Cell col=\"6\" text=\"코드설명\"/><Cell col=\"7\" text=\"항목1\"/><Cell col=\"8\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:REAL_UP_CMM_CD\"/><Cell col=\"3\" text=\"bind:CD_LVL\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:CMM_CD\" edittype=\"text\" validation=\"코드;NULL\"/><Cell col=\"5\" text=\"bind:CMM_CD_NM\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:CMM_CD_DESC\" edittype=\"text\" textAlign=\"left\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"7\" text=\"bind:ITM_VAL_1\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:SORT_ORDR\" edittype=\"text\" validation=\"정렬순서;NULL\" editinputtype=\"digit\" editmaxlength=\"5\"/><Cell col=\"9\" displaytype=\"combotext\" text=\"bind:USE_YN\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\" validation=\"사용여부;NULL\"/></Band></Format><Format id=\"all\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"상위코드\"/><Cell col=\"3\" text=\"레벨\" suppressalign=\"first\"/><Cell col=\"4\" text=\"코드\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"코드명\" edittype=\"normal\"/><Cell col=\"6\" text=\"코드설명\"/><Cell col=\"7\" text=\"항목1\"/><Cell col=\"8\" text=\"항목2\"/><Cell col=\"9\" text=\"항목3\"/><Cell col=\"10\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"11\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:UP_CMM_CD\"/><Cell col=\"3\" text=\"bind:CD_LVL\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:CMM_CD\" edittype=\"text\" validation=\"코드;NULL\"/><Cell col=\"5\" text=\"bind:CMM_CD_NM\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:CMM_CD_DESC\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:ITM_VAL_1\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:ITM_VAL_2\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:ITM_VAL_3\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:SORT_ORDR\" edittype=\"text\" validation=\"정렬순서;NULL\"/><Cell col=\"11\" displaytype=\"combotext\" text=\"bind:USE_YN\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\" validation=\"사용여부;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","Static00_01:0","70","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[코드] 하위코드 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","125","24","0",null,null,null,null,null,this);
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

            obj = new Static("stcCnt","stcGrdTitle:0","71","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommCmmCdMt");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeCollapse",null,"70","24","24","Static00_01:0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand",null,"70","24","24","btnTreeCollapse:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoAllCol",null,"71","180","24","divGrdTopBtn:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_cssclass("rdo_WF_normal");
            var rdoAllCol_innerdataset = new nexacro.NormalDataset("rdoAllCol_innerdataset", obj);
            rdoAllCol_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">simple</Col><Col id=\"datacolumn\">기본컬럼</Col></Row><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체컬럼</Col></Row></Rows>");
            obj.set_innerdataset(rdoAllCol_innerdataset);
            obj.set_value("simple");
            obj.set_index("0");
            obj.set_text("기본컬럼");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
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
            obj = new BindItem("item3","divSearchArea.form.cboMenuDIv","value","dsCond","TOP_CD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.staMenuNm","value","dsCond","CMM_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.Static00_00_00","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtCmmCdNm","value","dsCond","CMM_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.edtCmmCd","value","dsCond","CMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0150_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0150_W
        * 화면(명)		︰ 코드관리
        * 메뉴(경로)	︰ 관리자 > 코드관리 > 코드관리
        * 화면 설명	︰ SPP 기본 공통코드관리 화면
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
        this.nSelRow = -1;	// tree 이동하려는 행
        this.nSelRowDt = -1;	// MT 이동하려는 행
        this.rowChangeFlag = false;		// true: 행변경 가능
        this.searchFlg = false;

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
        	var TOP_CD_NO = this.dsCodeCd.getColumn(this.dsCodeCd.findRow('CMM_CD', 'CMM_CD'), 'CD_NO');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'TOP_CD_NO', TOP_CD_NO);
        	this.dsCond.setColumn(this.dsCond.rowposition, 'TOP_CODE_ID', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'USE_YN', '');
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsFommCmmCdMt) )
        	{
        		var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01(false);
        }

        // 조회
        this.fnSearch01 = function(isSaveAfter)
        {
        	if(!isSaveAfter)	this.nLastRow = -1;

        	this.dsFommCmmCdMt.clearData();

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0150W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCodeTree=dsCodeTree";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 코드별 하위 코드 목록 조회
        this.fnSearch02 = function()
        {
        	var sTranId = "select02";
            var sService = "FOMM0150W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommCmmCdMt=dsFommCmmCdMt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0150W/save01";
            var sInDs = "dsFommCmmCdMt=dsFommCmmCdMt:U dsCond=dsCond";
            var sOutDs = "";
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
        			this.searchFlg = true;
        			this.fnCommOnclick(this.btnTreeCollapse);
        			this.searchFlg = false;
        			break;

        		case "select02" :
        			this.grdCodeMt.setCellProperty("Head", this.grdCodeMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.dsFommCmmCdMt.clearData();
        			this.fnSearch01(true);
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "cmmCdDescCellEditPop" :
        			if( Ex.isEmpty(varValue) || varValue == "NO_CHANGE") return;
        			this.dsFommCmmCdMt.setColumn(this.dsFommCmmCdMt.rowposition, "CMM_CD_DESC", varValue);
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch01(false);
        			break;

        		case "saveConfirm" :
        			this.nLastRow = this.dsCodeTree.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSetDsInput();	// 저장 전 dataset data 전처리
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsCodeTree.set_rowposition(this.nSelRow);
        			break;

        		case "rowposDtChangeConfirm" :
        			this.dsFommCmmCdMt.set_rowposition(this.nSelRowDt);
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
        	this.grdCodeMt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];		// 쓰기
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
        		upCmmCd : ['ROOT',			'YN_CD']		// 조회할 상위코드
        		,codeDiv: ['',				'CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			'SEL']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y']			// 사용여부
        		,filter	: ['',				'']			// filterStr
        		,objDs	: [this.dsCodeCd,	this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsFommCmmCdMt) )
        		return false;


        	// Grid Validation
        	if( !this.grdCodeMt.checkValidate() )
        		return false;

        	return true;
        }

        this.fnAdd = function()
        {
        	var upCdNo 	= this.dsCodeTree.getColumn(this.dsCodeTree.rowposition, 'CD_NO');		// 상위코드번호
        	var upCmmCd	= this.dsCodeTree.getColumn(this.dsCodeTree.rowposition, 'CMM_CD');		// 상위코드
        	var cdLvl	= parseInt(this.dsCodeTree.getColumn(this.dsCodeTree.rowposition, 'CD_LVL')||'0') + 1;	// 코드 레벨
        	var codeDiv	= '';	// 코드 업무구분은 저장 전 최종 setting


        	var rowPos = this.dsFommCmmCdMt.setInsertRow(this.dsFommCmmCdMt.rowposition+1);
        	this.dsFommCmmCdMt.setColumn(rowPos, 'LANG_CD', 'KR');
        	this.dsFommCmmCdMt.setColumn(rowPos, 'UP_CD_NO', upCdNo);
        	this.dsFommCmmCdMt.setColumn(rowPos, 'UP_CMM_CD', upCmmCd);
        	this.dsFommCmmCdMt.setColumn(rowPos, 'CD_LVL', cdLvl);
        	this.dsFommCmmCdMt.setColumn(rowPos, 'USE_YN', 'Y');
        }

        // 저장 전 dataset data 전처리
        this.fnSetDsInput = function()
        {	/*
        	this.dsInput.clear();
        	var rowPosToCopy = this.dsFommCmmCdMt.rowposition;

        	// add mt data to dsInput

        	this.dsInput.loadXML(this.dsFommCmmCdMt.saveXML());
        	*/

        	this.dsFommCmmCdMt.set_enableevent(false);
        	this.dsInput.loadXML(this.dsFommCmmCdMt.saveXML());

        	for(var i = 0; i < this.dsInput.rowcount; i++)
        	{
        		var cdLvl = this.dsInput.getColumn(i, 'CD_LVL');
        		if(cdLvl == 1)	// 레벨 1이면(ROOT제외 최상위 코드이면) 해당 코드를 업무구분으로 사용
        			var codeDiv = this.dsFommCmmCdMt.getColumn(i, 'CMM_CD');
        		else 			// 레벨 1보다 크면 상위코드 업무구분을 따라감
        			var codeDiv = this.dsCodeTree.getColumn(this.dsCodeTree.rowposition, 'CODE_DIV');
        		this.dsFommCmmCdMt.setColumn(i, 'CODE_DIV', codeDiv);
        	}
        	this.dsFommCmmCdMt.set_enableevent(true);
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
        			this.fnAdd();
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsFommCmmCdMt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var msgParam = '';
        				if( this.dsFommCmmCdMt.findRow('ROWFLAG', 'D') >= 0 )
        					msgParam += Ex.core.word('하위') + Ex.core.word('코드') + ' ' + Ex.core.word('전부') + ' ' + Ex.core.word('삭제');

        				var param = {	id : "saveConfirm"
        					  , msg : Ex.isEmpty(msgParam) ? "10003" : "10016"
        					  , arrparam : [msgParam]
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnTreeExpand" :
        			this.grdCodeTree.set_treeinitstatus("expand,all");
        			break;

        		case "btnTreeCollapse" :
        			this.grdCodeTree.set_treeinitstatus("collapse,all");
        			var minLvl = this.grdCodeTree.getBindDataset().getMin("CD_LVL");

        			if( Ex.isEmpty(this.divSearchArea.form.cboMenuDIv.value) )	minLvl++;

        			trace("minLvl ::: " + minLvl);

        			for(var i=0; i<this.grdCodeTree.getBindDataset().rowcount; i++)
        			{
        				if(this.grdCodeTree.getBindDataset().getColumn(i, "CD_LVL") < minLvl + 1)
        				{
        					trace("i=" + i);
        					this.grdCodeTree.setTreeStatus(i, true);
        				}
        			}

        			if(this.searchFlg)
        			{
        				if(this.nLastRow > -1)
        				{
        					var pRow = this.grdCodeTree.getTreeRow(this.grdCodeTree.getTreeParentRow(this.nLastRow, true));
        					while(pRow >- 1)
        					{
        						this.grdCodeTree.setTreeStatus(pRow, true);
        						pRow = this.grdCodeTree.getTreeRow(this.grdCodeTree.getTreeParentRow(pRow, true));
        					}
        					this.dsCodeTree.set_rowposition(this.nLastRow);
        				}
        			}
        			break;
        	}
        }

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

        this.dsCodeTree_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsFommCmmCdMt) )
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

        this.dsCodeTree_onrowposchanged = function(obj,e)
        {
        	this.dsFommCmmCdMt.clearData();

        	var cdNo 	= obj.getColumn(e.newrow, 'CD_NO');
        	var cmmCdNm	= obj.getColumn(e.newrow, 'CMM_CD_NM');

        	// Grid title 처리
        	this.stcGrdTitle.set_text('[' + cmmCdNm + '] ' + Ex.core.word('하위코드') + ' ' + Ex.core.word('목록') );
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcGrdTitle.text, this.stcGrdTitle._getCurrentStyleInheritValue("font"));
        	this.stcGrdTitle.set_width(parseInt(objSize.nx) + 20);

        	objSize = nexacro.getTextSize(this.stcCnt.text, this.stcCnt._getCurrentStyleInheritValue("font"));
        	this.stcCnt.set_width(parseInt(objSize.nx) + 20);
        	this.stcCnt.set_left("stcGrdTitle:0");

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_UP_CD_NO', cdNo);
        	this.fnSearch02();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };



        this.rdoAllCol_onitemchanged = function(obj,e)
        {
        	this.grdCodeMt.set_enableevent(false);
        	if(e.postvalue == 'all')	this.grdCodeMt.set_autofittype('none');
        	else						this.grdCodeMt.set_autofittype('col');
        	this.grdCodeMt.set_enableevent(true);
        	this.grdCodeMt.set_formatid(e.postvalue);

        	trace(this.grdCodeMt.autofittype);
        };

        this.onExpandUp = function(obj,e)
        {
        	if(e.row < 0)	return;
        	var bindNm	= nexacro.replaceAll(obj.getCellProperty("Body", e.col, "text"), "bind:", "");
        	alert(obj.getCellProperty("Body", e.col, "text"));
        	Ex.core.popup(
        		this,								// <--- 팝업 실행 스코프
        		"cmmCdDescCellEditPop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"comm::comTextareaPop.xfdl",		// <--- 팝업창 오픈 Url
        		{
        			pRefDesc		: true,
        			title			: "코드설명",
        			isHeightChange	: false,
        			isEss			: true,
        			subTitle		: "코드설명 편집",
        			pMsg			: obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), bindNm),
        			pBtnConfUseYn	: "Y"	//적용버튼 사용여부
        		},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		//"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		"width=1500,height=817"
        	);
        	return false;
        };

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboMenuDIv.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.staMenuNm.addEventHandler("onclick",this.divSearchArea_staMenuNm_onclick,this);
            this.divSearchArea.form.edtCmmCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.staMenuNm00.addEventHandler("onclick",this.divSearchArea_staMenuNm_onclick,this);
            this.divSearchArea.form.edtCmmCdNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdCodeTree.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.grdCodeMt.addEventHandler("onheadclick",this.grdAuthMenuDt_onheadclick,this);
            this.grdCodeMt.addEventHandler("onexpandup",this.onExpandUp,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeCollapse.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeExpand.addEventHandler("onclick",this.fnCommOnclick,this);
            this.rdoAllCol.addEventHandler("onitemchanged",this.rdoAllCol_onitemchanged,this);
            this.dsFommCmmCdMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCodeTree.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCodeTree.addEventHandler("onrowposchanged",this.dsCodeTree_onrowposchanged,this);
            this.dsCodeTree.addEventHandler("canrowposchange",this.dsCodeTree_canrowposchange,this);
            this.dsFommCmmCdLangDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0150_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
