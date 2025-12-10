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
            this.set_titletext("농협손보 Home");
            this.getSetter("classname").set("");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
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
            obj.set_taborder("8");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMyTask","1435","0","445",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("Frame::frHome_D00.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget05","885.00","270","530","250",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::nhsb_D02.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","260",null,"10","485",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","485",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget02","688.00","10","728","250",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_HOME_border");
            obj.set_url("mainWidget::nhsb_D00.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divHomeLogo","40.00","10","628","250",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-img03.png\') no-repeat left top /contain");
            obj.set_borderRadius("10px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stcMainGbn","72","146","80","27",null,null,null,null,null,null,this.divHomeLogo.form);
            obj.set_taborder("0");
            obj.set_text("IT부문");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divHomeLogo.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","0","40",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","520",null,"10","485",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","0","780",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("rgba(140, 125, 200, 0.3)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget","40.00","530","1375","250",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWidget05_01","40.00","270","825","250",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend","50","218","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("실시간 알림 발송");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMyTask
            obj = new Layout("default","",0,0,this.divMyTask.form,function(p){});
            this.divMyTask.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05
            obj = new Layout("default","",0,0,this.divWidget05.form,function(p){});
            this.divWidget05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget02
            obj = new Layout("default","",0,0,this.divWidget02.form,function(p){});
            this.divWidget02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHomeLogo.form
            obj = new Layout("default","",0,0,this.divHomeLogo.form,function(p){});
            this.divHomeLogo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget
            obj = new Layout("default","",0,0,this.divWidget.form,function(p){});
            this.divWidget.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWidget05_01.form
            obj = new Layout("default","",0,0,this.divWidget05_01.form,function(p){});
            this.divWidget05_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::frHome_D00.xfdl");
            this._addPreloadList("fdl","mainWidget::nhsb_D02.xfdl");
            this._addPreloadList("fdl","mainWidget::nhsb_D00.xfdl");
        };
        
        // User Script
        this.registerScript("frHome_NHSB.xfdl", function() {
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
        this.sendMenuId	= 1033;
        this.objApp = nexacro.getApplication();

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        //Form onload 이벤트
        this.frHome_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	var userId = Ex.util.getSession('gvUserId');
        	if(!userId.startsWith("P") && !userId.startsWith("e"))
        	{
        		if(Ex.util.getSession('gvDeptCd') == "96655")
        		{
        			var fRow = nexacro.getApplication().gdsMenu.findRow("MENU_ID", this.sendMenuId);
        			if(fRow >- 1)
        			{
        				this.btnSend.set_visible(true);
        			}
        		}
        	}

        	// HOME Frame 권한 강제설정
        	if(Ex.isEmpty(this.getOwnerFrame().info) )
        	{
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

        	// 메인화면 Div 분기
        	var userFlag = Ex.util.getSession('gvUserFlag');
        	if( userFlag == '1' ) {
        		this.divHomeLogo.form.stcMainGbn.set_text('IT부문');		// 메인 이미지 test

        		// 현업 내 요청건
        		this.divWidget05_01.set_url('mainWidget::nhsb_D20.xfdl');	// 나의 할일

        		// IT부문 Bottom
        		this.divWidget.set_cssclass('div_HOME_border');
        		this.divWidget.set_url('mainWidget::nhsb_D22.xfdl');
        	}
        	else {
        		this.divHomeLogo.form.stcMainGbn.set_text('현업');	// 메인 이미지 test

        		// 현업 내 요청건
        		this.divWidget05_01.set_url('mainWidget::nhsb_D10.xfdl');	// 내 요청건

        		// 현업 Bottom
        		this.divWidget.set_cssclass('');
        		this.divWidget.set_url('mainWidget::nhsb_D11.xfdl');
        	}

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

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
            if(!varValue) return;

            switch(mID)
            {
        		case "deptNotExistAlert" :
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"userInfoPop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0000_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					  title 	: "나의 정보 관리"
        					, pUserId	: Ex.util.getSession('gvUserId')
        					, pPopType	: 'U'
        					, pEscYn	: 'N'	// esc 키로 닫는 것 차단
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        		break;
            }
        };

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

        	// 상
        	if(this.divWidget02.form.fnSearch)
        		this.divWidget02.form.fnSearch();

        	// 중-좌
        	if(this.divWidget05_01.form.fnSearch)
        		this.divWidget05_01.form.fnSearch();

        	// 중-우
        	if(this.divWidget05.form.fnSearch)
        		this.divWidget05.form.fnSearch();

        	//하
        	if(this.divWidget.form.fnSearch)
        		this.divWidget.form.fnSearch();

        	if( Ex.isEmpty(Ex.util.getSession('gvDeptCd')) )
        	{
        		var param = {
        			  id    : "deptNotExistAlert"   //fnMsgAfter에서 식별자로 사용되는 ID
        			, msg   : "소속팀이 존재하지 않습니다."//메시지 내용
        			, arrparam : [""]               //메시지의 변수에 들어갈 실제값
        			, msgtype : "I"                 //메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
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
        			"width=1400,height=750"                  // <--- width/height/modeless(프레임 처리 옵션)
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
        		case "btnSend" :
        			nexacro.getApplication().gvTmpMenuParam = "RECV_DIV_CD=IT";
        			nexacro.getApplication().MAIN_TOP.form.fnOpenMenu({menuId : this.sendMenuId});
        			break;
        	}
        }

        this.divHomeLogo_btn00_onclick = function(obj,e)
        {
        	this.divHomeLogo.form.tab00.tabindex = -1;
        };

        this.Static00_00_onclick = function(obj,e)
        {
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frHome_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.btnSend.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("frHome_NHSB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
