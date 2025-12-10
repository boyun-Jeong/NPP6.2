(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0120_W");
            this.set_titletext("결재이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MYREQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_HIST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfProcHist", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"WF_HIST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GBN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_JBC_JNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_JBC_JNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEJIC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOBL_CONFIRM_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOBL_APP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","Static00:0","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결재이력");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","stcTreeTitle:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWfProcHist","0","Static00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsWfProcHist");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_useFilter("true");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"100\" band=\"right\"/><Column size=\"60\" band=\"right\"/><Column size=\"130\" band=\"right\"/><Column size=\"70\" band=\"right\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"요청ID\"/><Cell col=\"3\" text=\"요청분류\"/><Cell col=\"4\" text=\"요청서명\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"처리자\"/><Cell col=\"7\" text=\"나의&#13;&#10;결재여부\"/><Cell col=\"8\" text=\"처리일시\"/><Cell col=\"9\" text=\"처리결과\"/><Cell col=\"10\" text=\"대결자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSvcCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:SVC_CD\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:PROC_NUMBER\" cssclass=\"grdBCell_WF_boldP\"/><Cell col=\"3\" text=\"bind:SVC_CD_NM\"/><Cell col=\"4\" text=\"bind:REQ_TMPLAT_NM\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:SRM_USER_NM\"/><Cell col=\"7\" text=\"expr:PRC_DIV==&apos;M&apos;||PRC_DIV==&apos;D&apos; ? &apos;○&apos; : &apos;&apos;\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:REG_STIME\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:APPR_STAT_CD\" combodataset=\"dsApprStatCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:ORG_USER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","Static00:0","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWfProcHist");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20","50",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","Static06:0.00","13","50","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:0","13","200","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edtReqTitle:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","Static00_00_00:0.00","14","60","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("요청ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtProcNumber","stcReqTmplatNm:0.00","13","100","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space,dot,comma,sign,symbol");
            obj.set_inputmode("upper");
            obj.set_inputtype("alpha,number");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","edtProcNumber:0.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd","Static00_00_00_00:0.00","13","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0.00","13","135","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","cboSvcCd:0.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqStatCd","Static00_00_00_00_00:0","13","62","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("처리기간");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","stcReqStatCd:10.00","13","135","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validation("처리기간;NULL");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","calBeginDate:0.00","13","18","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static01_00:0.00","13","135","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_validation("처리기간;NULL");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","calEndDate:0.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqUsertNm00","Static00_00_00_00_00_00:0.00","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_text("확인대상");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkConf","stcReqUsertNm00:0.00","13","24","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"Static00:0","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);
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
            obj = new BindItem("item0","divSearchArea.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtProcNumber","value","dsCond","PROC_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtReqTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboSvcDtlCd","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.stcReqUsertNm","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.edtLMNM","value","dsCond","PROC_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.edtReqUserNm","value","dsCond","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.rdoEM","value","dsCond","REQ_EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.cboReqStatCd","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearchArea.form.calBeginDate","value","dsCond","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearchArea.form.calEndDate","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearchArea.form.cboDateTerm","value","dsCond","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearchArea.form.stcReqUsertNm00","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearchArea.form.chkConf","value","dsCond","MYREQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0142_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0142_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0142_W
        * 화면(명)		︰ 결재이력조회
        * 메뉴(경로)		︰ MY 포털 > 나의 업무(처리) > 결재이력조회
        * 화면 설명		︰
        * 작성자			︰ WEMB
        * 작성일			︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2024.08.21	WEMB		최초작성
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
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -3), "yyyyMMdd");

        	this.dsCond.setColumn(0, "START_DATE",	fromDt);
        	this.dsCond.setColumn(0, "END_DATE",	Ex.util.today());

        }

        // 조회
        this.fnSearch = function()
        {

        	if(Ex.isEmpty(this.dsCond.getColumn(0, "START_DATE")) || Ex.isEmpty(this.dsCond.getColumn(0, "END_DATE"))){
        		var param = {id : "pAlertDate", msg : "처리기간을 확인해주시오."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	if(this.dsCond.getColumn(0, "START_DATE") > this.dsCond.getColumn(0, "END_DATE")){
        		var param = {id : "pAlertDate", msg : "처리기간을 확인해주시오."};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0142W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfProcHist=dsData";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	var sTranId = "save01";
        	var sService = "SR0143W/save01";
        	var sInDs = " dsCond=dsCond dsWfProcHist=dsWfProcHist:U";
        	var sOutDs = "dsWfProcHist=dsWfProcHist";
        	var sArg = "";
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
        		case "select01" :
        //			this.fnSetCount();
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			var oParam = {id : "alertSaveI", msg : "10004", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			break;

        		case "wfInfoCompleted" :
        			this.dsWfProc = this.wffnGetOptDsByWfProcCd();

        			var dsTemp = new Dataset;
        			var oParam = {
        				wfProcCd : ''
        				,optStr: 'NO'
        				,filter	: ''
        				,objDs	: dsTemp
        			}
        			this.wffnGetCger(oParam);

        			var dsRow = this.dsWfProcHist.rowposition;
        			var reqId = this.dsWfProcHist.getColumn(dsRow, "PROC_NUMBER");
        			var reqNm = this.dsWfProcHist.getColumn(dsRow, "REQ_TMPLAT_NM");
        			var reqTmplatId = this.dsWfProcHist.getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsWfProcHist.getColumn(dsRow, "REQ_TMPLAT_VER");
        			//var srInfoUrl = this.dsWfProcHist.getColumn(dsRow, "SR_INFO_URL");
        			//var reqUrl = this.dsWfProcHist.getColumn(dsRow, "REQ_URL");
        			//var attachUseYn = this.dsWfProcHist.getColumn(dsRow, "ATTACH_USE_YN");

        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"srReqWritePop",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
        				{
        					title : Ex.core.word("요청서"),
        					pWF_FUNC_CD	: "WF_FUNC_00",	//등록
        					pREQ_ID : reqId,
        					pREQ_TMPLAT_ID : reqTmplatId,
        					pREQ_TMPLAT_VER : reqTmplatVer
        					//pSR_INFO_URL : srInfoUrl,
        					//pATTACH_USE_YN : attachUseYn
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;
        	switch(mID)
        	{
        		case "selfConfirm" :
        		this.dsWfProcHist.setColumn(this.dsCond.getColumn(0,"ROW_NUM"), "ROWFLAG","U");
        		this.fnSave();
        		break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	this.fnSearchReset();	// 검색조건 초기화

        	this.fnSearch();		// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["SVC_CD", 		"APPR_STAT_CD",		"WF_PROC_CD"]			// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",	"WORKFLOW_CD",		"WORKFLOW_CD"]			// 조회할 코드의 업무구분
        		,optStr	: ["ALL", 			"",					"ALL"]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", 			"Y",				"Y"]				// 사용여부
        		,filter	: ["", 				"",					""]					// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsApprStatCd,	this.dsWfProcCd]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', '- 전체 -');
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	trace(obj.name);
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
           				Grid	: [this.grdWfProcHist],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}
        }

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row > - 1 )
        	{
        		var dsRow = obj.getDatasetRow(e.row);

        		var reqTmplatId = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        		var reqTmplatVer = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
        		var reqId = obj.getBindDataset().getColumn(dsRow, "PROC_NUMBER");

        		if(e.cell == obj.getBindCellIndex("body", "PROC_NUMBER"))
        		{
        			this.wffnSearchWfTmplat(reqTmplatId, reqTmplatVer, reqId);
        		}
        		else if(e.cell == obj.getBindCellIndex("body", "DIV_NM"))
        		{
        			if (obj.getBindDataset().getColumn(dsRow, "DIV_NM") == "본인확인")
        			{
        				this.dsCond.setColumn(0, "ROW_NUM",dsRow);
        				var param = {
        					id : "selfConfirm"
        				  , msg : "본인확인 처리하시겠습니까?"
        				  , arrparam : ['']
        				  , msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        		}
        	}
        };



        this.chkOnChanged = function(obj,e)
        {
        	this.fnSearch();
        };
        this.fnCommOnkeyup = function(obj,e)
        {
        		if(e.keycode == 13)
        	{
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdWfProcHist.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divSearchArea.form.stcReqTitle.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTitle.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtProcNumber.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcSvcCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.div_search_cboSvcCd_onitemchanged,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.stcReqStatCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.calBeginDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.calEndDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqUsertNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.chkConf.addEventHandler("onchanged",this.chkOnChanged,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0142_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
