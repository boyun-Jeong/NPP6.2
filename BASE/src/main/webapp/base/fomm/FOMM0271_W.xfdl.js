(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0271_W");
            this.set_titletext("지식등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSvKmMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"KM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KM_CATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowCateCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowProcStsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowProcStsCdGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowCateCdGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu3", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"109","0",null,"1200",null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("position").set("fixed");
            obj.set_text("");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("stcKmKindNm","440","13","40","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","410","13","20","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboKmKindNm","stcKmKindNm:0.00","13","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsKnowCateCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("cb00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"28","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"28","90","24","btnSearch:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcKmTitle","20","13","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKmTitle","stcKmTitle:0.00","13",null,"24","Static00:0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcKmRegNm","20","42","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKmCont","stcKmRegNm:0","42","520","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","90","70","170","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:5","70","170","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:5","70","170","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV3;NULL");
            obj.set_innerdataset("dsUpmu3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcKmId00","20.00","69","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdKmList","0","163",null,null,"0","50",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSvKmMt");
            obj.set_cellsizingtype("col");
            obj.getSetter("paramCSH").set("Y,Y,Y");
            obj.set_tabstop("false");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"지식ID\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"업무분류\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell text=\"bind:KNOW_ID\" textAlign=\"center\" suppress=\"0\" cursor=\"pointer\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"1\" text=\"bind:KNOW_CATEGORY_NM\" suppress=\"0\" cursor=\"pointer\"/><Cell col=\"2\" cursor=\"pointer\" text=\"bind:UPMU_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:SR_BRIEF\" suppress=\"0\" textAlign=\"left\" cursor=\"pointer\" tooltiptext=\"bind:SR_BRIEF\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"4\" text=\"bind:REG_USER_NM\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"5\" text=\"bind:REG_STIME\" textAlign=\"center\" cursor=\"pointer\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","109",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","0","129","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지식 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","153",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:-5.00","129","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsSvKmMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.cboKmKindNm","value","dsCond","KM_CATE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtKmTitle","value","dsCond","KM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtKmCont","value","dsCond","KM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboUpmu1","value","dsCond","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboUpmu2","value","dsCond","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboUpmu3","value","dsCond","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0271_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0271_W
        * 화면(명)	︰ 지식관리
        * 메뉴(경로)	︰ 커뮤니티 > 지식조회
        * 화면 설명	︰ 지식관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.12.16
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.12.16	 WEMB		최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(0, 'KM_TITLE', '');
        	this.dsCond.setColumn(0, 'KM_CONT', '');
        	this.dsCond.setColumn(0, 'KM_CATE_CD', undefined);
        	this.dsCond.setColumn(0, "UPMU_ID1", undefined);

        	var evt = nexacro.ItemChangeEventInfo;
        	evt.postvalue = undefined;
        	this.cboOnItemChanged(this.divSearch.form.cboUpmu1, evt);
        	this.cboOnItemChanged(this.divSearch.form.cboUpmu2, evt);
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if(this.dsCond.getColumn(0, "CHK_DATE") == "Y")
        	{
        		if( Ex.isEmpty(this.dsCond.getColumn(0, "SDATE")) )
        		{
        			var oParam = {id : "alertFromDateI", msg : "등록일[From] 일자가 입력되지 않았습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}

        		if( Ex.isEmpty(this.dsCond.getColumn(0, "EDATE")) )
        		{
        			var oParam = {id : "alertToDateI", msg : "등록일[To] 일자가 입력되지 않았습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}

        		if(this.dsCond.getColumn(0, "SDATE") > this.dsCond.getColumn(0, "EDATE"))
        		{
        			var oParam = {id : "alertFromDateI", msg : "등록일[To]은 등록일[From]보다 이후여야 합니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SV0400W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";        // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvKmMt=dsSvKmMt";	// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.onKeyUp = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnSearch();
        	}
        };

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

        			/*var fRow = this.dsUpmu1.findRow("CMM_CD", this.dsSvKmMt.getColumn(0, "UPMU_ID1"));

        			if(fRow == -1)	this.dsCond.setColumn(0, "UPMU_ID1", undefined);

        			evt.postvalue = this.dsCond.getColumn(0, "UPMU_ID1");
        			this.cboOnItemChanged(this.divSearch.form.cboUpmu1, evt);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "UPMU_ID2");
        			this.cboOnItemChanged(this.divSearch.form.cboUpmu2, evt);
        			*/
        			Ex.core.toast(this, "10002");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	switch(pID)
        	{
        		case "FOMM0271_P01" :
        			if( !Ex.isEmpty(varValue) )
        			{
        				var rtn = varValue.split("|");

        				if(rtn[0] == "Y")
        				{
        					this.fnSearch();

        					if(rtn.length > 1)
        					{
        						Ex.core.popup(
        							this,						// <--- 팝업 실행 스코프
        							"FOMM0271_P02",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        							"fomm::FOMM0271_P02.xfdl",	// <--- 팝업창 오픈 Url
        							{
        								title	: "지식등록 상세",
        								pMode	: "USER",
        								pKnowId	: rtn[1]
        							},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        						);
        					}
        				}
        			}
        			break;

        		case "FOMM0271_P02" :
        			if(varValue == "Y")
        			{
        				this.fnSearch();
        			}
        			else if(varValue == "MOD")
        			{
        				var strKnowId	= this.dsSvKmMt.getColumn(this.dsSvKmMt.rowposition, "KNOW_ID");

        				trace("strKmId : " + strKnowId);

        				Ex.core.popup(
        					this,					// <--- 팝업 실행 스코프
        					"FOMM0271_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        					"fomm::FOMM0271_P01.xfdl",	// <--- 팝업창 오픈 Url
        					{
        						title	: "지식등록 상세",
        						pKnowId	: strKnowId
        					},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "alertFromDateI" :
        			this.divSearch.form.calStrDate.setFocus();
        			break;

        		case "alertToDateI" :
        			this.divSearch.form.calEndDate.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();

        	this.fnSearchReset();
        	this.fnSearch();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['KNOW0000',	'KNOW_PROC_STS_CD',		'KNOW_PROC_STS_CD',	'BIZC0000'	]	// 조회할 상위코드
        		,codeDiv: ['NHFIRE',			'SVC_MNG_CD',			'SVC_MNG_CD',		''			]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL',					'',					'ALL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',					'Y',				'Y'			]	// 사용여부
        		,filter	: ['',			'',						'',					''			]	// filterStr
        		,objDs	: [this.dsKnowCateCd,	this.dsKnowProcStsCd,	this.dsKnowProcStsCdGrid, this.dsUpmu1]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAdd' :
        			this.fnOpenPop();
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsFommBoardMt);
        			break;

        		case 'btnReg' : 	// 등록
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"FOMM0271_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0271_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title	: "지식등록",
        					pKnowId	: ""
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
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

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row < 0) return;

        	// PJT_NAME 프로젝트/서브프로젝트명을 누를 때 마다 POPUP화면 호출
        	if (e.cell == obj.getBindCellIndex("body", "KNOW_ID") || e.cell == obj.getBindCellIndex("body", "SR_BRIEF"))
        	{
        		var strKnowId	= this.dsSvKmMt.getColumn(obj.getDatasetRow(e.row), "KNOW_ID");

        		trace("strKmId : " + strKnowId);

        		Ex.core.popup(
        			this,						// <--- 팝업 실행 스코프
        			"FOMM0271_P02",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"fomm::FOMM0271_P02.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title	: "지식등록 상세",
        				pMode	: "USER",
        				pKnowId	: strKnowId
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        this.chkOnChanged = function(obj,e)
        {
        	trace("this.chkOnChanged() e.postvalue : " + e.postvalue);
        	this.divSearch.form.calStrDate.set_enable(e.postvalue == "Y" ? true : false);
        	this.divSearch.form.calEndDate.set_enable(e.postvalue == "Y" ? true : false);
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "SDATE")
        	{
        		if(e.newvalue.length > 8)
        		{
        			trace("e.newvalue : " + e.newvalue);
        			obj.setColumn(0, e.columnid, e.newvalue.substr(0, 8));
        		}
        	}
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if(obj.id == "cboUpmu1" || obj.id == "cboUpmu2")
        	{
        		var subObj;
        		var dsObj;

        		var upmuId1 = this.dsCond.getColumn(0, "UPMU_ID1");
        		var upmuId2 = this.dsCond.getColumn(0, "UPMU_ID2");
        		var upmuId3 = this.dsCond.getColumn(0, "UPMU_ID3");

        		if(obj.id == "cboUpmu1")
        		{
        			subObj	= this.divSearch.form.cboUpmu2;
        			dsObj 	= this.dsUpmu2;
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			subObj	= this.divSearch.form.cboUpmu3;
        			dsObj 	= this.dsUpmu3;
        		}

        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			var oParam = {
        				 upCmmCd	: [e.postvalue	]	// 조회할 상위코드
        				,codeDiv	: [''			]	// 조회할 코드의 업무구분
        				,optStr		: ['ALL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'			]	// 사용여부
        				,filter		: [''			]	// filterStr
        				,objDs		: [dsObj		]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        			if(obj.id == "cboUpmu1")
        			{
        				this.divSearch.form.cboUpmu2.set_text(Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID2", undefined);

        				var evt = nexacro.ItemChangeEventInfo;
        				evt.postvalue = undefined;
        				this.cboOnItemChanged(this.divSearch.form.cboUpmu2, evt);
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 -"));

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsCond.setColumn(0, "UPMU_ID2", undefined);
        				this.divSearch.form.cboUpmu2.set_text(Ex.core.word("- 전체 -"));
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체 -"));
        			}

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsUpmu3.clearData();
        				aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체 -"));
        			}
        		}
        		/*
        		if(obj.id == "cboUpmu1")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId2);

        			if(fRow == -1)
        			{
        				this.divSearch.form.cboUpmu2.set_text(Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID2", undefined);

        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 -"));
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.divSearch.form.cboUpmu2.set_text(Ex.core.word("- 전체 -"));
        				this.dsCond.setColumn(0, "UPMU_ID2", undefined);
        				this.dsCond.setColumn(0, "UPMU_ID2", upmuId2);
        			}
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId3);

        			if(fRow == -1)
        			{
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체3 -"));

        				this.dsCond.setColumn(0, "UPMU_ID3", upmuId3);
        			}
        		}*/
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboKmKindNm.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.edtKmTitle.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtKmCont.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu1.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboUpmu1.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu2.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboUpmu2.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu3.addEventHandler("onkeyup",this.onKeyUp,this);
            this.grdKmList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0271_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
