(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0110_W");
            this.set_titletext("유형별요청서등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfReqTmplatMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqInfoTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static25","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20","50",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcSvcCd","Static06:0","14","86","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0","13","160","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cbo_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","cboSvcCd:30","14","73","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcReqTmplatNm:0","13","220","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcUseYn","edtReqTmplatNm:30","13","70","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","stcUseYn:0","13","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWfReqTeplatMt","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsWfReqTmplatMt");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"서비스유형\"/><Cell col=\"2\" text=\"요청분류\"/><Cell col=\"3\" text=\"요청서명\"/><Cell col=\"4\" text=\"워크플로우명\"/><Cell col=\"5\" text=\"작성요령\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" autosizecol=\"limitmin\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SVC_NM\" suppress=\"1\" combodataset=\"ds_sys_type\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" tooltiptext=\"bind:SVC_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SVC_DTL_NM\" suppress=\"2\" combodataset=\"ds_form_type\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" tooltiptext=\"bind:SVC_DTL_NM\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left;cursor:hand;\" cssclass=\"grdBCell_WF_event\" text=\"bind:REQ_TMPLAT_NM\" suppress=\"3\" tooltiptext=\"bind:REQ_TMPLAT_NM\" cursor=\"pointer\" color=\"#0a5dadff\" font=\"underline antialias 10 Malgun Gothic, 맑은 고딕\" textAlign=\"left\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:WF_NM\" tooltiptext=\"bind:WF_NM\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;color:#0a5dadff;color2:#0a5dadff;font:underline antialias 10 Malgun Gothic, 맑은 고딕;cursor:hand;selectcolor:#0a5dadff;selectfont:underline antialias 10 Malgun Gothic, 맑은 고딕;\" text=\"bind:REQ_DESC\" tooltiptext=\"bind:REQ_DESC\" textAlign=\"left\" verticalAlign=\"top\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","70","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("요청서양식");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","295","24","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcListCnt","Static21:-1","70","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_countDataset("dsWfReqTmplatMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edtReqTmplatNm","value","dsCond","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0110_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0110_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0110_W
        * 화면(명)		︰ 요청서 등록
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.dsWfProc;
        this.tempBtn	= false;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["REQ_INFO_TYPE_CD", "SVC_CD", "YN_CD"]			// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD", "WORKFLOW_CD", "CMM_CD"]			// 조회할 코드의 업무구분
        		,optStr	: ["ALL", "ALL", "ALL"]								// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", "Y", "Y"]									// 사용여부
        		,filter	: ["", "", ""]										// filterStr
        		,objDs	: [this.dsReqInfoTypeCd, this.dsSvcCd, this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, "SVC_CD", undefined);
        	this.dsCond.setColumn(this.dsCond.rowposition, "REQ_TMPLAT_NM", "");
        	this.dsCond.setColumn(this.dsCond.rowposition, "USE_YN", "Y");

        	this.fnSearch(); // 초기화 후 재조회
        }

        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "select01";						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0110W/select01";				// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfReqTmplatMt=dsWfReqTmplatMt";	// 서버에서 수신할 데이타셋
            var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	//trace("SR0110_W this.fnCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode);

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
        		case "wfInfoCompleted" :
        			this.dsWfProc = this.wffnGetOptDsByWfProcCd();

        			var dsRow = this.dsWfReqTmplatMt.rowposition;
        			var reqTmplatId = this.dsWfReqTmplatMt.getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsWfReqTmplatMt.getColumn(dsRow, "REQ_TMPLAT_VER");
        			//trace("SR0110_W this.fnCallback() dsRow : " + dsRow + " reqTmplatId : " + reqTmplatId + " srInfoUrl : " + srInfoUrl);

        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"srReqWritePop",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0000_W.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					pWF_FUNC_CD	: "WF_FUNC_00",	//등록
        					pREQ_ID : "",
        					pREQ_TMPLAT_ID : reqTmplatId
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize,useCloseButton=false"
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0110_W this.fnPopupAfter() pID=" + pID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;

        	switch (pID)
        	{
        		case "" :
        			break;
        	}

        	if(varValue == "batchSave")
        	{	// 요청서일괄등록
        		var param = {
        			  id 	: "batchSave"
                	, msg	: "등록되었습니다."			//메시지 내용
                	, arrparam : ['']				//메시지의 변수에 들어갈 실제값
                	, msgtype : "S"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        	} else if (varValue == "Y"){ // IT작업요청
        		var menuRow = nexacro.getApplication().gdsMenu.findRowExpr("SCREEN_ID=='SR0120_W' && MENU_PARAM_CD=='12'");
        		var menuId 	= nexacro.getApplication().gdsMenu.getColumn(menuRow, 'MENU_ID');
             	Ex.core.openLink(this, menuId, {});
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	//trace("SR0110_W this.fnMsgAfter() mID=" + mID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;

        	switch (mID)
        	{
        		case "batchSave" :
        			var menuRow = nexacro.getApplication().gdsMenu.findRowExpr("SCREEN_ID=='SR0120_W' && MENU_PARAM_CD=='12'");
        			var menuId 	= nexacro.getApplication().gdsMenu.getColumn(menuRow, 'MENU_ID');
        			Ex.core.openLink(this, menuId, {});
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
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
        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdWfReqTeplatMt],
           				Sheet	: ['요청서 목록'],
           				FileNm	: ["grdWfReqTeplatMt"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}
        }

        this.gridOnCellClick = function(obj,e)
        {
        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_TMPLAT_NM"))
        	{
        		var dsRow = obj.getDatasetRow(e.row);
        		var reqTmplatId = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        		var reqTmplatVer = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
        		this.wffnSearchWfTmplat(reqTmplatId, reqTmplatVer);
        	}
        };

        this.edt_formNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.stcSvcCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.edtReqTmplatNm.addEventHandler("onkeyup",this.edt_formNm_onkeyup,this);
            this.grdWfReqTeplatMt.addEventHandler("oncellclick",this.gridOnCellClick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0110_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
