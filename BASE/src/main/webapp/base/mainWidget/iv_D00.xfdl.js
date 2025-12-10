(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("사업계획/계획현황");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_YY\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQ_YY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10.00","10","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업계획/계획현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","10.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기초사업");
            obj.set_cssclass("btn_HOME_boardOn");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","125.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("본사업");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"btnTab01\"><Columns><Column size=\"430\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업명\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"추진부서\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PRE_PLAN_NM\"/><Cell col=\"1\" text=\"bind:PLAN_DEPT_NM\"/><Cell col=\"2\" text=\"bind:PRE_PLAN_ST_NM\"/><Cell col=\"3\" text=\"bind:BIZ_SDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:BIZ_EDATE\" displaytype=\"date\"/></Band></Format><Format id=\"btnTab02\"><Columns><Column size=\"430\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업명\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"추진부서\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PLAN_NM\"/><Cell col=\"1\" text=\"bind:PLAN_DEPT_NM\"/><Cell col=\"2\" text=\"bind:PLAN_ST_NM\"/><Cell col=\"3\" text=\"bind:BIZ_SDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:BIZ_EDATE\" displaytype=\"date\"/></Band></Format><Format id=\"btnTab03\"><Columns><Column size=\"430\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업명\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"추진부서\"/><Cell col=\"2\" text=\"추진상태\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:DRV_NAME\"/><Cell col=\"1\" text=\"bind:DRV_DEPT_NM\"/><Cell col=\"2\" text=\"bind:DRV_ST_NM\"/><Cell col=\"3\" text=\"bind:BIZ_SDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:BIZ_EDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"btnTab04\"><Columns><Column size=\"130\"/><Column size=\"420\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약등록요청번호\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"계약등록요청명\"/><Cell col=\"2\" text=\"등록요청상태\"/><Cell col=\"3\" text=\"계획여부\"/><Cell col=\"4\" text=\"등록요청자\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTR_REQ_NO\"/><Cell col=\"1\" text=\"bind:CNTR_REQ_NAME\"/><Cell col=\"2\" text=\"bind:CNTR_REQ_ST_NM\"/><Cell col=\"3\" text=\"bind:PLAN_YN_NM\"/><Cell col=\"4\" text=\"bind:CNTR_REQ_USER_NM\"/></Band></Format><Format id=\"btnTab05\"><Columns><Column size=\"120\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약종류\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"계약명\"/><Cell col=\"2\" text=\"계약유형\"/><Cell col=\"3\" text=\"계약방식\"/><Cell col=\"4\" text=\"계약업체\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTR_CLASS_NM\"/><Cell col=\"1\" text=\"bind:CONTRACT_NM\"/><Cell col=\"2\" text=\"bind:CNTR_REQ_TYPE_NM\"/><Cell col=\"3\" text=\"bind:CNTR_MTHD_NM\"/><Cell col=\"4\" text=\"bind:COMPANY_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab04","355.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계약요청");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab03","240.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사업추진");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab05","470.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계약체결");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","11",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",675,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("iv_D00.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ iv_D00
        * 화면(명)		︰ 사업계획/계획현황
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ Home Widget
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
        this.curBtn = this.btnTab01;


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
        	this.fnSearch(this.curBtn);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function(obj)
        {
        	var sTranId = "select";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

        	switch(obj.name)
        	{
        		case "btnTab01" :		// 기초사업
        			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        			sService = "IV0110W/select01";
        			break;

        		case "btnTab02" :		// 본사업
        			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        			sService = "IV0210W/select01";
        			break;

        		case "btnTab03" :		// 사업추진
        			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        			this.dsCond.setColumn(0, 'SCREEN_ID', 'IV0310W' );
        			sService = "IV0310W/select02";
        			break;

        		case "btnTab04" :		// 계약요청
        			this.dsCond.setColumn(0, 'CNTR_REQ_YY', Ex.util.today().substr(0, 4) );
        			this.dsCond.setColumn(0, 'SCREEN_ID', '' );
        			sService = "IV0410W/select01";
        			break;

        		case "btnTab05" :		// 계약체결
        			this.dsCond.setColumn(0, 'CNTR_REQ_YY', Ex.util.today().substr(0, 4) );
        			this.dsCond.setColumn(0, 'SCREEN_ID', 'IV0430W' );
        			sService = "IV0410W/select01";
        			break;
        	}

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
        		case "select" :

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

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {

        }


        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['']				// filterStr
        		,objDs	: [this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;

        	switch(this.curBtn.name)
        	{
        		case "btnTab01" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'IV0110_W');	break;		// 기초사업
        		case "btnTab02" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'IV0210_W');	break;		// 본사업
        		case "btnTab03" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'IV0310_W');	break;		// 사업추진
        		case "btnTab04" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'IV0410_W');	break;		// 계약요청
        		case "btnTab05" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'IV0430_W');	break;		// 계약체결
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }




        this.fnBtnTabOnclick = function(obj,e)
        {
        	this.dsData.clearData();
        			//		기초사업		본사업			사업추진			계약요청		계약체결
        	var arrBtn = 	[this.btnTab01, this.btnTab02, this.btnTab03, this.btnTab04, this.btnTab05];

        	// set css
        	for(var i = 0; i < arrBtn.length; i++)
        		arrBtn[i].set_cssclass('btn_HOME_boardOff');
        	obj.set_cssclass('btn_HOME_boardOn');

        	// 마지막 선택 버튼 저장
        	this.curBtn = obj;

        	// grid
        	this.grdData.set_formatid(obj.name);

        	// search
        	this.fnSearch(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnTab01.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnTab02.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnTab04.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnTab03.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnTab05.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("iv_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
