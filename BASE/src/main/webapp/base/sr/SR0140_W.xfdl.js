(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0140_W");
            this.set_titletext("내결재함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReqMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsApprStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppv", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
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

            obj = new Static("stcSvcCd","Static06:0","14","80","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0","13","120","24",null,null,null,null,null,null,this.divSearchArea.form);
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

            obj = new Static("stcSvcCd00","cboSvcCd:30","14","80","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcCd00:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","cboSvcDtlCd:30.00","14","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcReqTmplatNm:2","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","edtReqTmplatNm:30","14","73","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("요청서제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:7.00","13","155","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdReqMt","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsReqMt");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"220\"/><Column size=\"300\"/><Column size=\"80\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"요청ID\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"긴급여부\"/><Cell col=\"5\" text=\"진행단계\"/><Cell col=\"6\" text=\"진행상태\"/><Cell col=\"7\" text=\"요청분류(대)\"/><Cell col=\"8\" text=\"요청분류(중)\"/><Cell col=\"9\" text=\"요청서명\"/><Cell col=\"10\" text=\"요청서 제목\"/><Cell col=\"11\" text=\"요청자\"/><Cell col=\"12\" text=\"요청일자\"/><Cell col=\"13\" text=\"희망완료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:REQ_ID\" cssclass=\"grdBCell_WF_boldP\"/><Cell col=\"3\" text=\"bind:APPR_STAT_CD\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsApprStatCd\"/><Cell col=\"4\" text=\"bind:REQ_EM_YN\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:WF_PROC_NM\"/><Cell col=\"6\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"7\" text=\"bind:SVC_CD_NM1\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:SVC_CD_NM2\" displaytype=\"text\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:REQ_TMPLAT_NM\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:REQ_USER_NM\"/><Cell col=\"12\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_DATE\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"13\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:REQ_WISH_DT_NM\" calendareditformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","70","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("나의 결재함");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcListCnt","Static21:5","70","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_countDataset("dsReqMt");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExecAppv",null,null,"100","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("일괄승인");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("SR0140_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0140_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0140_W
        * 화면(명)		︰ 내결재함
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
        }

        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0140W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqMt=dsData";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "SR0140W/save01";				// 서비스명
        	var sInDs = "dsCond=dsCond dsAppv=dsAppv:A";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsReqMt=dsData";					// 서버에서 수신할 데이타셋
        	var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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

        		case "save01" :
        			Ex.core.toast(this, "일괄승인 처리가 완료되었습니다.");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("this.fnPopupAfter() pID:" + pID + " varValue:" + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "srReqWritePop" :
        			if(varValue == 'Y')	this.fnSearch();
        			break;

        		case "srOpinionPop" :
        			this.dsRet.loadXML(varValue);
        			this.fnSaveProc();
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

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdBotBtn.form.btnExecAppv];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["SVC_CD", 		"YN_CD",		"APPR_STAT_CD",		"REQ_STAT_CD"]		// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",	"CMM_CD",		"WORKFLOW_CD",		"WORKFLOW_CD"]		// 조회할 코드의 업무구분
        		,optStr	: ["ALL", 			"ALL",			"NO",				"NO"]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", 			"Y",			"",					""]					// 사용여부
        		,filter	: ["", 				"",				"",					""]					// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsYnCd,	this.dsApprStatCd,	this.dsReqStatCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));
        }

        this.openRevOpinion = function(gubun)
        {
        	Ex.core.popup(
        		this,														// <--- 팝업 실행 스코프
        		"srOpinionPop",												// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"sr::SR0030_P01.xfdl",										// <--- 팝업창 오픈 Url
        		{
        			title : "일괄결재",
        			pIS_CONFIRM	: true,
        			pIS_OPIN_ESS : true,
        			pSAVE_GUBUN : gubun,
        			pOPINION : "승인 합니다."
        		},															// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=750,height=263,useCloseButton=false"					// <--- width/height/modeless(프레임 처리 옵션)
        	);
        };

        this.fnSaveProc = function()
        {
        	this.dsReqMt.set_enableevent(false);
        	this.dsReqMt.set_filterstr("CHK=='1'");

        	this.dsAppv.clearData();

        	for(var i = 0; i < this.dsReqMt.rowcount; i++)
        	{
        		var aRow = this.dsAppv.addRow();
        		this.dsAppv.setColumn(aRow, "REQ_ID",			this.dsReqMt.getColumn(i, "REQ_ID"));
        		this.dsAppv.setColumn(aRow, "SAVE_GUBUN",		this.dsReqMt.getColumn(i, "SAVE_GUBUN"));
        		this.dsAppv.setColumn(aRow, "SEQ",				this.dsReqMt.getColumn(i, "SEQ"));
        		this.dsAppv.setColumn(aRow, "WF_PROC_CD",		this.dsReqMt.getColumn(i, "WF_PROC_CD"));
        		this.dsAppv.setColumn(aRow, "MAP_WF_PROC_CD",	this.dsReqMt.getColumn(i, "MAP_WF_PROC_CD"));
        		this.dsAppv.setColumn(aRow, "REQ_STAT_CD",		this.dsReqMt.getColumn(i, "REQ_STAT_CD"));
        		this.dsAppv.setColumn(aRow,	"OPINION",			this.dsRet.getColumn(0,'OPINION'));
        	}
        	this.dsReqMt.set_filterstr("");
        	this.dsReqMt.set_enableevent(true);

        	//trace(this.dsAppv.saveXML());

        	this.fnSave();
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

        		case "btnExecAppv" :
        			var nCnt =this.dsReqMt.getCaseCount("CHK=='1'");
        			if(nCnt == 0)
        			{
        				var oParam = {id : "btn_popup_Appr", msg : "승인할 요청서가 선택되지 않았습니다."};
        				Ex.core.alert(this, oParam);
        				return;
        			}
        			else
        			{
        				this.openRevOpinion("APV");
        			}
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdReqMt],
           				Sheet	: ['요청서 목록'],
           				FileNm	: ["요청서 목록"],
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
        	if(e.row > -1)
        	{
        		if(e.col == obj.getBindCellIndex('body', 'REQ_ID'))	// 요청서 내용 보기
        		{
        			var dsRow = obj.getDatasetRow(e.row);
        			var reqTmplatId		= obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer	= obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
        			var reqId			= obj.getBindDataset().getColumn(dsRow, "REQ_ID");
        			var apprLvlSeq		= obj.getBindDataset().getColumn(dsRow, "APPR_LVL_SEQ");
        			var apprGrpSeq		= obj.getBindDataset().getColumn(dsRow, "APPR_GRP_SEQ");
        			var seq				= obj.getBindDataset().getColumn(dsRow, "SEQ");
        			var svcCd = obj.getBindDataset().getColumn(dsRow, "SVC_CD");

        			if(svcCd == "SRM")	popURL = "sr::SR0010_W.xfdl";
        			else				popURL = "sr::SR0000_W.xfdl";

        			Ex.core.popup(
        				this,									// <--- 팝업 실행 스코프
        				"srReqWritePop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				popURL,									// <--- 팝업창 오픈 Url
        				{
        					title			: "요청서",
        					pWF_FUNC_CD		: "WF_FUNC_01",
        					pREQ_ID			: reqId,
        					pApprLvlSeq		: apprLvlSeq,
        					pApprGrpSeq		: apprGrpSeq,
        					pSeq			: seq,
        					pREQ_TMPLAT_ID	: reqTmplatId,
        					pREQ_TMPLAT_VER : reqTmplatVer
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        		}
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
            this.divGrdBotBtn.form.btnExecAppv.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsReqMt.addEventHandler("oncolumnchanged",this.dsReqMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("SR0140_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
