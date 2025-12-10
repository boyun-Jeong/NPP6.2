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
            this.set_titletext("외주 - 서비스 수행 현황");
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


            obj = new Dataset("dsData25", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10.00","10","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서비스종료");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","10.00","44",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData25");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"처리일자\"/><Cell col=\"4\" text=\"접수/처리자\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_ID\" color=\"blue\"/><Cell col=\"1\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REQ_DATE\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:REG_STIME\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:PROC_USER_NM\" displaytype=\"normal\"/></Band></Format></Formats>");
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
        this.registerScript("sr_D09.xfdl", function() {
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
        	var sTranId = "select25";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select25";       // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData25=dsData";      		// 서버에서 수신할 데이타셋
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
        		case "select21" :
        			Ex.core.toast(this, "10002");
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
        	this.fnSearch();	// 컴포넌트 초기화

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

        this.grdOnCellClick = function(obj,e)
        {

        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        	{
        		var dsRow = obj.getDatasetRow(e.row);
        		var reqTmplatId = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        		var reqTmplatVer = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
        		var reqId = obj.getBindDataset().getColumn(dsRow, "REQ_ID");
        		console.log("grdOnCellClick reqTmplatId : " + reqTmplatId + ", reqTmplatVer : " + reqTmplatVer + ", reqId : " + reqId );

        		Ex.core.popup(
        			this,									// <--- 팝업 실행 스코프
        			"srReqWritePop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR0000_W.xfdl",					// <--- 팝업창 오픈 Url
        			{
        				title			: "요청서",
        				pREQ_ID			: reqId,
        				pREQ_TMPLAT_ID	: reqTmplatId
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			"autosize,useCloseButton=false"
        		);
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdData.addEventHandler("oncellclick",this.grdOnCellClick,this);
        };
        this.loadIncludeScript("sr_D09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
