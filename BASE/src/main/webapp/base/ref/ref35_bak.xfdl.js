(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref34");
            this.set_titletext("JASPER REPORT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParams", this);
            obj._setContents("<ColumnInfo><Column id=\"PARAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRAM_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSourceColList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSourceDataList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTargetColList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSource","10.00","10",null,"277","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSource");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","33",null,"53","0",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stcBg01","0.00","0",null,"34","0",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stcUserId","0","33","125","53",null,null,null,null,null,null,this.divSource.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("데이터 조회 쿼리");
            this.divSource.addChild(obj.name, obj);

            obj = new TextArea("txaExecQuery","stcUserId:5.00","38",null,"43","5",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("0");
            this.divSource.addChild(obj.name, obj);

            obj = new Div("divConn","0","0",null,"34","0",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("4");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stc00_00","66.66%","0","115","34",null,null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("1");
            obj.set_text("조회 TABLE");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Combo("cboTableList","stc00_00:5","5",null,"24","5",null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","33.33%","0","115","34",null,null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("3");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiv","stc00_00_00:5","5",null,"24","stc00_00:5",null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSource_form_divConn_form_cboSearchDiv_innerdataset = new nexacro.NormalDataset("divSource_form_divConn_form_cboSearchDiv_innerdataset", obj);
            divSource_form_divConn_form_cboSearchDiv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">테이블</Col></Row><Row><Col id=\"codecolumn\">Q</Col><Col id=\"datacolumn\">쿼리</Col></Row></Rows>");
            obj.set_innerdataset(divSource_form_divConn_form_cboSearchDiv_innerdataset);
            obj.set_value("T");
            obj.set_index("0");
            obj.set_text("테이블");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Static("stc00","0","0","125","34",null,null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("4");
            obj.set_text("Source DataSource");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Combo("cboSourceConn","stc00:5","5",null,"24","stc00_00_00:5",null,null,null,null,null,this.divSource.form.divConn.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSource_form_divConn_form_cboSourceConn_innerdataset = new nexacro.NormalDataset("divSource_form_divConn_form_cboSourceConn_innerdataset", obj);
            divSource_form_divConn_form_cboSourceConn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NITSM</Col><Col id=\"datacolumn\">NITSM</Col></Row><Row><Col id=\"codecolumn\">ITSM</Col><Col id=\"datacolumn\">ITSM</Col></Row></Rows>");
            obj.set_innerdataset(divSource_form_divConn_form_cboSourceConn_innerdataset);
            obj.set_text("cbo00");
            this.divSource.form.divConn.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","stcBg01_00:0",null,"10","-20",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("5");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00","0","96","200","24",null,null,null,null,null,null,this.divSource.form);
            obj.set_taborder("7");
            obj.set_text("조회 컬럼 선택");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","Static00_01:24",null,"10","-20",null,null,null,null,null,this.divSource.form);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSource.addChild(obj.name, obj);

            obj = new Grid("grdSourceList00","0","130","200",null,null,"0",null,null,null,null,this.divSource.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsSourceColList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"컬럼명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:COL_NM\"/></Band></Format></Formats>");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","205.00","130",null,null,"0","0",null,null,null,null,this.divSource.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSource.addChild(obj.name, obj);

            obj = new Static("stcUserId00","205.00","130","125",null,null,"0",null,null,null,null,this.divSource.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("조회 컬럼");
            this.divSource.addChild(obj.name, obj);

            obj = new TextArea("txaSourceColList","335.00","135",null,null,"5","5",null,null,null,null,this.divSource.form);
            obj.set_taborder("11");
            this.divSource.addChild(obj.name, obj);

            obj = new Div("divResult","10",null,null,"24","10","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00","0","0","200","24",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("처리 결과");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"0","80","24","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("실행");
            this.divResult.addChild(obj.name, obj);

            obj = new Edit("edt00","stcInfoTitle00:5.00","0",null,"24","btnPrint:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divResult.addChild(obj.name, obj);

            obj = new Div("divTarget","10",null,null,"225","10","34",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","34",null,"10","-20",null,null,null,null,null,this.divTarget.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divTarget.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00","0","Static00_01:5","200","24",null,null,null,null,null,null,this.divTarget.form);
            obj.set_taborder("3");
            obj.set_text("INSERT 컬럼 선택");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divTarget.addChild(obj.name, obj);

            obj = new Grid("grdTargetList","0","Static00_01:34","415",null,null,"0",null,null,null,null,this.divTarget.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsSourceColList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"고정값 여부\"/><Cell col=\"4\" text=\"고정값\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:COL_NM\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FIX_VAL_YN\"/><Cell col=\"4\" expr=\"FIX_VAL_YN == &apos;Y&apos; ? &apos;text&quot; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.divTarget.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","grdTargetList:5","Static00_01:34",null,null,"0","0",null,null,null,null,this.divTarget.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.divTarget.addChild(obj.name, obj);

            obj = new Static("stcBg01","0.00","0",null,"34","0",null,null,null,null,null,this.divTarget.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divTarget.addChild(obj.name, obj);

            obj = new Div("divConn","0","0",null,"34","0",null,null,null,null,null,this.divTarget.form);
            obj.set_taborder("1");
            this.divTarget.addChild(obj.name, obj);

            obj = new Static("stc00_00","33.33%","0","108","34",null,null,null,null,null,null,this.divTarget.form.divConn.form);
            obj.set_taborder("1");
            obj.set_text("TABLE");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divTarget.form.divConn.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","66.66%","0","115","34",null,null,null,null,null,null,this.divTarget.form.divConn.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.divTarget.form.divConn.addChild(obj.name, obj);

            obj = new Combo("cboTableList","stc00_00:5","5",null,"24","stc00_00_00:5",null,null,null,null,null,this.divTarget.form.divConn.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divTarget.form.divConn.addChild(obj.name, obj);

            obj = new Static("stc00","0","0","125","34",null,null,null,null,null,null,this.divTarget.form.divConn.form);
            obj.set_taborder("2");
            obj.set_text("Target DataSource");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divTarget.form.divConn.addChild(obj.name, obj);

            obj = new Combo("cboSourceConn","stc00:5.00","5",null,"24","stc00_00:5",null,null,null,null,null,this.divTarget.form.divConn.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divTarget_form_divConn_form_cboSourceConn_innerdataset = new nexacro.NormalDataset("divTarget_form_divConn_form_cboSourceConn_innerdataset", obj);
            divTarget_form_divConn_form_cboSourceConn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NITSM</Col><Col id=\"datacolumn\">NITSM</Col></Row><Row><Col id=\"codecolumn\">ITSM</Col><Col id=\"datacolumn\">ITSM</Col></Row></Rows>");
            obj.set_innerdataset(divTarget_form_divConn_form_cboSourceConn_innerdataset);
            obj.set_text("cbo00");
            this.divTarget.form.divConn.addChild(obj.name, obj);

            obj = new Static("stcUserId","grdTargetList:5","Static00_01:34","125",null,null,"0",null,null,null,null,this.divTarget.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("INSERT 컬럼");
            this.divTarget.addChild(obj.name, obj);

            obj = new TextArea("txaTargetColList","stcUserId:5","Static00_01:39",null,null,"5","5",null,null,null,null,this.divTarget.form);
            obj.set_taborder("6");
            this.divTarget.addChild(obj.name, obj);

            obj = new Div("div00","10","divSource:10",null,"133","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"0","80","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","225","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("조회 데이터(미리보기 100건)");
            obj.set_cssclass("sta_WF_gridTitle");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcInfoTitle:10","0","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdSourceList","0","34",null,null,"0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsSourceDataList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSource.form.divConn.form
            obj = new Layout("default","",0,0,this.divSource.form.divConn.form,function(p){});
            this.divSource.form.divConn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSource.form
            obj = new Layout("default","",0,0,this.divSource.form,function(p){});
            this.divSource.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTarget.form.divConn.form
            obj = new Layout("default","",0,0,this.divTarget.form.divConn.form,function(p){});
            this.divTarget.form.divConn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTarget.form
            obj = new Layout("default","",0,0,this.divTarget.form,function(p){});
            this.divTarget.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref35_bak.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 팝업 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        		case "checkViewerByDB" : // 서비스 ID
        			//this.webJasperRptViewer.url(nexacro.getEnvironment().services["svc_url"].url + "jasperReport/callViewerPageByDB");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*
        	팝업 처리를 위한 API : Ex.core.popup

        	1. modal / modeless(open창)을 지원한다.
        	2. 팝업창은 this.fnPopupAfter 라는 약속된 콜백함수를 사용한다.
        	   창닫기시 후처리를 위한 용도로 사용한다.

        	   this.fnPopupAfter = function( pID, varValue)
        	   콜백함수 option
        	   - pID : 팝업호출시 지정한 팝업창ID
        	   - varValue : 팝업창 닫을때 지정한 반환값(기본적으로 string만 지원한다.)
        	   - 팝업창 : ref::ref01_01.xfdl 소스 참조


        	2. 팝업처리를 위한 option
        		Ex.core.popup( scope, pID, url, pOption, fOption)

        		scope	: 팝업 실행 위치 , this
        		pID		: 팝업창 ID, 팝업콜백에세서 반환받을 pID
        		url		: 팝업창 Url
        		pOption	: 팝업창으로 넘길 파라미터
        		fOption	: 팝업창처리를 위한 프레임 옵션

        	*자세한 처리는 스크립트를 참조
        */

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnPrint" :
        			if( Ex.isEmpty(this.edtRptFileNm.value) )
        			{
        				var param = {id : "ERROR", msg : "출력할 보고서 파일명이 입력되지 않았습니다."};
        				Ex.core.error(this, param);
        				return;
        			}
        			Ex.util.callJasperReport(this, this.webJasperRptViewer, this.edtDataSourceNm.value, this.edtRptFileNm.value, this.dsParams);
        			break;

        		case "btnPopup" :
        			Ex.core.popup(
        				this,								// <--- 팝업 실행 스코프
        				"jasperRptPop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::JasperReportViewerPop.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					pDbConn 	: this.edtDataSourceNm.value,
        					pFileNm 	: this.edtRptFileNm.value,
        					pDsParam	: this.dsParams
        				},									// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"							// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        };

        this.fnReportPrint = function(dbConnNm, rptFileNm)
        {
        	this.dsParams.clearData();
        	var aRow;

        	if( Ex.isEmpty(dbConnNm) )
        	{
        		var param = {id : "ERROR", msg : "출력할 보고서 파일명이 지정되지 않았습니다."};
        		Ex.core.error(this, param);
        		return;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divResult.form.btnPrint.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div00.form.btnPrint.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref35_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
