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
            this.set_titletext("현업 Bottom");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1375,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FROMDATE\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodoCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearlyCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSatisCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLeft","0","0","434","250",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_HOME_border");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","10","110","28",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("나의 할일");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divTodo01","40.00","48","171",null,null,"20",null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-con-set-01.png\') no-repeat center center /contain");
            obj.set_text("");
            obj.set_cursor("pointer");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("stcTitle","30","98","112","30",null,null,null,null,null,null,this.divLeft.form.divTodo01.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_color("#555555");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo01.addChild(obj.name, obj);

            obj = new Static("stcPrefix","103.00","128","40","35",null,null,null,null,null,null,this.divLeft.form.divTodo01.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_color("#333333");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("left");
            obj.set_padding("8px 0px 0px 0px");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo01.addChild(obj.name, obj);

            obj = new Static("stcCnt","30","128",null,"35","stcPrefix:0",null,null,null,null,null,this.divLeft.form.divTodo01.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_color("#333333");
            obj.set_font("bold 25px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("right");
            obj.set_padding("0px 8px 0px 0px");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo01.addChild(obj.name, obj);

            obj = new Div("divTodo02","221.00","47","171",null,null,"21",null,null,null,null,this.divLeft.form);
            obj.set_taborder("2");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-con-set-02.png\') no-repeat center center /contain");
            obj.set_cursor("pointer");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("stcTitle","30.00","98","112","30",null,null,null,null,null,null,this.divLeft.form.divTodo02.form);
            obj.set_taborder("0");
            obj.set_text("테스트/만족도");
            obj.set_color("#555555");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo02.addChild(obj.name, obj);

            obj = new Static("stcPrefix","103.00","128","40","35",null,null,null,null,null,null,this.divLeft.form.divTodo02.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_color("#333333");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("left");
            obj.set_padding("8px 0px 0px 0px");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo02.addChild(obj.name, obj);

            obj = new Static("stcCnt","30","128",null,"35","stcPrefix:0",null,null,null,null,null,this.divLeft.form.divTodo02.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_color("#333333");
            obj.set_font("bold 25px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("right");
            obj.set_padding("0px 8px 0px 0px");
            obj.set_cursor("pointer");
            this.divLeft.form.divTodo02.addChild(obj.name, obj);

            obj = new Div("divRight","divLeft:20","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_HOME_border");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","10","200","28",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("ITSM 연간 처리현황");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("divCnt02","675","41","198","92",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("3");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-processing-set02.png\') no-repeat center center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","122.00","10","61","61",null,null,null,null,null,null,this.divRight.form.divCnt02.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 24px \'KopubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divRight.form.divCnt02.addChild(obj.name, obj);

            obj = new Static("stcTitle","7.00","48","84","20",null,null,null,null,null,null,this.divRight.form.divCnt02.form);
            obj.set_taborder("1");
            obj.set_text("적기처리건수");
            obj.set_color("#3f4050");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_textAlign("center");
            this.divRight.form.divCnt02.addChild(obj.name, obj);

            obj = new Div("divCnt04","675","divCnt02:5","198","92",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("4");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-processing-set04.png\') no-repeat center center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","122.00","9","60","60",null,null,null,null,null,null,this.divRight.form.divCnt04.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 24px \'KopubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divRight.form.divCnt04.addChild(obj.name, obj);

            obj = new Static("stcTitle","-2.00","45","102","20",null,null,null,null,null,null,this.divRight.form.divCnt04.form);
            obj.set_taborder("1");
            obj.set_text("만족도미응답건수");
            obj.set_color("#3f4050");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_textAlign("center");
            this.divRight.form.divCnt04.addChild(obj.name, obj);

            obj = new Div("divGaugeTop","40","47","483","84",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-gaugebar-bg.png\') no-repeat left center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcTitle","37","30","134","24",null,null,null,null,null,null,this.divRight.form.divGaugeTop.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet02.png\') no-repeat left center");
            obj.set_text("적기처리율");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_color("#005bc3");
            obj.set_padding("0px 0px 0px 10px");
            this.divRight.form.divGaugeTop.addChild(obj.name, obj);

            obj = new Div("divGaugeBot","40.00",null,"483","84",null,"20",null,null,null,null,this.divRight.form);
            obj.set_taborder("6");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-gaugebar-bg.png\') no-repeat left center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcTitle","37.00","30","134","24",null,null,null,null,null,null,this.divRight.form.divGaugeBot.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet02.png\') no-repeat left center");
            obj.set_text("만족도평균");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_color("#005bc3");
            obj.set_padding("0px 0px 0px 10px");
            this.divRight.form.divGaugeBot.addChild(obj.name, obj);

            obj = new Div("divCnt01","441","stcTitle:3","198","92",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("1");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-processing-set01.png\') no-repeat center center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","127","10","61","61",null,null,null,null,null,null,this.divRight.form.divCnt01.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 24px \'KopubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divRight.form.divCnt01.addChild(obj.name, obj);

            obj = new Static("stcTitle","10","48","84","20",null,null,null,null,null,null,this.divRight.form.divCnt01.form);
            obj.set_taborder("1");
            obj.set_text("처리완료건수");
            obj.set_color("#3f4050");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_textAlign("center");
            this.divRight.form.divCnt01.addChild(obj.name, obj);

            obj = new Div("divCnt03","440","divCnt01:5","198","92",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("2");
            obj.set_background("transparent url(\'theme://NHSB_IMAGE_SET/HOME/main-processing-set03.png\') no-repeat center center /contain");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","127.00","9","62","60",null,null,null,null,null,null,this.divRight.form.divCnt03.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 24px \'KopubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divRight.form.divCnt03.addChild(obj.name, obj);

            obj = new Static("stcTitle","5.00","45","94","20",null,null,null,null,null,null,this.divRight.form.divCnt03.form);
            obj.set_taborder("1");
            obj.set_text("만족도응답건수");
            obj.set_color("#3f4050");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_textAlign("center");
            this.divRight.form.divCnt03.addChild(obj.name, obj);

            obj = new Div("divPointTop","181.00","42","49","41",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("7");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart01-legend.png\') no-repeat center center");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","5","0",null,"24","19",null,null,null,null,null,this.divRight.form.divPointTop.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 14px \'KoPubL\'");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.divRight.form.divPointTop.addChild(obj.name, obj);

            obj = new Static("stcPrefix",null,"0","15","24","0",null,null,null,null,null,this.divRight.form.divPointTop.form);
            obj.set_taborder("1");
            obj.set_text("%");
            obj.set_font("10px \'KoPubL\'");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_padding("2px 0px 0px 0px");
            this.divRight.form.divPointTop.addChild(obj.name, obj);

            obj = new Div("divPointBot","181.00","138","49","41",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("8");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circlechart01-legend.png\') no-repeat center center");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcCnt","5.00","0",null,"24","19",null,null,null,null,null,this.divRight.form.divPointBot.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_font("bold 14px \'KoPubL\'");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.divRight.form.divPointBot.addChild(obj.name, obj);

            obj = new Static("stcPrefix",null,"0","15","24","0",null,null,null,null,null,this.divRight.form.divPointBot.form);
            obj.set_taborder("1");
            obj.set_text("점");
            obj.set_font("10px \'KoPubL\'");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_padding("2px 0px 0px 0px");
            this.divRight.form.divPointBot.addChild(obj.name, obj);

            obj = new ProgressBar("pbarGaugeBgBot","181.00","175","200","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("9");
            obj.set_smooth("true");
            obj.set_background("#dddddd");
            obj.set_boxShadow("-1px -1px 2px 1px #cecece");
            obj.set_border("0px solid");
            obj.set_cssclass("pg_WF_green");
            obj.set_visible("false");
            obj.set_step("1");
            obj.set_borderRadius("10px");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("0");
            this.divRight.addChild(obj.name, obj);

            obj = new ProgressBar("pbarGaugeBgTop","181.00","79","200","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("10");
            obj.set_smooth("true");
            obj.set_background("#dddddd");
            obj.set_border("0px solid");
            obj.set_boxShadow("-1px -1px 2px 1px #cecece");
            obj.set_direction("forward");
            obj.set_visible("false");
            obj.set_borderRadius("10px");
            obj.set_min("0");
            obj.set_max("100");
            this.divRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft.form.divTodo01.form
            obj = new Layout("default","",0,0,this.divLeft.form.divTodo01.form,function(p){});
            this.divLeft.form.divTodo01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form.divTodo02.form
            obj = new Layout("default","",0,0,this.divLeft.form.divTodo02.form,function(p){});
            this.divLeft.form.divTodo02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divCnt02.form
            obj = new Layout("default","",0,0,this.divRight.form.divCnt02.form,function(p){});
            this.divRight.form.divCnt02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divCnt04.form
            obj = new Layout("default","",0,0,this.divRight.form.divCnt04.form,function(p){});
            this.divRight.form.divCnt04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divGaugeTop.form
            obj = new Layout("default","",0,0,this.divRight.form.divGaugeTop.form,function(p){});
            this.divRight.form.divGaugeTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divGaugeBot.form
            obj = new Layout("default","",0,0,this.divRight.form.divGaugeBot.form,function(p){});
            this.divRight.form.divGaugeBot.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divCnt01.form
            obj = new Layout("default","",0,0,this.divRight.form.divCnt01.form,function(p){});
            this.divRight.form.divCnt01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divCnt03.form
            obj = new Layout("default","",0,0,this.divRight.form.divCnt03.form,function(p){});
            this.divRight.form.divCnt03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divPointTop.form
            obj = new Layout("default","",0,0,this.divRight.form.divPointTop.form,function(p){});
            this.divRight.form.divPointTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divPointBot.form
            obj = new Layout("default","",0,0,this.divRight.form.divPointBot.form,function(p){});
            this.divRight.form.divPointBot.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1375,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLeft.form.divTodo01.form.stcCnt","text","dsTodoCnt","APPR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLeft.form.divTodo02.form.stcCnt","text","dsTodoCnt","STF_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divRight.form.divCnt01.form.stcCnt","text","dsYearlyCnt","TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divRight.form.divCnt02.form.stcCnt","text","dsYearlyCnt","FINISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRight.form.divCnt03.form.stcCnt","text","dsSatisCnt","COUNT_ALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRight.form.divCnt04.form.stcCnt","text","dsSatisCnt","COUNT_NOT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nhsb_D11.xfdl", function() {
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
        this.nRatioLeft = 181;	// default left

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
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
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	var FROMDATE	= Ex.util.today().substr(0, 4) + '0101'		// 년초
        	//var TODATE		= Ex.util.addDate(Ex.util.addMonth(Ex.util.today(), 1), -1);		// 이번달 마지막일
        	var TODATE		= Ex.util.today().substr(0, 6) + Ex.util.getLastDayOfMonth(Ex.util.today());
        	trace("FROMDATE : " + FROMDATE + " TODATE : " + TODATE);
        	this.dsCond.setColumn(0, 'FROMDATE', FROMDATE);
        	this.dsCond.setColumn(0, 'TODATE', TODATE);
        }
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearch = function()
        {
        	//trace('nhsb_D11 >> fnSearch');
        	this.fnSearchMyWork();	// 나의할일
        	this.fnSearchtReqFinYearly();	// 연간처리현황
        	this.fnSearchtSatisAvg();	// 만족도평균
        }

        // 나의 할일
        this.fnSearchMyWork = function()
        {
        	var sTranId = "selectMyWork";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectMyWork";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTodoCnt=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 연간처리현황
        this.fnSearchtReqFinYearly = function()
        {
        	var sTranId = "selectReqFinYearly";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectReqFinYearly";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsYearlyCnt=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 만족도평균
        this.fnSearchtSatisAvg = function()
        {
        	var sTranId = "selectSatisAvg";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectSatisAvg";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSatisCnt=dsData";       	// 서버에서 수신할 데이타셋
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
        		case "selectReqFinYearly" :
        			// 적기처리율 setting
        			var RATIO	= 0;
        			var TOT		= parseInt(this.dsYearlyCnt.getColumn(0, 'TOT')||0);
        			var FINISH	= parseInt(this.dsYearlyCnt.getColumn(0, 'FINISH')||0);
        			if( TOT == 0 || FINISH == 0 )
        			{
        				this.divRight.form.divPointTop.form.stcCnt.set_text('0');
        				this.divRight.form.divPointTop.set_left(this.nRatioLeft);
        			}
        			else
        			{
        				RATIO = nexacro.round((FINISH/TOT) * 100);
        				this.divRight.form.divPointTop.form.stcCnt.set_text(RATIO);
        				this.divRight.form.divPointTop.set_left(
        					nexacro.toNumber(this.nRatioLeft) +
        					nexacro.toNumber(this.divRight.form.pbarGaugeBgTop.getOffsetWidth() * (RATIO / 100))
        				);
        			}
        			/*
        			alert(
        				"this.nRatioLeft : " + this.nRatioLeft +
        				" this.divRight.form.divPointTop.left : " + this.divRight.form.divPointTop.left +
        				" this.divRight.form.pbarGaugeBgTop.getOffsetWidth() : " + this.divRight.form.pbarGaugeBgTop.getOffsetWidth() +
        				" (RATIO / 100) : " + (RATIO / 100)
        			);
        			*/
        			this.divRight.form.divPointTop.set_visible(true);
        			this.divRight.form.pbarGaugeBgTop.set_visible(true);
        			this.divRight.form.pbarGaugeBgTop.set_pos(RATIO);
        			//for(var i=0; i<RATIO; i++)	this.divRight.form.pbarGaugeBgBot.stepIt();
        			break;

        		case "selectSatisAvg" :
        			// 만족도평균 setting
        			var COUNT_ALL	= parseInt(this.dsSatisCnt.getColumn(0, 'COUNT_ALL')||0);	// 만족도 응답건수
        			var SUM_ITEM	= parseInt(this.dsSatisCnt.getColumn(0, 'SUM_ITEM')||0);
        			var COUNT_ITEM	= parseInt(this.dsSatisCnt.getColumn(0, 'COUNT_ITEM')||0);
        			var AVG_ITEM	= parseInt(this.dsSatisCnt.getColumn(0, 'AVG_ITEM')||0);
        			var COUNT_NOT	= parseInt(this.dsSatisCnt.getColumn(0, 'COUNT_NOT')||0);	// 만족도 미응답건수

        			var SCORE		= (AVG_ITEM * 100) / 5;		// 만족도평균(점)
        // 			alert(
        // 				"this.nRatioLeft : " + this.nRatioLeft +
        // 				" this.divRight.form.divPointTop.left : " + this.divRight.form.divPointTop.left +
        // 				" this.divRight.form.pbarGaugeBgBot.getOffsetWidth() : " + this.divRight.form.pbarGaugeBgBot.getOffsetWidth() +
        // 				" AVG_ITEM : " + AVG_ITEM +
        // 				" SCORE : " + SCORE
        // 			);
        			this.divRight.form.divPointBot.form.stcCnt.set_text(SCORE);

        			if( SCORE == 0 )
        			{
        				this.divRight.form.divPointBot.form.stcCnt.set_text('0');
        				this.divRight.form.divPointBot.set_left(this.nRatioLeft);
        			}
        			else
        			{
        				this.divRight.form.divPointBot.form.stcCnt.set_text(SCORE);
        				this.divRight.form.divPointBot.set_left(
        					nexacro.toNumber(this.nRatioLeft) +
        					nexacro.toNumber(this.divRight.form.pbarGaugeBgBot.getOffsetWidth() * (SCORE / 100) )
        				);
        			}
        			this.divRight.form.divPointBot.set_visible(true);
        			this.divRight.form.pbarGaugeBgBot.set_visible(true);
        			this.divRight.form.pbarGaugeBgBot.set_pos(SCORE);
        			//for(var i=0; i<SCORE; i++)	this.divRight.form.pbarGaugeBgBot.stepIt();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
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
        	var rowpos = -1;
        	var param = '';
        	switch(obj)
        	{
        		// 나의 할 일 > 결재
        		case this.divLeft.form.divTodo01 :
        		case this.divLeft.form.divTodo01.form.stcTitle :
        		case this.divLeft.form.divTodo01.form.stcCnt :
        		case this.divLeft.form.divTodo01.form.stcPrefix :
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0140_W');	// 결재함
        			break;

        		// 나의 할 일 > 테스트/만족도
        		case this.divLeft.form.divTodo02:
        		case this.divLeft.form.divTodo02.form.stcTitle :
        		case this.divLeft.form.divTodo02.form.stcCnt :
        		case this.divLeft.form.divTodo02.form.stcPrefix :
        			param = 'TEST_SATIS';
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');	// 요청함
        			break;
        	}

        	if( rowpos >= 0 )	Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), {param : param});
        	else				trace('해당 메뉴ID가 없어 이동할 수 없습니다');
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divLeft.form.divTodo01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo01.form.stcTitle.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo01.form.stcPrefix.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo01.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo02.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo02.form.stcTitle.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo02.form.stcPrefix.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.divTodo02.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsTodoCnt.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
