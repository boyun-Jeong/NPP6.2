(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("contUpdateHis");
            this.set_titletext("요청내용 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_SUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContChk", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0","1000","230",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("mainGrid","20.00","39",null,"190","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsContChk");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell cssclass=\"grdHCell_WF\" text=\"No\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"1\" cssclass=\"grdHCell_WF\" text=\"변경 일시\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"2\" cssclass=\"grdHCell_WF\" text=\"변경자\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"3\" cssclass=\"grdHCell_WF\" text=\"변경 사유\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\" color=\"#32333b\" background=\"#ffffff\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:CHG_DT\" textAlign=\"center\" color=\"#32333b\" background=\"#ffffff\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:REG_USER\" textAlign=\"center\" color=\"#32333b\" background=\"#ffffff\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:CHG_SAYU\" color=\"#32333b\" background=\"#ffffff\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20.00",null,null,"60","20","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","11",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Static("sta_Before","20.00","281","130","399",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("변경 전 요청내용\r\n- No.1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00",null,"0","20",null,"980","330",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20.00","9",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("변경 이력");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00","0","33",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","229",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3_00","20","247","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("변경 전 내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00","0","271",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00",null,"0","20",null,"0","330",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","149.00","281",null,"399","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","151","283",null,"395","22",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWebEditor.form
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Static00_01_00","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Static00_01_00.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static00_01_00.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static00_01_00.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR5000_P10.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P10.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 요청내용 변경이력
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.22
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.03.22	WEMB		최초작성
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
         this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.dsContChk.setInsertRow();
        	this.dsContChk.setColumn(0,"REQ_ID",this.getOwnerFrame().pDs.getColumn(0,"REQ_ID")); // 요청서ID
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 본문내용 수정이력
        this.fnContUpdate = function()
        {
        	if(!this.dsContChk.getColumnInfo("BEFORE_CONT")){
        		this.dsContChk.addColumn("BEFORE_CONT", "STRING");
        	}
        	var sTranId = "contUpdateCnt";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/contUpdateCnt";						// 서비스명
            var sInDs = "dsWfSrm=dsContChk";							// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsContChk=dsContChk";							// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 선택
        this.fnSelect = function(selType)
        {

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
        		case "contUpdateCnt" :

        			if(this.dsContChk.rowcount > 0){
        				var webConts = this.dsContChk.getColumn(this.dsContChk.rowposition, "BEFORE_CONT")||'';
        				this.divWebEditor.form.setContent(webConts, false);
        			};

        			//this.sta_Before
        			Ex.core.toast(this, "10002");

        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
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
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	//this.dsMain.setInsertRow();
        	this.fnGetCmmCd();
        	this.fnContUpdate();	// 히스토리 검색
        	//this.divWebEditor.height = "399px";
        	//this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());

        	this.divWebEditor.form.initCreate(true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {

        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSelect" :			// 선택
        			this.fnSelect();
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
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.divPage_mainGrid_oncellclick = function(obj,e)
        {
        	var webConts = this.dsContChk.getColumn(this.dsContChk.rowposition, 'BEFORE_CONT')||'';
        	this.divWebEditor.form.setContent(webConts, false);

        	this.sta_Before.set_text("변경 전 요청내용\n- No."+(this.dsContChk.rowposition+1));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.mainGrid.addEventHandler("oncellclick",this.divPage_mainGrid_oncellclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.sta_Before.addEventHandler("onclick",this.Static24_onclick,this);
            this.stcInfoTitle3_00.addEventHandler("onclick",this.stcInfoTitle3_00_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static21_onclick,this);
        };
        this.loadIncludeScript("SR5000_P10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
