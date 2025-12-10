(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0130_W");
            this.set_titletext("권한그룹별 메뉴관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_AUTH_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthMenuDt", this);
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
            obj.set_taborder("5");
            obj.set_text("권한그룹명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtAuthNm","99","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staAuthNm","269","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("그룹유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","239","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","478","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserNm","508","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("관리자여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAdminYn","590","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","730","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAuthTypeCd","338","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsAuthTypeCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdAuthMt","0","104",null,null,"65%","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommAuthMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"그룹코드\"/><Cell col=\"2\" text=\"권한그룹명\"/><Cell col=\"3\" text=\"그룹유형\"/><Cell col=\"4\" text=\"관리자여부\" displaytype=\"normal\" edittype=\"none\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:AUTH_ID\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:AUTH_NM\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:AUTH_TYPE_CD\" edittype=\"none\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsAuthTypeCdSel\"/><Cell col=\"4\" text=\"bind:ADMIN_YN\" displaytype=\"text\" edittype=\"none\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCdSel\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcAuthTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("권한그룹 목록");
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

            obj = new Grid("grdAuthMenuDt","grdAuthMt:20","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsFommAuthMenuDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useCheck("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"55\"/><Column size=\"30\"/><Column size=\"65\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"행상태\"/><Cell col=\"1\" colspan=\"3\" text=\"메뉴레벨\"/><Cell col=\"4\" rowspan=\"2\" text=\"메뉴명\"/><Cell col=\"5\" colspan=\"12\" text=\"권한\"/><Cell row=\"1\" col=\"1\" text=\"1레벨\"/><Cell row=\"1\" col=\"2\" text=\"2레벨\"/><Cell row=\"1\" col=\"3\" text=\"3레벨\"/><Cell row=\"1\" col=\"5\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"6\" text=\"접근\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/><Cell row=\"1\" col=\"7\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"8\" text=\"추가\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/><Cell row=\"1\" col=\"9\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"10\" text=\"삭제\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/><Cell row=\"1\" col=\"11\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"12\" text=\"엑셀\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/><Cell row=\"1\" col=\"13\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"14\" text=\"레포트\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/><Cell row=\"1\" col=\"15\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\"/><Cell row=\"1\" col=\"16\" text=\"파일첨부\" border=\"1px solid #d3d3d3, 1px solid #d3d3d3, 1px solid #d3d3d3, 0px\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWFLAG\"/><Cell col=\"1\" text=\"bind:MENU_LV1_NM\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:MENU_LV2_NM\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:MENU_LV3_NM\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:MENU_NM\" displaytype=\"text\"/><Cell col=\"5\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:READ_YN\"/><Cell col=\"7\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:WRITE_YN\"/><Cell col=\"9\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DELETE_YN\"/><Cell col=\"11\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:EXCL_DOWN_YN\"/><Cell col=\"13\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:REPORT_PRNT_YN\"/><Cell col=\"15\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FILE_UP_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdAuthMt:0.00","71","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntMenuDt","1020","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthMenuDt");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserTItle","grdAuthMt:20.00","71",null,"23","830",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[권한그룹] 메뉴권한 목록");
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

            obj = new Static("stcCnt","stcAuthTitle:10","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtAuthNm","value","dsCond","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboAdminYn","value","dsCond","ADMIN_YN");
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
        this.registerScript("FOMM0130_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0130_W
        * 화면(명)		︰ 권한그룹별 메뉴관리
        * 메뉴(경로)	︰ 관리자 > 권한관리 > 권한그룹별 메뉴관리
        * 화면 설명	︰ SPP 기본 권한그룹별 메뉴관리 화면
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
        	this.fnCompInit();		// 컴포넌트 촉기화

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
        	if( Ex.util.isUpdated(this.dsFommAuthMt) ||
        		Ex.util.isUpdated(this.dsFommAuthMenuDt) )
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

        // 조회
        this.fnSearch01 = function()
        {
        	this.dsFommAuthMenuDt.clearData();

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0130W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommAuthMt=dsFommAuthMt";       // 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 메뉴 목록 조회
        this.fnSearchAuthMenu = function()
        {
        	var sTranId = "select02";
            var sService = "FOMM0130W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommAuthMenuDt=dsFommAuthMenuDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	var AUTH_ID = this.dsFommAuthMt.getColumn(this.dsFommAuthMt.rowposition, 'AUTH_ID');

        	var sTranId = "save01";
            var sService = "FOMM0130W/save01";
            var sInDs = "dsFommAuthMenuDt=dsFommAuthMenuDt:U dsCond=dsCond";
            var sOutDs = "dsFommAuthMt=dsFommAuthMt";
            var sArg = "AUTH_ID='" + AUTH_ID + "'";
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
        			this.grdAuthMt.setCellProperty("Head", this.grdAuthMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select02" :
        			this.grdAuthMenuDt.setCellProperty("Head", 7, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 9, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 11, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 13, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 15, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 17, "text", "0");
        			break;

        		case "save01" :
        			this.dsFommAuthMt.set_rowposition(this.nLastRow);
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdAuthMenuDt.setCellProperty("Head", 7, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 9, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 11, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 13, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 15, "text", "0");
        			this.grdAuthMenuDt.setCellProperty("Head", 17, "text", "0");
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
        			this.nLastRow = this.dsFommAuthMt.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsFommAuthMt.set_rowposition(this.nSelRow);
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
        	this.grdAuthMt.displayRowType();
        	this.grdAuthMenuDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'YN_CD',		'AUTH_TYPE_CD',		'AUTH_TYPE_CD']		// 조회할 상위코드
        		,codeDiv: ['',			'',				'',					'']					// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'SEL',			'ALL',				'NO']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',			'Y',				'Y']				// 사용여부
        		,filter	: ['',			'',				'',					'']					// filterStr
        		,objDs	: [this.dsYnCd,	this.dsYnCdSel,	this.dsAuthTypeCd,	this.dsAuthTypeCdSel]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsFommAuthMt) &&
        		!Ex.util.isUpdated(this.dsFommAuthMenuDt) )
        		return false;

        	return true;
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj)
        	{
        		case this.divSearchArea.form.btnSearch :	// 조회
        			this.fnSearch();
        			break;

        		case this.divSearchArea.form.btnSearchReset :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case this.divGrdBotBtn.form.btnSave : 	// 저장
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

        this.dsFommAuthMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsFommAuthMenuDt) )
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


        this.dsFommAuthMt_onrowposchanged = function(obj,e)
        {
        	this.dsFommAuthMenuDt.clearData();

        	var authId 	= obj.getColumn(e.newrow, 'AUTH_ID');
        	var authNm 	= obj.getColumn(e.newrow, 'AUTH_NM')||Ex.core.word('새 권한그룹');

        	// Grid title 처리
        	this.stcUserTItle.set_text('[' + authNm + '] ' + Ex.core.word('메뉴권한') + ' ' + Ex.core.word('목록') );
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcUserTItle.text, this.stcUserTItle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntMenuDt.set_left(this.stcUserTItle.getOffsetLeft() + nWidth);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_AUTH_ID', authId);
        	this.fnSearchAuthMenu();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        // cell Merge로 공통 그리드 헤더 체크 안 쓰고 개별 처리
        this.grdAuthMenuDt_onheadclick = function(obj,e)
        {
        	if(obj.getCellProperty("head", e.cell, "displaytype").toUpperCase() == 'CHECKBOXCONTROL')
        	{
        		// head checkbox 값 setting
        		var chkVal = 0;
        		if (obj.getCellProperty("head", e.cell, "text") == '1')		chkVal = '0';
        		else	chkVal = '1';
        		obj.setCellProperty("head", e.cell, "text", chkVal);

        		// bind dataset value setting
        		var colNm = '';
        		switch(e.col)
        		{
        			case 5 :	colNm = 'READ_YN';			break;
        			case 7 :	colNm = 'WRITE_YN';			break;
        			case 9 :	colNm = 'DELETE_YN';		break;
        			case 11 :	colNm = 'EXCL_DOWN_YN';		break;
        			case 13 :	colNm = 'REPORT_PRNT_YN';	break;
        			case 15 :	colNm = 'FILE_UP_YN';		break;
        		}
        		var objDs = obj.getBindDataset();
        		for(var i = 0; i < objDs.rowcount; i++)
        			objDs.setColumn(i, colNm, chkVal);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.edtAuthNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboAdminYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboAuthTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdAuthMenuDt.addEventHandler("onheadclick",this.grdAuthMenuDt_onheadclick,this);
            this.grdAuthMenuDt.addEventHandler("oncellclick",this.grdAuthMenuDt_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommAuthMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommAuthMt.addEventHandler("canrowposchange",this.dsFommAuthMt_canrowposchange,this);
            this.dsFommAuthMt.addEventHandler("onrowposchanged",this.dsFommAuthMt_onrowposchanged,this);
            this.dsFommAuthMenuDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0130_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
