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
            this.set_titletext("요청목록");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PJT_ID\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnMore",null,"10","28","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-link.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","20","44",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"요청번호\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"요청제목\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"단계\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"희망완료일\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_ID\" cursor=\"pointer\" color=\"#005bc3\"/><Cell col=\"1\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REQ_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:WF_PROC_NM\"/><Cell col=\"4\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"5\" text=\"bind:REQ_WISH_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"10","28","28","52",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/btn-excel.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","20","10","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("요청목록");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.addChild(obj.name, obj);

            obj = new Div("divCnt","110","10","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/grid-label.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","0","5","34",null,null,"5",null,null,null,null,this.divCnt.form);
            obj.set_taborder("0");
            obj.set_text("건수: ");
            obj.set_color("#545a69");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_padding("1px 0px 0px 10px");
            this.divCnt.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","44",null,"0","5",null,null,null,null,this.divCnt.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'#2c8bf8\'>0</fc> 건");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_color("#545a69");
            obj.set_padding("1px 10px 0px 0px");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("right");
            this.divCnt.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCnt.form
            obj = new Layout("default","",0,0,this.divCnt.form,function(p){});
            this.divCnt.form.addLayout(obj.name, obj);

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
        this.registerScript("nhsb_D00.xfdl", function() {
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
        this.FROMDATE;
        this.ENDDATE;

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
        	this.fnSearchReset();
        	this.fnSearch();
        }


        this.fnSearchReset = function()
        {

        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	trace('nhsb_D00 >> fnSearch');
        	var sTranId = "selectReqList";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectReqList";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectReqList":
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
        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();
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
        	switch(obj.name)
        	{
        		case "btnMore" :	// 요청관리
        			var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			if( rowpos >= 0 ) {
        				var fromDate	= Ex.util.addDate(Ex.util.today(), -30);
        				var toDate		= Ex.util.today();
        				Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), {param : 'ALL', fromDate : fromDate, toDate : toDate});
        			}
        			break;

        		case "btnExcel" :
        			var oInfo = {
           				Grid	: [this.grdData],
           				Sheet	: [''],
           				FileNm	: ["요청목록"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}


        }

        this.dsData_onrowsetchanged = function(obj,e)
        {
        	var str = "<fc v='#2c8bf8'>" + obj.rowcount + "</fc> 건";
        	this.divCnt.form.stcCnt.set_text(str);
        };

        this.grdData_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'REQ_ID') ) {
        		var svcCd = this.dsData.getColumn(this.dsData.rowposition, "SVC_CD");
        		var reqId = this.dsData.getColumn(this.dsData.rowposition, "REQ_ID");
        		var reqTmplatId = this.dsData.getColumn(this.dsData.rowposition, "REQ_TMPLAT_ID");
        		var reqTmplatVer = this.dsData.getColumn(this.dsData.rowposition, "REQ_TMPLAT_VER");

        		var popURL = "";
        		if(svcCd == "SRM")	popURL = "sr::SR0010_W.xfdl";
        		else				popURL = "sr::SR0000_W.xfdl";

        		Ex.core.popup(
        			this,									// <--- 팝업 실행 스코프
        			"srReqWritePop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			popURL,									// <--- 팝업창 오픈 Url
        			{
        				title			: "요청서",
        				//pIsCopy	: true,
        				//pClearKeyColumnArr : ["REQ_ID"],
        				pREQ_ID			: reqId,
        				pREQ_TMPLAT_ID	: reqTmplatId,
        				pREQ_TMPLAT_VER : reqTmplatVer
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
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdData.addEventHandler("oncellclick",this.grdData_oncellclick,this);
            this.btnExcel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
