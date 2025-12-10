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
            this.set_titletext("요청현황");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataYear", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_WAIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIN_cNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_CNT\">0</Col><Col id=\"PROC_WAIT_CNT\">0</Col><Col id=\"PROC_CNT\">0</Col><Col id=\"FIN_cNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"ALL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IND_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ALL_CNT\">0</Col><Col id=\"DEPT_CNT\">0</Col><Col id=\"IND_CNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitleLeft","20","10","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("요청목록");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft01","20","stcTitleLeft:10","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart02-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","104","30",null,null,null,null,null,null,this.divLeft01.form);
            obj.set_taborder("0");
            obj.set_text("요청건");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_font("14px \'KoPubL\'");
            this.divLeft01.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","104","30","0",null,null,null,null,null,this.divLeft01.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#005bc3");
            obj.set_textAlign("right");
            obj.set_font("bold 20px \'KoPubL\'");
            obj.set_padding("1px 20px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            obj.set_tooltiptext("등록(임시저장/반려) 건도 포함");
            this.divLeft01.addChild(obj.name, obj);

            obj = new Div("divLeft02","20","divLeft01:5","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart02-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","104","30","0",null,null,null,null,null,this.divLeft02.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#005bc3");
            obj.set_textAlign("right");
            obj.set_font("bold 20px \'KoPubL\'");
            obj.set_padding("1px 20px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divLeft02.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","104","30",null,null,null,null,null,null,this.divLeft02.form);
            obj.set_taborder("1");
            obj.set_text("접수중");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_font("14px \'KoPubL\'");
            this.divLeft02.addChild(obj.name, obj);

            obj = new Div("divLeft03","20","divLeft02:5","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart02-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","104","30","0",null,null,null,null,null,this.divLeft03.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#005bc3");
            obj.set_textAlign("right");
            obj.set_font("bold 20px \'KoPubL\'");
            obj.set_padding("1px 20px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divLeft03.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","104","30",null,null,null,null,null,null,this.divLeft03.form);
            obj.set_taborder("1");
            obj.set_text("처리중");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_font("14px \'KoPubL\'");
            this.divLeft03.addChild(obj.name, obj);

            obj = new Div("divLeft04","20","divLeft03:5","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart02-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","104","30","0",null,null,null,null,null,this.divLeft04.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#005bc3");
            obj.set_textAlign("right");
            obj.set_font("bold 20px \'KoPubL\'");
            obj.set_padding("1px 20px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divLeft04.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","104","30",null,null,null,null,null,null,this.divLeft04.form);
            obj.set_taborder("1");
            obj.set_text("완료");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_font("14px \'KoPubL\'");
            this.divLeft04.addChild(obj.name, obj);

            obj = new Static("stcDivider","divLeft02:10.58%","0","2",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-divider.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Div("divRight01","274.00","56","233","51",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart01-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","10","53",null,null,"10",null,null,null,null,this.divRight01.form);
            obj.set_taborder("0");
            obj.set_text("전체");
            obj.set_color("#005bc3");
            obj.set_textAlign("center");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet02.png\') no-repeat left center");
            this.divRight01.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","84",null,"44","10",null,null,null,null,this.divRight01.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("white");
            obj.set_textAlign("right");
            obj.set_font("bold 25px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divRight01.addChild(obj.name, obj);

            obj = new Static("stcPrefix","stcCnt:2","10","14",null,null,"10",null,null,null,null,this.divRight01.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_color("#c2dafd");
            obj.set_textAlign("right");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            this.divRight01.addChild(obj.name, obj);

            obj = new Div("divRight02","274.00","116","233","51",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart01-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","10","53",null,null,"10",null,null,null,null,this.divRight02.form);
            obj.set_taborder("0");
            obj.set_text("팀");
            obj.set_color("#005bc3");
            obj.set_textAlign("center");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet02.png\') no-repeat left center");
            this.divRight02.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","84",null,"44","10",null,null,null,null,this.divRight02.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("white");
            obj.set_textAlign("right");
            obj.set_font("bold 25px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divRight02.addChild(obj.name, obj);

            obj = new Static("stcPrefix","stcCnt:2","10","14",null,null,"10",null,null,null,null,this.divRight02.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_color("#c2dafd");
            obj.set_textAlign("right");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            this.divRight02.addChild(obj.name, obj);

            obj = new Div("divRight03","274.00","176","233","51",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart01-num.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","10","53",null,null,"10",null,null,null,null,this.divRight03.form);
            obj.set_taborder("0");
            obj.set_text("개인");
            obj.set_color("#005bc3");
            obj.set_textAlign("center");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet02.png\') no-repeat left center");
            this.divRight03.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"10","84",null,"44","10",null,null,null,null,this.divRight03.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("white");
            obj.set_textAlign("right");
            obj.set_font("bold 25px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divRight03.addChild(obj.name, obj);

            obj = new Static("stcPrefix","stcCnt:2","10","14",null,null,"10",null,null,null,null,this.divRight03.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_color("#c2dafd");
            obj.set_textAlign("right");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_padding("1px 0px 0px 0px");
            obj.set_verticalAlign("middle");
            this.divRight03.addChild(obj.name, obj);

            obj = new Static("stcTitleRight","274.00","10","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("당월 미적기 처리건수");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.addChild(obj.name, obj);

            obj = new Static("stcYear","174","15","54","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-year-bg.png\') no-repeat center center");
            obj.set_color("#006dbb");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft01.form
            obj = new Layout("default","",0,0,this.divLeft01.form,function(p){});
            this.divLeft01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft02.form
            obj = new Layout("default","",0,0,this.divLeft02.form,function(p){});
            this.divLeft02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft03.form
            obj = new Layout("default","",0,0,this.divLeft03.form,function(p){});
            this.divLeft03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft04.form
            obj = new Layout("default","",0,0,this.divLeft04.form,function(p){});
            this.divLeft04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight01.form
            obj = new Layout("default","",0,0,this.divRight01.form,function(p){});
            this.divRight01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight02.form
            obj = new Layout("default","",0,0,this.divRight02.form,function(p){});
            this.divRight02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight03.form
            obj = new Layout("default","",0,0,this.divRight03.form,function(p){});
            this.divRight03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",530,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLeft01.form.stcCnt","text","dsDataYear","REQ_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLeft02.form.stcCnt","text","dsDataYear","PROC_WAIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divLeft03.form.stcCnt","text","dsDataYear","PROC_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divLeft04.form.stcCnt","text","dsDataYear","FIN_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRight01.form.stcCnt","text","dsDataMonth","ALL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRight02.form.stcCnt","text","dsDataMonth","DEPT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divRight03.form.stcCnt","text","dsDataMonth","IND_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nhsb_D02.xfdl", function() {
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
        this.YYYY;

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
        	this.dsCond.setColumn(0, 'YYYY', this.YYYY);
        	var FROM_DATE	= Ex.util.today().substr(0, 6) + '01';
        	var TO_DATE		= Ex.util.addDate(Ex.util.addMonth(FROM_DATE, 1), -1);
        	this.dsCond.setColumn(0, 'FROM_DATE', FROM_DATE);
        	this.dsCond.setColumn(0, 'TO_DATE', TO_DATE);

        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearch = function()
        {
        	trace('nhsb_D02 >> fnSearch');
        	this.fnSearchYear();
        	this.fnSearchMonth();
        }


        // 조회
        this.fnSearchYear = function()
        {
        	var sTranId = "selectReqCntYear";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectReqCntYear";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDataYear=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearchMonth = function()
        {
        	var sTranId = "selectReqCntDelayed";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectReqCntDelayed";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDataMonth=dsData";       	// 서버에서 수신할 데이타셋
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
        		case "select12":
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
        	this.YYYY = Ex.util.today().substr(0, 4);
        	this.stcYear.set_text('(' + this.YYYY + ')');
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	var param;
        	switch(obj)
        	{
        		case this.divLeft01.form.stcCnt :		// 요청목록 > 요청건
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			param = 'ALL';
        			break;
        		case this.divLeft02.form.stcCnt :		// 요청목록 > 접수중
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			param = 'PROC_WAIT_CNT';
        			break;
        		case this.divLeft03.form.stcCnt :		// 요청목록 > 처리중
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			param = 'ING';
        			break;
        		case this.divLeft04.form.stcCnt :		// 요청목록 > 완료
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			param = 'COMPL';
        			break;

        		case this.divRight01.form.stcCnt :		// 당월미적기 > 전체
        			//rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR9921_W');
        			param = 'DELAY-ALL';
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0221_W');
        			break;
        		case this.divRight02.form.stcCnt :		// 당월미적기 > 부서
        			param = 'DELAY-DEPT';
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0221_W');
        			break;
        		case this.divRight03.form.stcCnt :		// 당월미적기 > 개인
        			param = 'DELAY-USER';
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0221_W');
        			break;
        	}

        	if( rowpos >= 0 ) {
        		var fromDate	= this.YYYY + '0101';
        		var toDate		= this.YYYY + '1231';

        		var toDay = Ex.util.today();
        		trace("Ex.util.today().substring(0, 6) : " + toDay.substring(0, 6) + " Ex.util.getLastDayOfMonth(toDay) : " + Ex.util.getLastDayOfMonth(toDay));

        		if(param.startsWith("DELAY-"))
        		{
        			fromDate	= Ex.util.getFirstDate(Ex.util.today());
        			toDate		= toDay.substring(0, 6) + Ex.util.getLastDayOfMonth(toDay);
        		}
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), {param : param, fromDate : fromDate, toDate : toDate}, true);
        	}
        	else
        		trace('해당 메뉴ID가 없어 이동할 수 없습니다');
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divLeft01.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft02.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft03.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft04.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcDivider.addEventHandler("onclick",this.stcDivider_onclick,this);
            this.divRight01.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRight02.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRight03.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsDataYear.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
            this.dsDataMonth.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
