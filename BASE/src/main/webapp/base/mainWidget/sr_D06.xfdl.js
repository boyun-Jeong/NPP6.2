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
            this.set_titletext("외주 - 신청 종료 예정");
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
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart1", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10","10","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청 종료 예정");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Div("divChart","90.00","25",null,null,"270","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_async("true");
            obj.set_border("0px none");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",675,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comHighChartDiv.xfdl");
        };
        
        // User Script
        this.registerScript("sr_D06.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frHome_D00
        * 화면(명)		︰ -
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ 대시보드 우측 내 정보 Div
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
        	this.fnCompInit();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function()
        {
        	var sTranId = "select23";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select23";       // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsChart=dsChart";      		// 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

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
        		case "select23" :
        			this.fnDrawChart();
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
        	this.fnSearch();
        }


        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['']			// 조회할 상위코드
        		,codeDiv: ['']		// 조회할 코드의 업무구분
        		,optStr	: ['']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['']				// 사용여부
        		,filter	: ['']				// filterStr
        		,objDs	: []	// copy dataset
        	}
        	//Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }



        this.fnDrawChart = function()
        {
        	var oParam = {
        		  title : ''
        		, colors: ['#6581F2', '#6ACCF1', '#7E88FE', '#424FD9']
        		, showLegned: true
        	};

        	for(var i=0; i<4; i++)
        	{
        		var aRow = this.dsChart1.addRow();
        		this.dsChart1.setColumn(aRow, "GBN",  this.dsChart.getColumn(0, "SUM_NAME"+aRow));
        		this.dsChart1.setColumn(aRow, "CNT", this.dsChart.getColumn(0, "SUM"+aRow));
        	}

        	var chartScript = this.divChart.form.hcfnGetPie2DChart(oParam, this.dsChart1, 'GBN', 'CNT');
        	this.divChart.form.drawChart(chartScript);

        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	switch(obj.name)
        	{
        		case "btnMore" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0127_W');	break;	// 외주서비스IT신청
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("sr_D06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
