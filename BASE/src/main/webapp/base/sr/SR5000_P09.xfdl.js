(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_P01");
            this.set_titletext("요청내용 변경사유");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,180);
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


            obj = new Dataset("dsCont", this);
            obj._setContents("<ColumnInfo><Column id=\"CHG_SAYU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0.00","0","550","120",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg00","20.00","2",null,"34","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","20.00","2","130","34",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divPage.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcProcUserNm:5.00","7","150","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcBg","20.00","35",null,"80","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcOpinion","20.00","35","130","80",null,null,null,null,null,null,this.divPage.form);
            obj.set_initvalueid("변경사유;NULL");
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("변경사유");
            this.divPage.addChild(obj.name, obj);

            obj = new TextArea("txaOpinion","154.00","40",null,"70","26",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("7");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("input01");
            obj.set_validation("접수의견;NULL");
            obj.set_imemode("hangul");
            obj.set_text("");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00",null,"0","20",null,"530","120",null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00",null,"0","20",null,"0","128",null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20.00",null,null,"54","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","12",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","110","12",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",550,180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPage.form.txaOpinion","value","dsCont","CHG_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_P09.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P09.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 요청내용 변경사유
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
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function(type)
        {

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
        	if(!varValue) return;

        	switch(mID)
        	{
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
        		case "contSave" :
        			this.dsRet.clearData();
        			this.dsRet.assign(this.dsCont);
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsCont, this.dsCont.rowposition);
        			Ex.core.pclose(this, this.dsRet.saveXML());
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divPage.form.edtUserNm.set_value(Ex.util.getSession("gvUserNm"));
        	//this.dsMain.setInsertRow();
        	this.fnGetCmmCd();
        	this.fnSearch('M');	// 메인그리드검색

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
        		case "btnSave" :		// 저장
        			var param = {
        				id : "contSave"
        			  , msg : "요청내용을 수정하시겠습니까?"
        			  , arrparam : ['']
        			  , msgtype : "I"
        			  };
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :		// 닫기
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR5000_P09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
