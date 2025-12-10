(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1300_W");
            this.set_titletext("업무분류별담당자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SENIOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEVPR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeniorLsit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDevprList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnVal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataSave", this);
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
            obj.set_text("");
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
            obj.set_text("선임자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboIssuStat","stcissuStat:0","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("SENIOR_ID");
            obj.set_datacolumn("SENIOR_NM");
            obj.set_innerdataset("dsSeniorLsit");
            obj.set_displayrowcount("14");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
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

            obj = new Static("stcItsysCd","Static00_00_00:0","12","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDevNm","stcItsysCd:0","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("DEVPR_ID");
            obj.set_datacolumn("USER_NM");
            obj.set_innerdataset("dsDevprList");
            obj.set_displayrowcount("20");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"180\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"행상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"NO\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"4\" rowspan=\"2\" text=\"선임자명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" rowspan=\"2\" text=\"업무분류\"/><Cell col=\"6\" rowspan=\"2\" text=\"담당자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:DEPT_ID\" displaytype=\"combocontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsDeptList\" combodatacol=\"TEAM_NM\" combocodecol=\"TEAM_ID\" edittype=\"combo\" validation=\"부서명;NULL\"/><Cell col=\"4\" text=\"bind:SENIOR_NM\" displaytype=\"normal\" expandshow=\"hide\" edittype=\"none\" expr=\"!Ex.isEmpty(SENIOR_ID)?SENIOR_NM+&apos; (&apos;+SENIOR_ID+&apos;)&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:MIN_BSE_LVL1_NM\" expandshow=\"hide\"/><Cell col=\"6\" textAlign=\"center\" displaytype=\"normal\" expandshow=\"show\" text=\"expr:!Ex.isEmpty(DEVPR_ID)?DEVPR_NM+&apos; (&apos;+DEVPR_ID+&apos;)&apos;:&apos;&apos;\"/></Band></Format><Format id=\"excel01\"><Columns><Column size=\"48\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"행상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"NO\"/><Cell col=\"3\" rowspan=\"2\" text=\"서비스유형\"/><Cell col=\"4\" rowspan=\"2\" text=\"업무분류(대)\"/><Cell col=\"5\" rowspan=\"2\" text=\"업무분류(중)\"/><Cell col=\"6\" rowspan=\"2\" text=\"팀명\"/><Cell col=\"7\" rowspan=\"2\" text=\"사번\"/><Cell col=\"8\" rowspan=\"2\" text=\"담당자명\"/><Cell col=\"9\" colspan=\"7\" text=\"담당 여부\"/><Cell row=\"1\" col=\"9\" text=\"담당자\"/><Cell row=\"1\" col=\"10\" text=\"현장대리인\"/><Cell row=\"1\" col=\"11\" text=\"QA\"/><Cell row=\"1\" col=\"12\" text=\"PL\"/><Cell row=\"1\" col=\"13\" text=\"팀장\"/><Cell row=\"1\" col=\"14\" text=\"부장\"/><Cell row=\"1\" col=\"15\" text=\"기타\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:SVC_CLSS_CD\" displaytype=\"expr:Ex.isEmpty(SVC_CLSS_CD)?&apos;none&apos;:&apos;combotext&apos;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsSrType\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\"/><Cell col=\"4\" text=\"bind:BSE_LVL1_NM\"/><Cell col=\"5\" text=\"bind:BSE_LVL2_NM\" expandshow=\"hide\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:STAFF_ID\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"expr:USER_USE_YN==&apos;N&apos;?STAFF_NM+&apos;(퇴사)&apos;:STAFF_NM\" textAlign=\"center\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:LVL1_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:LVL2_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL3_STAFF_YN\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL4_STAFF_YN\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL5_STAFF_YN\"/><Cell col=\"14\" text=\"bind:LVL6_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" text=\"bind:LVL7_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","195","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업무분류별 담당자관리");
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

            obj = new Button("btnIssuChk",null,"0","100","24","btnAdd:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("선임자 선택");
            obj.set_cssclass("btn_WF_Btn03");
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

            obj = new BindItem("item5","divSearchArea.form.stcItsysCd","value","dsCond","RESC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.cboIssuStat","value","dsCond","SENIOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.cboDevNm","value","dsCond","DEVPR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1300_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1300_W
        * 화면(명)		︰ 업무분류별 담당자관리
        * 메뉴(경로)	︰ 관리자 > 사용자권한관리 > 업무분류별 담당자관리
        * 화면 설명	︰ 서비스별 담당자관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.19
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.19	 WEMB	최초작성
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

        	this.fnSearchReset();	// 검색조건 초기화
        	//this.fnSearch();		// 조회
        	this.fnSelectInitInfo();
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
        	var sTranId = "selectDataList";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1300W/selectDataList";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSelectInitInfo = function()
        {
        	// transaction
        	var sTranId = "selectInitInfo";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1300W/selectInitInfo";            // 서비스명
            var sInDs = "";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSeniorLsit=dsSeniorLsit dsDevprList=dsDevprList dsDeptList=dsDeptList";       	// 서버에서 수신할 데이타셋
            var sArg = "SCH_LSIT='senior:devpr:dept'";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	this.dsDataSave.clearData();
        	this.dsData.enableevent = false;
        	this.dsData.filter("!Ex.isEmpty(ROWFLAG)");
        	this.dsDataSave.copyData(this.dsData,true);
        	this.dsData.filter("");
        	this.dsData.enableevent = true;

        	var sTranId = "save01";
            var sService = "FOMM1300W/save01";
            var sInDs = "dsData=dsDataSave dsCond=dsCond";
            var sOutDs = "dsData=dsData";
            var sArg = "";
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
        		case "selectDataList" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        				//this.fnSavePostSelect();
        				//this.fnSearch();
        				this.fnSelectInitInfo();
        				//Ex.core.toast(this, "10004");
        			break;

        		case "selectInitInfo" :
        			this.fnSearch();
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
        		case "selectDevprReg" :

        			if(!Ex.isEmpty(varValue)) {
        				this.dsRtnVal.clear();
        				this.dsRtnVal.loadXML(varValue);
        				for(var i = 0 ; i < this.dsRtnVal.rowcount ; i++){
        					//var rowPos = this.dsData.setInsertRow(this.dsData.rowposition+1);
        					var aRow = this.dsData.setAddRow();
        					this.dsData.setColumn(aRow, "DEVPR_ID", this.dsRtnVal.getColumn(i,"USER_ID"));
        					this.dsData.setColumn(aRow, "DEVPR_NM", this.dsRtnVal.getColumn(i,"USER_NM"));
        				}
        			}
        			break;

        			case "seniorRegPop" :
        				if(!Ex.isEmpty(varValue)) {
        					this.dsRtnVal.clear();
        					this.dsRtnVal.loadXML(varValue);

        					//this.dsData.enableevent = false;
        					this.dsData.filter("CHK=='1'");

        					for(var i=0;i<this.dsData.rowcount;i++) {
        						this.dsData.setColumn(i,"SENIOR_ID",this.dsRtnVal.getColumn(0,"USER_ID"));
        						this.dsData.setColumn(i,"SENIOR_NM",this.dsRtnVal.getColumn(0,"USER_NM"));
        					}
        					this.dsData.filter("");
        					//this.dsData.enableevent = true;

        				}
        				break;

        			case "devprRegPop" :
        				if(!Ex.isEmpty(varValue)) {
        					this.dsRtnVal.clear();
        					this.dsRtnVal.loadXML(varValue);

        					var rPos = this.dsData.rowposition;
        					var userId = this.dsRtnVal.getColumn(0,"USER_ID");
        					var userNm = this.dsRtnVal.getColumn(0,"USER_NM");

        					this.dsData.setColumn(rPos,"DEVPR_ID",userId);
        					this.dsData.setColumn(rPos,"DEVPR_NM",userNm);
        				}
        				break;

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
        			this.fnSave();
        			break;

        		case "searchConfirm" :
        			this.fnSearch();
        			break;
        	}
        }


        /************************************************************************l***********
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.grdNoti.displayRowType();

        	//this.fnGetCmmCd();

        	//var	arrBtn = [this.divGrdTopBtn.form.btnExcelDown];
        	//Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [ "YN_CD2",		]	// 조회할 상위코드
        		,codeDiv: [ "CMM_CD",		]	// 조회할 코드의 업무구분
        		,optStr	: [ "",				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [ "Y",			]	// 사용여부
        		,filter	: [ "",				]	// filterStr
        		,objDs	: [	this.dsYnCd,	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	var fRow = -1;

        	fRow = this.dsData.findRowExpr("SENIOR_ID=='' || SENIOR_ID==null");

        	if(fRow > -1) {
        				var param = {
        				    	id : "noItemAlert"
        				     , msg : "["+(fRow+1)+"행] 선임자은(는) 필수 입력 항목입니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false
        	}

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

        		case "btnDel" :
        			this.fnDelete(this.dsData);
        			break;

        		case "btnAdd" :
        			/*
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			*/
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

        			Ex.core.popup(	this,
        							'selectDevprReg',
        							"fomm::FOMM1300_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('업무별 담당자 신규등록'),
        							  pSelType:'M'},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;

        		case "btnSave" : 	// 저장

        			if( !Ex.util.isUpdated(this.dsData)) return false;

        			if( !this.grdNoti.checkValidate() ) {
        				return false;
        			}

        			if( !this.fnCheckValidate()){
        				return false;
        			}


        			var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);

        			break;

        		case "btnIssuChk" :
        			var rCnt = this.dsData.getCaseCount("CHK=='1'");

        			if(rCnt>0) {
        				Ex.core.popup(	this,
        							'seniorRegPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('선임자 선택')
        							, pPopupType : 'S'
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				);

        			} else {
        				var param = {
        				    	id : "noCntAlert"
        				     , msg : "선택된 행이 없습니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        			}

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

        /*
        this.grdNoti_onexpanddown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        {
        	if(e.col==16) {
        				Ex.core.popup(	this,
        							'selectChgHist',
        							"fomm::FOMM1100_P04.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('변경이력')
        							  , SVC_CLSS_CD : this.dsData.getColumn(this.dsData.rowposition,"SVC_CLSS_CD")
        							  , BSE_LVL1_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL1_CD")
        							  , BSE_LVL2_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL2_CD")
        							  , STAFF_ID : this.dsData.getColumn(this.dsData.rowposition,"STAFF_ID")
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        	}
        };
        */

        this.grdNoti_oncellclick = function(obj,e)
        {
        	if(e.col==6) {
        				Ex.core.popup(	this,
        							'devprRegPop',
        							"fomm::FOMM1300_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('담당자 선택')
        							  ,  pSelType:'S'
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        	}
        };

        this.fnExportExcelCallback = function()
        {
        	// TODO: 기본 그리드로 돌아가고자함..
        	this.grdNoti.formatid = "default";
        	this.grdNoti.enableredraw = true;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboIssuStat.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDevNm.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.grdNoti.addEventHandler("oncellclick",this.grdNoti_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnIssuChk.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM1300_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
