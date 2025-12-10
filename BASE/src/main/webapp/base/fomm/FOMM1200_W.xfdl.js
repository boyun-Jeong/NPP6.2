(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1200_W");
            this.set_titletext("서식관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SR_CAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqTypeAll", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqTypeReg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqDivAll", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row><Row><Col id=\"CMM_CD\">INF</Col><Col id=\"CMM_CD_NM\">인프라요청</Col></Row><Row><Col id=\"CMM_CD\">SEC</Col><Col id=\"CMM_CD_NM\">보안요청</Col></Row><Row><Col id=\"CMM_CD\">ETC</Col><Col id=\"CMM_CD_NM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqDivSel", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD\">INF</Col><Col id=\"CMM_CD_NM\">인프라요청</Col></Row><Row><Col id=\"CMM_CD\">SEC</Col><Col id=\"CMM_CD_NM\">보안요청</Col></Row><Row><Col id=\"CMM_CD\">ETC</Col><Col id=\"CMM_CD_NM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseAuth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">Y</Col><Col id=\"CMM_CD_NM\">예</Col></Row><Row><Col id=\"CMM_CD\">N</Col><Col id=\"CMM_CD_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkId", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcissuStat","20","12","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboIssuStat","stcissuStat:0","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsReqDivAll");
            obj.set_displayrowcount("12");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("전체");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","cboIssuStat:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm00","Static00_00_00:0","12","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm00","stcReqTmplatNm00:4","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("요청서명");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","edtReqTmplatNm00:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcissuStat00","Static00_00_00_00:0","12","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboIssuStat00","stcissuStat00:4","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("12");
            var divSearchArea_form_cboIssuStat00_innerdataset = new nexacro.NormalDataset("divSearchArea_form_cboIssuStat00_innerdataset", obj);
            divSearchArea_form_cboIssuStat00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 전체 -</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea_form_cboIssuStat00_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            obj.set_text(" 전체");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdNoti","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj.set_suppresslevel("allskip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"280\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"행상태\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"요청분류\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"요청서ID\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"요청서명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"요청유형\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"사용유무\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"사용권한\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWFLAG\"/><Cell col=\"1\" text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:SR_CAT_TYPE\" displaytype=\"combocontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsReqDivSel\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" edittype=\"expr:ROWFLAG==&apos;I&apos;?&apos;combo&apos;:&apos;none&apos;\" validation=\"요청분류;NULL\"/><Cell col=\"3\" text=\"bind:SR_CAT_ID\" edittype=\"expr:ROWFLAG==&apos;I&apos;?&apos;text&apos;:&apos;none&apos;\" validation=\"요청서ID;NULL|MAX_LEN_ASC :10\" editmaxlength=\"10\"/><Cell col=\"4\" text=\"bind:SR_CAT_NAME\" textAlign=\"left\" edittype=\"text\" validation=\"요청서명;NULL|MAX_LEN_ASC :100\" editmaxlength=\"50\"/><Cell col=\"5\" text=\"bind:SR_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"expr:ROWFLAG==&apos;I&apos;?&apos;dsReqTypeReg&apos;:&apos;dsReqTypeAll&apos;\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"요청유형;NULL\"/><Cell col=\"6\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"사용유무;NULL\"/><Cell col=\"7\" text=\"bind:AUTH_ID\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUseAuth\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"사용권한;NULL\"/><Cell col=\"8\" text=\"bind:BIGO\" textAlign=\"left\" edittype=\"text\" validation=\"비고;MAX_LEN_ASC :200\" editmaxlength=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("요청서양식관리");
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

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","520","24","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDel:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:10","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtSndUsr","value","dsCond","NOTI_CGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.stcissuStat","value","dsCond","ISE_SCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.Static00_00_00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.cboIssuStat","value","dsCond","SR_CAT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.edtReqTmplatNm00","value","dsCond","SR_CAT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.Static00_00_00_00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.stcissuStat00","value","dsCond","svcClssCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.cboIssuStat00","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1200_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1200_W
        * 화면(명)		︰ 서식관리
        * 메뉴(경로)	︰ 관리자 > 사용자권한관리 > 서식관리
        * 화면 설명	︰ 서식관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.11
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.11	 WEMB	최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.rstCnt = 0;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "selectCatNh";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1200W/selectCatNh";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 중복체크
        this.fnChkDupCatNh = function()
        {
        	this.dsChkId.clearData();
        	this.dsData.enableevent = false;
        	this.dsData.filter("ROWFLAG=='I'");
        	this.dsChkId.copyData(this.dsData, true);
        	this.dsData.filter("");
        	this.dsData.enableevent = true;

        	// transaction
        	var sTranId = "chkDupCatNh";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1200W/chkDupCatNh";            // 서비스명
            var sInDs = "dsCond=dsChkId";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM1200W/save01";
            var sInDs = "dsData=dsData dsCond=dsCond";
            var sOutDs = "dsData=dsData";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	var fRow = this.dsData.findRow("ROWFLAG","I");
        	if(fRow==-1) {
        	   	   var param = {
        			        	id : "noAddAlert"
        		    	     , msg : "삭제 할 행이 없습니다\n※ 저장된 서식 미사용시 사용유무를 변경하세요."
        	     	         , arrparam : ['']
        				     , msgtype : "I"};
        		   Ex.core.alert(this, param);
        		   return false;
        	}

        	objDs.set_enableevent(false);
        	objDs.setDeleteRow(fRow);
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
        		case "selectCatNh" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        				//this.fnSearch();
        				Ex.core.toast(this, "10004");
        			break;

        		case "chkDupCatNh" :

        			if(this.rstCnt!=0) {
        				var param = {
        				    	id : "delIssueAlert"
        				     , msg : "이미 등록된 정보가 존재합니다.\n요청서ID를 변경 하세요."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        			} else {
        				this.fnSave();
        			}
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
        		case "saveConfirm" :
        			var iCnt = this.dsData.getCaseCount("ROWFLAG=='I'");
        			if(iCnt==0) {
        				this.fnSave();
        			} else {
        				this.fnChkDupCatNh();
        			}
        			break;

        		case "searchConfirm" :
        			this.fnSearch();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.grdNoti.displayRowType();

        	this.fnGetCmmCd();

        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [ "REQC0C00","REQC0C00", "USE_AUTH"		]	// 조회할 상위코드
        		,codeDiv: [ "","", "WORKFLOW_CD"		]	// 조회할 코드의 업무구분
        		,optStr	: [ "","SEL", "SEL"				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [ "","Y", "Y"			]	// 사용여부
        		,filter	: [ "",	"", ""			]	// filterStr
        		,objDs	: [	this.dsReqTypeAll,this.dsReqTypeReg, this.dsUseAuth	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	return true;
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

        			if( Ex.util.isUpdated(this.dsData) )
        			{
        				var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        				return;
        			}

        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdNoti],
           				Sheet	: ['서식관리'],
           				FileNm	: ["서식관리"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnDel" :
        			this.fnDelete(this.dsData);
        			break;

        		case "btnAdd" :
        			var fRow = this.dsData.findRow("ROWFLAG","I");
        			if(fRow!=-1) {
        				var param = {
        				    	id : "noAddAlert"
        				     , msg : "이미 추가된 행이 있습니다.\n추가된 행을 저장 또는 삭제 후 추가 가능합니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        			}

        			var aRow = this.dsData.setAddRow();
        			this.dsData.setColumn(aRow, 'USE_YN', 'Y');

        			break;

        		case "btnSave" : 	// 저장

        			if( !Ex.util.isUpdated(this.dsData)) return false;

        			if( !this.grdNoti.checkValidate() ) {
        				return false;
        			}


        			var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);

        			break;
        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };


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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboIssuStat.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboIssuStat00.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.grdNoti.addEventHandler("oncellclick",this.grdNoti_oncellclick,this);
            this.grdNoti.addEventHandler("onexpanddown",this.grdNoti_onexpanddown,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM1200_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
