(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fomm_P01");
            this.set_titletext("빠른이동 설정 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CUR_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SHORTCUT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SHORTCUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSel", this);
            obj._setContents("<ColumnInfo><Column id=\"SHORTCUT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL3\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClear",null,null,"100","32","230","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_primary_save");
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

            obj = new Grid("grdData","20","124",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_normal");
            obj.set_binddataset("dsMyMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"대메뉴\"/><Cell col=\"2\" text=\"중메뉴\"/><Cell col=\"3\" text=\"메뉴명\"/><Cell col=\"4\" text=\"표기명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" cssclass=\"expr:(Ex.util.getParentForm(this).CUR_MENU_ID == MENU_ID)? &apos;grdBCell_WF_backColor_f9f3f3&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:LV1_MENU_NM\" suppress=\"1\" cssclass=\"expr:(Ex.util.getParentForm(this).CUR_MENU_ID == MENU_ID)? &apos;grdBCell_WF_backColor_f9f3f3&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:LV2_MENU_NM\" suppress=\"2\" cssclass=\"expr:(Ex.util.getParentForm(this).CUR_MENU_ID == MENU_ID)? &apos;grdBCell_WF_backColor_f9f3f3&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:LV3_MENU_NM\" cssclass=\"expr:(Ex.util.getParentForm(this).CUR_MENU_ID == MENU_ID)? &apos;grdBCell_WF_backColor_f9f3f3&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:SHORTCUT_NM\" displaytype=\"editcontrol\" edittype=\"text\" cssclass=\"expr:(Ex.util.getParentForm(this).CUR_MENU_ID == MENU_ID)? &apos;grdBCell_WF_backColor_f9f3f3&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_divSearchArea");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcMenuNm","20","13","90","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtAuthId","76.00","13","140","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","216.00","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcAuthTitle","20","90","120","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("나의 메뉴 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","146.00","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMyMenu");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcAuthTitle00",null,"90","305","24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>표기명 미 입력 시 메뉴명으로 표기됩니다.");
            obj.set_usedecorate("true");
            obj.set_font("12px \'KopubL\'");
            obj.set_textAlign("right");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.stcReqId","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.stcReqDt","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.calFrReqDt","value","dsCond","FR_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.cboReqStatCd","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSearchArea.form.calToReqDt","value","dsCond","TO_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.chkMyReq","value","dsCond","MY_REQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.divSearchArea.form.edtAuthId","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.divSearchArea.form.cboAdminYn","value","dsCond","ADMIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContent.form.divSearchArea.form.cboAuthTypeCd","value","dsCond","AUTH_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fomm_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ fomm_P01
        * 화면(명)		︰ 빠른이동 설정 팝업
        * 메뉴(경로)	︰
        * 화면 설명	︰
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
        this.CUR_MENU_ID	 = '';
        this.CUR_SHORTCUT_NO = '';	// 기존 선택 빠른이동 번호
        this.CUR_SHORTCUT_NM = '';	// 기존 선택 빠른이동 번호

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
        	this.divContent.form.grdData.displayRowType();

        	// 기존 정보
        	this.CUR_MENU_ID	 = this.getOwnerFrame().pMenuId||'';
        	this.CUR_SHORTCUT_NO = this.getOwnerFrame().pShortcutNo||-1;
        	this.CUR_SHORTCUT_NM = this.getOwnerFrame().pShortcutNm||'';
        	trace('CUR_MENU_ID :: ' + this.CUR_MENU_ID + '  CUR_SHORTCUT_NO :: ' + this.CUR_SHORTCUT_NO + '  CUR_SHORTCUT_NM :: ' + this.CUR_SHORTCUT_NM);

        	this.fnSearchReset();
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

        	this.dsCond.setColumn(rowpos, 'CUR_MENU_ID', 		this.CUR_MENU_ID);
        	this.dsCond.setColumn(rowpos, 'CUR_SHORTCUT_NO', 	this.CUR_SHORTCUT_NO);
        	this.dsCond.setColumn(rowpos, 'CUR_SHORTCUT_NM', 	this.CUR_SHORTCUT_NM);
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "selectMyMenu";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetFOMM/selectMyMenu";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMyMenu=dsMyMenu";			// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	var SEL_MENU_ID		= this.dsMyMenu.getColumn(this.dsMyMenu.rowposition, 'MENU_ID');
        	var SEL_SHORTCUT_NM	= this.dsMyMenu.getColumn(this.dsMyMenu.rowposition, 'SHORTCUT_NM');

        	this.dsSel.clearData();
        	var rowpos = this.dsSel.setAddRow();
        	this.dsSel.setColumn(rowpos, 'SHORTCUT_NO', this.CUR_SHORTCUT_NO);
        	this.dsSel.setColumn(rowpos, 'USER_ID', 	Ex.util.getSession('gvUserId'));
        	this.dsSel.setColumn(rowpos, 'USER_TYPE', 	Ex.util.getSession('gvUserType'));
        	this.dsSel.setColumn(rowpos, 'MENU_ID', 	SEL_MENU_ID);
        	this.dsSel.setColumn(rowpos, 'SHORTCUT_NM', SEL_SHORTCUT_NM);


        	var sTranId = "saveMyShortcut";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetFOMM/saveMyShortcut";	// 서비스명
            var sInDs = "dsCond=dsCond dsMyShortcut=dsSel";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";			// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        this.fnClear = function()
        {
        	this.dsSel.clearData();
        	var rowpos = this.dsSel.setAddRow();
        	this.dsSel.setColumn(rowpos, 'SHORTCUT_NO', this.CUR_SHORTCUT_NO);
        	this.dsSel.setColumn(rowpos, 'USER_ID', 	Ex.util.getSession('gvUserId'));
        	this.dsSel.setColumn(rowpos, 'USER_TYPE', 	Ex.util.getSession('gvUserType'));
        	this.dsSel.setColumn(rowpos, 'MENU_ID', 	-1);
        	this.dsSel.setColumn(rowpos, 'SHORTCUT_NM', '');

        	var sTranId = "clearMyShortcut";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "widgetFOMM/saveMyShortcut";	// 서비스명
        	var sInDs = "dsCond=dsCond dsMyShortcut=dsSel";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "";			// 서버에서 수신할 데이타셋
        	var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        this.getCurMenuId = function()
        {
        	return this.CUR_MENU_ID;
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
        		case "selectMyMenu" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "saveMyShortcut" :		// 저장
        		case "clearMyShortcut" :	// 초기화
        			Ex.core.pclose(this, 'save');
        			break;
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
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "pResetConfirm" :		// 초기화
        			this.fnClear();
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate = function()
        {
        	var rowpos = this.dsMyMenu.rowposition;
        	if( rowpos < 0 ) {
        		var param  = {
        			id			: "selErrorAlert",
        			msg			: "선택한 메뉴가 없습니다.",  // 혹은 메시지 코드
        			arrparam	: [""]
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

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
        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :
        			if( this.fnCheckValidate() ) {
        				this.fnSave();
        			}
        			break;

        		case "btnClear" :
        			var param = {
        						id : "pResetConfirm"
        					  , msg : "초기화 하시겠습니까?"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;
        	}
        }


        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };



        this.fnCommOnkeydown = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtAuthId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsMyMenu.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsMyMenu.addEventHandler("onrowposchanged",this.dsMyMenu_onrowposchanged,this);
        };
        this.loadIncludeScript("fomm_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
