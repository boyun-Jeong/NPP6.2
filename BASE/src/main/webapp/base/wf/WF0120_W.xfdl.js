(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_W");
            this.set_titletext("요청서관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_VER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">WF_PROC_1010</Col><Col id=\"CMM_CD_NM\">등록</Col></Row><Row><Col id=\"CMM_CD\">WF_PROC_2010</Col><Col id=\"CMM_CD_NM\">접수1차</Col></Row><Row><Col id=\"CMM_CD\">WF_PROC_3010</Col><Col id=\"CMM_CD_NM\">작업계획등록</Col></Row><Row><Col id=\"CMM_CD\">WF_PROC_3020</Col><Col id=\"CMM_CD_NM\">작업등록</Col></Row><Row><Col id=\"CMM_CD\">WF_PROC_9010</Col><Col id=\"CMM_CD_NM\">만족도조사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCdGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqInfoTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvc","20","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("서비스");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvc:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSvcCd");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcDtl","cboSvcCd:30","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcDtl:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcWfId","cboSvcDtlCd:30","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("워크플로우");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboWfId","stcWfId:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_codecolumn("WF_ID");
            obj.set_datacolumn("WF_NM");
            obj.set_innerdataset("dsWfMt");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcUseYn","cboWfId:30","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","stcUseYn:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTmplatNm","cboUseYn:30","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("요청서양식명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtTmplatNm","stcTmplatNm:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdWfReqTmplatMt","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsWfReqTmplatMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"요청서양식ID\"/><Cell col=\"3\" text=\"요청서&#13;&#10;양식버전\"/><Cell col=\"4\" text=\"요청서양식명\"/><Cell col=\"5\" text=\"서비스유형\"/><Cell col=\"6\" text=\"서비스상세유형\"/><Cell col=\"7\" text=\"워크플로우\"/><Cell col=\"8\" text=\"기본정보타입\"/><Cell col=\"9\" text=\"요청서 URL\"/><Cell col=\"10\" text=\"사용&#13;&#10;여부\"/><Cell col=\"11\" text=\"표시&#13;&#10;순서\"/><Cell col=\"12\" text=\"비고\"/><Cell col=\"13\" text=\"최종수정자\"/><Cell col=\"14\" text=\"최종수정일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:REQ_TMPLAT_ID\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:REQ_TMPLAT_VER\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:REQ_TMPLAT_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SVC_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SVC_DTL_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WF_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REQ_INFO_TYPE_CD\" expandimage=\"url(&apos;theme://SPP_IMAGE_SET/WF/btn_WF_Search.png&apos;)\" expandshow=\"show\" expandsize=\"20\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsReqInfoTypeCd\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:REQ_URL\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCdGrid\" text=\"bind:USE_YN\" edittype=\"combo\"/><Cell col=\"11\" text=\"bind:SVC_TMPL_NO\"/><Cell col=\"12\" text=\"bind:RMK\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"14\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("WF프로세스 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn","grdWfReqTmplatMt:-250","70","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWfReqTmplatMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboSvcDtlCd","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboWfId","value","dsCond","WF_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.edtTmplatNm","value","dsCond","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ WF0120_W
        * 화면(명)		︰ 요청서관리
        * 메뉴(경로)	︰ 관리자 > 워크플로우 > 요청서관리
        * 화면 설명	︰ SPP 요청서 관리 화면
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
        this.lastRowpos = 0;

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
        	this.fnCompInit();
        	this.fnSearchWfMt();

        	this.fnSearchReset();
        	this.fnSearch();
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, 'SVC_DTL_CD', 	'');
        	this.dsCond.setColumn(0, 'WF_ID', 		'');
        	this.dsCond.setColumn(0, 'CUR_VER_YN', 'Y');
        	this.dsCond.setColumn(0, 'USE_YN', 'Y');
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsWfReqTmplatMt) ) {
        		var param = {
        						id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        	}
        	else {
        		this.fnSearch01();
        	}
        }

        // 요청서 양식 목록 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "WF0120W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfReqTmplatMt=dsWfReqTmplatMt";       // 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 워크플로우 목록 조회
        this.fnSearchWfMt = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEL_YN', 'N');

        	var sTranId = "selectWfMt";
            var sService = "WF0110W/select01";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsWfMt=dsWorkflowMt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	if( !Ex.util.isUpdated(this.dsWfReqTmplatMt) ) return;

        	// transaction
        	var sTranId = "save01";                       					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "WF0120W/save02";								// 서비스명
            var sInDs = "dsCond=dsCond dsWfReqTmplatMt=dsWfReqTmplatMt:U";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfReqTmplatMt=dsWfReqTmplatMt";					// 서버에서 수신할 데이타셋
            var sArg = "";                   								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        			if(this.lastRowpos >= 0)
        				this.dsWfReqTmplatMt.set_rowposition(this.lastRowpos);
        			Ex.core.toast(this, "10002");
        			break;

        		case "selectWfMt" :		// 워크플로우 목록 조회
        			this.dsWfMt.setInsertRow(0);
        			this.dsWfMt.setColumn(0, 'WF_ID', '');
        			this.dsWfMt.setColumn(0, 'WF_NM', Ex.core.word('- 전체 -') );
        			break;

        		case "save01" :
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{

        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;
        	}
        }

        // 서브페이지 디폴트 콜백함수
        this.fnSubpageCallback = function(objParam)
        {
        	if(this.lastRowpos < 0)
        		this.fnSearchReset();
        	this.fnSearch();
        }
        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdWfReqTmplatMt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'YN_CD',			'SVC_CD',		'REQ_INFO_TYPE_CD'	]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD',			'WORKFLOW_CD',	'WORKFLOW_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'',					'ALL',			'ALL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',				'Y',			'Y'					]	// 사용여부
        		,filter	: ['',			'',					'',				''					]	// filterStr
        		,objDs	: [this.dsYnCd,	this.dsYnCdGrid,	this.dsSvcCd,	this.dsReqInfoTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	// 서비스 상세 코드 init 처리
        	this.dsSvcDtlCd.loadXML(this.dsSvcDtlCd.saveXML());
        	this.dsSvcDtlCd.clearData();
        	this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(0, 'CMM_CD', '');
        	this.dsSvcDtlCd.setColumn(0, 'CMM_CD_NM', Ex.core.word('- 전체 -') );
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnAdd" :
        			this.lastRowpos = -1;
        			Ex.core.openSubpage(this, 'wf::WF0120_D.xfdl', {pIU:'I'});
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsWfReqTmplatMt);
        			break;

        		case "btnSave" :
        			var param = {
        					id : "saveConfirm"
        				  , msg : "10003"
        				  , arrparam : ['']
        				  , msgtype : "I"};
        			Ex.core.confirm(this, param);
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

        this.grdWfReqTmplatMt_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.grdWfReqTmplatMt_oncelldblclick = function(obj,e)
        {
        	var useYnColIdx = obj.getBindCellIndex("Body", "USE_YN");
        	if(e.col < 2) return;
        	if(useYnColIdx == e.col) return;

        	var REQ_TMPLAT_ID	= this.dsWfReqTmplatMt.getColumn(this.dsWfReqTmplatMt.rowposition, 'REQ_TMPLAT_ID');
        	var REQ_TMPLAT_VER	= this.dsWfReqTmplatMt.getColumn(this.dsWfReqTmplatMt.rowposition, 'REQ_TMPLAT_VER');
        	Ex.core.openSubpage(this,
        						'wf::WF0120_D.xfdl',
        						{
        							  pIU				: 'U'
        							, REQ_TMPLAT_ID	: REQ_TMPLAT_ID
        							//,REQ_TMPLAT_VER	: REQ_TMPLAT_VER
        						}
        					);
        };

        this.divSearchArea_cboSvcCd_onitemchanged = function(obj,e)
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

        	if(this.dsSvcDtlCd.rowcount == 0) {
        		this.dsSvcDtlCd.addRow();
        		this.dsSvcDtlCd.setColumn(0, 'CMM_CD', '');
        		this.dsSvcDtlCd.setColumn(0, 'CMM_CD_NM', Ex.core.word('- 전체 -') );
        	}
        	this.divSearchArea.form.cboSvcDtlCd.set_index(0);
        };

        this.dsWfReqTmplatMt_onrowposchanged = function(obj,e)
        {
        	this.lastRowpos = e.newrow;
        };

        this.grdWfReqTmplatMt_onexpandup = function(obj,e)
        {
        	// 기본정보타입 미리보기
        	if(e.cell = obj.getBindCellIndex('body', 'REQ_INFO_TYPE_CD') ){
        		var REQ_INFO_TYPE_CD = this.dsWfReqTmplatMt.getColumn(e.row, 'REQ_INFO_TYPE_CD')||'';
        		if( !Ex.isEmpty(REQ_INFO_TYPE_CD) )
        		{
        			var pageUrl = this.dsReqInfoTypeCd.getColumn(this.dsReqInfoTypeCd.findRow("CMM_CD", REQ_INFO_TYPE_CD), 'ITM_VAL_1')||'';
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"baseInfoPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comPopPreview.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : Ex.core.word("미리보기"),
        					pPageURL : pageUrl
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=0,height=0"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        		}
        	}
        };
        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.divSearchArea_cboSvcCd_onitemchanged,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboWfId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboUseYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtTmplatNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdWfReqTmplatMt.addEventHandler("oncelldblclick",this.grdWfReqTmplatMt_oncelldblclick,this);
            this.grdWfReqTmplatMt.addEventHandler("onexpandup",this.grdWfReqTmplatMt_onexpandup,this);
            this.grdWfReqTmplatMt.addEventHandler("oncellclick",this.grdWfReqTmplatMt_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfReqTmplatMt.addEventHandler("onrowposchanged",this.dsWfReqTmplatMt_onrowposchanged,this);
            this.dsWfReqTmplatMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("WF0120_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
