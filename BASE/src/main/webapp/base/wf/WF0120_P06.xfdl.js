(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_P06");
            this.set_titletext("등록화면 - 서브화면URL지정 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"SKIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SKIP_OPT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_RTRN\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_APV_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_RTRN_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_SAVE_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APV_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RTRN_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_APV_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_RTRN_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_SAVE_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"RTRN_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtrnWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMapWfProcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","20","115","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("서브화면 정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","83",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUrl","20.00","83","110","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("화면URL");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtUrl","stcUrl:5.00","88",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_01","20.00","50",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcName","20.00","50","110","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("화면 표기명칭");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtName","stcName:5.00","55",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg04_00","20.00","199",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcYn03_00","20.00","199","110","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사용가능버튼");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn11","135.00","207","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_text("승인");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn12","215.00","207","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_text("반려");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn13","295.00","207","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00","20","170","170","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_text("결재자 정의");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg05_00","20.00","232",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcText01_00","20.00","232","110","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("버튼 텍스트");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtText11","135.00","237","75","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_enable("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtText12","215.00","237","75","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_enable("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtText13","295.00","237","75","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("21");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_enable("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_02","20.00","116",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboMapWfProcCd","135.00","121",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("23");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsMapWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcMapWfProcCd","20.00","116","110","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("진행단계매핑");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.cboScreenRtrn","value","dsRtn","SCREEN_RTRN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.txaSkipCond","value","dsRtn","SKIP_OPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtUrl","value","dsRtn","URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.stcBg01_00_01","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.edtSkipCond","value","dsRtn","SKIP_OPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.stcBg01_01_00","value","dsRtn","SCREEN_RTRN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.mcboScreenEdit","value","dsRtn","SCREEN_EDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.stcBg04","value","dsReqProcDt","SCREEN_SAVE_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.stcBg05","value","dsReqProcDt","SCREEN_SAVE_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.stcBg04_00","value","dsReqProcDt","SCREEN_SAVE_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.chkBtnYn01","value","dsRtn","SCREEN_APV_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.chkBtnYn02","value","dsRtn","SCREEN_RTRN_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.chkBtnYn03","value","dsRtn","SCREEN_SAVE_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.edtText01","value","dsRtn","SCREEN_APV_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContent.form.edtText02","value","dsRtn","SCREEN_RTRN_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContent.form.edtText03","value","dsRtn","SCREEN_SAVE_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContent.form.edtText13","value","dsRtn","SAVE_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContent.form.edtText12","value","dsRtn","RTRN_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divContent.form.edtText11","value","dsRtn","APV_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divContent.form.chkBtnYn13","value","dsRtn","SAVE_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divContent.form.chkBtnYn12","value","dsRtn","RTRN_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContent.form.chkBtnYn11","value","dsRtn","APV_BTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divContent.form.chkBtnEssYn02","value","dsRtn","RTRN_ESS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divContent.form.stcBg05_01","value","dsReqProcDt","SCREEN_SAVE_BTN_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divContent.form.chkBtnEssYn01","value","dsRtn","APV_ESS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divContent.form.rdoScrType","value","dsRtn","SCRN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divContent.form.cboMapWfProcCd","value","dsRtn","MAP_WF_PROC_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_P06.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ WF0120_P04
        * 화면(명)	︰ 서브화면URL지정 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 워크플로우 노드별 서브화면 URL 지정 팝업
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
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 조회
        this.fnSearch = function()
        {
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)	objDs.setDeleteRow(i);

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
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID)
        	{
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.dsRtn.clearData();
        	this.dsRtn.setAddRow();
        	this.dsRtn.setColumn(0, 'SCREEN_RTRN', '');
        	this.dsRtn.setColumn(0, 'SCREEN_EDIT', '');

        	//var bReadOnly 	= this.getOwnerFrame().bReadOnly;
        	var CMM_CD		= this.getOwnerFrame().WF_PROC_CD;
        	var CMM_CD_NM	= this.getOwnerFrame().WF_PROC_NM;
        	var URL			= this.getOwnerFrame().URL;

        	var APV_BTN_YN         		= this.getOwnerFrame().APV_BTN_YN||"Y";
        	var RTRN_BTN_YN        		= this.getOwnerFrame().RTRN_BTN_YN||"Y";
        	var SAVE_BTN_YN        		= this.getOwnerFrame().SAVE_BTN_YN||"N";

        	var APV_BTN_TEXT      	 	= this.getOwnerFrame().APV_BTN_TEXT||"승인";
        	var RTRN_BTN_TEXT    	  	= this.getOwnerFrame().RTRN_BTN_TEXT||"반려";
        	var SAVE_BTN_TEXT			= this.getOwnerFrame().SAVE_BTN_TEXT||"저장";

        	var SCRN_TYPE				= this.getOwnerFrame().SCRN_TYPE;

        	if( APV_BTN_YN         == 'Y')	this.divContent.form.edtText11.set_enable(true);
        	if( RTRN_BTN_YN        == 'Y')	this.divContent.form.edtText12.set_enable(true);
        	if( SAVE_BTN_YN        == 'Y')	this.divContent.form.edtText13.set_enable(true);

        	var MAP_WF_PROC_CD 	= this.getOwnerFrame().MAP_WF_PROC_CD||'';

        	this.dsMapWfProcCd.loadXML(this.getOwnerFrame().dsMapWfProcCd);
        	this.dsMapWfProcCd.set_filterstr(" Ex.isEmpty(ITM_VAL_1) || ITM_VAL_1 == '"+ CMM_CD +"' ");

        	// 반려단계 선택용 현재 워크플로우 이전 단계 setting
        	this.dsWfDt.loadXML(this.getOwnerFrame().dsWfDt);

        	var rowPos = this.dsRtrnWfProcCd.setAddRow();
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD',		'');
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', 	Ex.core.word('없음') );

        	var arrPrevWfProc = this.getOwnerFrame().prevWfProcCd.split(',');

        	for(var i = 0; i < arrPrevWfProc.length-1; i++)
        	{
        		var arrPrevWfProcCd = arrPrevWfProc[i].split('|');
        		rowPos = this.dsRtrnWfProcCd.setAddRow();
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CGER', arrPrevWfProcCd[1]);
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', arrPrevWfProcCd[0]);
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrPrevWfProcCd[0]), 'WF_PROC_NM')|| '등록' );
        	}

        	rowPos = this.dsRtrnWfProcCd.setAddRow();
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', "WF_PROC_9999");
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', "완료");
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CGER', 'T');

        	this.dsRtrnWfProcCd.set_filterstr( "CGER == 'T' " );

        	rowPos = this.dsEditWfProcCd.setAddRow();
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', "");
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', '없음');
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', "TOP");
        	this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', '기본정보');

        	for(var i = 0; i < arrPrevWfProc.length-1; i++)
        	{
        		var arrPrevWfProcCd = arrPrevWfProc[i].split('|');
        		rowPos = this.dsEditWfProcCd.setAddRow();
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', arrPrevWfProcCd[0]);
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrPrevWfProcCd[0]), 'WF_PROC_NM') || '등록' );
        	}

        	//this.divContent.form.stcTitle.set_text('[' + CMM_CD_NM + '] ' + this.divContent.form.stcTitle.text);	// title setting
        	this.divContent.form.edtName.set_value(CMM_CD_NM);	//화면명칭 셋팅

        	this.dsRtn.setColumn(0, 'URL', 		URL);

        	this.dsRtn.setColumn(0, 'APV_BTN_YN', APV_BTN_YN);
        	this.dsRtn.setColumn(0, 'RTRN_BTN_YN', RTRN_BTN_YN);
        	this.dsRtn.setColumn(0, 'SAVE_BTN_YN', SAVE_BTN_YN);

        	this.dsRtn.setColumn(0, 'APV_BTN_TEXT', APV_BTN_TEXT);
        	this.dsRtn.setColumn(0, 'RTRN_BTN_TEXT', RTRN_BTN_TEXT);
        	this.dsRtn.setColumn(0, 'SAVE_BTN_TEXT', SAVE_BTN_TEXT);
        	this.dsRtn.setColumn(0, 'SCRN_TYPE', SCRN_TYPE);

        	this.dsRtn.setColumn(0, 'MAP_WF_PROC_CD', MAP_WF_PROC_CD);

        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnClose" :		// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			this.dsRtn.setColumn(0, 'WF_PROC_NM', 		this.divContent.form.edtName.value);
        			this.dsRtn.setColumn(0, 'URL', 				this.divContent.form.edtUrl.value);

        			var dsStr = this.dsRtn.saveXML();
        			//trace(dsStr);
        			Ex.core.pclose(this, dsStr);
        			break;
        	}
        }

        this.divContent_cboSkip_onchanged = function(obj,e)
        {
        	this.divContent.form.edtSkipCond.set_enable(e.postvalue);
        };

        this.chkBtn_onchanged = function(obj,e)
        {
        	var val = (e.postvalue == 'Y' ? true : false);

        	if(obj.id == "chkBtnYn01")			this.divContent.form.edtText01.set_enable(val);
        	else if(obj.id == "chkBtnYn02")
        	{
        		this.divContent.form.edtText02.set_enable(val);
        		//this.divContent.form.cboScreenRtrn.set_enable(val);
        	}
        	else if(obj.id == "chkBtnYn03")
        	{
        		this.divContent.form.edtText03.set_enable(val);
        		//this.divContent.form.mcboScreenEdit.set_enable(val);
        	}
        	else if(obj.id == "chkBtnYn11")		this.divContent.form.edtText11.set_enable(val);
        	else if(obj.id == "chkBtnYn12")
        	{
        		this.divContent.form.edtText12.set_enable(val);
        		//this.divContent.form.cboScreenRtrn.set_enable(val);
        	}
        	else if(obj.id == "chkBtnYn13")
        	{
        		this.divContent.form.edtText13.set_enable(val);
        		//this.divContent.form.mcboScreenEdit.set_enable(val);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.chkBtnYn11.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.divContent.form.chkBtnYn12.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.divContent.form.chkBtnYn13.addEventHandler("onchanged",this.chkBtn_onchanged,this);
        };
        this.loadIncludeScript("WF0120_P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
