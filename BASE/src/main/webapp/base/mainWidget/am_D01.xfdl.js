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
            this.set_titletext("자산종료(예정)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(910,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10","10","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자산종료(예정)");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","10.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("무상종료(0)");
            obj.set_cssclass("btn_HOME_boardOn");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","125.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("유지보수(0)");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"btnTab01\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류(중)\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"분류(소)\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"제조사\"/><Cell col=\"4\" text=\"위치명\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"무상시작일\"/><Cell col=\"7\" text=\"무상종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PJT_NAME\" textAlign=\"left\" tooltiptext=\"bind:PJT_NAME\"/><Cell col=\"1\" text=\"bind:PLAN_CMPL_RATE\"/><Cell col=\"2\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"3\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:CALC_DATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format><Format id=\"btnTab02\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류(중)\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"분류(소)\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"제조사\"/><Cell col=\"4\" text=\"위치명\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"무상시작일\"/><Cell col=\"7\" text=\"무상종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PJT_NAME\" textAlign=\"left\" tooltiptext=\"bind:PJT_NAME\"/><Cell col=\"1\" text=\"bind:PLAN_CMPL_RATE\"/><Cell col=\"2\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"3\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:CALC_DATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format><Format id=\"btnTab03\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류(중)\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"분류(소)\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"제조사\"/><Cell col=\"4\" text=\"위치명\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"무상시작일\"/><Cell col=\"7\" text=\"무상종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PJT_NAME\" textAlign=\"left\" tooltiptext=\"bind:PJT_NAME\"/><Cell col=\"1\" text=\"bind:PLAN_CMPL_RATE\"/><Cell col=\"2\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"3\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:CALC_DATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format><Format id=\"btnTab04\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류(중)\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"분류(소)\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"제조사\"/><Cell col=\"4\" text=\"위치명\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"무상시작일\"/><Cell col=\"7\" text=\"무상종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:PJT_NAME\" textAlign=\"left\" tooltiptext=\"bind:PJT_NAME\"/><Cell col=\"1\" text=\"bind:PLAN_CMPL_RATE\"/><Cell col=\"2\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"3\" text=\"bind:ACTL_CMPL_RATE\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:CALC_DATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab04","355.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("EOS(21)");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab03","240.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("내용년수(15)");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",910,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("am_D01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ am_D01
        * 화면(명)		︰ 자산종료(예정)
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
        	this.fnCompInit();
        	this.fnSearch(this.curBtn);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function(obj)
        {
        	return;

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
        	var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'AM0110_W');

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }



        this.fnBtnTabOnclick = function(obj,e)
        {
        	var arrBtn = 	[this.btnTab01, this.btnTab02, this.btnTab03, this.btnTab04];

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
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("am_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
