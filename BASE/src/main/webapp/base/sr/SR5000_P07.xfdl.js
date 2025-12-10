(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chkList");
            this.set_titletext("테스트케이스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1110,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReqTestList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserTestList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CASE\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdateData", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubunType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">SVC</Col><Col id=\"CMM_CD_NM\">업무</Col></Row><Row><Col id=\"CMM_CD\">GNL</Col><Col id=\"CMM_CD_NM\">요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0",null,"675","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnTop","20","283",null,"60","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnUserSave",null,null,"170","32","0","14",null,null,null,null,this.divPage.form.divBtnTop.form);
            obj.set_taborder("1");
            obj.set_text("테스트케이스 항목 저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divPage.form.divBtnTop.addChild(obj.name, obj);

            obj = new Button("btnApply","47.30%","divBtnTop:-30","60","50",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_text("▼");
            obj.set_cursor("pointer");
            obj.set_font("bold 20px/normal \"KoPubL\"");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00_00","20.00","388",null,"10","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("8");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("reqTestGrdList","20.00","Static33_00_00_00_00:0",null,"250","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsReqTestList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoenter("select");
            obj.set_useSort("true");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"69\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"0\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"검증항목\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" cssclass=\"grdHCell_WF_essential\" text=\"확인방법\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" editlimit=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" expr=\"currow+1\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:GUBUN\" combodataset=\"dsGubunType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" text=\"bind:TEST_CASE\" combodataset=\"dsGubunType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:TEST_CONT\" editlimit=\"1000\" tooltiptext=\"bind:TEST_CONT\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" editfilter=\"integer\" text=\"bind:LMNM\" editlimit=\"4\" editinputtype=\"number\" editmaxlength=\"4\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:LMDT\" mask=\"####-##-## ##:##\" maskeditformat=\"####-##-## ##:##\" displaytype=\"date\" calendardisplaynulltype=\"nullmask\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("userTestGrdList","20","34",null,"250","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsUserTestList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoenter("select");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"69\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"0\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"검증항목\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" cssclass=\"grdHCell_WF_essential\" text=\"확인방법\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" editlimit=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" expr=\"currow+1\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:GUBUN\" combodataset=\"dsGubunType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" edittype=\"expr:UPMU_ID2 == &apos;00000000&apos; ? &apos;none&apos; : &apos;text&apos;\" text=\"bind:TEST_CASE\" displaytype=\"text\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expr:UPMU_ID2 == &apos;00000000&apos; ? &apos;none&apos; : &apos;text&apos;\" style=\"align:left;\" text=\"bind:TEST_CONT\" editlimit=\"1000\" tooltiptext=\"bind:TEST_CONT\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" editfilter=\"integer\" text=\"bind:REG_USER_NM\" editlimit=\"4\" editinputtype=\"number\" editmaxlength=\"4\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:REG_STIME\" mask=\"####-##-## ##:##\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","150","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_text("테스트케이스 항목");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_fittocontents("width");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnReqDelete",null,"btnApply:0","60","24","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00","0","24",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("3");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnUserDelete",null,"2","60","24","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"2","60","24","85",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("sta_title00","20.00","btnApply:0",null,"24","690",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("10");
            obj.set_text("사용자테스트 항목 (선택)");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("staCoNm","sta_title:20.00","2","65","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("12");
            obj.set_text("검증항목/확인방법");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_fittocontents("width");
            this.divPage.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","staCoNm:10.00","2","170","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCoNm:10.00","2","75","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("staCoNm00","343","365","425","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("14");
            obj.set_text("※ 상단 체크(√)된 [테스트케이스 항목] 하단 [사용자테스트 항목]으로 이동");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"KoPubL\"");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20",null,null,"60","20","3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnReqSave",null,null,"100","32","105","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form.divBtnTop.form
            obj = new Layout("default","",0,0,this.divPage.form.divBtnTop.form,function(p){});
            this.divPage.form.divBtnTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1110,710,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPage.form.edtCoNm","value","dsCond","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_P07.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P07.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 테스트케이스
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.18
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.03.18	WEMB		최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	pGridFormats	: 선택 목록에 사용될 그리드 포맷
        	pGridInnerDsArr	: 선택 목록 그리드에 콤보 InnerDataset Object Array
        	pDsData			: 선택 목록 그리드 Bind Dataset Object
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
         this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pReqId = '';
        this.upmuId2 = '';
        this.gubun = '';
        this.testCaseCnt = "";
        this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 등록자 본인 외에 수정불가
        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" &&
        		(this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") &&
        		this.dsSrBaseInfo.getColumn(0,"REQ_USER_ID") == Ex.util.getSession("gvUserId") )
        	{
        		// 랜더링 시점때문에 로드할때 숨김처리
        		//this.divPage.form.divBtnTop.form.btnUserSave.set_visible(false);
        		this.divPage.form.reqTestGrdList.set_readonly(false);
        		this.divPage.form.btnReqDelete.set_visible(true);
        		this.divBtnBottom.form.btnReqSave.set_visible(true);
        	}
        	this.gfnFormOnLoad(this, this.fnInit);

        	this.pReqId = this.getOwnerFrame().pReqId||'';
         	this.dsCond.setColumn(0, "REQ_ID", this.pReqId);
        	this.dsCond.setColumn(0, "UPMU_ID2", this.getOwnerFrame().pUpmuId2);

        	if(!this.dsCond.getColumnInfo("UPMU_CHM"))
        	{
        		this.dsCond.addColumn("UPMU_CHM","STRING")
        	}
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // REQ_ID로 요청서에서 선택된 요청분류, 업무분류 조회
        this.fnUserTestInfo = function()
        {
        	var sTranId = "userTestInfo";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/userTestInfo";						// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsRet=dsData";								// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 사용자테스트 목록 조회
        this.fnUserTestList = function()
        {
        	var sTranId = "userTestList";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/userTestList";						// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUserTestList=dsData";						// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 요청서에 추가된 테스트 목록 조회
        this.fnReqTestList = function()
        {
        	var sTranId = "reqTestList";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/reqTestList";						// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqTestList=dsData";						// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 사용자테스트리스트 저장
        this.fnUserTestSave = function()
        {
        	var sTranId = "userTestSave";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/userTestSave";						// 서비스명
            var sInDs = "dsCond=dsCond dsUserTestList=dsUserTestList";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUserTestList=dsData"; 						// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 요청서테스트리스트 저장
        this.fnReqTestSave = function()
        {
        	var sTranId = "reqTestSave";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/reqTestSave";						// 서비스명
            var sInDs = "dsCond=dsCond dsReqTestList=dsReqTestList";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqTestList=dsData";						// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 체크리스트 삭제
        this.fnChkListDelete = function()
        {
        	var sTranId = "chkListDelete";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/chkListDelete";							// 서비스명
            var sInDs = "dsCond=dsCond";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";												// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 테스트케이스 삭제
        this.fnTestCaseDelete = function()
        {
        	var sTranId = "testCaseDelete";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/testCaseDelete";						// 서비스명
            var sInDs = "dsCond=dsCond";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";												// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnAdd = function(objDs)
        {
        	aRow = objDs.setAddRow();

        	objDs.setColumn(aRow, "GUBUN", this.gubun);		// 구분(업무: SVC,요청: GNL)
        	objDs.setColumn(aRow, "USE_YN", "Y");			// 사용여부
        	objDs.setColumn(aRow, "REQ_ID", this.pReqId);	// 요청서 ID

        	objDs.set_rowposition(objDs.rowposition);
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        	{
        		// 사용자테스트의 경우 공통테스트는 수정/삭제 불가
        		if( objDs.id == "dsReqTestList" || objDs.getColumn(i, "UPMU_ID2") != '00000000' ) objDs.setDeleteRow(i);
        	}
        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }

        this.fnApply = function()
        {
        	if( this.dsUserTestList.findRow("ROWFLAG", 'I') > -1 || this.dsUserTestList.findRow("ROWFLAG", 'U') > -1 )
        	{
        		var param = {
                	  msg	: "저장 또는 삭제되지 않은 항목이 있으니 먼저 저장 후 진행해주세요"	//메시지 내용	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
                Ex.core.alert(this, param);
        		return false;
        	}

        	// 삭제시 저장여부 체크
        	for(var i=0; i<this.dsUserTestList.getRowCount(); i++)
        	{
        		if(this.dsUserTestList.getColumn(i,"ROWFLAG") == "D")
        		{
        			var param = {
        				  msg	: "저장 또는 삭제되지 않은 항목이 있으니 먼저 저장 후 진행해주세요"	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	for(var i=0; i<this.dsReqTestList.getRowCount(); i++)
        	{
        		if(this.dsReqTestList.getColumn(i,"TEST_SEQ").hi == this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "TEST_SEQ").hi)
        		{
        			var param = {
        				  msg	: "동일한 테스트항목이 존재합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	this.dsUserTestList.set_enableevent(false);
        	this.dsUserTestList.set_filterstr("CHK=='1'");

        	for(var i = this.dsUserTestList.rowcount-1; i >= 0; i--)
        	{
        		if( this.dsUserTestList.getColumn(i, "ROWFLAG") != 'I' &&  this.dsReqTestList.findRow("TEST_SEQ", this.dsUserTestList.getColumn(i, "TEST_SEQ")) < 0 )
        		{
        			var aRow = this.dsReqTestList.setAddRow();
        			this.dsReqTestList.setColumn(aRow, "REQ_ID", this.pReqId);										// 요청서 번호
        			this.dsReqTestList.setColumn(aRow, "TEST_SEQ", this.dsUserTestList.getColumn(i, "TEST_SEQ"));	// 테스트 시퀀스
        			this.dsReqTestList.setColumn(aRow, "GUBUN", this.dsUserTestList.getColumn(i, "GUBUN"));	// 테스트 시퀀스
        			this.dsReqTestList.setColumn(aRow, "TEST_CASE", this.dsUserTestList.getColumn(i, "TEST_CASE"));	// 테스트 시퀀스
        			this.dsReqTestList.setColumn(aRow, "TEST_CONT", this.dsUserTestList.getColumn(i, "TEST_CONT"));	// 테스트 시퀀스
        		}
        	}
        	this.dsUserTestList.set_filterstr("");
        	this.dsUserTestList.set_enableevent(true);
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
        		case "userTestInfo" :
        			this.dsCond.setColumn(0, "", this.dsRet.getColumn(0, "UPMU_ID2"));
        			this.upmuId2 = this.dsRet.getColumn(0, "UPMU_ID2");
        			this.gubun = this.dsRet.getColumn(0, "UPMU_ID2") == "REQC0EC0" || this.dsRet.getColumn(0, "UPMU_ID2") == "REQC0ED0" ? "GNL" : "SVC";
        			this.dsCond.setColumn(0, "GUBUN", this.gubun);

        			this.fnUserTestList();
        			this.fnReqTestList();
        			break;

        		case "userTestList" :
        			// 쿼리에서 업무정보를 가져오기 위해 REQ_ID를 실어서 보냄
        			this.dsUserTestList.set_enableevent(false);

        			this.dsUserTestList.addColumn("REQ_ID", "STRING");
        			for(var i=0; i<this.dsUserTestList.rowcount; i++) this.dsUserTestList.setColumn(i, "REQ_ID", this.pReqId);
        			this.dsUserTestList.set_enableevent(true);
        			this.testCaseCnt = this.dsUserTestList.rowcount; // 테스트케이스 항목의 초기갯수
        			break;

        		case "reqTestList" :
        			Ex.core.toast(this, "10002");
        			this.dsCond.setColumn(0, "UPMU_CHM", "N");
        			break;

        		case "reqTestSave" :
        			Ex.core.toast(this, "10004");
        			break;

        		case "testListSave" :
        			this.fnUserTestSave();
        		break;

        		case "testListSave" :
        			this.fnReqTestList();
        		break;

        		case "userTestSave" :
        			this.fnUserTestList();
        		break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "chkListConfirm" :
        			this.fnReqTestSave();
        			break;

        		case "userTestConfirm" :
        			this.fnUserTestSave();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divPage.form.staCoNm00.set_left((this.getOffsetWidth() / 2) - (this.divPage.form.staCoNm00.getOffsetWidth() / 2));
        	this.divPage.form.staCoNm00.set_visible(true);

        	// ROWFLAG처리
        	this.divPage.form.userTestGrdList.displayRowType();
        	this.divPage.form.reqTestGrdList.displayRowType();

        	this.fnGetCmmCd();

        	// 구분이 업무인지 요청인지 확인
        	this.fnUserTestInfo();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['SCKU0000']	// 조회할 상위코드
        		,codeDiv	: [''		 ]	// 조회할 코드의 업무구분
        		,optStr		: [''	 ]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'		 ]	// 사용여부
        		,filter		: [''		 ]	// filterStr
        		,objDs		: [this.dsUserType]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnSaveCheck = function(isReg)
        {
        	var nRowCnt = this.dsReqTestList.rowcount;

        	if(nRowCnt == 0)
        	{
        		var param = {
                	  msg	: "테스트 항목을 추가하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
                Ex.core.alert(this, param);
        		return false;
        	}

        	for(i = 0; i < nRowCnt; i++)
        	{
        		// 프로그램정보
        		strValue = this.dsReqTestList.getColumn(i, "TEST_CONT");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "사용자테스트 항목 (선택) " + (i.valueOf() + 1) + "행의 확인방법을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	var param = {
        		  id : "chkListConfirm"
        		, msg : "저장하시겠습니까?"
        		, arrparam : ['']
        		, msgtype : "I"
        	};
        	Ex.core.confirm(this, param);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnUserSave" :	// 사용자테스트 항목 저장
        			var param = {
        				  id : "userTestConfirm"
        				, msg : "저장하시겠습니까?"
        				, arrparam : ['']
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnReqSave" :		// 사용자테스트 항목 (선택) 저장
        			this.fnSaveCheck();
        			break;

        		case "btnClose" :		// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnAdd" :
        			this.fnAdd(this.dsUserTestList);
        			break;

        		case "btnUserDelete" :	// 삭제
        			this.fnDelete(this.dsUserTestList);
        			break;

        		case "btnReqDelete" :	// 삭제
        			this.fnDelete(this.dsReqTestList);
        			break;

        		case "btnApply" :
        			this.fnApply();
        			break;

        		case "btnSearch" :
        			this.fnUserTestList();
        			break;
        	}
        }

        this.divPage_userTestGrdList_oncelldblclick = function(obj,e)
        {
        	// 등록시 저장하지 않은 컬럼 체크
        	if(this.testCaseCnt != this.dsUserTestList.rowcount)
        	{
        		var param = {
        			  msg	: "저장 또는 삭제되지 않은 항목이 있으니 먼저 저장 후 진행해주세요"	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	// 삭제시 저장여부 체크
        	for(var i=0; i<this.dsUserTestList.getRowCount(); i++)
        	{
        		if(this.dsUserTestList.getColumn(i,"ROWFLAG") == "D")
        		{
        			var param = {
        				  msg	: "저장 또는 삭제되지 않은 항목이 있으니 먼저 저장 후 진행해주세요"	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	for(var i=0; i<this.dsReqTestList.getRowCount(); i++)
        	{
        		if(this.dsReqTestList.getColumn(i,"TEST_SEQ").hi == this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "TEST_SEQ").hi)
        		{
        			var param = {
        				  msg	: "동일한 테스트항목이 존재합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "W"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	var aRow = this.dsReqTestList.setAddRow();
        	this.dsReqTestList.setColumn(aRow, "REQ_ID", this.pReqId);										// 요청서 번호
        	this.dsReqTestList.setColumn(aRow, "TEST_SEQ", this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "TEST_SEQ"));	// 테스트 시퀀스
        	this.dsReqTestList.setColumn(aRow, "GUBUN", this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "GUBUN"));	// 테스트 시퀀스
        	this.dsReqTestList.setColumn(aRow, "TEST_CASE", this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "TEST_CASE"));	// 테스트 시퀀스
        	this.dsReqTestList.setColumn(aRow, "TEST_CONT", this.dsUserTestList.getColumn(this.dsUserTestList.rowposition, "TEST_CONT"));	// 테스트 시퀀스
        };

        this.fnCommOnkeyup = function(obj,e)
        {
        	if(e.keycode == '13')	this.fnUserTestList();
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e, ['REQ_ID']);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.divBtnTop.form.btnUserSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.btnApply.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.userTestGrdList.addEventHandler("oncelldblclick",this.divPage_userTestGrdList_oncelldblclick,this);
            this.divPage.form.btnReqDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.btnUserDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.edtCoNm.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divPage.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.btnSearch.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnReqSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsReqTestList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUserTestList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUpdateData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5000_P07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
