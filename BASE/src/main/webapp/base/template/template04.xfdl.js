(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testPop");
            this.set_titletext("테스트 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TABLE_1\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TABLE_2\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_3\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_3\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TABLE_3\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_4\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_4\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TABLE_4\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_5\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_5\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TABLE_5\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_6\" type=\"STRING\" size=\"256\"/><Column id=\"API_NAME_1\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_7\" type=\"STRING\" size=\"256\"/><Column id=\"API_NAME_2\" type=\"STRING\" size=\"256\"/><Column id=\"BOT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE_1\">제목</Col><Col id=\"CNTN_1\">결재 알리미 제목입니다</Col><Col id=\"IS_TABLE_1\">0</Col><Col id=\"TITLE_2\">신청부서</Col><Col id=\"CNTN_2\">미래혁신시스템사업본부</Col><Col id=\"IS_TABLE_2\">0</Col><Col id=\"TITLE_3\">신청자</Col><Col id=\"CNTN_3\">박하늘</Col><Col id=\"IS_TABLE_3\">0</Col><Col id=\"TITLE_4\">변경 내용</Col><Col id=\"CNTN_4\">변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다. 변경내용을 입력하는 곳입니다.</Col><Col id=\"IS_TABLE_4\">0</Col><Col id=\"TITLE_5\">서버목록</Col><Col id=\"CNTN_5\">[[{&apos;COLUMN&apos;:&apos;서버명&apos;,&apos;VALUE&apos;:&apos;1&apos;},{&apos;COLUMN&apos;:&apos;프로토콜&apos;,&apos;VALUE&apos;:&apos;2&apos;},{&apos;COLUMN&apos;:&apos;서버 한글명&apos;,&apos;VALUE&apos;:&apos;3&apos;}],[{&apos;COLUMN&apos;:&apos;서버명&apos;,&apos;VALUE&apos;:&apos;1&apos;},{&apos;COLUMN&apos;:&apos;프로토콜&apos;,&apos;VALUE&apos;:&apos;2&apos;},{&apos;COLUMN&apos;:&apos;서버 한글명&apos;,&apos;VALUE&apos;:&apos;3&apos;}]]</Col><Col id=\"IS_TABLE_5\">1</Col><Col id=\"TITLE_6\">승인</Col><Col id=\"API_NAME_1\">https://itsm.wemb.co.kr/ITBP/mobile.do?a=2&amp;b=3</Col><Col id=\"TITLE_7\">반려</Col><Col id=\"BOT_ID\">approvebot_itsm</Col><Col id=\"RCVR_USER_ID\">geonil.song@miraeasset.com</Col><Col id=\"CNTN\">결재 알리미 제목입니다. /미래혁신시스템사업본부 /박하늘</Col><Col id=\"REQ_ID\">TT202409270093</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAlert", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"SECOND_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"THIRD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_URL\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEND_ID\">s1214461</Col><Col id=\"SENDER_NAME\">노익현</Col><Col id=\"TITLE\">Mi-SQUARE 제목입니다.</Col><Col id=\"TMP_CONTENTS\">첫번째 내용</Col><Col id=\"FIRST_CONTENT\">두번째 내용</Col><Col id=\"SECOND_CONTENT\">세번째 내용</Col><Col id=\"THIRD_CONTENT\">네번째 내용</Col><Col id=\"LINK_URL\">http://172.23.1.101/admt10/</Col><Col id=\"SYSTEM_NAME\">IT포탈</Col><Col id=\"REQ_ID\">TT202409270076</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcv", this);
            obj._setContents("<ColumnInfo><Column id=\"RCV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RCV\">s1214484</Col></Row><Row><Col id=\"RCV\">s1214461</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid navy");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"13","100","32","5",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"13","100","32","110",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","-6","0",null,null,"6","divBottom:0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","5","5","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("Flow 결재알리미");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdLeft","5","45",null,"95","1.09%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("none");
            obj.set_useSort("true");
            obj.set_binddataset("dsCond");
            obj.set_layoutorder("0");
            obj.set_flexshrink("10");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TITLE_1\"/><Cell col=\"1\" text=\"CNTN_1\"/><Cell col=\"2\" text=\"IS_TABLE_1\"/><Cell col=\"3\" text=\"TITLE_2\"/><Cell col=\"4\" text=\"CNTN_2\"/><Cell col=\"5\" text=\"IS_TABLE_2\"/><Cell col=\"6\" text=\"TITLE_3\"/><Cell col=\"7\" text=\"CNTN_3\"/><Cell col=\"8\" text=\"IS_TABLE_3\"/><Cell col=\"9\" text=\"TITLE_4\"/><Cell col=\"10\" text=\"CNTN_4\"/><Cell col=\"11\" text=\"IS_TABLE_4\"/><Cell col=\"12\" text=\"TITLE_5\"/><Cell col=\"13\" text=\"CNTN_5\"/><Cell col=\"14\" text=\"IS_TABLE_5\"/><Cell col=\"15\" text=\"TITLE_6\"/><Cell col=\"16\" text=\"API_NAME_1\"/><Cell col=\"17\" text=\"TITLE_7\"/><Cell col=\"18\" text=\"API_NAME_2\"/><Cell col=\"19\" text=\"BOT_ID\"/><Cell col=\"20\" text=\"RCVR_USER_ID\"/><Cell col=\"21\" text=\"CNTN\"/><Cell col=\"22\" text=\"REQ_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE_1\" edittype=\"text\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:CNTN_1\" edittype=\"text\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:IS_TABLE_1\" edittype=\"text\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:TITLE_2\" edittype=\"text\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:CNTN_2\" edittype=\"text\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:IS_TABLE_2\" edittype=\"text\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:TITLE_3\" edittype=\"text\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:CNTN_3\" edittype=\"text\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:IS_TABLE_3\" edittype=\"text\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:TITLE_4\" edittype=\"text\" padding=\"0px\"/><Cell col=\"10\" text=\"bind:CNTN_4\" edittype=\"text\" padding=\"0px\"/><Cell col=\"11\" text=\"bind:IS_TABLE_4\" edittype=\"text\" padding=\"0px\"/><Cell col=\"12\" text=\"bind:TITLE_5\" edittype=\"text\" padding=\"0px\"/><Cell col=\"13\" text=\"bind:CNTN_5\" edittype=\"text\" padding=\"0px\"/><Cell col=\"14\" text=\"bind:IS_TABLE_5\" edittype=\"text\" padding=\"0px\"/><Cell col=\"15\" text=\"bind:TITLE_6\" edittype=\"text\" padding=\"0px\"/><Cell col=\"16\" text=\"bind:API_NAME_1\" edittype=\"text\" padding=\"0px\"/><Cell col=\"17\" text=\"bind:TITLE_7\" edittype=\"text\" padding=\"0px\"/><Cell col=\"18\" text=\"bind:API_NAME_2\" edittype=\"text\" padding=\"0px\"/><Cell col=\"19\" text=\"bind:BOT_ID\" edittype=\"text\" padding=\"0px\"/><Cell col=\"20\" text=\"bind:RCVR_USER_ID\" edittype=\"text\" padding=\"0px\"/><Cell col=\"21\" text=\"bind:CNTN\" edittype=\"text\" padding=\"0px\"/><Cell col=\"22\" text=\"bind:REQ_ID\" edittype=\"text\" padding=\"0px\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btn01","10.00","160","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("window.open");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btn02","10.00","240","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("메신져 알림");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdAlert","9.00","280",null,"95","0.78%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("none");
            obj.set_useSort("true");
            obj.set_binddataset("dsAlert");
            obj.set_layoutorder("0");
            obj.set_flexshrink("10");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEND_ID\"/><Cell col=\"1\" text=\"SENDER_NAME\"/><Cell col=\"2\" text=\"TITLE\"/><Cell col=\"3\" text=\"TMP_CONTENTS\"/><Cell col=\"4\" text=\"FIRST_CONTENT\"/><Cell col=\"5\" text=\"SECOND_CONTENT\"/><Cell col=\"6\" text=\"THIRD_CONTENT\"/><Cell col=\"7\" text=\"LINK_URL\"/><Cell col=\"8\" text=\"SYSTEM_NAME\"/><Cell col=\"9\" text=\"REQ_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:SEND_ID\" edittype=\"text\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:SENDER_NAME\" edittype=\"text\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:TITLE\" edittype=\"text\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:TMP_CONTENTS\" edittype=\"text\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:FIRST_CONTENT\" edittype=\"text\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:SECOND_CONTENT\" edittype=\"text\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:THIRD_CONTENT\" edittype=\"text\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:LINK_URL\" edittype=\"text\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:SYSTEM_NAME\" edittype=\"text\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:REQ_ID\" edittype=\"text\" padding=\"0px\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdRcv","9.00","375",null,"127","87.89%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("none");
            obj.set_useSort("true");
            obj.set_binddataset("dsRcv");
            obj.set_layoutorder("0");
            obj.set_flexshrink("10");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RCV\"/></Band><Band id=\"body\"><Cell text=\"bind:RCV\" edittype=\"text\" padding=\"0px\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnAdd","157","375","61","28",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("+");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDelete","157.00","404","61","28",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("-");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdAlert00","9.00","560",null,"95","0.78%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("none");
            obj.set_useSort("true");
            obj.set_binddataset("dsData");
            obj.set_layoutorder("0");
            obj.set_flexshrink("10");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"800\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"result\"/></Band><Band id=\"body\"><Cell text=\"bind:result\" edittype=\"text\" padding=\"0px\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("template04.xfdl", function() {
        this.onLoad = function(obj,e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        };

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        //	this.parent.parent.popupLoadComplete(this, this.divContent, this.divBottom);
        };

        this.divBtn_btnClose_onclick = function(obj,e)
        {
        	Ex.core.pclose(this, "");
        };
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // FLOW 승인요청
        this.fnButton00 = function()
        {
        	// transaction
        	var sTranId = "flowtest01";         	// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM9999W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";           // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnBtn01 = function()
        {
        //    var url = "https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp";
        //    window.open(url, "_blank", "fullscreen=yes");

        	var sTranId = "rdCallFrame";         	// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "REPORT/rdCallFrame";	// 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnBtn02 = function()
        {
        	// transaction
        	var sTranId = "alerttest01";         	// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM9999W/select02";	// 서비스명
            var sInDs = "dsCond=dsAlert dsRcv=dsRcv";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";           // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "Button00" :			//조회
        			this.fnButton00();
        			break;

        		case "btn01" :			//
        			this.fnBtn01();
        			break;

        		case "btn02" :			//alert
        			this.fnBtn02();
        			break;

        		case "btnAdd" :
        		    this.dsRcv.addRow();
        			break;

        		case "btnDelete" :
        		    this.dsRcv.deleteRow(this.dsRcv.rowposition);
        			break;
        	}
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
        	    case "rdCallFrame" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "flowtest01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "alerttest01" :
        			Ex.core.toast(this, "10002");
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.onLoad,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.divBtn_btnClose_onclick,this);
            this.divContent.form.Button00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btn01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btn02.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("template04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
