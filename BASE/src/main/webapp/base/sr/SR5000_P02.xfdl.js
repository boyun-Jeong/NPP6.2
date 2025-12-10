(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_P02");
            this.set_titletext("요청서회의목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttnd", this);
            obj._setContents("<ColumnInfo><Column id=\"MEET_ATTND_ID\" type=\"string\" size=\"20\"/><Column id=\"MEET_ID\" type=\"string\" size=\"12\"/><Column id=\"ATN_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"ATN_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_CD\" type=\"string\" size=\"30\"/><Column id=\"READ_YN\" type=\"string\" size=\"1\"/><Column id=\"READ_TIME\" type=\"string\" size=\"14\"/><Column id=\"CONF_YN\" type=\"string\" size=\"1\"/><Column id=\"CONF_TIME\" type=\"string\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_comBtn",null,"100","400","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","20","123",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdMainList_onsummclick");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" text=\"회의No\"/><Cell col=\"4\" text=\"회의명\"/><Cell col=\"5\" text=\"회의장소\"/><Cell col=\"6\" text=\"회의일자\"/><Cell col=\"7\" text=\"참석자\"/><Cell col=\"8\" text=\"작성자\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:MNG_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:MNG_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" expr=\"expr:currow+1\"/><Cell col=\"3\" style=\"selectfont: ;\" cssclass=\"grdBCell_WF_event\" text=\"bind:MEET_NO\"/><Cell col=\"4\" style=\"align:left;\" cssclass=\"grdBCell_WF_event\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MEET_LOC\"/><Cell col=\"6\" style=\"align: ;\" text=\"bind:MEET_STIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ATTN_CNT\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"8\" text=\"bind:FRNM\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회의No\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"회의명\"/><Cell col=\"4\" text=\"회의장소\"/><Cell col=\"5\" text=\"회의일자\"/><Cell col=\"6\" text=\"참석자\"/><Cell col=\"7\" text=\"미확인자\"/><Cell col=\"8\" text=\"완료일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"selectfont: ;\" cssclass=\"grdBCell_WF_event\" text=\"bind:MEET_NO\"/><Cell col=\"2\" text=\"bind:FRNM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"grdBCell_WF_event\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"4\"/><Cell col=\"5\" style=\"align: ;\" text=\"bind:MEET_STIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ATTN_CNT\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"7\" style=\"align: ;\" text=\"bind:NOT_READ\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"8\" text=\"bind:CONF_TIME\" displaytype=\"date\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","20.00","89","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회의 관리");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","13","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회의 일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSdate","Static11:0","13","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static13","calSdate:0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEdate","Static13:0","13","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMeetNm","392.00","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcMeetNm","334.00","13","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("회의명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRegNm","600.00","13","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcRegNm","542.00","13","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:-3","89","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_visible("true");
            obj.set_countDataset("dsData");
            obj.set_text("(0건)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","113",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn","0",null,null,"50","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","10",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","10",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"89","310","24","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","150",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"20","1",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"85","1",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","69",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_comBtn
            obj = new Layout("default","",0,0,this.div_comBtn.form,function(p){});
            this.div_comBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtPjtNm","value","dsCond","PJT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.rdoAttend","value","dsCond","ATTEND_FLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoRead","value","dsCond","CONF_FLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calSdate","value","dsCond","SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calEdate","value","dsCond","EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtMeetNm","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtRegNm","value","dsCond","REG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR5000_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR5000_P02
        * 화면(명)	︰ 요청서회의목록
        * 메뉴(경로)	︰ 요청서회의목록
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.20
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.20	 WEMB		최초작성
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
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnSearchReset();
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearch();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	var rowpos = this.dsCond.addRow();


        	var EDATE = Ex.util.addMonth(Ex.util.today(), +6);
        	var SDATE = Ex.util.addMonth(Ex.util.today(), -6);

        	this.dsCond.setColumn(0, "REQ_ID", this.getOwnerFrame().pReqId); // 요청서ID
        	this.dsCond.setColumn(rowpos, 'SDATE', SDATE);
        	this.dsCond.setColumn(rowpos, 'EDATE', EDATE);
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";	// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        this.fnSave = function()
        {
        	var sTranId = "save02";
            var sService = "FOMM0250W/save02";
            var sInDs = "dsCond=dsCond dsData=dsData:A";
        	var sOutDs = "dsData=dsData";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

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
        		var param = {id : "ERROR", msg : sSvcId+"::" + nErrorCode+"::" + sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004");
        			break;

        		case "save02" :
        			Ex.core.toast(this, "10004");
        			//this.fnSearch();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) )
        		return;

        	switch(pID)
        	{
        		case "PJ0100_P01" :
        			trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)	this.dsPopRtn.loadXML(varValue);
        			this.dsCond.setColumn(0, "PJT_ID", this.dsPopRtn.getColumn(0, "PJT_ID"));
        			this.dsCond.setColumn(0, "PJT_NM", this.dsPopRtn.getColumn(0, "PJT_NAME"));
        			this.fnSearch();
        			break;

        		case "meetPop" :
        			if(varValue == "save")
        				this.fnSearch();
        			break;
        	}

        	if(varValue == "save"){
        		/*this.fnSearch();*/
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "alertSearchDateI" :
        			this.divSearch.form.calStime.setFocus();
        			break;

        		case "alertSearchFromDateI" :
        			this.divSearch.form.calStime.setFocus();
        			break;

        		case "alertSearchToDateI" :
        			this.divSearch.form.calEtime.setFocus();
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
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdData.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	// 버튼 영역 div align 처리
        	//Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	//Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {

        }


        this.fnOpenPop = function(pPopType)
        {
        	pPopType = pPopType||'I';

        	var pMeetId = '';
        	if(pPopType == 'I')
        	{
        	}
        	else
        	{
        		pMeetId = this.dsData.getColumn(this.dsData.rowposition, 'MEET_ID');
        	}

        	Ex.core.popup(
        		this,					// <--- 팝업 실행 스코프
        		"meetPop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		//"sr::SR5000_P03.xfdl",	// <--- 팝업창 오픈 Url
        		"fomm::FOMM0280_P01.xfdl",	// <--- 팝업창 오픈 Url
        		{
        			title		: "회의 상세",
        			pPopType	: pPopType,
        			pMeetId		: pMeetId,
        			pCheckDs	: this.dsData,
        			pReqId		: this.getOwnerFrame().pReqId
        		},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		//"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        		"width=1200,height=750"				// <--- width/height/modeless(프레임 처리 옵션)
        	);
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnDelete" :			// 삭제
        			this.fnDelete(this.dsData);
        			break;

        		case "btnExcelDown" :		// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdData],
           				Sheet	: [''],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnAdd" : 			// 등록
        			this.fnOpenPop('I');
        			break;

        		case "btnSave" :			//저장
        			if(this.dsData.getCaseCount("ROWFLAG=='D'") > 0)
        			{
        				var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" : 	// 닫기
        			this.isCloseBtnClick = true;
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }



        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        }
        this.fnCommOnkeydown = function(obj,e)
        {
        	if( e.keycode == 13) {
        		this.divSearch.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };



        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row < 0)
        		return;


        	if(e.cell == obj.getBindCellIndex("body", "MEET_NO") || e.cell == obj.getBindCellIndex("body", "TITLE"))		// 회의 상세
        	{
        		var pPopType = 'R';
        		var FRID = this.dsData.getColumn(this.dsData.rowposition, 'FRID');
        		if( FRID == Ex.util.getSession('gvUserId') )
        			pPopType = 'U';

        		this.fnOpenPop(pPopType);
        	}
        	else if(e.cell == obj.getBindCellIndex("body", "ATTN_CNT") || e.cell == obj.getBindCellIndex("body", "NOT_READ"))		// 참석자/미확인자
        	{
        		var MEET_ID = this.dsData.getColumn(this.dsData.rowposition, 'MEET_ID');
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"attendeePop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR5000_P04.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title		: "회의 참석자",
        				pMeetId		: MEET_ID,
        				pAttnd		: e.cell == obj.getBindCellIndex("body","NOT_READ") ? "10" : ""
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdData.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divSearch.form.Static11.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.calSdate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.calEdate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.edtMeetNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.stcMeetNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtRegNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.stcRegNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divGrdBotBtn.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("SR5000_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
