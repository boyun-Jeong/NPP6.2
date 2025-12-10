(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0700_P01");
            this.set_titletext("체크리스트 입력폼(팝업-기본)");
            this.set_visible("false");
            this.getSetter("scrollbars").set("autoboth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcInfoTitle","20","20","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","44",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","20","Static00_01:0",null,null,"20","195",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("fomm::FOMM0700_D01.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,240,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edt_upmuNm","value","ds_userInfo","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0700_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0700_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0700_P01
        * 화면(명)	︰ 체크리스트 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.07.24
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.07.24	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        var formObj;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	formObj = obj;
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0000P/save01";						// 서비스명
        	var sInDs = "dsCond=dsCond dsFommUserMt=dsFommUserMt";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsFommUserMt=dsFommUserMt";				// 서버에서 수신할 데이타셋
        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "" :
        			break;

        		case "save01" :
        			if(this.dsFommUserMt.getColumn(0, "LANG_CD") != Ex.util.getSession('gvLangCd'))
        			{
        				Ex.core.toast(this, "10004");
        				var param = {id : "pConfirmRefreshI", msg : "10014", arrparam : [''], msgtype : "I"};
        				Ex.core.confirm(this, param);
        				return;
        			}
        			else
        			{
        				var param = {
        						id : "saveAlert"
        					  , msg : "10004"
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        			}
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
        this.fnMsgAfter = function(mID, varValue)
        {
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	if( Ex.isEmpty(this.getOwnerFrame().pChklstId) )
        	{
        		return;
        	}

        	if( Ex.isEmpty(this.getOwnerFrame().pKeyTbl) )
        	{
        		return;
        	}

        // 	if( Ex.isEmpty(this.getOwnerFrame().pPK1) )
        // 	{
        // 		return;
        // 	}

        	var oParam = {
        		  TITLE				: this.getOwnerFrame().pTitle || ''																//Checklist Title
        		, IS_AUTO_SIZE		: Ex.isEmpty(this.getOwnerFrame().pIsAutoSize) ? false : this.getOwnerFrame().pIsAutoSize		//true(전체 Form에 Scroll발생)/false([divConts] DIV 영역만 Scroll 발생)
        		, IS_DIV_RESIZE		: Ex.isEmpty(this.getOwnerFrame().pIsDivResize) ? true : this.getOwnerFrame().pIsDivResize		//checklist 데이터 조회하여 화면을 동적으로 그린 후 Header와 [divConts] DIV 크기 재조정을 실행할지 여부
        		, DIRECTION			: Ex.isEmpty(this.getOwnerFrame().pDirection) ? "H" : this.getOwnerFrame().pDirection			//답항 그리기 방향 H(가로)/V(세로)
        		, EDITABLE			: Ex.isEmpty(this.getOwnerFrame().pEditable) ? true : this.getOwnerFrame().pEditable			//true(편집모드)/ false(조회모드)
        		, MSG				: Ex.isEmpty(this.getOwnerFrame().pMsg) ? 'A' : this.getOwnerFrame().pMsg						//N(NO:알림없음), A(ALERT:alert창), T(TOAST:toast메시지)
        		, IS_USE_REG_BTN	: Ex.isEmpty(this.getOwnerFrame().pIsUseRegbtn) ? false : this.getOwnerFrame().pIsUseRegbtn		//true(YES:등록버튼 사용), false(NO:등록버튼 미사용)
        		, IS_LABEL_SCORE	: Ex.isEmpty(this.getOwnerFrame().pisLabelScore) ? false : this.getOwnerFrame().pisLabelScore 	//true(YES:등록버튼 사용), false(NO:등록버튼 미사용)
        		, USE_ONSIZE_EVT	: Ex.isEmpty(this.getOwnerFrame().pUseOnsizeEvt) ? false : this.getOwnerFrame().pUseOnsizeEvt	//checklist Form의 onsize 이벤트 사용여부 true(사용) / false(미사용)
        		, CHKLST_ID			: this.getOwnerFrame().pChklstId 																//문항 CHKLIST KEY ID
        		, KEY_TBL			: this.getOwnerFrame().pKeyTbl																	//기준 구분값
        		, PK1				: this.getOwnerFrame().pPK1																		//PK1
        		, PK2				: this.getOwnerFrame().pPK2																		//PK2
        		, PK3				: this.getOwnerFrame().pPK3																		//PK3
        	};
        	this.divForm.form.setConfig(this, oParam);
        }

        this.fnSizeChangeComplete = function(scope, compId)
        {
        	formObj.divForm.form.divConts.form.resetScroll();
        	formObj.divForm.form.resetScroll();

        	var chkLstDivH	= nexacro.toNumber(formObj.divForm.getOffsetHeight(), 0);
        	var scrollH		= 0;
        	if(formObj.divForm.form.divConts.form.vscrollbar)	scrollH = nexacro.toNumber(formObj.divForm.form.divConts.form.vscrollbar.max, 0);

        	var remaH		= 79;
        	var totH		= chkLstDivH + scrollH	+ remaH;


        	if(totH > 720)
        	{
        		totH = 720;
        		formObj.getOwnerFrame().set_height(totH);
        	}
        	else
        	{
        		formObj.getOwnerFrame().set_height(formObj.getOwnerFrame().height + scrollH);
        	}

        	trace("totH : " + totH + " formObj.getOwnerFrame().height : " + formObj.getOwnerFrame().height);


        	var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(formObj.getOwnerFrame().height / 2) );
        	formObj.getOwnerFrame().set_top(nTop);
        	formObj.divForm.form.divOnSize();

        	//formObj.divForm.set_visible(true);
        	formObj.set_visible(true);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSave" :			// 저장
        			if( !this.fnCheckValidate() )
        				return;

        			var param = {id : "pConfirmSaveI", msg : "10003", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0700_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
