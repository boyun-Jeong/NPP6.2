(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0280_W");
            this.set_titletext("회의관리(관리자용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttnd", this);
            obj._setContents("<ColumnInfo><Column id=\"MEET_ATTND_ID\" type=\"string\" size=\"20\"/><Column id=\"MEET_ID\" type=\"string\" size=\"12\"/><Column id=\"ATN_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"ATN_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_CD\" type=\"string\" size=\"30\"/><Column id=\"READ_YN\" type=\"string\" size=\"1\"/><Column id=\"READ_TIME\" type=\"string\" size=\"14\"/><Column id=\"CONF_YN\" type=\"string\" size=\"1\"/><Column id=\"CONF_TIME\" type=\"string\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdData","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsData");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdMainList_onsummclick");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"130\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"150\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"회의일자\"/><Cell col=\"4\" text=\"주관자\"/><Cell col=\"5\" text=\"개발요청(SR)NO\"/><Cell col=\"6\" text=\"회의명\"/><Cell col=\"7\" text=\"회의장소\"/><Cell col=\"8\" text=\"참석대상자\"/><Cell col=\"9\" text=\"미확인자\"/><Cell col=\"10\" text=\"완료일시\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:MEET_STIME\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:MNG_USER_NM\"/><Cell col=\"5\" text=\"bind:REQ_ID\"/><Cell col=\"6\" style=\"align:left;\" cssclass=\"grdBCell_WF_event\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MEET_LOC\" textAlign=\"left\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:ATTN_CNT\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"9\" style=\"align: ;\" text=\"bind:NOT_READ\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"10\" text=\"bind:CONF_TIME\" displaytype=\"date\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회의No\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"회의명\"/><Cell col=\"4\" text=\"회의장소\"/><Cell col=\"5\" text=\"회의일자\"/><Cell col=\"6\" text=\"참석자\"/><Cell col=\"7\" text=\"미확인자\"/><Cell col=\"8\" text=\"완료일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"selectfont: ;\" cssclass=\"grdBCell_WF_event\" text=\"bind:MEET_NO\"/><Cell col=\"2\" text=\"bind:FRNM\"/><Cell col=\"3\" style=\"align:left;\" cssclass=\"grdBCell_WF_event\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"4\"/><Cell col=\"5\" style=\"align: ;\" text=\"bind:MEET_STIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ATTN_CNT\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"7\" style=\"align: ;\" text=\"bind:NOT_READ\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"8\" text=\"bind:CONF_TIME\" displaytype=\"date\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","0","70","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회의 관리");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","13","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회의 일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEdate","216","13","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcMeetNo","calEdate:30","13","125","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("개발요청(SR)번호");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtReq_id","stcMeetNo:5","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSdate","Static11:0","13","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static13","calSdate:0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
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

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcMeetNm","edtReq_id:30","13","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("회의 명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMeetNm","stcMeetNm:5","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul,full");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcRegNm","edtMeetNm:30","13","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("주관자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRegNm","stcRegNm:5","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcRegNm00","edtRegNm:30.00","13","82","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("참석대상자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRegNm00","stcRegNm00:0","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:0","70","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_visible("true");
            obj.set_countDataset("dsData");
            obj.set_text("( 0건)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"180","32","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","310","24","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","130",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnReportDown",null,"0","60","24","195",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_fileDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
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
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtPjtNm","value","dsCond","PJT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.rdoAttend","value","dsCond","ATTEND_FLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtReq_id","value","dsCond","REQ_ID");
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

            obj = new BindItem("item7","divSearch.form.edtRegNm","value","dsCond","MNG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtRegNm00","value","dsCond","ATN_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0280_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0280_W
        * 화면(명)		︰ 회의 관리
        * 메뉴(경로)	︰ 회의 관리
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.10.13
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.10.13	 WEMB		최초작성
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

        	var EDATE = Ex.util.today();
        	var SDATE = Ex.util.addMonth(EDATE, -1);

        	this.dsCond.setColumn(rowpos, 'SDATE', SDATE);
        	this.dsCond.setColumn(rowpos, 'EDATE', EDATE);
        	this.dsCond.setColumn(rowpos, 'REQ_ID', undefined);
        	this.dsCond.setColumn(rowpos, 'TITLE', undefined);
        	this.dsCond.setColumn(rowpos, 'MNG_USER_NM', undefined);
        	this.dsCond.setColumn(rowpos, 'ATN_USER_NM', undefined);
        }

        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "select05";
            var sService = "FOMM0280W/select05";		// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";	// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	var sTranId = "save03";
            var sService = "FOMM0280W/save03";
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

        		case "select05" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save03" :
        			Ex.core.toast(this, "10004");
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
        			//trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)	this.dsPopRtn.loadXML(varValue);
        			this.dsCond.setColumn(0, "PJT_ID", this.dsPopRtn.getColumn(0, "PJT_ID"));
        			this.dsCond.setColumn(0, "PJT_NM", this.dsPopRtn.getColumn(0, "PJT_NAME"));
        			this.fnSearch();
        			break;

        		case "meetPop" :
        			if(varValue == "save") 	this.fnSearch();
        			break;
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
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        	//	arrBtn = [this.divGrdTopBtn.form.btnReportDown];
        	//Ex.util.setBtnVisible(this, 'reportPrnt', arrBtn); // 레포트

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
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
        		// "fomm::FOMM0250_P01.xfdl",	// 기존 팝업
        		//"sr::SR5000_P03.xfdl",	// 회의관리 화면을 안쓰기때문에 새로운 팝업 확인용으로 이동
        		//"sr::SR5000_P03.xfdl",
        		 "fomm::FOMM0280_P01.xfdl",
        		{
        			title		: "회의 상세",
        			pAdminYn	: "Y",
        			pPopType	: pPopType,
        			pMeetId		: pMeetId,
        			pCheckDs	: this.dsData
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

        		case "btnReportDown" :
        			Ex.core.popup(
        				this,								// <--- 팝업 실행 스코프
        				"jasperRptPop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::JasperReportViewerPop.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					pDbConn 	: "itsm",					//this.edtDataSourceNm.value,
        					pFileNm 	: "report/meetingReport",					//this.edtRptFileNm.value,
        					pDsParam	: this.dsParams
        				},									// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"							// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        }

        this.fnCommOnkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row < 0) 	return;

        	if(e.cell == obj.getBindCellIndex("body", "MEET_NO") || e.cell == obj.getBindCellIndex("body", "TITLE"))		// 회의 상세
        	{
        		var pPopType = 'U';	//최초등록자와 로그인한 유저가 같을때
        		this.fnOpenPop(pPopType);
        	}
        	else if(e.cell == obj.getBindCellIndex("body", "ATTN_CNT") || e.cell == obj.getBindCellIndex("body", "NOT_READ"))		// 참석자/미확인자
        	{
        		var chkVal = "";
        		if(e.cell == obj.getBindCellIndex("body", "ATTN_CNT"))
        		{
        			chkVal = this.dsData.getColumn(this.dsData.rowposition, 'ATTN_CNT');
        		}
        		else if(e.cell == obj.getBindCellIndex("body", "NOT_READ"))
        		{
        			chkVal = this.dsData.getColumn(this.dsData.rowposition, 'NOT_READ');
        		}

        		if(chkVal != "-")
        		{
        			var MEET_ID = this.dsData.getColumn(this.dsData.rowposition, 'MEET_ID');
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"attendeePop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0250_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: e.cell == obj.getBindCellIndex("body","NOT_READ") ? "미확인자" : "참석대상자",
        					pMeetId		: MEET_ID,
        					pAttnd		: e.cell == obj.getBindCellIndex("body","NOT_READ") ? "10" : ""
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
        		}
        	}
        };

        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdData.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divSearch.form.Static11.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.calEdate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.stcMeetNo.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtReq_id.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.calSdate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.stcMeetNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtMeetNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.stcRegNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtRegNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.stcRegNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtRegNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnReportDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0280_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
