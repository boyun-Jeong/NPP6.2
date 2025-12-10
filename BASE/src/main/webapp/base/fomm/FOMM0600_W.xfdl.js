(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0600_W");
            this.set_titletext("통보발송이력");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_SEND_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_BATCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_SND_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_SND_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_SND_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_SND_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"STIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\"/><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD_NM\">발송시작시간</Col><Col id=\"CMM_CD\">NOTI_SND_STIME</Col></Row><Row><Col id=\"CMM_CD_NM\">발송완료시간</Col><Col id=\"CMM_CD\">NOTI_SND_ETIME</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
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

            obj = new Static("Static00_00_00","520.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSndUsr","Static00_00_00:0","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divUser","stcSndUsr:0.00","13","240","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle00","20.00","13","74","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("통보배치ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

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

            obj = new Static("Static00_00","divUser:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","334.00","13","15","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","359.00","13","161","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","165.00","13","161","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDateType","28.00","13","131","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDateType");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcRecUsr","Static00_00:0.00","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divUserSnd","stcRecUsr:0","13","240","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","divUserSnd:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSndYn","Static00_00_01:0.00","13","99","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("발송성공여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Radio("rdoSndYn","stcSndYn:0.00","7","120","34",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsYnCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdNoti","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"800\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"발송성공\"/><Cell col=\"2\" text=\"수신자\"/><Cell col=\"3\" text=\"발송시작시간\"/><Cell col=\"4\" text=\"발송완료시간\"/><Cell col=\"5\" text=\"발송내용\"/><Cell col=\"6\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NOTI_SND_SUCCESS\"/><Cell col=\"2\" text=\"bind:SND_USER_NM\"/><Cell col=\"3\" text=\"bind:NOTI_SND_STIME\"/><Cell col=\"4\" text=\"bind:NOTI_SND_ETIME\"/><Cell col=\"5\" text=\"bind:NOTI_SND_MSG\" textAlign=\"left\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"6\" text=\"bind:NOTI_USER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("통보발송목록");
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

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","104","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","5",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form.divUser
            obj = new Layout("default","",0,0,this.divSearchArea.form.divUser.form,function(p){});
            this.divSearchArea.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divUserSnd.form
            obj = new Layout("default","",0,0,this.divSearchArea.form.divUserSnd.form,function(p){});
            this.divSearchArea.form.divUserSnd.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","divSearchArea.form.edtSndUsr","value","dsCond","NOTI_CGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.calBeginDate","value","dsCond","STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.calEndDate","value","dsCond","ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.rdoSndYn","value","dsCond","NOTI_SND_SUCCESS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0600_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0600_W
        * 화면(명)		︰ 통지이력관리
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 통지이력관리
        * 화면 설명	︰ 통지이력관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.02.01
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.02.01	 김지수		최초작성
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

        	this.dsCond.setColumn(this.dsCond.rowposition, 'NOTI_BATCH_ID', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DATE_TYPE', '');
        	this.divSearchArea.form.calBeginDate.set_enable(false);
        	this.divSearchArea.form.calEndDate.set_enable(false);
        	this.dsCond.setColumn(this.dsCond.rowposition, 'NOTI_SND_SUCCESS', 'Y');
        	//this.divSearchArea.form.divUser.fnCommOnclick(this.divSearchArea.form.divUser.btnClear);
        	this.divSearchArea.form.divUser.form.resetInput(false);
        	this.divSearchArea.form.divUserSnd.form.resetInput(false);

        	//this.fnCommOnclick(this.tab.tabpage4.form.divGrdBtn.form.btnTestConfirm)
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0600W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
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
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{
        		case "noticePop" :
        			if( (varValue||'').toUpperCase() == 'SAVE' )
        				this.fnSearch();
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
        			this.fnSearch();
        			break;
        	}
        }

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "NOTI_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "NOTI_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "NOTI_USER_ID",	"");
        			this.dsCond.setColumn(0, "NOTI_USER_NM",	"");
        		}
        	}
        	else if(compId == "divUserSnd")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "SND_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "SND_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "SND_USER_ID",	"");
        			this.dsCond.setColumn(0, "SND_USER_NM",	"");
        		}
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.grdNoti.displayRowType();

        	this.fnGetCmmCd();

        	var	arrBtn = [this.divGrdTopBtn.form.btnExcelDown];
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [ "YN_CD2",		]	// 조회할 상위코드
        		,codeDiv: [ "CMM_CD",		]	// 조회할 코드의 업무구분
        		,optStr	: [ "",				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [ "Y",			]	// 사용여부
        		,filter	: [ "",				]	// filterStr
        		,objDs	: [	this.dsYnCd,	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
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
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdNoti],
           				Sheet	: ['통지발송이력'],
           				FileNm	: ["통지발송이력"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
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

        this.grdNoti_oncelldbclick = function(obj,e)
        {
        	var NOTI_BATCH_ID = this.dsData.getColumn(this.dsData.rowposition, 'NOTI_BATCH_ID');
        	this.fnOpenPop(NOTI_BATCH_ID);
        };

        this.divSearchArea_cboDateType_onitemchanged = function(obj,e)
        {
        	var dateType = this.divSearchArea.form.cboDateType.value;
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DATE_TYPE', dateType);

        	var calSDate = this.divSearchArea.form.calBeginDate;
        	var calEDate = this.divSearchArea.form.calEndDate;

        	if( Ex.isEmpty(e.postvalue) )
        	{
        		calSDate.set_enable(false);
        		calEDate.set_enable(false);
        		this.dsCond.setColumn(0,"STIME",null);
        		this.dsCond.setColumn(0,"ETIME",null);
        	}
        	else
        	{
        		calSDate.set_enable(true);
        		calEDate.set_enable(true);
        		this.dsCond.setColumn(this.dsCond.rowposition, 'STIME', Ex.util.addMonth(Ex.util.today(), -1)+'000000000');
        		this.dsCond.setColumn(this.dsCond.rowposition, 'ETIME', Ex.util.today()+'000000000');
        	}
        };


        this.grdNoti_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'NOTI_SND_MSG') )
        	{
        		var NOTI_BATCH_ID = this.dsData.getColumn(e.row, 'NOTI_BATCH_ID');

        		Ex.core.popup(
        			this,
        			'noticePop',
        			"fomm::FOMM0500_P01.xfdl",
        			{ title			: '발송내용 상세 ',
        			  pPopType		: 'R',
        			  pNOTI_BATCH_ID	: NOTI_BATCH_ID
        			},
        			"autosize"
        		);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.stcSndUsr.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.stcTitle00.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.calEndDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.calBeginDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDateType.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDateType.addEventHandler("onitemchanged",this.divSearchArea_cboDateType_onitemchanged,this);
            this.divSearchArea.form.stcRecUsr.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.stcSndYn.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.rdoSndYn.addEventHandler("onitemchanged",this.divContent_rdoNotiHoliYN_onitemchanged,this);
            this.grdNoti.addEventHandler("oncellclick",this.grdNoti_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsYnCd.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0600_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
