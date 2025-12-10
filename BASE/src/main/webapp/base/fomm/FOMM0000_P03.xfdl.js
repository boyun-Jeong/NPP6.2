(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0000_P03");
            this.set_titletext("도움말");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommMenuMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00_00","20","54",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","87",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","20","20","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuNm","20","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("메뉴명");
            this.addChild(obj.name, obj);

            obj = new Static("stcConts","20","87","130",null,null,"80",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("도움말");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","155","59",null,"24","26",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","44",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divWebEditor","stcConts:5","93",null,null,"25","86",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("comm::comWebEditor.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","stcInfoTitle:10","20","400","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※ 본 내용은 [관리자 > 메뉴관리] 화면에서 수정가능합니다");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtMenuNm","value","dsFommMenuMt","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0000_P03.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ ref99
        * 화면(명)		︰ Script 양식 샘플
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pReadOnly;
        this.pMenuId;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        	this.pReadOnly  = this.getOwnerFrame().pReadOnly||false;
        	this.pMenuId	= this.getOwnerFrame().pMenuId;
        	this.pMenuNm	= this.getOwnerFrame().pMenuNm;

        	this.divWebEditor.form.initCreate(this.pReadOnly);
        	this.divBottom.form.btnSave.set_visible(!this.pReadOnly);

        	this.dsCond.setColumn(0, 'MENU_ID', this.pMenuId);
        	this.fnSearch();
        }

        // 필요시 폼관련 이벤트는 여기 추가
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
        	var sTranId = "select03";
            var sService = "FOMM0140W/select03";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommMenuMt=dsData";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var MENU_HELP = this.divWebEditor.form.getContent();
        	this.dsFommMenuMt.setColumn(this.dsFommMenuMt.rowposition, 'MENU_HELP', MENU_HELP);

        	var sTranId = "save02";
            var sService = "FOMM0140W/save02";
            var sInDs = "dsData=dsFommMenuMt:U dsCond=dsCond";
            var sOutDs = "";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = 0; i < objDs.rowcount; i++)
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
        		case "select03" :
        			if( this.dsFommMenuMt.rowcount == 0 ) {
        				this.dsFommMenuMt.setAddRow();
        				this.dsFommMenuMt.setColumn(0, 'MENU_ID', this.pMenuId);
        				this.dsFommMenuMt.setColumn(0, 'MENU_NM', this.pMenuNm);
        			}
        			else {
        				var MENU_HELP = this.dsFommMenuMt.getColumn(this.dsFommMenuMt.rowposition, 'MENU_HELP')||'';
        				this.divWebEditor.form.setContent(MENU_HELP);
        			}

        			break;


        		case "save02" : // 서비스 ID
        			var oParam = {
        				id : "saveAlert"
        			  , msg : "10004"
        			  , arrparam : []
        			  , msgtype : "S"
        			};
        			Ex.core.alert(this, oParam);
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
        	if( !varValue )
        		return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "saveAlert" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate  = function()
        {
        	if( !Ex.util.checkValidate(this, "group01") )
        		return false;

        	var MENU_HELP = this.divWebEditor.form.getContent();
        	if( Ex.isEmpty(MENU_HELP) ) {
        		var oParam = {
        				id : "nullAlert"
        			  , msg : "도움말을 입력해주세요."
        			  , arrparam : []
        			  , msgtype : "I"
        			};
        			Ex.core.alert(this, oParam);
        		return false;
        	}

        	return true;
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSave" :
        			if( !this.fnCheckValidate() )
        				return;

        			var param = {id : "saveConfirm", msg : "10003", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;
        	}
        }
        this.dsFommMenuMt_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommMenuMt.addEventHandler("oncolumnchanged",this.dsFommMenuMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0000_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
