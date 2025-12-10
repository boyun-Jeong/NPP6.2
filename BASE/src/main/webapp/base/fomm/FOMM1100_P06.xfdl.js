(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1100_P01");
            this.set_titletext("담당자변경");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveDel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkRst", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">전체</Col></Row><Row><Col id=\"CMM_CD\">SR</Col><Col id=\"CMM_CD_NM\">서비스요청</Col></Row><Row><Col id=\"CMM_CD\">CAT</Col><Col id=\"CMM_CD_NM\">요청서</Col></Row></Rows>");
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

            obj = new Button("btnChg",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","100","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:10","100","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staUserInfo00","20.00","20","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","54",null,"34","Static00_01_00_00:0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm","20.00","54","120","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사용자");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","44",null,"10","-10",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"100","425","24","Static00_01_00_00:0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","60","24","0",null,null,null,null,null,this.divContent.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divContent.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdNoti","20.00","staUserInfo:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
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
            obj._setContents("<Formats><Format id=\"excel01\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"중복여부\"/><Cell col=\"4\" text=\"서비스유형\"/><Cell col=\"5\" text=\"업무분류(대)명\"/><Cell col=\"6\" text=\"업무분류(중)명\"/><Cell col=\"7\" text=\"변경전 사번(ID)\"/><Cell col=\"8\" text=\"변경전 담당자명\"/><Cell col=\"9\" text=\"변경후 사번(ID)\"/><Cell col=\"10\" text=\"변경후 담당자명\"/><Cell col=\"11\" text=\"담당자\"/><Cell col=\"12\" text=\"현장대리인\"/><Cell col=\"13\" text=\"QA\"/><Cell col=\"14\" text=\"PL\"/><Cell col=\"15\" text=\"팀장\"/><Cell col=\"16\" text=\"부장\"/><Cell col=\"17\" text=\"기타\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:DUP_YN\"/><Cell col=\"4\" text=\"bind:SVC_CLSS_CD\" displaytype=\"combotext\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsSrType\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" edittype=\"none\" validation=\"서비스유형;NULL\"/><Cell col=\"5\" text=\"bind:BSE_LVL1_NM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:BSE_LVL2_NM\" expandshow=\"hide\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:OLD_STAFF_ID\" displaytype=\"normal\" edittype=\"none\" validation=\"사번(ID);NULL\"/><Cell col=\"8\" text=\"bind:OLD_STAFF_NM\"/><Cell col=\"9\" text=\"bind:STAFF_ID\" displaytype=\"normal\" edittype=\"none\" validation=\"사번(ID);NULL\"/><Cell col=\"10\" text=\"bind:STAFF_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:LVL1_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:LVL2_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:LVL3_STAFF_YN\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:LVL4_STAFF_YN\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:LVL5_STAFF_YN\"/><Cell col=\"16\" text=\"bind:LVL6_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:LVL7_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"none\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtNm","stcPrePlanNm:5","59","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyYn").set("N");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_displaynulltext("이름");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtType","edtNm:4","59","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyYn").set("N");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_displaynulltext("사번");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSearchUser","edtType:4","59","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.stcBg01","value","dsIvPrePlan","PRE_PLAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.edtNm","value","dsSelUser","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtType","value","dsSelUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1100_P06.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1100_P01
        * 화면(명)		︰ 서비스 담당자 신규등록
        * 메뉴(경로)	    ︰ 관리자 > 사용자권한관리 > 서비스별 담당자관리
        * 화면 설명	    ︰ 요청분류 조회
        * 작성자	    	︰ WEMB
        * 작성일	    	︰ 2025.02.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.12	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description

        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
        this.sysAdminYn = 'N';  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.

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
        	this.sysAdminYn = Ex.util.getSession('gvAdminYn');
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }


        // 중복체크
        this.fnChkChg = function()
        {
        	// transaction
        	var sTranId = "chkChg";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1100W/chkChg";            // 서비스명
            var sInDs = "dsData=dsData";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsChkRst=dsChkRst";       	// 서버에서 수신할 데이타셋
            var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "saveChg";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1100W/saveChg";            // 서비스명
            var sInDs = "dsData=dsData";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";       	// 서버에서 수신할 데이타셋
            var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs, objDsDel)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	var fRow = -1;
        	for(var i = objDs.rowcount-1; i >= 0; i--) {
        		fRow = objDsDel.findRow("BSE_LVL2_CD",objDs.getColumn(i,"BSE_LVL2_CD"));
        		if(fRow > -1) {
        			objDsDel.deleteRow(fRow);
        		}
        		objDs.setDeleteRow(i);
        	}

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
        		case "chkChg" :

        			var fRow = -1;
        			if(this.dsChkRst.rowcount > 0) {
        				for(var i=0; i<this.dsData.rowcount; i++) {
        					fRow = this.dsChkRst.findRow("BSE_LVL2_CD",this.dsData.getColumn(i,"BSE_LVL2_CD"));
        					if(fRow > -1) {
        						this.dsData.setColumn(i,"DUP_YN","Y");
        					} else {
        						this.dsData.setColumn(i,"DUP_YN","");
        					}
        				}
        			} else {
        				for(var i=0; i<this.dsData.rowcount; i++) {
        					this.dsData.setColumn(i,"DUP_YN","");
        				}
        			}
        			break;

        		case "saveChg" :
        			Ex.core.pclose(this, "_SAVE_SUSS");
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

        		case "selectUserPop" :
        			if(!Ex.isEmpty(varValue)) {
        				this.dsSelUser.loadXML(varValue);

        				for(var i=0; i<this.dsData.rowcount; i++) {
        					this.dsData.setColumn(i,"STAFF_ID",this.dsSelUser.getColumn(0,"USER_ID"));
        					this.dsData.setColumn(i,"STAFF_NM",this.dsSelUser.getColumn(0,"USER_NM"));
        				}

        				this.fnChkChg();
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
        		case "saveChgConfirm" :
        				this.fnSave();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContent.form.grdNoti.displayRowType();
        	this.divContent.form.grdNoti.enableredraw = false;
        	this.dsSaveDel.assign(this.getOwnerFrame().pOldDevprDs);
        	this.dsData.copyData(this.dsSaveDel);

        	this.dsData.addColumn("DUP_YN","string");
        	this.dsData.addColumn("OLD_STAFF_ID","string");
        	this.dsData.addColumn("OLD_STAFF_NM","string");

        	for(var i=0;i<this.dsData.rowcount;i++) {
        		this.dsData.setColumn(i,"OLD_STAFF_ID",this.dsData.getColumn(i,"STAFF_ID"));
        		this.dsData.setColumn(i,"OLD_STAFF_NM",this.dsData.getColumn(i,"STAFF_NM"));
        		this.dsData.setColumn(i,"STAFF_ID","");
        		this.dsData.setColumn(i,"STAFF_NM","");
        		this.dsData.setColumn(i,"ROWFLAG","I");
        		this.dsData.setColumn(i,"CHK","");
        	}

        	this.dsData.addColumn("DUP_YN","string");
        	this.divContent.form.grdNoti.enableredraw = true;
        }



        this.fnCheckValidate = function()
        {
        	if(this.dsData.rowcount == 0)
        	{
        		var param = {
        		    	id : "noChgAlert"
        		     , msg : "변경할 데이터가 없습니다."
        		     , arrparam : ['']
        		     , msgtype : "I"};
        	    Ex.core.alert(this, param);
        		return false;
        	}

        	var fRow = this.dsData.findRow("DUP_YN","Y");

        	if(fRow > -1) {
        			var param = {
        		    	id : "dupAlert"
        		      , msg : "이미 등록된 정보가 존재합니다.\n중복여부를 확인 하세요."
        		     , arrparam : ['']
        		     , msgtype : "I"};
        	    Ex.core.alert(this, param);
        		return false;
        	}

        	fRow = this.dsData.findRowExpr("Ex.isEmpty(STAFF_ID)");

        	if(fRow > -1) {
        			var param = {
        		    	id : "dupAlert"
        		      , msg : "변경할 사용자를 선택하세요."
        		     , arrparam : ['']
        		     , msgtype : "I"};
        			Ex.core.alert(this, param);
        			return false;
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

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnChg" :		// 변경

        			if(this.fnCheckValidate()) {
        				var param = {
        						id : "saveChgConfirm"
        					  , msg : "담당자를 변경 하시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnSearchUser" :

        			var pSelType = 'S';	// 'S' : single select || 'M' : multi select

        			if(this.sysAdminYn == "Y") {
        				Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택')
        							 , pSelType:pSelType
        							 },     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			} else {
        					Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택')
        							 , pSelType:pSelType
        							 , pDepYn:"Y"
        							 , pDepLock:"Y"
        							 },     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );

        			}
        			break;

        		case "btnDel" :
        			this.fnDelete(this.dsData,this.dsSaveDel);
        			break;
        	}
        }

        this.fnCommOncolumnchanged = function(obj,e)
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
            this.divBottom.form.btnChg.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdTopBtn.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdNoti.addEventHandler("oncellclick",this.grdNoti_oncellclick,this);
            this.divContent.form.btnSearchUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM1100_P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
