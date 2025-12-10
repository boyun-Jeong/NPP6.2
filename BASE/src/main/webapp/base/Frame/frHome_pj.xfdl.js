(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frHome");
            this.set_titletext("Main");
            this.getSetter("classname").set("");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardNtcPop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BOARD_TYPE_CD\">NTC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_00_00_00","1415","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMyTask","1435","0","445",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("Frame::frHome_D00.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divFooter","0","divMyTask:0",null,"52","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Footer  Height 52px");
            obj.set_border("0px none");
            obj.set_background("#dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","5","970",null,null,"5",null,null,null,null,this.divFooter.form);
            obj.set_taborder("0");
            obj.set_text("Copyright ⓒ Wemb SP(Smart Portal Platform) All Reserved.");
            obj.set_font("normal 11pt/normal \"NanumSaureR\"");
            obj.set_verticalAlign("middle");
            this.divFooter.addChild(obj.name, obj);

            obj = new Div("divWidget05","734","290","680","250",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::pj_D02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","714","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","270",null,"20","485",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"20","485",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget02","734","20","680","250",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::pj_D00.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divHomeLogo","40","20","675","250",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://SPP_IMAGE_SET/HOME/bg_HOME_sppMainWide.png\') no-repeat left top");
            obj.set_borderRadius("10px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28","40","287","40",null,null,null,null,null,null,this.divHomeLogo.form);
            obj.set_taborder("0");
            obj.set_text("IT 스마트포털");
            obj.set_font("normal 700 24pt/normal \"NanumSquareR\"");
            obj.set_color("white");
            this.divHomeLogo.addChild(obj.name, obj);

            obj = new Static("Static00_00","28","Static00:5","287","40",null,null,null,null,null,null,this.divHomeLogo.form);
            obj.set_taborder("1");
            obj.set_text("플랫폼");
            obj.set_font("normal 700 24pt/normal \"NanumSquareR\"");
            obj.set_color("white");
            this.divHomeLogo.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","28","Static00_00:5","412","40",null,null,null,null,null,null,this.divHomeLogo.form);
            obj.set_taborder("2");
            obj.set_text("IT프로젝트관리시스템");
            obj.set_font("normal bold 12pt/normal \"NanumSquareR\"");
            obj.set_color("white");
            this.divHomeLogo.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","0","40",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","540",null,"20","485",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget05_00","734","560","680","250",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::pj_D04.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","0","810",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget05_00_00","40","560","675","250",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::pj_D03.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget05_01","38","290","675","250",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::pj_D01.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMyTask
            obj = new Layout("default","",0,0,this.divMyTask.form,function(p){});
            this.divMyTask.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFooter.form
            obj = new Layout("default","",0,0,this.divFooter.form,function(p){});
            this.divFooter.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05
            obj = new Layout("default","",0,0,this.divWidget05.form,function(p){});
            this.divWidget05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget02
            obj = new Layout("default","",0,0,this.divWidget02.form,function(p){});
            this.divWidget02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHomeLogo.form
            obj = new Layout("default","",0,0,this.divHomeLogo.form,function(p){});
            this.divHomeLogo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05_00
            obj = new Layout("default","",0,0,this.divWidget05_00.form,function(p){});
            this.divWidget05_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05_00_00
            obj = new Layout("default","",0,0,this.divWidget05_00_00.form,function(p){});
            this.divWidget05_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05_01
            obj = new Layout("default","",0,0,this.divWidget05_01.form,function(p){});
            this.divWidget05_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::frHome_D00.xfdl");
            this._addPreloadList("fdl","mainWidget::pj_D02.xfdl");
            this._addPreloadList("fdl","mainWidget::pj_D00.xfdl");
            this._addPreloadList("fdl","mainWidget::pj_D04.xfdl");
            this._addPreloadList("fdl","mainWidget::pj_D03.xfdl");
            this._addPreloadList("fdl","mainWidget::pj_D01.xfdl");
        };
        
        // User Script
        this.registerScript("frHome_pj.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Frame Home
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	WEMB		최초작성 - 메인화면은 left, right, bottom의 margin 처리를 공통에서 잡지 않고 별도로 처리함.
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        //Form onload 이벤트
        this.frHome_onload = function(obj, e)
        {
        	// HOME Frame 권한 강제설정
        	if(Ex.isEmpty(this.getOwnerFrame().info) ) {
        		this.getOwnerFrame().info = {
        				readYn			: 'Y'
        			  , writeYn			: 'Y'
        			  , deleteYn		: 'Y'
        			  , saveYn			: 'Y'
        			  , exclDownYn		: 'Y'
        			  , reportPrntYn	: 'Y'
        			  , fileUpYn		: 'Y'
        		}
        	};

        	this.vscrollbar.set_scrollbarsize(20);
        	this.vscrollbar.set_scrollindicatorsize(16);

        	this.fnSearch();
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
        		case "selectNtcPop" : // 팝업공지조회 callback
        			this.fnOpenNtcPop();
        			break;
        	}
        }

        /***********************************************************************************
        * Common Function
        ***********************************************************************************/
        this.fnSearch = function()
        {
        	this.fnActiveSearch();
        }


        // fnActiveSearch :: HOME으로 이동할 떄마다 호출
        this.fnActiveSearch = function()
        {
        	this.fnSearchNtcPop();		// 팝업공지 조회

        	// 우측 div 검색
        	if(this.divMyTask.form.fnSearch)
        		this.divMyTask.form.fnSearch();
        }

        this.fnSearchNtcPop = function()
        {
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'BOARD_TYPE_CD', 'NTC');
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'POST_YN', 'Y');
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'POP_YN', 'Y');

        	var sTranId = "selectNtcPop";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0210W/select01";            // 서비스명
            var sInDs = "dsCond=dsCondBoard";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsBoardNtcPop=dsBoardMt";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        this.fnOpenNtcPop = function()
        {
        	for(var i = this.dsBoardNtcPop.rowcount-1; i >= 0; i--)
        	{
        		var POP_YN = this.dsBoardNtcPop.getColumn(i, 'POP_YN')||'';
        		if( POP_YN != 'Y' )		continue;

        		var BOARD_NO = this.dsBoardNtcPop.getColumn(i, 'BOARD_NO');
        		var USER_ID	= Ex.util.getSession('gvUserId');
        		var key = 'SppNtcPop|'+BOARD_NO+'|'+USER_ID;
        		var value = Ex.util.getStoredItem(key);

        		if( !Ex.isEmpty(value) ) {		// 값이 있으면
        			var today = Ex.util.today();
        			if(Ex.util.getDiffDay(today, value) == 0) {		// 안보기 날짜가 안지났으면 skip
        				continue;
        			}
        			else {			// 안보기 날짜가 지났으면 초기화 후 팝업 호출
        				Ex.util.clearStoredItem(key);
        			}
        		}

        		Ex.core.popup(this,
        			'noticePop_'+BOARD_NO,
        			"fomm::FOMM0210_P01.xfdl",             		// <--- 팝업창 오픈 Url
        			{ title			: '공지사항 상세',
        			  pPopType		: 'R',
        			  pNtcPopYn		: 'Y',
        			  pBoardNo		: BOARD_NO
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=1100,height=750"                  // <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        }


        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frHome_onload,this);
        };
        this.loadIncludeScript("frHome_pj.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
