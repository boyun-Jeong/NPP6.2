(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_P03");
            this.set_titletext("담당자선택 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,485);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCger", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CGER_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JAVA_SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCgerTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthExtdMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUser00","20","301","120","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("담당자 정의");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","335",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcName","20","335","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("표기명칭");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtName","155","340",null,"24","335",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            this.divContent.addChild(obj.name, obj);

            obj = new Tab("tabCgerType","20","20",null,"260","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_normal");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Tabpage("tab01",this.divContent.form.tabCgerType);
            this.divContent.form.tabCgerType.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","44",null,"34","0",null,null,null,null,null,this.divContent.form.tabCgerType.tab01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.tabCgerType.tab01.addChild(obj.name, obj);

            obj = new Static("stcExtd","0","44","100","34",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("역할자");
            this.divContent.form.tabCgerType.tab01.addChild(obj.name, obj);

            obj = new Static("stcUser","0","10","155","24",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab01.form);
            obj.set_taborder("2");
            obj.set_text("담당자 지정 역할자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabCgerType.tab01.addChild(obj.name, obj);

            obj = new Combo("cboExtdId","stcExtd:5","49","215","24",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab01.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsAuthExtdMt");
            obj.set_codecolumn("EXTD_ID");
            obj.set_datacolumn("EXTD_NM");
            obj.set_type("caseifilterlike");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("역할자;NULL");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.divContent.form.tabCgerType.tab01.addChild(obj.name, obj);

            obj = new Tabpage("tab02",this.divContent.form.tabCgerType);
            this.divContent.form.tabCgerType.addChild(obj.name, obj);

            obj = new Static("stcUser","0","10","120","24",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab02.form);
            obj.set_taborder("0");
            obj.set_text("담당자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabCgerType.tab02.addChild(obj.name, obj);

            obj = new Grid("grdReviewer","0","44",null,null,"0","0",null,null,null,null,this.divContent.form.tabCgerType.tab02.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCger");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"사번(ID)\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/></Band></Format></Formats>");
            this.divContent.form.tabCgerType.tab02.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"10","161","24","0",null,null,null,null,null,this.divContent.form.tabCgerType.tab02.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.form.tabCgerType.tab02.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Tabpage("tab03",this.divContent.form.tabCgerType);
            this.divContent.form.tabCgerType.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","44",null,"34","0",null,null,null,null,null,this.divContent.form.tabCgerType.tab03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.tabCgerType.tab03.addChild(obj.name, obj);

            obj = new Static("stcSvcNm","0","44","100","34",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("서비스명");
            this.divContent.form.tabCgerType.tab03.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm","stcSvcNm:5","49",null,"24","5",null,null,null,null,null,this.divContent.form.tabCgerType.tab03.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("서비스명;NULL");
            obj.set_inputfilter("dot,comma,space,sign");
            obj.set_imemode("alpha");
            obj.set_inputtype("alpha,digit,english,symbol");
            this.divContent.form.tabCgerType.tab03.addChild(obj.name, obj);

            obj = new Static("stcUser","0","10","155","24",null,null,null,null,null,null,this.divContent.form.tabCgerType.tab03.form);
            obj.set_taborder("3");
            obj.set_text("담당자 지정 서비스명");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.tabCgerType.tab03.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20.00","368",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcName00","20.00","368","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("의견작성 필수단계");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn01","157.00","376","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_text("접수");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContent.addChild(obj.name, obj);

            obj = new CheckBox("chkBtnYn02","237.00","376","70","20",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("반려");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabCgerType.tab01.form
            obj = new Layout("default","",0,0,this.divContent.form.tabCgerType.tab01.form,function(p){});
            this.divContent.form.tabCgerType.tab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabCgerType.tab02.form
            obj = new Layout("default","",0,0,this.divContent.form.tabCgerType.tab02.form,function(p){});
            this.divContent.form.tabCgerType.tab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.tabCgerType.tab03.form
            obj = new Layout("default","",0,0,this.divContent.form.tabCgerType.tab03.form,function(p){});
            this.divContent.form.tabCgerType.tab03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,485,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.edtName","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.stcBg01_00","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.stcBg01_01","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ WF0120_P03
        * 화면(명)		︰ 담당자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 워크플로우 담당자 선택 팝업
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
        this.pIU = 'I';
        this.orgCgerTypeCd;			//원본값
        this.cgerTypeCd	= '03';		// 01: 사용자선택, 02: 조건지정 03 : 역할자 지정
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
        	this.fnCompInit();			// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 역할자 콤보 목록 조회
        this.fnSearchExtdCombo = function()
        {
        	var sTranId = "selectExtdCombo";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "WF0120P/select04";				// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAuthExtdMt=dsAuthExtdMt";		// 서버에서 수신할 데이타셋
            var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
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
        		case "selectExtdCombo" :
        			this.dsAuthExtdMt.insertRow(0);
        			this.dsAuthExtdMt.setColumn(0, "EXTD_NM", "- 선택 -");

        			this.divContent.form.tabCgerType.tab01.form.cboExtdId.set_index(0);

        			//tabpage 타이틀 공통코드로 셋팅
        			for(var i=0; i<this.divContent.form.tabCgerType.tabpages.length; i++)
        			{
        				var fRow = -1;
        				if(i==0)	fRow = this.dsCgerTypeCd.findRow('CMM_CD', "03");
        				if(i==1)	fRow = this.dsCgerTypeCd.findRow('CMM_CD', "01");
        				if(i==2)	fRow = this.dsCgerTypeCd.findRow('CMM_CD', "02");
        				this.divContent.form.tabCgerType.tabpages[i].set_text(this.dsCgerTypeCd.getColumn(fRow, "CMM_CD_NM"));
        			}

        			this.pIU		= (this.getOwnerFrame().pIU||'I').toUpperCase();
        			var WF_PROC_CD	= this.getOwnerFrame().WF_PROC_CD||'';
        			var WF_FUNC_CD 	= this.getOwnerFrame().WF_FUNC_CD||'';
        			var WF_FUNC_NM 	= this.getOwnerFrame().WF_FUNC_NM||'';
        			this.cgerTypeCd = this.getOwnerFrame().CGER_TYPE_CD||'03';	// 담당자 지정 유형; 01: 사용자선택, 02:조건지정
        			this.orgCgerTypeCd	= this.cgerTypeCd;

        			var SCREEN_APV_ESS_YN	= this.getOwnerFrame().SCREEN_APV_ESS_YN||'';
        			var SCREEN_RTRN_ESS_YN 	= this.getOwnerFrame().SCREEN_RTRN_ESS_YN||'';

        			trace('[WF0120_P03] fnCompInit  pIU :: ' + this.pIU + '  this.cgerTypeCd :: ' + this.cgerTypeCd);

        			var dsData;

        			if(this.cgerTypeCd == "01")			//사람 지정
        			{
        				dsData	= this.getOwnerFrame().dsReqCgerDt||'';
        			}
        			else if(this.cgerTypeCd == "02")	//서비스 지정
        			{
        				dsData	= this.getOwnerFrame().dsReqCgerSvcDt||'';
        			}
        			else if(this.cgerTypeCd == "03")	//역할자 지정
        			{
        				dsData	= this.getOwnerFrame().dsReqCgerExtdDt||'';
        			}
        			switch(this.pIU)
        			{
        				case "I" :
        					this.divContent.form.edtName.set_value(Ex.core.word('담당자') );	// 담당자 명칭
        					this.divContent.form.chkBtnYn01.set_value("N");
        					this.divContent.form.chkBtnYn02.set_value("Y");

        					break;

        				case "U" :
        					this.divContent.form.edtName.set_value(WF_FUNC_NM);		// 담당자 명칭
        					this.divContent.form.chkBtnYn01.set_value(SCREEN_APV_ESS_YN);
        					this.divContent.form.chkBtnYn02.set_value(SCREEN_RTRN_ESS_YN);

        					// 기존 담당자 목록 copy
        					trace("WF_PROC_CD : " + WF_PROC_CD + " WF_FUNC_CD : " + WF_FUNC_CD);
        					dsData.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "' && WF_FUNC_CD=='" + WF_FUNC_CD + "'");

        					if(this.cgerTypeCd == "01")			//사람 지정
        					{
        						this.dsCger.set_enableevent(false);

        						for(var i = 0; i < dsData.rowcount; i++)
        						{
        							var rowPos = this.dsCger.setAddRow();
        							this.dsCger.setCopyRow(rowPos, dsData, i);
        							this.dsCger.setColumn(rowPos, 'ROWFLAG', '');
        						}
        						this.dsCger.set_enableevent(true);
        					}
        					else if(this.cgerTypeCd == "02")	//서비스 지정
        					{
        						trace("dsData.rowcount : " + dsData.rowcount + " JAVA_SVC_NM : " + dsData.getColumn(0, "JAVA_SVC_NM"));
        						this.divContent.form.tabCgerType.tab03.form.edtSvcNm.set_value(dsData.getColumn(0, "JAVA_SVC_NM"));
        					}
        					else if(this.cgerTypeCd == "03")	//역할자 지정
        					{
        						trace("dsData.rowcount : " + dsData.rowcount + " EXTD_ID : " + dsData.getColumn(0, "EXTD_ID"));
        						this.divContent.form.tabCgerType.tab01.form.cboExtdId.set_value(dsData.getColumn(0, "EXTD_ID"));
        					}

        					// tab index setting
        					switch(this.cgerTypeCd)
        					{
        						case "03" :	this.divContent.form.tabCgerType.set_tabindex(0);	break;
        						case "01" :	this.divContent.form.tabCgerType.set_tabindex(1);	break;
        						case "02" :	this.divContent.form.tabCgerType.set_tabindex(2);	break;
        					}
        					break;
        			}
        			this.divContent.form.tabCgerType.set_visible(true);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID)
        	{
        		case "selectUserPop" :	// 사용자선택
        			this.dsSelUser.loadXML(varValue);

        			for(var i = 0; i < this.dsSelUser.rowcount; i++)
        			{
        				this.dsSelUser.setColumn(i, 'CHK', '0');

        				var userId = this.dsSelUser.getColumn(i, 'USER_ID');
        				var duplRow = this.dsCger.findRow('USER_ID', userId);
        				if( duplRow < 0 )
        				{
        					var rowPos = this.dsCger.setAddRow();
        					this.dsCger.setCopyRow(rowPos, this.dsSelUser, i);
        					this.dsCger.setColumn(rowPos, 'CGER_TYPE_CD', this.cgerTypeCd);
        				}
        			}
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "selectConfirm" :	// 선택 확인
        			this.fnSelect();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContent.form.tabCgerType.tab02.form.grdReviewer.displayRowType();

        	this.fnGetCmmCd();

        	this.fnSearchExtdCombo();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CGER_TYPE_CD']		// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['NO']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']					// 사용여부
        		,filter	: ['']					// filterStr
        		,objDs	: [this.dsCgerTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	switch(this.cgerTypeCd)
        	{
        		case "01" :	//사용자 지정
        			var nRow = this.dsCger.getCaseCount("ROWFLAG != 'D'");
        			if(nRow == 0)
        			{
        				var param = {
        						id : "noCgerAlert"
        					  , msg : "10011"
        					  , arrparam : [Ex.core.word('담당자')]
        					  , msgtype : "I"
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			break;

        		case "02" :	//서비스 지정
        			// component validation
        			if( !Ex.util.checkValidate(this.divContent.form.tabCgerType.tab03, "fvValiCmp") )	return false;
        			break;

        		case "03" :	//역할자 지정
        			// component validation
        			if( !Ex.util.checkValidate(this.divContent.form.tabCgerType.tab01, "fvValiCmp") )	return false;
        			break;
        	}
        	return true;
        }

        // 선택
        this.fnSelect = function()
        {
        	var strRtn = 	this.divContent.form.chkBtnYn01.value + ';;' +
        					this.divContent.form.chkBtnYn02.value + ';;' +

        					this.cgerTypeCd + ';;' +									//담당자 지정 구분
        					this.divContent.form.edtName.value + ';;';					//표기명칭


        	if(this.cgerTypeCd == "01")
        	{
        		strRtn +=	this.fnGetDsCger();											//담당자 dataset
        	}
        	else if(this.cgerTypeCd == "02")
        	{
        		strRtn +=	this.divContent.form.tabCgerType.tab03.form.edtSvcNm.value;	//JAVA SVC명
        	}
        	if(this.cgerTypeCd == "03")
        	{
        		strRtn +=	this.divContent.form.tabCgerType.tab01.form.cboExtdId.value;	//역할자ID
        	}
        	//trace("strRtn ::: " + strRtn);
        	Ex.core.pclose(this, strRtn);
        }

        // dataset data setting
        this.fnGetDsCger = function()
        {
        	var dsTemp = new Dataset();
        	this.dsCger.set_enableevent(false);
        	//this.dsCger.set_filterstr('CGER_TYPE_CD=="' + this.cgerTypeCd + '" && ROWFLAG != "D"');
        	this.dsCger.set_filterstr('ROWFLAG != "D"');
        	dsTemp.copyData(this.dsCger, true);
        	this.dsCger.set_filterstr('');
        	this.dsCger.set_enableevent(true);

        	return dsTemp.saveXML();
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(
        				this,
        				'selectUserPop',
        				"fomm::FOMM0000_P01.xfdl",				// <--- 팝업창 오픈 Url
        				{
        					title		: Ex.core.word('사용자') + ' ' + Ex.core.word('선택'),
        					pSelType	: pSelType

        				},										// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsCger);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			if( !this.fnCheckValidate() )	return;

        			var msg = "";
        			var strParam = this.dsCgerTypeCd.getColumn(this.dsCgerTypeCd.findRow('CMM_CD', this.cgerTypeCd), 'CMM_CD_NM');
        			var strParam2 = this.dsCgerTypeCd.getColumn(this.dsCgerTypeCd.findRow('CMM_CD', this.orgCgerTypeCd), 'CMM_CD_NM');

        			if(this.pIU == "U")
        			{
        				if(this.cgerTypeCd != this.orgCgerTypeCd)
        				{
        					msg = "기존에 지정한 " + Ex.core.word("담당자") + " " +
        						  "[" + strParam2 + "] 내역은\n삭제하고 " +
        						  Ex.core.word("담당자") + " [" + strParam + "] 을 처리합니다.\n\n";
        				}
        			}

        			var param = {
        				  id : "selectConfirm"
        				, msg : "10008"
        				, arrparam : [msg + Ex.core.word("담당자") + " " + Ex.core.word(strParam) + " "]
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			break;
        	}
        }

        this.divContent_tabCgerType_onchanged = function(obj,e)
        {
        	switch(e.postindex)
        	{
        		case 0 :	this.cgerTypeCd = '03';	break;	// 역할자 지정
        		case 1 :	this.cgerTypeCd = '01';	break;	// 사용자 선택
        		case 2 :	this.cgerTypeCd = '02';	break;	// 서비스 지정
        	}
        };

        this.dsCger_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.tabCgerType.addEventHandler("onchanged",this.divContent_tabCgerType_onchanged,this);
            this.divContent.form.tabCgerType.tab01.form.cboExtdId.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divContent.form.tabCgerType.tab02.form.grdReviewer.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.tabCgerType.tab02.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.chkBtnYn01.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.divContent.form.chkBtnYn02.addEventHandler("onchanged",this.chkBtn_onchanged,this);
            this.dsCger.addEventHandler("oncolumnchanged",this.dsCger_oncolumnchanged,this);
        };
        this.loadIncludeScript("WF0120_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
