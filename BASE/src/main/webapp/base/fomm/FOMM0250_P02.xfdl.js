(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0250_P01");
            this.set_titletext("회의 참석자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,514);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAttnd", this);
            obj._setContents("<ColumnInfo><Column id=\"MEET_ATTND_ID\" type=\"string\" size=\"20\"/><Column id=\"MEET_ID\" type=\"string\" size=\"12\"/><Column id=\"ATN_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"ATN_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"ATN_USER_CD\" type=\"string\" size=\"30\"/><Column id=\"READ_YN\" type=\"string\" size=\"1\"/><Column id=\"READ_TIME\" type=\"string\" size=\"14\"/><Column id=\"CONF_YN\" type=\"string\" size=\"1\"/><Column id=\"CONF_TIME\" type=\"string\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MEET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","67","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","btnSearch:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","114",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUser","20","Static00_00:0",null,null,"15","80",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsAttnd");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"48\"/><Column size=\"125\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"참석&#13;&#10;여부\"/><Cell col=\"4\" text=\"확인 일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:ATN_USER_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ATN_USER_DEPT\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" text=\"bind:ATN_USER_CD\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"4\" text=\"bind:CONF_TIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","20.00","90","106","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("참석자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:0","90","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_countDataset("dsAttnd");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_text("( 0건)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,514,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtSearchStr","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0250_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0250_P02
        * 화면(명)		︰ 회의 참석자 조회
        * 메뉴(경로)	: 회의 참석자 및 열람자를 검색한다.
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
        this.MEET_ID;
        this.ATTND;


        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.stcGrdTitle.set_text(this.getOwnerFrame().title + " 목록");
        	var objSize = nexacro.getTextSize(this.stcGrdTitle.text, this.stcGrdTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 15;
        	this.stcGrdTitle.set_width(nWidth);
        	this.stcCnt.set_left(this.stcGrdTitle.getOffsetLeft() + nWidth);

        	this.stcGrdTitle.set_visible(true);
        	this.stcCnt.set_visible(true);

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
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, "SEARCH_TYPE", "NAME");
        	this.dsCond.setColumn(0, "MEET_ID", this.MEET_ID);
        	this.dsCond.setColumn(0, "ATTND", this.ATTND);
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select02";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/select02";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAttnd=dsAttnd";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.MEET_ID	= this.getOwnerFrame().pMeetId;
        	this.ATTND		= this.getOwnerFrame().pAttnd;
        	this.dsCond.setColumn(0, "MEET_ID", this.MEET_ID);
        	this.dsCond.setColumn(0, "ATTND", this.ATTND);

        	this.fnGetCmmCd();
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
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.onKeyUp = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtSearchStr.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0250_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
