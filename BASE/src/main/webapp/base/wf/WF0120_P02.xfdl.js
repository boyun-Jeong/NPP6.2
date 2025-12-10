(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_P02");
            this.set_titletext("검토자선택 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,607);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfRver", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"STR_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtrnWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFuncTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","462",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

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

            obj = new Static("Static00_02","0",null,null,"20","0","-1",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"20","161","24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Tab("tabFuncType","20.00","20",null,"388","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_normal");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Tabpage("tab01",this.divContent.form.tabFuncType);
            obj.set_text("사용자 선택 지정");
            this.divContent.form.tabFuncType.addChild(obj.name, obj);

            obj = new Static("stcUser","0","10","120","24",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("0");
            obj.set_text("검토자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"10","161","24","0",null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdReviewer","0","44",null,"227","0",null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsWfRver");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"사번(ID)\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"필수검토\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ESS_YN\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/></Band></Format></Formats>");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Static("stcUser00","0","grdReviewer:20","120","24",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("3");
            obj.set_text("검토 조건");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","325",null,"34","0",null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Static("stcRverNum","0","325","130","34",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("총 검토 수");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Edit("edtRverNum","135.00","330","100","24",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_inputtype("digit");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","34",null,"10","-40",null,null,null,null,null,this.divContent.form.tabFuncType.tab01.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.tabFuncType.tab01.addChild(obj.name, obj);

            obj = new Tabpage("tab02",this.divContent.form.tabFuncType);
            obj.set_text("서비스 지정");
            this.divContent.form.tabFuncType.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","44",null,"34","0",null,null,null,null,null,this.divContent.form.tabFuncType.tab02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.tabFuncType.tab02.addChild(obj.name, obj);

            obj = new Static("stcSvcNm","0","44","100","34",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("서비스명");
            this.divContent.form.tabFuncType.tab02.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm","stcSvcNm:5.00","49",null,"24","5",null,null,null,null,null,this.divContent.form.tabFuncType.tab02.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("서비스명;NULL");
            obj.set_inputfilter("comma,dot,space,sign");
            obj.set_inputtype("alpha,digit,english,symbol");
            this.divContent.form.tabFuncType.tab02.addChild(obj.name, obj);

            obj = new Static("stcUser","0","10","155","24",null,null,null,null,null,null,this.divContent.form.tabFuncType.tab02.form);
            obj.set_taborder("3");
            obj.set_text("검토자 지정 서비스명");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabFuncType.tab02.addChild(obj.name, obj);

            obj = new Static("stcName","3.17%","461","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("표기명칭");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRtrnNode","50.00%","462","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("반려 시 워크플로우");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtName","stcName:3.00","467",null,"24","stcRtrnNode:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUser00","20","tabFuncType:20","120","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("검토자 정의");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20.00","494",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcScreenRtrn00","20.00","494","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("수정가능단계");
            this.divContent.addChild(obj.name, obj);

            obj = new MultiCombo("mcboScreenEdit","155.00","499",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsEditWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("mcbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboRtrnWf","435.00","467",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsRtrnWfProcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabFuncType.tab01.form
            obj = new Layout("default","",0,0,this.divContent.form.tabFuncType.tab01.form,function(p){});
            this.divContent.form.tabFuncType.tab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabFuncType.tab02.form
            obj = new Layout("default","",0,0,this.divContent.form.tabFuncType.tab02.form,function(p){});
            this.divContent.form.tabFuncType.tab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,607,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.tabFuncType.tab01.form.stcBg01_00","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.stcBg01_00","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ WF0120_P02
        * 화면(명)	︰ 검토자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 워크플로우 검토자 선택 팝업
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
        this.pIU = 'I';
        this.orgFuncTypeCd;			// 원본
        this.funcTypeCd	= '01';		// 01: 사용자선택, 02: 조건지정
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
        	this.pIU = this.getOwnerFrame().pIU||'I';
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
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID)
        	{
        		case "selectUserPop" :	// 사용자선택
        			this.dsSelUser.loadXML(varValue);

        			for(var i = 0; i < this.dsSelUser.rowcount; i++)
        			{
        				this.dsSelUser.setColumn(i, 'CHK', '0');

        				var userId = this.dsSelUser.getColumn(i, 'USER_ID');
        				var duplRow = this.dsWfRver.findRow('USER_ID', userId);
        				if( duplRow < 0 )
        				{
        					var rowPos = this.dsWfRver.setAddRow();
        					this.dsWfRver.setCopyRow(rowPos, this.dsSelUser, i);
        					this.dsWfRver.setColumn(rowPos, 'FUNC_TYPE_CD', this.funcTypeCd);
        					this.dsWfRver.setColumn(rowPos, 'ESS_YN', '1');
        				}
        			}
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "selectConfirm" :	// 선택 확인
        			this.fnSelect();
        			break;

        		case "noCgerTotalRverAlert" :
        			this.divContent.form.tabFuncType.tab01.form.edtRverNum.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContent.form.tabFuncType.tab01.form.grdReviewer.displayRowType();

        	this.fnGetCmmCd();

        	this.dsWfDt.loadXML(this.getOwnerFrame().dsWfDt);	// WorkFlow 단계 dataset
        	// 반려단계 선택용 현재 워크플로우 이전 단계 setting
        	var arrWfProcCd = this.getOwnerFrame().prevWfProcCd.split(',');

        	for(var i = 0; i < arrWfProcCd.length; i++)
        	{
        		var rowPos = this.dsRtrnWfProcCd.setAddRow();
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', arrWfProcCd[i]);
        		this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrWfProcCd[i]), 'WF_PROC_NM')||Ex.core.word('등록') );
        	}

        	rowPos = this.dsRtrnWfProcCd.setAddRow();
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD', "WF_PROC_9999");
        	this.dsRtrnWfProcCd.setColumn(rowPos, 'CMM_CD_NM', "완료");

        	for(var i = 0; i < arrWfProcCd.length; i++)
        	{
        		var rowPos = this.dsEditWfProcCd.setAddRow();
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD', arrWfProcCd[i]);
        		this.dsEditWfProcCd.setColumn(rowPos, 'CMM_CD_NM', this.dsWfDt.getColumn(this.dsWfDt.findRow('WF_PROC_CD', arrWfProcCd[i]), 'WF_PROC_NM')||Ex.core.word('등록') );
        	}

        	var WF_PROC_CD	= this.getOwnerFrame().WF_PROC_CD||'';
        	var WF_FUNC_CD 	= this.getOwnerFrame().WF_FUNC_CD||'';
        	var WF_FUNC_NM 	= this.getOwnerFrame().WF_FUNC_NM||'';
        	this.funcTypeCd = this.getOwnerFrame().FUNC_TYPE_CD||'01';	// 검토자 지정 유형; 01: 사용자선택, 02:조건지정
        	this.orgFuncTypeCd = this.funcTypeCd;
        	var TOT_RVER	= this.getOwnerFrame().TOT_RVER||1;

        	var dsData;

        	trace("this.pIU.toUpperCase() : " + this.pIU.toUpperCase() + " WF_FUNC_NM : " + WF_FUNC_NM);

        	if(this.funcTypeCd == "01")
        	{
        		dsData	= this.getOwnerFrame().dsReqCgerDt||'';
        	}
        	else if(this.funcTypeCd == "02")
        	{
        		dsData	= this.getOwnerFrame().dsReqCgerSvcDt||'';
        	}

        	switch(this.pIU.toUpperCase())
        	{
        		case "I" :
        			this.divContent.form.edtName.set_value(Ex.core.word('검토') );	//검토자 명칭
        			this.divContent.form.cboRtrnWf.set_value(WF_PROC_CD);
        			break;

        		case "U" :
        			this.divContent.form.edtName.set_value(WF_FUNC_NM);		// 검토자 명칭

        			dsData.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "' && WF_FUNC_CD=='" + WF_FUNC_CD + "'");

        			if(this.funcTypeCd == "01")
        			{
        				// 검토자 setting
        				this.dsWfRver.set_enableevent(false);

        				for(var i = 0; i < dsData.rowcount; i++)
        				{
        					var rowPos = this.dsWfRver.setAddRow();
        					this.dsWfRver.setCopyRow(rowPos, dsData, i);
        					this.dsWfRver.setColumn(rowPos, 'ROWFLAG', '');
        				}
        				this.dsWfRver.set_enableevent(true);
        			}
        			else if(this.funcTypeCd == "02")
        			{
        				// 기존 담당자 목록 copy
        				trace("dsData.rowcount : " + dsData.rowcount + " JAVA_SVC_NM : " + dsData.getColumn(0, "JAVA_SVC_NM"));
        				this.divContent.form.tabFuncType.tab02.form.edtSvcNm.set_value(dsData.getColumn(0, "JAVA_SVC_NM"));
        			}

        			var EDIT = this.getOwnerFrame().EDIT||'';
        			if( !Ex.isEmpty(EDIT) )	this.divContent.form.mcboScreenEdit.set_value(EDIT);

        			// 반려 단계 setting
        			var RTRN = this.getOwnerFrame().RTRN||'';
        			if( !Ex.isEmpty(RTRN) )	this.divContent.form.cboRtrnWf.set_value(RTRN);
        			else					this.divContent.form.cboRtrnWf.set_value(WF_PROC_CD);

        			// tab index setting
        			switch(this.funcTypeCd)
        			{
        				case "01" :	this.divContent.form.tabFuncType.set_tabindex(0);	break;
        				case "02" :	this.divContent.form.tabFuncType.set_tabindex(1);	break;
        			}
        			break;
        	}

        	if(this.funcTypeCd == "01")
        	{
        		trace("TOT_RVER ::: " + TOT_RVER);
        		// 검토자 수 setting
        		this.divContent.form.tabFuncType.tab01.form.edtRverNum.set_value(TOT_RVER||this.dsWfRver.rowcount||1);
        	}
        	this.divContent.form.tabFuncType.set_visible(true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CGER_TYPE_CD']		// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['NO']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']					// 사용여부
        		,filter	: ['']					// filterStr
        		,objDs	: [this.dsFuncTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	switch(this.funcTypeCd)
        	{
        		case "01" :
        			var nRow = this.dsWfRver.getCaseCount("ROWFLAG != 'D'");	// 적용할 row 수
        			var nRver = this.divContent.form.tabFuncType.tab01.form.edtRverNum.value;	// 총 검토 수

        			if(nRow == 0)
        			{	// 검토자수 0이면 error
        				var param = {
        						id : "noCgerZeroAlert"
        					  , msg : "10011"
        					  , arrparam : [Ex.core.word('검토자')]
        					  , msgtype : "I"
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			else
        			{	// 검토자 있을 때
        				if( Ex.isEmpty(nRver) || nRver == 0 )
        				{	// 총 검토수 0 이면 error
        					var param = {
        						id : "noCgerTotalRverAlert"
        					  , msg : "10012"
        					  , arrparam : [Ex.core.word('총 검토 수')]
        					  , msgtype : "I"
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}

        				var nRowEssential = this.dsWfRver.getCaseCount("ROWFLAG != 'D' && ESS_YN == '1'");
        				if( nRowEssential > nRow )
        				{	// 필수검토보다 총 검토가 작으면 error
        					var param = {
        						id : "noCgerEssAlert"
        					  , msg : "10012"
        					  , arrparam : [Ex.core.word('검토자')]
        					  , msgtype : "I"
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			}

        			if(nRver > nRow)
        			{	// 총 검토가 검토자수보다 많으면 error
        				var param = {
        					id : "rverNumAlert"
        				  , msg : "10012"
        				  , arrparam : [Ex.core.word('총') + ' ' + Ex.core.word('검토') + ' ' + Ex.core.word('수')]
        				  , msgtype : "I"
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			break;

        		case "02" :
        			// component validation
        			if( !Ex.util.checkValidate(this.divContent.form.tabFuncType.tab02, "fvValiCmp") )	return false;
        				break;
        	}
        	return true;
        }

        // 선택
        this.fnSelect = function()
        {
        	var strRtn =	this.funcTypeCd + ";;";													//검토자 지정 구분
        		strRtn +=	this.divContent.form.edtName.value + ';;';								//표기명칭

        	if(this.funcTypeCd == "01")
        	{
        		strRtn +=	this.divContent.form.tabFuncType.tab01.form.edtRverNum.value + ';;' + 	//검토자수
        					this.dsWfRver.saveXML() + ';;';											//검토자 dataset
        	}
        	else if(this.funcTypeCd == "02")
        	{
        		strRtn +=	this.divContent.form.tabFuncType.tab02.form.edtSvcNm.value + ';;';		//JAVA SVC명
        	}

        	strRtn += this.divContent.form.cboRtrnWf.value + ";;";									//반려 시 워크플로우 단계

        	strRtn += this.divContent.form.mcboScreenEdit.value;									//수정 가능 워크플로우 단계

        	//trace("strRtn:\n" + strRtn);
        	Ex.core.pclose(this, strRtn);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(
        				this,
        				'selectUserPop',
        				"fomm::FOMM0000_P01.xfdl",             	// <--- 팝업창 오픈 Url
        				{
        					title		: Ex.core.word('사용자') + ' ' + Ex.core.word('선택'),
        					pSelType	: pSelType
        				},										// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsWfRver);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			if( !this.fnCheckValidate() ) return;

        			var msg = "";
        			var strParam = this.dsFuncTypeCd.getColumn(this.dsFuncTypeCd.findRow('CMM_CD', this.funcTypeCd), 'CMM_CD_NM');
        			var strParam2 = this.dsFuncTypeCd.getColumn(this.dsFuncTypeCd.findRow('CMM_CD', (this.funcTypeCd == "01" ? "02" : "01")), 'CMM_CD_NM');

        			if(this.pIU == "U")
        			{
        				if(this.funcTypeCd != this.orgFuncTypeCd)
        				{
        					msg = "기존에 지정한 " + Ex.core.word("검토자") + " " +
        						  "[" + strParam2 + "] 내역은\n삭제하고 " +
        						  Ex.core.word("검토자") + " [" + strParam + "]을 처리합니다.\n\n";
        				}
        			}

        			var param = {
        				  id : "selectConfirm"
        				, msg : "10008"
        				, arrparam : [msg + Ex.core.word("검토자") + " " + Ex.core.word(strParam) + " "]
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			//this.fnSelect();
        			break;
        	}
        }

        this.divContent_tabFuncType_onchanged = function(obj,e)
        {
        	switch(e.postindex)
        	{
        		case 0 :	this.funcTypeCd = '01';	break;	// 사용자선택
        		case 1 :	this.funcTypeCd = '02';	break;	// 조건 지정
        	}
        };

        this.dsWfRver_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.tabFuncType.addEventHandler("onchanged",this.divContent_tabFuncType_onchanged,this);
            this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.tabFuncType.tab01.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.tabFuncType.tab01.form.grdReviewer.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.dsWfRver.addEventHandler("oncolumnchanged",this.dsWfRver_oncolumnchanged,this);
        };
        this.loadIncludeScript("WF0120_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
