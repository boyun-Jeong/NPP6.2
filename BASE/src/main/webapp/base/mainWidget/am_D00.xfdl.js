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
            this.set_titletext("자산/구성현황");
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
            obj._setContents("<ColumnInfo><Column id=\"LVL1_CLASS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataCi", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10","10","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자산/구성현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","358",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","10","73",null,null,"358","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"btnTab01\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"운영\"/><Cell col=\"2\" text=\"유휴\"/><Cell col=\"3\" text=\"중지 외\"/></Band><Band id=\"body\"><Cell textAlign=\"left\" text=\"bind:CLASS_NM\"/><Cell col=\"1\" text=\"bind:RUN_CNT\" color=\"#043b72\"/><Cell col=\"2\" text=\"bind:IDLE_CNT\" color=\"#043b72\"/><Cell col=\"3\" text=\"bind:OTHER_CNT\" color=\"#043b72\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00","358","10","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구성현황(운영)");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","358.00","73",null,"2","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static00");
            obj.set_background("#010103");
            this.addChild(obj.name, obj);

            obj = new Div("divServer","53.04%","86","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divServer.form);
            obj.set_taborder("0");
            obj.set_text("서버");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divServer.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divServer.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divServer.addChild(obj.name, obj);

            obj = new Div("divWas","77.93%","86","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divWas.form);
            obj.set_taborder("0");
            obj.set_text("WAS");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divWas.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divWas.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divWas.addChild(obj.name, obj);

            obj = new Div("divSecure","53.04%","divServer:8","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divSecure.form);
            obj.set_taborder("0");
            obj.set_text("보안");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divSecure.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divSecure.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divSecure.addChild(obj.name, obj);

            obj = new Div("divNetwork","53.04%","divSecure:8","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divNetwork.form);
            obj.set_taborder("0");
            obj.set_text("통신");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divNetwork.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divNetwork.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divNetwork.addChild(obj.name, obj);

            obj = new Div("divDbms","53.04%","divNetwork:8","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divDbms.form);
            obj.set_taborder("0");
            obj.set_text("DBMS");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divDbms.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divDbms.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divDbms.addChild(obj.name, obj);

            obj = new Div("divWeb","77.93%","124","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divWeb.form);
            obj.set_taborder("0");
            obj.set_text("WEB");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divWeb.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divWeb.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divWeb.addChild(obj.name, obj);

            obj = new Div("divEai","77.93%","162","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divEai.form);
            obj.set_taborder("0");
            obj.set_text("EAI");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divEai.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divEai.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divEai.addChild(obj.name, obj);

            obj = new Div("divTp","77.93%","200","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_HOME_myWidgetBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","5","50",null,null,"5",null,null,null,null,this.divTp.form);
            obj.set_taborder("0");
            obj.set_text("TP");
            obj.set_color("#3d3d3d");
            obj.set_font("bold 12px \"PretendardR\"");
            this.divTp.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"5","50",null,"20","5",null,null,null,null,this.divTp.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#043b72");
            obj.set_font("bold 14px \"PretendardR\"");
            obj.set_textAlign("right");
            this.divTp.addChild(obj.name, obj);

            obj = new Button("btnMore2",null,"14","20","20","11",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","10.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HW(0)");
            obj.set_cssclass("btn_HOME_boardOn");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","btnTab01:5.00","42","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("SW(0)");
            obj.set_cssclass("btn_HOME_boardOff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50%","10","1",null,null,"10",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Static00");
            obj.set_cssclass("sta_TPF_line");
            obj.set_background("url(\'theme://MIRAE_IMAGE_SET/HOME/main-linedashed.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divServer.form
            obj = new Layout("default","",0,0,this.divServer.form,function(p){});
            this.divServer.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWas.form
            obj = new Layout("default","",0,0,this.divWas.form,function(p){});
            this.divWas.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSecure.form
            obj = new Layout("default","",0,0,this.divSecure.form,function(p){});
            this.divSecure.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNetwork.form
            obj = new Layout("default","",0,0,this.divNetwork.form,function(p){});
            this.divNetwork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDbms.form
            obj = new Layout("default","",0,0,this.divDbms.form,function(p){});
            this.divDbms.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWeb.form
            obj = new Layout("default","",0,0,this.divWeb.form,function(p){});
            this.divWeb.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEai.form
            obj = new Layout("default","",0,0,this.divEai.form,function(p){});
            this.divEai.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTp.form
            obj = new Layout("default","",0,0,this.divTp.form,function(p){});
            this.divTp.form.addLayout(obj.name, obj);

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
        this.registerScript("am_D00.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ am_D00
        * 화면(명)		︰ 자산/구성 현황
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
        	this.fnSearchCnt();				// HW/SW 토탈
        	this.fnSearch(this.curBtn);		// HW/SW 분류별 현황
        	this.fnSearchCi();				// 구성현황(운영)
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // HW/SW 수 조회
        this.fnSearchCnt = function()
        {
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetAM/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDataCnt=dsDataCnt";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 조회
        this.fnSearch = function(obj)
        {
        	switch(obj.name)
        	{
        		case "btnTab01" :	this.dsCond.setColumn(0, 'LVL1_CLASS_ID', '10000000');		break;
        		case "btnTab02" :	this.dsCond.setColumn(0, 'LVL1_CLASS_ID', '20000000');		break;
        	}
        	var sTranId = "select02";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetAM/select02";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 구성현황(운영( 조회
        this.fnSearchCi = function()
        {
        	var sTranId = "select03";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetAM/select03";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDataCi=dsDataCi";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "select01" :		// HW / SW 버튼 갯수 표기용 count 조회
        			var HW_CNT	=	this.dsDataCnt.getColumn(0, 'HW_CNT')||0;
        			this.btnTab01.set_text('HW(' + HW_CNT + ')');
        			var SW_CNT	=	this.dsDataCnt.getColumn(0, 'SW_CNT')||0;
        			this.btnTab02.set_text('SW(' + SW_CNT + ')');
        			break;

        		case "select02" :

        			break;

        		case "select03" :
        			for(var i = 0; i < this.dsDataCi.rowcount; i++)
        			{
        				var CI_TYPE_CD 	= this.dsDataCi.getColumn(i, 'CMM_CD');
        				var CNT 		= this.dsDataCi.getColumn(i, 'CNT')||0;
        				switch(CI_TYPE_CD)
        				{
        					case "10SV0000" :	// 서버
        						this.divServer.form.stcCnt.set_text(CNT);
        						break;

        					case "10SE0000" :	// 보안장비
        						this.divSecure.form.stcCnt.set_text(CNT);
        						break;
        					case "10NW0000" :	// 통신장비
        						this.divNetwork.form.stcCnt.set_text(CNT);
        						break;
        					case "20SI0100" :	// DBMS
        						this.divDbms.form.stcCnt.set_text(CNT);
        						break;

        					case "20SI0204" :	// EAI
        						this.divEai.form.stcCnt.set_text(CNT);
        						break;

        					case "20SI0202" :	// WAS
        						this.divWas.form.stcCnt.set_text(CNT);
        						break;

        					case "20SI0201" :	// WEB
        						this.divWeb.form.stcCnt.set_text(CNT);
        						break;

        					case "20SI0203" :	// TP/FEP
        						this.divTp.form.stcCnt.set_text(CNT);
        						break;
        				}
        			}
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
        		case "btnMore" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'AM0110_W');	break;	// HW/SW
        		case "btnMore2" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SV0110_W');	break;	// 구성현황(운영)
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }


        this.fnBtnTabOnclick = function(obj,e)
        {
        	this.dsData.clearData();

        	var arrBtn = 	[this.btnTab01, this.btnTab02];

        	// set css
        	for(var i = 0; i < arrBtn.length; i++)
        		arrBtn[i].set_cssclass('btn_HOME_boardOff');
        	obj.set_cssclass('btn_HOME_boardOn');

        	// 마지막 선택 버튼 저장
        	this.curBtn = obj;

        	// search
        	this.fnSearch(obj);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnMore2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTab01.addEventHandler("onclick",this.fnBtnTabOnclick,this);
            this.btnTab02.addEventHandler("onclick",this.fnBtnTabOnclick,this);
        };
        this.loadIncludeScript("am_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
