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
            this.set_titletext("IT부문 Bottom");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("transparent");
            this.set_scrollbartype("none");
            this.set_background("#ecf5ff");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1375,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_GBN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitleLeft","20.00","10","110","28",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("작업캘린더");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divCalendar","20.00","43","629",null,null,"10",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_HOME_border");
            obj.set_background("white");
            obj.set_url("mainWidget::nhsb_D23_cal.xfdl");
            obj.set_async("false");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcTitleRight","691.00","10","110","28",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("시스템작업");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divSet","880.00","13","215","24",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcSec","107.00","0","40",null,null,"0",null,null,null,null,this.divMain.form.divSet.form);
            obj.set_taborder("0");
            obj.set_text("보안");
            obj.set_color("#545a69");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            obj.set_border("1px solid #96d2fc");
            obj.set_borderRadius("10px");
            obj.set_textAlign("center");
            this.divMain.form.divSet.addChild(obj.name, obj);

            obj = new Static("stcNw","152.00","0","58",null,null,"0",null,null,null,null,this.divMain.form.divSet.form);
            obj.set_taborder("1");
            obj.set_text("네트워크");
            obj.set_color("#545a69");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            obj.set_border("1px solid #96d2fc");
            obj.set_borderRadius("10px");
            obj.set_textAlign("center");
            this.divMain.form.divSet.addChild(obj.name, obj);

            obj = new Static("stcAll","2","0","44",null,null,"0",null,null,null,null,this.divMain.form.divSet.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_color("#2c8bf8");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 0px");
            obj.set_cursor("pointer");
            obj.set_border("1px solid #96d2fc");
            obj.set_textAlign("center");
            obj.set_borderRadius("10px");
            this.divMain.form.divSet.addChild(obj.name, obj);

            obj = new Static("stcServer","51.00","0","50",null,null,"0",null,null,null,null,this.divMain.form.divSet.form);
            obj.set_taborder("3");
            obj.set_text("서버");
            obj.set_color("#545a69");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            obj.set_borderRadius("10px");
            obj.set_textAlign("center");
            obj.set_border("1px solid #96d2fc");
            this.divMain.form.divSet.addChild(obj.name, obj);

            obj = new Div("divCnt","795.00","10","76","28",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/btnset-bg-01.png\') no-repeat left center");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stc00","0","5","34",null,null,"5",null,null,null,null,this.divMain.form.divCnt.form);
            obj.set_taborder("0");
            obj.set_text("건수: ");
            obj.set_color("#545a69");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_padding("1px 0px 0px 10px");
            this.divMain.form.divCnt.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","44",null,"0","5",null,null,null,null,this.divMain.form.divCnt.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'#2c8bf8\'>0</fc> 건");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_color("#545a69");
            obj.set_padding("1px 10px 0px 0px");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("right");
            this.divMain.form.divCnt.addChild(obj.name, obj);

            obj = new Static("stcEndIcon","1269.00","16","16","16",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_background("#e5ffd1");
            obj.set_border("1px solid #cdd8e5");
            obj.set_borderRadius("4px");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcStartIcon","1209.00","16","16","16",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            obj.set_background("#fff3d6");
            obj.set_border("1px solid #cdd8e5");
            obj.set_borderRadius("4px");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stc00","1230.00","14","35","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_text("START");
            obj.set_color("#333333");
            obj.set_font("bold 10px \'KoPubB\'");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stc00_00","1290.00","14","35","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_text("END");
            obj.set_color("#333333");
            obj.set_font("bold 10px \'KoPubB\'");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divCond","1104.00","10","75","28",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/btnset-bg-01.png\') no-repeat left center");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcMonthly","8","5","64",null,null,"5",null,null,null,null,this.divMain.form.divCond.form);
            obj.set_taborder("0");
            obj.set_text("월간 현황");
            obj.set_color("#545a69");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_padding("1px 0px 0px 17px");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/btnset-icon04.png\') no-repeat left center");
            obj.set_cursor("pointer");
            this.divMain.form.divCond.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"10","28","28","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("10");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/btn-excel.png\') no-repeat center center");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcDivider","669.00","0","2",null,null,"0",null,null,null,null,this.divMain.form);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-divider.png\') no-repeat center center");
            this.divMain.addChild(obj.name, obj);

            obj = new ListView("lsvWorkList","699.00","43","658",null,null,"10",null,null,null,null,this.divMain.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsWorkList");
            obj.set_border("0px none");
            obj.set_cssclass("lsv_HOME_normal");
            obj.set_background("transparent");
            obj.set_nodatatext("adsfdsaf");
            obj.set_color("transparent");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"35\" border=\"0px one\"><Cell id=\"CellBg\" left=\"0\" top=\"1\" border=\"0px none\" background=\"transparent url(&apos;theme://NHSB_IMAGE_SET/HOME/main-con-grid.png&apos;) no-repeat left center\" right=\"0\" height=\"33\"/><Cell id=\"cellUserType\" left=\"5.00\" top=\"5\" width=\"116\" background=\"#ffc2a8\" border=\"0px none\" padding=\"0px 8px 0px 8px\" textAlign=\"center\" font=\"bold 11px &quot;KoPubL&quot;\" color=\"#545a69\" expr=\"EXPR:WORK_DEPT_NM\" borderRadius=\"12px 12px\" bottom=\"8\"/><Cell id=\"cellTitle\" left=\"cellUserType:14.00\" top=\"5\" width=\"293\" height=\"21\" color=\"#32333b\" font=\"bold 12px &quot;KoPubL&quot;\" border=\"0px none\" expr=\"EXPR:TITLE\" cursor=\"pointer\"/><Cell id=\"Cell00\" left=\"439.00\" top=\"7\" width=\"21\" height=\"17\" border=\"0px none\" background=\"transparent url(&apos;theme://NHSB_IMAGE_SET/HOME/main-grid-badge-start.png&apos;) no-repeat center center\"/><Cell id=\"Cell01\" left=\"536.00\" top=\"7\" width=\"21\" height=\"17\" border=\"0px none\" background=\"transparent url(&apos;theme://NHSB_IMAGE_SET/HOME/main-grid-badge-end.png&apos;) no-repeat center center\"/><Cell id=\"celStartDate\" left=\"Cell00:0.00\" top=\"5\" width=\"75\" height=\"21\" color=\"#32333b\" font=\"bold 11px &quot;KoPubL&quot;\" border=\"0px none\" padding=\"0px 0px 0px 5px\" textAlign=\"left\" expr=\"EXPR:REQ_DATE_NM\"/><Cell id=\"cellEndDate\" left=\"Cell01:0.00\" top=\"5\" height=\"21\" color=\"#32333b\" font=\"bold 11px &quot;KoPubL&quot;\" border=\"0px none\" padding=\"0px 0px 0px 5px\" textAlign=\"left\" width=\"75\" expr=\"EXPR:DUE_DATE_NM\"/></Band></Format></Formats>");
            this.divMain.addChild(obj.name, obj);

            obj = new Grid("grdExcel","729.00","255","578","91",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWorkList");
            obj.set_cssclass("grd_WF_normal");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"담당부서\"/><Cell col=\"1\" text=\"요청서 제목\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"완료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_DEPT_NM\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:REQ_DATE_NM\"/><Cell col=\"3\" text=\"bind:DUE_DATE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divCalendar
            obj = new Layout("default","",0,0,this.divMain.form.divCalendar.form,function(p){});
            this.divMain.form.divCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divSet.form
            obj = new Layout("default","",0,0,this.divMain.form.divSet.form,function(p){});
            this.divMain.form.divSet.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divCnt.form
            obj = new Layout("default","",0,0,this.divMain.form.divCnt.form,function(p){});
            this.divMain.form.divCnt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divCond.form
            obj = new Layout("default","",0,0,this.divMain.form.divCond.form,function(p){});
            this.divMain.form.divCond.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1375,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mainWidget::nhsb_D23_cal.xfdl");
        };
        
        // User Script
        this.registerScript("nhsb_D22.xfdl", function() {
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
        this.SEARCH_GBN = '전체';

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
        	this.divMain.form.divCalendar.form.fnSetCallScope(this);
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



        this.fnSetBtnOn = function()
        {
        	var arrBtn = [
        		this.divMain.form.divSet.form.stcAll,
        		this.divMain.form.divSet.form.stcServer,
        		this.divMain.form.divSet.form.stcSec,
        		this.divMain.form.divSet.form.stcNw
        	];

        	for(var i = 0; i < arrBtn.length; i++)
        	{
        		arrBtn[i].set_color('#545a69');
        	}

        	switch(this.SEARCH_GBN)
        	{
        		case "전체" :
        			this.divMain.form.divSet.form.stcAll.set_color('#2c8bf8');
        			break;

        		case "서버" :
        			this.divMain.form.divSet.form.stcServer.set_color('#2c8bf8');
        			break;

        		case "보안" :
        			this.divMain.form.divSet.form.stcSec.set_color('#2c8bf8');
        			break;

        		case "네트워크" :
        			this.divMain.form.divSet.form.stcNw.set_color('#2c8bf8');
        			break;
        	}
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
        		case "stcAll" :
        			this.SEARCH_GBN = '전체';
        			break;

        		case "stcServer" :
        			this.SEARCH_GBN = '서버';
        			break;

        		case "stcSec" :
        			this.SEARCH_GBN = '보안';
        			break;

        		case "stcNw" :
        			this.SEARCH_GBN = '네트워크';
        			break;
        	}

        	this.fnSetBtnOn();

        	if( this.divMain.form.divCalendar.form ) {
        		this.divMain.form.divCalendar.form.SEARCH_GBN = this.SEARCH_GBN;
        		this.divMain.form.divCalendar.form.fnSearch01();	// 달력 건수 표기용 조회
        		this.divMain.form.divCalendar.form.fnSearch02();	// 작업리스트 목록 조회
        	}

        }


        // 월간현황 onclick
        this.divMain_divCond_stcMonthly_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'FOMM0300_W');
        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        };


        this.dsWorkList_onvaluechanged = function(obj,e)
        {
        	this.divMain.form.divCnt.form.stcCnt.set_text("<fc v='#2c8bf8'>" + obj.rowcount + "</fc> 건");
        };

        this.divMain_lsvWorkList_oncellclick = function(obj,e)
        {
        	if( e.bandid == 'body'  && e.cellid == 'cellTitle' )
        	{
        		var svcCd = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "SVC_CD");
        		var reqId = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "REQ_ID");
        		var reqTmplatId = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "REQ_TMPLAT_ID");
        		var reqTmplatVer = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "REQ_TMPLAT_VER");

        		if( Ex.isEmpty(reqId) )
        			return;

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



        this.divMain_btnExcel_onclick = function(obj,e)
        {
        	var oInfo = {
        		Grid	: [this.grdExcel],
        		Sheet	: [''],
        		FileNm	: ["작업리스트"],
        		ExportType : "XLSX",
        		ExportId : "excel01"
        	};
        	this.gfnExportExcel(this, oInfo);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divMain.form.divSet.form.stcSec.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMain.form.divSet.form.stcNw.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMain.form.divSet.form.stcAll.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMain.form.divSet.form.stcServer.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMain.form.divCond.form.stcMonthly.addEventHandler("onclick",this.divMain_divCond_stcMonthly_onclick,this);
            this.divMain.form.btnExcel.addEventHandler("onclick",this.divMain_btnExcel_onclick,this);
            this.divMain.form.stcDivider.addEventHandler("onclick",this.stcDivider_onclick,this);
            this.divMain.form.lsvWorkList.addEventHandler("oncellclick",this.divMain_lsvWorkList_oncellclick,this);
            this.dsWorkList.addEventHandler("onvaluechanged",this.dsWorkList_onvaluechanged,this);
        };
        this.loadIncludeScript("nhsb_D22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
