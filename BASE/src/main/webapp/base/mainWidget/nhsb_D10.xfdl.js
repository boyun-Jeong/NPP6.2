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
            this.set_titletext("현업 - 내 요청건");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(825,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLASS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_WAIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNT_DUE\" type=\"STRING\" size=\"256\"/><Column id=\"STF_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIN_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPR_CNT\">0</Col><Col id=\"PROC_WAIT_CNT\">0</Col><Col id=\"PROC_CNT\">0</Col><Col id=\"CNT_DUE\">0</Col><Col id=\"STF_CNT\">0</Col><Col id=\"FIN_CNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMinYear", this);
            obj._setContents("<ColumnInfo><Column id=\"MIN_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc00","20.00","5","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-titbullet01.png\') no-repeat left center");
            obj.set_text("내 요청 건");
            obj.set_padding("0px 0px 0px 19px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubB\'");
            this.addChild(obj.name, obj);

            obj = new Static("stcBottom","0","182",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-todo-bottom-bg.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Div("divTodo01","10","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15","15","86","87",null,null,null,null,null,null,this.divTodo01.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo01.addChild(obj.name, obj);

            obj = new Div("divTodo02","divTodo01:22","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15.00","15","86","87",null,null,null,null,null,null,this.divTodo02.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo02.addChild(obj.name, obj);

            obj = new Div("divTodo03","divTodo02:22","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15.00","15","86","87",null,null,null,null,null,null,this.divTodo03.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo03.addChild(obj.name, obj);

            obj = new Div("divTodo04","divTodo03:22","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15.00","15","86","87",null,null,null,null,null,null,this.divTodo04.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo04.addChild(obj.name, obj);

            obj = new Div("divTodo05","divTodo04:22","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15.00","15","86","87",null,null,null,null,null,null,this.divTodo05.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo05.addChild(obj.name, obj);

            obj = new Div("divTodo06","divTodo05:22","82","116","127",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-circle.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","15.00","15","86","87",null,null,null,null,null,null,this.divTodo06.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_color("#3453ff");
            obj.set_font("bold 32px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTodo06.addChild(obj.name, obj);

            obj = new Div("divTodo01Top","19","39","99","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","34","5",null,null,"0","7",null,null,null,null,this.divTodo01Top.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTodo01Top.addChild(obj.name, obj);

            obj = new Div("divTodo02Top","divTodo01:31","39","99","41",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn02.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","34.00","6",null,null,"0","6",null,null,null,null,this.divTodo02Top.form);
            obj.set_taborder("0");
            obj.set_text("접수대기");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTodo02Top.addChild(obj.name, obj);

            obj = new Div("divTodo03Top","divTodo02:31","39","99","41",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn03.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","34.00","6",null,null,"0","6",null,null,null,null,this.divTodo03Top.form);
            obj.set_taborder("0");
            obj.set_text("처리중");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTodo03Top.addChild(obj.name, obj);

            obj = new Div("divTodo04Top","divTodo03:31","39","99","41",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn04.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","34.00","6",null,null,"0","6",null,null,null,null,this.divTodo04Top.form);
            obj.set_taborder("0");
            obj.set_text("납기임박");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTodo04Top.addChild(obj.name, obj);

            obj = new Div("divTodo05Top","divTodo04:21.00","39","118","41",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn05.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","33.00","6",null,null,"0","6",null,null,null,null,this.divTodo05Top.form);
            obj.set_taborder("0");
            obj.set_text("테스트만족도");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px 0px 0px 1px");
            this.divTodo05Top.addChild(obj.name, obj);

            obj = new Div("divTodo06Top","divTodo05:31","39","99","41",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/label-btn06.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","34.00","6",null,null,"0","6",null,null,null,null,this.divTodo06Top.form);
            obj.set_taborder("0");
            obj.set_text("완료");
            obj.set_color("#32333b");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTodo06Top.addChild(obj.name, obj);

            obj = new Static("stc01","131","39","13","41",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-arrow01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00","269","39","13","41",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-arrow01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00","407","39","13","41",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-arrow01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00_00","540","39","13","41",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-arrow01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00_00_00","688.00","39","13","41",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-arrow01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYear",null,"5","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("YEAR");
            obj.set_datacolumn("YEAR");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTodo01.form
            obj = new Layout("default","",0,0,this.divTodo01.form,function(p){});
            this.divTodo01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo02.form
            obj = new Layout("default","",0,0,this.divTodo02.form,function(p){});
            this.divTodo02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo03.form
            obj = new Layout("default","",0,0,this.divTodo03.form,function(p){});
            this.divTodo03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo04.form
            obj = new Layout("default","",0,0,this.divTodo04.form,function(p){});
            this.divTodo04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo05.form
            obj = new Layout("default","",0,0,this.divTodo05.form,function(p){});
            this.divTodo05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo06.form
            obj = new Layout("default","",0,0,this.divTodo06.form,function(p){});
            this.divTodo06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo01Top.form
            obj = new Layout("default","",0,0,this.divTodo01Top.form,function(p){});
            this.divTodo01Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo02Top.form
            obj = new Layout("default","",0,0,this.divTodo02Top.form,function(p){});
            this.divTodo02Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo03Top.form
            obj = new Layout("default","",0,0,this.divTodo03Top.form,function(p){});
            this.divTodo03Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo04Top.form
            obj = new Layout("default","",0,0,this.divTodo04Top.form,function(p){});
            this.divTodo04Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo05Top.form
            obj = new Layout("default","",0,0,this.divTodo05Top.form,function(p){});
            this.divTodo05Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTodo06Top.form
            obj = new Layout("default","",0,0,this.divTodo06Top.form,function(p){});
            this.divTodo06Top.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",825,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTodo01.form.stcCnt","text","dsData","APPR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTodo02.form.stcCnt","text","dsData","PROC_WAIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTodo03.form.stcCnt","text","dsData","PROC_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTodo04.form.stcCnt","text","dsData","CNT_DUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTodo05.form.stcCnt","text","dsData","STF_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTodo06.form.stcCnt","text","dsData","FIN_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboYear","value","dsCond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nhsb_D10.xfdl", function() {
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
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
         this.fnSearchMinYear = function()
        {
        	//trace('nhsb_D10 >> fnSearch');
        	var sTranId = "selectReqMinYear";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectReqMinYear";	// 서비스명
            var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMinYear=dsMinYear";			// 서버에서 수신할 데이타셋
            var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch = function()
        {
        	//trace('nhsb_D10 >> fnSearch');
        	var sTranId = "selectMyReqCnt";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectMyReqCnt";            // 서비스명
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
        		case "selectReqMinYear" :
        			var curYear = Ex.util.today().substring(0, 4);
        			trace("curYear : " + curYear);
        			this.dsYear.clearData();
        			for(var i=curYear; i>=nexacro.toNumber(this.dsMinYear.getColumn(0, "MIN_YEAR")); i--)
        			{
        				var aRow = this.dsYear.addRow();
        				this.dsYear.setColumn(aRow, "YEAR", i);
        			}
        			this.dsCond.setColumn(0, "YEAR", curYear);
        			this.fnSearch();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)	{}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnSearchMinYear();
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');	// 요청함
        	var param = '';
        	switch(obj)
        	{
        		case this.divTodo01.form.stcCnt :	// 결재
        			param = 'APPR';
        			break;

        		case this.divTodo02.form.stcCnt :	// 접수대기
        			param = 'PROC_WAIT_CNT';
        			break;

        		case this.divTodo03.form.stcCnt :	// 처리중
        			param = 'ING';
        			break;

        		case this.divTodo04.form.stcCnt :	// 납기임박
        			param = 'DUE_CNT';
        			break;

        		case this.divTodo05.form.stcCnt :	// 테스트 만족도
        			param = 'TEST_SATIS';
        			break;

        		case this.divTodo06.form.stcCnt :	// 완료
        			param = 'COMPL';
        			break;
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), {param : param});
        	else
        		trace('해당 메뉴ID가 없어 이동할 수 없습니다');
        }

        this.dsData_onrowsetchanged = function(obj,e)
        {
        	var str = "<fc v='#2c8bf8'>" + obj.rowcount + "</fc> 건";
        	this.divCnt.form.stcCnt.set_text(str);
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	this.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divTodo01.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTodo02.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTodo03.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTodo04.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTodo05.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTodo06.form.stcCnt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.cboYear.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.dsData.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
