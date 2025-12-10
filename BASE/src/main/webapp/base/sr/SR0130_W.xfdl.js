(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0130_W");
            this.set_titletext("내처리함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReqMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCd", this);
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

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20","50",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd","Static06:0.00","13","85","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0.00","12","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd00","cboSvcCd:30.00","13","80","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcCd00:0","12","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","cboSvcDtlCd:30.00","13","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcReqTmplatNm:2.00","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","edtReqTmplatNm:30.00","13","78","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("요청서제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:7.00","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdReqMt","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsReqMt");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"170\"/><Column size=\"300\"/><Column size=\"80\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"0\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\"/><Cell col=\"1\" text=\"진행단계\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"업무분류(대)\"/><Cell col=\"4\" text=\"업무분류(중)\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"업무상세\"/><Cell col=\"7\" text=\"요청서 제목\"/><Cell col=\"8\" text=\"요청자\"/><Cell col=\"9\" text=\"요청일자\"/><Cell col=\"10\" text=\"합의완료일\"/><Cell col=\"11\" text=\"희망완료일자\"/><Cell col=\"12\" text=\"담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:REQ_ID\" cssclass=\"expr:DUE_CHK == -1 ? &quot;grdBCell_WF_boldP_danger&quot; : DUE_CHK == 0 ? &quot;grdBCell_WF_boldP_info&quot; : &quot;grdBCell_WF_boldP&quot;\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:WF_PROC_NM\"/><Cell col=\"2\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"3\" text=\"bind:R_UPMU_NM1\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:R_UPMU_NM2\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:WF_FUNC_NM\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:R_UPMU_NM3\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:REQ_USER_NM\"/><Cell col=\"9\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_DATE\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"10\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:AGREE_COMP_EDT\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"11\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_WISH_DT_NM\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:CGER_NM\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"100\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"220\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\"/><Cell col=\"1\" text=\"긴급여부\"/><Cell col=\"2\" text=\"진행단계\"/><Cell col=\"3\" text=\"진행상태\"/><Cell col=\"4\" text=\"요청분류(대)\"/><Cell col=\"5\" text=\"요청분류(중)\"/><Cell col=\"6\" text=\"구분\"/><Cell col=\"7\" text=\"요청서명\"/><Cell col=\"8\" text=\"요청서 제목\"/><Cell col=\"9\" text=\"요청자\"/><Cell col=\"10\" text=\"요청일자\"/><Cell col=\"11\" text=\"합의완료일\"/><Cell col=\"12\" text=\"희망완료일자\"/><Cell col=\"13\" text=\"담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:REQ_ID\" cssclass=\"expr:DUE_YN == &apos;Y&apos; ? &quot;grdBCell_WF_info&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:REQ_EM_YN\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:WF_PROC_NM\"/><Cell col=\"3\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"4\" text=\"bind:SVC_CD_NM1\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:SVC_CD_NM2\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:WF_FUNC_NM\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:REQ_TMPLAT_NM\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:REQ_USER_NM\"/><Cell col=\"10\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_DATE\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"11\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:AGREE_COMP_EDT\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"12\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_WISH_DT_NM\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"13\" displaytype=\"text\" text=\"bind:CGER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","70","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("나의 처리함");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcListCnt","Static21:5.00","70","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_countDataset("dsReqMt");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelay","344","70","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("납기지연");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","320.00","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("●");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeadline","230.00","70","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("납기임박");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","206.00","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("●");
            obj.set_textAlign("center");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearchArea.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.edtReqTmplatNm","value","dsCond","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtReqTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboSvcDtlCd","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0130_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0130_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR0130_W
        * 화면(명)	︰ 내처리함
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
        this.dsTemp;
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


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.fnGetCmmCd();
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(this.dsCond.rowposition, "REQ_TMPLAT_NM", "");
        	this.dsCond.setColumn(this.dsCond.rowposition, "USE_YN", "Y");
        }

        // 조회
        this.fnSearch = function(gubun)
        {
        	if( Ex.isEmpty(gubun) )
        	{
        		this.dsCond.setColumn(0, "DEADLINE", "");
        		this.dsCond.setColumn(0, "DELAY", "");
        	}
        	else if( gubun == "1" )	//납기임박
        	{
        		this.dsCond.setColumn(0, "DEADLINE", "Y");
        		this.dsCond.setColumn(0, "DELAY", "");
        	}
        	else if( gubun == "2" )	//납기지연
        	{
        		this.dsCond.setColumn(0, "DEADLINE", "");
        		this.dsCond.setColumn(0, "DELAY", "Y");
        	}


        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0130W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqMt=dsData";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "wfInfoCompleted" :
        			this.dsWfProc = this.wffnGetOptDsByWfProcCd();

        			var dsTemp = new Dataset();
        			var oParam = {
        				wfProcCd : ''
        				,optStr: 'NO'
        				,filter	: ''
        				,objDs	: dsTemp
        			}
        			this.wffnGetCger(oParam);

        			var dsRow = this.dsReqMt.rowposition;
        			var reqId = this.dsReqMt.getColumn(dsRow, "REQ_ID");
        			var reqNm = this.dsReqMt.getColumn(dsRow, "REQ_TMPLAT_NM");
        			var reqTmplatId = this.dsReqMt.getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsReqMt.getColumn(dsRow, "REQ_TMPLAT_VER");
        			var srInfoUrl = this.dsReqMt.getColumn(dsRow, "SR_INFO_URL");
        			var reqUrl = this.dsReqMt.getColumn(dsRow, "REQ_URL");
        			var attachUseYn = this.dsReqMt.getColumn(dsRow, "ATTACH_USE_YN");

        			if(reqTmplatId == "WFT240009" || reqTmplatId == "WFT240034")	scrnPath = "sr::SR0010_W.xfdl";
        			else															scrnPath = "sr::SR0000_W.xfdl";

        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"srReqWritePop",									// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				//"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
        				scrnPath,
        				{
        					title : Ex.core.word("요청서"),
        					pWF_FUNC_CD	: "WF_FUNC_04",	//담당자
        					pREQ_ID : reqId,
        					pREQ_TMPLAT_ID : reqTmplatId,
        					pREQ_TMPLAT_VER : reqTmplatVer,
        					pSR_INFO_URL : srInfoUrl,
        					pSR_REQ_URL : reqUrl,
        					pATTACH_USE_YN : attachUseYn,
        					pDsWfProc : this.dsWfProc,
        					pDsdWfCger : dsTemp,
        					pEditYn : true
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize,useCloseButton=false"
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0130_W this.fnPopupAfter() pID=" + pID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "srReqWritePop" :
        			if(varValue.indexOf("Dataset id=\"dsRtn\"") > -1)
        			{
        				var dsTemp = new Dataset();
        				var oParam = {
        					wfProcCd : ''
        					,optStr: 'NO'
        					,filter	: ''
        					,objDs	: dsTemp
        				}
        				this.wffnGetCger(oParam);

        				this.dsRtn.loadXML(varValue);

        				var reqId = this.dsRtn.getColumn(0, "REQ_ID");
        				var reqNm = this.dsReqMt.getColumn(this.dsReqMt.rowposition, "REQ_TMPLAT_NM");
        				var reqTmplatId = this.dsReqMt.getColumn(this.dsReqMt.rowposition, "REQ_TMPLAT_ID");
        				var reqTmplatVer = this.dsReqMt.getColumn(this.dsReqMt.rowposition, "REQ_TMPLAT_VER");
        				var srInfoUrl = this.dsReqMt.getColumn(this.dsReqMt.rowposition, "SR_INFO_URL");
        				var attachUseYn = this.dsReqMt.getColumn(this.dsReqMt.rowposition, "ATTACH_USE_YN");

        				//trace(SR0130_W this.fnPopupAfter() this.dsWfProc.saveXML());

        				Ex.core.popup(
        					this,											// <--- 팝업 실행 스코프
        					"srReqViewPop",									// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        					"sr::SR0150_W.xfdl",							// <--- 팝업창 오픈 Url
        					{
        						title : Ex.core.word("요청서"),
        						pREQ_ID : reqId,
        						pREQ_TMPLAT_ID : reqTmplatId,
        						pREQ_TMPLAT_VER : reqTmplatVer,
        						pSR_INFO_URL : srInfoUrl,
        						pATTACH_USE_YN : attachUseYn,
        						pDsWfProc : this.dsWfProc,
        						pDsdWfCger : dsTemp,
        						pEditYn : false
        					},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        				);
        				this.fnSearch();
        			}
        			else if(varValue == "Y") this.fnSearch();
        			break;

        		case "srReqViewPop" :
        			if(varValue.indexOf("Dataset id=\"dsRtn\"") > -1)
        			{
        				var dsTemp = new Dataset();
        				var oParam = {
        					wfProcCd : ''
        					,optStr: 'NO'
        					,filter	: ''
        					,objDs	: dsTemp
        				}
        				this.wffnGetCger(oParam);

        				this.dsRtn.loadXML(varValue);

        				var reqId = this.dsRtn.getColumn(0, "REQ_ID");
        				var reqNm = this.dsRtn.getColumn(0, "REQ_NM");
        				var reqTmplatId = this.dsRtn.getColumn(0, "REQ_TMPLAT_ID");
        				var reqTmplatVer = this.dsRtn.getColumn(0, "REQ_TMPLAT_VER");
        				var srInfoUrl = this.dsRtn.getColumn(0, "SR_INFO_URL");
        				var attachUseYn = this.dsRtn.getColumn(0, "ATTACH_USE_YN");

        				Ex.core.popup(
        					this,					// <--- 팝업 실행 스코프
        					"srReqWritePop",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        					"sr::SR0000_W.xfdl",	// <--- 팝업창 오픈 Url
        					{
        						title : Ex.core.word("요청서"),
        						pWF_FUNC_CD	: "WF_FUNC_04",	//담당자
        						pREQ_ID : reqId,
        						pREQ_TMPLAT_ID : reqTmplatId,
        						pREQ_TMPLAT_VER : reqTmplatVer,
        						pSR_INFO_URL : srInfoUrl,
        						pATTACH_USE_YN : attachUseYn,
        						pDsWfProc : this.dsWfProc,
        						pDsdWfCger : dsTemp,
        						pEditYn : true
        					},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize,useCloseButton=false"
        				);
        				this.fnSearch();
        			}
        			else if(varValue == "Y") this.fnSearch();
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.grdReqMt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["SVC_CD", 		"YN_CD",		"REQ_STAT_CD"]			// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",	"CMM_CD",		"WORKFLOW_CD"]			// 조회할 코드의 업무구분
        		,optStr	: ["ALL", 			"ALL",			"NO"]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", 			"Y",			"Y"]				// 사용여부
        		,filter	: ["", 				"",				""]					// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsYnCd,	this.dsReqStatCd]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));
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

        		case "btnDeadline" :
        		   this.fnSearch("1");	//납기임박
        		   break;

        		case "btnDelay" :
        		   this.fnSearch("2");	//납기지연
        		   break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdReqMt],
           				Sheet	: ['처리함 목록'],
           				FileNm	: ["처리함 목록"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.dsReqMt_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.div_search_cboSvcCd_onitemchanged = function(obj,e)
        {
        	this.dsSvcDtlCd.clearData();

        	var upCmmCd = this.dsCond.getColumn(this.dsCond.rowposition, 'SVC_CD')||'';
        	if( !Ex.isEmpty(upCmmCd) ) {
        		var oParam = {
        			upCmmCd : [upCmmCd]
        			,codeDiv: ['WORKFLOW_CD']
        			,optStr	: ['ALL']
        			,useYn	: ['Y']
        			,filter	: ['']
        			,objDs	: [this.dsSvcDtlCd]
        		}
        		Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        	}
        	else {
        		var rowpos = this.dsSvcDtlCd.addRow();
        		this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        		this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));
        	}

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SVC_DTL_CD', null);
        };

        this.grdReqMt_oncellclick = function(obj,e)
        {
        	if(e.row > -1 && e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        	{
        		var dsRow = obj.getDatasetRow(e.row);
        		var reqTmplatId = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        		var reqId = obj.getBindDataset().getColumn(dsRow, "REQ_ID");
        		var svcCd = obj.getBindDataset().getColumn(dsRow, "SVC_CD");
        		var reqTmplatVer = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.stcSvcCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.div_search_cboSvcCd_onitemchanged,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.stcSvcCd00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTitle.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTitle.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdReqMt.addEventHandler("oncellclick",this.grdReqMt_oncellclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDelay.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDeadline.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsReqMt.addEventHandler("oncolumnchanged",this.dsReqMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("SR0130_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
