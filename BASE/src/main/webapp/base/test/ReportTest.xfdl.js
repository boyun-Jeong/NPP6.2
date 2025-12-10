(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BoardInsert_P02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFormInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divTest","0","0","800","740",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnReport","575.00","17","75","26",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_search");
            obj.set_text("조회");
            this.divTest.addChild(obj.name, obj);

            obj = new Edit("edtAssetNm","255.00","19","310","24",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            this.divTest.addChild(obj.name, obj);

            obj = new Static("stc00","135.00","123","120","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("2");
            obj.set_text("레포트명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTest.addChild(obj.name, obj);

            obj = new Static("stc00_00","135.00","20","70","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("3");
            obj.set_text("요청서ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTest.addChild(obj.name, obj);

            obj = new Edit("edtAssetNm00","255.00","119","310","24",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("btnReport00","575.00","117","75","26",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divTest.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTest.form
            obj = new Layout("default","",0,0,this.divTest.form,function(p){});
            this.divTest.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBottom.form.divSearchArea.form.edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBottom.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBottom.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTest.form.edtAssetNm","value","dsFormInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTest.form.stc00_00","value","dsFormInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTest.form.edtAssetNm00","value","dsFormInfo","REPORT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ReportTest.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ BoardInsert_P02
        * 화면(명)		︰ 게시판 생성
        * 메뉴(경로)	︰ TEST > TEST-2 > 게시판 모음 POP_UP
        * 화면 설명	︰ TEST 게시판 생성
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.19
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.19	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pWebViewUrl		WebView에 표시할 url
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pWebViewUrl;

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
            //this.dsFormInfo.setColumn(0, "REQ_ID", 'TT202410070112');
        	this.fnCompInit();		// 컴포넌트 초기화
        }




        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;

        		case "btnReport" : //리포트(pdf 출력) 버튼
        			trace("---report--", this.dsFormInfo.getColumn(0, 'REQ_ID'))
        			this.fnReportPrint();
        			break;

        		case "btnReport00" : //리포트(pdf 출력) 버튼
        			trace("---report--", this.dsFormInfo.getColumn(0, 'REQ_ID'))
        			this.fnReportPrint();
        			break;
        	}
        }


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.pWebViewUrl = (this.getOwnerFrame().pWebViewUrl||'');

        	if(!Ex.isEmpty(this.pWebViewUrl))
        	{
        		this.divViewer.form.wevReport.set_url(this.pWebViewUrl);
        		this.divViewer.form.wevReport.show();
        	}

        }

        this.fnReportPrint = function()
        {
        	console.log("----- REQ_ID : " + this.dsFormInfo.getColumn(0, "REQ_ID"));
        	console.log("REPORT_NM>" , this.dsFormInfo.getColumn(0, 'REPORT_NM'));
        	var fileNm = this.dsFormInfo.getColumn(0, 'REPORT_NM');
        	//var fileNm = "IT_Work"; // 불러올 .jasper 파일명

        	// transaction
        // 	var sTranId = "report";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        //     var sService = "report/generate";            	// 서비스명
        //     var sInDs = "";                  				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        //     var sOutDs = "dsCond=dsCond";       			// 서버에서 수신할 데이타셋
        //     var sArg = "reqId="+encodeURIComponent(REQ_ID)+" file=IT_Work";            // 서버 @ParamVariable 인자와 맵핑됨
        // 	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	var pdfUrl = "http://localhost:8090/report/generate";
        	//pdfUrl += "?reqId="+encodeURIComponent(this.dsFormInfo.getColumn(0, 'REQ_ID'));
        	pdfUrl += "?reqId="+encodeURIComponent(this.dsFormInfo.getColumn(0, 'REQ_ID'));
        	pdfUrl += "&file="+encodeURIComponent(fileNm);

        	var pWebViewUrl = pdfUrl;
        	Ex.core.popup(	this,
        				'ReportViewer',
        				"test::ReportViewer.xfdl",             		// <--- 팝업창 오픈 Url
        				{ title:Ex.core.word('REPORT') , pWebViewUrl:pWebViewUrl},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"
        	  );

        // 	var objWebBrowser = new WebBrowser("ReportViewer", "0%", 20, "70%", "90%", null, null);
        // 	objWebBrowser.set_url(pdfUrl);
        // 	this.addChild("ReportViewer", objWebBrowser);
        // 	trace("----생성된 웹브라우저-----" , objWebBrowser);
        // 	objWebBrowser.show();
        }


        this.fnReportPrint = function()
        {
        	console.log("----- REQ_ID : " + this.dsFormInfo.getColumn(0, "REQ_ID"));
        	console.log("REPORT_NM>" , this.dsFormInfo.getColumn(0, 'REPORT_NM'));
        	var fileNm = this.dsFormInfo.getColumn(0, 'REPORT_NM');
        	//var fileNm = "IT_Work"; // 불러올 .jasper 파일명

        	// transaction
        // 	var sTranId = "report";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        //     var sService = "report/generate";            	// 서비스명
        //     var sInDs = "";                  				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        //     var sOutDs = "dsCond=dsCond";       			// 서버에서 수신할 데이타셋
        //     var sArg = "reqId="+encodeURIComponent(REQ_ID)+" file=IT_Work";            // 서버 @ParamVariable 인자와 맵핑됨
        // 	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	var pdfUrl = "http://localhost:8090/report/generate";
        	//pdfUrl += "?reqId="+encodeURIComponent(this.dsFormInfo.getColumn(0, 'REQ_ID'));
        	pdfUrl += "?reqId="+encodeURIComponent(this.dsFormInfo.getColumn(0, 'REQ_ID'));
        	pdfUrl += "&file="+encodeURIComponent(fileNm);

        	var pWebViewUrl = pdfUrl;
        	Ex.core.popup(	this,
        				'ReportViewer',
        				"test::ReportViewer.xfdl",             		// <--- 팝업창 오픈 Url
        				{ title:Ex.core.word('REPORT') , pWebViewUrl:pWebViewUrl},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"
        	  );

        // 	var objWebBrowser = new WebBrowser("ReportViewer", "0%", 20, "70%", "90%", null, null);
        // 	objWebBrowser.set_url(pdfUrl);
        // 	this.addChild("ReportViewer", objWebBrowser);
        // 	trace("----생성된 웹브라우저-----" , objWebBrowser);
        // 	objWebBrowser.show();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTest.form.btnReport.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTest.form.edtAssetNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divTest.form.edtAssetNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divTest.form.btnReport00.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ReportTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
